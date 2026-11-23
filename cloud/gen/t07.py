# T07 «The Sign Said $3.99. Your Bank Said $175.» — седьмой ролик They Saw You Coming (план сцен 23.11.2026).
# Окраска: детектив «идём за деньгами» + сухая сатира приправой. Загадка: заправка зарабатывает 10–15¢ с галлона —
#   кто же тогда зарабатывает на тебе? Каждая глава — новый «карман». Иск Калифорнии — только «according to the
#   complaint», «a court will decide»; ответчик ли Kalibrate — не утверждаем.
# Визуальная идея (своя для выпуска): ТАБЛО КОЛОНКИ + БАНКОВСКОЕ УВЕДОМЛЕНИЕ (src/brand/t07.tsx: PumpLCD, BankPush)
#   в начале и в финале («Pending −$175.00» → «−$47.88 · no hold»). Отличие от T04/T06 («путь одного чека»):
#   не чек, а СЛЕД ДЕНЕГ.
# Сквозная карта: MoneyTrail — копилка станции (10–15¢) и семь карманов со знаком «?», открываются по главам
#   (конец части 1 — все «?»; конец главы «вывеска»; конец «кнопки»; конец «времени»; финал — всё открыто).
# Начало: холодный вход без трейлера — табло $47.88 и уведомление −$175 к 0:05; «это холд» к 0:08;
#   парадокс 10–15¢ к ~0:45; «идём за деньгами» к ~1:00.
# Нарастание глав: вывеска (наличные/карта, комиссии, 9/10) → магазин (приманка и бизнес) → кнопка (премиум, CNN
#   «pure profit») → время (ракеты и перья) → поворот на ~2/3: алгоритм и иск → как сберечь + табло без холда.
# Гэги: «Legal.» (штамп), «You leave with a hot dog» (мем), «premium customer» (мем с большим пальцем).
# Инструменты: устройство (табло + уведомление), сквозная карта, «реклама против документа» (вывеска против WPTV),
#   лестница разрыва премиума, реконструкция окна ПО (с пометкой).
import json, os
from evid import ev

EP = dict(
    comp="T07Gas",
    words="src/videos/t07-gas-words.json",
    text="cloud/voice/t07-text",
    parts=6,
    broll="cloud/broll/t07.json",
    audio="audio/t07-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03", "t07"],
    music=[],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t07.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t07-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

C1, C2, C3, C4, C5, C6x = (1, "The Sign"), (2, "The Store"), (3, "The Button"), (4, "The Timing"), (5, "The Software"), (6, "Keep It")


def doc(name, marks=(), source=None, **kw):
    kw.setdefault("zoom", 0.7 if name.startswith("nacs") else 0.9)  # урок T02: не загонять камеру в голый текст
    if not name.endswith("-top"):
        kw.setdefault("inset", f"{name}-top")
    return ev("t07", name, marks=list(marks), source=source, **kw)


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


def src(text, at="0.3"):
    return f"<Source6 at={{{at}}}>{text}</Source6>"


# ---------- сквозная карта: карманы ----------
POCKETS = [
    ("Card price on the sign", "+5–20¢", "C6.loss"),
    ("Bank swipe fees", "6–10¢", "C6.loss"),
    ("That 9/10 of a cent", "0.9¢", "C6.loss"),
    ("The store: food & drinks", "38.9%", "C6.money"),
    ("Premium you don't need", "≈ +90¢", "C6.loss"),
    ("Slow on the way down", "3–4× slower", "C6.loss"),
    ("Pricing software (alleged)", "≈6–30¢", "C6.accent"),
]


def trail(at, hl=None, hlAt=None, x=960, y=540, start="0.05", w=760):
    """at: {индекс: время} — когда карман открывается; «-1» — уже открыт."""
    rows = []
    for i, (l, v, c) in enumerate(POCKETS):
        a = at.get(i)
        rows.append(f'{{ label: "{l}", value: "{v}", color: {c}' + (f", at: {a}" if a is not None else "") + " }")
    h = f" hl={{{hl}}} hlAt={{{hlAt}}}" if hl is not None else ""
    return f'<Center x={{{x}}} y={{{y}}}><MoneyTrail at={{{start}}} w={{{w}}} pockets={{[{", ".join(rows)}]}}{h} /></Center>'


ALL = {i: "-1" for i in range(7)}

S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД =======================
dict(start="You put forty-eight dollars", stock=K("fill-car"), dim=0.55, sfx=[('ep06-pump:0.3', '0.05'), ('ding:0.3', '@{Your bank app}')],
     el='''<Center x={560} y={520}><PumpLCD at={0.05} dur={1.6} w={600} /></Center>
<Center x={1380} y={500}><BankPush at={@{Your bank app}} w={680} /></Center>'''),
dict(start="Nobody stole your card", stock=K("worried-card"), dim=0.3, sfx=[('ep06-stamp:0.25', "@{That's a hold}")],
     el=plate("NOT FRAUD. A HOLD.", "@{That's a hold}", y=880, size=50, color="C6.accent")),
