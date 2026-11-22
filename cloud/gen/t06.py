# T06 «The Menu Said $14. The Bill Said $31.» — шестой ролик They Saw You Coming (план сцен 22.11.2026).
# Окраска: сатира (абсурдные сборы, корпоративный язык) + детектив приправой («найдём каждый из семнадцати долларов»).
#   Ресторан не злодей — схема. Toast — только «according to the complaint», Toast оспаривает.
# Визуальная идея (своя для выпуска): ЧЕК, КОТОРЫЙ РАСТЁТ ПО СТРОКЕ (src/brand/t06.tsx, Bill). Один условный заказ
#   («built from real fees», плашка Illustrative example) печатается строкой за строкой: бургер → бекон → картошка →
#   газировка → сбор → налог → плата за карту → чаевые. Чек — в начале, в конце каждой главы и в финале (штампы
#   «you said yes» / «nobody asked»). Талисман: бургер за «14» без знака доллара.
# Начало: холодный вход без трейлера — «14» против «$31.08» к 0:05, «$17.08 — где?» к 0:20, первая уловка (меню без $) к 0:30.
# Нарастание глав: меню (психология, якорь, допы, leaderboard) → газировка (приманка и бизнес) → сборы (имена, Моаб,
#   Аризона, законы, налог, карта) → машина (экран чаевых, Toast, иск FTC — поворот на ~2/3) → как вернуть + два чека.
# Гэги: «For your bacon» (leaderboard), «He'd ordered chicken» (мем), «Depends on where you're sitting» (пожимает плечами).
# Инструменты: устройство-чек, «реклама против документа» (Toast-блог, справка Toast, иск), сравнение двух экранов такси.
import json, os
from evid import ev

EP = dict(
    comp="T06Menu",
    words="src/videos/t06-menu-words.json",
    text="cloud/voice/t06-text",
    parts=6,
    broll="cloud/broll/t06.json",
    audio="audio/t06-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03", "t05", "t06"],
    music=[],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t06.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t06-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

C1, C2, C3, C4, C5 = (1, "The Menu"), (2, "Bait & Business"), (3, "The Fine Print"), (4, "The Machine"), (5, "Take It Back")
ILL = "ILLUSTRATIVE EXAMPLE · BUILT FROM REAL FEES"


def doc(name, marks=(), source=None, **kw):
    kw.setdefault("zoom", 0.9)  # урок T05: сильный наезд резал строки по краям
    for top in ("cornell", "toast-upsell", "mrm", "elliott", "foxnews", "foxbiz"):
        if name.startswith(top + "-") and not name.endswith("-top") or name == top:
            kw.setdefault("inset", f"{top}-top")
    return ev("t06", name, marks=list(marks), source=source, **kw)


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


def src(text, at="0.3"):
    return f"<Source6 at={{{at}}}>{text}</Source6>"


# ---------- чек выпуска ----------
LINES = dict(
    burger=("Classic Burger", "14.00", "food"),
    bacon=("+ Bacon", "3.00", "food"),
    fries=("Truffle fries swap", "2.00", "food"),
    soda=("Soda", "3.50", "food"),
    sub=("SUBTOTAL", "22.50", "food"),
    fee=("Kitchen Appr. Fee 3.5%", "0.79", "fee"),
    tax=("Tax 8%", "1.86", "tax"),
    card=("Card surcharge 3%", "0.75", "fee"),
    tip=("Tip 20%", "5.18", "tip"),
)
ORDER = ["burger", "bacon", "fries", "soda", "sub", "fee", "tax", "card", "tip"]


def bill(show, at=None, hl=None, tags=None, blur=(), total=None, x=960, y=540, w=560, note=ILL, noteAt="0.05", start="-1"):
    """show: ключи строк по порядку; at: {ключ: время печати}; hl: {ключ: время}; tags: {ключ: ("yes"|"no", время)}."""
    at, hl, tags = at or {}, hl or {}, tags or {}
    rows = []
    for k in ORDER:
        if k not in show: continue
        l, v, kind = LINES[k]
        kind = "blur" if k in blur else kind
        s = f'{{ label: "{l}", value: "{v}", kind: "{kind}", at: {at.get(k, "-1")}'
        if k in hl: s += f", hlAt: {hl[k]}"
        if k in tags: s += f', tag: "{tags[k][0]}", tagAt: {tags[k][1]}'
        rows.append(s + " }")
    tot = f' total={{{{ value: "{total[0]}", at: {total[1]}, label: "{total[2] if len(total) > 2 else "TOTAL"}" }}}}' if total else ""
    nt = f' note="{note}" noteAt={{{noteAt}}}' if note else ""
    return f'<Center x={{{x}}} y={{{y}}}><Bill at={{{start}}} rows={{9}} w={{{w}}} lines={{[{", ".join(rows)}]}}{tot}{nt} /></Center>'


