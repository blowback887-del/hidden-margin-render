# T08 «McDonald's Said $9. The Menu Said $18.» — восьмой ролик They Saw You Coming (план сцен 25.11.2026).
# Окраска: детектив «куда делся дешёвый обед и кто его вернул за наш же счёт» + сухая сатира на корпоративный язык.
#   Злодей — не кассир и не франчайзи, а схема «подними табло — убери скидку — продай скидку обратно».
# Визуальная идея (своя для выпуска): ТАБЛО МЕНЮ (src/brand/t08.tsx: MenuBoard) — в начале ($17.59), в главе
#   цифр (цены 2019 → 2024 из факт-листа McDonald's), в 2019 (строка Extra Value Meals гаснет), в 2025 (строка
#   возвращается с «−15%»), в финале — $17.59 против $9.29. Отличие от T06 (чек растёт) и T07 (след денег).
# Начало: холодный вход без трейлера — табло $17.59 к 0:01, $9.29 McDonald's к 0:29, «и то и другое» к 0:40,
#   первая польза зрителю (соседний McDonald's дешевле) к ~0:55 (правило аудита 25.11: польза к ~1:00).
# Под ТВ и зрителя 55+: обе суммы — вслух и крупно, одна цифра на кадр, цифра держится ≥3 с.
# Нарастание глав: две цены → их же цифры (+40%, картошка +44%, прибыль +30%) → пропавший обед 2019 и люди,
#   которые ушли → телефон и два замка → поворот на 2/3: «скидку вернули» и наш расчёт ≈ +19% → сейчас + что делать.
# Гэги (сухие, единицы): «the internet, 2023», «premium potatoes», «only one side…» (мужик с деньгами и ногами на столе),
#   «Sounds great.», «15% off of… what?» (facepalm).
# Формулировки фактчекера не менять: +19% — «using their own averages», доплата франчайзи — «WSJ reported»,
#   150 млн — «worldwide», в США персональные цены не доказаны — «user reports».
import json, os
from evid import ev

EP = dict(
    comp="T08Menu",
    words="src/videos/t08-mcd-words.json",
    text="cloud/voice/t08-text",
    parts=6,
    broll="cloud/broll/t08.json",
    audio="audio/t08-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03", "t07", "t08"],
    music=[],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t08.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t08-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

C1, C2, C3, C4, C5, C6x = (1, "Two Prices"), (2, "Their Own Numbers"), (3, "The Missing Meal"), (4, "The Phone"), (5, "The Trick"), (6, "Your Move")


def doc(name, marks=(), source=None, **kw):
    kw.setdefault("zoom", 0.9)  # урок T02: не загонять камеру в голый текст
    if not name.endswith("-top") and os.path.exists(f"{_R}/public/evidence/t08/{name.split('-')[0]}-{name.split('-')[1]}-top.json"):
        kw.setdefault("inset", f"{name.split('-')[0]}-{name.split('-')[1]}-top")
    return ev("t08", name, marks=list(marks), source=source, **kw)


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


def src(text, at="0.3"):
    return f"<Source6 at={{{at}}}>{text}</Source6>"


def board(rows, title, at="0.05", w=900, y=500, foot=None, footAt=None, offAt=None, rh=96):
    rs = []
    for r in rows:
        rs.append("{ " + ", ".join(f'{k}: {json.dumps(v) if isinstance(v, str) and not v.startswith("@") and not v.replace(".", "").isdigit() else v}' for k, v in r.items()) + " }")
    f = f' foot="{foot}"' + (f" footAt={{{footAt}}}" if footAt else "") if foot else ""
    o = f" offAt={{{offAt}}}" if offAt else ""
    return f'<Center y={{{y}}}><MenuBoard at={{{at}}} w={{{w}}} rh={{{rh}}} title="{title}"{f}{o} rows={{[{", ".join(rs)}]}} /></Center>'


S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД · ДВЕ ЦЕНЫ =======================
dict(start="Seventeen dollars and fifty-nine cents", dim=0.0, sfx=[('ep06-counter:0.3', '0.05'), ('impact:0.3', '@{For a Big Mac}')],
     el=board([dict(name="Big Mac · Fries · Soft drink", price="$17.59", hlAt="@{For a Big Mac}")], "MENU · HIGHWAY REST STOP", y=470, w=1180, rh=140,
              foot="AS PHOTOGRAPHED · CONNECTICUT · 2023", footAt="@{For a Big Mac}")),
dict(start="That's a real menu board", stock=K("service-plaza"), alt=(K("i95-connecticut"), "in Connecticut"), sfx=[('ep06-whoosh:0.2', '@{in Connecticut}')],
     el=plate("A HIGHWAY REST STOP", "0.3", y=880, size=40, out="@{in Connecticut}") + plate("I-95 · CONNECTICUT", "@{in Connecticut}", y=880, size=40, color="C6.accent") +
        src("Photos: K. C. Zirkel (service plaza, Mass.) · A. Moss (I-95, Conn.) · Wikimedia, CC BY-SA", "0.4")),
