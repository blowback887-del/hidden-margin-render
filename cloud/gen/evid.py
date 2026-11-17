"""Улики в плане сцен одной строкой (17.11.2026).

fetch.py (раздел "evidence" в cloud/broll/<ep>.json) кладёт картинку и координаты фраз:
  public/evidence/<ep>/<name>.png  и  public/evidence/<ep>/<name>.json = {"size": [w, h], "url": ..., "finds": {"фраза": [x, y, w, h]}}

В плане cloud/gen/<ep>.py:
  from evid import ev
  dict(start="The FTC says", el=ev("t02", "ftc-order", marks=[("junk fees", "junk fees")], source="FTC · 2024"))
  — marks: (фраза в документе, фраза голоса, на которой подсветить) → маркер ложится ровно на слова документа
    в момент, когда голос произносит вторую фразу. frame="screen" — окно браузера (сайт, статья).
"""
import json, os

R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))


def _meta(ep, name):
    p = f"{R}/public/evidence/{ep}/{name}.json"
    if not os.path.exists(p):
        raise SystemExit(f"evidence not fetched: {p} (run Fetch stock with an 'evidence' entry named {name!r})")
    return json.load(open(p))


def ev(ep, name, marks=(), source=None, frame=None, zoom=None, focus=None, url=None):
    m = _meta(ep, name)
    w, h = m["size"]
    frame = frame or m.get("frame", "paper")
    js = []
    for doc_phrase, voice_phrase in marks:
        box = m["finds"].get(doc_phrase)
        if not box:
            raise SystemExit(f"{name}: phrase {doc_phrase!r} not found in document (found: {list(m['finds'])})")
        x, y, bw, bh = box
        js.append(f"{{ x: {x}, y: {y}, w: {bw}, h: {bh}, at: @{{{voice_phrase}}} }}")
    parts = [f'src="evidence/{ep}/{name}.png"', f"size={{[{w}, {h}]}}", "dur={DUR}", f'frame="{frame}"']
    if js: parts.append("marks={[" + ", ".join(js) + "]}")
    if focus: parts.append("focus={{ x: %d, y: %d, w: %d, h: %d }}" % tuple(m["finds"][focus] if isinstance(focus, str) else focus))
    if zoom: parts.append(f"zoom={{{zoom}}}")
    if source: parts.append(f'source="{source}"')
    if frame == "screen": parts.append(f'url="{url or m.get("host", "")}"')
    return "<Evidence " + " ".join(parts) + " />"