dict(start="When you pay at the pump", stock=K("man-refuel"), alt=(K("pump-close"), "so it blocks"), sfx=[('ep06-pop:0.22', '@{so it blocks}')],
     el=plate("THE PUMP DOESN'T KNOW HOW MUCH YOU'LL BUY", "0.3", y=880, size=36, out="@{so it blocks}") +
        plate("SO IT BLOCKS THE BIGGEST POSSIBLE FILL-UP", "@{so it blocks}", y=880, size=36, color="C6.accent")),
dict(start="In 2022, Visa and Mastercard", stock=K("tap-card"), dim=0.6, sfx=[('impact:0.25', '@{a hundred and seventy-five}')],
     el='''<Center y={430}><Words text="$125 → $175" at={0.1} size={170} hl={["$175"]} /></Center>
<Center y={600}><Label6 at={0.2} size={34} color={C6.mint}>VISA & MASTERCARD · PAY-AT-PUMP HOLD LIMIT · 2022</Label6></Center>''' + src("NACS · The Drive", "0.3")),
dict(start="On a credit card", stock=K("card-phone"), sfx=[('ep06-pop:0.22', '0.2')],
     el=plate("ON A CREDIT CARD: ANNOYING", "0.2", y=880, size=40)),
dict(start="On a debit card", dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('t02-declined:0.3', '@{frozen}')],
     el='''<Center y={480}><Balance at={0.1} hitAt={@{frozen}} /></Center>
<Center y={1010}><Tag7 at={0.2}>EXAMPLE</Tag7></Center>''' + plate("THE HOLD ALONE CAN TRIGGER AN OVERDRAFT FEE", "@{the hold alone}", y=900, size=34, color="C6.accent")),
dict(start="Usually it clears", stock=K("hourglass"), sfx=[('tick:0.3', '0.2'), ('ep06-pop:0.22', '@{Some banks}')],
     el=plate("USUALLY: A COUPLE OF HOURS", "0.2", y=880, size=40, out="@{Some banks}") +
        plate("SOME BANKS: UP TO 3 DAYS", "@{Some banks}", y=880, size=44, color="C6.accent") + src("Visa & Mastercard via Business Insider · Mental Floss", "0.3")),
dict(start="So you'd think the station", stock=K("station-night"), alt=(K("neon-station"), "Almost half"), sfx=[('ep06-pop:0.22', '@{Almost half}')],
     el=plate("45% OF DRIVERS GUESS: $2+ A GALLON", "@{Almost half}", y=880, size=40) + src("NACS consumer survey", "@{Almost half}")),
dict(start="Here's the strange part", sfx=[('t02-paper:0.3', '0.1'), ('impact:0.25', '@{ten to fifteen cents}')],
     el=doc("nacs-margin", [("10- to 15-cent profit", "ten to fifteen cents")], source="NACS · “WHO MAKES MONEY SELLING GAS?” · 2025")),
dict(start="Twelve gallons", dim=0.0, sfx=[('ep06-coin:0.3', '@{a dollar fifty}'), ('rise:0.25', "@{somebody's making}")],
     el='''<Center x={560} y={520}><PumpLCD at={-1} w={560} /></Center>
<Center x={1380} y={430}><Words text="≈ $1.50" at={@{a dollar fifty}} size={160} hl={["$1.50"]} /></Center>
<Center x={1380} y={570}><Label6 at={@{a dollar fifty}} size={30} color={C6.mint}>WHAT THE STATION MAKES ON THIS FILL-UP</Label6></Center>
<Center x={1380} y={700}><Label6 at={@{somebody's making}} size={40} color={C6.accent}>SO WHO'S MAKING THE MONEY?</Label6></Center>''' + src("our calculation: 12 gal × 10–15¢", "@{a dollar fifty}")),
dict(start="So let's follow it", dim=0.0, sfx=[('ep06-whoosh:0.25', '0.05'), ('ep06-coin:0.25', '@{cent by cent}')],
     el=trail({})),

# ======================= PART 2 · ГЛАВА 1 · ВЫВЕСКА =======================
dict(start="Start with the sign", tag=C1, hard=True, stock=K("cars-lined"), alt=(K("shell-night"), "Three ninety-nine"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=""),
dict(start="Look closer", tag=C1, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('ep06-stamp:0.25', '@{Cash}')],
     el='''<Center y={430}><PriceSign at={0.05} price="3.99" label="REGULAR" scale={1.3} /></Center>
<Center y={800}><Stamp at={@{Cash}} text="CASH" size={90} color={C6.accent} rotate={-4} /></Center>'''),
dict(start="The card price is often", tag=C1, dim=0.0, sfx=[('ep06-pop:0.22', '@{card price}'), ('ep06-pop:0.22', '@{Most people}')],
     el='''<Center y={440}><CashCredit at={0.05} creditAt={@{card price}} scale={0.85} /></Center>''' +
        plate("MOST PEOPLE PAY WITH A CARD", "@{Most people}", y=900, size=40, color="C6.accent") + src("CBS Baltimore · NACS: 75% of c-store transactions are cards", "@{Most people}")),
