# T10 «Restaurants Got Greedy. Now They're Empty.» — десятый ролик They Saw You Coming (план сцен 27.11.2026).
# Окраска: детектив-триллер с сухой сатирой. Один чек (Earls, Денвер) открывает и закрывает историю.
# Визуальная идея (своя для выпуска): ЗАЛ РЕСТОРАНА СВЕРХУ (src/brand/t10.tsx: DiningRoom) — места-точки гаснут
#   (Gallup 53 → 39 %), в главе закрытий свет гаснет целиком, на повороте с Chili's зал снова полон, в финале — тёплый.
#   Отличие от T06 (чек растёт), T07 (след денег), T08 (табло), T09 (бирка).
# Начало: холодный вход — чек и три строки к 0:12, Fox/Reddit к 0:25, отсылка к хиту T06 к ~0:33, Gallup к ~0:45,
#   отложенное обещание (сеть, сделавшая наоборот) к ~1:05. Первая польза («можно просто попросить») к ~2:40.
# Под ТВ и зрителя 55+: суммы — вслух и крупно, одна цифра на кадр, цифра держится ≥3 с.
# Нарастание глав: чек → сборы (почему и сколько стоят ресторану) → экран чаевых и «surge pricing» → уход и закрытия →
#   поворот: Chili's → что делать.
# Живые кадры (решение Павла 25.11): CBS (вывеска CLOSED), FOX 5 (закрытые ставни, Wendy's), ABC ×2 (цитата CEO Wendy's,
#   заявление Wendy's), реклама Chili's с перцем (предмет разговора). Без их звука. После загрузки — проверить Content ID.
# Формулировки фактчекера не менять: Bahama Breeze — 14 закрыто, остальные переделывают; Wendy's — 5–6 %;
#   банкротство — компания-владелец Smokey Bones; Duffy's — без причинной связи; Big Smasher — «Chili's says».
import json, os, re
from evid import ev

EP = dict(
    comp="T10Rest",
    words="src/videos/t10-rest-words.json",
    text="cloud/voice/t10-text",
    parts=6,
    broll="cloud/broll/t10.json",
    audio="audio/t10-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03", "t06", "t07", "t08", "t10"],
    music=[],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t10.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t10-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

C2, C3, C4, C5, C6x = (2, "The Fee"), (3, "The Screen"), (4, "The Exit"), (5, "The Opposite"), (6, "Your Move")
_EVD = f"{_R}/public/evidence/t10"


def has(name, phrase=None):
    p = f"{_EVD}/{name}.json"
    if not os.path.exists(p): return False
    return phrase is None or phrase in json.load(open(p))["finds"]


def doc(name, marks=(), source=None, fb="", **kw):
    """улика, если скачалась и фразы найдены; иначе запасной el (fb)"""
    if not has(name) or any(not has(name, d) for d, _ in marks): return fb
    kw.setdefault("zoom", 0.9)  # урок T02: не загонять камеру в голый текст
    top = name.rsplit("-", 1)[0] + "-top"
    if not name.endswith("-top") and "inset" not in kw and has(top): kw["inset"] = top
    return ev("t10", name, marks=list(marks), source=source, **kw)


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


def src(text, at="0.3"):
    return f"<Source6 at={{{at}}}>{text}</Source6>"


def quote(text, who, at="0.3", size=72, hl=None, y=430):
    h = json.dumps(hl or [])
    return f'<Center y={{{y}}}><Words text={json.dumps(text, ensure_ascii=False)} at={{{at}}} size={{{size}}} maxW={{1500}} hl={{{h}}} /></Center>' + \
        f'<Center y={{{y + 260}}}><Label6 at={{{at}}} size={{30}} color={{C6.mint}}>{who}</Label6></Center>'


def receipt(at="0.05", burger="0.05", fries="0.05", fee="0.05", hl=None, circle=None, x=960, y=540, w=860, scale=1):
    h = f", hlAt: {hl}" if hl else ""
    c = f" circleAt={{{circle}}} circleLine={{2}}" if circle else ""
    return f'<Center x={{{x}}} y={{{y}}}><div style={{{{ scale: "{scale}" }}}}><Receipt10 at={{{at}}} w={{{w}}}{c} lines={{[{{ label: "BURGER", value: "$24.75", at: {burger} }}, {{ label: "TRUFFLE FRIES UPGRADE", value: "$3.00", at: {fries} }}, {{ label: "ADMIN FEE", value: "$0.83", at: {fee}, fee: true{h} }}]}} /></div></Center>'


def room(x=960, **kw):
    expr = lambda v: not isinstance(v, str) or v.startswith("@{") or re.fullmatch(r"[\d.]+", v)
    a = " ".join(f'{k}={{{v}}}' if expr(v) else f'{k}="{v}"' for k, v in kw.items())
    return f"<Center x={{{x}}} y={{500}}><DiningRoom {a} /></Center>"


AS_POSTED = "THE RECEIPT AS POSTED ON REDDIT · OUR RECREATION"
ILL = "ILLUSTRATIVE FOOTAGE"

S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД · ЧЕК =======================
dict(start="Twenty-four dollars and seventy-five cents", sfx=[('ep06-receipt:0.3', '0.05'), ('ep06-pop:0.25', '@{Plus three dollars}'), ('ep06-stamp:0.3', '@{Admin fee}')],
     el=ev("t10", "reddit-receipt", marks=[("burger", "For one burger"), ("truffle", "Plus three dollars"), ("admin", "Admin fee")], source="REDDIT · r/EndTipping · OCT 2026 · SERVER'S NAME BLURRED", zoom=0.62, focus=(0, 0, 940, 1244)) +
        plate("ADMIN FEE · 83¢", "@{Eighty-three cents}", y=960, size=44, color="C6.loss")),
