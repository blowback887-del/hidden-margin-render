# Ep07 «How Supermarkets Make Money (It's Not the Groceries)» — план сцен для cloud/gen/build.py.
# Визуальная идея выпуска: «рентген чека» — чек Даны на $100 просвечивается; на обороте три пустые строки «?»,
# которые закрываются по главам: SHELF RENT → STORE BRAND → YOUR DATA (сквозная карта; финал — весь чек).
# Трейлер ~12 с, БЕЗ рамки (решение Павла 12.11.2026): 2 цента → лимонад → три вопроса → титр.
# Главы по нарастанию: 1 «The Receipt» → 2 «The Shelf» → 3 «The Store Brand» → 4 «The Card» (главное открытие у конца).
# Бытовая метафора: супермаркет — арендодатель, полки — квартиры, бренды — жильцы.
# Приёмы банка: бомба под столом (карта на кассе в 1-й минуте), стоп-кадр+удар, мемные подписи, перевод с корпоративного,
# штамп, счётчик, разделённый экран, «взрыв» быстрых кадров в начале гл.4, возврат к чеку в финале.
# Номера стока = порядок в cloud/broll/ep07.json.

EP = dict(
    comp="Ep07Grocery",
    words="src/videos/ep07-grocery-words.json",
    text="cloud/voice/ep07-text",
    parts=7,
    broll="cloud/broll/ep07.json",
    audio="audio/ep07-voiceover.mp3",
    music=[
        dict(**{'from':0.0}, to=23.0, file="audio/ep07/music-trailer.mp3", vol=0.15),
        dict(**{'from':22.5}, to=118.3, file="audio/ep07/music-ch1.mp3", vol=0.12),
        dict(**{'from':117.8}, to=247.4, file="audio/ep07/music-ch2.mp3", vol=0.12),
        dict(**{'from':246.9}, to=337.0, file="audio/ep07/music-ch3.mp3", vol=0.12),
        dict(**{'from':336.5}, to=471.2, file="audio/ep07/music-ch4.mp3", vol=0.12),
        dict(**{'from':470.7}, to=600.0, file="audio/ep07/music-finale.mp3", vol=0.12),
    ],
    lens={1: 10.0, 2: 10.0, 3: 10.0, 4: 10.0, 5: 10.0, 6: 10.0, 7: 10.0, 8: 10.0, 9: 6.6, 10: 10.0, 11: 10.0, 12: 10.0, 13: 10.0, 14: 10.0, 15: 10.0, 16: 10.0, 17: 10.0, 18: 10.0, 19: 8.57, 20: 10.0, 21: 10.0, 22: 10.0, 23: 10.0, 24: 9.17, 25: 9.0, 26: 10.0, 27: 7.2, 28: 8.47, 29: 10.0, 30: 2.73, 31: 10.0, 32: 10.0, 33: 10.0, 34: 10.0, 35: 10.0, 36: 10.0, 37: 10.0, 38: 10.0, 39: 10.0, 40: 10.0, 41: 10.0, 42: 10.0, 43: 7.17, 44: 7.67, 45: 10.0, 46: 8.5},
)

CH1, CH2, CH3, CH4 = (1, "The Receipt"), (2, "The Shelf"), (3, "The Store Brand"), (4, "The Card")
FTC = "<Source6>FTC · Slotting Allowances in the Retail Grocery Industry, 2003</Source6>"
KR10K = "<Source6>Kroger 10-K · fiscal 2025 (ended Jan 31, 2026)</Source6>"
KRIR = "<Source6>Kroger Q4 & FY2025 results</Source6>"