FOOD = ["burger", "bacon", "fries", "soda", "sub"]
MENU = '''[{ name: "Tomahawk Ribeye", desc: "32 oz, bone-in", price: "58", anchor: true, hlAt: %s },
 { name: "Grilled Salmon", desc: "lemon butter", price: "26" },
 { name: "Chicken Sandwich", desc: "brioche", price: "16" },
 { name: "Classic Burger", desc: "cheddar, pickles", price: "14", hlAt: %s }]'''

S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД =======================
dict(start="The menu said fourteen", stock=K("menu-hands"), dim=0.55, sfx=[('t02-paper:0.25', '0.05'), ('ep06-kaching:0.3', '@{The card machine}')],
     el='''<Center x={560} y={470}><MenuCard at={0.05} w={560} title="TODAY" items={[{ name: "Classic Burger", desc: "cheddar", price: "14" }]} /></Center>
<Center x={1380} y={430}><Words text="$31.08" at={@{thirty-one dollars}} size={190} hl={["$31.08"]} /></Center>
<Center x={1380} y={580}><Label6 at={@{The card machine}} size={30} color={C6.mint}>WHAT THE CARD MACHINE TOOK</Label6></Center>'''),
dict(start="Here's a typical order", stock=K("burger-fries"), dim=0.55, sfx=[('ep06-receipt:0.3', '0.1')],
     el=bill(["burger"], at={"burger": "0.1"}, x=1400, start="0.05", noteAt="0.3")),
dict(start="And somewhere between the menu", stock=K("terminal-hand"), alt=(K("shocked-man"), "You've had this happen"), dim=0.3, sfx=[('ep06-pop:0.25', '@{seventeen dollars}')],
     el=plate("+$17.08 BETWEEN THE MENU AND THE MACHINE", "@{seventeen dollars}", y=880, size=38, color="C6.accent")),