dict(start="This is a real receipt from a restaurant in Denver", stock=K("denver-aerial"), sfx=[],
     el=plate("DENVER, COLORADO", "0.2", y=880, size=44)),
dict(start="Somebody posted it on Reddit", sfx=[('t02-paper:0.3', '0.05')],
     el=doc("fox-earls", [("Earls", "ended up on Fox News")], source="FOX NEWS · NOV 2026", focus=(60, 180, 1640, 900), fb=f'<Center y={{470}}><Words text="Posted on Reddit. Picked up by Fox News." at={{0.1}} size={{84}} maxW={{1500}} hl={{["Reddit.", "Fox"]}} /></Center>' + src("Fox News · Nov 9, 2026"))),
dict(start="The man who paid it had one question", sfx=[('ep06-pop:0.25', '@{What is an admin fee}'), ('ep06-stamp:0.3', '@{No tip for you}')],
     el=ev("t10", "reddit-post", marks=[("what the hell", "What is an admin fee"), ("no tip", "No tip for you")], source="REDDIT · r/EndTipping · OCT 2026 · USERNAME HIDDEN", zoom=1.4, focus="what the hell")),
dict(start="Last time on this channel", dim=0.0, sfx=[('ep06-counter:0.3', '@{thirty-one}')],
     el='<Center y={440}><Words text="$14 → $31" at={0.15} size={200} hl={["$31"]} /></Center>' + plate("LAST TIME: ONE BURGER, FROM THE MENU TO THE TERMINAL", "0.3", y=760, size=34)),
dict(start="This story is bigger", stock=K("wm-closed-fudd"), alt=(K("restaurant-aerial-night"), "They're emptying restaurants"), sfx=[('impact:0.3', "@{They're emptying restaurants}")],
     el=plate("THEY'RE EMPTYING RESTAURANTS", "@{They're emptying restaurants}", y=880, size=56, color="C6.accent")),
dict(start="In 2019, fifty-three percent", dim=0.0, sfx=[('ep06-fall:0.3', '@{Thirty-nine percent}')],
     el=room(x=820, at="0.05", **{"from": 0.53}, to=0.39, toAt="@{Thirty-nine percent}", pctFrom="53%", pctTo="39%", label="AMERICANS WHO EAT AT A RESTAURANT AT LEAST ONCE A WEEK · GALLUP", w=1000) +
        plate("2019", "0.1", y=980, x=360, size=36) + plate("2026", "@{This summer}", y=980, x=1560, size=36, color="C6.loss")),
dict(start="The lowest number Gallup has ever recorded", sfx=[('t02-paper:0.3', '0.05')],
     el=doc("fox5-gallup", [("39%", "lowest number")], source="FOX 5 ATLANTA · GALLUP, JULY 2026",
            fb=f'<Center y={{460}}><Words text="Lowest ever recorded." at={{0.1}} size={{110}} hl={{["Lowest"]}} /></Center>' + src("Gallup · July 2026"))),
dict(start="So what happened", stock=K("waitress-closing"), sfx=[('ep06-pop:0.25', '@{everything got expensive}')],
     el=plate("EVERYTHING GOT EXPENSIVE", "@{everything got expensive}", y=880, size=46, out="@{only half the story}") +
        plate("…ONLY HALF THE STORY", "@{only half the story}", y=880, size=46, color="C6.accent")),
dict(start="The other half is what restaurants did about it", stock=K("pos-restaurant"), sfx=[],
     el=plate("THE OTHER HALF: WHAT RESTAURANTS DID ABOUT IT", "0.2", y=880, size=38)),
dict(start="And before we're done", stock=K("friends-orlando"), sfx=[('rise:0.25', '@{the one big chain}')],
     el=plate("ONE BIG CHAIN DID THE EXACT OPPOSITE", "@{the one big chain}", y=880, size=42, color="C6.accent", out="@{And packed its dining rooms}") +
        plate("…AND PACKED ITS DINING ROOMS", "@{And packed its dining rooms}", y=880, size=42)),

