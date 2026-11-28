"""Локальная перекройка улик T11 (viewer-check-2): кадрирование по колонке статьи, закраска сайдбаров, склейка шапка+текст."""
import json, os, sys
from PIL import Image, ImageDraw
R = "/home/claude/hidden-margin-render/public/evidence/t11"; O = "/home/claude/t11/orig"
def load(name, orig=False):
    im = Image.open(f"{O if orig else R}/{name}.png").convert("RGB")
    m = json.load(open(f"{R}/{name}.json")) if os.path.exists(f"{R}/{name}.json") else {"finds": {}, "host": "", "url": "", "frame": "screen"}
    return im, m
def save(name, im, finds, base):
    im.save(f"{R}/{name}.png")
    json.dump({"size": list(im.size), "url": base["url"], "host": base["host"], "frame": base.get("frame", "screen"), "finds": finds}, open(f"{R}/{name}.json", "w"), indent=1)
    print(name, im.size, finds)
def shift(finds, dx, dy, keys=None, box=None):
    out = {}
    for k, (x, y, w, h) in finds.items():
        if keys and k not in keys: continue
        nx, ny = x - dx, y - dy
        if box and not (0 <= nx and nx + w <= box[0] and 0 <= ny and ny + h <= box[1]): continue
        out[k] = [nx, ny, w, h]
    return out
def crop(name, out, box, orig=False, paint=(), keys=None):
    im, m = load(name, orig)
    d = ImageDraw.Draw(im)
    for b in paint: d.rectangle(b, fill="white")
    c = im.crop(box)
    save(out, c, shift(m["finds"], box[0], box[1], keys, c.size), m)
def stack(out, parts, base, gap=40, pad=60, bg="white", left=False):
    """parts: [(name, box, orig, finds_keys)] → одна картинка сверху вниз, по центру"""
    ims = []
    for nm, box, orig, keys in parts:
        im, m = load(nm, orig); ims.append((im.crop(box), shift(m["finds"], box[0], box[1], keys, (box[2]-box[0], box[3]-box[1])) if keys else {}))
    W = max(i.size[0] for i, _ in ims) + 2 * pad; H = sum(i.size[1] for i, _ in ims) + gap * (len(ims) - 1) + 2 * pad
    canvas = Image.new("RGB", (W, H), bg); y = pad; finds = {}
    d = ImageDraw.Draw(canvas)
    for k, (i, f) in enumerate(ims):
        x = pad if left else (W - i.size[0]) // 2; canvas.paste(i, (x, y))
        for kk, (fx, fy, fw, fh) in f.items(): finds[kk] = [fx + x, fy + y, fw, fh]
        y += i.size[1]
        if k < len(ims) - 1:
            d.line((pad, y + gap // 2, W - pad, y + gap // 2), fill=(214, 214, 214), width=3)  # «…» разрыв между шапкой и текстом
            y += gap
    _, m = load(base)
    save(out, canvas, finds, m)

if __name__ == "__main__":
    # Ballotpedia: оригинал, закрасить весь сайдбар Public Policy, кадр по колонке
    crop("ballot-minwage", "ballot-v2", (440, 0, 2440, 980), orig=True, paint=[(1925, 190, 2400, 895)])
    # NBC Miami: убрать блок Local (трагедия) и рекламу, кадр по колонке
    crop("nbcmiami-bk", "nbcmiami-v2", (180, 0, 1800, 1460))
    # Newser: без верхней карусели
    crop("newser-mcdouble", "newser-v2", (360, 440, 1820, 1800))
    # NRN: шапка без серой заглушки; текст без сайдбара
    crop("nrn-bk-top", "nrn-top-v2", (330, 620, 2200, 1080), orig=True)
    crop("nrn-bk", "nrn-v2", (330, 0, 1800, 1250))
    # NBC News: только синий блок с заголовком
    crop("nbc-lowincome", "nbc-v2", (560, 390, 2720, 1040))
    # Fox: заголовок и подзаголовок без белой пустоты
    crop("fox-mcdouble-99", "fox-v2", (150, 230, 2650, 1020))
    # ABC7: метка + заголовок + подпись AP, без плеера и сайдбара с чужими новостями
    stack("abc7-v2", [("abc7-ai-top", (260, 380, 1760, 690), True, ["McDonald's sued"]), ("abc7-ai-top", (260, 1580, 1760, 1700), True, [])], "abc7-ai-top", gap=10)
    # Reuters через McSpotlight: подпись + дата + первые абзацы до строки с 55 cents
    crop("mcspot-reuters-feb97", "reuters-v2", (280, 0, 2620, 690))
    # LA Times через Las Vegas Sun: шапка (газета, заголовок, подпись LA Times) + абзацы про Мариам
    stack("latimes-v2", [("lvsun-latimes-top", (441, 60, 1780, 700), False, []), ("lvsun-latimes-top", (441, 1640, 1780, 1800), False, []),
                         ("lvsun-latimes", (440, 590, 1760, 1300), False, ["Gergis", "barely afford", "go hungry"])], "lvsun-latimes", gap=24)
    # Письмо Erlinger: логотип и меню сайта, заголовок, дата и строка «open letter from Joe Erlinger» + абзацы с $18 / $4.39 / 95%
    stack("letter-v2", [("mcd-letter-top", (250, 250, 1900, 440), False, []), ("mcd-letter-top", (250, 640, 2450, 880), False, []), ("mcd-letter-top", (250, 1090, 1500, 1300), False, []),
                        ("mcd-letter-95", (250, 270, 2620, 720), False, ["95%", "$4.39", "$5.29", "21%", "$18"])], "mcd-letter-95", gap=30, left=True)
    # history.com: шапка «This Day in History» + «1967 / Big Mac debuts / HISTORY.com Editors» + текст (без фото Getty и виджета)
    stack("history-v2", [("history-head", (560, 110, 2320, 400), False, []), ("history-head", (560, 470, 2320, 910), False, []),
                         ("history-bigmac", (560, 380, 2000, 1040), False, ["Uniontown", "45 cents", "Delligatti"])], "history-bigmac", gap=20)
    # NBC Miami: шапка сайта (без строки Trending) + заголовок, дата и текст до $1.29 (без блока Local)
    im, m = load("nbcmiami-head"); ImageDraw.Draw(im).rectangle((1395, 915, 1665, 1000), fill="white"); im.save("/tmp/nbcm.png")
    O_ = O; O = "/tmp"; os.rename("/tmp/nbcm.png", "/tmp/nbcmiami-head.png")
    stack("nbcmiami-v3", [("nbcmiami-head", (220, 110, 2420, 235), True, []), ("nbcmiami-head", (220, 360, 2420, 520), True, []), ("nbcmiami-head", (220, 560, 2700, 1800), True, ["$1.29", "Lawsuit Settled After BK"])], "nbcmiami-head", gap=0, pad=0)
    O = O_