S = [
# ---------------- ТРЕЙЛЕР (~12 с, без рамки) ----------------
dict(start="America's grocery stores kept", sfx=[('ep06-coin:0.35', '@{two cents}')], stock=1, el='''<Center y={480}><BigNum at={@{two cents}} icon="cart" size={240} label="KEPT FROM EVERY $1 YOU SPENT · 2025">2¢</BigNum></Center>
<Source6>FMI · average grocery profit margin 2.1%</Source6>'''),
dict(start="Two cents. A lemonade stand", sfx=[('ep06-scratch:0.3', '@{would quit}')], stock=3, clean=True, el='''<Meme at={@{would quit}} text="lemonade stand: “we're out.”" y={900} />'''),
dict(start="So why do brands pay rent", sfx=[('ep06-stamp:0.35', '@{pay rent}')], stock=21, clean=True, el='''<Center y={540}><Stamp at={@{pay rent}} text="for rent" color={C6.accent} size={110} /></Center>'''),
dict(start="Why is the cheap box", stock=4, clean=True, el='''<Center y={900}><Words text="The cheap box?" at={@{cheap box}} size={90} hl={["cheap"]} /></Center>'''),
dict(start="And why is a little plastic card", sfx=[('ep06-pop:0.3', '@{plastic card}')], stock=5, clean=True, el='''<Center y={900}><Words text="A plastic card > your cart?" at={@{plastic card}} size={84} hl={["card"]} /></Center>'''),
dict(start="Because it's not the groceries", sfx=[('ep06-stamp:0.4', '0.05')], hard=True, el='''<Center y={520}><TitleCard at={0} title="It's Not the Groceries" hl={["Not"]} /></Center>'''),

# ---------------- ГЛАВА 1 · THE RECEIPT ----------------
dict(start="Imagine a mom named Dana", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH1, stock=6, el='''<Center y={500}><In at={0} out={@{Saturday morning}} from="fade"><ChapterCard n={1} title="The Receipt" /></In></Center>
<Center y={560}><NameCard6 at={@{Full cart}} name="Dana" role="MADE UP · HER MATH IS REAL" icon="cart" /></Center>
<Meme at={@{mostly marshmallows}} text="lawyer-level negotiation" y={930} size={60} />'''),
dict(start="At the register she does", sfx=[('ep06-pop:0.3', '@{one tiny thing}')], stock=43, clean=True, el='''<Center y={900}><Label6 at={@{Remember it}} size={40} color={C6.accent}>REMEMBER THIS</Label6></Center>'''),
dict(start="And Dana is not a careless", stock=34, alt=(41, "She once drove"), el='''<Center y={300}><Col gap={22}>
  <Label6 at={@{compares prices}} size={40} color={C6.ink}>✓ COMPARES PRICES</Label6>
  <Label6 at={@{clips coupons}} size={40} color={C6.ink}>✓ CLIPS COUPONS</Label6>
</Col></Center>
<Meme at={@{cost her more}} text="saved $1 · spent $4 on gas" y={900} size={66} />'''),
dict(start="The total comes to", sfx=[('ep06-receipt:0.35', '@{one hundred dollars}')], stock=8, dim=0.35, el='''<Center y={500}><BigNum at={@{one hundred dollars}} icon="receipt" size={240} color={C6.ink} label="DANA'S SATURDAY">$100.00</BigNum></Center>
<Center y={820}><Label6 at={@{feels robbed}} size={52} color={C6.loss}>FEELS ROBBED</Label6></Center>'''),
dict(start="Fair. But let's follow", el='''<Center y={540}><Words text="Let's follow that $100." at={0.05} size={110} hl={["$100."]} /></Center>'''),
dict(start="At a chain like Kroger", sfx=[('ep06-pop:0.3', '@{seventy seven}')], stock=11, dim=0.2, el='''<Center x={620} y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.1} step={0.35} lines={[["YOUR TOTAL", "$100"], ["FOOD + TRUCKS", "-$77"]]} /></div></Center>
<Center x={1350} y={540}><BigNum at={@{seventy seven}} icon="truck" size={190} color={C6.ink} label="THE FOOD + GETTING IT ON THE SHELF">$77</BigNum></Center>
<Source6>Kroger gross margin 22.9% · our calculation</Source6>'''),
dict(start="That leaves twenty three", stock=12, alt=(13, "the rent"), el='''<Center y={180}><BigNum at={@{twenty three}} size={150} punch={false} label="LEFT">$23</BigNum></Center>
<Center y={640}><Row gap={90}>
  <Col><IconIn at={@{the cashier}} name="person" size={120} /><Label6 at={@{the cashier}} size={32}>CASHIER</Label6></Col>
  <Col><IconIn at={@{the stocker}} name="bag" size={120} /><Label6 at={@{the stocker}} size={32}>STOCKER</Label6></Col>
  <Col><IconIn at={@{the rent}} name="building" size={120} /><Label6 at={@{the rent}} size={32}>RENT</Label6></Col>
  <Col><IconIn at={@{the freezers}} name="store" size={120} /><Label6 at={@{the freezers}} size={32}>FREEZERS</Label6></Col>
  <Col><IconIn at={@{walks out}} name="person" size={120} color={C6.loss} /><Label6 at={@{walks out}} size={32} color={C6.loss}>THEFT</Label6></Col>
</Row></Center>'''),
dict(start="What's left for the store", sfx=[('ep06-coin:0.35', '@{About two dollars}')], el='''<Center y={200}><Words text="What's left for the store?" at={0.05} size={72} /></Center>
<Center y={540}><BigNum at={@{About two dollars}} icon="coin" size={260} label="THE STORE KEEPS · OF DANA'S $100">≈$2</BigNum></Center>
<Source6>FMI · 2.1% average margin, 2025</Source6>'''),
dict(start="So Dana feels robbed", stock=38, clean=True, el='''<Meme at={@{The store feels}} text="everyone's a victim" y={900} />'''),
dict(start="and the only winner", stock=14, clean=True, el='''<Meme at={@{selling freezers}} text="freezer salesman: thriving" y={900} />'''),
dict(start="Now scale it up", sfx=[('ep06-counter:0.3', '@{a hundred forty seven}')], stock=42, el='''<Center y={380}><Counter6 to={147} at={@{a hundred forty seven}} dur={0.9} fmt={(v) => "$" + Math.round(v) + "B"} size={200} color={C6.ink} /></Center>
<Center y={540}><Label6 at={@{a hundred forty seven}} size={28}>KROGER SALES · 2024</Label6></Center>
<Center y={760}><BigNum at={@{two point seven}} size={150} punch={false} label="PROFIT">$2.7B</BigNum></Center>
<Source6>Kroger FY2024 results</Source6>'''),
dict(start="A giant pile of money", el='''<Center y={540}><Donut6 at={0.1} pct={1.8} center="1.8%" label="KROGER 2024 · KEPT AS PROFIT" size={640} /></Center>'''),
dict(start="And two percent is brutal", sfx=[('ep06-fall:0.25', '@{the year is gone}')], stock=15, el='''<Center y={420}><Words text="One broken freezer. One price war." at={@{One broken freezer}} size={84} maxW={1500} /></Center>
<Center y={680}><Label6 at={@{one grocer in nine}} size={40} color={C6.loss}>~1 IN 9 GROCERS POSTED LOSSES</Label6></Center>
<Source6>FMI · The Food Retailing Industry Speaks 2026</Source6>'''),
dict(start="So why do these companies", sfx=[('ep06-pop:0.3', '@{half the story}')], el='''<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.1} step={0.3} w={620} lines={[["FOOD + TRUCKS", "$77"], ["COSTS", "$21"], ["PROFIT", "$2"], ["???", "?"], ["???", "?"], ["???", "?"]]} /></div></Center>'''),
dict(start="The other half is paid", stock=16, el='''<Center y={880}><Label6 at={@{never push a cart}} size={40} color={C6.accent}>PEOPLE WHO NEVER PUSH A CART</Label6></Center>'''),

# ---------------- ГЛАВА 2 · THE SHELF ----------------
dict(start="Walk into any supermarket", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH2, stock=13, el='''<Center y={500}><In at={0} out={@{very expensive}} from="fade"><ChapterCard n={2} title="The Shelf" /></In></Center>
<Center y={540}><Words text="Very expensive real estate." at={@{very expensive}} size={96} hl={["real", "estate."]} /></Center>'''),
dict(start="Every shelf is for rent", sfx=[('ep06-stamp:0.4', '@{for rent}')], stock=21, clean=True, el='''<Center y={520}><Stamp at={@{for rent}} text="for rent" color={C6.accent} size={120} /></Center>'''),
dict(start="When a food company wants", stock=41, el='''<Center y={540}><Words text="Pay just to get in." at={@{just to let it in}} size={96} hl={["get", "in."]} /></Center>
<Center y={760}><Label6 at={@{slotting fee}} size={44} color={C6.accent}>= A SLOTTING FEE</Label6></Center>'''),
dict(start="The FTC looked into this", sfx=[('ep06-counter:0.3', '@{almost twenty two}')], stock=15, el='''<Center y={140}><Label6 at={0.1} size={40} color={C6.ink}>FTC · AVERAGE FEE · ONE PRODUCT · ONE CHAIN · ONE CITY</Label6></Center>
<Center y={600}><TwoBars at={@{Average slotting}} h={380} a={{ label: "LOW AVERAGE", value: "$2,313", v: 2313 }} b={{ label: "HIGH AVERAGE", value: "$21,768", v: 21768, at: @{almost twenty two} }} /></Center>
''' + FTC),
dict(start="One item. One city", sfx=[('ep06-boom:0.28', '@{one and a half}')], stock=37, dim=0.4, el='''<Center y={480}><BigNum at={@{one and a half}} size={230} label="NATIONAL LAUNCH · SUPPLIERS' ESTIMATE">$1.5–2M</BigNum></Center>
<Center y={800}><Label6 at={@{before a single box}} size={40} color={C6.ink}>BEFORE A SINGLE BOX IS SOLD</Label6></Center>
''' + FTC),
dict(start="For a giant brand", stock=17, alt=(20, "small family salsa"), el='''<Meme at={@{that's a Tuesday}} out={@{small family salsa}} text="giant brand: “it's a tuesday”" y={900} size={66} />
<Meme at={@{the whole year}} text="small salsa company: 💀" y={900} size={66} />
<Center y={200}><Label6 at={@{At an FTC workshop}} size={40} color={C6.ink}>SMALL PRODUCERS TO THE FTC: THE FEES KEEP US OUT</Label6></Center>'''),
dict(start="And it doesn't always pay off", sfx=[('ep06-fall:0.25', '@{one in ten}')], stock=18, el='''<Center y={480}><BigNum at={@{one in ten}} size={220} color={C6.loss} label="NEW ICE CREAMS THAT DIDN'T EARN THE FEE BACK · YEAR 1">1 in 10</BigNum></Center>
''' + FTC),
dict(start="That's not a product launch", stock=14, clean=True, el='''<Meme at={@{very cold donation}} text="a very cold donation" y={900} />'''),
dict(start="Across the whole industry", sfx=[('ep06-counter:0.3', '@{nine billion}')], stock=36, dim=0.45, alt=(26, "Nine billion just"), el='''<Center y={460}><Counter6 to={9} at={@{nine billion}} dur={0.8} fmt={(v) => "$" + Math.round(v) + "B / year"} size={190} /></Center>
<Center y={650}><Label6 at={@{nine billion}} size={28}>SLOTTING MONEY · ESTIMATES, EARLY 2000s</Label6></Center>
<Center y={850}><Words text="Just to exist on a shelf." at={@{just for the right}} size={70} hl={["exist"]} /></Center>'''),
dict(start="And getting in is just", sfx=[('ep06-stamp:0.4', '@{pay to stay fees}')], stock=22, el='''<Center y={500}><Stamp at={@{pay to stay fees}} text="pay-to-stay" color={C6.accent} size={100} /></Center>'''),
dict(start="Shelf deals usually last", stock=23, el='''<Center y={480}><BigNum at={@{six months}} icon="calendar" size={190} label="TYPICAL SHELF DEAL">6–12 mo</BigNum></Center>
<Center y={800}><Label6 at={@{back up for negotiation}} size={34} color={C6.ink}>THEN THE SHELF IS BACK ON THE MARKET</Label6></Center>'''),
dict(start="Your favorite salsa isn't", sfx=[('ep06-stamp:0.35', '@{lease got renewed}')], stock=19, clean=True, el='''<Center y={500}><Stamp at={@{lease got renewed}} text="lease renewed ✓" color={C6.money} size={96} rotate={6} /></Center>'''),
dict(start="Then there's the end cap", stock=21, alt=(22, "An FTC official"), el='''<Center y={180}><Label6 at={@{the end cap}} size={44} color={C6.accent}>THE END CAP</Label6></Center>
<Center y={880}><Words text="End caps or eye-level shelves?" at={@{what the money buys}} size={76} hl={["eye-level"]} /></Center>
<Source6>FTC testimony to Congress, 1999</Source6>'''),
dict(start="Add in discounts and promotions", stock=16, el='''<Center y={540}><Split6 at={0.1} left={{ title: "MAKING THE FOOD", value: "#1 COST", icon: "factory", color: C6.ink }} right={{ title: "TRADE SPENDING · % OF SALES", value: "~20%", icon: "store", at: @{around a fifth} }} /></Center>
<Source6>PwC / McKinsey estimates · ~20% of gross sales</Source6>'''),
dict(start="Translated from corporate", el='''<CorpSub at={0.05} corp="Trade spending" human="Rent, but for cereal." />'''),
dict(start="So the store isn't just selling", sfx=[('ep06-pop:0.3', '@{renting the shelves}')], el='''<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.05} step={0.12} w={640} lines={[["FOOD + TRUCKS", "$77"], ["COSTS", "$21"], ["PROFIT", "$2"], ["SHELF RENT", "✓"], ["???", "?"], ["???", "?"]]} /></div></Center>'''),
dict(start="If you like finding out", sfx=[('ep06-pop:0.3', '@{subscribe}')], stock=25, el='''<Subscribe6 at={@{subscribe}} />
<Center y={880}><Label6 at={@{the whole channel}} size={34} color={C6.ink}>WHO REALLY GETS YOUR MONEY · EVERY WEEK</Label6></Center>'''),

# ---------------- ГЛАВА 3 · THE STORE BRAND ----------------
dict(start="Now look at Dana's cart", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH3, stock=4, el='''<Center y={500}><In at={0} out={@{suspiciously familiar}} from="fade"><ChapterCard n={3} title="The Store Brand" /></In></Center>
<Center y={880}><Label6 at={@{suspiciously familiar}} size={40} color={C6.accent}>SUSPICIOUSLY FAMILIAR</Label6></Center>'''),
dict(start="Same colors. Different name", sfx=[('ep06-scratch:0.25', '@{fancy college}')], stock=38, clean=True, el='''<Meme at={@{cereal's cousin}} text="the cousin who skipped the fancy college" y={900} size={62} />'''),
dict(start="That's the store brand", el='''<Center y={540}><Split6 at={0.1} left={{ title: "BIG NAME", value: "$5.49", icon: "bag", color: C6.ink }} right={{ title: "STORE BRAND · ≈20% LESS", value: "$4.39", icon: "store", at: @{twenty percent less} }} /></Center>
<Source6>Circana · private label ≈20% cheaper</Source6>'''),
dict(start="And shoppers stopped thinking", stock=35, el='''<Center y={480}><BigNum at={@{seven in ten}} icon="person" size={230} label="SAY STORE BRANDS ARE AS GOOD OR BETTER">7 in 10</BigNum></Center>
<Source6>Circana · 69%</Source6>'''),
dict(start="Dana saves. Dana feels clever", stock=7, clean=True, el='''<Meme at={@{feels clever}} text="dana: big brain" y={900} />'''),
dict(start="But Kroger says its own brands", stock=41, el='''<Center y={480}><Words text="“A more favorable margin profile.”" at={0.1} size={92} hl={["favorable"]} /></Center>
<Source6>Kroger Q3 2025 earnings call</Source6>'''),
dict(start="Translation: we make more", el='''<CorpSub at={0.05} corp="A more favorable margin profile" human="We make more on the cheap box." />'''),
dict(start="There's no famous brand", stock=24, alt=(44, "in its own factories"), el='''<Center y={880}><Label6 at={@{about a fifth}} size={40} color={C6.accent}>~20% OF STORE-BRAND UNITS · MADE IN KROGER PLANTS</Label6></Center>
''' + KR10K),
dict(start="Kroger's own brands sold", sfx=[('ep06-kaching:0.25', '@{thirty nine billion}')], stock=25, el='''<Center y={480}><BigNum at={@{thirty nine billion}} icon="store" size={230} color={C6.money} label="KROGER STORE BRANDS · 2025 SALES">$39B+</BigNum></Center>
''' + KR10K),
dict(start="So the healthy choice", stock=13, el='''<Center y={480}><Row gap={130}>
  <Col><IconIn at={@{the healthy choice}} name="bag" size={190} color={C6.money} /><Label6 at={@{the healthy choice}} size={38}>HEALTHY</Label6></Col>
  <Col><IconIn at={@{the cheap choice}} name="receipt" size={190} /><Label6 at={@{the cheap choice}} size={38}>CHEAP</Label6></Col>
  <Col><IconIn at={@{the fancy choice}} name="store" size={190} color={C6.accent} /><Label6 at={@{the fancy choice}} size={38}>FANCY</Label6></Col>
</Row></Center>
<Center y={850}><Stamp at={@{the store's}} text="store brand" color={C6.accent} size={80} /></Center>'''),
dict(start="That's not a side hustle", sfx=[('ep06-pop:0.3', '@{hiding inside}')], el='''<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.05} step={0.12} w={640} lines={[["FOOD + TRUCKS", "$77"], ["COSTS", "$21"], ["PROFIT", "$2"], ["SHELF RENT", "✓"], ["STORE BRAND", "✓"], ["???", "?"]]} /></div></Center>'''),
dict(start="And it's growing fast", sfx=[('ep06-counter:0.3', '@{eleven hundred}')], stock=35, dim=0.35, el='''<Center y={440}><Counter6 to={1100} at={@{eleven hundred}} dur={0.9} fmt={(v) => Math.round(v).toLocaleString("en-US") + "+"} size={190} /></Center>
<Center y={620}><Label6 at={@{eleven hundred}} size={28}>NEW STORE-BRAND PRODUCTS · 2025</Label6></Center>
<Center y={820}><Label6 at={@{three new products}} size={40} color={C6.accent}>≈ 3 NEW PRODUCTS A DAY</Label6></Center>'''),
dict(start="And the famous brand", stock=26, dim=0.45, el='''<Center y={180}><Label6 at={@{Still paying rent}} size={44} color={C6.ink}>STILL PAYING RENT</Label6></Center>
<Meme at={@{Heads the store wins}} out={@{Tails}} text="heads: store wins" y={900} />
<Meme at={@{Tails}} text="tails: store collects rent" y={900} />'''),
dict(start="But the shelf and the store brand", el='''<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.05} step={0.12} w={640} lines={[["SHELF RENT", "✓"], ["STORE BRAND", "✓"], ["THE NEWEST ONE", "?"]]} /></div></Center>
<Center y={880}><Label6 at={@{forty cents}} size={40} color={C6.accent}>DANA GAVE IT AWAY FOR 40¢</Label6></Center>'''),

# ---------------- ГЛАВА 4 · THE CARD ----------------
dict(start="Remember that tiny thing", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH4, stock=12, alt=(10, "tiny thing Dana did"), el='''<Center y={500}><In at={0} from="fade"><ChapterCard n={4} title="The Card" /></In></Center>'''),
dict(start="She scanned a little plastic", sfx=[('ep06-pop:0.35', '@{forty cents}')], stock=40, el='''<Center x={1420} y={500}><div style={{ scale: "1.45" }}><Receipt6 at={@{forty cents}} step={0.2} w={460} lines={[["YOGURT", "$1.29"], ["CARD SAVINGS", "-$0.40"]]} /></div></Center>'''),
dict(start="Kroger says more than ninety", sfx=[('ep06-counter:0.3', '@{sixty three million}')], stock=43, el='''<Center y={380}><BigNum at={@{ninety five percent}} icon="card" size={200} label="OF TRANSACTIONS · TIED TO A LOYALTY CARD">95%+</BigNum></Center>
<Center y={760}><Label6 at={@{sixty three million}} size={44} color={C6.ink}>≈ 63 MILLION HOUSEHOLDS A YEAR</Label6></Center>
''' + KR10K),
dict(start="So Kroger knows what Dana", stock=27, el='''<Center x={1380} y={520}><div style={{ scale: "1.45" }}><Receipt6 at={0.1} step={0.45} w={520} lines={[["WHAT", "yogurt"], ["WHEN", "Sat 9:40"], ["SWITCHED FROM", "brand X"]]} /></div></Center>'''),
dict(start="And it has a whole company", stock=33, el='''<Center y={480}><BigNum at={@{eighty four fifty one}} size={230} label="KROGER'S DATA COMPANY">84.51° W</BigNum></Center>
<Center y={780}><Label6 at={@{longitude}} size={34} color={C6.ink}>= THE LONGITUDE OF KROGER HQ · CINCINNATI</Label6></Center>'''),
dict(start="Nothing says", sfx=[('ep06-scratch:0.3', '@{map coordinates}')], stock=46, clean=True, el='''<Meme at={@{just a grocery store}} text="“we're just a grocery store”" y={900} size={66} />'''),
dict(start="Kroger built it in", stock=32, el='''<Center y={440}><Label6 at={@{twenty fifteen}} size={44} color={C6.ink}>2015 · BUILT FROM DUNNHUMBY USA</Label6></Center>
<Center y={620}><Label6 at={@{Clubcard}} size={34} color={C6.accent}>THE FIRM BEHIND TESCO CLUBCARD</Label6></Center>'''),
dict(start="One of dunnhumby's founders", sfx=[('ep06-boom:0.25', '@{new oil}')], stock=29, alt=(30, "He just started"), el='''<Center y={480}><Words text="“Data is the new oil.”" at={@{data is the new oil}} size={110} hl={["oil.”"]} /></Center>
<Center y={720}><Label6 at={@{new oil}} size={34} color={C6.ink}>CLIVE HUMBY · DUNNHUMBY CO-FOUNDER</Label6></Center>
<Meme at={@{started with yogurt}} text="started with yogurt" y={920} size={64} />'''),
dict(start="It uses card data", stock=27, el='''<Center y={420}><Row gap={110}>
  <Col><IconIn at={@{which coupons}} name="phone" size={140} /><Label6 at={@{which coupons}} size={34}>WHO GETS WHICH COUPON</Label6></Col>
  <Col><IconIn at={@{which products}} name="store" size={140} /><Label6 at={@{which products}} size={34}>WHAT GOES ON THE SHELF</Label6></Col>
</Row></Center>
<Meme at={@{That's not luck}} text="it's not luck. it's the card." y={900} size={66} />'''),
dict(start="And who else wants that data", stock=16, el='''<Center y={880}><Label6 at={@{The brands}} size={40} color={C6.accent}>THE BRANDS · ALREADY PAYING FOR SHELVES</Label6></Center>'''),
dict(start="So Kroger sells them advertising", stock=28, el='''<Center y={520}><Row gap={70}>
  <Col><IconIn at={@{show a brand's ad}} name="billboard" size={130} /><Label6 at={@{show a brand's ad}} size={34}>AD SHOWN</Label6></Col>
  <Label6 at={@{then check}} size={60} color={C6.accent}>→</Label6>
  <Col><IconIn at={@{which households}} name="building" size={130} /><Label6 at={@{which households}} size={34}>HOUSEHOLD</Label6></Col>
  <Label6 at={@{actually bought}} size={60} color={C6.accent}>→</Label6>
  <Col><IconIn at={@{actually bought}} name="receipt" size={130} color={C6.money} /><Label6 at={@{actually bought}} size={34}>BOUGHT ✓</Label6></Col>
</Row></Center>
''' + KR10K),
dict(start="Most ad companies guess", sfx=[('ep06-stamp:0.4', '@{has the receipt}')], stock=9, clean=True, el='''<Center y={520}><Stamp at={@{has the receipt}} text="has the receipt" color={C6.accent} size={96} /></Center>'''),
dict(start="Now here's the number", el='''<Center y={540}><Words text="The number that explains it all." at={0.1} size={100} maxW={1300} hl={["number"]} /></Center>'''),
dict(start="In twenty twenty five, Kroger's side", sfx=[('ep06-kaching:0.25', '@{one and a half billion}')], stock=36, el='''<Center y={560}><TwoBars at={@{side businesses}} a={{ label: "SIDE BUSINESSES · MEDIA, DATA, FINANCE", value: "$1.5B", v: 1.5, color: C6.accent }} b={{ label: "WHOLE COMPANY · ADJUSTED", value: "$4.9B", v: 4.9, color: C6.ink, at: @{four point nine} }} /></Center>
''' + KRIR),
dict(start="So by our math", sfx=[('ep06-boom:0.3', '@{one dollar in three}')], el='''<Center y={180}><Label6 at={0.05} size={40} color={C6.ink}>BY OUR MATH</Label6></Center>
<Center y={480}><BigNum at={@{one dollar in three}} icon="coin" size={260} label="OF KROGER'S OPERATING PROFIT · NOT FROM SELLING FOOD">≈1 in 3</BigNum></Center>
<Center y={820}><Label6 at={@{didn't come from}} size={26} color={C6.ink}>OUR CALCULATION · $1.5B ÷ $4.9B</Label6></Center>'''),
dict(start="Kroger's own annual report", stock=17, el='''<Center y={540}><Split6 at={0.1} left={{ title: "SELLING FOOD", value: "PENNIES", icon: "cart", color: C6.ink }} right={{ title: "SELLING ATTENTION", value: "HIGH MARGIN", icon: "billboard", at: @{Selling attention} }} /></Center>
''' + KR10K),
dict(start="And Kroger's not alone", sfx=[('ep06-counter:0.3', '@{six point four}')], stock=39, alt=(5, "In its latest quarter"), el='''<Center y={440}><Counter6 to={6.4} at={@{six point four}} dur={0.9} fmt={(v) => "$" + v.toFixed(1) + "B"} size={200} /></Center>
<Center y={620}><Label6 at={@{six point four}} size={28}>WALMART GLOBAL ADVERTISING · FY2026</Label6></Center>
<Center y={820}><Label6 at={@{nearly a third}} size={34} color={C6.accent}>ADS + MEMBERSHIPS ≈ 1/3 OF OPERATING INCOME · Q4</Label6></Center>
<Source6>Walmart Q4 FY2026 earnings</Source6>'''),
dict(start="Your supermarket isn't just", stock=37, clean=True, el='''<Meme at={@{media company}} text="media company (also: bananas)" y={900} size={70} />'''),

# ---------------- ФИНАЛ ----------------
dict(start="So back to Dana's hundred", sfx=[('ep06-receipt:0.3', '0.1')], el='''<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.1} step={0.25} w={660} lines={[["FOOD + TRUCKS", "$77"], ["COSTS", "$21"], ["PROFIT", "$2"], ["SHELF RENT", "✓"], ["STORE BRAND", "✓"], ["YOUR DATA", "✓"]]} /></div></Center>'''),
dict(start="But that was never", stock=1, el='''<Center y={300}><Col gap={22}>
  <Label6 at={@{the shelf she walked past}} size={44} color={C6.ink}>THE SHELF SHE WALKED PAST</Label6>
  <Label6 at={@{the store brand she grabbed}} size={44} color={C6.ink}>THE STORE BRAND SHE GRABBED</Label6>
  <Label6 at={@{the card she scanned}} size={44} color={C6.accent}>THE CARD SHE SCANNED</Label6>
</Col></Center>'''),
dict(start="Dana thought she was", sfx=[('ep06-stamp:0.4', "@{she's the product}")], stock=31, el='''<Center y={520}><Stamp at={@{she's the product}} text="the product" color={C6.accent} size={110} /></Center>'''),
dict(start="None of this is secret", stock=30, alt=(7, "Most of it is right"), el='''<Center y={880}><Label6 at={@{forty cents cheaper}} size={34} color={C6.ink}>THE YOGURT WAS 40¢ CHEAPER · THE DEAL WAS BIGGER</Label6></Center>'''),
dict(start="So next time the cashier", stock=10, el='''<Center y={880}><Words text="“Do you have a rewards card?”" at={@{Do you have}} size={80} hl={["rewards"]} /></Center>'''),
dict(start="Oh, and of Kroger's roughly", end_pad=10.0, stock=39, dim=0.3, el='''<Center y={110}><Label6 at={0.1} size={34} color={C6.ink}>KROGER: ~2,700 SUPERMARKETS · 1,700+ SELL GAS</Label6></Center>
<EndCard6 at={0.4} next="Why Gas Stations Make About a Dime a Gallon" />
<Center y={1000}><Label6 at={@{Which store card}} size={40} color={C6.accent}>WHICH STORE CARD IS IN YOUR WALLET?</Label6></Center>'''),
]
