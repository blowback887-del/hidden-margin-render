"""Download stock clips, normalise (1920x1080, 30fps, H.264, no audio, <= max_sec),
write a contact sheet (3 frames per clip) for visual vetting."""
import json, subprocess, sys, os
cfg = json.load(open(sys.argv[1])); os.makedirs(cfg["out"], exist_ok=True); os.makedirs("work/sheet", exist_ok=True)
def run(c): print("+", " ".join(c), flush=True); subprocess.run(c, check=True)
tiles = []
for c in cfg["clips"]:
    raw = f"work/{c['id']}.mp4"; dst = f"{cfg['out']}/{c['name']}.mp4"
    run(["curl", "-sSfL", "-A", "Mozilla/5.0", "-o", raw, c["url"]])
    run(["ffmpeg", "-y", "-v", "error", "-i", raw, "-t", str(cfg["max_sec"]), "-an",
         "-vf", "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30",
         "-c:v", "libx264", "-preset", "veryfast", "-crf", "22", "-pix_fmt", "yuv420p", "-movflags", "+faststart", dst])
    t = f"work/sheet/{c['name']}.jpg"
    run(["ffmpeg", "-y", "-v", "error", "-i", dst, "-vf",
         "select='eq(n\\,15)+eq(n\\,135)+eq(n\\,270)',scale=320:180,tile=3x1,"
         f"drawtext=text='{c['name'][:2]}':x=6:y=6:fontsize=28:fontcolor=yellow:box=1:boxcolor=black",
         "-frames:v", "1", "-vsync", "0", t])
    tiles.append(t)
with open("work/tiles.txt", "w") as f:
    for t in tiles: f.write(f"file '{os.path.abspath(t)}'\n")
run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", "work/tiles.txt",
     "-vf", "tile=3x16", "-frames:v", "1", "-q:v", "4", cfg["sheet"]])