# ======================= PART 2 · ГЛАВА 2 · СБОР =======================
dict(start="Let's be fair to restaurants", tag=C2, hard=True, stock=K("chef-focused"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("THEIR COSTS ARE REAL", "0.3", y=880, size=44)),
dict(start="The National Restaurant Association says", tag=C2, stock=None if has("nra-costs2", "36%") else K("calc-receipts"), sfx=[('ep06-counter:0.3', '@{thirty-six percent}')],
     el=doc("nra-costs2", [("36%", "thirty-six percent")], source="NATIONAL RESTAURANT ASSOCIATION", inset=None, fb=src("National Restaurant Association", "0.2")) +
        plate("COST OF RUNNING A RESTAURANT: +36% SINCE BEFORE THE PANDEMIC", "@{thirty-six percent}", y=960, size=32, color="C6.accent")),
dict(start="And forty-two percent of restaurants told the association", dim=0.0, sfx=[('ep06-counter:0.3', '0.1'), ('impact:0.25', '@{Forty-two percent}')],
     el='<Center y={470}><Donut6 at={0.1} pct={42} center="42%" label="OF RESTAURANTS: NO PROFIT LAST YEAR" color={C6.loss} /></Center>' + src("National Restaurant Association · via WTOP, Feb 2026", "0.4")),
dict(start="So every owner faced the same choice", dim=0.0, sfx=[('ep06-pop:0.25', '@{Raise the menu price}'), ('ep06-pop:0.25', '@{Or keep the menu price}'), ('ding:0.25', "@{somewhere you won't look}")],
     el="<Center y={480}><ForkRoad at={0.1} bAt={@{Or keep the menu price}} hlAt={@{somewhere you won't look}} /></Center>"),
dict(start="A lot of them picked door number two", dim=0.0, sfx=[('ep06-stamp:0.22', '@{A service fee}'), ('ep06-stamp:0.22', '@{A kitchen appreciation fee}'), ('ep06-stamp:0.22', '@{An operations charge}'), ('ep06-stamp:0.3', '@{An admin fee}')],
     el=plate("DOOR NUMBER TWO", "0.1", y=150, size=36, color="C6.accent") + '<Center y={540}><FeeStamps fees={[{ text: "SERVICE FEE", at: @{A service fee} }, { text: "KITCHEN APPRECIATION FEE", at: @{A kitchen appreciation fee} }, { text: "OPERATIONS CHARGE", at: @{An operations charge} }, { text: "ADMIN FEE", at: @{An admin fee}, red: true }]} /></Center>'),
dict(start="One bar in Minnesota added five percent", stock=K("bar-beer"), alt=(K("cracker-dip"), "a dollar for extra crackers"), sfx=[('ep06-pop:0.25', '@{five percent}'), ('ep06-kaching:0.25', '@{a dollar for extra crackers}')],
     el=plate("A MINNESOTA BAR · +5% FOR EMPLOYEE HEALTH CARE", "@{five percent}", y=880, size=36, out="@{a dollar for extra crackers}") +
        plate("+$1.00 · EXTRA CRACKERS", "@{a dollar for extra crackers}", y=880, size=52, color="C6.accent") + src("Restaurant Business · 2026", "0.4")),
dict(start="On paper, it's genius", stock=K("couple-menu"), sfx=[('ep06-pop:0.25', '@{The menu still says}')],
     el=plate("ON PAPER: GENIUS", "0.1", y=880, size=46, out="@{The menu still says}") + plate("THE MENU STILL SAYS $24.75", "@{The menu still says}", y=880, size=46, color="C6.accent")),
dict(start="There's just one problem", stock=K("frustrated-receipts"), alt=(K("woman-upset"), "The customer still reads"), sfx=[],
     el=plate("THE CUSTOMER STILL READS THE RECEIPT", "@{The customer still reads}", y=880, size=44)),
dict(start="The research firm Technomic asked", sfx=[('t02-paper:0.3', '0.05')],
     stock=K("calc-receipts"), el=plate("TECHNOMIC · 1,000 DINERS · AN AUTOMATIC FEE ON THE BILL", "0.2", y=880, size=36) + src("Technomic survey · via Restaurant Business", "0.4")),
dict(start="The most common answer, from four in ten people", dim=0.0, sfx=[('ep06-counter:0.3', '0.1'), ('impact:0.25', "@{I'd be less likely}")],
     el='<Center y={450}><Donut6 at={0.1} pct={40} center="40%" label="“I’D BE LESS LIKELY TO COME BACK”" /></Center>' + src("Technomic survey · via Restaurant Business", "0.4")),
dict(start="Technomic's own consumer insights director", dim=0.0, sfx=[('ep06-pop:0.25', '@{You feel like}')],
     el=doc("rb-technomic2", [("cable bill", "paying a cable bill")], source="RESTAURANT BUSINESS · ROBERT BYRNE, TECHNOMIC", inset=None,
            fb=plate("TECHNOMIC'S CONSUMER INSIGHTS DIRECTOR", "0.1", y=200, size=32) + quote("“You feel like you’re paying a cable bill.”", "ROBERT BYRNE · TECHNOMIC", at="@{You feel like}", size=96, hl=["cable", "bill.”"]))),
dict(start="That's this whole video in one sentence", sfx=[('ep06-pop:0.25', '@{eighty-three cents}')],
     el=ev("t10", "reddit-receipt", marks=[("admin", "eighty-three cents")], source="REDDIT · r/EndTipping · OCT 2026", zoom=1.3, focus="admin")),
dict(start="It costs the restaurant you", stock=K("alone-candle"), dim=0.2, sfx=[('impact:0.35', '0.1')],
     el=plate("IT COSTS THE RESTAURANT YOU", "0.1", y=880, size=56, color="C6.accent")),
dict(start="And here's what they don't print on the receipt", stock=K("elderly-pay-waiter"), sfx=[('ding:0.3', '@{you can just ask}')],
     el=plate("TRICK #1 · YOU CAN JUST ASK", "@{you can just ask}", y=880, size=46, color="C6.accent")),
dict(start="One big Chicago restaurant group told ABC 7", stock=K("waiter-thumbs"), sfx=[('t02-paper:0.3', '0.05'), ('ep06-pop:0.25', '@{On request. Most}')],
     el=plate("A CHICAGO RESTAURANT GROUP TO ABC 7: “ON REQUEST, THE CHARGE WILL BE REMOVED”", "0.2", y=880, size=30, color="C6.accent", out="@{Most people never ask}") + src("ABC 7 Chicago", "0.3") +
        plate("MOST PEOPLE NEVER ASK", "@{Most people never ask}", y=880, size=44, color="C6.accent")),

# ======================= PART 3 · ГЛАВА 3 · ЭКРАН =======================
dict(start="But the fee wasn't the only surprise", tag=C3, hard=True, stock=K("card-terminal"), sfx=[('ep06-whoosh:0.2', '0.05'), ('ep06-stamp:0.25', '@{The screen was}')],
     el=plate("THE SCREEN WAS", "@{The screen was}", y=880, size=52, color="C6.accent")),
dict(start="You know the one", dim=0.0, sfx=[('swoosh:0.25', '@{Somebody spins the tablet}'), ('ep06-pop:0.2', '@{Twenty. Twenty-two}'), ('ep06-pop:0.2', '@{Twenty-two. Twenty-five}'), ('ep06-pop:0.2', '@{Twenty-five. At}')],
     el='<Center y={500}><TipScreen at={0.1} total="" label="" sub="ADD A TIP?" w={600} /></Center>' + plate("ILLUSTRATION", "0.3", y=990, size=22, color="C6.mint")),
dict(start="At a counter where you ordered your own food", stock=K("kiosk-bar"), alt=(K("tablet-cafe"), "and carried it"), sfx=[],
     el=plate("YOU ORDERED IT. YOU CARRIED IT.", "@{and carried it}", y=880, size=46)),
dict(start="Bankrate asked Americans about this last year", dim=0.0, sfx=[('ep06-counter:0.3', '@{Forty-one percent}'), ('impact:0.25', '@{up six points}')],
     el='<Center y={470}><TwoBars at={0.1} a={{ label: "A YEAR EARLIER", value: "35%", v: 35 }} b={{ label: "2025", value: "41%", v: 41, color: C6.loss, at: @{Forty-one percent} }} h={440} /></Center>' +
        plate("“TIPPING CULTURE IS OUT OF CONTROL”", "@{out of control}", y=940, size=34, color="C6.accent") + src("Bankrate survey · 2025", "0.4")),
dict(start="And nearly two in five said the pre-set tip screen", stock=K("pos-woman"), sfx=[('ep06-pop:0.25', '@{two in five}')],
     el=plate("~2 IN 5: THE PRE-SET TIP SCREEN BUGS THEM", "@{two in five}", y=880, size=40, color="C6.accent") + src("Bankrate · 2025", "0.4")),
dict(start="So people did what people do", stock=None if has("rd-popmenu", "35%") else K("cash-tip-bar"), sfx=[('ep06-counter:0.3', '@{thirty-five percent}')],
     el=doc("rd-popmenu", [("35%", "thirty-five percent")], source="RESTAURANT DIVE · POPMENU SURVEY, 2026", inset=None,
            fb=plate("THEY PUSHED BACK", "@{They pushed back}", y=880, size=46, out="@{thirty-five percent}") + src("Popmenu survey · 2026", "0.4")) +
        plate("35% OF DINERS CUT HOW OFTEN OR HOW MUCH THEY TIP", "@{thirty-five percent}", y=960, size=34, color="C6.accent")),
dict(start="The screen that was supposed to squeeze", stock=K("waitress-wipe"), sfx=[],
     el=plate("NOW IT'S SQUEEZING THE SERVER", "@{Now it's squeezing}", y=880, size=46, color="C6.accent")),
dict(start="And the fees make it worse", stock=K("couple-calc"), dim=0.55, sfx=[('ep06-pop:0.25', '@{more than a quarter}')],
     el=plate("THE FEES MAKE IT WORSE", "0.1", y=880, size=40, out="@{more than a quarter}") + '<Center y={440}><BigNum at={@{more than a quarter}} size={220} label="THINK A SERVICE FEE IS THE TIP · TECHNOMIC">25%+</BigNum></Center>'),
dict(start="Except in a lot of restaurants, it isn't the tip", dim=0.0, sfx=[('ep06-pop:0.25', '@{the owner adds a fee}'), ('ep06-pop:0.25', '@{the customer skips the tip}'), ('ep06-fall:0.25', '@{goes home with less}')],
     el=plate("IT ISN'T THE TIP", "0.1", y=200, size=40, color="C6.accent") + '<Center y={480}><ThreeMoves steps={[{ word: "FEE", sub: "the owner adds", at: @{the owner adds a fee} }, { word: "NO TIP", sub: "the customer skips", at: @{the customer skips the tip} }, { word: "LESS", sub: "for the server", at: @{goes home with less} }]} /></Center>'),
dict(start="Everybody loses", stock=K("dishwashing"), sfx=[('ep06-stamp:0.3', '@{Except the receipt}')],
     el=plate("EVERYBODY LOSES", "0.05", y=880, size=50, out="@{Except the receipt}") + plate("…EXCEPT THE RECEIPT", "@{Except the receipt}", y=880, size=50, color="C6.accent")),
dict(start="And when the industry tried to get even cleverer", stock=K("wm-wendys"), sfx=[],
     el=plate("WENDY'S · FEBRUARY 2024", "@{In 2024}", y=880, size=40) + src("Photo: Missvain · CC BY 4.0", "0.3")),
dict(start="the new CEO of Wendy's told investors", stock=K("live-abc-ceo"), clean=True, sfx=[('ep06-pop:0.25', '@{dynamic pricing}')],
     el=src("Footage: ABC News · 2024", "0.3")),
dict(start="The internet heard two words", dim=0.0, sfx=[('impact:0.3', '@{Surge pricing}')],
     el=doc("axios-wendys", [("surge pricing", "Surge pricing")], source="AXIOS · FEB 28, 2024",
            fb=plate("THE INTERNET HEARD TWO WORDS", "0.1", y=200, size=36) + '<Center y={470}><Words text="“SURGE PRICING”" at={@{Surge pricing}} size={150} hl={["“SURGE", "PRICING”"]} /></Center>')),
dict(start="A burger that costs more at lunch", stock=K("rain-windshield"), sfx=[('ep06-pop:0.25', '@{like an Uber}')],
     el=plate("A BURGER THAT COSTS MORE AT LUNCH", "0.1", y=880, size=40, out="@{like an Uber}") + plate("…LIKE AN UBER IN THE RAIN", "@{like an Uber}", y=880, size=46, color="C6.accent")),
dict(start="About two weeks later, Wendy's put out a statement", stock=K("live-abc-statement"), clean=True, sfx=[('ep06-stamp:0.25', '@{It would not raise prices}')],
     el=src("Footage: ABC News · 2024", "0.3")),
dict(start="Burger King jumped right in", stock=None if has("nbc-surge", "No urge to surge") else K("wm-bk-houston"), sfx=[('ding:0.25', '@{No Urge to Surge}')],
     el=doc("nbc-surge", [("No urge to surge", "No Urge to Surge")], source="NBC CHICAGO · FEB 2024", inset=None, fb=src("Photo: Quintin Soloviev · CC BY 4.0", "0.3")) +
        plate("BURGER KING: “NO URGE TO SURGE”", "@{No Urge to Surge}", y=960, size=40, color="C6.accent")),
dict(start="The lesson", stock=K("wm-closed-boston"), alt=(K("closed-sign-flip"), "They leave"), sfx=[('impact:0.3', '@{They leave}')],
     el=plate("THEY DON'T MAKE A SCENE", "@{They just don't make a scene}", y=880, size=44, out="@{They leave}") + plate("THEY LEAVE.", "@{They leave}", y=880, size=60, color="C6.accent")),

# ======================= PART 4 · ГЛАВА 4 · УХОД =======================
dict(start="And leaving is exactly what the numbers show", tag=C4, hard=True, stock=K("sorry-closed"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("RESTAURANT PRICES CLIMB FASTER THAN GROCERIES", "@{Restaurant prices keep}", y=880, size=38)),
dict(start="In August, menu prices", tag=C4, dim=0.0, sfx=[('ep06-pop:0.25', '@{menu prices were up}'), ('ep06-pop:0.25', '@{Groceries, two point two}')],
     el='<Center y={470}><TwoLines at={0.2} aAt={@{menu prices were up}} bAt={@{Groceries, two point two}} /></Center>'),
dict(start="Every month that gap grows", stock=K("cooking-pan"), alt=(K("spaghetti-home"), "your own kitchen"), sfx=[],
     el=plate("YOUR OWN KITCHEN LOOKS A LITTLE BETTER", "@{your own kitchen}", y=880, size=42)),
dict(start="One survey this year found six in ten", dim=0.0, sfx=[('ep06-counter:0.3', '@{six in ten}')],
     el='<Center y={450}><Donut6 at={0.1} pct={60} center="6 in 10" label="AMERICANS EATING OUT LESS OFTEN" /></Center>' + src("Popmenu surveys · 2026", "0.4")),
dict(start="And the meal they're cutting most is dinner", stock=K("table-setting"), sfx=[('ep06-stamp:0.25', '@{is dinner}')],
     el=plate("CUT THE MOST: DINNER", "@{is dinner}", y=880, size=50, color="C6.accent", out="@{The one with the tip screen}") +
        plate("THE ONE WITH THE TIP SCREEN AND THE FEE", "@{The one with the tip screen}", y=880, size=40)),
dict(start="The first people to go", stock=K("empty-drive-thru"), sfx=[],
     el=plate("FIRST TO GO: THE ONES WITH THE LEAST TO SPARE", "0.3", y=880, size=38)),
dict(start="Early last year, the CEO of McDonald's", stock=K("frustrated-receipts"), sfx=[('t02-paper:0.3', '0.05'), ('ep06-fall:0.25', '@{nearly double digits}')],
     el=src("McDonald's CEO, Q1 2025 call · via Axios", "0.3") + plate("McDONALD'S CEO: LOW-INCOME FAST FOOD VISITS DOWN NEARLY DOUBLE DIGITS", "@{nearly double digits}", y=880, size=32, color="C6.accent")),
dict(start="Middle-income visits fell almost as much", stock=K("drive-thru-pay"), sfx=[],
     el=plate("MIDDLE-INCOME VISITS: ALMOST AS MUCH", "0.1", y=880, size=42)),
dict(start="Then came the closures", stock=K("live-cbs-closed"), clean=True, sfx=[('impact:0.35', '0.1')],
     el=src("Footage: CBS News · 2026", "0.3")),
dict(start="Wendy's said it would close", stock=K("live-fox5-shutters"), clean=True, sfx=[('ep06-counter:0.3', '@{five to six percent}')],
     el=plate("WENDY'S: CLOSING 5–6% OF U.S. STORES", "@{five to six percent}", y=150, size=36, color="C6.accent") + src("Footage: FOX 5 New York", "0.3")),
dict(start="That's roughly three hundred places", stock=None if has("wsb-wendys") else K("wm-former-wendys"), sfx=[('ep06-pop:0.25', '@{two hundred and forty}')],
     el=(doc("wsb-wendys", [], source="WSB-TV · FEB 2026") if has("wsb-wendys") else src("Photo: Pokemonprime · CC BY 4.0 (a former Wendy's)", "0.3")) +
        plate("≈300 PLACES", "0.1", y=960, size=46, color="C6.accent", out="@{on top of two hundred}") + plate("+240 ALREADY CLOSED IN 2024", "@{two hundred and forty}", y=960, size=42)),
dict(start="Darden pulled the plug on Bahama Breeze", stock=K("wm-bahama"), sfx=[('ep06-stamp:0.3', '@{Fourteen locations}')],
     el=plate("BAHAMA BREEZE · 14 CLOSED FOR GOOD · APRIL 5", "@{Fourteen locations}", y=880, size=40, color="C6.accent", out="@{The rest are being}") + plate("THE OTHER 14 → OTHER DARDEN RESTAURANTS", "@{The rest are being}", y=880, size=38) + src("Photo: Nielsoncaetanosalmeron · CC BY 4.0", "0.3")),
dict(start="And the company behind Smokey Bones", stock=None if has("ibt-smokey", "Chapter 11") else K("wm-smokey"), sfx=[('ep06-stamp:0.3', '@{filed for bankruptcy}')],
     el=doc("ibt-smokey", [("Chapter 11", "filed for bankruptcy")], source="IBTIMES · APRIL 2026", inset=None, fb=src("Photo: v343790 · CC BY 3.0", "0.3")) +
        plate("SMOKEY BONES' PARENT COMPANY · CHAPTER 11 · JANUARY 2026", "@{filed for bankruptcy}", y=960, size=32, color="C6.accent")),
dict(start="And Gallup found one more number", stock=K("stressed-man"), sfx=[],
     el=plate("ONE MORE NUMBER", "0.2", y=880, size=44)),
dict(start="In 2019, about one in ten", dim=0.0, sfx=[('ep06-pop:0.25', '@{one in ten}'), ('ep06-fall:0.3', "@{Now it's one in five}")],
     el=plate("EAT OUT ONLY A FEW TIMES A YEAR", "0.1", y=200, size=36) + '<Center x={620} y={500}><BigNum at={@{one in ten}} size={180} label="2019">1 in 10</BigNum></Center>' + '<Center x={1300} y={500}><BigNum at={@{Now it\'s one in five}} size={180} color={C6.loss} label="2026">1 in 5</BigNum></Center>' + src("Gallup · via Fox News / NewsNation", "0.4")),
dict(start="That's not a customer who skipped one dinner", stock=K("family-cooking"), alt=(K("family-dinner"), "That's a customer who learned"), sfx=[('ding:0.25', '@{learned to cook}')],
     el=plate("A CUSTOMER WHO LEARNED TO COOK", "@{learned to cook}", y=880, size=50, color="C6.accent")),
dict(start="If you want to see the next bill taken apart", dim=0.0, sfx=[('ding:0.25', '@{subscribe}')],
     stock=K("cafe-workers-neon"), el='<Subscribe6 at={@{subscribe}} />' + plate("EVERY WEEK · ONE BILL · LINE BY LINE", "@{Every week}", y=990, size=32, color="C6.accent")),

# ======================= PART 5 · ГЛАВА 5 · НАОБОРОТ =======================
dict(start="So here's the question", tag=C5, hard=True, dim=0.0, sfx=[('ep06-whoosh:0.2', '0.05'), ('rise:0.3', '@{how did one big chain}')],
     el=room(at="0.05", **{"from": 0.39}, fillAt="@{win them}", label="IF EVERYBODY IS LOSING CUSTOMERS…", w=1000)),
dict(start="This summer, a different guy posted", stock=K("burger-parking"), sfx=[],
     el=plate("JULY 2026 · A POST ON X", "0.2", y=880, size=42) + src(ILL, "0.4")),
dict(start="A Bacon King meal on a Burger King menu", dim=0.0, sfx=[('ep06-kaching:0.3', '@{Eighteen dollars}')],
     el=plate("A BACON KING MEAL · BURGER KING MENU", "0.1", y=300, size=38) + '<Center y={520}><Words text="$18.19" at={@{Eighteen dollars}} size={220} hl={["$18.19"]} /></Center>' + src("Price as posted on X · via Fox News, July 2026", "0.4")),
dict(start="His caption", dim=0.0, sfx=[('ep06-pop:0.25', '@{why should I}')],
     el=quote("“Why should I get this when I could just go to a restaurant?”", "A BURGER KING CUSTOMER ON X · VIA FOX NEWS", at="@{why should I}", size=78, hl=["restaurant?”"])),
dict(start="And a restaurant answered him", stock=K("wm-chilis-chico"), sfx=[('ding:0.3', "@{Chili's. This}")],
     el=plate("CHILI'S", "@{Chili's. This}", y=880, size=60, color="C6.accent") + src("Photo: Frank Schulenburg · CC BY-SA 4.0", "0.3")),
dict(start="This is what we've been saying", dim=0.0, sfx=[('ep06-pop:0.25', "@{why do y'all}")],
     el=plate("CHILI'S, ON X", "0.1", y=200, size=36, color="C6.accent") + quote("“Why do y’all let fast food play you like this?”", "CHILI'S, REPLYING ON X · JULY 2026", at="0.2", size=86, hl=["play", "you"])),
dict(start="A chicken sandwich, fries, bottomless chips", stock=K("salsa-pour"), alt=(K("chips-salsa"), "and an unlimited drink"), sfx=[('ep06-kaching:0.3', '@{Ten ninety-nine. That}')],
     el=plate("SANDWICH · FRIES · BOTTOMLESS CHIPS & SALSA · UNLIMITED DRINK", "0.1", y=880, size=32, out="@{Ten ninety-nine. That}") +
        plate("$10.99", "@{Ten ninety-nine. That}", y=880, size=80, color="C6.money")),
dict(start="That reply got more than five million views", dim=0.0, sfx=[('ep06-counter:0.35', '0.1')],
     el="<Center y={470}><ViewCount at={0.15} /></Center>" + src("Fox News · July 2026", "0.4")),
dict(start="Here's the twist", stock=K("wm-chilis-cc0"), alt=(K("live-chilis-price"), "put one price in giant letters"), sfx=[('ep06-kaching:0.3', '@{Three for Me}')],
     el=plate("EVERYONE ELSE: MONEY IN THE FINE PRINT", "0.2", y=880, size=38, out="@{put one price in giant letters}") +
        plate("CHILI'S: ONE PRICE · GIANT LETTERS", "@{put one price in giant letters}", y=150, size=36, color="C6.accent") + src("Chili's TV ad · 2024", "@{put one price in giant letters}")),
dict(start="It wasn't an accident", stock=None if has("fox-chilis-60", "60%") else K("burger-parking"), sfx=[('ep06-counter:0.3', '@{sixty percent}')],
     el=doc("fox-chilis-60", [("60%", "sixty percent")], source="FOX NEWS · FINANCEBUZZ ANALYSIS, 2014–2024", inset=None, fb=src("FinanceBuzz analysis (2014–2024) · via Fox News", "@{sixty percent}")) +
        plate("BIG FAST FOOD CHAINS: PRICES UP ~60% IN A DECADE", "@{sixty percent}", y=960, size=34, color="C6.accent")),
dict(start="So in 2024, Chili's picked a fight", stock=K("burger-close"), sfx=[('impact:0.25', '@{picked a fight}')],
     el=plate("2024 · CHILI'S PICKS A FIGHT", "@{picked a fight}", y=880, size=46, color="C6.accent")),
dict(start="A new burger that Chili's says", stock=K("burger-fries-plate"), sfx=[('ep06-pop:0.25', '@{twice the beef}')],
     el=plate("2× THE BEEF OF A BIG MAC · ACCORDING TO CHILI'S", "@{twice the beef}", y=880, size=38, color="C6.accent")),
dict(start="They even ran an ad where a pepper mascot", stock=K("live-chilis-pepper"), clean=True, sfx=[],
     el=plate("“WE DON'T HAVE TO PAY FOR ANY MASCOTS”", "@{doesn't pay for mascots}", y=120, size=36, color="C6.accent") + src("Chili's TV ad · 2024", "0.3")),
dict(start="And the customers came", dim=0.0, sfx=[('ep06-counter:0.3', '@{twenty-four percent}'), ('ep06-counter:0.3', '@{sixteen percent}')],
     el='<Center x={620} y={430}><BigNum at={0.1} size={190} color={C6.money} label="SALES">+24%</BigNum></Center>' + '<Center x={1300} y={430}><BigNum at={@{sixteen percent}} size={190} color={C6.money} label="GUESTS">+16%</BigNum></Center>' +
        plate("CHILI'S · APRIL–JUNE 2025 · SAME RESTAURANTS", "0.2", y=900, size=32) + src("Brinker earnings · via Restaurant Business", "0.4")),
dict(start="The next quarter", dim=0.0, sfx=[('ep06-counter:0.3', '@{twenty-one percent}')],
     el='<Center x={620} y={430}><BigNum at={0.1} size={190} color={C6.money} label="SALES">+21%</BigNum></Center>' + '<Center x={1300} y={430}><BigNum at={@{thirteen percent}} size={190} color={C6.money} label="GUESTS">+13%</BigNum></Center>' +
        plate("THE NEXT QUARTER", "0.2", y=900, size=32) + src("Brinker Q1 FY2026 call", "0.4")),
dict(start="That was while restaurant operators", stock=K("table-setting"), sfx=[],
     el=plate("EVERYONE ELSE: FEWER CUSTOMERS, MONTH AFTER MONTH", "0.2", y=880, size=36)),
dict(start="Now, Chili's is not a charity", stock=K("wm-chilis-sign"), sfx=[('ep06-pop:0.25', '@{growth cooled off}')],
     el=plate("NOT A CHARITY", "0.1", y=880, size=50, out="@{growth cooled off}") + plate("2026: GROWTH COOLED · PRICES UP TOO", "@{growth cooled off}", y=880, size=40) + src("Photo: Michael Rivera · CC BY-SA 4.0", "0.3")),
dict(start="About one in five guests eats off", dim=0.0, sfx=[('ep06-pop:0.25', '@{one in five}'), ('ep06-pop:0.25', '@{one in eight}')],
     el='<Center x={620} y={460}><BigNum at={@{one in five}} size={180} label="EAT OFF THE 3 FOR ME MENU">1 in 5</BigNum></Center>' + '<Center x={1300} y={460}><BigNum at={@{one in eight}} size={180} label="PICK THE $10.99 VERSION">1 in 8</BigNum></Center>' + src("Brinker Q3 FY2026 call · via Motley Fool", "0.4")),
dict(start="That deal is the bait", stock=K("chips-salsa"), sfx=[('ep06-stamp:0.25', '@{That deal is the bait}'), ('ep06-stamp:0.25', '@{is the business}')],
     el=plate("$10.99 = THE BAIT", "0.05", y=880, size=50, color="C6.accent", out="@{Everything else}") + plate("EVERYTHING ELSE = THE BUSINESS", "@{Everything else}", y=880, size=46)),
dict(start="But it's bait you can see", dim=0.0, sfx=[('ding:0.3', '@{a number you can check}')],
     el=plate("BAIT YOU CAN SEE", "0.1", y=220, size=44) + '<Center y={470}><Words text="A number you can check." at={@{a number you can check}} size={120} hl={["check."]} /></Center>' +
        plate("THAT'S WHAT PEOPLE WERE STARVING FOR", "@{what people were starving for}", y=860, size=38, color="C6.accent")),

# ======================= PART 6 · ГЛАВА 6 · ТВОЙ ХОД =======================
dict(start="So, back to that receipt from Denver", tag=C6x, hard=True, sfx=[('ep06-whoosh:0.2', '0.05'), ('ep06-pop:0.25', '@{eighty-three cents}')],
     el=ev("t10", "reddit-post", marks=[("burger", "Twenty-four seventy-five"), ("truffle", "plus three"), ("admin", "eighty-three cents")], source="REDDIT · r/EndTipping · OCT 2026", zoom=0.55) + plate("HERE'S HOW YOU DON'T GET PLAYED", "@{Here's how}", y=980, size=34, color="C6.accent")),
dict(start="Read the bottom of the menu before you order", stock=K("couple-menu"), sfx=[('ding:0.25', '0.1')],
     el=plate("1 · READ THE BOTTOM OF THE MENU — BEFORE YOU ORDER", "0.1", y=880, size=36, color="C6.accent")),
dict(start="If there's a fee nobody told you about", stock=K("elderly-pay-waiter"), sfx=[('ding:0.25', '0.1')],
     el=plate("2 · A FEE NOBODY TOLD YOU ABOUT? ASK THEM TO TAKE IT OFF", "0.1", y=880, size=34, color="C6.accent")),
dict(start="When the screen spins around", dim=0.0, sfx=[('ding:0.25', '0.1'), ('click:0.3', '@{hit custom}')],
     el='<Center y={480}><TipScreen at={0.05} total="" label="" sub="ADD A TIP?" w={640} /></Center>' +
        plate("3 · HIT CUSTOM · TIP ON THE FOOD, NOT THE FEES", "0.1", y=960, size=34, color="C6.accent")),
dict(start="And if a place keeps hiding the price", dim=0.0, sfx=[('ding:0.25', "@{Don't go back}")],
     el='''<Center y={520}><Checklist w={1240} items={[{ text: "Read the bottom of the MENU, before you order", at: 0.05 }, { text: "A fee nobody told you about? Ask them to take it off", at: 0.2 }, { text: "Tip screen: hit CUSTOM, tip on the food, not the fees", at: 0.35 }, { text: "Still hiding the price? Don’t go back", at: @{Don't go back} }]} /></Center>'''),
dict(start="And the pressure is starting to show", stock=K("pos-restaurant"), sfx=[('ep06-pop:0.25', '@{Florida now makes}')],
     el=plate("FLORIDA: THESE CHARGES SHOWN BEFORE YOU ORDER", "@{Florida now makes}", y=880, size=38, color="C6.accent")),
dict(start="In October, state inspectors cited", stock=K("cafe-workers-neon"), sfx=[('ep06-stamp:0.25', "@{Duffy's sports bar}")],
     el=plate("FLORIDA INSPECTORS CITED A DUFFY'S · 3% FEE ON THE RECEIPT", "@{Duffy's sports bar}", y=880, size=34, color="C6.accent") + src("Fox News · Nov 2026", "0.3")),
dict(start="Since then, the chain has dropped the fee", dim=0.0, sfx=[('ep06-stamp:0.3', '@{dropped the fee}')],
     el='<Center y={470}><Words text="Fee: dropped." at={0.1} size={150} hl={["dropped."]} /></Center>' + plate("DUFFY'S SPORTS GRILL · SINCE THE CITATION", "0.3", y=760, size=32)),
dict(start="Restaurants didn't empty out because", stock=K("friends-laughing"), alt=(K("friends-toast"), "A lot of them emptied out"), sfx=[],
     el=plate("PEOPLE GOT TIRED OF BEING PLAYED", "@{tired of being played}", y=880, size=44, color="C6.accent")),
dict(start="The places that stop playing", dim=0.0, sfx=[('rise:0.3', '0.1')],
     el=room(at="0.05", **{"from": 0.25}, fillAt="0.2", label="THE PLACES THAT STOP PLAYING WILL GET US BACK", w=1000)),
dict(start="Which restaurant lost you for good", dim=0.0, end_pad=5.0, sfx=[('ding:0.3', '@{Tell me in the comments}')],
     el='<Center y={440}><Words text="Which restaurant lost you for good?" at={0.1} size={96} maxW={1500} hl={["for", "good?"]} /></Center>' +
        plate("TELL ME IN THE COMMENTS ↓", "@{Tell me in the comments}", y=720, size=40, color="C6.accent")),
]

# музыка по главам (Фонотека YouTube, автора указывать не нужно; треки из прошлых выпусков — см. компромиссы)
EP["music_at"] = [
    ("Twenty-four dollars and seventy-five cents", "audio/t07/music-c0-open.mp3", 0.07),
    ("Let's be fair to restaurants", "audio/t06/music-c3-fees.mp3", 0.075),
    ("But the fee wasn't the only surprise", "audio/t08/shady-guise.mp3", 0.075),
    ("And leaving is exactly what the numbers show", "audio/t08/night-falls.mp3", 0.075),
    ("So here's the question", "audio/t06/music-c4-toast.mp3", 0.08),
    ("So, back to that receipt from Denver", "audio/t07/music-c5-how.mp3", 0.08),
]

# урок T09/T10: графическим сценам — медленный свет фона (Drift), иначе неподвижность >3 с
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", ""):
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"
