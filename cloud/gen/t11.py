# T11 «The Big Mac Costs the Same as 1968. So Why Can't You Afford It?» — план сцен (28.11.2026).
# Окраска: кинематографичная документалка, тёплая сепия на архиве; не ролик-злость. Голос несёт причины, кадр — доказательство.
# Визуальная идея (своя для выпуска): ТРИ СЕКУНДОМЕРА (src/brand/t11.tsx: Stopwatch/Watches) —
#   10 MIN (1968, средний рядовой работник) · 11 MIN (сегодня) · 51 MIN (федеральный минимум $7.25).
#   Третий размыт с PART 1 до разгадки в PART 9; в финале — «10 MIN / 51 MIN».
# Начало: холодный вход — 45¢ → $6.22 к 0:10, новости к 0:12, 10/11 MIN к 0:35, 78 % LendingTree к 0:45,
#   загадка 51 к ~0:55, вторая загадка (апрель 2026) к 1:05. Дальше — история: Юнионтаун 1967 → White Castle 1921 →
#   Сан-Бернардино 1948 → ценовые войны и Campaign 55 → Dollar Menu → McDouble/иск BK → Мариам (LA Times) → куда идут $10 →
#   издержки и письмо Erlinger → РАЗГАДКА 51 → кто ушёл и три ловушки → McValue 2026 и «One menu. Two Americas» → 4 хода.
# Живые кадры (решение Павла 28.11: много реального, риск Content ID принят): реклама Big Mac 1974/1975, реклама 55¢ 1997,
#   AP Archive 1997, FOX 5 и NewsNation ($18 Big Mac), GMA ×3, CBS, TODAY ×2, местные новости ×4, музей первого McDonald's.
#   Без их звука, всегда с нашим голосом. Источники — поле credit в cloud/broll/t11.json.
# Формулировки фактчекера не менять: иски по картошке и ИИ-ценам — ALLEGED / ALLEGATION; 1968 — $3.02/ч (BLS),
#   «about three dollars»; Big Mac 1968 ≈ 49¢; $32.75 — октябрь 2026; LendingTree 21.2 / 46.0 мин; ~95 % франчайзи.
import json, os, re
from evid import ev

EP = dict(
    comp="T11BigMac",
    words="src/videos/t11-bigmac-words.json",
    text="cloud/voice/t11-text",
    parts=11,
    broll="cloud/broll/t11.json",
    audio="audio/t11-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03", "t07", "t08", "t11"],
    music=[],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t11.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t11-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

C2, C3, C4, C5, C6x = (2, "How Cheap Was Invented"), (3, "The Machine"), (4, "Price Wars"), (5, "The Dollar"), (6, "The Squeeze")
C7, C8, C9, C10, C11 = (7, "Follow the Money"), (8, "The Costs"), (9, "The Number"), (10, "Who Left"), (11, "The Way Back")
_EVD = f"{_R}/public/evidence/t11"
ILL = "ILLUSTRATIVE FOOTAGE"


def has(name, phrase=None):
    p = f"{_EVD}/{name}.json"
    if not os.path.exists(p) or not os.path.exists(f"{_EVD}/{name}.png"): return False
    return phrase is None or phrase in json.load(open(p))["finds"]


def doc(name, marks=(), source=None, fb="", **kw):
    """улика, если скачалась и фразы найдены; иначе запасной el (fb)"""
    if not has(name) or any(not has(name, d) for d, _ in marks): return fb
    kw.setdefault("zoom", 0.9)  # урок T02: не загонять камеру в голый текст
    top = name.rsplit("-", 1)[0] + "-top"
    if not name.endswith("-top") and "inset" not in kw and has(top): kw["inset"] = top
    if not kw.get("inset"): kw.pop("inset", None)
    return ev("t11", name, marks=list(marks), source=source, **kw)


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}-0.3}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


def src(text, at="0.3"):
    return f"<Source6 at={{{at}}}>{text}</Source6>"


def quote(text, who, at="0.3", size=84, hl=None, y=440):
    h = json.dumps(hl or [])
    return f'<Center y={{{y}}}><Words text={json.dumps(text, ensure_ascii=False)} at={{{at}}} size={{{size}}} maxW={{1500}} hl={{{h}}} /></Center>' + \
        f'<Center y={{{y + 250}}}><Label6 at={{{at}}} size={{28}} color={{C6.mint}}>{who}</Label6></Center>'


def words(text, at="0.1", size=120, hl=None, y=470):
    return f'<Center y={{{y}}}><Words text={json.dumps(text, ensure_ascii=False)} at={{{at}}} size={{{size}}} maxW={{1600}} hl={{{json.dumps(hl or [])}}} /></Center>'


def _js(v):
    if isinstance(v, bool): return "true" if v else "false"
    if isinstance(v, (int, float)): return str(v)
    if isinstance(v, str) and (v.startswith("@{") or re.fullmatch(r"[\d.]+", v) or v.startswith("C6.")): return v
    return json.dumps(v, ensure_ascii=False)


def w(minutes, label, sub=None, **o):
    d = dict(min=minutes, label=label, **({"sub": sub} if sub else {}), **o)
    return "{ " + ", ".join(f"{k}: {json.dumps(v, ensure_ascii=False) if k in ('label', 'sub') else _js(v)}" for k, v in d.items()) + " }"


def watches(items, size=360, gap=110, note=None, noteAt=None, y=470):
    n = f' note={json.dumps(note, ensure_ascii=False)}' if note else ""
    na = f" noteAt={{{noteAt}}}" if noteAt else ""
    return f"<Center y={{{y}}}><Watches size={{{size}}} gap={{{gap}}}{n}{na} items={{[{', '.join(items)}]}} /></Center>"


# три секундомера в «спокойном» виде: 10 и 11 стоят, 51 размыт со знаком вопроса
W68 = lambda **o: w(10, "1968", "AVERAGE WORKER", **{"still": True, **o})
W26 = lambda **o: w(11, "2026", "AVERAGE WORKER", **{"still": True, **o})
WMIN = lambda **o: w(51, "$7.25/HR", "FEDERAL MINIMUM", **{"still": True, "blurred": True, "q": True, "color": "C6.loss", **o})


def ten(at="0.05", times=("0.05", "0.05", "0.05", "0.05"), growAt=None, hlLast=None, note=None, noteAt=None):
    st = [("FOOD & PAPER · 31%", "~$3.00", 31), ("PEOPLE · 30%", "~$3.00", 30), ("BUILDING & EVERYTHING ELSE · 24%", "~$2.40", 24), ("LEFT · 15%", "~$1.50", 15)]
    s = ", ".join(f'{{ label: "{l}", value: "{v}", pct: {p}, at: {t} }}' for (l, v, p), t in zip(st, times))
    g = f" growAt={{{growAt}}}" if growAt else ""
    h = f" hlLast={{{hlLast}}}" if hlLast else ""
    n = f' note="{note}"' if note else ""
    na = f" noteAt={{{noteAt}}}" if noteAt else ""
    return f"<Center y={{{560}}}><TenSplit at={{{at}}} w={{1500}}{g}{h}{n}{na} stacks={{[{s}]}} /></Center>"


def stamp(text, at, x=1480, y=820, color="C6.loss", size=72):
    return f'<Center x={{{x}}} y={{{y}}}><Stamp at={{{at}}} text="{text}" color={{{color}}} size={{{size}}} /></Center>'


S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД =======================
dict(start="When this sandwich was invented", stock=K("live-ad1974-box"), clean=True, archive=True, alt=(K("r-big-mac-meal"), "Today, the average Big Mac"), sfx=[('ep06-coin:0.25', '@{forty-five cents}'), ('swoosh:0.3', '@{costs six dollars}'), ('ep06-kaching:0.3', '@{twenty-two cents}')],
     el='<Center x={1440} y={430}><PriceFlip at={@{forty-five cents}} from="45¢" to="$6.22" flipAt={@{costs six dollars}} fromNote="1967" toNote="U.S. AVERAGE · JULY 2026" w={560} /></Center>' + src("McDonald's TV ad · 1974", "0.3") + src("The Economist · Big Mac Index, July 2026", "@{Today, the average}")),
dict(start="That sounds like robbery", stock=K("live-nn-runaway"), clean=True, alt=(K("live-fox5-18"), "all over social media"), sfx=[],
     el=src("Footage: NewsNation · FOX 5 DC", "0.3")),
dict(start="But try measuring it a different way", stock=K("clock-hands"), sfx=[('tick:0.3', '@{In minutes of work}')],
     el=plate("NOT IN DOLLARS", "@{Not in dollars}", y=880, size=48, out="@{In minutes of work}") + plate("IN MINUTES OF WORK", "@{In minutes of work}", y=880, size=48, color="C6.accent")),
dict(start="In 1968, the year the Big Mac went national", stock=K("wm-mcd-1967"), archive=True, dim=0.55, sfx=[('tick:0.3', '@{about ten minutes}')],
     el=plate("1968 · A REGULAR AMERICAN WORKER", "0.1", y=880, size=36, out="@{about ten minutes}") + watches([w(10, "1968", "AVERAGE WORKER", at="@{about ten minutes}", spinAt="@{about ten minutes}", spin=1.2)], size=520, y=470) + src("Photo: railfan 44 · public domain (a McDonald's, 1967)", "0.3")),
dict(start="Today? About eleven", stock=K("r-thruway-drive-thru"), dim=0.6, sfx=[('tick:0.3', '@{About eleven}')],
     el=watches([W68(at=0.05), w(11, "2026", "AVERAGE WORKER", at=0.05, spinAt="@{About eleven}", spin=1.2)], size=500, note="MEASURED IN WORK: ALMOST THE SAME PRICE", noteAt="@{Measured in work}") + src("Photo: Andre Carrotflower · CC BY-SA 4.0 (New York State Thruway)", "0.3")),
dict(start="I'll show you exactly where those numbers", stock=K("r-burger-bite"), sfx=[], el=plate("WHERE THESE NUMBERS COME FROM · LATER IN THE VIDEO", "0.2", y=880, size=36)),
dict(start="So why did seventy-eight percent", stock=K("cafe-counter-line"), sfx=[('ep06-counter:0.3', '@{seventy-eight percent}')],
     el='<Center x={1500} y={820}><BigNum at={@{seventy-eight percent}} size={150} label="CALL FAST FOOD A LUXURY NOW">78%</BigNum></Center>' + src("LendingTree survey · 2024 · illustrative footage", "0.3")),
dict(start="Because there's a third number on this stopwatch", stock=K("r-ct-manchester"), alt=(K("r-town-aerial-twilight"), "Somebody in America"), dim=0.62, sfx=[('tick:0.3', '@{Fifty-one. Somebody}'), ('impact:0.3', '@{Somebody in America}')],
     el=watches([W68(at=0.05), W26(at=0.05), w(51, "Somebody", "WHO?", at="@{a third number}", spinAt="@{Fifty-one. Somebody}", spin=2.0, redAt="@{Somebody in America}", blurAt="@{By the end of this video}", q=True, color="C6.loss")], size=430, gap=90) + src("Photo: JJBers · CC BY 2.0 (Manchester, CT)", "0.3")),
dict(start="And there's a second mystery", alt=(K("live-cbs-store"), "That one tells you"), stock=K("r-menu-board-cc0"), dim=0.3, sfx=[('ep06-pop:0.25', '@{thirteen years ago}')],
     el=plate("APRIL 2026 · SOMETHING IT GAVE UP 13 YEARS AGO", "@{In April of this year}", y=880, size=38, color="C6.accent") + '<Center y={420}><In at={@{thirteen years ago}} from="zoom"><Num6 size={260}>?</Num6></In></Center>'),
dict(start="To get there, we start where the Big Mac started", stock=K("wm-uniontown"), sfx=[],
     el=plate("UNIONTOWN, PENNSYLVANIA · 1967", "@{Uniontown}", y=880, size=44) + src("Photo: WeaponizingArchitecture · CC BY-SA 4.0 (Uniontown today)", "0.4")),
