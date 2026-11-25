"""Download stock clips, normalise (1920x1080, 30fps, H.264, no audio, <= max_sec),
write a contact sheet (3 frames per clip) for visual vetting.
Any direct URL works: Pexels, Pixabay, Coverr, Mixkit, Wikimedia, archive.org — the source is chosen when searching.

"evidence" (17.11.2026): documents and screenshots for on-screen proof → public/evidence/<ep>/<name>.png + .json
  {"name": "ftc-order", "url": "https://...pdf", "page": 3, "find": ["junk fees", "drip pricing"]}       — PDF page at 200 dpi
  {"name": "menu", "url": "https://site/menu", "find": ["service fee"], "w": 1440, "h": 900, "hide": [".cookie"]}  — web page, 2x
  {"name": "x", "url": "https://site/a", "html": "public/research/snap/x.html", "find": [...]}  — saved copy of a page the server can't open
  {"name": "ad", "url": "https://.../ad.jpg", "type": "image"}                                            — picture as is
The .json holds the picture size and the box of every "find" phrase in picture pixels (cloud/gen/evid.py uses it).
Evidence-only configs are fine: "clips" may be empty."""
import json, subprocess, sys, os
cfg = json.load(open(sys.argv[1])); os.makedirs("work/sheet", exist_ok=True)
EP = os.path.splitext(os.path.basename(sys.argv[1]))[0]
cfg.setdefault("clips", []); cfg.setdefault("out", f"public/broll/{EP}"); cfg.setdefault("sheet", f"public/research/{EP}-sheet.jpg")
os.makedirs(cfg["out"], exist_ok=True); os.makedirs(os.path.dirname(cfg["sheet"]), exist_ok=True)
def run(c): print("+", " ".join(c), flush=True); subprocess.run(c, check=True)

# ---------- живые кадры через yt-dlp (25.11.2026) ----------
#  clips: {"name": "ad1", "src": "https://www.youtube.com/watch?v=...", "from": "1:12", "to": "1:19", "audio": false}
#         "src" — страница видео (YouTube, archive.org, C-SPAN, Vimeo…); качается только кусок from–to
#  probe: [{"name": "ad1", "src": "https://...", "every": 5}] — без монтажа: субтитры с таймкодами (.txt) и лист кадров
#         каждые N секунд с подписью времени → public/research/<ep>-probe/  (чтобы выбрать точные секунды)
YT = ["yt-dlp", "--no-playlist", "--no-warnings", "--retries", "5"]
if os.environ.get("YTDLP_COOKIES") and os.path.exists(os.environ["YTDLP_COOKIES"]): YT += ["--cookies", os.environ["YTDLP_COOKIES"]]
def sec(t):
    if isinstance(t, (int, float)): return float(t)
    p = [float(x) for x in str(t).split(":")]; s = 0
    for x in p: s = s * 60 + x
    return s
def ytdl_section(c):
    a, b = sec(c.get("from", 0)), sec(c["to"]) if c.get("to") is not None else None
    out = f"work/{c['name']}.src.%(ext)s"
    sect = ["--download-sections", f"*{a}-{b}", "--force-keyframes-at-cuts"] if b else []
    run(YT + ["-f", "bv*[height<=1080][ext=mp4]+ba[ext=m4a]/bv*[height<=1080]+ba/b[height<=1080]/b",
              "--merge-output-format", "mp4", *sect, "-o", out, c["src"]])
    got = [f for f in os.listdir("work") if f.startswith(f"{c['name']}.src.")]
    if not got: raise SystemExit(f"yt-dlp: nothing downloaded for {c['name']}")
    return f"work/{got[0]}"