dict(start="Somebody took a picture", sfx=[('t02-paper:0.3', '0.1')],
     el=doc("mr-darien", [("Darien", "Somebody took a picture")], source="MARKET REALIST · VIRAL MENU PHOTO, DARIEN, CONN.")),
dict(start="the internet lost its mind", stock=K("shocked-man"), clean=True, sfx=[('ep06-scratch:0.25', '0.05')],
     el='''<Meme at={0.05} text="the internet, 2023." y={900} size={76} />'''),
dict(start="McDonald's didn't ignore it", stock=K("mcd-sign-close"), sfx=[('ep06-pop:0.22', '@{wrote an open letter}')],
     el=plate("PRESIDENT, McDONALD'S USA · OPEN LETTER · MAY 2024", "@{wrote an open letter}", y=880, size=34)),
dict(start="our U.S. fans", sfx=[('t02-paper:0.3', '0.05')],
     el="LETTER_FANS"),
dict(start="And in that letter", sfx=[('t02-paper:0.3', '0.05'), ('impact:0.3', '@{nine dollars and twenty-nine cents}')],
     el="MYTHS_929"),
dict(start="So which one is it", dim=0.0, sfx=[('ep06-pop:0.25', '0.05'), ('ep06-pop:0.25', '@{or eighteen}')],
     el='''<Center y={500}><PriceDuel at={0.05} a={{ label: "McDonald's average · 2024", value: "$9.29", color: C6.money }} b={{ label: "One menu board · 2023", value: "$17.59", color: C6.loss, at: @{or eighteen} }} /></Center>'''),
dict(start="It can be both", stock=K("drive-thru-night"), sfx=[('ep06-stamp:0.25', "@{isn't set by McDonald's}")],
     el=plate("THE PRICE ON THE BOARD ISN'T SET BY McDONALD'S", "@{isn't set by McDonald's}", y=880, size=36, color="C6.accent")),
dict(start="More than ninety-five percent", sfx=[('t02-paper:0.3', '0.05'), ('ep06-counter:0.3', '@{ninety-five percent}')],
     el="LETTER_95"),
dict(start="Which means the McDonald's five minutes", stock=K("ct-lisbon"), alt=(K("calverton-md"), "Same burger"), sfx=[('ep06-pop:0.22', '@{Same burger}'), ('ep06-pop:0.22', '@{Same fries}'), ('ep06-stamp:0.25', '@{Different board}')],
     el=plate("5 MINUTES DOWN THE ROAD → OFTEN CHEAPER", "0.3", y=880, size=36, color="C6.money", out="@{Same burger}") +
        plate("SAME BURGER", "@{Same burger}", y=880, size=44, out="@{Same fries}") + plate("SAME FRIES", "@{Same fries}", y=880, size=44, out="@{Different board}") +
        plate("DIFFERENT BOARD", "@{Different board}", y=880, size=50, color="C6.accent") + src("Photos: JJBers · G. Edward Johnson · Wikimedia, CC BY", "0.4")),
dict(start="And look at where the eighteen-dollar", stock=K("rest-area-aerial"), sfx=[('ep06-whoosh:0.2', '@{A highway rest stop}')],
     el=plate("A HIGHWAY REST STOP", "@{A highway rest stop}", y=880, size=44)),
dict(start="You're tired", stock=K("family-minivan"), alt=(K("highway-night"), "not about to leave"), sfx=[],
     el=""),
dict(start="Not many people there", stock=K("thruway-drive-thru"), sfx=[('ep06-stamp:0.25', '@{no other choice}')],
     el=plate("PRICED FOR A CUSTOMER WITH NO OTHER CHOICE?", "@{It looks a lot like}", y=880, size=36, color="C6.accent") + src("Photo: Andre Carrotflower · NY Thruway service area · Wikimedia, CC BY-SA", "0.4")),
dict(start="That's the first thing you can use today", dim=0.0, sfx=[('ding:0.3', '0.1')],
     el='''<Center y={480}><Checklist items={[{ text: "Same tray, different board: the next exit may be cheaper", at: 0.1 }]} /></Center>'''),
dict(start="But the real story is bigger", stock=K("highway-drone"), alt=(K("interchange"), "Because the letter"), sfx=[('rise:0.25', "@{what McDonald's did next}")],
     el=plate("WHAT McDONALD'S DID NEXT", "@{what McDonald's did next}", y=880, size=44, color="C6.accent")),

# ======================= PART 2 · ГЛАВА 2 · ИХ ЖЕ ЦИФРЫ =======================
dict(start="Let's read their own numbers", tag=C2, hard=True, dim=0.0, sfx=[('ep06-whoosh:0.2', '0.05'), ('ep06-counter:0.3', '@{seven twenty-nine}'), ('ep06-counter:0.3', '@{nine twenty-nine}')],
     el=board([dict(name="Big Mac Meal · 2019", price="$7.29", at="@{seven twenty-nine}"), dict(name="Big Mac Meal · 2024", price="$9.29", at="@{nine twenty-nine}", hlAt="@{Two dollars more}")],
              "McDONALD'S OWN FACT SHEET · AVERAGES", y=470, w=1100, rh=120, foot="+$2.00 · SAME TRAY", footAt="@{Two dollars more}") + src("McDonald's “U.S. Pricing: Myths vs. Facts” · May 2024", "0.4")),