dict(start="In Maryland, a state senator", tag=C1, sfx=[('ep06-stamp:0.25', '@{bait and switch}')],
     stock=K("highway-sunset"), dim=0.5,
     el='''<Center y={460}><Words text="“bait and switch”" at={@{bait and switch}} size={130} hl={["switch”"]} /></Center>''' +
        plate("MARYLAND STATE SENATOR CHERYL KAGAN · ON CASH-ONLY SIGNS", "0.2", y=880, size=30, color="C6.mint") + src("CBS News Baltimore", "@{bait and switch}")),
dict(start="Since October 2024", tag=C1, dim=0.0, sfx=[('ep06-whoosh:0.25', '@{the same size}')],
     el='''<Center y={440}><CashCredit at={0.05} same sameAt={@{the same size}} scale={0.85} /></Center>''' +
        plate("MARYLAND · SINCE OCT 1, 2024 · SAME-SIZE NUMBERS", "0.2", y=910, size=34, color="C6.accent")),
dict(start="Other states don't bother", tag=C1, stock=K("aerial-flag"), sfx=[('ep06-whoosh:0.2', '@{In Florida}')],
     el=plate("FLORIDA", "@{In Florida}", y=880, size=44)),
dict(start="a TV station found", tag=C1, sfx=[('t02-paper:0.3', '0.1'), ('impact:0.25', '@{a full dollar}')],
     el=doc("wptv", [("$1", "a full dollar")], source="WPTV · WEST PALM BEACH")),
dict(start="Legal", tag=C1, dim=0.0, sfx=[('ep06-stamp:0.3', '0.05')],
     el='''<Center y={480}><CardGap at={-1} /></Center>
<Center y={860}><Stamp at={0.05} text="LEGAL" size={110} color={C6.loss} rotate={-7} /></Center>'''),
dict(start="A week after the reporter", tag=C1, dim=0.0, sfx=[('ep06-pop:0.22', '@{To ninety cents}'), ('buzz:0.25', '@{back to a dollar}')],
     el='''<Center y={480}><CardGap at={-1} times={[@{To ninety cents}, @{back to a dollar}, 999]} /></Center>''' +
        plate("A WEEK LATER: 90¢ · MONTHS LATER: $1 AGAIN", "@{To ninety cents}", y=860, size=34) + src("WPTV", "0.3")),
dict(start="Why charge extra", tag=C1, stock=K("card-reader"), alt=(K("tap-card"), "The trade group says"), sfx=[('ep06-pop:0.22', '@{every swipe}'), ('ep06-coin:0.25', '@{six to ten cents}')],
     el=plate("EVERY SWIPE COSTS THE STATION", "@{every swipe}", y=880, size=40, out="@{six to ten cents}") +
        plate("BANK FEES: 6–10¢ OF EVERY GALLON", "@{six to ten cents}", y=880, size=42, color="C6.accent") + src("NACS · CSNews", "@{six to ten cents}")),
dict(start="Last year, convenience stores", tag=C1, sfx=[('t02-paper:0.3', '0.1'), ('ep06-counter:0.3', '@{twenty-one point three}')],
     el=doc("nacs-sales", [("21.3 billion", "twenty-one point three")], source="NACS · APRIL 2026 · 2025 DATA") +
        plate("FOR MANY STORES: MORE THAN THEIR PRE-TAX PROFIT", "@{pre-tax profit}", y=960, size=30, color="C6.accent")),
dict(start="Then there's that little nine", tag=C1, dim=0.0, sfx=[('ep06-pop:0.25', '@{Nine tenths}')],
     el='''<Center y={500}><PriceSign at={0.05} price="3.99" label="REGULAR" scale={1.4} hlFrac={@{Nine tenths}} /></Center>'''),
dict(start="It started in the 1930s", tag=C1, stock=K("archive-minneapolis-1937"), alt=(K("archive-carrier-mills-1939"), "a full cent"), archive=True, sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("1930s · GAS COST PENNIES", "0.2", y=880, size=40, out="@{a full cent}") + plate("A FULL CENT WAS A BIG JUMP", "@{a full cent}", y=880, size=40) +
        src("Minneapolis 1937 · Carrier Mills, Ill. 1939 · public domain", "0.3")),
dict(start="It never went away", tag=C1, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.22', '@{a tenth}')],
     el=doc("nacs-fraction", [("That 0.9 cent in the price", "a tenth")], source="NACS · WHY GAS IS PRICED IN FRACTIONS OF A PENNY")),