def fmt(s): s = int(s); return f"{s // 60}:{s % 60:02d}"
def probe(p):
    d = f"public/research/{EP}-probe"; os.makedirs(d, exist_ok=True); n = p["name"]
    # 1) субтитры (свои или автоматические) → короткий текст «м:сс фраза»
    subprocess.run(YT + ["--skip-download", "--write-subs", "--write-auto-subs", "--sub-langs", "en.*,en", "--sub-format", "vtt",
                         "--write-info-json", "-o", f"work/probe-{n}.%(ext)s", p["src"]])
    vtt = sorted(f for f in os.listdir("work") if f.startswith(f"probe-{n}.") and f.endswith(".vtt"))
    lines, last = [], ""
    if vtt:
        cur = None
        for ln in open(f"work/{vtt[0]}", encoding="utf-8", errors="ignore"):
            ln = ln.strip()
            m = re.match(r"(\d+):(\d+):(\d+)\.\d+ -->", ln) or re.match(r"(\d+):(\d+)\.\d+ -->", ln)
            if m: g = [int(x) for x in m.groups()]; cur = (g[0] * 3600 + g[1] * 60 + g[2]) if len(g) == 3 else g[0] * 60 + g[1]; continue
            t = re.sub(r"<[^>]+>", "", ln).strip()
            if cur is not None and t and not t.startswith(("WEBVTT", "Kind:", "Language:")) and t != last:
                lines.append(f"{fmt(cur)}  {t}"); last = t
    info = {}
    inf = [f for f in os.listdir("work") if f.startswith(f"probe-{n}.") and f.endswith(".info.json")]
    if inf: j = json.load(open(f"work/{inf[0]}")); info = {k: j.get(k) for k in ("title", "channel", "uploader", "duration", "upload_date", "webpage_url")}
    open(f"{d}/{n}.txt", "w").write(json.dumps(info, ensure_ascii=False) + "\n\n" + ("\n".join(lines) or "(no subtitles)") + "\n")
    # 2) лист кадров: низкое качество целиком, кадр каждые N секунд с таймкодом
    every = p.get("every", 5); lo = f"work/probe-{n}-lo.mp4"
    subprocess.run(YT + ["-f", "bv*[height<=360]/b[height<=360]/wv*/w", "-o", lo, p["src"]] +
                   (["--download-sections", f"*{sec(p['from'])}-{sec(p['to'])}"] if p.get("to") else []))
    if os.path.exists(lo):
        off = sec(p.get("from", 0)) if p.get("to") else 0
        run(["ffmpeg", "-y", "-v", "error", "-i", lo, "-vf",
             f"fps=1/{every},scale=320:180:force_original_aspect_ratio=decrease,pad=320:180:(ow-iw)/2:(oh-ih)/2,"
             f"drawtext=text='%{{pts\\:hms\\:{off}}}':x=4:y=4:fontsize=18:fontcolor=yellow:box=1:boxcolor=black@0.7,tile=6x8",
             "-q:v", "4", f"{d}/{n}-%02d.jpg"])
    print(f"probe {n}: {len(lines)} subtitle lines, info: {info.get('title')}")

import re
for p in cfg.get("probe", []):
    try: probe(p)
    except Exception as ex: print(f"probe {p['name']}: FAILED — {ex}")
tiles = []
W, H = cfg.get("w", 1920), cfg.get("h", 1080)   # вертикаль: w 1080, h 1920
TW, TH = (320, 180) if W > H else (180, 320)
for c in cfg["clips"]:
    raw = f"work/{c.get('id', c['name'])}" + (".jpg" if c.get("photo") else ".mp4"); dst = f"{cfg['out']}/{c['name']}.mp4"
    if os.path.exists(dst) and not os.environ.get("REFETCH"): tiles.append(f"work/sheet/{c['name']}.jpg"); \
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", dst, "-vf", f"select='eq(n\\,15)+eq(n\\,135)+eq(n\\,270)',scale={TW}:{TH},tile=3x1", "-frames:v", "1", "-vsync", "0", tiles[-1]]); continue
    if c.get("src"):  # живые кадры: страница YouTube / archive.org / C-SPAN и т.п. → только нужный кусок
        try: raw = ytdl_section(c)
        except BaseException as ex: print(f"clip {c['name']}: FAILED — {ex}"); continue   # один упавший кусок не роняет набор
    else:
        run(["curl", "-sSfL", "-A", "Mozilla/5.0 (HiddenMarginBot; stock fetch)", "-o", raw, c["url"]])
    photo = ["-loop", "1", "-framerate", "30"] if c.get("photo") else []   # фото → неподвижный клип (наезд даёт Stock6)
    aud = ["-c:a", "aac", "-b:a", "160k", "-ar", "48000"] if c.get("audio") else ["-an"]   # "audio": true — оставить живой звук (реплика из рекламы)
    run(["ffmpeg", "-y", "-v", "error", *photo, "-i", raw, "-t", str(c.get("max_sec", cfg.get("max_sec", 12))), *aud,
         "-vf", f"scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},fps=30",
         "-c:v", "libx264", "-preset", "veryfast", "-crf", "22", "-pix_fmt", "yuv420p", "-movflags", "+faststart", dst])
    t = f"work/sheet/{c['name']}.jpg"
    run(["ffmpeg", "-y", "-v", "error", "-i", dst, "-vf",
         f"select='eq(n\\,15)+eq(n\\,135)+eq(n\\,270)',scale={TW}:{TH},tile=3x1,"
         f"drawtext=text='{c['name'][:2]}':x=6:y=6:fontsize=28:fontcolor=yellow:box=1:boxcolor=black",
         "-frames:v", "1", "-vsync", "0", t])
    tiles.append(t)