dict(start="The first one was already waiting", stock=K("couple-menu"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("IT STARTS BEFORE YOU ORDER", "@{before you sat down}", y=880)),
dict(start="Look at that menu again", dim=0.0, sfx=[('ep06-pop:0.25', '@{Fourteen}'), ('ep06-stamp:0.25', '@{Just fourteen}')],
     el='''<Center y={460}><Words text="14" at={@{Fourteen}} size={340} hl={["14"]} /></Center>
<Center y={760}><Label6 at={@{Not fourteen dollars}} size={40} color={C6.mint}>NOT “$14.00”. JUST “14”.</Label6></Center>'''),
dict(start="Cornell researchers tested", sfx=[('t02-paper:0.3', '0.1')],
     el=doc("cornell", [("did not use dollar signs", "exactly this")], source="CORNELL CHRONICLE · STUDY IN INT. J. OF HOSPITALITY MANAGEMENT, 2009")),
dict(start="Same food, three versions", dim=0.0, sfx=[('ep06-pop:0.2', '0.05'), ('impact:0.25', '@{eight percent}')],
     el='''<Center y={560}><ThreeMenus at={0.05} winAt={@{eight percent}} /></Center>''' + src("Yang, Kimes & Sessarego · Cornell, 2009", "@{eight percent}")),
dict(start="So let's walk your order", dim=0.0, sfx=[('ep06-receipt:0.3', '0.1'), ('rise:0.25', '@{every single one}')],
     el=bill(["burger"], at={"burger": "0.1"}, x=640, start="0.05", noteAt="0.3") +
        '''<Center x={1380} y={450}><Words text="$17.08" at={@{every single one}} size={170} hl={["$17.08"]} /></Center>
<Center x={1380} y={590}><Label6 at={@{every single one}} size={34} color={C6.mint}>WHERE DID IT COME FROM?</Label6></Center>'''),

# ======================= PART 2 · ГЛАВА 1 · МЕНЮ =======================
dict(start="That missing dollar sign", tag=C1, hard=True, stock=K("menu-glass"), sfx=[('ep06-stamp:0.25', '@{Menu engineering}')],
     el=plate("MENU ENGINEERING", "@{Menu engineering}", y=880, size=50, color="C6.accent")),
dict(start="There are consultants", tag=C1, stock=K("meeting"), sfx=[('ep06-pop:0.22', '@{Gregg Rapp}')],
     el=plate("MENU ENGINEER GREGG RAPP: DROP THE $, THE DECIMAL POINT, THE CENTS", "@{Gregg Rapp}", y=880, size=32) + src("Rapp, via Barking Up the Wrong Tree", "@{Gregg Rapp}")),
dict(start="The researchers think the reason", tag=C1, stock=K("terminal-hand"), alt=(K("credit-card"), "Take it away"), dim=0.35, sfx=[('ep06-pop:0.22', '@{reminds you}')],
     el=plate("THE $ REMINDS YOU THAT YOU'RE PAYING", "@{reminds you}", y=880, size=38, out="@{Take it away}") +
        plate("WITHOUT IT: “A NICE, FRIENDLY NUMBER”", "@{Take it away}", y=880, size=38, color="C6.accent")),
dict(start="Now look at the top of the page", tag=C1, dim=0.0, sfx=[('t02-paper:0.25', '0.05'), ('ep06-pop:0.22', '@{Fifty-eight}')],
     el='''<Center y={540}><MenuCard at={0.05} w={820} items={%s} /></Center>''' % (MENU % ("@{A tomahawk steak}", "@{That's the point}"))),
dict(start="Writer William Poundstone", tag=C1, stock=K("tomahawk"), alt=(K("steak-plate"), "Its job is to sit"), dim=0.35, sfx=[('ep06-stamp:0.22', '@{an anchor}')],
     el=plate("“ANCHOR”: AN ITEM THEY DON'T EXPECT ANYONE TO BUY", "@{an anchor}", y=880, size=36) + src("William Poundstone, “Priceless” · via ABC News", "@{an anchor}")),
dict(start="Next to fifty-eight", tag=C1, dim=0.0, sfx=[('ep06-whoosh:0.25', '@{fourteen feels}')],
     el='''<Center y={560}><AnchorSeesaw at={0.05} tiltAt={@{fourteen feels}} /></Center>'''),
dict(start="Notice the prices aren't lined up", tag=C1, dim=0.0, sfx=[('ep06-pop:0.22', '@{a column of prices}'), ('ep06-pop:0.22', '@{three cheapest}')],
     el='''<Center y={540}><Row gap={70}>
<Col gap={20}><Label6 at={@{a column of prices}} size={26} color={C6.loss}>PRICES IN A COLUMN</Label6><MenuCard at={@{a column of prices}} w={600} column items={[{ name: "Tomahawk Ribeye", price: "58" }, { name: "Grilled Salmon", price: "26" }, { name: "Chicken Sandwich", price: "16", hlAt: @{three cheapest} }, { name: "Classic Burger", price: "14", hlAt: @{three cheapest} }, { name: "Side Salad", price: "9", hlAt: @{three cheapest} }]} /></Col>
<Col gap={20}><Label6 at={0.05} size={26} color={C6.money}>PRICES TUCKED IN</Label6><MenuCard at={0.05} w={600} items={[{ name: "Tomahawk Ribeye", desc: "bone-in", price: "58" }, { name: "Grilled Salmon", desc: "lemon", price: "26" }, { name: "Chicken Sandwich", desc: "brioche", price: "16" }, { name: "Classic Burger", desc: "cheddar", price: "14" }, { name: "Side Salad", desc: "house", price: "9" }]} /></Col>
</Row></Center>''' + plate("ILLUSTRATION", "0.3", y=1000, size=22, color="C6.mint")),
dict(start="Then the server comes over", tag=C1, stock=K("waitress-order"), sfx=[('ding:0.25', '@{Great choice}')],
     el=plate("“GREAT CHOICE.”", "@{Great choice}", y=880, size=46, color="C6.accent")),
dict(start="Want to add bacon?", tag=C1, stock=K("bacon-fry"), alt=(K("fries-fryer"), "Truffle fries"), dim=0.3, sfx=[('ep06-receipt:0.3', '@{Three dollars}'), ('ep06-receipt:0.3', '@{Two more}')],
     el=bill(["burger", "bacon", "fries"], at={"bacon": "@{Three dollars}", "fries": "@{Two more}"}, x=1400, start="0.05", note=None)),
dict(start="That question is not small talk", tag=C1, stock=K("pos-woman"), sfx=[('ep06-pop:0.22', '@{Toast}')],
     el=plate("TOAST · ITS SYSTEM RUNS A HUGE NUMBER OF RESTAURANTS", "@{Toast}", y=880, size=34)),
dict(start="publishes training advice", tag=C1, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("toast-upsell", [("reminding employees", "remind staff")], source="TOAST · RESTAURANT BLOG “ON THE LINE”")),
dict(start="It even suggests a leaderboard", tag=C1, sfx=[('ep06-pop:0.22', '@{leaderboard}')],
     el=doc("toast-upsell", [("leaderboard for the server", "leaderboard")], source="TOAST · RESTAURANT BLOG “ON THE LINE”")),
dict(start="There's a leaderboard", tag=C1, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('ep06-scratch:0.25', '@{For your bacon}')],
     el='''<Center y={500}><Leaderboard at={0.05} topAt={@{For your bacon}} /></Center>'''),