dict(start="McDonald's put that in a chart", tag=C2, sfx=[('t02-paper:0.3', '0.05'), ('ep06-stamp:0.3', '@{twenty-seven}')],
     el="MYTHS_27"),
dict(start="But look further down the same chart", tag=C2, stock=K("fries-close"), alt=(K("fries-ketchup"), "Three twenty-nine"), dim=0.55, sfx=[('ep06-counter:0.3', '@{Two twenty-nine}'), ('ep06-counter:0.3', '@{Three twenty-nine}'), ('impact:0.3', '@{forty-four percent}')],
     el='''<Center y={430}><Words text="$2.29 → $3.29" at={@{Two twenty-nine}} size={150} hl={["$3.29"]} /></Center>
<Center y={600}><Label6 at={0.2} size={34} color={C6.mint}>MEDIUM FRIES · 2019 → 2024</Label6></Center>
<Center y={760}><Words text="+44%" at={@{forty-four percent}} size={150} color={C6.loss} hl={["+44%"]} /></Center>''' + src("McDonald's fact sheet via The Daily Meal", "0.4")),
dict(start="Potatoes, oil and salt", tag=C2, stock=K("potatoes"), alt=(K("frying"), "The cheapest thing"), clean=True, sfx=[('sparkle:0.25', '0.1')],
     el='''<Meme at={0.05} text="premium potatoes." y={900} size={76} out={@{The cheapest thing}} />''' + plate("THE CHEAPEST THING ON THE TRAY · THE BIGGEST % RAISE", "@{The cheapest thing}", y=880, size=34, color="C6.accent")),
dict(start="And across the whole menu", tag=C2, dim=0.0, sfx=[('ep06-counter:0.3', '@{forty percent}')],
     el=board([dict(name="Big Mac", price="$4.39", to="$5.29", toAt="@{went up forty}"), dict(name="Quarter Pounder w/ Cheese", price="$4.49", to="$5.39", toAt="@{went up forty}"),
               dict(name="Egg McMuffin", price="$3.49", to="$4.29", toAt="@{went up forty}"), dict(name="10 pc McNuggets Meal", price="$7.19", to="$9.19", toAt="@{went up forty}")],
              "AVERAGE MENU ITEM · 2019 → 2024: +40%", y=480, w=1100, rh=104, foot="McDONALD'S OWN AVERAGES · FACT SHEET, MAY 2024", footAt="0.4")),
dict(start="McDonald's says that just kept up", tag=C2, stock=K("drive-thru-order"), sfx=[('ep06-pop:0.22', '@{Beef}'), ('ep06-pop:0.22', '@{wages}'), ('ep06-pop:0.22', '@{paper}')],
     el=plate("BEEF · WAGES · PAPER", "@{Beef}", y=880, size=44)),
dict(start="And costs really did go up", tag=C2, stock=K("terminal-receipt"), sfx=[],
     el=""),
dict(start="Between twenty nineteen and twenty twenty-three", tag=C2, sfx=[('t02-paper:0.3', '0.05'), ('ep06-kaching:0.3', '@{fourteen and a half}')],
     el=doc("reuters-profit", [("gross profit", "gross profit grew")], source="REUTERS VIA YAHOO FINANCE · MAY 2024")),
dict(start="Up about thirty percent", tag=C2, dim=0.0, sfx=[('impact:0.3', '0.05')],
     el='''<Center y={480}><TwoBars at={0.05} a={{ label: "GROSS PROFIT · 2019", value: "$11.2B", v: 11.18 }} b={{ label: "2023", value: "$14.6B", v: 14.56, color: C6.money, at: 0.4 }} h={480} /></Center>''' +
        plate("+30%", "0.6", y=960, size=50, color="C6.money") + src("Reuters · McDonald's annual reports", "0.4")),
dict(start="Costs went up for everybody", tag=C2, stock=K("suited-counting"), clean=True, sfx=[('ep06-coin:0.25', '@{Only one side}')],
     el='''<Meme at={0.05} text="costs went up for everybody." y={900} size={70} out={@{Only one side}} /><Meme at={@{Only one side}} text="only one side ended up with more." y={900} size={70} />'''),
dict(start="So if the average meal went up", tag=C2, stock=K("drive-thru-pay"), alt=(K("empty-wallet"), "feel like they got robbed"), sfx=[('ep06-pop:0.22', '@{only}')],
     el=plate("“ONLY” +27%", "@{only}", y=880, size=44, out="@{feel like they got robbed}") + plate("SO WHY DOES IT FEEL LIKE A ROBBERY?", "@{feel like they got robbed}", y=880, size=40, color="C6.accent")),