if tiles:
    with open("work/tiles.txt", "w") as f:
        for t in tiles: f.write(f"file '{os.path.abspath(t)}'\n")
    run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", "work/tiles.txt",
         "-vf", f"tile=3x{-(-len(tiles)//3)}", "-frames:v", "1", "-q:v", "4", cfg["sheet"]])

# звуковые эффекты (ссылки ElevenLabs) → public/sfx/<name>.wav
for x in cfg.get("sfx", []):
    run(["curl", "-sSfL", "-o", f"work/{x['name']}.mp3", x["url"]])
    os.makedirs("public/sfx", exist_ok=True)
    run(["ffmpeg", "-y", "-v", "error", "-i", f"work/{x['name']}.mp3", "-ar", "48000", "-ac", "2", f"public/sfx/{x['name']}.wav"])

# ---------- evidence: documents and screenshots with phrase boxes ----------
import re, html
norm = lambda w: re.sub(r"[^a-z0-9$%.']", "", w.lower().replace("’", "'")).strip(".")

def find_seq(words, phrase):
    """words: [(text, x0, y0, x1, y1)] → union box of the first run matching the phrase, or None"""
    q = [norm(t) for t in phrase.split() if norm(t)]
    n = [norm(w[0]) for w in words]
    for i in range(len(n) - len(q) + 1):
        if n[i:i + len(q)] == q:
            ws = words[i:i + len(q)]
            return [min(w[1] for w in ws), min(w[2] for w in ws), max(w[3] for w in ws), max(w[4] for w in ws)]
    return None