dict(start="And here's the principle", tag=C1, stock=K("departure-board"), alt=(K("boarding"), "Like an airline's"), dim=0.4, sfx=[('ep06-stamp:0.25', '@{opening bid}'), ('ep06-whoosh:0.2', "@{Like an airline's}")],
     el=plate("MENU PRICE = OPENING BID", "@{opening bid}", y=860, size=50, color="C6.accent", out="@{Like an airline's}") +
        plate("LIKE AN AIRLINE'S BASE FARE", "@{Like an airline's}", y=860, size=44, out="@{The real number}") +
        plate("THE REAL NUMBER COMES AFTER YOU SAY YES", "@{The real number}", y=860, size=40)),

# ======================= PART 3 · ГЛАВА 2 · ПРИМАНКА И БИЗНЕС =======================
dict(start="Now the soda", tag=C2, hard=True, stock=K("cola-ice"), dim=0.3, sfx=[('ep06-receipt:0.3', '@{Three fifty}')],
     el=bill(["burger", "bacon", "fries", "soda", "sub"], at={"soda": "@{Three fifty}", "sub": "@{Refills included}"}, x=1400, start="0.05", note=None)),
dict(start="You probably think the burger", tag=C2, stock=K("burger-grill"), alt=(K("kitchen-grill"), "Meat, bun"), sfx=[('ep09-sizzle:0.2', '0.1')],
     el=plate("THE EXPENSIVE PART?", "@{expensive part}", y=880, size=44)),
dict(start="In a typical small sit-down", tag=C2, dim=0.0, sfx=[('ep06-counter:0.3', '@{about a third}')],
     el='''<Center y={470}><Donut6 at={@{about a third}} pct={33.7} center="33.7%" size={420} /></Center>
<Center y={800}><Label6 at={@{about a third}} size={32} color={C6.mint}>FOOD &amp; NON-ALCOHOLIC DRINK COST · SHARE OF SALES · MEDIAN</Label6></Center>''' + src("National Restaurant Association · 2024 data · restaurants under $2M", "@{the median}")),
dict(start="The soda is a different story", tag=C2, stock=K("soda-pour"), sfx=[('ep06-pop:0.22', '@{one beverage executive}')],
     el=plate("ONE BEVERAGE EXECUTIVE, IN THE TRADE PRESS", "@{one beverage executive}", y=880, size=38)),
dict(start="A fountain soda that sells", tag=C2, sfx=[('t02-paper:0.3', '0.1'), ('ep06-kaching:0.25', '@{two fifteen}')],
     el=doc("mrm-soda", [("$2.15 in gross profit", "two fifteen")], source="MODERN RESTAURANT MANAGEMENT · JULY 2026")),
dict(start="That's eighty-six cents", tag=C2, dim=0.0, sfx=[('ep06-counter:0.3', '0.1'), ('ep06-pop:0.22', '@{You paid}')],
     el='''<Center y={460}><SodaMargin at={0.05} pctAt={0.3} /></Center>''' + plate("YOU PAID $3.50", "@{You paid}", y=880, size=44, color="C6.accent") + src("our calculation: $2.15 ÷ $2.50", "0.3")),
dict(start="So the burger is the bait", tag=C2, stock=K("bacon-burger"), alt=(K("cola-pour2"), "The soda is the business"), clean=True, sfx=[('ep06-pop:0.22', '@{the bait}'), ('ep06-kaching:0.25', '@{the business}')],
     el=plate("THE BAIT", "@{the bait}", y=880, size=56, color="C6.accent", out="@{The soda is the business}") + plate("THE BUSINESS", "@{the business}", y=880, size=56, color="C6.money")),
dict(start="And to be fair", tag=C2, stock=K("chef-kitchen"), alt=(K("empty-cafe"), "Rent, staff"), sfx=[('ep06-pop:0.22', '@{between one and five}')],
     el=plate("A FULL-SERVICE RESTAURANT KEEPS ~1–5¢ OF EVERY $1", "@{between one and five}", y=880, size=36) + src("Toast · Restaurant365 · NRA", "@{between one and five}")),
dict(start="But notice something", tag=C2, dim=0.0, sfx=[('ep06-stamp:0.2', '@{every dollar}'), ('ep06-stamp:0.2', '@{yes to the bacon}'), ('ep06-stamp:0.2', '@{yes to the soda}')],
     el=bill(FOOD, tags={"burger": ("yes", "@{every dollar}"), "bacon": ("yes", "@{yes to the bacon}"), "fries": ("yes", "@{yes to the bacon}"), "soda": ("yes", "@{yes to the soda}")}, x=760, start="0.05", note=ILL, noteAt="0.05")),
dict(start="The next dollars", tag=C2, dim=0.0, sfx=[('rise:0.3', '0.1'), ('ep06-receipt:0.3', '@{never said yes}')],
     el=bill(FOOD + ["fee"], at={"fee": "@{never said yes}"}, blur=("fee",), tags={"burger": ("yes", "-1"), "bacon": ("yes", "-1"), "fries": ("yes", "-1"), "soda": ("yes", "-1")}, x=760, note=None)),