dict(start="The night shift is letting out", stock=K("wm-homestead-night"), alt=(K("grinder-sparks"), "And as the story goes"), sfx=[],
     el=plate("AS THE STORY GOES", "@{And as the story goes}", y=900, size=32) + src("Photo: DanielPenfield · CC BY-SA 4.0 (Pennsylvania steel stacks)", "0.4")),
dict(start="A McDonald's. The problem", stock=K("town-dusk"), sfx=[], el=""),
dict(start="The problem is the hamburger", stock=K("live-ad1975-bun"), clean=True, archive=True, alt=(K("furnace-sparks"), "for a man who just spent"), sfx=[],
     el=plate("SMALL. CHEAP. FAST.", "@{It's small}", y=880, size=46, out="@{for a man who just spent}") + plate("8 HOURS NEXT TO A FURNACE", "@{eight hours next to a furnace}", y=880, size=44, color="C6.accent")),
dict(start="The guy who owns this McDonald's", sfx=[('t02-paper:0.3', '0.05')],
     el=doc("history-bigmac", [("Delligatti", "Jim Delligatti")], source="HISTORY.COM · BIG MAC INTRODUCED", inset=None, zoom=0.75,
            fb=plate("JIM DELLIGATTI · FRANCHISE OWNER", "0.3", y=880))),
dict(start="A bigger sandwich", alt=(K("live-ad1974-logo"), "A third piece of bun"), stock=K("wm-bigmac"), dim=0.15, sfx=[('ep06-pop:0.22', '@{Two patties}'), ('ep06-pop:0.22', '@{A special sauce}'), ('ep06-pop:0.22', '@{A third piece of bun}')],
     el=plate("TWO PATTIES", "@{Two patties}", y=960, size=44, out="@{A special sauce}") + plate("SPECIAL SAUCE", "@{A special sauce}", y=960, size=44, out="@{A third piece of bun}") +
        plate("A THIRD PIECE OF BUN IN THE MIDDLE", "@{A third piece of bun}", y=960, size=44, color="C6.accent") + src("Photo: Evan-Amos · CC0", "0.4")),
dict(start="Corporate doesn't love it", stock=K("r-meeting"), sfx=[],
     el=plate("CORPORATE: “WHY MESS WITH IT?”", "@{Why mess with it}", y=880, size=42)),
dict(start="Delligatti spends about two years asking", stock=K("vintage-suburb"), archive=True, sfx=[('ding:0.25', '@{Finally}')],
     el=plate("~2 YEARS OF ASKING", "0.2", y=880, size=44, out="@{Finally}") + plate("A TEST IN ONE TOWN", "@{Finally}", y=880, size=44, color="C6.accent")),
dict(start="He calls it the Big Mac", stock=K("live-ad1974-box"), clean=True, archive=True, sfx=[('ep06-coin:0.25', '@{Forty-five cents}')],
     el=plate("BIG MAC · 45¢", "@{Forty-five cents}", y=880, size=56, color="C6.accent", out="@{Sales at his restaurant}") + plate("SALES JUMP", "@{Sales at his restaurant}", y=880, size=48) + src("McDonald's TV ad · 1974", "0.3")),
dict(start="A year later, it's on every McDonald's menu", stock=K("wm-mcd-1967"), archive=True, sfx=[],
     el=plate("1968 · ON EVERY McDONALD'S MENU", "0.2", y=880, size=44) + src("Photo: railfan 44 · public domain (1967)", "0.3")),
dict(start="He built it for men who worked hard", stock=K("steel-hyperlapse"), sfx=[],
     el=plate("MEN WHO WORKED HARD AND COUNTED THEIR CHANGE", "0.2", y=880, size=38)),
dict(start="The story of that fifty-one", sfx=[],
     el=watches([W68(at=0.05), W26(at=0.05), WMIN(at=0.05)], size=430, gap=90, note="WHO CHEAP FOOD WAS MADE FOR", noteAt="@{who cheap food was made for}")),

# ======================= PART 2 · ГЛАВА 2 · КАК ПРИДУМАЛИ ДЁШЕВО =======================
dict(start="College kid with five bucks", tag=C2, hard=True, stock=K("counting-pennies"), alt=(K("eating-alone-car"), "Guy eating lunch"), sfx=[('ep06-whoosh:0.2', '0.05')], el=""),
dict(start="A parent feeding three kids", tag=C2, stock=K("r-family-minivan"), alt=(K("mom-snacks"), "because nobody had the energy"), sfx=[], el=""),
dict(start="Or you just remember a Big Mac", tag=C2, stock=K("old-man-paper"), sfx=[],
     el=plate("A BIG MAC FOR UNDER A DOLLAR", "@{for under a dollar}", y=880, size=42)),
dict(start="Either way, this one's about you", tag=C2, stock=K("r-boys-eating"), sfx=[], el=""),
dict(start="Now, there's an easy answer", tag=C2, stock=K("r-boardroom"), sfx=[('impact:0.3', '@{Greed}')],
     el='<Center y={440}><Stamp at={@{Greed}} text="GREED?" size={110} /></Center>'),
dict(start="Some guy in a boardroom", alt=(K("man-meh"), "And look"), tag=C2, stock=K("podium"), sfx=[],
     el=plate("NOT TOTALLY WRONG. WE'LL GET THERE.", "@{that's not totally wrong}", y=880, size=40)),
dict(start="Cheap food didn't just happen", tag=C2, sfx=[('rise:0.25', '@{It was invented}')],
     el=words("Cheap food was invented.", at="0.1", size=110, y=420) + words("On purpose.", at="@{on purpose}", size=110, hl=["purpose."], y=560)),
dict(start="for guys like the ones at that steel mill", tag=C2, stock=K("grinder-sparks"), sfx=[], el=""),
dict(start="Wichita, Kansas", tag=C2, sfx=[],
     el=words("Wichita, Kansas · 1921", at="0.05", size=110, hl=["1921"], y=470)),
dict(start="A cook named Walter Anderson", tag=C2, stock=K("wm-white-castle-8"), sfx=[],
     el=plate("WALTER ANDERSON + BILLY INGRAM", "0.2", y=880, size=40, out="@{A white castle}") + plate("A WHITE CASTLE", "@{A white castle}", y=880, size=48, color="C6.accent") + src("A 1936 White Castle building, Minneapolis · Photo: McGhiever · CC BY-SA 4.0", "0.3")),
dict(start="They have a problem nobody today", tag=C2, stock=K("raw-meat"), alt=(K("ground-beef"), "Americans are scared of hamburger"), sfx=[],
     el=plate("AMERICANS WERE SCARED OF HAMBURGER", "@{Americans are scared of hamburger}", y=880, size=42, color="C6.accent")),
dict(start="Back in 1906, a novel called The Jungle", tag=C2, sfx=[('t02-paper:0.3', '0.05')],
     el=('<div style={{ position: "absolute", inset: 0, translate: "-380px 0" }}>' + doc("jungle-1906", [], source=None, fb="") + '</div>' +
        '<Center x={1450} y={430}><In at={0.2} from="fade"><Num6 size={190}>1906</Num6></In></Center>' + plate("CHICAGO'S MEATPACKING PLANTS", "0.5", x=1450, y=600, size=28) + src("THE JUNGLE · UPTON SINCLAIR · 1906 · PUBLIC DOMAIN", "0.3")) if has("jungle-1906") else "", stock=None if has("jungle-1906") else K("wm-stockyards-1909"), archive=not has("jungle-1906")),
dict(start="And ground beef got a reputation", tag=C2, stock=K("wm-stockyards-1905"), archive=True, sfx=[],
     el=src("Chicago stockyards, 1905 · public domain", "0.3")),
dict(start="So White Castle doesn't just sell hamburgers", tag=C2, stock=K("wm-white-castle-8"), dim=0.6, sfx=[('ding:0.25', '@{It sells trust}')],
     el=plate("WHITE CASTLE DIDN'T JUST SELL HAMBURGERS", "0.05", y=430, size=40, out="@{It sells trust}") + words("It sells trust.", at="@{It sells trust}", size=150, hl=["trust."], y=430) + plate("WHITE = CLEAN", "@{The building is white}", y=740, size=40, color="C6.accent")),
dict(start="The beef is ground right in front of you", tag=C2, stock=K("grill-flames"), sfx=[], el=""),
dict(start="And Billy Ingram even paid for a study", tag=C2, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("el-hai-wc", [("13 weeks", "thirteen weeks")], source="JACK EL-HAI · “13 WEEKS EATING NOTHING BUT WHITE CASTLE”", inset=None,
            fb=plate("13 WEEKS · ONLY WHITE CASTLE AND WATER", "@{thirteen weeks}"))),
dict(start="The price? Five cents", tag=C2, stock=K("burger-wrapper"), dim=0.6, sfx=[('ep06-coin:0.3', '@{Five cents}')],
     el=plate("THE PRICE?", "0.05", y=430, size=44, out="@{Five cents}") + '<Center y={430}><BigNum at={@{Five cents}} size={260} label="A WHITE CASTLE HAMBURGER · 1921">5¢</BigNum></Center>' + plate("“BUY 'EM BY THE SACK”", "@{Buy them by the sack}", y=800, size=40, color="C6.accent")),
dict(start="This was food for factory workers", tag=C2, stock=K("wm-shift-1942"), archive=True, alt=(K("wm-shift-1942b"), "and people who counted"), sfx=[],
     el=src("Shift workers, 1943 · Marjory Collins, Library of Congress · public domain", "0.3")),
dict(start="Cheap food was never charity", tag=C2, sfx=[],
     el=words("Not charity. A promise.", at="0.1", size=130, hl=["promise."], y=420) + plate("YOU CAN TRUST THIS · YOU CAN AFFORD THIS", "@{You can trust this}", y=740, size=38, color="C6.accent")),
dict(start="And that promise was about to get very", tag=C2, stock=K("r-midnight-lineup"), sfx=[], el=src("Photo: Andre Carrotflower · CC BY-SA 4.0", "0.3")),

# ======================= PART 3 · ГЛАВА 3 · МАШИНА =======================
dict(start="San Bernardino, California", tag=C3, hard=True, stock=K("vintage-family-car"), alt=(K("wm-downey-loc"), "Two brothers"), archive=True, sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("SAN BERNARDINO, CALIFORNIA · 1948", "0.2", y=880, size=42, out="@{Two brothers}") + plate("DICK & MAC McDONALD · A DRIVE-IN THAT'S DOING WELL", "@{Two brothers}", y=880, size=38) + src("Archive footage (illustrative)", "0.3")),
dict(start="Carhops bring food out to your car", tag=C3, stock=K("r-archive-minneapolis-1937"), archive=True, sfx=[],
     el=plate("CARHOPS · A LONG MENU · BARBECUE", "0.2", y=880, size=38) + src("Archive photo, Minneapolis, 1937 · public domain (illustrative)", "0.3")),
dict(start="And then they do something that looks completely insane", tag=C3, stock=K("live-museum-15c"), dim=0.55, sfx=[('ep06-stamp:0.35', '@{They shut it down}')],
     el=plate("SOMETHING THAT LOOKED INSANE", "0.05", y=430, size=42, out="@{They shut it down}") + '<Center y={430}><Stamp at={@{They shut it down}} text="CLOSED" size={130} /></Center>' + plate("FOR THREE MONTHS", "@{For three months}", y=760, size=44, color="C6.accent")),
dict(start="When they reopen, the carhops are gone", tag=C3, stock=K("crt-tv"), dim=0.65, sfx=[('ep06-scratch:0.25', '@{The menu goes from}')],
     el="<Center y={500}><MenuShrink at={0.1} cutAt={@{to nine}} /></Center>"),
