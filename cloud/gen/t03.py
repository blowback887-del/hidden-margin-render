# T03 «The Price Tag at Dollar General Isn't the Price» — третий ролик They Saw You Coming (план сцен 19.11.2026).
# Окраска: детективное расследование (одна жалоба → округ → штаты → федеральный иск) + сатира приправой
#   (сухие колкости только над компанией и её системой; кассиры — не мишень).
# Визуальная идея (своя для выпуска): «ценник против кассы» — жёлтый полочный ценник слева, табло кассы справа (ShelfVsRegister);
#   появляется в холодном входе ($2.00 → $4.35), в механизме (Pillsbury $3.00 → $3.75), в штатах (пример +17%).
#   Предмет-талисман — табличка «All prices are final» (0:12 и финал со штампом NOT FINAL).
# Сквозная карта: «ведомость» мировых (Ledger) — строки копятся в главе штатов, итог $8.6M → часы продаж 1:46 (самое сильное, ~6:00).
# Улики: сам иск FTC (PDF, бумага с шапкой суда) + WCPO, Fortune, Axios, Guardian (через Yahoo/Slashdot/inkl), Supermarket News, AP/ABC11, FOX 2.
#   По уроку T02: общий план страницы → подъезд к строке, рамка браузера видна, в углу — уменьшенная шапка статьи (inset).
# Реальные фото Dollar General — Wikimedia Commons (CC BY / CC BY-SA / CC0, авторы — в описание); сток — Pexels.
# Начало: холодный вход без трейлера — креамер $2.00 → $4.35 к 0:08, табличка к 0:15, федеральный иск к 0:35. Причина: обложка обещает
#   «ценник соврал» — показываем это сразу.
# Нарастание: одна жалоба → все 20 магазинов провалены → механизм (ответ на название к ~2:10) → «починили?» по штатам →
#   кто платит и сколько стоит компании (1:46 продаж) → тайные покупатели FTC → как не попасться → табличка NOT FINAL.
import json, os
from evid import ev

