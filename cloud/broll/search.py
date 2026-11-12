"""Search Pixabay videos for a list of queries and build numbered contact sheets for picking.

Usage (GitHub Actions, secret PIXABAY_API_KEY): python3 cloud/broll/search.py cloud/broll/ep07-queries.json
Input:  {"ep": "ep07", "per_query": 4, "queries": ["supermarket aisle", ...]}
Output: public/research/<ep>-candidates.json  (list of {k, query, id, url, w, h, dur, tags, page})
        public/research/<ep>-cand-<n>.jpg     (contact sheets, 3 frames per candidate, label = k)
"""
import json, os, subprocess, sys, urllib.parse, urllib.request

cfg = json.load(open(sys.argv[1]))
ep, per = cfg["ep"], cfg.get("per_query", 4)
key = os.environ["PIXABAY_API_KEY"]
os.makedirs("public/research", exist_ok=True); os.makedirs("work/cand", exist_ok=True)

def run(c): subprocess.run(c, check=True)

cands, seen = [], set()
for q in cfg["queries"]:
    u = "https://pixabay.com/api/videos/?" + urllib.parse.urlencode(
        {"key": key, "q": q, "per_page": 30, "safesearch": "true", "order": "popular"})
    try:
        hits = json.load(urllib.request.urlopen(u, timeout=30)).get("hits", [])
    except Exception as e:
        print("search failed", q, e); continue
    n = 0
    for h in hits:
        v = h["videos"].get("large") or {}
        if not v.get("url") or v.get("width", 0) < 1920 or v.get("height", 0) < 1080 or h["id"] in seen:
            continue
        if v["width"] < v["height"]:
            continue
        seen.add(h["id"]); n += 1
        cands.append(dict(k=len(cands) + 1, query=q, id=h["id"], url=v["url"], w=v["width"], h=v["height"],
                          dur=h.get("duration"), tags=h.get("tags"), page=h.get("pageURL"),
                          tiny=(h["videos"].get("tiny") or h["videos"].get("small") or {}).get("url")))
        if n >= per: break
    print(q, "->", n)

json.dump(cands, open(f"public/research/{ep}-candidates.json", "w"), indent=1)

tiles = []
for c in cands:
    raw, t = f"work/cand/{c['k']}.mp4", f"work/cand/{c['k']}.jpg"
    try:
        run(["curl", "-sSfL", "-A", "Mozilla/5.0", "-o", raw, c["tiny"] or c["url"]])
        dur = float(c["dur"] or 6)
        pts = [max(0.3, dur * f) for f in (0.15, 0.5, 0.85)]
        sel = "+".join(f"between(t\\,{p:.2f}\\,{p+0.05:.2f})" for p in pts)
        run(["ffmpeg", "-y", "-v", "error", "-i", raw, "-vf",
             f"select='{sel}',scale=256:144,tile=3x1,"
             f"drawtext=text='{c['k']}':x=6:y=6:fontsize=30:fontcolor=yellow:box=1:boxcolor=black",
             "-frames:v", "1", "-vsync", "0", t])
        tiles.append(t)
    except Exception as e:
        print("sheet fail", c["k"], e)

# contact sheets: 2 candidates per row (6 frames), 12 rows per sheet
for s in range(0, len(tiles), 24):
    chunk = tiles[s:s + 24]
    with open("work/tiles.txt", "w") as f:
        for t in chunk: f.write(f"file '{os.path.abspath(t)}'\n")
    run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", "work/tiles.txt",
         "-vf", f"tile=2x{-(-len(chunk)//2)}", "-frames:v", "1", "-q:v", "4",
         f"public/research/{ep}-cand-{s//24 + 1}.jpg"])
print("candidates", len(cands), "sheets", -(-len(tiles)//24))