dict(start="So if the gas barely pays", tag=C1, dim=0.0, sfx=[('ep06-coin:0.25', '0.1'), ('ep06-coin:0.25', '0.45'), ('ep06-coin:0.25', '0.8')],
     el=trail({0: "0.1", 1: "0.45", 2: "0.8"})),

# ======================= ГЛАВА 2 · МАГАЗИН =======================
dict(start="Here's the whole business", tag=C2, hard=True, stock=K("storefront-night"), alt=(K("open-sign"), "The store is the business"), sfx=[('ep06-stamp:0.25', '@{The gallon is the bait}'), ('ep06-kaching:0.3', '@{The store is the business}')],
     el=plate("THE GALLON IS THE BAIT", "@{The gallon is the bait}", y=880, size=56, color="C6.accent", out="@{The store is the business}") +
        plate("THE STORE IS THE BUSINESS", "@{The store is the business}", y=880, size=56, color="C6.money")),
dict(start="Fuel brings in", tag=C2, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('impact:0.25', '@{less than forty percent}')],
     el='''<Center y={500}><SalesVsProfit at={0.1} profitAt={@{less than forty percent}} /></Center>''' + src("NACS · 2025 data · share of fuel", "0.3")),
dict(start="The trade group has spent years", tag=C2, stock=K("cashier"), sfx=[('ep06-pop:0.22', '@{pay the whole}')],
     el=plate("NACS: PAY THE WHOLE SITE'S BILLS WITH INSIDE PROFITS", "@{pay the whole}", y=880, size=32) + src("NACS Magazine · June 2026", "@{pay the whole}")),
dict(start="And inside, the biggest", tag=C2, stock=K("hotdog-grill"), alt=(K("cola-pour"), "Almost thirty-nine"), sfx=[('ep09-sizzle:0.2', '0.1'), ('ep06-kaching:0.25', '@{Almost thirty-nine}')],
     el=plate("FOOD & FOUNTAIN DRINKS", "@{food and fountain}", y=880, size=44, out="@{Almost thirty-nine}") +
        plate("38.9% OF IN-STORE GROSS PROFIT", "@{Almost thirty-nine}", y=880, size=44, color="C6.money") + src("NACS · 2025 data", "@{Almost thirty-nine}")),
dict(start="The store is built for that", tag=C2, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.22', '@{traffic generator}')],
     el=doc("natso-top", [], source="NATSO · DESIGN ADVICE FOR TRUCK-STOP STORES") + plate("“THE WALK-IN COOLER IS A TRAFFIC GENERATOR”", "@{traffic generator}", y=960, size=36, color="C6.accent")),
dict(start="and says to place it", tag=C2, dim=0.0, sfx=[('t02-door:0.3', '@{Go in for a beer}'), ('ep06-pop:0.25', '@{something else}')],
     el='''<Center y={500}><StoreMap at={0.05} pathAt={@{Go in for a beer}} grabAt={@{something else}} /></Center>''' + plate("ILLUSTRATION", "0.3", y=1010, size=22, color="C6.mint")),
dict(start="You came for gas", tag=C2, stock=K("hotdog-hold"), clean=True, sfx=[('ep06-scratch:0.25', '@{You leave}')],
     el='''<Meme at={0.05} out={@{You leave}} text="you came for gas." y={900} size={76} /><Meme at={@{You leave}} text="you leave with a hot dog." y={900} size={76} />'''),
dict(start="But you don't even have to go inside", tag=C2, stock=K("nozzle"), sfx=[('click:0.35', "@{There's a button}")],
     el=plate("THERE'S A BUTTON FOR THAT", "@{There's a button}", y=880, size=44, color="C6.accent")),

# ======================= PART 3 · ГЛАВА 3 · КНОПКА =======================
dict(start="Regular. Plus. Premium", tag=C3, hard=True, dim=0.0, sfx=[('click:0.3', '0.05'), ('click:0.3', '0.25'), ('sparkle:0.3', '@{The word premium}')],
     el='''<Center y={480}><GradeButtons at={0.05} hlAt={@{The word premium}} /></Center>'''),
dict(start="It sounds like", tag=C3, stock=K("engine-open"), sfx=[],
     el=plate("“A FAVOR FOR YOUR CAR”?", "0.2", y=880, size=44)),
dict(start="AAA tested it", tag=C3, stock=K("fuel-gauge"), sfx=[('buzz:0.2', '@{premium did nothing}')],
     el=plate("CARS BUILT FOR REGULAR + PREMIUM = NOTHING", "@{premium did nothing}", y=880, size=36)),