dict(start="The answer isn't in the price", tag=C2, dim=0.0, sfx=[('ep06-fall:0.25', '@{took off the board}')],
     el=board([dict(name="Big Mac", price="$5.29"), dict(name="Medium Fries", price="$3.29"), dict(name="??? ", price="—", goneAt="@{took off the board}", hlAt="@{something McDonald's}")],
              "THE BOARD", y=480, w=1000, rh=110)),

# ======================= PART 3 · ГЛАВА 3 · ПРОПАВШИЙ ОБЕД =======================
dict(start="Remember the Extra Value Meal", tag=C3, hard=True, stock=K("archive-mcd"), archive=True, sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("THE EXTRA VALUE MEAL", "0.2", y=880, size=44, color="C6.accent") + src("Photo: David E. Lucas · public domain · Wikimedia", "0.4")),
dict(start="Pick a number", tag=C3, stock=K("value-burgers"), alt=(K("big-mac-meal"), "and pay less"), sfx=[('ep06-pop:0.22', '@{and pay less}')],
     el=plate("SANDWICH + FRIES + DRINK · CHEAPER THAN ONE BY ONE", "@{and pay less}", y=880, size=34)),
dict(start="That was the whole deal", tag=C3, stock=K("burger-fries-table"), sfx=[('ep06-stamp:0.25', '@{The meal was the discount}')],
     el=plate("THE MEAL WAS THE DISCOUNT", "@{The meal was the discount}", y=880, size=50, color="C6.accent")),
dict(start="In twenty nineteen, McDonald's quietly dropped", tag=C3, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("cnn-2019", [("eliminated in 2019", "quietly dropped")], source="CNN VIA KVIA · SEPT 2025")),
dict(start="No funeral", tag=C3, dim=0.0, sfx=[('ep06-fall:0.25', '@{faded off the board}')],
     el=board([dict(name="Extra Value Meals", price="#1–#10", goneAt="@{faded off the board}", hlAt="0.1"), dict(name="Big Mac", price="$4.39"), dict(name="Medium Fries", price="$2.29")],
              "THE BOARD · 2019", y=480, w=1000, rh=110, foot="ILLUSTRATION · 2019 AVERAGE PRICES", footAt="0.3")),
dict(start="Then came the pandemic", tag=C3, stock=K("chalk-erase"), alt=(K("big-menu-board"), "prices on the board kept climbing"), sfx=[('scribble:0.25', '0.2')],
     el=plate("PANDEMIC → INFLATION → HIGHER BOARDS", "@{prices on the board}", y=880, size=36)),
dict(start="By last year, the CEO", tag=C3, stock=K("meeting"), sfx=[('ep06-pop:0.22', '0.3')],
     el=plate("CEO CHRIS KEMPCZINSKI · INVESTOR CALL · AUG 2025", "0.3", y=880, size=32)),
dict(start="Customers were, quote", tag=C3, sfx=[('t02-paper:0.3', '0.05'), ('impact:0.25', '@{more than ten dollars}')],
     el=doc("ksl-tooften", [("too often", "too often")], source="CNN VIA KSL · AUG 2025")),
dict(start="He also said the single biggest", tag=C3, stock=K("menu-board-cc0"), dim=0.72, sfx=[('ep06-stamp:0.25', '@{is the menu board}')],
     el='''<Center y={440}><Words text="“The single biggest driver … is the menu board.”" at={0.3} size={78} maxW={1500} hl={["menu", "board.”"]} /></Center>''' +
        plate("McDONALD'S CEO · AUG 2025", "0.5", y=880, size=30, color="C6.mint") + src("CNN · photo: dankeck, CC0", "0.6")),
dict(start="The menu board. The thing", tag=C3, dim=0.0, sfx=[('ep06-counter:0.3', '0.3')],
     el=board([dict(name="Big Mac", price="$4.39", to="$5.29", toAt="0.4"), dict(name="Medium Fries", price="$2.29", to="$3.29", toAt="0.9"), dict(name="10 pc McNuggets Meal", price="$7.19", to="$9.19", toAt="1.4")],
              "RAISED FOR FIVE YEARS", y=480, w=1000, rh=110)),
dict(start="And the people who noticed first", tag=C3, stock=K("empty-wallet"), sfx=[],
     el=plate("THE PEOPLE WHO COULD LEAST AFFORD IT", "@{could least afford}", y=880, size=38)),
dict(start="In late twenty twenty-five", tag=C3, sfx=[('t02-paper:0.3', '0.05'), ('ep06-fall:0.25', '@{nearly double digits}')],
     el=doc("nacs-lowincome", [("double digits", "nearly double digits")], source="NACS DAILY · NOV 2025 · McDONALD'S Q3 CALL")),
dict(start="Visits from higher earners", tag=C3, dim=0.0, sfx=[('rise:0.25', '0.1')],
     el='''<Center y={470}><Scissors at={0.05} highAt={0.05} /></Center>'''),