# ======================= PART 4 · ГЛАВА 3 · МЕЛКИЙ ШРИФТ =======================
dict(start="Down at the bottom of the bill", tag=C3, hard=True, dim=0.0, sfx=[('ep06-receipt:0.3', '@{Kitchen Appreciation}'), ('impact:0.25', '@{Seventy-nine cents}')],
     el=bill(FOOD + ["fee"], at={"fee": "@{Kitchen Appreciation}"}, hl={"fee": "@{Seventy-nine cents}"}, start="0.05", note=ILL)),
dict(start="That's not on the menu", tag=C3, stock=K("menu-hands"), dim=0.3, sfx=[('ep06-pop:0.22', '@{tiny line}')],
     el=plate("ONLY IN THE TINY LINE AT THE VERY BOTTOM", "@{tiny line}", y=880, size=38)),
dict(start="Consumer advocate Christopher Elliott", tag=C3, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.22', '@{A health mandate}')],
     el=doc("elliott-names", [("kitchen appreciation fee", "A health mandate")], source="THE ELLIOTT REPORT · NOV 2026", zoom=0.72)),
dict(start="My favorite came from", tag=C3, stock=K("moab"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("A STEAKHOUSE · MOAB, UTAH", "@{Moab}", y=880, size=40)),
dict(start="he found a beef", tag=C3, sfx=[('ep06-stamp:0.22', '@{beef cost}')],
     el=doc("elliott-beef", [("beef-cost surcharge", "beef cost")], source="THE ELLIOTT REPORT · NOV 2026", zoom=0.72)),
dict(start="He'd ordered chicken", tag=C3, stock=K("chicken-plate"), clean=True, sfx=[('ep06-scratch:0.25', '0.05')],
     el='''<Meme at={0.05} text="he ordered chicken." y={900} size={76} />'''),
dict(start="The restaurant took it off", tag=C3, stock=K("diner-woman"), sfx=[('ep06-pop:0.22', '@{never notice}')],
     el=plate("MANY PEOPLE NEVER NOTICE", "@{never notice}", y=880, size=42)),
dict(start="Sometimes a state does see it", tag=C3, stock=K("phoenix"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("ARIZONA · 2023 · TWO SCOTTSDALE RESTAURANTS", "@{Arizona's}", y=880, size=38)),
dict(start="over a three and a half percent", tag=C3, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("azag-benefits", [("3.5% Employee Benefits charge", "employee benefits")], source="ARIZONA ATTORNEY GENERAL · APRIL 2023", zoom=0.75)),
dict(start="They paid twenty thousand", tag=C3, sfx=[('ep06-kaching:0.25', '@{twenty thousand}')],
     el=doc("azag", [("$20,000", "twenty thousand")], source="ARIZONA ATTORNEY GENERAL · APRIL 2023", zoom=0.7)),
dict(start="So isn't this illegal?", tag=C3, stock=K("shrug"), clean=True, sfx=[('ding:0.25', '@{Depends}')],
     el='''<Meme at={@{Depends}} text="depends where you're sitting." y={920} size={68} />'''),
dict(start="California passed a law", tag=C3, stock=K("la-palms"), dim=0.3, sfx=[('ep06-pop:0.22', '@{California passed}'), ('ep06-stamp:0.25', '@{restaurants got an exception}')],
     el=plate("CALIFORNIA · SB 478 BANS HIDDEN FEES · JULY 1, 2024", "@{California passed}", y=820, size=34, out="@{two days before}") +
        plate("2 DAYS BEFORE: RESTAURANTS EXEMPTED (SB 1524)", "@{two days before}", y=820, size=34, color="C6.accent") +
        plate("…IF THE FEE IS WRITTEN ON THE MENU", "@{as long as}", y=920, size=30, color="C6.mint")),
dict(start="Florida's new law", tag=C3, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("newsweek-fl", [], source="NEWSWEEK · 2026") + plate("FLORIDA · JULY 2026 · SHOW FEES BEFORE PEOPLE ORDER", "@{show them before}", y=960, size=30)),
dict(start="Only a handful of states", tag=C3, dim=0.0, sfx=[('ep06-pop:0.22', '@{Massachusetts}'), ('ep06-pop:0.22', '@{Minnesota}'), ('ep06-pop:0.22', '@{Colorado}')],
     el='''<Center y={520}><StateCards cards={[{ state: "Massachusetts", rule: "Mandatory fees in the menu price", src: "AG rules · Sept 2025", at: @{Massachusetts} }, { state: "Minnesota", rule: "Mandatory fees in the menu price", src: "Since Jan 2025", at: @{Minnesota} }, { state: "Colorado", rule: "Mandatory fees in the menu price", src: "Since Jan 2026", at: @{Colorado} }]} /></Center>'''),
dict(start="And the federal junk fee rule", tag=C3, dim=0.0, sfx=[('ep06-pop:0.22', '@{concert tickets}'), ('ep06-pop:0.22', '@{hotels}'), ('buzz:0.25', '@{Not restaurants}')],
     el='''<Center y={520}><ListReveal title="FTC JUNK FEE RULE (2025) COVERS" w={820} items={[{ text: "Concert & event tickets  ✓", at: @{concert tickets} }, { text: "Hotels & short-term rentals  ✓", at: @{hotels} }, { text: "Restaurants  ✗", at: @{Not restaurants}, hot: true }]} /></Center>'''),
dict(start="Now, the tax", tag=C3, dim=0.0, sfx=[('ep06-receipt:0.3', '@{Eight percent}'), ('ep06-pop:0.22', '@{on the fee too}')],
     el=bill(FOOD + ["fee", "tax"], at={"tax": "@{Eight percent}"}, hl={"fee": "@{on the fee too}"}, note=ILL)),
dict(start="One of Elliott's readers", tag=C3, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.22', '@{taxed the fees}')],
     el=doc("elliott-hawaii", [("charged tax on the fees", "taxed the fees")], source="THE ELLIOTT REPORT · NOV 2026", zoom=0.72)),
dict(start="Then comes a three percent", tag=C3, dim=0.0, sfx=[('ep06-receipt:0.3', '@{Seventy-five cents}')],
     el=bill(FOOD + ["fee", "tax", "card"], at={"card": "@{Seventy-five cents}"}, hl={"card": "@{Seventy-five cents}"}, note=ILL)),
dict(start="Here's what the sign by the door", tag=C3, stock=K("wallet-cards"), alt=(K("tap-pay"), "Pay with debit"), dim=0.3, sfx=[('ep06-pop:0.22', '@{Visa caps}'), ('ep06-stamp:0.22', '@{ban it outright}'), ('ding:0.25', '@{Pay with debit}')],
     el=plate("VISA CAPS IT AT 3%", "@{Visa caps}", y=880, size=42, out="@{Connecticut}") +
        plate("BANNED: CONNECTICUT · MAINE · MASSACHUSETTS", "@{Connecticut}", y=880, size=36, out="@{only allowed on credit}") +
        plate("CREDIT CARDS ONLY · NEVER ON DEBIT", "@{only allowed on credit}", y=880, size=42, color="C6.accent") + src("Experian · Stripe · Money Crashers", "@{Visa caps}")),
dict(start="If this is the kind of thing", tag=C3, stock=K("phone-scroll"), sfx=[('click:0.35', '@{subscribe}')],
     el='''<Subscribe6 at={@{subscribe}} />''' + plate("ONE OF THESE EVERY FEW DAYS", "@{every few days}", y=880, size=36)),
dict(start="We're at twenty-five ninety", tag=C3, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('rise:0.3', '@{most expensive part}')],
     el=bill(FOOD + ["fee", "tax", "card"], total=("25.90", "0.1", "SO FAR"), x=640, note=None) +
        '''<Center x={1400} y={500}><TipScreen at={@{hasn't even happened}} w={500} /></Center>'''),

# ======================= PART 5 · ГЛАВА 4 · МАШИНА =======================
dict(start="The server turns the screen", tag=C4, hard=True, stock=K("pay-waiter"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("THE SCREEN TURNS AROUND", "0.3", y=880, size=40)),
dict(start="Twenty percent. Twenty-two", tag=C4, dim=0.0, sfx=[('ep06-pop:0.2', '0.05'), ('ep06-pop:0.2', '@{Twenty-two}'), ('ep06-pop:0.2', '@{Twenty-five}'), ('click:0.4', '@{You tap twenty}'), ('ep06-kaching:0.25', '@{Five dollars}')],
     el='''<Center x={760} y={530}><TipScreen at={0.05} w={620} press={0} pressAt={@{You tap twenty}} amounts={["$5.18", "$5.70", "$6.48"]} /></Center>
<Center x={1460} y={500}><Words text="+$5.18" at={@{Five dollars}} size={150} hl={["+$5.18"]} /></Center>'''),
dict(start="But twenty percent of what", tag=C4, dim=0.0, sfx=[('ep06-pop:0.2', '0.1'), ('buzz:0.25', '@{The tax}'), ('ep06-stamp:0.25', '@{tipped on a fee}')],
     el='''<Center y={460}><TipBase at={0.1} feeAt={@{The tax}} /></Center>''' + plate("YOU JUST TIPPED ON A FEE", "@{tipped on a fee}", y=880, size=46, color="C6.accent")),
dict(start="It's a setting", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.22', '@{before or after tax}')],
     el=doc("toast-tip-help", [("before or after tax", "before or after tax")], source="TOAST SUPPORT · HELP CENTER")),
dict(start="In March, Fox News reported", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.22', '@{double dipping}')],
     el=doc("foxnews-db", [("double-dipping", "double dipping")], source="FOX NEWS · MARCH 2026")),
dict(start="And it works", tag=C4, stock=K("taxi-nyc"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("A STUDY OF NEW YORK TAXIS", "@{New York taxis}", y=880, size=40) + src("Haggag & Paci · American Economic Journal, 2014", "@{New York taxis}")),
dict(start="screens with higher suggested", tag=C4, dim=0.0, sfx=[('ep06-pop:0.2', '0.1'), ('ep06-pop:0.2', '@{twenty, twenty-five, thirty}'), ('impact:0.25', '@{roughly ten percent}')],
     el='''<Center y={470}><Row gap={90}><TipScreen at={0.1} w={470} opts={["15%", "20%", "25%"]} label="TAXI SCREEN A" total="Tip?" sub="SUGGESTED" /><TipScreen at={@{twenty, twenty-five, thirty}} w={470} opts={["20%", "25%", "30%"]} label="TAXI SCREEN B" total="Tip?" sub="SUGGESTED" /></Row></Center>''' +
        plate("HIGHER BUTTONS → TIPS UP ≈10%", "@{roughly ten percent}", y=920, size=44, color="C6.accent")),
dict(start="So who makes these machines", tag=C4, stock=K("pos-card"), alt=(K("terminal-hand"), "The same Toast"), sfx=[('ep06-stamp:0.22', '@{one company}')],
     el=plate("ONE COMPANY: TOAST", "@{one company}", y=880, size=46, color="C6.accent", out="@{The same Toast}") +
        plate("THE SAME TOAST WITH THE UPSELLING LEADERBOARD", "@{The same Toast}", y=880, size=36)),
dict(start="About one hundred eighty-nine", tag=C4, dim=0.0, sfx=[('ep06-counter:0.3', '0.2')],
     el='''<Center y={450}><Counter6 to={189000} at={0.2} dur={1.2} size={190} fmt={(v) => "≈" + Math.round(v).toLocaleString("en-US")} /></Center>
<Center y={640}><Label6 at={0.4} size={36} color={C6.mint}>LOCATIONS RUN ON TOAST</Label6></Center>''' + src("Toast Q3 2026 financial results", "0.4")),
dict(start="And last month", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-stamp:0.25', '@{took Toast to court}')],
     el=doc("ftc-toast-top", [], source="FEDERAL TRADE COMMISSION · OCT 29, 2026") + plate("FTC + 8 STATES v. TOAST", "@{took Toast to court}", y=960, size=40, color="C6.accent")),
dict(start="According to the complaint", tag=C4, dim=0.0, sfx=[('ep06-pop:0.22', '@{ninety-nine cent}'), ('ep06-whoosh:0.25', '@{Neither were the restaurants}')],
     el='''<Center y={520}><FeeRoute at={0.05} feeAt={@{ninety-nine cent}} goAt={@{Neither were the restaurants}} /></Center>'''),
dict(start="And the money went to Toast", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-whoosh:0.25', '@{the money went}')],
     el=doc("ftc-toast-money", [("went to Toast and not the restaurants", "the money went")], source="FEDERAL TRADE COMMISSION · OCT 29, 2026")),
dict(start="Back then, Fox Business", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.22', "@{own website}")],
     el=doc("foxbiz-site", [("restaurants' own websites", "own website")], source="FOX BUSINESS · JULY 2023")),
dict(start="The complaint says the fee ran", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.22', '@{summer of 2023}')],
     el=doc("ftc-toast", [("late-July 2023", "summer of 2023")], source="FEDERAL TRADE COMMISSION · OCT 29, 2026")),
dict(start="Toast strongly disagrees", tag=C4, stock=K("scales"), dim=0.4, sfx=[('ep06-stamp:0.22', '@{strongly disagrees}')],
     el=plate("ALLEGATIONS · TOAST STRONGLY DISAGREES · A COURT WILL DECIDE", "@{strongly disagrees}", y=880, size=34, color="C6.accent")),
dict(start="Back in 2023, a restaurant owner", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('impact:0.25', '@{seventy percent}')],
     el=doc("foxbiz-70", [("70% of his online orders", "seventy percent")], source="FOX BUSINESS · JULY 2023")),
dict(start="It appears to the customer", tag=C4, stock=K("empty-cafe"), dim=0.4, sfx=[],
     el='''<Center y={480}><Words text="“It appears to the customer like we're penalizing them for ordering online.”" at={0.1} size={64} maxW={1500} hl={["penalizing"]} /></Center>''' +
        plate("A RESTAURANT OWNER IN FENTON, MISSOURI · TO FOX BUSINESS, 2023", "0.3", y=880, size=28, color="C6.mint")),
dict(start="Remember those few cents", tag=C4, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('impact:0.3', '@{one hundred sixty-nine}')],
     el='''<Center y={500}><Split6 at={0.1} scale={0.85} left={{ title: "A RESTAURANT KEEPS", value: "1–5¢ / $1", icon: "store", color: C6.mint }} right={{ title: "TOAST · Q3 2026 PROFIT", value: "$169M", icon: "card", color: C6.accent, at: @{one hundred sixty-nine} }} /></Center>''' + src("Toast Q3 2026 results · NRA / Toast / Restaurant365 margins", "@{one hundred sixty-nine}")),

# ======================= PART 6 · ГЛАВА 5 · КАК ВЕРНУТЬ =======================
dict(start="So here's your receipt", tag=C5, hard=True, dim=0.0, sfx=[('ep06-receipt:0.3', '0.05'), ('impact:0.25', '@{More than the burger}')],
     el=bill(ORDER, at={k: str(round(0.05 + 0.12 * i, 2)) for i, k in enumerate(ORDER)}, hl={"burger": "@{Burger, fourteen}"}, total=("$31.08", "1.2"), x=640, y=530, start="0.05", noteAt="1.2") +
        '''<Center x={1400} y={440}><Words text="$17.08" at={@{seventeen dollars}} size={170} hl={["$17.08"]} /></Center>
<Center x={1400} y={580}><Label6 at={@{More than the burger}} size={34} color={C6.accent}>MORE THAN THE BURGER ITSELF</Label6></Center>'''),
dict(start="Most of it you agreed to", tag=C5, dim=0.0, sfx=[('ep06-stamp:0.2', '@{agreed to}'), ('ep06-stamp:0.22', '@{nobody asked}')],
     el=bill(ORDER, total=("$31.08", "-1"), x=740, y=530, tags={"bacon": ("yes", "@{agreed to}"), "fries": ("yes", "@{agreed to}"), "soda": ("yes", "@{agreed to}"), "fee": ("no", "@{nobody asked}"), "card": ("no", "@{nobody asked}"), "tip": ("no", "@{nobody asked}")}, note=None)),
dict(start="Here's how you take it back", tag=C5, stock=K("couple-dinner"), alt=(K("water-pour"), "Tap water"), dim=0.72,
     sfx=[('click:0.3', '@{Check the bottom}'), ('click:0.3', '@{Say no}'), ('click:0.3', '@{Tap water}'), ('click:0.3', '@{Pay with debit}'), ('ep06-kaching:0.25', '@{hit custom}')],
     el='''<Center y={520}><ListReveal title="HOW TO TAKE IT BACK" w={1040} items={[{ text: "Read the bottom of the menu first", at: @{Check the bottom} }, { text: "Skip the add-on you didn't come for", at: @{Say no} }, { text: "Tap water is free", at: @{Tap water} }, { text: "Pay with debit — no card surcharge", at: @{Pay with debit} }, { text: "Hit Custom: tip on the food, not the fees", at: @{hit custom}, hot: true }]} /></Center>'''),
dict(start="Same burger, a fair tip", tag=C5, dim=0.0, sfx=[('ep06-pop:0.22', '0.05'), ('ding:0.3', '@{Around eighteen}')],
     el='''<Center y={500}><TwoReceipts at={0.05} bAt={@{Around eighteen}} /></Center>''' + plate("ILLUSTRATIVE EXAMPLE · TIP 20% OF THE FOOD", "@{Around eighteen}", y=990, size=24, color="C6.mint")),
dict(start="What's the weirdest fee", stock=K("shock-glasses"), dim=0.45, sfx=[('ep06-pop:0.2', '@{in the comments}')],
     el='''<Center y={300}><Words text="The weirdest fee you've ever found?" at={0.1} size={76} hl={["weirdest"]} /></Center>
<Center y={440}><Label6 at={@{in the comments}} size={38} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Center>'''),
dict(start="And if you're wondering", stock=K("server-food"), dim=0.65, end_pad=8.0, sfx=[('ep06-whoosh:0.2', '@{That story}')],
     el='''<EndCard6 at={@{That story}} next="Where the service charge really goes" />'''),
]

EP["music_at"] = [
    ("The menu said fourteen", "audio/t06/music-c0-open.mp3", 0.065),
    ("That missing dollar sign", "audio/t06/music-c1-menu.mp3", 0.1),
    ("Now the soda", "audio/t06/music-c2-soda.mp3", 0.09),
    ("Down at the bottom of the bill", "audio/t06/music-c3-fees.mp3", 0.073),
    ("The server turns the screen", "audio/t06/music-c4-toast.mp3", 0.088),
    ("So here's your receipt", "audio/t06/music-c5-how.mp3", 0.1),
]

# графика без видео — мягкий свет фона (Drift), чтобы кадр не стоял
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", ""):
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"