dict(start="No extra horsepower", tag=C3, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("aaa-research", [("no significant improvement in horsepower", "No extra horsepower")], source="AAA · PREMIUM FUEL RESEARCH")),
dict(start="Their engineers put it simply", tag=C3, stock=K("dashboard"), dim=0.78, sfx=[('ep06-stamp:0.25', '@{higher octane}')],
     el='''<Center y={470}><Words text="“Premium is higher octane, not higher quality.”" at={@{higher octane}} size={76} maxW={1500} hl={["not", "quality"]} /></Center>''' +
        plate("AAA ENGINEERS · 2016", "@{higher octane}", y=880, size=30, color="C6.mint") + src("AAA via CBS New York, Sept 2016", "@{higher octane}")),
dict(start="In one year, AAA estimated", tag=C3, dim=0.0, sfx=[('ep06-counter:0.3', '@{sixteen and a half}'), ('ep06-counter:0.3', '@{two hundred seventy}'), ('impact:0.3', '@{over two billion}')],
     el='''<Center y={250}><Label6 at={0.1} size={34} color={C6.accent}>AAA · ONE YEAR · CARS BUILT FOR REGULAR</Label6></Center>
<Center y={500}><Row gap={70}>
<Col gap={14}><Counter6 to={16.5} at={@{sixteen and a half}} dur={0.9} size={130} color={C6.ink} fmt={(v) => v.toFixed(1) + "M"} /><Label6 at={@{sixteen and a half}} size={26}>DRIVERS</Label6></Col>
<Col gap={14}><Counter6 to={270} at={@{two hundred seventy}} dur={0.9} size={130} color={C6.ink} fmt={(v) => Math.round(v) + "M+"} /><Label6 at={@{two hundred seventy}} size={26}>FILL-UPS</Label6></Col>
<Col gap={14}><Counter6 to={2.1} at={@{over two billion}} dur={0.9} size={130} color={C6.loss} fmt={(v) => "$" + v.toFixed(1) + "B"} /><Label6 at={@{over two billion}} size={26} color={C6.loss}>SPENT ON NOTHING</Label6></Col>
</Row></Center>''' + src("AAA · one year · cars built for regular", "0.4")),
dict(start="And back then", tag=C3, dim=0.0, sfx=[('ep06-pop:0.22', '0.1')],
     el='''<Center y={470}><Words text="+50¢" at={0.1} size={220} hl={["+50¢"]} /></Center>
<Center y={660}><Label6 at={0.3} size={34} color={C6.mint}>PREMIUM OVER REGULAR · 2016</Label6></Center>''' + src("U.S. EIA", "0.3")),
dict(start="For decades, premium", tag=C3, dim=0.0, sfx=[('ep06-pop:0.2', '0.1'), ('ep06-pop:0.2', '@{By 2015}'), ('ep06-pop:0.2', '@{By 2018}'), ('ep06-pop:0.2', '@{Past eighty}'), ('impact:0.3', "@{close to a dollar}")],
     el='''<Center y={500}><GapLadder times={[0.1, @{By 2015}, @{By 2018}, @{Past eighty}, @{close to a dollar}]} h={440} /></Center>''' + src("U.S. EIA data via CNN · premium minus regular", "0.3")),
dict(start="So premium got that much more", tag=C3, stock=K("refinery"), sfx=[],
     el=plate("MORE EXPENSIVE TO MAKE?", "0.2", y=880, size=44)),
dict(start="CNN went through", tag=C3, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('rise:0.3', '@{The price you pay}')],
     el='''<Center y={470}><WholesaleRetail at={0.1} retailAt={@{The price you pay}} h={460} /></Center>''' + src("CNN · U.S. EIA data · since 2007", "0.3")),
dict(start="CNN's conclusion was blunt", tag=C3, stock=K("refill-person"), dim=0.7, sfx=[('ep06-stamp:0.25', '@{pure profit}')],
     el='''<Center y={460}><Words text="“Premium gas has become pure profit for gas stations.”" at={@{Premium gas}} size={80} maxW={1500} hl={["pure", "profit"]} /></Center>''' +
        plate("CNN · JULY 2026", "@{Premium gas}", y=880, size=30, color="C6.mint") + src("CNN, via ABC17 News", "@{Premium gas}")),
dict(start="Twelve gallons of premium", tag=C3, dim=0.0, sfx=[('ep06-kaching:0.25', '@{Ten dollars and eighty}')],
     el='''<Center y={440}><Words text="12 gal × ≈90¢ = $10.80" at={0.1} size={110} hl={["$10.80"]} /></Center>
<Center y={620}><Label6 at={@{Every fill-up}} size={40} color={C6.accent}>EVERY FILL-UP</Label6></Center>''' + src("our calculation · premium gap close to $1 (U.S. EIA via CNN)", "0.3")),
dict(start="Congratulations", tag=C3, stock=K("thumbs-up"), clean=True, sfx=[('ding:0.3', "@{premium customer}")],
     el='''<Meme at={0.05} text="congratulations." y={860} size={70} out={@{premium customer}} /><Meme at={@{premium customer}} text="you're a premium customer." y={880} size={70} />'''),