dict(start="Think about who that is", tag=C3, stock=K("worker-break"), alt=(K("grandfather-kids"), "The grandparent"), sfx=[],
     el=plate("LUNCH BETWEEN TWO JOBS", "@{The guy who stops}", y=880, size=38, out="@{The grandparent}") + plate("SATURDAY WITH THE GRANDKIDS", "@{The grandparent}", y=880, size=38)),
dict(start="That was McDonald's whole business", tag=C3, stock=K("empty-restaurant"), alt=(K("empty-tables"), "walking away"), sfx=[('ep06-whoosh:0.2', '@{walking away}')],
     el=""),
dict(start="People said it plainly", tag=C3, sfx=[('t02-paper:0.3', '0.05'), ('ep06-stamp:0.25', '@{So am I}')],
     el=doc("fox-soami", [("So am I", "So am I")], source="FOX NEWS · CUSTOMER POSTS (NAMES HIDDEN)")),
dict(start="If you're figuring this stuff out", tag=C3, stock=K("highway-night"), dim=0.4, sfx=[('ding:0.25', '@{subscribe}')],
     el='''<Subscribe6 at={@{subscribe}} />''' + plate("ONE BILL TAKEN APART EVERY WEEK", "@{Every week}", y=880, size=36)),

# ======================= PART 4 · ГЛАВА 4 · ТЕЛЕФОН =======================
dict(start="So where did the old prices go", tag=C4, hard=True, stock=K("phone-pay-meal"), sfx=[('ep06-whoosh:0.2', '@{They moved into your phone}')],
     el=plate("THEY MOVED INTO YOUR PHONE", "@{They moved into your phone}", y=880, size=44, color="C6.accent")),
dict(start="For a few years the McDonald's app", tag=C4, stock=K("scrolling-phone"), sfx=[('ep06-pop:0.22', '@{Two-for-one}'), ('ep06-pop:0.22', '@{a dollar off}')],
     el=plate("2-FOR-1", "@{Two-for-one}", y=880, x=700, size=46, color="C6.accent") + plate("$1 OFF", "@{a dollar off}", y=880, x=1220, size=46, color="C6.accent")),
dict(start="Many people treated it", tag=C4, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("tt-app", [("deals", "a refuge")], source="TASTING TABLE · CUSTOMER COMPLAINTS ABOUT THE APP")),
dict(start="But a deal in the app isn't free", tag=C4, stock=K("phone-typing"), alt=(K("data-stream"), "Your name"), sfx=[('ep06-pop:0.2', '@{Your name}'), ('ep06-pop:0.2', '@{your orders}'), ('ep06-pop:0.2', '@{what time you come}'), ('ep06-pop:0.2', '@{what you always get}')],
     el=plate("NAME", "@{Your name}", y=300, x=520, size=38, color="C6.accent") + plate("ORDERS", "@{your orders}", y=430, x=1400, size=38, color="C6.accent") +
        plate("8:12 AM · FRIDAYS", "@{what time you come}", y=640, x=600, size=38, color="C6.accent") + plate("ALWAYS A BIG MAC", "@{what you always get}", y=780, x=1300, size=38, color="C6.accent")),
dict(start="By the end of twenty twenty-three", tag=C4, dim=0.0, sfx=[('ep06-counter:0.3', '@{a hundred and fifty million}')],
     el='''<Center y={440}><Counter6 to={150} at={@{a hundred and fifty million}} dur={1.0} size={220} fmt={(v) => Math.round(v) + "M+"} /></Center>
<Center y={640}><Label6 at={@{a hundred and fifty million}} size={34} color={C6.mint}>ACTIVE LOYALTY USERS · WORLDWIDE · END OF 2023</Label6></Center>''' + src("McDonald's Q4 2023 earnings call · Restaurant Dive", "@{a hundred and fifty million}")),
dict(start="And once a company knows", tag=C4, stock=K("phone-notif"), sfx=[('ep06-pop:0.22', '@{decide exactly}')],
     el=plate("KNOWS WHAT YOU BUY → DECIDES WHAT TO OFFER YOU", "@{decide exactly}", y=880, size=34)),
dict(start="In New Zealand", tag=C4, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("nzh-app-top", [], source="NZ HERALD · AUG 2023") + plate("SAME DEALS · DIFFERENT PRICES ON DIFFERENT PHONES", "@{found different prices}", y=960, size=34, color="C6.accent")),
dict(start="McDonald's there said", tag=C4, sfx=[('t02-paper:0.3', '0.05'), ('ep06-pop:0.25', '@{personalised}')],
     el=doc("newshub-app", [("personalised", "personalised")], source="NEWSHUB · NEW ZEALAND · AUG 2023")),
dict(start="Here in the U.S., nobody has proven", tag=C4, stock=K("phone-pay-meal"), sfx=[],
     el=plate("U.S.: NOT PROVEN", "0.2", y=880, size=44, out="@{But customers keep posting}") + plate("USER REPORTS: APP AND BOARD DON'T MATCH", "@{But customers keep posting}", y=880, size=36, color="C6.accent")),