def png_size(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", path], capture_output=True, text=True, check=True).stdout
    w, h = out.strip().split(","); return int(w), int(h)

EV = cfg.get("evidence", [])
if EV:
    out = cfg.get("evidence_out", f"public/evidence/{EP}"); os.makedirs(out, exist_ok=True)
    marks = []
    for e in EV:
      try:
        kind = e.get("type") or ("pdf" if e["url"].lower().split("?")[0].endswith(".pdf") else "page")
        png = f"{out}/{e['name']}.png"; finds = {}; frame = "paper" if kind == "pdf" else "screen"
        if kind == "pdf":
            pdf = f"work/{e['name']}.pdf"; pg = str(e.get("page", 1)); dpi = e.get("dpi", 200)
            run(["curl", "-sSfL", "-A", "Mozilla/5.0 (compatible; research)", "-o", pdf, e["url"]])
            run(["pdftoppm", "-r", str(dpi), "-f", pg, "-l", pg, "-png", "-singlefile", pdf, png[:-4]])
            bb = subprocess.run(["pdftotext", "-bbox", "-f", pg, "-l", pg, pdf, "-"], capture_output=True, text=True, check=True).stdout
            k = dpi / 72
            words = [(html.unescape(m.group(5)), float(m.group(1)) * k, float(m.group(2)) * k, float(m.group(3)) * k, float(m.group(4)) * k)
                     for m in re.finditer(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">([^<]*)</word>', bb)]
            for ph in e.get("find", []):
                b = find_seq(words, ph)
                if b: finds[ph] = [round(b[0]), round(b[1]), round(b[2] - b[0]), round(b[3] - b[1])]
        elif kind == "page":
            w, h, dpr = e.get("w", 1440), e.get("h", 900), e.get("scale", 2)
            if "_pw" not in globals():
                from playwright.sync_api import sync_playwright
                _pw = sync_playwright().start(); _br = _pw.chromium.launch(); _pages = {}
            # "html": копия страницы из встроенного браузера (сайт закрыт для сервера капчей/проверкой) — тот же вид, без скриптов
            src = ("file://" + os.path.abspath(e["html"])) if e.get("html") else e["url"]
            key = (src, w, h, dpr)
            if key not in _pages:  # одна статья — одна загрузка на все её улики (T02: 22 улики из NPR)
                pg = _br.new_page(viewport={"width": w, "height": h}, device_scale_factor=dpr, user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36")
                try: pg.goto(src, wait_until="networkidle", timeout=25000)
                except Exception as ex:  # сайты с рекламой не затихают (NPR) — берём то, что загрузилось
                    print("goto: no networkidle, continuing:", str(ex).splitlines()[0]); pg.wait_for_timeout(4000)
                _pages[key] = pg
            pg = _pages[key]
            # сайты, которые блокируют прокрутку (окно cookies, overflow:hidden у html/body) — иначе фраза ниже экрана не находится (T05, Consumer Reports)
            pg.evaluate("() => { for (const el of [document.documentElement, document.body]) { el.style.setProperty('overflow', 'auto', 'important'); el.style.setProperty('height', 'auto', 'important'); } }")
            pg.evaluate("window.scrollTo(0, 0)")
            if True:
                for sel in e.get("hide", []):
                    pg.add_style_tag(content=f"{sel}{{display:none !important}}")
                first = e.get("find", [None])[0] if e.get("find") else None
                if first:  # первая фраза — на треть высоты экрана
                    loc = pg.get_by_text(first, exact=False).first
                    try:
                        bb0 = loc.bounding_box(timeout=8000)
                        if bb0: pg.evaluate(f"window.scrollBy(0, {bb0['y'] - h * 0.33})"); pg.wait_for_timeout(600)
                    except Exception as ex: print("scroll:", ex)
                for ph in e.get("find", []):
                    try:
                        b = pg.get_by_text(ph, exact=False).first.bounding_box(timeout=5000)
                        # фраза внутри длинного абзаца: сужаем до самих слов через Range
                        r = pg.evaluate("""(ph) => { const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
                          const low = ph.toLowerCase(); let n;
                          while ((n = w.nextNode())) { const i = n.textContent.toLowerCase().indexOf(low);
                            if (i >= 0) { const g = document.createRange(); g.setStart(n, i); g.setEnd(n, i + ph.length);
                              const q = g.getBoundingClientRect(); if (q.width > 0) return [q.x, q.y, q.width, q.height]; } } return null; }""", ph)
                        if r: b = {"x": r[0], "y": r[1], "width": r[2], "height": r[3]}
                        if b and 0 <= b["y"] < h: finds[ph] = [round(b["x"] * dpr), round(b["y"] * dpr), round(b["width"] * dpr), round(b["height"] * dpr)]
                    except Exception as ex: print("find", ph, ex)
                if e.get("declutter", True):  # всплывашки и реклама поверх текста (T02: окно «Now is your moment» у NPR)
                    pg.wait_for_timeout(1500)
                    pg.evaluate("""() => { for (const el of document.querySelectorAll('body *')) { const cs = getComputedStyle(el);
                      if ((cs.position === 'fixed' || cs.position === 'sticky') && el.tagName !== 'HTML') el.style.setProperty('visibility', 'hidden', 'important'); }
                      document.querySelectorAll('iframe, [role=dialog], [aria-modal=true], [id^=google_ads], [class*="ad-container"], [class*="ad-wrap"], .ad, aside').forEach(el => el.style.setProperty('visibility', 'hidden', 'important'));
                      document.documentElement.style.overflow = 'auto'; document.body.style.overflow = 'auto'; }""")
                    pg.wait_for_timeout(300)
                pg.screenshot(path=png)
        else:  # image
            raw = f"work/{e['name']}.img"
            run(["curl", "-sSfL", "-A", "Mozilla/5.0 (compatible; research)", "-o", raw, e["url"]])
            run(["ffmpeg", "-y", "-v", "error", "-i", raw, "-vf", "scale='min(2400,iw)':-2", "-frames:v", "1", png])
            frame = e.get("frame", "paper")
        W_, H_ = png_size(png)
        host = re.sub(r"^https?://(www\.)?", "", e["url"]).split("/")[0]
        json.dump({"size": [W_, H_], "url": e["url"], "host": host, "frame": frame, "finds": finds}, open(f"{out}/{e['name']}.json", "w"), indent=1)
        miss = [ph for ph in e.get("find", []) if ph not in finds]
        print(f"evidence {e['name']}: {W_}x{H_}, found {len(finds)}/{len(e.get('find', []))}" + (f", NOT FOUND: {miss}" if miss else ""))
        boxes = ",".join(f"drawbox=x={b[0]}:y={b[1]}:w={b[2]}:h={b[3]}:color=red@0.9:t=8" for b in finds.values())
        thumb = f"work/sheet/ev-{e['name']}.jpg"
        run(["ffmpeg", "-y", "-v", "error", "-i", png, "-vf", (boxes + "," if boxes else "") + "scale=640:900:force_original_aspect_ratio=decrease,pad=640:900:(ow-iw)/2:0:black", "-frames:v", "1", thumb])
        marks.append(thumb)
      except Exception as ex:  # одна упавшая улика не должна ронять весь набор (урок T02)
        print(f"evidence {e['name']}: FAILED — {str(ex).splitlines()[0] if str(ex) else ex}")
    with open("work/ev.txt", "w") as f:
        for t in marks: f.write(f"file '{os.path.abspath(t)}'\n")
    run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", "work/ev.txt", "-vf", f"tile={min(4, len(marks))}x{-(-len(marks)//4)}", "-frames:v", "1", "-q:v", "4", f"public/research/{EP}-evidence-sheet.jpg"])