dict(start="If you want to catch these", tag=C3, stock=K("station-day"), sfx=[('click:0.35', '@{subscribe}')],
     el='''<Subscribe6 at={@{subscribe}} />''' + plate("ONE OF THESE EVERY FEW DAYS", "@{every few days}", y=880, size=36)),
dict(start="But the sign, the store", tag=C3, dim=0.0, sfx=[('ep06-coin:0.25', '0.2'), ('ep06-coin:0.25', '0.5'), ('rise:0.3', '@{The next one}')],
     el=trail({0: "-1", 1: "-1", 2: "-1", 3: "0.2", 4: "0.5"}, hl=5, hlAt="@{The next one}")),

# ======================= PART 4 · ГЛАВА 4 · ВРЕМЯ =======================
dict(start="Remember this spring", tag=C4, hard=True, stock=K("pump-rise"), alt=(K("busy-station"), "the sign out front"), sfx=[('rise:0.3', '@{jumped with it}')],
     el=plate("SPRING 2026: OIL JUMPS", "0.2", y=880, size=40)),
dict(start="In March, the national average", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('impact:0.25', '@{a full dollar}')],
     el=doc("aaa-march", [("One Dollar in One Month", "a full dollar")], source="AAA · MARCH 2026")),
dict(start="Then oil came back down", tag=C4, stock=K("pumpjacks"), alt=(K("aerial-flag"), "And the sign"), sfx=[('ep06-fall:0.25', '0.2')],
     el=plate("OIL: BACK DOWN", "0.2", y=880, size=44, out="@{And the sign}") + plate("THE SIGN: TOOK ITS TIME", "@{And the sign}", y=880, size=44, color="C6.accent")),
dict(start="Economists have a name", tag=C4, stock=K("rocket"), alt=(K("feather"), "come down like a feather"), clean=True, sfx=[('ep06-rocket:0.3', '@{like a rocket}'), ('sparkle:0.25', '@{like a feather}')],
     el=plate("ROCKETS AND FEATHERS", "@{Rockets and feathers}", y=880, size=56, color="C6.accent")),
dict(start="It's one of the most studied", tag=C4, dim=0.0, sfx=[('rise:0.3', '0.2'), ('ep06-fall:0.3', '@{three to four times}')],
     el='''<Center y={460}><RocketFeather at={0.2} fall={@{three to four times}} h={440} labels={["OIL UP", "PUMP: UP FAST", "DOWN: 3–4× SLOWER"]} /></Center>''' +
        src("Chesnes · FTC economist · The Energy Journal", "0.3")),
dict(start="The St. Louis Fed", tag=C4, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("stlfed", [("decline much more slowly", "came down slowly")], source="FEDERAL RESERVE BANK OF ST. LOUIS · AUG 2026")),
dict(start="Why? Part of it is us", tag=C4, stock=K("street-phones"), alt=(K("drive-night"), "When they're falling"), sfx=[('ep06-pop:0.22', '@{everyone\'s watching}'), ('ep06-pop:0.22', "@{nobody shops}")],
     el=plate("PRICES RISING: EVERYONE COMPARES", "@{everyone's watching}", y=880, size=40, out="@{When they're falling}") +
        plate("PRICES FALLING: NOBODY CHECKS", "@{nobody shops}", y=880, size=40, color="C6.accent")),
dict(start="Stations can drift down", tag=C4, stock=K("neon-station"), sfx=[],
     el=plate("…BECAUSE YOU STOPPED CHECKING", "@{you stopped checking}", y=880, size=42)),
dict(start="And so far, this is", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('impact:0.25', '@{most expensive November}')],
     el=doc("aaa-nov", [("most expensive November", "most expensive November")], source="AAA · NOV 2026")),
dict(start="So far, every trick", tag=C4, dim=0.0, sfx=[('ep06-coin:0.25', '0.3')],
     el=trail({0: "-1", 1: "-1", 2: "-1", 3: "-1", 4: "-1", 5: "0.3"}, hl=6, hlAt="@{a person behind it}")),
dict(start="An owner who picks", tag=C4, stock=K("open-sign"), alt=(K("night-drone"), "But in California"), sfx=[('ep06-whoosh:0.25', '@{But in California}')],
     el=plate("THE SIGN · THE FRACTION · THE THIRD BUTTON", "0.2", y=880, size=36, out="@{But in California}") + plate("CALIFORNIA", "@{But in California}", y=880, size=48, color="C6.accent")),

# ======================= PART 5 · ГЛАВА 5 · ПРОГРАММА =======================
dict(start="In June, three California drivers", tag=C5, hard=True, sfx=[('t02-paper:0.3', '0.1'), ('ep06-stamp:0.25', '@{federal lawsuit}')],
     el=doc("cstore-top", [], source="C-STORE DIVE · JUNE 2026") + plate("FEDERAL LAWSUIT · JUNE 22, 2026", "@{federal lawsuit}", y=960, size=36, color="C6.accent")),