dict(start="And over time, users say", tag=C4, stock=K("scrolling-phone"), sfx=[('ep06-fall:0.22', '@{quietly dried up}')],
     el=plate("THE BEST APP DEALS DRIED UP · USER REPORTS", "@{quietly dried up}", y=880, size=36)),
dict(start="So now the cheap meal had two locks", tag=C4, dim=0.0, sfx=[('click:0.35', '@{You needed the app}'), ('click:0.35', '@{And you needed the deal}')],
     el='''<Center y={480}><TwoLocks aAt={@{You needed the app}} bAt={@{And you needed the deal}} /></Center>'''),

# ======================= PART 5 · ГЛАВА 5 · ТРЮК =======================
dict(start="By the summer of twenty twenty-five", tag=C5, hard=True, sfx=[('t02-paper:0.3', '0.05'), ('rise:0.25', '@{the best trick}')],
     el=doc("fortune-combo-top", [], source="FORTUNE · AUG 2025") + plate("THE BEST TRICK IN THIS STORY", "@{the best trick}", y=960, size=38, color="C6.accent")),
dict(start="In September, McDonald's announced", tag=C5, stock=K("kiosk"), sfx=[('ep06-kaching:0.25', '@{were back}')],
     el=plate("SEPT 2025 · EXTRA VALUE MEALS ARE BACK", "@{were back}", y=880, size=40, color="C6.accent") + src("Photo: EvanTech10 · Wikimedia, CC BY-SA 4.0", "0.4")),
dict(start="Eight combos", tag=C5, sfx=[('t02-paper:0.3', '0.05'), ('ep06-pop:0.25', '@{fifteen percent}')],
     el="EVM_15"),
dict(start="There was even an eight-dollar", tag=C5, dim=0.0, sfx=[('ep06-kaching:0.25', '@{eight-dollar}')],
     el=board([dict(name="Extra Value Meals", price="−15%", at="0.1", hlAt="0.1"), dict(name="Big Mac Meal", price="$8.00", at="@{eight-dollar}", tag="LIMITED TIME", tagAt="@{to celebrate}")],
              "THE BOARD · SEPT 2025", y=480, w=1100, rh=120, foot="PRICES VARY BY LOCATION", footAt="@{to celebrate}")),
dict(start="The Wall Street Journal reported", tag=C5, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("aol-wsj", [("cover", "help cover the cost")], source="WSJ VIA DELISH / AOL · AUG 2025")),
dict(start="Remember that the next time", tag=C5, stock=K("incredulous"), clean=True, sfx=[('ep06-scratch:0.25', '@{set by the market}')],
     el='''<Meme at={@{set by the market}} text="“set by the market.”" y={900} size={76} />'''),
dict(start="Headlines called it", tag=C5, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("foxb-evm-top", [], source="FOX BUSINESS · SEPT 2025")),
dict(start="Sounds great", tag=C5, stock=K("big-mac-meal"), clean=True, sfx=[('ding:0.25', '0.05')],
     el='''<Meme at={0.05} text="sounds great." y={900} size={80} />'''),
dict(start="But fifteen percent off of what", tag=C5, stock=K("facepalm"), clean=True, sfx=[('ep06-stamp:0.25', '@{of what}')],
     el='''<Meme at={@{of what}} text="15% off… of what?" y={900} size={80} />'''),
dict(start="Off the separate prices", tag=C5, dim=0.0, sfx=[('ep06-pop:0.25', '@{went up about forty}')],
     el='''<Center y={470}><Words text="−15% off prices that rose +40%" at={0.1} size={110} maxW={1500} hl={["−15%", "+40%"]} /></Center>''' + plate("THE SAME PRICES THAT CLIMBED AFTER 2019", "@{went up about forty}", y=880, size=36)),
dict(start="Let's do the math", tag=C5, dim=0.0, sfx=[('ep06-counter:0.25', '@{call it a dollar}'), ('ep06-counter:0.25', '@{A dollar forty}'), ('impact:0.3', '@{a dollar nineteen}')],
     el='''<Center y={470}><CalcSteps steps={[{ value: "$1.00", at: @{call it a dollar} }, { op: "+40%", value: "$1.40", at: @{A dollar forty} }, { op: "−15% “SAVINGS”", value: "$1.19", at: @{a dollar nineteen}, final: true }]} note="ILLUSTRATION USING McDONALD'S OWN AVERAGES" noteAt={0.3} /></Center>'''),
dict(start="So even with the new discount", tag=C5, dim=0.0, sfx=[('impact:0.3', '@{roughly nineteen percent}')],
     el='''<Center y={440}><Words text="≈ +19%" at={@{roughly nineteen percent}} size={240} hl={["+19%"]} /></Center>
<Center y={650}><Label6 at={@{roughly nineteen percent}} size={32} color={C6.mint}>VS. 2019 SEPARATE-ITEM PRICES · USING THEIR OWN AVERAGES</Label6></Center>'''),
dict(start="And the eight-dollar Big Mac Meal", tag=C5, sfx=[('t02-paper:0.3', '0.05'), ('ep06-pop:0.25', '@{Prices vary by location}')],
     el=doc("nbc-vary", [("vary by location", "Prices vary by location")], source="NBC10 PHILADELPHIA / AP · SEPT 2025") + plate("LIMITED-TIME OFFER", "@{limited-time offer}", y=960, size=38, color="C6.accent")),