dict(start="Paper wrappers instead of plates", tag=C3, stock=K("r-paper-bag"), alt=(K("wm-mcd-museum"), "And the hamburger costs fifteen cents"), archive=True, sfx=[('ep06-coin:0.25', '@{fifteen cents}')],
     el=plate("PAPER WRAPPERS · NO TIPPING", "0.2", y=880, size=40, out="@{And the hamburger costs}") + plate("15¢ HAMBURGER · ABOUT HALF THE OLD PRICE", "@{fifteen cents}", y=880, size=40, color="C6.accent") + src("1955-style replica · Photo: Bruce Marlin · CC BY-SA 2.5", "@{And the hamburger costs}")),
dict(start="They redesigned the kitchen like a factory line", tag=C3, stock=K("tennis-aerial"), alt=(K("tennis-empty"), "and walked their crew"), sfx=[],
     el=plate("AS THE STORY GOES: CHALK ON A TENNIS COURT", "@{they drew it out}", y=880, size=38)),
dict(start="Every worker had one job", tag=C3, stock=K("r-frying"), sfx=[('ding:0.25', '@{Speedee Service System}')],
     el=plate("ONE WORKER · ONE JOB", "0.2", y=880, size=42, out="@{They called it}") + plate("THE SPEEDEE SERVICE SYSTEM", "@{They called it}", y=880, size=44, color="C6.accent")),
dict(start="At first, it flopped", tag=C3, stock=K("dt-empty"), sfx=[('ep06-fall:0.25', '@{Profits dropped}')],
     el=plate("PROFITS DROPPED", "@{Profits dropped}", y=880, size=44, out="@{The carhops they'd let go}") + plate("THE FIRED CARHOPS CAME BY TO LAUGH", "@{The carhops they'd let go}", y=880, size=40)),
dict(start="And then it took off", tag=C3, stock=K("r-archive-mcd"), archive=True, sfx=[('ep06-pop:0.22', '@{Families showed up}'), ('ep06-pop:0.22', '@{Working people}'), ('ep06-pop:0.22', '@{Kids with pocket change}')],
     el=plate("FAMILIES", "@{Families showed up}", y=880, size=46, out="@{Working people}") + plate("WORKING PEOPLE", "@{Working people}", y=880, size=46, out="@{Kids with pocket change}") + plate("KIDS WITH POCKET CHANGE", "@{Kids with pocket change}", y=880, size=46, color="C6.accent") + src("Photo: David E. Lucas · public domain", "0.3")),
dict(start="Dick McDonald later put the whole idea", tag=C3, stock=K("live-museum-bag"), archive=True, dim=0.6, sfx=[('t02-paper:0.25', '0.05')],
     el=plate("DICK McDONALD, IN ONE LINE", "0.05", y=440, size=40, out="@{Our whole concept}") + quote("“Our whole concept was based on speed, lower prices, and volume.”", "DICK McDONALD", at="@{Our whole concept}", size=86, hl=["speed,", "prices,", "volume.”"])),
dict(start="That's the machine", tag=C3, stock=K("grill-burgers"), dim=0.72, sfx=[('ep06-pop:0.22', '@{The lower the price}'), ('ep06-pop:0.22', '@{the bigger the crowd}'), ('ding:0.25', '@{the cheaper you can make it}')],
     el=plate("THAT'S THE MACHINE", "0.05", y=110, size=36, color="C6.accent") + '<Center y={560}><Flywheel r={330} steps={[{ word: "LOWER PRICE", at: @{The lower the price} }, { word: "BIGGER CROWD", at: @{the bigger the crowd} }, { word: "CHEAPER TO MAKE", at: @{the cheaper you can make it} }]} /></Center>'),
dict(start="Then a milkshake machine salesman", alt=(K("wm-mcd-hq"), "and turns it into an empire"), tag=C3, stock=K("wm-downey"), sfx=[],
     el=plate("RAY KROC · MILKSHAKE MACHINE SALESMAN", "0.3", y=880, size=38, out="@{and turns it into an empire}") + plate("…TURNS IT INTO AN EMPIRE", "@{and turns it into an empire}", y=880, size=42, color="C6.accent") + src("Photos: Northwalker · CC0 (Downey, CA) · Rob LaRosa · CC BY-SA 2.0 (HQ, Oak Brook)", "0.4")),
dict(start="But the guy you really need to know", tag=C3, stock=K("counting-dollars"), sfx=[],
     el=plate("HARRY SONNEBORN · THE MONEY MAN", "@{Harry Sonneborn}", y=880, size=42, color="C6.accent")),
dict(start="Sonneborn reportedly put it like this", tag=C3, stock=K("suburb-aerial"), dim=0.62, sfx=[('t02-paper:0.25', '0.05')],
     el=plate("HARRY SONNEBORN, AS HE REPORTEDLY PUT IT", "0.05", y=440, size=38, out="@{We are not technically}") + quote("“We are not technically in the food business. We are in the real estate business.”", "HARRY SONNEBORN, AS HE REPORTEDLY PUT IT", at="@{We are not technically}", size=80, hl=["real", "estate"])),
dict(start="The only reason we sell fifteen-cent hamburgers", alt=(K("r-dollar-stack"), "from which our tenants"), tag=C3, stock=K("suburb-aerial2"), sfx=[],
     el=plate("“…SO OUR TENANTS CAN PAY US RENT”", "@{can pay us rent}", y=880, size=42, color="C6.accent")),
dict(start="The cheap burger was never the product", tag=C3, stock=K("cafe-counter-line"), alt=(K("keys-hand"), "so the people running"), sfx=[],
     el=plate("THE BURGER BRINGS PEOPLE IN", "0.2", y=880, size=42, out="@{so the people running}") + plate("THE RESTAURANT PAYS RENT TO McDONALD'S", "@{so the people running}", y=880, size=42, color="C6.accent")),
dict(start="That's going to matter a lot later", tag=C3, stock=K("r-flying-dollars"), sfx=[], el=""),

# ======================= PART 4 · ГЛАВА 4 · ЦЕНОВЫЕ ВОЙНЫ =======================
dict(start="For the next few decades", tag=C4, hard=True, stock=K("vintage-1970s"), archive=True, sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("THE WHOLE INDUSTRY PLAYED BY THOSE RULES", "0.3", y=880, size=40) + src("Archive home movie, 1970s (illustrative)", "0.3")),
dict(start="And whenever things got slow", tag=C4, sfx=[('t02-paper:0.3', '0.05'), ('impact:0.3', '@{Price.}')],
     el=doc("ad-1970", [("35c", "Price."), ("35c-r", "Price.")], source="McDONALD'S NEWSPAPER AD · 1970 · PUBLIC DOMAIN", fb="") + plate("WHEN THINGS GOT SLOW: ONE LEVER", "0.1", y=960, size=36, out="@{Price.}") + plate("PRICE.", "@{Price.}", y=960, size=56, color="C6.accent")),
dict(start="In 1989, Wendy's put a whole row", tag=C4, stock=K("r-burger-fries-table"), dim=0.72, sfx=[('ep06-kaching:0.25', '@{ninety-nine cents each}')],
     el='<Center y={460}><MenuBoard at={0.1} title="WENDY\'S VALUE MENU · 1989" w={1120} rh={112} foot="ILLUSTRATION" rows={[{ name: "BURGER", price: "—", to: "99¢", toAt: @{ninety-nine cents each} }, { name: "FRIES", price: "—", to: "99¢", toAt: @{ninety-nine cents each} }, { name: "DRINK", price: "—", to: "99¢", toAt: @{ninety-nine cents each} }, { name: "…AND MORE", price: "—", to: "99¢", toAt: @{ninety-nine cents each} }]} /></Center>' +
        plate("EVERYBODY COPIED IT", "@{and everybody copied it}", y=960, size=40, color="C6.accent")),
dict(start="And in 1997, McDonald's tried the boldest", alt=(K("live-ad1997-family"), "They called it Campaign"), tag=C4, stock=K("live-ap1997-signs"), clean=True, sfx=[],
     el=plate("1997 · CAMPAIGN 55", "@{They called it Campaign}", y=150, size=40, color="C6.accent") + src("Footage: AP Archive · Feb 1997", "0.3")),
dict(start="The idea was simple", tag=C4, sfx=[('ep06-kaching:0.3', '@{for fifty-five cents}')],
     el=doc("reuters-v2", [("55 cents", "for fifty-five cents")], source="REUTERS · FEB 26, 1997 · VIA McSPOTLIGHT.ORG", zoom=0.8, inset=None,
            fb='<Center y={470}><Words text="$1.90 → 55¢" at={@{for fifty-five cents}} size={200} hl={["55¢"]} /></Center>' + plate("A BIG MAC, NORMALLY ~$1.90", "0.2", y=780, size=38))),
dict(start="Except it wasn't simple", tag=C4, stock=K("live-ad1997-55c"), clean=True, sfx=[('ep06-stamp:0.3', '@{you had to buy fries}')],
     el=plate("*WITH PURCHASE OF FRIES AND A DRINK", "@{you had to buy fries}", y=150, size=40, color="C6.accent") + src("McDonald's TV ad · 1997", "0.3")),
dict(start="And the deal changed from sandwich to sandwich", tag=C4, stock=K("live-ap1997-pay"), clean=True, sfx=[],
     el=plate("PEOPLE DIDN'T UNDERSTAND WHAT TO ORDER", "@{People walked up}", y=150, size=38) + src("Footage: AP Archive · 1997", "0.3")),
dict(start="Some of the restaurant owners said", tag=C4, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("spokesman-c55", [("Campaign 55", "Some of the restaurant owners")], source="THE SPOKESMAN-REVIEW · AP · JUNE 5, 1997", inset=None,
            fb=plate("SOME OWNERS: IT WAS COSTING THEM MONEY", "0.2"))),
dict(start="Burger King was already selling Whoppers", tag=C4, stock=K("wm-bk-whopperjr"), sfx=[('ep06-kaching:0.25', '@{ninety-nine cents}')],
     el=plate("BURGER KING: WHOPPERS FOR 99¢ IN SOME PLACES", "@{ninety-nine cents}", y=880, size=38) + src("Photo: PaulGorduiz106 · CC BY-SA 4.0", "0.4")),
dict(start="And about six weeks in", tag=C4, stock=K("live-ap1997-floor"), clean=True, sfx=[('ep06-stamp:0.3', '@{for lunch and dinner}')],
     el=plate("~6 WEEKS IN: KILLED FOR LUNCH & DINNER", "@{for lunch and dinner}", y=880, size=40, color="C6.accent") + src("Footage: AP Archive · 1997 · Reuters, June 4, 1997", "0.3")),
dict(start="Cheap only works when it's simple", tag=C4, stock=K("r-menu-hands"), dim=0.75, sfx=[('ding:0.25', '0.1'), ('ep06-scratch:0.25', '@{A price you have to decode}')],
     el="<Center y={500}><div style={{ scale: \"1.3\" }}><TwoTags at={0.1} bAt={@{A price you have to decode}} noteAt={@{It's homework}} /></div></Center>"),
dict(start="Keep that in mind, because twenty-nine years later", tag=C4, stock=K("clock-tick"), sfx=[],
     el=plate("29 YEARS LATER…", "@{twenty-nine years later}", y=880, size=46, color="C6.accent")),