dict(start="BP. Circle K", tag=C5, dim=0.0, sfx=[('ep06-pop:0.2', '0.05'), ('ep06-pop:0.2', '@{Circle K}'), ('ep06-pop:0.2', '@{Marathon}'), ('ep06-pop:0.2', '@{7 Eleven}'), ('ep06-pop:0.2', '@{Walmart}'), ('ep06-pop:0.2', '@{Albertsons}'), ('ep06-counter:0.3', '@{seventeen hundred}')],
     el='''<Center y={380}><Row gap={26}>
<Label6 at={0.05} size={40} color={C6.ink}>BP</Label6><Label6 at={@{Circle K}} size={40} color={C6.ink}>CIRCLE K</Label6><Label6 at={@{Marathon}} size={40} color={C6.ink}>MARATHON</Label6>
<Label6 at={@{7 Eleven}} size={40} color={C6.ink}>7-ELEVEN</Label6><Label6 at={@{Walmart}} size={40} color={C6.ink}>WALMART</Label6><Label6 at={@{Albertsons}} size={40} color={C6.ink}>ALBERTSONS</Label6>
</Row></Center>
<Center y={600}><Counter6 to={1700} at={@{seventeen hundred}} dur={1.0} size={180} fmt={(v) => Math.round(v).toLocaleString("en-US") + "+"} /></Center>
<Center y={760}><Label6 at={@{seventeen hundred}} size={32} color={C6.mint}>STATIONS · NAMED IN THE LAWSUIT</Label6></Center>''' + src("AP · Grocery Dive · Daily Journal", "0.3")),
dict(start="The lawsuit is about software", tag=C5, stock=K("server"), sfx=[('ep06-pop:0.22', '@{Kalibrate}')],
     el=plate("A PRICING SYSTEM FROM A COMPANY CALLED KALIBRATE", "@{Kalibrate}", y=880, size=34)),
dict(start="According to the complaint, it connects", tag=C5, stock=K("chart-dark"), dim=0.6, sfx=[('ep06-pop:0.22', '@{pumps and signs}')],
     el=plate("ACCORDING TO THE COMPLAINT", "0.1", y=820, size=30, color="C6.mint") + plate("“CONNECTS DIRECTLY TO GAS STATIONS’ PUMPS AND SIGNS”", "@{pumps and signs}", y=910, size=36, color="C6.accent") + src("The Signal · June 2026", "@{pumps and signs}")),
dict(start="and uses data from competing", tag=C5, dim=0.0, sfx=[('ep06-whoosh:0.25', '0.1')],
     el='''<Center y={500}><AlgoHub at={0.1} h={600} /></Center>
<Center y={1000}><Tag7 at={0.2} color={C6.accent}>ACCORDING TO THE COMPLAINT · ILLUSTRATION</Tag7></Center>'''),
dict(start="The drivers call it", tag=C5, stock=K("network"), dim=0.55, sfx=[('ep06-stamp:0.25', '@{central nervous system}')],
     el='''<Center y={460}><Words text="“the central nervous system for a conspiracy”" at={@{central nervous system}} size={84} maxW={1500} hl={["conspiracy”"]} /></Center>''' +
        plate("HOW THE PLAINTIFFS DESCRIBE KALIBRATE · ALLEGATION", "@{central nervous system}", y=880, size=30, color="C6.mint") + src("ABC7 Los Angeles · June 2026", "@{central nervous system}")),
dict(start="And the complaint says the software", tag=C5, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('buzz:0.3', '@{downward spiral}')],
     el='''<Center y={470}><SpiralWarn at={0.1} warnAt={@{downward spiral}} /></Center>
<Center y={940}><Tag7 at={0.2} color={C6.accent}>RECONSTRUCTION · BASED ON THE COMPLAINT</Tag7></Center>'''),
dict(start="Picture two stations", tag=C5, dim=0.0, sfx=[('ep06-whoosh:0.2', '0.1'), ('ep06-pop:0.25', '@{never comes}')],
     el='''<Center y={480}><AlgoHub at={0.1} pair syncAt={@{never comes}} w={1300} h={640} /></Center>
<Center y={1000}><Tag7 at={0.2}>ILLUSTRATION</Tag7></Center>'''),
dict(start="According to the lawsuit, where", tag=C5, sfx=[('t02-paper:0.3', '0.1'), ('impact:0.25', '@{thirty cents}')],
     el=doc("cstore-top", [], source="C-STORE DIVE · JUNE 2026") +
        plate("ALLEGED: ≈6¢ MORE ON AVERAGE", "@{six cents}", y=900, size=40, color="C6.accent", out="@{thirty cents}") + plate("ALLEGED: UP TO 30¢ IN SOME MARKETS", "@{thirty cents}", y=900, size=40, color="C6.accent")),