dict(start="That's the move", tag=C5, dim=0.0, sfx=[('ep06-stamp:0.25', '@{Raise the board}'), ('ep06-stamp:0.25', '@{Remove the discount}'), ('ep06-kaching:0.3', '@{sell the discount back}')],
     el='''<Center y={470}><ThreeMoves steps={[{ word: "RAISE", sub: "the board", at: @{Raise the board} }, { word: "REMOVE", sub: "the discount", at: @{Remove the discount} }, { word: "RESELL", sub: "the discount", at: @{sell the discount back} }]} /></Center>''' +
        plate("…AND CALL IT VALUE", "@{call it value}", y=880, size=40, color="C6.accent")),

# ======================= PART 6 · ГЛАВА 6 · СЕЙЧАС И ЧТО ДЕЛАТЬ =======================
dict(start="And it still isn't working", tag=C6x, hard=True, sfx=[('t02-paper:0.3', '0.05'), ('ep06-fall:0.25', '@{slipped}')],
     el="AP_SALES"),
dict(start="Fast food visits across the country", tag=C6x, stock=K("empty-drive-thru"), sfx=[('ep06-fall:0.25', '@{more than two percent}')],
     el=plate("U.S. FAST-FOOD VISITS · Q3 2026: −2.6%", "@{more than two percent}", y=880, size=40) + src("AP · Revenue Management Solutions", "@{more than two percent}")),
dict(start="In the same report", tag=C6x, dim=0.0, sfx=[('ep06-counter:0.3', '@{Two point four nine}'), ('ep06-kaching:0.3', '@{In one quarter}')],
     el='''<Center y={420}><Words text="+9%" at={@{went up nine percent}} size={150} color={C6.money} hl={["+9%"]} /></Center>
<Center y={620}><Counter6 to={2.49} at={@{Two point four nine}} dur={0.9} size={180} color={C6.money} fmt={(v) => "$" + v.toFixed(2) + "B"} /></Center>
<Center y={800}><Label6 at={@{In one quarter}} size={34} color={C6.mint}>NET INCOME · WORLDWIDE · ONE QUARTER</Label6></Center>''' + src("McDonald's Q3 2026 results via AP", "0.3")),
dict(start="So now they're trying again", tag=C6x, stock=K("drive-thru-sign"), alt=(K("calc-phone"), "Their own finance chief"), sfx=[('ep06-pop:0.22', '@{three dollars and under}'), ('buzz:0.22', "@{didn't catch on}")],
     el=plate("“$3 & UNDER” MENU · SPRING 2026", "@{three dollars and under}", y=880, size=40, out="@{Their own finance chief}") + plate("CFO: IT DIDN'T CATCH ON", "@{didn't catch on}", y=880, size=40, color="C6.accent")),
dict(start="Now they're testing new bundles", tag=C6x, stock=K("mcchicken"), alt=(K("paper-bag"), "A national version"), sfx=[('ep06-counter:0.25', '@{nineteen hundred}'), ('ep06-pop:0.22', '@{three fifty}')],
     el=plate("TEST · ~1,900 RESTAURANTS", "@{nineteen hundred}", y=880, size=40, out="@{A McChicken}") + plate("McCHICKEN + SMALL FRIES · $3.50 · TEST EXAMPLE", "@{three fifty}", y=880, size=36, color="C6.accent", out="@{A national version}") +
        plate("NATIONAL VERSION · EARLY 2027", "@{A national version}", y=880, size=40) + src("Restaurant Dive · AP · photo: Evan-Amos, public domain", "0.4")),
dict(start="Every year or so", tag=C6x, dim=0.0, sfx=[('click:0.3', '0.3'), ('click:0.3', '0.9'), ('click:0.3', '1.5'), ('click:0.3', '2.1'), ('ep06-pop:0.25', '2.7')],
     el='''<Center y={470}><NameCarousel names={[{ text: "$5 Meal Deal", year: "2024", at: 0.3 }, { text: "McValue", year: "2025", at: 0.9 }, { text: "Extra Value Meals", year: "back · 2025", at: 1.5 }, { text: "$3 & Under", year: "2026", at: 2.1 }, { text: "?", year: "2027", at: 2.7 }]} /></Center>'''),
dict(start="Which is exactly what the Extra Value Meal was", tag=C6x, stock=K("archive-mcd"), archive=True, sfx=[],
     el=plate("THE CHEAP MEAL THEY TOOK OFF THE BOARD", "@{before they took it}", y=880, size=36)),
dict(start="So here's how you use this", tag=C6x, stock=K("interstate44"), sfx=[('ep06-stamp:0.25', '@{The board is the opening bid}')],
     el=plate("THE BOARD IS THE OPENING BID", "@{The board is the opening bid}", y=880, size=50, color="C6.accent") + src("Photo: TheWhitePelican · Wikimedia, CC BY 3.0", "0.4")),
