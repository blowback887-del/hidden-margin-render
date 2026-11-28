import glob, sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1], sys.argv[2]
fs = sorted(glob.glob(f"{src}/*.jpeg"), key=lambda f: int(f.split('-')[-1].split('.')[0]))
font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 20)
W, H, cols, per = 480, 270, 4, 20
for s in range(0, len(fs), per):
    ch = fs[s:s + per]; rows = (len(ch) + cols - 1) // cols
    im = Image.new('RGB', (W * cols, H * rows))
    for i, f in enumerate(ch):
        t = int(f.split('-')[-1].split('.')[0]) / 30
        x = Image.open(f).resize((W, H)); d = ImageDraw.Draw(x)
        d.rectangle((0, 0, 80, 26), fill='black'); d.text((4, 2), f"{int(t//60)}:{t%60:04.1f}", fill='yellow', font=font)
        im.paste(x, ((i % cols) * W, (i // cols) * H))
    im.save(f"{out}-{s//per}.jpg", quality=80)