# ======================= PART 5 · ГЛАВА 5 · ДОЛЛАР =======================
dict(start="Now let's jump to the moment cheap fast food peaked", tag=C5, hard=True, stock=K("r-value-burgers"), alt=(K("child-coins"), "If you were a kid"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("THE 2000s", "0.2", y=880, size=44)),
dict(start="The Dollar Menu. What most people", tag=C5, stock=K("r-burger-fries-top"), dim=0.72, sfx=[('ep06-stamp:0.3', '@{It was born out of panic}')],
     el='<Center y={440}><MenuBoard at={0.1} title="DOLLAR MENU" w={1060} rh={116} foot="ILLUSTRATION" rows={[{ name: "SANDWICH", price: "$1" }, { name: "FRIES", price: "$1" }, { name: "DRINK", price: "$1" }]} /></Center>' +
        plate("BORN OUT OF PANIC", "@{It was born out of panic}", y=920, size=46, color="C6.accent")),
dict(start="At the end of 2002, McDonald's posted", tag=C5, sfx=[('t02-paper:0.3', '0.05'), ('ep06-fall:0.3', '@{Three hundred and forty-three}')],
     el=doc("cbs-mcdeficit", [("343", "Three hundred and forty-three")], source="CBS NEWS · JAN 2003 · VIA WEB.ARCHIVE.ORG", url="cbsnews.com/news/mcdeficit-for-mcdonalds", inset=None, zoom=0.8,
            fb=doc("hs-loss", [("343", "Three hundred and forty-three")], source="HERALD-STANDARD, UNIONTOWN · AP · JAN 24, 2003", inset=None,
                   fb=plate("END OF 2002 · THE FIRST QUARTERLY LOSS IN ITS HISTORY", "0.1", y=200, size=36) + '<Center y={470}><BigNum at={@{Three hundred and forty-three}} size={200} color={C6.loss} label="Q4 2002 · NET LOSS">−$343M</BigNum></Center>'))),
dict(start="It said it would close hundreds", alt=(K("r-stock-screens"), "The stock fell"), tag=C5, stock=K("r-empty-cafe-night"), sfx=[],
     el=plate("CLOSING HUNDREDS OF RESTAURANTS", "0.1", y=880, size=40, out="@{The stock fell}") + plate("STOCK: ~$15 · LOWEST IN YEARS", "@{The stock fell}", y=880, size=42, color="C6.loss")),
dict(start="The most famous restaurant on earth", tag=C5, stock=K("r-calverton-md"), sfx=[], el=""),
dict(start="So the company called back a man", tag=C5, stock=K("wm-mcd-hq"), sfx=[],
     el=plate("JIM CANTALUPO · ~30 YEARS AT McDONALD'S", "@{Jim Cantalupo}", y=880, size=40) + src("McDonald's former HQ, Oak Brook · Photo: Rob LaRosa · CC BY-SA 2.0", "0.3")),
dict(start="He came back as CEO", alt=(K("r-mcchicken"), "and leaned on the oldest weapon"), tag=C5, stock=K("r-mcd-sign-close"), sfx=[('impact:0.3', '@{Cheap.}')],
     el=plate("CEO AGAIN · JANUARY 1, 2003", "0.1", y=880, size=42, out="@{Cheap.}") + plate("CHEAP.", "@{Cheap.}", y=880, size=64, color="C6.accent")),
dict(start="The Dollar Menu had just gone national", tag=C5, stock=K("r-sesame-bun"), sfx=[('ding:0.25', '@{a dollar each}')],
     el=plate("2002 · THE DOLLAR MENU GOES NATIONAL", "0.1", y=880, size=40, out="@{Sandwiches, fries}") + plate("SANDWICHES · FRIES · DRINKS · $1 EACH", "@{Sandwiches, fries}", y=880, size=40, color="C6.accent")),
dict(start="And it worked", tag=C5, stock=K("boys-burgers"), sfx=[('ding:0.25', '@{Customers came back}')],
     el=plate("CUSTOMERS CAME BACK", "@{Customers came back}", y=880, size=44, color="C6.accent")),
dict(start="Sixteen months in", alt=(K("town-dusk"), "Jim Cantalupo had a heart attack"), tag=C5, stock=K("wm-orlando-occ"), sfx=[],
     el=plate("ORLANDO · APRIL 2004", "0.2", y=880, size=42, out="@{He was sixty}") + plate("HE WAS 60", "@{He was sixty}", y=880, size=46) + src("Photo: Visitor7 · CC BY-SA 3.0", "0.4")),
dict(start="He never saw what happened", tag=C5, stock=K("r-drive-night"), sfx=[], el=""),
dict(start="The menu kept going", tag=C5, stock=K("r-menu-board-cc0"), sfx=[],
     el=plate("~10 YEARS · THE FLOOR OF AMERICAN LIFE", "@{For about ten years}", y=880, size=40)),
dict(start="A family of four could eat", tag=C5, stock=K("r-family-dinner"), alt=(K("boy-coins-jar"), "A teenager with a few quarters"), sfx=[],
     el=plate("A FAMILY OF FOUR · UNDER $10", "0.1", y=880, size=42, out="@{A teenager}") + plate("A FEW QUARTERS · A WHOLE MEAL", "@{A teenager}", y=880, size=42)),
dict(start="But here's the thing about a dollar", tag=C5, stock=K("dollar-bills"), dim=0.75, sfx=[('thud:0.25', '@{the beef behind it}'), ('thud:0.25', '@{the cheese}'), ('thud:0.25', '@{the bun}'), ('thud:0.25', '@{the paper}'), ('thud:0.25', '@{the people making it}')],
     el='<Center y={520}><div style={{ scale: "1.3" }}><DollarPress at={0.1} stayAt={@{And the price on the sign}} items={[{ text: "BEEF", at: @{the beef behind it} }, { text: "CHEESE", at: @{the cheese} }, { text: "BUN", at: @{the bun} }, { text: "PAPER", at: @{the paper} }, { text: "PEOPLE", at: @{the people making it} }]} /></div></Center>'),
dict(start="Somebody has to absorb that difference", tag=C5, stock=K("r-coins-fall"), sfx=[('ep06-pop:0.25', '@{The only question is who}')],
     el=plate("THE ONLY QUESTION IS WHO", "@{The only question is who}", y=880, size=44, color="C6.accent")),

# ======================= PART 6 · ГЛАВА 6 · СЖАТИЕ =======================
dict(start="In 2008, the cheese answered", tag=C6x, hard=True, stock=K("cheese-slice"), alt=(K("wm-double-cheese"), "the double cheeseburger, at a dollar"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("2008 · BEEF AND CHEESE GETTING PRICIER", "0.3", y=880, size=38, out="@{and the owners of McDonald's restaurants}") + plate("OWNERS: A $1 DOUBLE CHEESEBURGER NO LONGER WORKED", "@{and the owners of McDonald's restaurants}", y=880, size=38) + src("Photo: Willis Lam · CC BY-SA 2.0", "@{and the owners of McDonald's restaurants}")),
dict(start="So McDonald's came up with a solution", tag=C6x, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("newser-v2", [("McDouble", "A new burger"), ("slice", "But one slice")], source="NEWSER · OCT 2008", inset=None,
            fb=plate("SAME BUN · TWO PATTIES · ONE SLICE", "@{But one slice}"))),
dict(start="They called it the McDouble", tag=C6x, sfx=[('swoosh:0.25', '0.4')],
     el="<Center y={520}><div style={{ scale: \"1.4\" }}><CheeseStack at={0.05} liftAt={0.4} /></div></Center>"),
dict(start="One analyst estimated", tag=C6x, stock=K("cheeseburger-close"), sfx=[('ep06-coin:0.25', '@{saved about six cents}')],
     el=plate("−1 SLICE ≈ 6¢ A SANDWICH · ANALYST ESTIMATE", "@{saved about six cents}", y=880, size=40, color="C6.accent")),
dict(start="Six cents. That's how tight", tag=C6x, stock=K("wm-mcdouble"), dim=0.35, sfx=[],
     el=words("Six cents.", at="0.1", size=170, hl=["cents."], y=430) + plate("THAT'S HOW TIGHT THE MATH HAD BECOME", "@{That's how tight}", y=760, size=40) + src("Photo: TheDapperDan · public domain", "0.4")),
dict(start="A year later, Burger King did something worse", tag=C6x, stock=K("r-wm-bk-houston"), sfx=[],
     el=plate("2009 · BURGER KING: SELL A DOUBLE CHEESEBURGER FOR $1", "@{It told its restaurant owners}", y=880, size=36) + src("Photo: Quintin Soloviev · CC BY 4.0", "0.4")),
dict(start="The owners had voted against it", tag=C6x, stock=K("courthouse-indiana"), dim=0.72, sfx=[('ep06-stamp:0.3', '@{Twice}')],
     el=words("Voted against it. Twice.", at="0.1", size=130, hl=["Twice."], y=430) + plate("CORPORATE DID IT ANYWAY", "@{Corporate did it anyway}", y=740, size=42, color="C6.accent")),
dict(start="So the owners did something almost unheard of", tag=C6x, stock=K("r-wm-bk-houston"), dim=0.74, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("nrn-top-v2", [("double cheeseburger", "sued their own company")], source="NATION'S RESTAURANT NEWS · NOV 2009", inset=None, zoom=0.8,
            fb=plate("~80% OF BK'S U.S. FRANCHISEES SUED THEIR OWN COMPANY", "@{sued their own company}")) +
        plate("~80% OF BK'S U.S. FRANCHISE OWNERS · SUED THEIR OWN COMPANY", "@{sued their own company}", y=150, size=32, color="C6.accent")),
dict(start="One of them, a franchisee from South Bend", tag=C6x, sfx=[],
     el=doc("nrn-v2", [("Fitzpatrick", "Dan Fitzpatrick"), ("South Bend", "from South Bend")], source="NATION'S RESTAURANT NEWS · NOV 13, 2009", inset=None,
            fb=plate("DAN FITZPATRICK · SOUTH BEND, INDIANA", "@{Dan Fitzpatrick}"))),
dict(start="Once you count all the costs", tag=C6x, sfx=[('ep06-pop:0.25', '@{between a dollar ten}')],
     el=doc("nrn-v2", [("$1.10 and $1.15", "between a dollar ten")], source="NATION'S RESTAURANT NEWS · NOV 13, 2009", inset=None, zoom=1.0,
            fb="<Center y={480}><DimeLoss at={0.05} costAt={@{between a dollar ten}} lossAt={99} /></Center>")),
dict(start="They were losing a dime", tag=C6x, sfx=[('ep06-pop:0.25', '0.1'), ('ep06-fall:0.3', '0.5')],
     el="<Center y={480}><DimeLoss at={0.05} costAt={0.2} lossAt={0.5} /></Center>"),
dict(start="And the more popular the deal got", tag=C6x, stock=K("r-burger-fries-basket"), sfx=[],
     el=plate("THE MORE POPULAR THE DEAL, THE MORE THEY LOST", "0.1", y=880, size=38, color="C6.accent")),
dict(start="By the spring of 2010", tag=C6x, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("nbcmiami-v2", [("$1.29", "a dollar twenty-nine")], source="NBC MIAMI · 2011", inset=None,
            fb=plate("SPRING 2010 · QUIETLY $1.29", "@{a dollar twenty-nine}"))),
dict(start="A judge threw the case out", tag=C6x, stock=K("gavel"), sfx=[],
     el=plate("CASE DISMISSED · FALL 2010", "0.1", y=880, size=42, out="@{They settled}") + plate("SETTLED IN 2011 · THE OWNERS GOT NO MONEY", "@{They settled}", y=880, size=40)),
dict(start="And in 2013, McDonald's let go of the Dollar Menu", tag=C6x, stock=K("r-menu-board-cc0"), dim=0.75, sfx=[('ep06-pop:0.22', '@{Items at one dollar}'), ('ep06-pop:0.22', '@{two dollars}'), ('ep06-pop:0.22', '@{five dollars}')],
     el='<Center y={440}><MenuBoard at={0.1} title="DOLLAR MENU & MORE · 2013" w={1080} rh={116} foot="ILLUSTRATION" rows={[{ name: "$1 ITEMS", price: "$1", hlAt: @{Items at one dollar} }, { name: "$2 ITEMS", price: "$2", hlAt: @{two dollars} }, { name: "$5 ITEMS", price: "$5", hlAt: @{five dollars} }]} /></Center>' +
        ""),
dict(start="Same idea, technically", tag=C6x, stock=K("r-kiosk"), sfx=[], el=plate("SAME IDEA, TECHNICALLY", "0.1", y=880, size=42)),
dict(start="But if you ever stood in front of that board", tag=C6x, stock=K("dt-woman-order"), sfx=[],
     el=plate("IT WASN'T THE SAME", "@{It wasn't the same}", y=880, size=46)),
dict(start="For years, the people who run the restaurants", alt=(K("coins-jar"), "And at some point"), tag=C6x, stock=K("receipts-woman"), sfx=[],
     el=plate("THE OWNERS ATE THE DIFFERENCE", "0.2", y=880, size=42, out="@{And at some point}") + plate("…UNTIL THEY STOPPED", "@{And at some point}", y=880, size=46, color="C6.accent")),

# ======================= PART 7 · ГЛАВА 7 · КУДА ИДУТ ДЕНЬГИ =======================
dict(start="Now let me introduce you to someone", tag=C7, hard=True, stock=K("wm-la-skyline"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("LOS ANGELES · LAST FALL", "@{Los Angeles, last fall}", y=880, size=42) + src("Photo: Levi Clancy · CC BY-SA 4.0", "0.3")),
dict(start="A McDonald's near MacArthur Park", tag=C7, stock=K("wm-macarthur"), sfx=[],
     el=plate("MacARTHUR PARK", "0.1", y=880, size=42) + src("Photo: peter boy12qq12 · CC BY 3.0", "0.3")),
dict(start="A reporter from the Los Angeles Times", tag=C7, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("lvsun-latimes-top", [("low-income", "Los Angeles Times")], source="LOS ANGELES TIMES · NOV 2025 · VIA LAS VEGAS SUN", inset=None,
            fb=doc("aol-latimes-top", [("low-income", "Los Angeles Times")], source="LOS ANGELES TIMES · NOV 2025 · VIA AOL", inset=None))),
dict(start="Mariam is a registered nurse at UCLA", tag=C7, stock=K("wm-ucla"), alt=(K("doctor-wipe"), "And because one job isn't enough"), sfx=[],
     el=plate("MARIAM · REGISTERED NURSE AT UCLA", "0.1", y=880, size=40, out="@{And because one job}") + plate("+ A SECOND JOB: HOME CAREGIVER", "@{And because one job}", y=880, size=40, color="C6.accent") +
        src("Photo: Coolcaesar · CC BY 4.0 · nurse: illustrative footage", "0.3")),
dict(start="She and two other people at her table", tag=C7, stock=K("coffee-cups"), alt=(K("r-paper-bag"), "The receipt came to"), sfx=[('ep06-kaching:0.3', '@{nearly twenty dollars}')],
     el=plate("2 COFFEES + 1 SODA", "@{Two coffees}", y=880, size=44, out="@{The receipt came to}") + plate("≈ $20", "@{nearly twenty dollars}", y=880, size=64, color="C6.loss") + src(ILL, "0.3")),
dict(start="And here's what she told the reporter", tag=C7, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("latimes-v2", [("barely afford", "I can barely afford")], source="LOS ANGELES TIMES · NOV 2025 · VIA LAS VEGAS SUN", zoom=0.9, inset=None,
            fb=quote("“I can barely afford McDonald's. But it's a cheaper option.”", "MARIAM GERGIS · LOS ANGELES TIMES", at="@{I can barely afford}"))),
dict(start="Her brother works as a cashier", tag=C7, stock=K("r-drive-thru-pay"), sfx=[],
     el=plate("HER BROTHER: A CASHIER", "0.1", y=880, size=42) + src(ILL, "0.3")),
dict(start="Mariam put it in one sentence", tag=C7, sfx=[],
     el=doc("latimes-v2", [("go hungry", "He would rather go hungry")], source="LOS ANGELES TIMES · NOV 2025 · VIA LAS VEGAS SUN", zoom=0.9, inset=None,
            fb=quote("“He would rather go hungry than eat outside.”", "MARIAM GERGIS", at="@{He would rather}"))),
dict(start="A nurse. Two jobs.", tag=C7, sfx=[],
     el=watches([W68(at=0.05), W26(at=0.05), WMIN(at=0.05)], size=420, gap=80, note="A NURSE · TWO JOBS · “BARELY AFFORD”", noteAt="@{Two jobs}", y=450)),
dict(start="Remember Mariam", tag=C7, stock=K("doctor-wipe"), sfx=[],
     el=plate("THAT 51 WILL EXPLAIN HER", "@{that fifty-one}", y=880, size=42) + src(ILL, "0.3")),
dict(start="But first, let's follow the money", tag=C7, stock=K("ten-dollar"), sfx=[],
     el=plate("WHO GETS YOUR $10?", "0.2", y=880, size=46, color="C6.accent", out="@{Take ten dollars}") + plate("$10 AT A McDONALD'S THE COMPANY RUNS ITSELF", "@{Take ten dollars}", y=880, size=38)),
dict(start="About three for food and paper", tag=C7, sfx=[('ep06-coin:0.22', '0.05'), ('ep06-coin:0.22', '@{About three for the crew}'), ('ep06-coin:0.22', '@{About two-forty}'), ('ding:0.3', '@{About a dollar fifty}')],
     el=ten(times=("0.05", "@{About three for the crew}", "@{About two-forty}", "@{About a dollar fifty}"), hlLast="@{About a dollar fifty}", note="McDONALD'S-OPERATED RESTAURANTS · 2025 ANNUAL REPORT · ROUNDED")),
dict(start="About ninety-five percent of McDonald's", tag=C7, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("letter-v2", [("95%", "About ninety-five percent")], source="McDONALD'S OPEN LETTER · JOE ERLINGER · MAY 29, 2024", zoom=0.75, inset=None,
            fb=plate("~95% RUN BY FRANCHISE OWNERS · THEY PAY RENT + FEES", "@{About ninety-five percent}")) +
        plate("THEY PAY McDONALD'S RENT AND FEES", "@{and they pay McDonald's rent}", y=960, size=34, color="C6.accent")),
dict(start="On that money, McDonald's keeps", tag=C7, sfx=[('ep06-coin:0.25', '@{keeps about eighty-four}'), ('ep06-coin:0.25', '@{Cooking burgers}'), ('ep06-kaching:0.3', '@{Collecting rent}')],
     el="<Center y={500}><Jars at={0.05} aAt={@{Cooking burgers}} bAt={@{keeps about eighty-four}} /></Center>" + src("OUR MATH · McDONALD'S 2025 10-K · MARGIN PER $1 OF REVENUE", "0.3")),
dict(start="That's not a secret", alt=(K("r-dollar-stack"), "The landlord gets paid"), tag=C7, stock=K("main-street"), sfx=[],
     el=plate("EXACTLY LIKE SONNEBORN SAID", "@{exactly like Sonneborn}", y=880, size=40, out="@{The landlord gets paid}") + plate("THE LANDLORD GETS PAID ON EVERY SALE", "@{The landlord gets paid}", y=880, size=40, color="C6.accent")),
dict(start="And this is a bad year for the people in the middle", tag=C7, stock=K("r-calculator"), alt=(K("tired-woman"), "In one survey this spring"), sfx=[('ep06-fall:0.3', '@{ninety-five percent}')],
     el=plate("OWNERS SURVEYED: 95% SAY PROFITS ARE FALLING", "@{ninety-five percent}", y=880, size=36, color="C6.loss") + src("NOA survey · spring 2026 · via Restaurant Business", "0.4")),

# ======================= PART 8 · ГЛАВА 8 · ИЗДЕРЖКИ =======================
dict(start="So why is everything inside that ten dollars", tag=C8, hard=True, sfx=[('rise:0.3', '0.4')],
     el=ten(growAt="0.4", note="WHY IS EVERY STACK CLIMBING?")),
dict(start="Start in the middle of the bun", tag=C8, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("profarmer-herd-top", [("since 1951", "since 1951")], source="FARM JOURNAL / PRO FARMER · USDA CATTLE INVENTORY · JAN 2026", inset=None,
            fb=doc("drovers-herd-top", [("since 1951", "since 1951")], source="DROVERS · USDA CATTLE INVENTORY · JAN 2026", inset=None,
                   fb=doc("dairyherd-herd-top", [("since 1951", "since 1951")], source="FARM JOURNAL · USDA CATTLE INVENTORY · JAN 2026", inset=None,
                          fb=doc("nass-release", [("86.2 million head", "fewer cattle")], source="USDA NASS · CATTLE · JAN 30, 2026",
                                 fb=plate("FEWEST CATTLE SINCE 1951 · USDA", "0.1", y=880, size=40))))),
     stock=None if any(has(n, "since 1951") for n in ("profarmer-herd-top", "drovers-herd-top", "dairyherd-herd-top")) or has("nass-release", "86.2 million head") else K("cattle-aerial")),
dict(start="Years of drought pushed ranchers", tag=C8, stock=K("dry-riverbed"), alt=(K("longhorns"), "and you can't grow a cow"), sfx=[],
     el=plate("YEARS OF DROUGHT · HERDS SOLD OFF", "0.1", y=880, size=40)),
dict(start="This August, ground beef hit", tag=C8, stock=K("ground-beef"), sfx=[('ep06-kaching:0.3', '@{Six ninety-two}')],
     el=plate("GROUND BEEF · ALL-TIME RECORD", "0.2", y=880, size=40, out="@{Six ninety-two}") + plate("$6.92 / LB · AUGUST 2026", "@{Six ninety-two}", y=880, size=52, color="C6.loss") + src("BLS average retail price", "0.4")),
dict(start="Then the fries", alt=(K("fries-strainer"), "About ninety-seven percent"), tag=C8, stock=K("fries-frying"), sfx=[('ep06-pop:0.25', '@{About ninety-seven percent}')],
     el=plate("4 COMPANIES", "@{just four companies}", y=880, size=46, out="@{About ninety-seven percent}") + plate("~97% OF AMERICA'S FROZEN FRIES", "@{About ninety-seven percent}", y=880, size=44, color="C6.accent")),
dict(start="Lawsuits claim they coordinated", tag=C8, sfx=[('t02-paper:0.3', '0.05'), ('ep06-stamp:0.3', '0.8')],
     el=doc("fortune-potato-top", [("potato", "Lawsuits claim")], source="FORTUNE · NOV 2024", inset=None, zoom=0.85,
            fb=plate("LAWSUITS: COORDINATED PRICE HIKES SINCE 2021", "0.2")) + stamp("ALLEGED", "0.8", x=1640, y=330) +
        plate("SEPT 2026: A JUDGE LETS MOST OF THE CASE GO FORWARD", "@{in September a judge}", y=960, size=32, color="C6.accent")),
dict(start="And wages", tag=C8, stock=K("fastfood-crew") if False else K("r-drive-thru-pay"), sfx=[],
     el=plate("CALIFORNIA · $20/HR MINIMUM · BIG FAST FOOD CHAINS · 2024", "@{California set}", y=880, size=34) + src(ILL, "0.3")),
dict(start="Economists are still fighting", tag=C8, stock=K("r-stock-screens"), dim=0.55, sfx=[],
     el=words("Economists: still fighting.", at="0.1", size=110, y=430) + plate("BOTH SIDES HAVE DATA", "@{Both sides have data}", y=720, size=42, color="C6.accent")),
dict(start="And then, in 2023, a photo went viral", tag=C8, stock=K("live-nn-darien"), clean=True, sfx=[],
     el=src("Footage: NewsNation", "0.3") + plate("THE REAL BOARD: $17.59 · TV ROUNDED IT TO $18", "1.2", y=640, size=34, color="C6.accent")),
dict(start="A Big Mac meal, seventeen dollars", tag=C8, sfx=[('ep06-kaching:0.3', '@{seventeen dollars}')],
     stock=K("r-i95-connecticut"), el=plate("I-95 · CONNECTICUT", "0.1", y=880, size=40, out="@{seventeen dollars}") + plate("BIG MAC MEAL · $17.59", "@{seventeen dollars}", y=880, size=56, color="C6.loss") + src("Interstate 95 in Connecticut · Photo: Adam Moss · CC BY-SA 2.0", "0.3") +
        plate("“THE BIG MAC DOUBLED IN 5 YEARS”", "@{People started saying}", y=200, size=36)),
dict(start="So McDonald's did something companies almost never do", tag=C8, stock=K("wm-mcd-hq"), sfx=[], el=plate("SOMETHING COMPANIES ALMOST NEVER DO", "0.2", y=880, size=40) + src("McDonald's former HQ, Oak Brook · Photo: Rob LaRosa · CC BY-SA 2.0", "0.3")),
dict(start="The president of McDonald's USA", tag=C8, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("mcd-letter-top", [], source="McDONALD'S OPEN LETTER · JOE ERLINGER · MAY 29, 2024 · VIA WEB.ARCHIVE.ORG", inset=None, zoom=0.75)),
dict(start="The Big Mac, he wrote", tag=C8, sfx=[('ep06-pop:0.25', '@{four thirty-nine}'), ('ep06-pop:0.25', '@{five twenty-nine}')],
     el=doc("letter-v2", [("$4.39", "four thirty-nine"), ("$5.29", "five twenty-nine"), ("21%", "Twenty-one percent")], source="McDONALD'S OPEN LETTER · MAY 29, 2024", zoom=0.66, inset=None,
            fb='<Center y={450}><Words text="$4.39 → $5.29 · +21%" at={0.3} size={130} hl={["+21%"]} /></Center>') + plate("NOT A HUNDRED. FAIR ENOUGH.", "@{Not a hundred}", y=980, size=32)),
dict(start="But keep reading", tag=C8, sfx=[('ep06-pop:0.25', '@{Medium fries}'), ('ep06-pop:0.25', '@{The average item}')],
     el=doc("mcd-myths", [("fact-fries", "Medium fries"), ("fact-40", "The average item")], source="McDONALD'S “PRICING MYTHS VS. FACTS” · MAY 2024",
            fb=plate("FRIES +44% · AVERAGE ITEM +40%", "@{Medium fries}"))),
dict(start="Over the same years, prices across America", tag=C8, sfx=[('ep06-counter:0.3', '@{the menu climbed}')],
     el='<Center y={460}><TwoBars at={0.1} a={{ label: "McDONALD\'S AVERAGE MENU ITEM", value: "+40%", v: 40, color: C6.loss }} b={{ label: "PRICES ACROSS AMERICA · 2019–2024", value: "+21%", v: 21, color: C6.blue, at: @{went up about twenty-one} }} h={440} /></Center>' +
        ""),
dict(start="They told us", tag=C8, stock=K("r-big-mac-meal"), sfx=[], el=plate("THEY TOLD US. THEY JUST LED WITH THE BIG MAC.", "0.1", y=880, size=40, color="C6.accent")),
dict(start="So yes, costs are real", tag=C8, stock=K("r-fries-close"), alt=(K("doctor-wipe"), "But none of that"), sfx=[],
     el=src(ILL, "@{But none of that}") + plate("BEEF · FRIES · PEOPLE · BUILDINGS", "@{Beef, fries}", y=880, size=40, out="@{But none of that}") + plate("NONE OF THAT EXPLAINS MARIAM", "@{But none of that}", y=880, size=44, color="C6.accent")),
dict(start="For that, we have to open the stopwatch", tag=C8, stock=K("clock-tick"), sfx=[('tick:0.3', '0.3')], el=""),
dict(start="First, where the ten and the eleven", tag=C9, sfx=[],
     el=watches([W68(at=0.05), W26(at=0.05), WMIN(at=0.05)], size=430, gap=100, note="FIRST: WHERE THE 10 AND THE 11 COME FROM", noteAt="0.3")),

# ======================= PART 9 · ГЛАВА 9 · ЧИСЛО =======================
dict(start="Here's the math", tag=C9, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("fred-ahetpi", [("Production and Nonsupervisory", "what regular workers earn")], source="BLS VIA FRED · AVERAGE HOURLY EARNINGS, PRODUCTION & NONSUPERVISORY", inset=None,
            fb=""), stock=None if has("fred-ahetpi", "Production and Nonsupervisory") else K("workers-walking")),
dict(start="Not bosses", tag=C9, stock=K("workers-walking") if has("fred-ahetpi", "Production and Nonsupervisory") else K("r-sesame-bun"), sfx=[],
     el=plate("NOT BOSSES", "0.05", y=880, size=46, out="@{The people who do}") + plate("THE PEOPLE WHO DO THE WORK · ~8 IN 10 JOBS", "@{The people who do}", y=880, size=40, color="C6.accent")),
dict(start="In 1968, the average was about three dollars", tag=C9, sfx=[('ep06-pop:0.25', '0.2'), ('ep06-pop:0.25', '@{at about forty-nine cents}'), ('tick:0.3', '@{about ten minutes of work}')],
     el='<Center y={480}><Division label="1968 · AVERAGE WORKER" price="49¢" wage="$3.02" res="10 MIN" times={[@{at about forty-nine cents}, 0.2, @{about ten minutes of work}]} /></Center>' + src("BLS · production & nonsupervisory · our math", "0.4")),
dict(start="Now today. This October", tag=C9, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("fred-ahetpi", [("32.75", "thirty-two dollars and seventy-five")], source="BLS VIA FRED · OCTOBER 2026", inset=None,
            fb='<Center y={460}><BigNum at={@{thirty-two dollars}} size={220} label="AVERAGE HOURLY PAY · OCTOBER 2026 · BLS">$32.75</BigNum></Center>')),
dict(start="A Big Mac is six twenty-two", tag=C9, sfx=[('tick:0.3', "@{That's about eleven}")],
     el='<Center y={480}><Division label="2026 · AVERAGE WORKER" price="$6.22" wage="$32.75" res="11 MIN" times={[0.05, 0.1, @{That\'s about eleven}]} /></Center>' + src("BLS · The Economist · our math", "0.4")),
dict(start="For the average worker, almost the same price", tag=C9, sfx=[],
     el=watches([W68(at=0.05), W26(at=0.05), WMIN(at=0.05)], size=450, gap=100, note="IF THE AVERAGE BARELY MOVED, WHO'S PAYING 51?", noteAt="@{If the average barely moved}")),
dict(start="The answer is that average is hiding something", tag=C9, sfx=[('ep06-scratch:0.3', '@{is hiding something}')],
     el="<Center y={500}><CrackWord at={0.05} crackAt={@{is hiding something}} /></Center>"),
dict(start="Let's run the same math for someone stuck", tag=C9, stock=K("bag-packing"), sfx=[],
     el=plate("SAME MATH · FEDERAL MINIMUM WAGE", "@{federal minimum wage}", y=880, size=42, color="C6.accent")),
dict(start="In 1968, the federal minimum wage", tag=C9, sfx=[('ep06-pop:0.25', '@{a dollar sixty}'), ('tick:0.3', '@{eighteen minutes}')],
     el='<Center y={480}><Division label="1968 · FEDERAL MINIMUM WAGE" price="49¢" wage="$1.60" res="18 MIN" resColor={C6.ink} times={[0.1, @{a dollar sixty}, @{eighteen minutes}]} /></Center>'),
dict(start="Today, the federal minimum wage is seven", tag=C9, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("ballot-v2", [("$7.25", "seven twenty-five")], source="BALLOTPEDIA · MINIMUM WAGE 2026", inset=None, zoom=0.85,
            fb='<Center y={460}><BigNum at={0.2} size={220} label="FEDERAL MINIMUM · 20 STATES STILL USE IT">$7.25</BigNum></Center>') +
        plate("UNCHANGED SINCE JULY 2009", "@{It hasn't moved}", y=960, size=36, color="C6.accent")),
dict(start="That's the longest it's ever gone", tag=C9, stock=K("clock-hands"), sfx=[('ep06-pop:0.25', '@{And in twenty states}')],
     el=plate("LONGEST EVER WITHOUT A RAISE", "0.1", y=880, size=42, out="@{And in twenty states}") + plate("20 STATES STILL USE $7.25", "@{And in twenty states}", y=880, size=46, color="C6.accent")),
dict(start="At seven twenty-five, a Big Mac costs", tag=C9, sfx=[('tick:0.35', '@{fifty-one minutes of work}'), ('impact:0.4', '@{Eighteen minutes became}')],
     el=watches([W68(at=0.05), W26(at=0.05), w(51, "2026 · $7.25/HR", "FEDERAL MINIMUM", at=0.05, blurred=True, revealAt="@{fifty-one minutes of work}", spinAt="@{fifty-one minutes of work}", spin=2.0, redAt="@{Eighteen minutes became}", color="C6.loss")], size=450, gap=100,
                 note="18 MIN BECAME 51 · ALMOST 3× · SAME SANDWICH", noteAt="@{Eighteen minutes became}")),
dict(start="And now the part that hit me hardest", tag=C9, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("lt-workers-top", [("Fast Food", "LendingTree ran")], source="LENDINGTREE · 2025", inset=None,
            fb=plate("LENDINGTREE · THE PEOPLE WHO MAKE THE FOOD", "0.2"))),
dict(start="In America's fifty biggest cities", tag=C9, sfx=[('ep06-kaching:0.25', '@{eleven fifty-six}')],
     el=doc("lt-workers", [("$11.56", "eleven fifty-six")], source="LENDINGTREE · 50 LARGEST U.S. METROS · 2025", inset=None,
            fb=plate("TYPICAL COMBO · $11.56", "@{eleven fifty-six}"))),
dict(start="For the average worker, that's about twenty-one", tag=C9, sfx=[('ep06-pop:0.25', '0.3'), ('ep06-pop:0.25', "@{it's forty-six}")],
     el='<Center y={500}><MinuteBars title="ONE TYPICAL COMBO MEAL · $11.56 · 50 BIGGEST U.S. CITIES" rows={[{ label: "AVERAGE WORKER", min: 21.2, value: "21 min", at: 0.3 }, { label: "FAST FOOD WORKER", min: 46.0, value: "46 min", at: @{it\'s forty-six}, color: C6.loss }]} /></Center>' + src("LendingTree · 2025 · 21.2 vs 46.0 minutes of work", "0.3")),
dict(start="The person handing you the bag", tag=C9, stock=K("dt-card"), sfx=[],
     el=plate("MORE THAN 2× AS LONG · FOR WHAT'S INSIDE THE BAG", "@{has to work more than twice}", y=880, size=38, color="C6.accent")),
dict(start="Very few people earn exactly seven", tag=C9, sfx=[],
     el="<Center y={470}><FloorLine at={0.2} riseAt={@{But it's the floor}} /></Center>" + plate("EVERYBODY CLOSE TO IT FEELS THE SQUEEZE", "@{Everybody standing close}", y=980, size=34, color="C6.accent")),
dict(start="Now think about Mariam again", tag=C9, stock=K("doctor-wipe"), dim=0.55, sfx=[],
     el=quote("“He would rather go hungry than eat outside.”", "MARIAM GERGIS, ABOUT HER BROTHER · LA TIMES", at="0.2", size=80, hl=["hungry"]) + src(ILL, "0.3")),
dict(start="This is about whose paycheck kept up", tag=C9, stock=K("counting-dollars"), sfx=[],
     el=plate("WHOSE PAYCHECK KEPT UP — AND WHOSE DIDN'T", "0.2", y=880, size=40)),
dict(start="So here's the answer to the question in the title", tag=C9, sfx=[('ding:0.3', '@{It got expensive}')],
     el=watches([W68(at=0.05), W26(at=0.05), w(51, "2026 · $7.25/HR", "FEDERAL MINIMUM", at=0.05, still=True, redAt=0.05, color="C6.loss")], size=450, gap=100,
                 note="IT GOT EXPENSIVE FOR THE PEOPLE WHOSE PAY GOT LEFT BEHIND", noteAt="@{It got expensive}")),
dict(start="The people it was invented for", tag=C9, stock=K("wm-shift-1942b"), archive=True, sfx=[], el=""),
dict(start="If this changed how you see a price tag", alt=(K("la-aerial"), "Every week"), tag=C9, stock=K("r-restaurant-aerial-night"), sfx=[('ding:0.25', '@{subscribe}')],
     el='<Subscribe6 at={@{subscribe}} />' + plate("EVERY WEEK · ONE EVERYDAY PRICE · TAKEN APART", "@{Every week}", y=880, size=36, color="C6.accent")),
dict(start="And stay with me", tag=C9, stock=K("live-gma-slump"), alt=(K("live-cbs-store"), "and then the company"), clean=True, sfx=[],
     el=plate("…THEN THE COMPANY DID SOMETHING NOBODY EXPECTED", "@{and then the company}", y=150, size=36, color="C6.accent") + src("Footage: Good Morning America · 2026", "0.3")),

# ======================= PART 10 · ГЛАВА 10 · КТО УШЁЛ =======================
dict(start="And here's the part where the company itself", tag=C10, hard=True, stock=K("r-night-roadside"), sfx=[('ep06-whoosh:0.2', '0.05')], el=""),
dict(start="Early last year, McDonald's own CEO", tag=C10, sfx=[('t02-paper:0.3', '0.05'), ('ep06-fall:0.3', '@{nearly double digits}')],
     el=doc("rd-q1-2025", [("low-income", "low income visits")], source="RESTAURANT DIVE · MAY 2025", inset=None, fb="") +
        plate("LOW-INCOME VISITS: DOWN NEARLY DOUBLE DIGITS", "@{nearly double digits}", y=960, size=34, color="C6.loss"),
     stock=None if has("rd-q1-2025", "low-income") else K("r-drive-thru-order")),
dict(start="Later he said that across fast food", tag=C10, stock=K("r-couple-menu"), dim=0.72, sfx=[('ep06-pop:0.22', '@{Rent.}'), ('ep06-pop:0.22', '@{Groceries.}'), ('ep06-pop:0.22', '@{Child care.}')],
     el="<Center y={400}><TwoWay at={0.05} upAt={@{higher income visits were up}} /></Center>" + "<Center y={880}><Chips size={56} items={[{ text: \"RENT\", at: @{Rent.} }, { text: \"GROCERIES\", at: @{Groceries.} }, { text: \"CHILD CARE\", at: @{Child care.} }]} /></Center>" + src("McDonald's CEO, Q3 2025 call · via LA Times", "0.3")),
dict(start="And here's the painful part", tag=C10, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("nbc-v2", [("low-income", "low income customers usually")], source="NBC NEWS · AUG 2025", inset=None, zoom=0.75,
            fb=plate("LOW-INCOME CUSTOMERS VISIT MORE OFTEN THAN ANYONE", "0.2")) +
        '<In at={0} out={1.3} from="fade"><Center y={880}><Chips size={56} items={[{ text: "RENT", at: 0 }, { text: "GROCERIES", at: 0 }, { text: "CHILD CARE", at: 0 }]} /></Center></In>' + plate("THEY USUALLY VISIT MORE OFTEN THAN ANYONE ELSE", "@{usually visit more often}", y=960, size=34, color="C6.accent")),
dict(start="So the people who came the most", tag=C10, stock=K("r-empty-wallet"), sfx=[],
     el=plate("THE MOST LOYAL · THE FIRST PUSHED OUT", "0.2", y=880, size=42)),
dict(start="And if you're the person counting every dollar", tag=C10, stock=K("r-card-terminal"), sfx=[('ding:0.25', '@{Quiet ones}')],
     el=plate("3 QUIET TRAPS", "@{Quiet ones}", y=880, size=50, color="C6.accent")),
dict(start="Trap number one", tag=C10, stock=K("live-nn-two-prices"), clean=True, sfx=[('ep06-stamp:0.25', '0.1')],
     el=plate("TRAP #1 · THE PRICE ISN'T THE SAME EVERYWHERE", "0.1", y=150, size=36, color="C6.accent") + src("Footage: NewsNation", "0.3")),
dict(start="Two McDonald's a few miles apart", tag=C10, stock=K("r-ct-lisbon"), alt=(K("r-mcd-sign-close"), "can charge you different"), sfx=[],
     el=plate("DIFFERENT OWNERS · DIFFERENT PRICES", "0.2", y=880, size=42) + src("Photo: JJBers · CC BY 2.0 (Lisbon, CT)", "0.4")),
dict(start="That's how a rest stop in Connecticut", tag=C10, stock=K("live-nn-darien"), clean=True, sfx=[],
     el=src("Footage: NewsNation", "0.3")),
dict(start="Trap number two", tag=C10, stock=K("phone-use"), sfx=[('ep06-stamp:0.25', '0.1')],
     el=plate("TRAP #2 · THE BEST PRICES LIVED IN THE APP", "0.1", y=880, size=38, color="C6.accent")),
dict(start="McDonald's now has about two hundred and ten", tag=C10, stock=K("r-phone-pay-meal"), dim=0.4, sfx=[('ep06-counter:0.3', '@{two hundred and ten million}')],
     el='<Center y={430}><BigNum at={@{two hundred and ten million}} size={200} label="ACTIVE LOYALTY USERS · WORLDWIDE">210M</BigNum></Center>' +
        plate("NO APP = OFTEN THE HIGHEST PRICE IN THE BUILDING", "@{If you don't use it}", y=880, size=36, color="C6.accent")),
dict(start="Trap number three", tag=C10, stock=K("live-news-delivery"), clean=True, sfx=[('ep06-stamp:0.25', '0.1')],
     el=plate("TRAP #3 · DELIVERY", "0.1", y=150, size=42, color="C6.accent") + src("Footage: WFAA ABC 8", "0.3")),
dict(start="A study by the finance company Self", tag=C10, stock=K("delivery-hold"), sfx=[],
     el=plate("SELF FINANCIAL · SAME McDONALD'S ORDER · 100 U.S. CITIES", "0.1", y=880, size=36) + src(ILL, "0.3")),
dict(start="Through the big delivery apps", tag=C10, sfx=[('t02-paper:0.3', '0.05'), ('ep06-kaching:0.3', '@{almost seventy percent more}')],
     el=doc("self-markup", [("68.6%", "almost seventy percent more")], source="SELF FINANCIAL · FOOD DELIVERY STUDY · 2025", inset=None, zoom=0.8,
            fb=plate("VIA DELIVERY APPS: ≈ +70%", "@{almost seventy percent more}", y=880, size=44, color="C6.loss")),
     stock=None if has("self-markup", "68.6%") else K("r-delivery-pay")),
dict(start="Seventy percent. For somebody", tag=C10, stock=K("r-delivery-bag"), sfx=[], el=plate("+70% · FOR SOMEBODY TOO TIRED TO DRIVE", "0.1", y=880, size=40, color="C6.loss")),
dict(start="And there's a new question hanging", tag=C10, sfx=[('t02-paper:0.3', '0.05'), ('ep06-stamp:0.3', '@{filed a lawsuit}')],
     el=doc("abc7-v2", [("McDonald's sued", "filed a lawsuit")], source="AP · VIA ABC7 · OCT 2026", inset=None, zoom=1.0,
            fb=doc("wftv-ai", [("lawsuit", "filed a lawsuit")], source="AP · VIA WFTV · OCT 2026", inset=None,
                   fb=plate("OCT 2026 · LAWSUIT: AI PRICING ACROSS RESTAURANTS", "@{filed a lawsuit}"))) + stamp("ALLEGATION", "@{filed a lawsuit}", x=1500, y=300),
     stock=K("r-kiosk"), dim=0.75),
dict(start="That's an accusation", tag=C10, stock=K("r-courthouse"), dim=0.65, sfx=[('ep06-stamp:0.25', '0.1')],
     el=(quote("“AI does not set menu prices at McDonald's restaurants – McDonald's franchisees do.”", "McDONALD'S STATEMENT · VIA AP", at="@{AI does not set}", size=70, hl=["franchisees", "do.”"])) +
        plate("AN ACCUSATION · NO COURT HAS RULED", "0.05", y=200, size=34, color="C6.accent")),
dict(start="And for a business built on volume", alt=(K("r-empty-drive-thru"), "The crowd was walking away"), tag=C10, stock=K("main-street"), sfx=[],
     el=plate("THE CROWD WAS WALKING AWAY", "@{The crowd was walking away}", y=880, size=46, color="C6.accent")),

# ======================= PART 11 · ГЛАВА 11 · ДОРОГА НАЗАД =======================
dict(start="So McDonald's started walking it back", tag=C11, hard=True, stock=K("live-gma-5deal"), alt=(K("r-value-burgers"), "the five dollar Meal Deal"), clean=True, sfx=[('ep06-whoosh:0.2', '0.05')],
     el=src("Footage: Good Morning America · 2024", "0.3")),
dict(start="In 2025, a value menu called McValue", tag=C11, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("mcd-evm-top", [], source="McDONALD'S · EXTRA VALUE MEALS · 2025 · VIA WEB.ARCHIVE.ORG", fb="") +
        plate("EXTRA VALUE MEALS · ~15% OFF VS. BUYING SEPARATELY", "@{about fifteen percent off}", y=960, size=34, color="C6.accent")),
dict(start="And then, this April, the second mystery", tag=C11, sfx=[('t02-paper:0.3', '0.05'), ('ding:0.3', '@{every single one under three dollars}')],
     el=doc("mcd-mcvalue26-top", [("Under $3", "every single one under three dollars")], source="McDONALD'S PRESS RELEASE · APRIL 2, 2026 · VIA WEB.ARCHIVE.ORG", inset=None, zoom=0.7,
            fb=plate("APRIL 2026 · 10 ITEMS UNDER $3", "0.2"))),
dict(start="McChicken. McDouble.", tag=C11, stock=K("r-mcchicken"), alt=(K("live-gma-under3"), "Small fries"), sfx=[('ep06-kaching:0.3', '@{a McDouble for two fifty}')],
     el=plate("McDOUBLE · $2.50 TO KICK IT OFF", "@{a McDouble for two fifty}", y=150, size=40, color="C6.accent") + src("Footage: Good Morning America · 2026", "0.3")),
dict(start="The company called it predictable", tag=C11, sfx=[],
     el=doc("mcd-mcvalue26", [("everyday", "predictable everyday low prices")], source="McDONALD'S PRESS RELEASE · APRIL 2, 2026", inset=None,
            fb=quote("“Predictable everyday low prices.”", "McDONALD'S · APRIL 2026", at="@{predictable everyday}", size=100)) +
        plate("NOT COUPONS IN AN APP · PRICES ON THE BOARD", "@{Not coupons}", y=960, size=34, color="C6.accent")),
dict(start="Thirteen years after it gave up", tag=C11, sfx=[('ding:0.25', '@{went back to the idea}')],
     el='<Center y={470}><PriceDuel at={0.1} a={{ label: "2013 · DOLLAR MENU → “& MORE”", value: "$1" }} b={{ label: "2026 · McVALUE · ON THE SIGN", value: "<$3", at: @{went back to the idea} }} /></Center>'),
dict(start="Not every restaurant joined in", tag=C11, stock=K("live-news-drivethru"), alt=(K("live-news-store"), "But the idea was back"), clean=True, sfx=[],
     el=plate("NOT EVERY RESTAURANT · PRICES CAN VARY", "0.2", y=150, size=36) + src("Footage: local TV news · 2026", "0.3")),
dict(start="Not everybody was impressed", tag=C11, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("fox-v2", [("$2.50", "One person on Reddit")], source="FOX NEWS · MAY 2026", inset=None, zoom=0.8,
            fb='<Center y={460}><PostCard at={0.1} site="REDDIT" note="QUOTED BY FOX NEWS · USERNAME HIDDEN" text="Anyone remember when McDoubles used to be 99 cents? It was only 10 years ago." /></Center>')),
dict(start="Anyone remember when McDoubles", tag=C11, stock=K("r-value-burgers"), dim=0.72, sfx=[],
     el='<Center y={460}><PostCard at={0.05} site="REDDIT" note="QUOTED BY FOX NEWS · USERNAME HIDDEN" text="Anyone remember when McDoubles used to be 99 cents? It was only 10 years ago." /></Center>'),
dict(start="Fair point", tag=C11, stock=K("wm-mcdouble"), sfx=[],
     el=plate("$2.50 · STILL A LONG WAY FROM $1", "0.2", y=880, size=42) + src("Photo: TheDapperDan · public domain", "0.4")),
dict(start="But look at what else is on that same board", tag=C11, stock=K("live-today-bigarch"), clean=True, sfx=[],
     el=plate("MARCH 2026 · THE BIG ARCH", "@{In March}", y=150, size=40, color="C6.accent") + src("Footage: TODAY (NBC) · 2026", "0.3")),
dict(start="Two quarter-pound patties", tag=C11, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("aol-bigarch", [("Big Arch", "biggest and boldest")], source="AOL · 2026", inset=None, zoom=0.6,
            fb=plate("TWO QUARTER-POUND PATTIES · THREE SLICES OF CHEESE", "0.2"))),
dict(start="In a lot of places, the sandwich alone", tag=C11, stock=K("big-burger-hold"), sfx=[('ep06-kaching:0.25', '@{eight to ten dollars}')],
     el=plate("THE SANDWICH ALONE: $8–10 IN A LOT OF PLACES", "@{eight to ten dollars}", y=880, size=38, color="C6.accent") + src(ILL, "0.3")),
dict(start="A month later, the row of items", tag=C11, stock=K("burger-bite"), dim=0.75, sfx=[('ep06-pop:0.25', '@{showed up right next to it}'), ('impact:0.3', '@{One menu}')],
     el="<Center y={500}><div style={{ scale: \"1.15\" }}><MenuSplit at={0.1} rightAt={0.3} footAt={@{One menu}} /></div></Center>"),
dict(start="One for the customer who's trading down", tag=C11, stock=K("live-today-under3"), clean=True, alt=(K("r-big-mac-meal"), "and one for the customer who doesn't"), sfx=[],
     el=src("Footage: TODAY (NBC) · 2026", "0.3")),
dict(start="And back in February", tag=C11, stock=K("r-boardroom"), dim=0.7, sfx=[('t02-paper:0.3', '0.05')],
     el=plate("FEBRUARY 2026 · THE CEO TO INVESTORS", "0.05", y=440, size=38, out="@{McDonald's value leadership}") + quote("“McDonald's value leadership is working.”", "CEO CHRIS KEMPCZINSKI · FEBRUARY 2026", at="@{McDonald's value leadership}", size=96, hl=["working.”"]) +
        plate("NOT A STRAIGHT LINE", "@{It's not a straight line}", y=900, size=38)),
dict(start="This fall, U.S. sales slipped", tag=C11, sfx=[('ep06-fall:0.25', '@{sales slipped again}')],
     el=doc("wsmv-sales", [("sales", "sales slipped again")], source="WSMV · AP · NOV 2026", inset=None,
            fb=plate("FALL 2026 · U.S. SALES SLIPPED AGAIN", "0.2"))),
dict(start="But the biggest restaurant chain in the world", tag=C11, stock=K("tennis-empty"), alt=(K("wm-mcd-1967"), "Speed, lower prices"), sfx=[('ding:0.25', "@{You can't have the crowd}")],
     el=plate("SPEED · LOWER PRICES · VOLUME", "@{Speed, lower prices}", y=880, size=44, out="@{You can't have the crowd}") + plate("NO CROWD WITHOUT THE PRICE", "@{You can't have the crowd}", y=880, size=46, color="C6.accent")),
dict(start="So what do you do with all this", tag=C11, stock=K("live-news-kiosk"), clean=True, sfx=[],
     el=plate("FOUR THINGS", "@{Four things}", y=150, size=46, color="C6.accent") + src("Footage: WFAA ABC 8", "0.3")),
dict(start="Before you order, check the app", tag=C11, stock=K("live-gma-kiosk"), clean=True, alt=(K("r-phone-pay-meal"), "Sometimes the cheapest version"), sfx=[('ding:0.25', '0.1')],
     el=plate("1 · CHECK THE APP AGAINST THE BOARD", "0.1", y=150, size=38, color="C6.accent")),
dict(start="If you can, skip delivery", tag=C11, stock=K("delivery-hold"), alt=(K("r-delivery-pay"), "That alone"), sfx=[('ding:0.25', '0.1')],
     el=plate("2 · SKIP DELIVERY · PICK IT UP", "0.1", y=880, size=40, color="C6.accent", out="@{That alone}") + plate("$10 MEAL vs $17 MEAL", "@{That alone}", y=880, size=46)),
dict(start="If there are two McDonald's near you", alt=(K("r-calverton-md"), "Different owners"), tag=C11, stock=K("r-needles-ca"), sfx=[('ding:0.25', '0.1')],
     el=plate("3 · COMPARE TWO LOCATIONS IN THE APP", "0.1", y=880, size=40, color="C6.accent", out="@{Different owners}") + plate("DIFFERENT OWNERS · DIFFERENT PRICES · SAME BURGER", "@{Different owners}", y=880, size=36)),
dict(start="Start measuring prices the way we did today", tag=C11, stock=K("burger-table"), dim=0.62, sfx=[('ding:0.25', '0.1'), ('tick:0.3', '@{Ten minutes for a Big Mac}'), ('tick:0.3', '@{Fifty-one minutes is}')],
     el=plate("4 · COUNT PRICES IN MINUTES OF YOUR OWN WORK", "0.1", y=110, size=34, color="C6.accent") +
        watches([w(10, "A deal", "10 MIN FOR A BIG MAC", at="@{Ten minutes for a Big Mac}", spinAt="@{Ten minutes for a Big Mac}", spin=1.0), w(51, "A decision", "51 MIN FOR THE SAME", at="@{Fifty-one minutes is}", spinAt="@{Fifty-one minutes is}", spin=1.4, redAt="@{Fifty-one minutes is}", color="C6.loss")], size=450, gap=160, y=560)),
dict(start="When you see the price that way", tag=C11, sfx=[('ding:0.3', '@{nobody can play you}')],
     el='''<Center y={520}><Checklist w={1240} items={[{ text: "Check the app against the board", at: 0.05 }, { text: "Skip delivery, pick it up", at: 0.2 }, { text: "Compare two locations in the app", at: 0.35 }, { text: "Count prices in minutes of work", at: @{nobody can play you} }]} /></Center>'''),
dict(start="Jim Delligatti never got royalties", alt=(K("wm-mcd-1967"), "When people asked him"), tag=C11, stock=K("wm-bigmac-museum"), sfx=[],
     el=plate("JIM DELLIGATTI · NO ROYALTIES", "0.2", y=880, size=40, out="@{all I got was a plaque}") + plate("“ALL I GOT WAS A PLAQUE”", "@{all I got was a plaque}", y=880, size=44, color="C6.accent") + src("Big Mac Museum, North Huntingdon, PA · CC0 · 1967 photo: railfan 44, public domain", "0.4")),
dict(start="for people who worked hard and needed", tag=C11, stock=K("wm-homestead-night"), alt=(K("steel-hyperlapse"), "and needed a big"), sfx=[], el=""),
dict(start="That's who fast food was built for", archive=True, tag=C11, stock=K("wm-shift-1942"), alt=(K("doctor-wipe"), "People like Mariam"), sfx=[],
     el=src("Illustrative footage", "@{People like Mariam}")),
dict(start="People like her brother behind the register", tag=C11, stock=K("bag-packing"), sfx=[], el=src(ILL, "0.3")),
dict(start="So maybe the question was never", tag=C11, stock=K("r-midnight-lineup"), alt=(K("r-town-street-sunset"), "Maybe it's whether"), dim=0.2, sfx=[],
     el=plate("DO THEY STILL REMEMBER WHO THEY BUILT IT FOR?", "@{still remember who}", y=880, size=38, color="C6.accent")),
dict(start="How many minutes of work does your lunch", tag=C11, end_pad=17.0, sfx=[('ding:0.3', '@{Tell me in the comments}')],
     el='<In at={0.05} out={8.5} from="fade"><div style={{ position: "absolute", inset: 0 }}>' + watches([w(10, "1968", "AVERAGE WORKER", at=0.05, still=True), w(51, "2026 · $7.25/HR", "FEDERAL MINIMUM", at=0.05, still=True, redAt=0.05, color="C6.loss")], size=480, gap=200, y=450) +
        plate("HOW MANY MINUTES DOES YOUR LUNCH COST? ↓", "@{Tell me in the comments}", y=930, size=38, color="C6.accent") + '</div></In>' +
        '<In at={8.9} from="fade"><div style={{ position: "absolute", inset: 0 }}>' + watches([w(10, "1968", "AVERAGE WORKER", at=8.9, still=True), w(51, "2026 · $7.25/HR", "FEDERAL MINIMUM", at=8.9, still=True, redAt=8.9, color="C6.loss")], size=250, gap=140, y=230) + '</div></In>'),
]

# музыка по главам (Фонотека YouTube, автора указывать не нужно; треки из прошлых выпусков — см. отчёт)
EP["music_at"] = [
    ("When this sandwich was invented", "audio/t07/music-c0-open.mp3", 0.07),
    ("College kid with five bucks", "audio/t02/music-c4-history.mp3", 0.075),
    ("San Bernardino, California", "audio/t05/music-c2-history.mp3", 0.075),
    ("For the next few decades", "audio/t08/shady-guise.mp3", 0.075),
    ("Now let's jump to the moment cheap fast food peaked", "audio/t03/music-c4-who.mp3", 0.075),
    ("In 2008, the cheese answered", "audio/t07/music-c3-timing.mp3", 0.075),
    ("Now let me introduce you to someone", "audio/t08/night-falls.mp3", 0.07),
    ("So why is everything inside that ten dollars", "audio/t07/music-c4-algo.mp3", 0.075),
    ("Here's the math", "audio/t08/dollar-signs.mp3", 0.075),
    ("And here's the part where the company itself", "audio/t08/system-corruption.mp3", 0.075),
    ("So McDonald's started walking it back", "audio/t05/music-c5-how.mp3", 0.08),
]

# T11 (контролёр): жёсткие склейки без провала в фон; короткая карточка главы (~1,5 с) в паузе перед главой
EP["hard_cuts"] = True
_seen = set()
for _sc in S:
    _t = _sc.get("tag")
    if _t and _t not in _seen:
        _seen.add(_t)
        strong = _t[0] == 9
        _sc["lead"] = 1.0
        _sc["hard"] = True
        _sc.setdefault("sfx", []).insert(0, ("ep06-boom:0.35" if strong else "ep06-whoosh:0.2", "0.5" if strong else "0.05"))
        _sc["_flash"] = f'<ChapterFlash n={{{_t[0]}}} title="{_t[1]}" out={{1.45}}{" strong" if strong else ""} />'

# урок T09/T10: графическим сценам — медленный свет фона (Drift), иначе неподвижность >3 с
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", ""):
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"
for _sc in S:
    if _sc.get("_flash"): _sc["el"] = _sc["el"] + _sc.pop("_flash")
    _sc["sfx"] = list(dict.fromkeys(_sc.get("sfx", [])))
