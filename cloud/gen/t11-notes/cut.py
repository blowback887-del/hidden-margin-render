import subprocess, json, sys, os
SRC = "/mnt/user-data/uploads/проекты ютуба/live-clips/"
OUT = "/home/claude/hidden-margin-render/public/broll/t11/"
# (num, name, file, from, to, credit, opts)
CL = [
 (136, "live-ad1974-box", "t11-01-bigmac-1974", 24.5, 29.5, "McDonald's Big Mac TV ad (1974), YouTube yEBCV0ic6Tc", {}),
 (137, "live-ad1974-logo", "t11-01-bigmac-1974", 52.0, 58.0, "McDonald's Big Mac TV ad (1974), YouTube yEBCV0ic6Tc", {}),
 (138, "live-ad1975-diners", "t11-02-bigmac-1975", 30.5, 36.0, "McDonald's Big Mac TV ad (1975), YouTube dK2qBbDn5W0", {"crop": 0.84}),
 (139, "live-ad1975-bun", "t11-02-bigmac-1975", 12.0, 16.0, "McDonald's Big Mac TV ad (1975), YouTube dK2qBbDn5W0", {"crop": 0.84}),
 (140, "live-ad1997-55c", "t11-03-ad-1997-55c", 2.0, 6.2, "McDonald's 55¢ Big Mac TV ad (1997), YouTube crM7BCmOouU", {"pillar": True}),
 (141, "live-ad1997-family", "t11-03-ad-1997-55c", 9.0, 12.0, "McDonald's 55¢ Big Mac TV ad (1997), YouTube crM7BCmOouU", {"pillar": True}),
 (142, "live-ap1997-signs", "t11-04-ap-1997-campaign55", 15.0, 21.0, "AP Archive (Feb 1997), YouTube Mgu93Qk4sFM", {"boxpad": (0.125, 0.16, 0.635, 0.84)}),
 (143, "live-ap1997-pay", "t11-04-ap-1997-campaign55", 96.0, 102.0, "AP Archive (Feb 1997), YouTube Mgu93Qk4sFM", {"boxpad": (0.125, 0.16, 0.635, 0.84)}),
 (144, "live-ap1997-floor", "t11-04-ap-1997-campaign55", 105.0, 112.0, "AP Archive (Feb 1997), YouTube Mgu93Qk4sFM", {"boxpad": (0.125, 0.16, 0.635, 0.84)}),
 (145, "live-fox5-18", "t11-05-18-bigmac-ct", 6.0, 12.0, "FOX 5 DC, YouTube aAVqXxwQJqc", {"blur": [(700, 115, 280, 100)], "bar": 0.915}),
 (146, "live-nn-darien", "t11-06-18-bigmac-revolt", 10.0, 18.0, "NewsNation, YouTube IdyH8nVqCE0", {"bar": 0.882}),
 (147, "live-nn-runaway", "t11-06-18-bigmac-revolt", 25.0, 32.0, "NewsNation, YouTube IdyH8nVqCE0", {"bar": 0.882}),
 (148, "live-nn-two-prices", "t11-06-18-bigmac-revolt", 133.0, 140.0, "NewsNation, YouTube IdyH8nVqCE0", {"bar": 0.882}),
 (149, "live-gma-5deal", "t11-07-gma-5-meal", 20.0, 26.0, "Good Morning America (ABC), YouTube AjZ6Jf4HNws", {}),
 (150, "live-gma-bargain", "t11-07-gma-5-meal", 56.0, 62.0, "Good Morning America (ABC), YouTube AjZ6Jf4HNws", {}),
 (151, "live-cbs-store", "t11-08-cbs-5-meal", 4.0, 7.4, "CBS News, YouTube h4FGDZQDD9I", {}),
 (152, "live-gma-slump", "t11-09-gma-2026-slowing", 20.0, 25.5, "Good Morning America (ABC), YouTube eyIzOhR3mAQ", {}),
 (153, "live-gma-under3", "t11-09-gma-2026-slowing", 32.0, 38.0, "Good Morning America (ABC), YouTube eyIzOhR3mAQ", {}),
 (154, "live-gma-kiosk", "t11-09-gma-2026-slowing", 42.0, 46.0, "Good Morning America (ABC), YouTube eyIzOhR3mAQ", {}),
 (155, "live-today-bigarch", "t11-10-today-2026-value", 4.0, 7.0, "TODAY (NBC), YouTube d3muDgq-dtU", {"box": (0, 0.02, 0.8, 0.8)}),
 (156, "live-today-under3", "t11-10-today-2026-value", 28.0, 32.0, "TODAY (NBC), YouTube d3muDgq-dtU", {"box": (0, 0.02, 0.8, 0.8)}),
 (157, "live-news-drivethru", "t11-11-news-under3", 15.0, 20.0, "Local TV news, YouTube z8yeXVkZDhQ", {}),
 (158, "live-news-store", "t11-11-news-under3", 20.5, 26.5, "Local TV news, YouTube z8yeXVkZDhQ", {}),
 (159, "live-news-delivery", "t11-12-news-under3-b", 19.5, 24.0, "WFAA ABC 8 Daybreak, YouTube yqZ3N0kVZHQ", {}),
 (160, "live-news-kiosk", "t11-12-news-under3-b", 10.0, 14.0, "WFAA ABC 8 Daybreak, YouTube yqZ3N0kVZHQ", {}),
 (161, "live-museum-15c", "t11-14-first-mcd-museum", 0.5, 7.5, "First McDonald's Museum walk-through, YouTube 0d9BDHtAeMM", {"box": (0, 0.3, 0.7, 0.7)}),
 (162, "live-museum-sign", "t11-14-first-mcd-museum", 8.0, 12.0, "First McDonald's Museum walk-through, YouTube 0d9BDHtAeMM", {}),
 (163, "live-museum-bag", "t11-14-first-mcd-museum", 128.0, 134.0, "First McDonald's Museum walk-through, YouTube 0d9BDHtAeMM", {"box": (0, 0.1, 0.62, 0.62)}),
]
only = set(sys.argv[1:])
meta = []
for n, name, f, a, b, cred, o in CL:
    full = f"{n:02d}-{name}"
    if only and str(n) not in only: meta.append((full, cred, a, b)); continue
    src = SRC + f + ".mp4"
    if not os.path.exists(src): print("MISSING", src); continue
    vf = []
    for (x, y, w, h) in o.get("blur", []):
        pass
    if o.get("blur"):
        # блюр прямоугольников в координатах исходника
        x, y, w, h = o["blur"][0]
        filt = f"[0:v]split[a][b];[b]crop={w}:{h}:{x}:{y},boxblur=20:3[bb];[a][bb]overlay={x}:{y},scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30"
    elif o.get("boxpad"):
        x, y, w, h = o["boxpad"]
        filt = f"[0:v]crop=iw*{w}:ih*{h}:iw*{x}:ih*{y},scale=-2:1080,pad=1920:1080:(ow-iw)/2:0:color=0x06262e,fps=30"
    elif o.get("box"):
        x, y, w, h = o["box"]
        filt = f"[0:v]crop=iw*{w}:ih*{h}:iw*{x}:ih*{y},scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30"
    elif o.get("crop"):
        filt = f"[0:v]crop=iw*{o['crop']}:ih*{o['crop']}:(iw-iw*{o['crop']})/2:0,scale=-2:1080,pad=1920:1080:(ow-iw)/2:0:color=0x06262e,fps=30"
    elif o.get("pillar"):
        filt = "[0:v]scale=-2:1080,pad=1920:1080:(ow-iw)/2:0:color=0x06262e,fps=30"
    else:
        filt = "[0:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30"
    if o.get("bar"):
        filt += f",drawbox=x=0:y=ih*{o['bar']}:w=iw:h=ih:color=0x042a34:t=fill"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(a), "-t", str(b - a), "-i", src, "-filter_complex", filt, "-an",
                    "-c:v", "libx264", "-preset", "veryfast", "-crf", "20", "-pix_fmt", "yuv420p", "-movflags", "+faststart", OUT + full + ".mp4"], check=True)
    def mmss(s): return f"{int(s//60)}:{s%60:04.1f}".replace(".0", "")
    print("ok", full)
    meta.append((full, cred, a, b))
json.dump([{"name": m[0], "local": True, "credit": f"{m[1]} {int(m[2]//60)}:{int(m[2]%60):02d}–{int(m[3]//60)}:{int(m[3]%60):02d}"} for m in meta], open("/home/claude/t11/work/live.json", "w"), indent=1, ensure_ascii=False)
