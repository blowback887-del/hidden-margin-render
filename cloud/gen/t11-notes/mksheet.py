import glob, os, sys
from PIL import Image, ImageDraw, ImageFont
src, out, step, per = sys.argv[1], sys.argv[2], float(sys.argv[3]), int(sys.argv[4]) if len(sys.argv) > 4 else 40
off = float(sys.argv[5]) if len(sys.argv) > 5 else 0
fs = sorted(glob.glob(f"{src}/*.jpeg"), key=lambda f: int(f.split('-')[-1].split('.')[0]))
W, H, cols = 384, 216, 5
try: font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 18)
except Exception: font = None
for s in range(0, len(fs), per):
    chunk = fs[s:s + per]; rows = (len(chunk) + cols - 1) // cols
    im = Image.new('RGB', (W * cols, H * rows))
    for i, f in enumerate(chunk):
        t = off + (s + i) * step
        x = Image.open(f).resize((W, H)); d = ImageDraw.Draw(x)
        d.rectangle((0, 0, 70, 24), fill='black'); d.text((4, 2), f"{int(t//60)}:{t%60:04.1f}", fill='yellow', font=font)
        im.paste(x, ((i % cols) * W, (i // cols) * H))
    im.save(f"{out}-{s//per:02d}.jpg", quality=78)
print(len(fs))