dict(start="And every extra cent", tag=C5, stock=K("ca-highway"), sfx=[('ep06-kaching:0.25', '@{a hundred thirty-four}')],
     el=plate("EVERY EXTRA 1¢ = $134 MILLION A YEAR", "@{a hundred thirty-four}", y=880, size=42, color="C6.accent") + src("ABC7 · lawsuit figures", "@{a hundred thirty-four}")),
dict(start="Remember the ten to fifteen", tag=C5, dim=0.0, sfx=[('ep06-coin:0.25', '0.1'), ('impact:0.3', '@{as much as thirty}')],
     el='''<Center y={500}><JarVsTower at={0.1} towerAt={@{as much as thirty}} h={480} /></Center>''' + src("NACS · lawsuit allegations (Cstore Dive, AP)", "0.3")),
dict(start="California had just passed", tag=C5, stock=K("sacramento"), sfx=[('ep06-pop:0.22', '@{It took effect}')],
     el=plate("SHARED PRICING ALGORITHMS CAN COUNT AS PRICE FIXING", "0.2", y=880, size=32, out="@{It took effect}") +
        plate("AB 325 · IN EFFECT JAN 1, 2026", "@{It took effect}", y=880, size=40, color="C6.accent") + src("CSP Daily News", "@{It took effect}")),
dict(start="These are allegations", tag=C5, stock=K("courthouse"), sfx=[('ep06-stamp:0.25', '@{a court will decide}')],
     el=plate("ALLEGATIONS", "0.1", y=820, size=44, color="C6.accent") +
        plate("WALMART: REVIEWING · BP: NO COMMENT · A COURT WILL DECIDE", "@{Walmart said}", y=920, size=30) + src("TTNews · Bloomberg", "@{Walmart said}")),

# ======================= PART 6 · ГЛАВА 6 · СБЕРЕЧЬ =======================
dict(start="So, back to that forty-eight", tag=C6x, hard=True, dim=0.0, sfx=[('ep06-pump:0.25', '0.05'), ('ding:0.3', '@{your bank froze}')],
     el='''<Center x={560} y={520}><PumpLCD at={-1} w={560} /></Center>
<Center x={1380} y={500}><BankPush at={0.1} lockAt={@{your bank froze}} w={680} /></Center>'''),
dict(start="So here's how to keep", tag=C6x, stock=K("pump-close"), dim=0.78, sfx=[('click:0.3', '@{On a debit card}'), ('click:0.3', '@{Look for the card price}'), ('click:0.3', "@{Open your owner's}"), ('click:0.3', '@{when prices are falling}')],
     el='''<Center y={520}><Checklist items={[{ text: "Debit card: pay inside, exact amount", at: @{On a debit card} }, { text: "Check the card price before you pull in", at: @{Look for the card price} }, { text: "Manual says regular? Buy regular", at: @{Open your owner's} }, { text: "Prices falling? Shop around", at: @{when prices are falling} }]} /></Center>'''),
dict(start="Same twelve gallons", tag=C6x, dim=0.0, sfx=[('ep06-kaching:0.25', '@{no hold}')],
     el='''<Center x={560} y={520}><PumpLCD at={-1} w={560} /></Center>
<Center x={1380} y={500}><BankPush at={-1} lockAt={-1} postAt={@{no hold}} w={680} /></Center>'''),
dict(start="The station still gets", tag=C6x, dim=0.0, sfx=[('ep06-coin:0.25', '@{fifteen cents}')],
     el=trail(ALL, w=740) ),
dict(start="What's the biggest gap", stock=K("shocked-glasses"), dim=0.45, sfx=[('ep06-pop:0.2', '@{in the comments}')],
     el='''<Center y={780}><Words text="Biggest cash vs. card gap you've seen?" at={0.05} size={70} hl={["gap"]} /></Center>''' + plate("TELL US IN THE COMMENTS", "@{in the comments}", y=930, size=36, color="C6.accent")),
dict(start="And if you think the pump", stock=K("busy-station"), dim=0.55, end_pad=8.0, sfx=[('ep06-whoosh:0.2', '0.3')],
     el='''<EndCard6 at={0.3} next="The Menu Said $14. The Bill Said $31." />'''),
]

EP["music_at"] = [
    ("You put forty-eight dollars", "audio/t07/music-c0-open.mp3", 0.07),
    ("Start with the sign", "audio/t07/music-c1-sign.mp3", 0.09),
    ("Regular. Plus. Premium", "audio/t07/music-c2-premium.mp3", 0.085),
    ("Remember this spring", "audio/t07/music-c3-timing.mp3", 0.08),
    ("In June, three California drivers", "audio/t07/music-c4-algo.mp3", 0.08),
    ("So, back to that forty-eight", "audio/t07/music-c5-how.mp3", 0.09),
]

# графика без видео — мягкий свет фона (Drift), чтобы кадр не стоял
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", ""):
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"