EP = dict(
    comp="T03Price",
    words="src/videos/t03-price-words.json",
    text="cloud/voice/t03-text",
    parts=6,
    broll="cloud/broll/t03.json",
    audio="audio/t03-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03"],
    music=[],  # заполняется ниже по таймингу глав
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t03.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
CR = {c["name"].split("-", 1)[1]: c.get("credit") for c in _clips}
_l = os.path.join(os.path.dirname(__file__), "t03-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

FTC = "FTC + 20 STATES v. DOLLAR GENERAL · COMPLAINT · OCT 26, 2026"
WCPO = "WCPO Cincinnati · Nov 2, 2022"
GUARD = "The Guardian, via Yahoo News · Dec 2025"
C1, C2, C3, C4, C5 = (1, "The County"), (2, "The Gap"), (3, "The States"), (4, "The Math"), (5, "Undercover")
ILL = '<div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>'


def photo(name):
    """Подпись к фото Wikimedia (автор и лицензия) — мелко внизу слева"""
    return f'<Source6 at={{0.3}}>PHOTO: {CR[name]}</Source6>'


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


# сквозная ведомость мировых: строки в порядке, как в иске FTC (¶ 85) + Нью-Йорк (Supermarket News)
LEDGER = [("VERMONT · 2019", "$1,750,000"), ("WISCONSIN · 2019", "$10,586"), ("OHIO · 2023", "$1,000,000"), ("WISCONSIN · 2023", "$850,006"),
          ("NEW JERSEY · 2023", "$1,200,000"), ("COLORADO · 2025", "$400,000"), ("PENNSYLVANIA · 2025", "$1,550,000"), ("NEW YORK · 2026*", "$1,875,000")]


def ledger(rows_at, total_at=None, title="PRICING SETTLEMENTS · STATES"):
    rows = ", ".join('{ label: "%s", value: "%s", at: %s }' % (LEDGER[i][0], LEDGER[i][1], t) for i, t in rows_at)
    tot = (' total={{ label: "TOTAL", value: "≈ $8.6M", at: %s }}' % total_at) if total_at else ""
    return '<Ledger title="%s" rows={[%s]}%s />' % (title, rows, tot)


S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД =======================
dict(start="At a Dollar General in Butler", stock=K("dg-brookville-oh"), clean=True, sfx=[('ep06-whoosh:0.15', '0.05')],
     el=photo("dg-brookville-oh")),
dict(start="a Coffee Mate creamer", stock=K("dairy-aisle"), dim=0.55,
     sfx=[('ep06-pop:0.25', '@{price tag}'), ('buzz:0.3', '@{four thirty}'), ('impact:0.35', '@{More than double}')],
     el='''<Center y={520}><ShelfVsRegister at={@{price tag}} item="COFFEE MATE CREAMER" shelf="$2.00" reg="$4.35" regAt={@{four thirty}} delta="+117%" deltaAt={@{More than double}} scale={0.92} note="ILLUSTRATION · PRICES FROM THE 2022 COUNTY INSPECTION" /></Center>'''),
dict(start="At another Dollar General", stock=K("dg-register"), sfx=[('t02-paper:0.3', '@{a sign}')],
     el=photo("dg-register")),
dict(start="Prices cannot be changed", dim=0.0, sfx=[('ep06-stamp:0.25', '@{All prices are final}')],
     el='''<Center y={500}><FinalSign at={0.05} hlAt={@{All prices are final}} /></Center>'''),
dict(start="Final. Just not", stock=K("soda-aisle-wide"), dim=0.5, sfx=[('ep09-trombone:0.2', '@{Just not}')],
     el='''<Center y={520}><ShelfTag at={0.05} item="SHELF PRICE" price="$2.00" fade={@{Just not}} /></Center>'''),
dict(start="Anderson wrote a complaint", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t03", "wcpo-anderson", marks=[("consumer complaint letter from a St. Clair Township resident William Anderson", "Anderson wrote")], source=WCPO, inset="wcpo-top")),
dict(start="And this October", sfx=[('ep06-boom:0.3', '@{twenty states}')],
     el=ev("t03", "abc-head", marks=[("Dollar General is sued by the FTC and 20 states", "twenty states")], source="AP, via ABC11 · Oct 27, 2026")),
dict(start="Their lawsuit counts", sfx=[('t02-paper:0.3', '0.1'), ('ep06-counter:0.3', '@{twenty-nine thousand}')],
     el=ev("t03", "ftc-29265", marks=[("at least 29,265 complaints", "twenty-nine thousand")], source=FTC)),
dict(start="It also describes", stock=K("market-blur"), clean=True, sfx=[('ep06-stamp:0.3', '@{undercover}')],
     el='''<Center x={1400} y={330}><Stamp at={@{undercover}} text="undercover" color={C6.accent} size={84} /></Center>'''),
dict(start="So is this just", dim=0.0, sfx=[('ep06-fall:0.3', '@{one side}')],
     el='''<Center y={520}><ScaleTilt at={0.1} tiltAt={@{one side}} /></Center>'''),
dict(start="Let's follow the price tag", stock=K("aisle-cart-pov"), clean=True, sfx=[('ep06-whoosh:0.2', '0.05')], el=''),

# ======================= PART 2 · ОКРУГ БАТЛЕР =======================
dict(start="Anderson's letter went", tag=C1, stock=K("letter-magnifier"), hard=True,
     el=plate("BUTLER COUNTY AUDITOR · ROGER REYNOLDS", "@{Roger Reynolds}", y=880, size=38) + ILL),
dict(start="His office runs", tag=C1, stock=K("scanner-shelves"), alt=(K("pump-rising"), "a gallon is really"),
     el=plate("WEIGHTS &amp; MEASURES INSPECTORS", "@{weights and measures}", out="@{a gallon is really}") + ILL),
dict(start="Here's the rule", tag=C1, dim=0.0, sfx=[('buzz:0.25', '@{two mistakes}'), ('ep06-stamp:0.35', '@{it fails}')],
     el='''<Center y={500}><TagGrid at={0.1} n={100} cols={20} cell={70} badTimes={[@{two mistakes}, @{two mistakes} + 0.35, @{A third one}]} failAt={@{it fails}} label="100 ITEMS SCANNED · 2 MISTAKES ALLOWED" /></Center>
<Source6 at={0.4}>NIST Handbook 130 standard, via Money Talks News</Source6>'''),
dict(start="In October twenty twenty-two", tag=C1, dim=0.0, sfx=[('ep06-pop:0.2', '@{All twenty stores}'), ('ep06-boom:0.35', '@{Every single one failed}')],
     el='''<Center y={560}><StorePins at={0.1} redAt={@{Every single one failed}} dur={1.0} title="BUTLER COUNTY · ALL 20 DOLLAR GENERAL STORES" /></Center>
<Source6 at={0.4}>Butler County Auditor, via WCPO · Oct 2022</Source6>'''),
dict(start="The best store", tag=C1, stock=K("soda-aisle-wide"), dim=0.35, sfx=[('ep06-counter:0.3', '@{seventeen percent}')],
     el='''<Center x={1440} y={330}><Plate6 at={@{seventeen percent}}><BigNum at={@{seventeen percent}} icon="store" size={120} label="THE BEST STORE · ERROR RATE">16.7%</BigNum></Plate6></Center>
<Source6 at={@{seventeen percent}}>Ohio Attorney General · Nov 1, 2022</Source6>'''),
dict(start="The worst one", tag=C1, dim=0.0, sfx=[('buzz:0.2', '@{Fifteen rang up}')],
     el='''<Center y={480}><TagGrid at={0.1} n={17} cols={17} cell={78} badAt={@{Fifteen rang up}} bad={15} step={0.07} label="EATON ROAD, HAMILTON · 15 OF 17 WRONG" /></Center>
<Source6 at={0.4}>Springfield News-Sun · Nov 2022</Source6>'''),
dict(start="Eighty-eight percent", tag=C1, sfx=[('impact:0.3', '0.15')],
     el=ev("t03", "wcpo-88", marks=[("double figure error rates up to 88%", "Eighty-eight")], source=WCPO, inset="wcpo-top")),
dict(start="A six pack of Diet Coke", tag=C1, sfx=[('t02-paper:0.3', '0.1'), ('buzz:0.25', '@{five twenty-five}'), ('buzz:0.25', '@{a dollar fifty}')],
     el=ev("t03", "wcpo-coke", marks=[("A six-pack of Diet Coke had a shelf price of $4.00 but scanned at $5.25.", "six pack"), ("Snapple Apple had a shelf price of $1.00 but scanned at $1.50.", "A Snapple")], source=WCPO, inset="wcpo-top")),
dict(start="In a store with the word dollar", stock=K("dg-hattiesburg"), clean=True, sfx=[('ep09-trombone:0.25', '@{in its name}')],
     el='''<Meme at={@{word dollar}} text="the word. dollar. in its name." y={900} size={72} />''' + photo("dg-hattiesburg")),
dict(start="To be fair", tag=C1, dim=0.0, sfx=[('ding:0.3', "@{customer's favor}")],
     el='''<Center y={560}><StorePins at={0.05} redAt={0.05} dur={0.01} green={7} greenAt={@{customer's favor}} title="ONE STORE ERRED IN THE CUSTOMER'S FAVOR" /></Center>
<Source6 at={0.4}>WCPO · College Corner Pike, Oxford</Source6>'''),
dict(start="Ohio's attorney general sued", tag=C1, sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t03", "wcpo-yost", marks=[("This seems like a company trying to make an extra buck and hoping no one will notice.", "this seems like")], source="Ohio AG Dave Yost, via " + WCPO, inset="wcpo-top")),
dict(start="Dollar General settled", tag=C1, stock=K("dg-amity-oh"), sfx=[('ep06-kaching:0.3', '@{one million}')],
     el='''<Center x={480} y={330}><Plate6 at={@{one million}}><BigNum at={@{one million}} icon="receipt" size={120} label="OHIO SETTLEMENT · 2023">$1M</BigNum></Plate6></Center>''' + photo("dg-amity-oh")),
dict(start="So how does a price tag", stock=K("dg-hartford-ny"), clean=True, sfx=[('ep06-whoosh:0.2', '0.05')], el=''),

# ======================= PART 3 · МЕХАНИЗМ (ОТВЕТ НА НАЗВАНИЕ) =======================
dict(start="When Dollar General changes", tag=C2, stock=K("server-room"), hard=True, sfx=[('rise:0.3', '@{straight into}'), ('ding:0.3', '@{Automatically}')],
     el=plate("PRICE CHANGE → EVERY REGISTER · AUTOMATICALLY", "@{straight into}", y=880, size=38)),
dict(start="The shelf tag doesn't change", tag=C2, stock=K("worker-shelves"),
     el=plate("THE SHELF TAG: BY HAND", "@{by hand}", y=880)),
dict(start="According to the federal lawsuit, store policy", tag=C2, sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t03", "ftc-weekly", marks=[("Dollar General typically changes prices in its stores on a weekly basis", "every week")], source=FTC)),
dict(start="And in some stores", tag=C2, stock=K("conv-store-counter"), sfx=[('ep06-counter:0.3', '@{one or two}')],
     el='''<Center x={1430} y={330}><Plate6 at={@{one or two}}><BigNum at={@{one or two}} icon="person" size={120} label="EMPLOYEES ON DUTY · SOME HOURS">1–2</BigNum></Plate6></Center>
<Source6 at={@{one or two}}>The Guardian, 2025 · via inkl</Source6>'''),
dict(start="If one of them is at the register", tag=C2, stock=K("cashier-veg"), clean=True, sfx=[('ep09-bell:0.2', '@{swapping the stickers}')],
     el='''<Meme at={@{who's swapping}} text="nobody. nobody is." y={900} size={70} />'''),
dict(start="The register always knows", tag=C2, dim=0.0, sfx=[('ding:0.3', '@{new price}'), ('impact:0.35', '@{gap opens}')],
     el='''<Center y={500}><ShelfVsRegister at={@{The shelf only}} item="PILLSBURY GRANDS" shelf="$3.00" reg="$3.75" regAt={@{always knows}} delta="THE GAP" deltaAt={@{gap opens}} scale={0.92} note="ILLUSTRATION · EXAMPLE FROM THE BUTLER COUNTY INSPECTION" /></Center>'''),
dict(start="The tag is a photo", tag=C2, stock=K("receipt-bills"), dim=0.25,
     el=plate("THE TAG = LAST WEEK · THE REGISTER = TODAY", "@{photo of last week}", y=880, size=38)),
dict(start="And when prices keep going up", tag=C2, stock=K("dg-empty-shelves"), alt=(K("woman-receipts-frustrated"), "You find out"),
     el=plate("OLD TAG · LOWER NUMBER", "@{smaller number}", y=880, out="@{You find out}")),
dict(start="Dollar General says occasional", tag=C2, stock=K("dg-remodel"), dim=0.45,
     el='''<Center y={520}><In at={0.3} from="fade"><Plate6 at={0.3} pad="36px 60px"><Words text="“Occasional price discrepancies can occur.”" at={0.35} size={64} hl={["discrepancies"]} maxW={1450} /></Plate6></In></Center>
<Source6 at={0.4}>Dollar General statement, via Fortune · Oct 28, 2026</Source6>'''),
dict(start="It says its goal", tag=C2, sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t03", "fortune-goal", marks=[("Our goal is 100% accuracy between shelf and register prices in every store", "one hundred percent accuracy")], source="Dollar General statement, via Fortune · Oct 28, 2026", inset="fortune-top")),
dict(start="But in a court case", tag=C2, stock=K("judge-courtroom"), dim=0.5, sfx=[('ep06-scratch:0.3', '@{virtually impossible}')],
     el='''<Center y={520}><In at={0.2} from="fade"><Plate6 at={0.2} pad="40px 64px"><Words text="“virtually impossible for a retailer to match shelf pricing and scanned pricing 100% of the time”" at={0.25} step={0.06} size={56} hl={["impossible"]} maxW={1450} /></Plate6></In></Center>
<Source6 at={0.3}>Dollar General in a court filing, as quoted by Axios Cleveland · Dec 10, 2025</Source6>''' + ILL),
dict(start="Nobody asked for a hundred", tag=C2, dim=0.0, sfx=[('ep06-stamp:0.35', '@{ninety-eight}')],
     el='''<Center y={520}><Row gap={140}><In at={0.1} from="fade"><div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 220, color: C6.ink, opacity: 0.55, textDecoration: "line-through", textDecorationColor: C6.loss, textDecorationThickness: 14 }}>100%</div></In><BigNum at={@{ninety-eight}} size={220} label="THE ACTUAL STANDARD">98%</BigNum></Row></Center>'''),
dict(start="And if this were only", tag=C2, stock=K("clock-hands"), alt=(K("detective-docs"), "So we checked"), sfx=[('tick:0.3', '@{checked what happened}')],
     el=plate("OHIO SETTLED · 2023. THEN WHAT?", "@{checked what happened}", y=880)),

# ======================= PART 4 · ШТАТЫ =======================
dict(start="Before Ohio, Vermont", tag=C3, stock=K("dg-barre-vt"), hard=True, sfx=[('ep06-receipt:0.3', '@{Vermont}')],
     el='''<div style={{ position: "absolute", right: 90, top: 400 }}>''' + ledger([(0, "@{Vermont}")]) + '''</div>''' + photo("dg-barre-vt")),
dict(start="After Ohio came Wisconsin", tag=C3, stock=K("dg-union-grove-wi"), sfx=[('ep06-receipt:0.3', '@{Wisconsin}'), ('ep06-receipt:0.3', '@{New Jersey}')],
     el='''<div style={{ position: "absolute", left: 90, top: 110 }}>''' + ledger([(0, "0"), (2, "0.1"), (3, "@{Wisconsin}"), (4, "@{New Jersey}")]) + '''</div>''' + photo("dg-union-grove-wi")),
dict(start="Two years after the Wisconsin", tag=C3, sfx=[('t02-paper:0.3', '0.1'), ('impact:0.3', '@{thirty-one percent}')],
     el=ev("t03", "fortune-31", marks=[("its stores in the state failed 31% of price inspections", "thirty-one percent")], source="Fortune, citing the Guardian · Oct 2026", inset="fortune-top", zoom=1.05)),
dict(start="When Wisconsin's inspectors", tag=C3, dim=0.0, sfx=[('buzz:0.3', '@{seventeen percent}')],
     el='''<Center y={500}><ShelfVsRegister at={0.1} item="EXAMPLE ITEM" shelf="$10.00" reg="$11.70" regAt={@{seventeen percent}} delta="+17%" deltaAt={@{seventeen percent} + 0.4} scale={0.92} note="EXAMPLE · AVERAGE WISCONSIN OVERCHARGE, PER THE FTC COMPLAINT" /></Center>'''),
dict(start="Iowa. Eight inspections", tag=C3, sfx=[('t02-paper:0.3', '0.1'), ('ep06-stamp:0.35', '@{Eight failures}')],
     el=ev("t03", "ftc-iowa", marks=[("Iowa conducted eight inspections at seven stores", "Eight inspections"), ("Dollar General failed each", "Eight failures")], source=FTC)),
dict(start="Pennsylvania. Around nine hundred", tag=C3, stock=K("dg-pa-shinglehouse"), sfx=[('ep06-counter:0.3', '@{forty percent}')],
     el='''<Center x={1430} y={330}><Plate6 at={@{forty percent}}><BigNum at={@{forty percent}} icon="store" size={120} label="PENNSYLVANIA · INSPECTIONS FAILED · 2019–2023">40%+</BigNum></Plate6></Center>
<Source6 at={@{forty percent}}>Pennsylvania AG, via The Guardian</Source6>'''),
dict(start="In one store, seventy-two", tag=C3, sfx=[('ep06-boom:0.3', '@{seventy-two}')],
     el=ev("t03", "yahoo-pa", marks=[("72% of items were priced inaccurately", "seventy-two")], source=GUARD, inset="yahoo-top")),
dict(start="Then the Guardian pulled", tag=C3, stock=K("dg-commerce-tx"), sfx=[('t02-paper:0.3', '@{forty-five states}')],
     el=plate("INSPECTION RECORDS · 45 STATES", "@{forty-five states}", y=880) + '<Source6 at={0.4}>The Guardian investigation · Dec 2025</Source6>'),
dict(start="Since twenty twenty-two, Dollar General stores", tag=C3, stock=K("dg-rr-c"), sfx=[('ep06-counter:0.3', '@{four thousand}')],
     el='''<Center x={1430} y={330}><Plate6 at={@{four thousand}}><BigNum at={@{four thousand}} icon="store" size={120} label="FAILED PRICE CHECKS · 23 STATES · SINCE 2022">4,300+</BigNum></Plate6></Center>
<Source6 at={@{four thousand}}>The Guardian investigation · Dec 2025</Source6>'''),
dict(start="And inspectors only see", stock=K("elderly-bills"),
     el='''<Center y={880}><In at={@{You're the only}} from="fade"><Plate6 at={@{You're the only}}><Words text="The only inspector most receipts get: you." at={@{You're the only}} size={50} hl={["you."]} maxW={1500} /></Plate6></In></Center>'''),
dict(start="If you want more of these", stock=K("cart-pov-busy"), clean=True, alt=(K("aisle-cart-pov"), "It's free"), el='''<Subscribe6 at={@{subscribe}} />'''),

# ======================= PART 5 · КТО ПЛАТИТ =======================
dict(start="So who's actually paying", tag=C4, stock=K("dg-jakin-road"), hard=True, alt=(K("rural-road-aerial"), "Start with who"),
     el=photo("dg-jakin-road")),
dict(start="According to the federal lawsuit, about seventy-five", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.25', '@{seventy-five percent}'), ('ep06-pop:0.25', '@{eighty percent}')],
     el=ev("t03", "ftc-75", marks=[("roughly 75% of the United States population living within five miles", "seventy-five percent"), ("approximately 80% of Dollar General stores are located in towns of 20,000 or fewer people", "eighty percent")], source=FTC)),
dict(start="And households making", tag=C4, stock=K("couple-bills-worry"), sfx=[('ep06-counter:0.3', '@{sixty percent}')],
     el='''<Center x={1430} y={330}><Plate6 at={@{sixty percent}}><BigNum at={@{sixty percent}} icon="receipt" size={120} label="OF SALES · HOUSEHOLDS ≤ $35K A YEAR">60%</BigNum></Plate6></Center>
<Source6 at={@{sixty percent}}>FTC complaint, citing Dollar General</Source6>''' + ILL),
dict(start="Marc Dann", tag=C4, stock=K("counting-bills"), alt=(K("senior-choosing"), "adding it up"),
     el='''<Center y={880}><In at={@{Marc Dann}} out={@{He describes}} from="fade"><Plate6 at={@{Marc Dann}}><Label6 at={@{Marc Dann}} size={36} color={C6.ink}>MARC DANN · FORMER OHIO ATTORNEY GENERAL · SHOPPERS' LAWYER</Label6></Plate6></In></Center>
<Center x={960} y={330}><In at={@{ten, twenty}} out={@{adding it up}} from="fade"><Plate6 at={@{ten, twenty}}><Label6 at={@{ten, twenty}} size={46} color={C6.accent}>$10 · $20 · $25 A WEEK</Label6></Plate6></In></Center>''' + ILL),
dict(start="The worst part, he said", tag=C4, stock=K("elderly-basket"), clean=True, dim=0.2,
     el='''<Center y={860}><In at={@{It's that}} from="fade"><Plate6 at={@{It's that}}><Words text="“It's that they're putting stuff back.”" at={@{It's that}} size={56} hl={["back.”"]} maxW={1500} /></Plate6></In></Center>
<Source6 at={@{It's that}}>Marc Dann, to The Guardian</Source6>''' + ILL),
dict(start="Now the other side", tag=C4, dim=0.0, sfx=[('ep06-receipt:0.3', '@{eight pricing}'), ('ep06-kaching:0.35', '@{eight point six}')],
     el='''<Center y={540}><div style={{ scale: "1.3" }}>''' + ledger([(i, "@{eight pricing} + %.2f" % (0.55 * i)) for i in range(8)], total_at="@{eight point six}", title="8 PRICING SETTLEMENTS · 7 STATES") + '''</div></Center>
<Source6 at={0.4}>FTC complaint · NY Attorney General (*food donation) · our sum</Source6>'''),
dict(start="Last fiscal year", tag=C4, stock=K("money-counter"), sfx=[('ep06-counter:0.3', '@{forty-two point seven}'), ('ep06-kaching:0.3', '@{every hour}')],
     el='''<Center x={1430} y={330}><Plate6 at={@{forty-two point seven}}><BigNum at={@{forty-two point seven}} icon="receipt" size={120} label="SALES · FISCAL 2025">$42.7B</BigNum></Plate6></Center>
<Center y={880}><In at={@{every hour}} from="fade"><Plate6 at={@{every hour}}><Label6 at={@{every hour}} size={44} color={C6.accent}>≈ $4.9M EVERY HOUR</Label6></Plate6></In></Center>
<Source6 at={@{forty-two point seven}}>Dollar General annual results · our calculation</Source6>'''),
dict(start="So all those state settlements", tag=C4, dim=0.0, hard=True, sfx=[('tick:0.3', '0.3'), ('impact:0.4', '@{two hours of sales}')],
     el='''<Center y={540}><SalesClock at={0.05} stopAt={@{two hours of sales}} minutes={106} label="ALL 8 STATE SETTLEMENTS = UNDER 2 HOURS OF SALES" sub="OUR CALCULATION · $8.6M ÷ ~$4.87M PER HOUR · REVENUE, NOT PROFIT" /></Center>'''),
dict(start="And the shoppers who paid", tag=C4, stock=K("food-bank"), sfx=[('ep06-pop:0.25', '@{food banks}')],
     el=plate("OHIO: $750,000 OF THE $1M → FOOD BANKS", "@{food banks}", y=880, size=38) + '''<Source6 at={@{food banks}}>Journal-News · 2023</Source6>'''),
dict(start="In New York, this October", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-stamp:0.35', '@{no refunds}')],
     el=ev("t03", "smn-ny", marks=[("Dollar General must donate $1.875 million worth of food and personal items to Foodlink", "donation of food")], source="Supermarket News · Oct 2026") +
        '''<Center x={1420} y={820}><Stamp at={@{no refunds}} text="refunds: none" color={C6.loss} size={70} /></Center>'''),
dict(start="Shoppers could sue together", tag=C4, sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t03", "fox2-class", marks=[("Last day to file a claim", "one class action")], source="FOX 2 Detroit · Braun v. Dolgencorp")),
dict(start="To get cash, you needed proof", tag=C4, stock=K("couple-phone-aisle"), sfx=[('ep06-pop:0.25', '@{Photos or receipts}'), ('ep06-pop:0.25', '@{thirty days}')],
     el='''<Center y={880}><In at={@{Photos or receipts}} from="fade"><Plate6 at={@{Photos or receipts}}><Label6 at={@{Photos or receipts}} size={40} color={C6.ink}>PROOF: PHOTO · RECEIPT · COMPLAINT WITHIN 30 DAYS</Label6></Plate6></In></Center>'''),
dict(start="Be honest", tag=C4, stock=K("man-glasses-shock"), clean=True, sfx=[('ep09-trombone:0.2', '@{on a creamer}'), ('ep06-stamp:0.35', '@{closed in April}')],
     el='''<Meme at={@{Have you ever}} out={@{The claim window}} text="me, photographing every creamer tag" y={900} size={66} />
<Center x={1400} y={330}><Stamp at={@{closed in April}} text="claims closed" color={C6.loss} size={78} /></Center>'''),
dict(start="And if you shop through", tag=C4, stock=K("pen-contract"), sfx=[('ep06-pop:0.25', '@{private arbitration}')],
     el='''<CorpSub at={@{private arbitration}} corp="“Final and binding arbitration”" human="one customer at a time, no class action" />
<Source6 at={@{private arbitration}}>Dollar General app &amp; website terms, as reported by The Guardian</Source6>'''),
dict(start="Thirty members of Congress", tag=C4, sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t03", "inkl-congress", marks=[("Thirty members of Congress are demanding answers", "Thirty members")], source="The Guardian, via inkl · Dec 2025")),

# ======================= PART 6 · ТАЙНЫЕ ПОКУПАТЕЛИ И КАК НЕ ПОПАСТЬСЯ =======================
dict(start="Which brings us back", tag=C5, stock=K("dg-eufaula"), hard=True, alt=(K("town-street-sunset"), "federal investigators went"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("OH · MO · PA · MD · JAN–APR 2026", "@{four states}", y=880) + photo("dg-eufaula")),
dict(start="According to the lawsuit, some", tag=C5, sfx=[('t02-paper:0.3', '0.1'), ('ep06-boom:0.35', '@{every single total}')],
     el=ev("t03", "ftc-undercover", marks=[("Every single undercover purchase resulted in Dollar General charging more at the register", "every single total")], source=FTC)),
dict(start="One California shopper", tag=C5, dim=0.0, sfx=[('ding:0.3', '@{Thirty-seven}')],
     el='''<Center y={480}><ShelfTag at={0.1} item="13 ITEMS · APP + ONLINE DEALS" price="$37.61" label="HER APP TOTAL" scale={1.25} /></Center>
<Center y={800}><Label6 at={0.3} size={24} color={C6.mint}>ILLUSTRATION · FIGURES FROM THE FTC COMPLAINT</Label6></Center>'''),
dict(start="She was charged", tag=C5, sfx=[('buzz:0.3', '@{fifty seventy-two}')],
     el=ev("t03", "ftc-ca", marks=[("approximately $37.61", "She was charged"), ("Dollar General charged $50.72", "fifty seventy-two")], source=FTC)),
dict(start="Dollar General denies", tag=C5, stock=K("courthouse-flags"), alt=(K("gavel"), "A judge hasn't ruled"),
     el=plate("DOLLAR GENERAL DENIES THE ALLEGATIONS · NO RULING YET", "@{denies}", y=880, size=36) + ILL),
dict(start="But until one does", stock=K("dg-new-store"), clean=True, sfx=[('ep06-whoosh:0.2', '@{make the price tag}')],
     el=photo("dg-new-store")),
dict(start="Watch the screen", stock=K("register-touch"), sfx=[('ep06-pop:0.3', '0.2')],
     el=plate("1 · WATCH THE SCREEN, NOT THE BAG", "0.2", y=880, size=42)),
dict(start="Before a sale item", stock=K("man-phone-grocery"), sfx=[('click:0.4', '@{take a photo}')],
     el=plate("2 · PHOTO THE TAG. TWO SECONDS.", "0.2", y=880, size=42)),
dict(start="Check the receipt", stock=K("receipt-bills"), sfx=[('ep06-receipt:0.3', '0.2')],
     el=plate("3 · CHECK THE RECEIPT AT THE COUNTER", "0.2", y=880, size=42)),
dict(start="And know your state", stock=K("checkout-scan"), dim=0.62, sfx=[('ep06-pop:0.25', '@{Connecticut}')],
     el='''<Center y={500}><StateCards cards={[{ state: "Connecticut", rule: "Rings up higher than the shelf? One free, up to $20. Ask.", src: "CT Dept. of Consumer Protection", at: @{Connecticut} }]} /></Center>'''),
dict(start="In Michigan", stock=K("dg-rr-b"), dim=0.62, sfx=[('ep06-pop:0.25', '0.1')],
     el='''<Center y={500}><StateCards cards={[{ state: "Connecticut", rule: "Rings up higher than the shelf? One free, up to $20. Ask.", src: "CT Dept. of Consumer Protection", at: 0 }, { state: "Michigan", rule: "You're owed the difference, plus a bonus of up to $5.", src: "Michigan Attorney General", at: 0.1 }]} /></Center>'''),
dict(start="In New York, Colorado", stock=K("dg-rr-d"), dim=0.62, sfx=[('ep06-pop:0.25', '0.1')],
     el='''<Center y={500}><StateCards cards={[{ state: "Connecticut", rule: "Rings up higher than the shelf? One free, up to $20. Ask.", src: "CT Dept. of Consumer Protection", at: 0 }, { state: "Michigan", rule: "You're owed the difference, plus a bonus of up to $5.", src: "Michigan Attorney General", at: 0 }, { state: "NY · CO · PA", rule: "Dollar General agreed to charge the lowest posted price.", src: "State settlements", at: 0.1 }]} /></Center>'''),
dict(start="If it keeps happening", dim=0.0, sfx=[('ep06-pop:0.3', '@{reportfraud}')],
     el='''<Center y={470}><Words text="ReportFraud.ftc.gov" at={@{reportfraud}} size={110} hl={["ReportFraud.ftc.gov"]} serif={false} /></Center>
<Center y={680}><Plate6 at={@{weights and measures}}><Label6 at={@{weights and measures}} size={40} color={C6.ink}>OR YOUR STATE'S WEIGHTS &amp; MEASURES OFFICE</Label6></Plate6></Center>'''),
dict(start="Remember, those twenty", dim=0.0, sfx=[('ep06-pop:0.25', '@{one letter}')],
     el='''<Center y={560}><StorePins at={0.05} redAt={0.05} dur={0.01} title="20 FAILED STORES · FROM ONE LETTER" /></Center>'''),
dict(start="William Anderson read a sign", dim=0.0, sfx=[('ep06-stamp:0.45', '@{He decided}')],
     el='''<Center y={500}><FinalSign at={0.05} hlAt={@{all prices are final}} stamp="NOT FINAL" stampAt={@{He decided}} /></Center>'''),
dict(start="Have you ever caught", stock=K("dg-sapulpa"), dim=0.45, end_pad=8.0,
     el='''<Center y={250}><Words text="Ever caught the register charging more?" at={@{Have you ever}} size={80} hl={["more?"]} maxW={1600} /></Center>
<Center y={380}><Label6 at={@{Tell me}} size={38} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Center>''' + photo("dg-sapulpa")),
]

# музыка по главам (Фонотека YouTube); границы — по первой сцене главы, считаются в build.py через EP["music_at"]
EP["music_at"] = [
    ("At a Dollar General in Butler", "audio/t03/music-c0-open.mp3", 0.085),
    ("Anderson's letter went", "audio/t03/music-c1-county.mp3", 0.075),
    ("When Dollar General changes", "audio/t03/music-c2-gap.mp3", 0.08),
    ("Before Ohio, Vermont", "audio/t03/music-c3-states.mp3", 0.075),
    ("So who's actually paying", "audio/t03/music-c4-who.mp3", 0.1),
    ("Which brings us back", "audio/t03/music-c5-undercover.mp3", 0.08),
]

# графика без видео — с медленным наездом (Drift), чтобы кадр не стоял
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", ""):
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"