dict(start="Before you order", tag=C6x, dim=0.0, sfx=[('ding:0.25', '@{The combo on the board}'), ('ding:0.25', '@{The three items}'), ('ding:0.25', '@{And the deal in the app}'), ('ep06-kaching:0.25', '@{Take the lowest}'), ('ding:0.25', '@{ask for it by name}')],
     el='''<Center y={480}><Checklist items={[{ text: "The combo on the board", at: @{The combo on the board} }, { text: "The three items, added up", at: @{The three items} }, { text: "The deal in the app", at: @{And the deal in the app} }, { text: "Take the lowest · ask for the value meal by name", at: @{Take the lowest} }]} /></Center>'''),
dict(start="And if the McDonald's on your exit", tag=C6x, stock=K("road-signs"), alt=(K("needles-ca"), "the next one down the road"), sfx=[('ep06-whoosh:0.2', '@{the next one down the road}')],
     el=plate("THE NEXT EXIT MIGHT NOT BE", "@{might not be}", y=880, size=40, color="C6.money") + src("Photo: G. Edward Johnson · Wikimedia, CC BY 4.0", "@{the next one down the road}")),
dict(start="Seventeen fifty-nine was never", tag=C6x, dim=0.0, sfx=[('ep06-pop:0.25', '0.05'), ('ep06-pop:0.25', '@{But nine twenty-nine}'), ('impact:0.3', '@{They saw you coming}')],
     el='''<Center y={430}><PriceDuel at={0.05} a={{ label: "never the normal price", value: "$17.59", color: C6.loss }} b={{ label: "wasn't a gift either", value: "$9.29", color: C6.accent, at: @{But nine twenty-nine} }} /></Center>''' +
        plate("THEY SAW YOU COMING · NOW YOU SEE THEM COMING", "@{They saw you coming}", y=900, size=40, color="C6.accent")),
dict(start="Tell me in the comments", stock=K("midnight-lineup"), dim=0.55, end_pad=8.0, sfx=[('ep06-whoosh:0.2', '0.3')],
     el='''<EndCard6 at={0.3} next="The Menu Said $14. The Bill Said $31." />''' + plate("WHAT DOES A BIG MAC MEAL COST WHERE YOU LIVE?", "0.4", y=180, size=36, color="C6.accent")),
]

# музыка по главам (Фонотека YouTube, автора указывать не нужно)
EP["music_at"] = [
    ("Seventeen dollars and fifty-nine cents", "audio/t08/shady-guise.mp3", 0.07),
    ("Let's read their own numbers", "audio/t08/dollar-signs.mp3", 0.075),
    ("Remember the Extra Value Meal", "audio/t08/night-falls.mp3", 0.08),
    ("So where did the old prices go", "audio/t08/system-corruption.mp3", 0.075),
    ("By the summer of twenty twenty-five", "audio/t08/fact-or-friction.mp3", 0.075),
    ("And it still isn't working", "audio/t08/free-advice.mp3", 0.08),
]

# графика без видео — мягкий свет фона (Drift), чтобы кадр не стоял
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", "") and _sc.get("el", "") not in ("LETTER_FANS", "MYTHS_929", "LETTER_95", "MYTHS_27", "EVM_15", "AP_SALES"):
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"

# ---------- улики, которые снимаются отдельно (Wayback / PDF) ----------
_SUB = {
    "LETTER_FANS": lambda: doc("mcd-letter", [("U.S. fans", "our U.S. fans")], source="McDONALD'S · OPEN LETTER · MAY 29, 2024 (WEB ARCHIVE)"),
    "LETTER_95": lambda: doc("mcd-letter-95", [("95%", "ninety-five percent")], source="McDONALD'S · OPEN LETTER · MAY 2024 (WEB ARCHIVE)"),
    "MYTHS_929": lambda: doc("mcd-myths", [("fact-bigmac", "nine dollars and twenty-nine cents")], source="McDONALD'S “U.S. PRICING: MYTHS VS. FACTS” · MAY 2024", zoom=None),
    "MYTHS_27": lambda: doc("mcd-myths", [("myth-104", "a hundred and four percent"), ("fact-bigmac", "twenty-seven")], source="McDONALD'S “U.S. PRICING: MYTHS VS. FACTS” · MAY 2024", zoom=None) + plate("MYTH: +104% · FACT (PER McDONALD'S): +27%", "@{twenty-seven}", y=960, size=34, color="C6.accent"),
    "EVM_15": lambda: doc("mcd-evm", [("15 percent", "fifteen percent")], source="McDONALD'S PRESS RELEASE · SEPT 2, 2025 (WEB ARCHIVE)"),
    "AP_SALES": lambda: doc("ap-sales2", [("fell 0.2%", "slipped")], source="AP VIA NEWS4JAX · NOV 4, 2026"),
}
for _sc in S:
    if _sc.get("el") in _SUB:
        _sc["el"] = _SUB[_sc["el"]]()
