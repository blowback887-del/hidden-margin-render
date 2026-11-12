# Ep08 «Why Black Friday TVs Are So Cheap (It's Not a Discount)» — план сцен для cloud/gen/build.py.
# Визуальная идея выпуска: ценник-наклейка $228 из трёх слоёв (TagLayers) — каждая глава «отклеивает» слой:
#   1 A DIFFERENT TV → 2 THE TV IS BAIT → 3 THE SCREEN PAYS RENT (+ заметка «the price comes back»). Сквозная карта: в конце трейлера,
#   на стыках глав и целиком в финале. В Ep07 был «рентген чека» — здесь другое устройство.
# Трейлер ~25 с, без рамки: $228 → $3.50/дюйм → «кто теряет? никто» → три слоя → титр.
# Главы по нарастанию: 1 «The Model» → 2 «The Bait» → 3 «The Deadline» → 4 «The Screen» (главное открытие и Walmart — в конце).
# Бытовая метафора: ценник — первый взнос, остальное платишь вниманием; телевизор — бесплатный хлеб, саундбар — стейк.
# Приёмы банка: бомба под столом (модели не было в сентябре), предмет-талисман (номер модели → чек-лист финала),
# остаток истории (Walmart), перевод с корпоративного, мемные подписи, штамп, счётчик, разделённый экран, возврат к началу.
# Номера стока = порядок в cloud/broll/ep08.json. Музыка — треки Фонотеки YouTube из набора Ep06 (не как в Ep07).

EP = dict(
    comp="Ep08BlackFriday",
    words="src/videos/ep08-blackfriday-words.json",
    text="cloud/voice/ep08-text",
    parts=6,
    broll="cloud/broll/ep08.json",
    audio="audio/ep08-voiceover.mp3",
    voice_vol=0.82,
    music=[
        dict(**{'from':0.0}, to=29.6, file="audio/ep06/music-trailer.mp3", vol=0.15),
        dict(**{'from':29.1}, to=162.1, file="audio/ep06/music-ch1.mp3", vol=0.12),
        dict(**{'from':161.6}, to=258.9, file="audio/ep06/music-ch4.mp3", vol=0.12),
        dict(**{'from':258.4}, to=318.5, file="audio/ep06/music-ch3.mp3", vol=0.12),
        dict(**{'from':318.0}, to=508.3, file="audio/ep06/music-ch2.mp3", vol=0.12),
        dict(**{'from':507.8}, to=600.0, file="audio/ep06/music-finale.mp3", vol=0.12),
    ],
    lens={1: 10.0, 2: 8.47, 3: 10.0, 4: 10.0, 5: 7.13, 6: 10.0, 7: 3.53, 8: 10.0, 9: 10.0, 10: 8.87, 11: 10.0, 12: 10.0, 13: 10.0, 14: 10.0, 15: 10.0, 16: 10.0, 17: 8.47, 18: 10.0, 19: 10.0, 20: 10.0, 21: 8.0, 22: 10.0, 23: 10.0, 24: 6.5, 25: 10.0, 26: 10.0, 27: 10.0, 28: 10.0, 29: 10.0, 30: 10.0, 31: 7.33, 32: 10.0, 33: 10.0, 34: 10.0, 35: 7.2, 36: 10.0, 37: 10.0, 38: 10.0, 39: 10.0, 40: 10.0, 41: 10.0, 42: 4.17, 43: 10.0, 44: 10.0, 45: 10.0, 46: 10.0, 47: 10.0, 48: 10.0, 49: 10.0, 50: 10.0, 51: 10.0, 52: 7.43, 53: 10.0, 54: 10.0, 55: 10.0, 56: 7.0, 57: 8.57, 58: 9.43, 59: 10.0, 60: 10.0},
)

CH1, CH2, CH3, CH4 = (1, "The Model"), (2, "The Bait"), (3, "The Deadline"), (4, "The Screen")
NBC = "<Source6>NBC News · VentureBeat · November 2015</Source6>"
STRIB = "<Source6>Star Tribune · Nov 28, 2018</Source6>"
WHICH = "<Source6>Which? · Nov 25, 2025 · 175 products, 8 UK retailers</Source6>"
VIZ = "<Source6>Vizio annual report (10-K) · fiscal 2023</Source6>"
L1 = '{ text: "A different TV", done: true }'
L2 = '{ text: "The TV is bait", done: true }'
L3 = '{ text: "The screen pays rent", done: true }'
Q = '{ text: "?" }'

S = [
# ---------------- ТРЕЙЛЕР (~25 с, без рамки) ----------------
dict(start="This is a sixty-five-inch TV", sfx=[('ep06-stamp:0.4', '0.3')], stock=60, el='''<Center y={180}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Words text="This is a 65-inch TV." at={0.05} size={76} hl={["65-inch"]} /></div></Center>
<Center y={560}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><BigNum at={0.3} icon="store" size={260} label="WALMART · BLACK FRIDAY 2025">$228</BigNum></div></Center>
<Source6>65-inch Vizio listed at $228, was $448 · GamesRadar, Nov 27, 2025</Source6>'''),
dict(start="That's about three dollars", sfx=[('ep06-pop:0.3', '@{fifty cents}')], stock=3, clean=True, el='''<Meme at={@{three dollars}} text="$3.50 an inch" y={900} />'''),
dict(start="So who's losing money here", sfx=[('ep06-scratch:0.3', '@{Nobody}')], stock=2, alt=(5, "The factory"), el='''<Center y={300}><Words text="Who's losing money?" at={0.05} size={96} hl={["losing"]} /></Center>
<Center y={620}><Stamp at={@{Nobody}} text="nobody" color={C6.accent} size={130} /></Center>'''),
dict(start="Because that price tag has three layers", sfx=[('ep06-pop:0.3', '@{A TV that}'), ('ep06-pop:0.3', '@{A store that}'), ('ep06-pop:0.3', '@{And a screen}')], el='''<Center y={540}><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[{ text: "Not quite the TV you think", at: @{A TV that} }, { text: "Not really selling TVs", at: @{A store that} }, { text: "A screen that keeps earning", at: @{And a screen} }]} /></div></Center>'''),
dict(start="Let's peel it", sfx=[('ep06-stamp:0.4', '0.05')], hard=True, el='''<Center y={520}><TitleCard at={0} title="It's Not a Discount" hl={["Not"]} /></Center>'''),

# ---------------- ГЛАВА 1 · THE MODEL ----------------
dict(start="Imagine a guy named Dave", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH1, stock=8, el='''<Center y={300}><In at={0} out={@{It's Black Friday}} from="fade"><ChapterCard n={1} title="The Model" /></In></Center>
<Center y={600}><div style={{ scale: "1.5" }}><NameCard6 at={@{It's Black Friday}} name="Dave" role="MADE UP · THE MATH IS REAL" icon="person" /></div></Center>'''),
dict(start="holding a newspaper ad", stock=9, clean=True, el='''<Meme at={@{treasure map}} text="x marks the tv" y={900} />'''),
dict(start="Front page", sfx=[('ep06-stamp:0.35', '@{half off}')], el='''<Center y={300}><Words text="Front page: a huge name-brand TV." at={0.05} size={84} hl={["Front", "page:"]} maxW={1500} /></Center>
<Center y={660}><Stamp at={@{half off}} text="half off" color={C6.accent} size={150} /></Center>'''),
dict(start="Here's what Dave doesn't know", sfx=[('ep06-boom:0.28', '@{did not exist}')], el='''<Center y={300}><Label6 at={0.1} size={40} color={C6.ink}>WHAT DAVE DOESN'T KNOW</Label6></Center>
<Center y={560}><Words text="It did not exist in September." at={@{did not exist}} size={104} hl={["September."]} maxW={1500} /></Center>'''),
dict(start="The industry has a word for it", sfx=[('ep06-pop:0.3', '@{a derivative}')], el='''<Center y={240}><Label6 at={0.05} size={40} color={C6.ink}>THE INDUSTRY HAS A WORD FOR IT</Label6></Center>
<Center y={480}><Words text="Derivative" at={@{a derivative}} size={220} hl={["Derivative"]} /></Center>
<Center y={760}><Label6 at={@{A model built}} size={46} color={C6.ink}>A MODEL BUILT FOR THE SALE</Label6></Center>'''),
dict(start="Same logo, same size", el='''<Center y={300}><Col gap={22}>
  <Label6 at={0.1} size={42} color={C6.ink}>✓ SAME LOGO</Label6>
  <Label6 at={@{same size}} size={42} color={C6.ink}>✓ SAME SIZE</Label6>
  <Label6 at={@{looks identical}} size={42} color={C6.ink}>✓ LOOKS IDENTICAL</Label6>
</Col></Center>
<Center y={680}><Label6 at={@{slightly different model}} size={48} color={C6.accent}>✗ A SLIGHTLY DIFFERENT MODEL NUMBER</Label6></Center>
<Center y={800}><Label6 at={@{slightly less TV}} size={48} color={C6.loss}>✗ SLIGHTLY LESS TV INSIDE</Label6></Center>'''),
dict(start="This isn't a conspiracy theory", stock=32, el='''<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={30}><Words text="Not a conspiracy theory." at={0.05} size={96} hl={["Not"]} /><Label6 at={@{NBC News}} size={40} color={C6.accent}>NBC NEWS · VENTUREBEAT · NOVEMBER 2015</Label6></Col></div></Center>'''),
dict(start="Best Buy's big deal", sfx=[('ep06-kaching:0.25', '@{eight hundred dollars}')], stock=54, el='''<Center y={170}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={40} color={C6.ink}>BEST BUY · BLACK FRIDAY 2015 · 60-INCH SAMSUNG</Label6></div></Center>
<Center y={500}><In at={@{eight hundred dollars}} from="zoom"><div style={{ padding: "10px 60px", borderRadius: 22, background: C6.panel }}><Num6 size={220}>$799.99</Num6></div></In></Center>
<Center y={820}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={@{Regularly}} size={56} color={C6.loss}>“REGULARLY” $1,499.99</Label6></div></Center>
''' + NBC),
dict(start="One problem", sfx=[('ep06-pop:0.3', '@{VentureBeat searched}')], stock=19, el='''<Center y={200}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={40} color={C6.ink}>ONE PROBLEM: THE MODEL NUMBER</Label6></div></Center>
<Center y={540}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Words text="“…it doesn’t exist anywhere else.”" at={@{VentureBeat searched}} size={92} hl={["anywhere", "else.”"]} maxW={1500} /></div></Center>
<Center y={860}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={@{Only at Best Buy}} size={44} color={C6.accent}>ONLY AT BEST BUY</Label6></div></Center>
<Source6>VentureBeat · Nov 24, 2015</Source6>'''),
dict(start="Regularly fifteen hundred where", sfx=[('ep06-scratch:0.3', '@{In whose dreams}')], stock=14, clean=True, el='''<Meme at={@{In whose dreams}} text="“regularly.” sure." y={900} />'''),
dict(start="Same year, a fifty-eight-inch Vizio", sfx=[('ep06-pop:0.3', '@{ten dimming zones}')], el='''<Center y={130}><Label6 at={0.05} size={38} color={C6.ink}>58-INCH VIZIO · MADE FOR THE HOLIDAY · 2015 · DIMMING ZONES</Label6></Center>
<Center y={560}><Split6 at={0.3} left={{ title: "THE HOLIDAY MODEL", value: "10", icon: "store", color: C6.loss }} right={{ title: "ITS REGULAR COUSINS", value: "16–32", icon: "store", at: @{Its regular cousins} }} /></Center>
''' + NBC),
dict(start="A slower panel than", stock=12, el='''<Center y={300}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={50} color={C6.ink}>60Hz · THE BIGGER M-SERIES: 120Hz</Label6></div></Center>
<Meme at={@{technically}} text="technically 4K" y={880} />'''),
dict(start="What gets trimmed", stock=46, el='''<Center y={480}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={26}><Label6 at={0.05} size={38} color={C6.ink}>WHAT GETS TRIMMED</Label6><Label6 at={@{An HDMI port}} size={56} color={C6.accent}>− AN HDMI PORT</Label6><Label6 at={@{some brightness}} size={56} color={C6.accent}>− SOME BRIGHTNESS</Label6></Col></div></Center>'''),
dict(start="Stuff you only notice in March", sfx=[('ep06-fall:0.25', '@{through a sock}')], stock=15, clean=True, alt=(16, "watching a movie"), el='''<Meme at={@{through a sock}} text="4K (of fog)" y={900} />'''),
dict(start="And the odd model number", el='''<Center y={540}><Words text="It's the whole trick." at={0.05} size={130} hl={["trick."]} /></Center>'''),
dict(start="A TV sold nowhere else", el='''<Center y={540}><Split6 at={0.1} left={{ title: "PRICE HISTORY", value: "NONE", icon: "clock", color: C6.loss }} right={{ title: "SO “REGULAR PRICE” CAN BE", value: "ANY", icon: "percent", at: @{regular price} }} /></Center>'''),
dict(start="And price matching usually", sfx=[('ep06-stamp:0.4', '@{There is no identical}'), ('ep06-fall:0.25', '@{Checkmate}')], stock=17, el='''<Center y={420}><Stamp at={@{There is no identical}} text="price match: denied" color={C6.loss} size={96} /></Center>
<Meme at={@{Checkmate}} text="checkmate, dave" y={900} />'''),
dict(start="Now, to be fair", stock=18, el='''<Center y={880}><Label6 at={@{Plenty of}} size={40} color={C6.ink}>PLENTY OF BLACK FRIDAY TVs ARE HONEST DEALS</Label6></Center>'''),
dict(start="But the one on the front page", stock=9, el='''<Center y={880}><Label6 at={@{a different job}} size={44} color={C6.accent}>THE FRONT-PAGE ONE HAS A DIFFERENT JOB</Label6></Center>'''),
dict(start="Because here's the second layer", sfx=[('ep06-pop:0.3', '0.4')], el='''<Center y={540}><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[''' + L1 + ", " + Q + ", " + Q + ''']} /></div></Center>'''),
dict(start="Read the fine print", sfx=[('ep06-pop:0.3', '@{Ads have carried}')], el='''<Center y={240}><Words text="Read the fine print." at={0.05} size={84} hl={["fine", "print."]} /></Center>
<Center y={560}><Words text="“Minimum 5 per store”" at={@{Ads have carried}} size={140} hl={["5"]} /></Center>
<Source6>Ad wording reported by CNNMoney, 2009</Source6>'''),
dict(start="Five. Dave is ninth", sfx=[('ep06-scratch:0.35', '@{ninth in line}')], stock=7, clean=True, el='''<Meme at={@{ninth in line}} text="dave: #9 of 5" y={900} />'''),

# ---------------- ГЛАВА 2 · THE BAIT ----------------
dict(start="Retail calls this a doorbuster", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH2, stock=22, el='''<Center y={440}><In at={0} out={@{which is a friendlier}} from="fade"><ChapterCard n={2} title="The Bait" /></In></Center>
<CorpSub at={@{saying bait}} corp="Doorbuster" human="Bait." />'''),
dict(start="The store may make nothing", stock=47, el='''<Center y={440}><BigNum at={@{make nothing}} icon="store" size={220} color={C6.ink} label="WHAT THE STORE MAY MAKE ON THAT TV">≈$0</BigNum></Center>
<Center y={800}><Label6 at={@{lose a little}} size={44} color={C6.loss}>OR A SMALL LOSS</Label6></Center>'''),
dict(start="In twenty eighteen, an electronics analyst", sfx=[('ep06-pop:0.3', '@{told the Star Tribune}')], el='''<Center y={170}><Words text="Who eats the loss?" at={0.05} size={76} hl={["loss?"]} /></Center>
<Center y={520}><Words text="“Manufacturers pay for most of the loss.”" at={@{told the Star Tribune}} size={100} hl={["Manufacturers"]} maxW={1500} /></Center>
<Center y={840}><Label6 at={@{told the Star Tribune}} size={32} color={C6.accent}>STEPHEN BAKER · ELECTRONICS ANALYST, NPD</Label6></Center>
''' + STRIB),
dict(start="And each store only gets", stock=30, el='''<Center y={880}><Label6 at={@{limited number}} size={44} color={C6.ink}>A LIMITED NUMBER PER STORE → THE LOSS IS CAPPED</Label6></Center>'''),
dict(start="What the store bought", sfx=[('ep06-kaching:0.25', '@{is Dave}')], stock=20, el='''<Center y={420}><Words text="What the store bought: Dave." at={@{is Dave}} size={104} hl={["Dave."]} maxW={1500} /></Center>
<Center y={860}><Label6 at={@{wallet out}} size={40} color={C6.accent}>AT DAWN · WALLET OUT · ADRENALINE UP</Label6></Center>'''),
dict(start="Years ago, Best Buy even", stock=8, el='''<Center y={860}><Label6 at={@{number system}} size={42} color={C6.ink}>BEST BUY: A NUMBER SYSTEM FOR ITS DOORBUSTERS</Label6></Center>
''' + STRIB),
dict(start="When a sale needs crowd control", sfx=[('ep06-stamp:0.35', "@{It's a show}")], clean=True, stock=52, el='''<Meme at={@{not a sale}} out={@{It's a show}} text="not a sale" y={900} />
<Meme at={@{It's a show}} text="a show" y={900} />'''),
dict(start="So Dave doesn't get the doorbuster", sfx=[('ep06-fall:0.25', "@{doesn't get}")], stock=33, clean=True, el='''<Meme at={@{doesn't get}} text="sold out at #5" y={900} />'''),
dict(start="But there's a nicer one", sfx=[('ep06-kaching:0.25', '@{a hundred fifty more}')], el='''<Center y={500}><BigNum at={@{a hundred fifty more}} icon="store" size={240} label="THE NICER ONE · RIGHT NEXT TO IT">+$150</BigNum></Center>'''),
dict(start="And he'll need a wall mount", sfx=[('ep06-coin:0.3', '@{a wall mount}'), ('ep06-coin:0.3', '@{A soundbar}'), ('ep06-coin:0.3', '@{An HDMI cable}'), ('ep06-coin:0.3', '@{a protection plan}')], stock=2, el='''<Center y={470}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={24} align="flex-start"><Label6 at={0.05} size={36} color={C6.mint}>DAVE’S CART</Label6><Label6 at={@{a wall mount}} size={52} color={C6.ink}>+ WALL MOUNT</Label6><Label6 at={@{A soundbar}} size={52} color={C6.ink}>+ SOUNDBAR</Label6><Label6 at={@{An HDMI cable}} size={52} color={C6.accent}>+ HDMI CABLE (WITH GOLD)</Label6><Label6 at={@{a protection plan}} size={52} color={C6.ink}>+ PROTECTION PLAN</Label6></Col></div></Center>
<Meme at={@{coffee mug}} out={@{An HDMI cable}} text="sounds like a phone in a mug" y={950} size={58} />'''),
dict(start="A retail consultant in that same", el='''<Center y={520}><Split6 at={0.1} left={{ title: "MARGIN ON THE TV", value: "LOW", icon: "store", color: C6.ink }} right={{ title: "MARGIN ON THE ACCESSORIES", value: "HIGH", icon: "bag", at: @{High margin} }} /></Center>
<Source6>Carol Spieckerman, retail consultant · Star Tribune, 2018</Source6>'''),
dict(start="Translation from corporate", stock=23, clean=True, alt=(24, "The soundbar is"), el='''<Meme at={@{free bread}} out={@{The soundbar is}} text="tv = free bread" y={900} />
<Meme at={@{the steak}} text="soundbar = steak" y={900} />'''),
dict(start="And it works at scale", sfx=[('ep06-counter:0.3', '@{two hundred three}')], stock=1, el='''<Center y={420}><Counter6 to={203} at={@{two hundred three}} dur={0.9} fmt={(v) => Math.round(v) + "M"} size={230} /></Center>
<Center y={620}><Label6 at={@{two hundred three}} size={30}>SHOPPERS · THANKSGIVING WEEKEND 2025 · A RECORD</Label6></Center>
<Source6>National Retail Federation · Dec 2, 2025 · 202.9 million</Source6>'''),
dict(start="Eighty million of them", el='''<Center y={480}><BigNum at={0.1} icon="store" size={230} color={C6.ink} label="WALKED INTO A STORE · BLACK FRIDAY ITSELF">80.3M</BigNum></Center>
<Source6>National Retail Federation · Dec 2, 2025</Source6>'''),
dict(start="Nobody builds a holiday", stock=49, clean=True, el='''<Meme at={@{lose money}} text="not a charity event" y={900} />'''),
dict(start="Quick thing. If you like", sfx=[('ep06-pop:0.3', '@{subscribe}')], stock=37, el='''<Subscribe6 at={@{subscribe}} />
<Center y={880}><Label6 at={@{real discount}} size={40} color={C6.accent}>FREE · AN ACTUAL DISCOUNT</Label6></Center>'''),

# ---------------- ГЛАВА 3 · THE DEADLINE ----------------
dict(start="Third question, and it's the one", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH3, el='''<Center y={540}><In at={0} out={@{Is the price even}} from="fade"><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[{ text: "A different TV", done: true }, { text: "The TV is bait", done: true }, { text: "?" }]} /></div></In></Center>
<Center y={540}><Words text="Is the price even special?" at={@{Is the price even}} size={120} hl={["special?"]} /></Center>'''),
dict(start="In Britain, a consumer group", stock=25, el='''<Center y={300}><Label6 at={@{called Which}} size={48} color={C6.accent}>WHICH? · UK CONSUMER GROUP</Label6></Center>
<Meme at={@{beautifully petty}} text="petty (complimentary)" y={900} size={66} />'''),
dict(start="They tracked a full year", stock=10, el='''<Center y={500}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><BigNum at={0.1} icon="calendar" size={200} label="OF PRICES · MAY 2024 – MAY 2025">12 months</BigNum></div></Center>'''),
dict(start="The latest batch", el='''<Center y={500}><Row gap={220}>
  <BigNum at={0.1} size={240} label="PRODUCTS">175</BigNum>
  <BigNum at={@{eight big}} size={240} color={C6.ink} label="BIG UK RETAILERS">8</BigNum>
</Row></Center>'''),
dict(start="Eighty-three percent were", sfx=[('ep06-pop:0.3', '0.1')], el='''<Center y={470}><Donut6 at={0.1} pct={83} center="83%" size={560} /></Center>
<Center y={900}><Label6 at={@{the same price}} size={38} color={C6.ink}>SAME PRICE OR CHEAPER AT ANOTHER TIME OF YEAR</Label6></Center>
''' + WHICH),
dict(start="And on Black Friday itself, not one", sfx=[('ep06-boom:0.28', '@{not one of those}')], stock=26, el='''<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={18}><Label6 at={0.05} size={36} color={C6.ink}>ON BLACK FRIDAY ITSELF</Label6><In at={@{not one of those}} from="zoom"><Num6 size={300} color={C6.loss}>0</Num6></In><Label6 at={@{not one of those}} size={38} color={C6.ink}>DEALS AT THEIR LOWEST PRICE OF THE YEAR</Label6></Col></div></Center>
''' + WHICH),
dict(start="One Samsung TV was a thousand", sfx=[('ep06-fall:0.25', '@{seven fifty nine}')], el='''<Center y={520}><PriceLine at={0.1} top="£1,039" low="£759" days="CHEAPER ON 134 DAYS · NEXT 6 MONTHS" daysAt={@{a hundred thirty four}} lowAt={@{seven fifty nine}} /></Center>
<Source6>Which? · Samsung 55-inch TV at AO</Source6>'''),
dict(start="America has its own version", stock=54, alt=(36, "found about forty"), el='''<Center y={480}><BigNum at={@{forty percent}} size={240} label="OF TVs WERE CHEAPER AFTER BLACK FRIDAY">≈40%</BigNum></Center>
<Source6>Jim Willcox, Consumer Reports · NBC News, 2015</Source6>'''),
dict(start="After. The day everyone", stock=42, clean=True, el='''<Meme at={@{stopped looking}} text="everyone: gone" y={900} />'''),
dict(start="So the deadline is fake", sfx=[('ep06-stamp:0.35', '@{The urgency}')], stock=28, el='''<Center y={180}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Words text="The urgency is the product." at={@{The urgency}} size={84} hl={["product."]} /></div></Center>
<Center y={840}><Stamp at={0.15} text="deadline: fake" color={C6.accent} size={90} /></Center>'''),

# ---------------- ГЛАВА 4 · THE SCREEN ----------------
dict(start="But none of that explains", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH4, stock=29, el='''<Center y={500}><In at={0} out={@{two hundred twenty eight}} from="fade"><ChapterCard n={4} title="The Screen" /></In></Center>
<Center y={520}><BigNum at={@{two hundred twenty eight}} size={260} label="STILL UNEXPLAINED">$228</BigNum></Center>'''),
dict(start="A real sixty-five inches", stock=30, el='''<Center y={300}><Col gap={22}>
  <Label6 at={0.1} size={44} color={C6.ink}>✓ REAL 65 INCHES</Label6>
  <Label6 at={@{a real brand}} size={44} color={C6.ink}>✓ REAL BRAND</Label6>
  <Label6 at={@{stacked to the ceiling}} size={44} color={C6.ink}>✓ STACKED TO THE CEILING</Label6>
</Col></Center>
<Center y={820}><Words text="How does anybody survive that?" at={@{How does anybody}} size={76} hl={["survive"]} /></Center>'''),
dict(start="For that, forget the store", stock=31, el='''<Center y={860}><Label6 at={@{Read the TV}} size={44} color={C6.accent}>READ THE TV COMPANY'S OWN PAPERWORK</Label6></Center>'''),
dict(start="First, the boring half", stock=5, el='''<Center y={860}><div style={{ padding: "20px 44px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={46} color={C6.ink}>THE BORING HALF: SCREENS GOT CHEAP TO MAKE</Label6></div></Center>'''),
dict(start="An industry analyst put it this way", el='''<Center y={520}><Split6 at={0.2} left={{ title: "2008 · A 32-INCH", value: "under $400", icon: "store", color: C6.ink }} right={{ title: "2018 · A 60-INCH", value: "same price", icon: "store", at: @{a sixty inch} }} /></Center>
<Source6>Paul Gagnon, IHS Markit · Star Tribune, 2018</Source6>'''),
dict(start="But a factory can only cut", el='''<Center y={520}><Words text="Somebody has to want to sell it at a loss." at={0.1} size={96} hl={["want", "loss."]} maxW={1400} /></Center>'''),
dict(start="So here's the fun half", sfx=[('ep06-stamp:0.4', '0.1')], hard=True, el='''<Center y={540}><Words text="The fun half." at={0.05} size={170} hl={["fun"]} /></Center>'''),
dict(start="Vizio. Twenty twenty-three", sfx=[('ep06-pop:0.3', '@{over a billion}')], stock=6, el='''<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={24}><Label6 at={0.05} size={44} color={C6.accent}>VIZIO · ANNUAL REPORT · 2023</Label6><BigNum at={@{over a billion}} icon="store" size={230} color={C6.ink} label="TVs AND SOUNDBARS SOLD">$1.08B</BigNum></Col></div></Center>
''' + VIZ),
dict(start="Gross profit on all that hardware", sfx=[('ep06-fall:0.3', '@{Negative eight}')], el='''<Center y={190}><Words text="Gross profit on all that hardware?" at={0.05} size={76} hl={["hardware?"]} /></Center>
<Center y={580}><BigNum at={@{Negative eight}} size={300} color={C6.loss} label="VIZIO DEVICES · 2023">−$8.6M</BigNum></Center>
''' + VIZ),
dict(start="They lost money making", stock=34, clean=True, el='''<Meme at={@{their name is on}} text="name on the box. loss on the box." y={900} size={62} />'''),
dict(start="Same year, same company, a division", sfx=[('ep06-kaching:0.25', '@{three hundred sixty five}')], el='''<Center y={190}><Words text="Same year. Same company." at={0.05} size={76} /></Center>
<Center y={580}><BigNum at={@{three hundred sixty five}} size={270} color={C6.money} label="GROSS PROFIT · A DIVISION CALLED PLATFORM+">$364.9M</BigNum></Center>
''' + VIZ),
dict(start="Platform Plus is ads", stock=57, el='''<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={24} align="flex-start"><Label6 at={0.05} size={36} color={C6.mint}>PLATFORM+ IS…</Label6><Label6 at={@{is ads}} size={54} color={C6.accent}>ADS</Label6><Label6 at={@{The home screen}} size={54} color={C6.ink}>THE HOME SCREEN</Label6><Label6 at={@{The free channels}} size={54} color={C6.ink}>THE FREE CHANNELS</Label6><Label6 at={@{And licensing data}} size={54} color={C6.accent}>DATA ABOUT WHAT PEOPLE WATCH</Label6></Col></div></Center>'''),
dict(start="Read those two lines again", sfx=[('ep06-boom:0.3', '@{The watching}')], el='''<Center y={540}><LossGain at={0.2} a={{ label: "MAKING THE TVs", value: "−$8.6M" }} b={{ label: "WATCHING YOU WATCH TV", value: "+$364.9M", at: @{The watching} }} /></Center>
''' + VIZ),
dict(start="Roku puts the quiet part", stock=35, el='''<Center y={500}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={26}><Label6 at={0.05} size={40} color={C6.accent}>ROKU · ANNUAL REPORT · 2024</Label6><Words text="“…negative gross margin on devices in an effort to grow our user base…”" at={0.5} size={66} hl={["negative", "grow"]} maxW={1400} /></Col></div></Center>
<Source6>Roku annual report (10-K) · fiscal 2024</Source6>'''),
dict(start="In twenty twenty-four it lost", el='''<Center y={540}><LossGain at={0.2} a={{ label: "ROKU DEVICES · 2024", value: "−$80M" }} b={{ label: "ROKU PLATFORM · 2024", value: "+$1.89B", at: @{one point nine} }} /></Center>
<Source6>Roku annual report (10-K) · fiscal 2024 · gross profit</Source6>'''),
dict(start="How does a TV know", sfx=[('ep06-pop:0.3', '@{called ACR}')], stock=60, el='''<Center y={170}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={40} color={C6.ink}>HOW DOES A TV KNOW WHAT YOU WATCH?</Label6></div></Center>
<Center y={480}><Words text="ACR" at={@{called ACR}} size={240} hl={["ACR"]} /></Center>
<Center y={700}><Label6 at={@{Automatic content}} size={44} color={C6.ink}>AUTOMATIC CONTENT RECOGNITION</Label6></Center>'''),
dict(start="It identifies what's on the screen", stock=50, alt=(44, "That one DVD"), el='''<Center y={300}><Label6 at={0.1} size={40} color={C6.ink}>WHAT'S ON THE SCREEN · FROM ANY INPUT</Label6></Center>
<Center y={620}><Row gap={120}>
  <Label6 at={@{Cable}} size={56} color={C6.accent}>CABLE</Label6>
  <Label6 at={@{Game console}} size={56} color={C6.accent}>GAME CONSOLE</Label6>
  <Label6 at={@{That one DVD}} size={56} color={C6.accent}>THAT ONE DVD</Label6>
</Row></Center>'''),
dict(start="In twenty seventeen, Vizio paid", sfx=[('ep06-boom:0.28', '@{eleven million}')], stock=46, el='''<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={22}><Label6 at={0.05} size={40} color={C6.ink}>2017 · VIZIO SETTLES WITH THE FTC AND NEW JERSEY</Label6><Label6 at={@{two point two}} size={52} color={C6.loss}>$2.2 MILLION</Label6><BigNum at={@{eleven million}} size={210} label="TVs TRACKING WHAT PEOPLE WATCHED · SECOND BY SECOND">11 million</BigNum></Col></div></Center>
<Source6>FTC press release · Feb 6, 2017</Source6>'''),
dict(start="These days Vizio has to ask", clean=True, stock=36, el='''<Meme at={@{speedrun}} text="ok. ok. ok. ok. ok." y={900} />'''),
dict(start="Now do the math", sfx=[('ep06-pop:0.3', '@{thirty two dollars}')], el='''<Center y={190}><Words text="Now do the math." at={0.05} size={84} hl={["math."]} /></Center>
<Center y={580}><BigNum at={@{thirty two dollars}} icon="coin" size={260} label="REVENUE PER ACTIVE ACCOUNT · PER YEAR">$32</BigNum></Center>
<Source6>Vizio Q4 2023 results · SmartCast ARPU $32.48</Source6>'''),
dict(start="Keep the TV seven years", sfx=[('ep06-counter:0.3', '@{two hundred twenty four}'), ('ep06-boom:0.3', '@{The TV cost}')], el='''<Center y={380}><Words text="$32 × 7 years = $224" at={@{seven years}} times={[@{seven years}, @{seven years}, @{seven years}, @{seven years}, @{two hundred twenty four}, @{two hundred twenty four}]} size={130} hl={["$224"]} /></Center>
<Center y={640}><Label6 at={@{The TV cost}} size={64} color={C6.ink}>THE TV COST $228</Label6></Center>
<Center y={900}><Label6 at={@{seven years}} size={26} color={C6.mint}>OUR CALCULATION · REVENUE, NOT PROFIT · 7 YEARS IS OUR ASSUMPTION</Label6></Center>'''),
dict(start="The price tag isn't what", stock=18, el='''<Center y={170}><div style={{ padding: "20px 50px", borderRadius: 22, background: C6.panel }}><Words text="It’s the down payment." at={0.3} size={104} hl={["down", "payment."]} /></div></Center>
<Center y={930}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Label6 at={@{You pay the rest}} size={46} color={C6.accent}>YOU PAY THE REST IN ATTENTION</Label6></div></Center>'''),
dict(start="That's why even the cheap ones", sfx=[('ep06-scratch:0.3', '@{Like a freeloader}')], stock=12, clean=True, el='''<Meme at={@{A dumb TV}} out={@{Like a freeloader}} text="dumb tv: just sits there" y={900} size={66} />
<Meme at={@{Like a freeloader}} text="unemployed" y={900} />'''),
dict(start="And here's the layer I saved", sfx=[('ep06-pop:0.3', '0.4')], el='''<Center y={540}><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[''' + L1 + ", " + L2 + ", " + Q + ''']} note="+ the price comes back" /></div></Center>'''),
dict(start="In December twenty twenty-four", sfx=[('ep06-kaching:0.25', '@{two point three billion}'), ('ep06-boom:0.35', '@{By Walmart}')], stock=29, el='''<Center y={460}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={20}><Label6 at={0.05} size={44} color={C6.ink}>DECEMBER 2024 · VIZIO WAS BOUGHT</Label6><BigNum at={@{two point three billion}} size={250} punch={false} label="PURCHASE PRICE">$2.3B</BigNum></Col></div></Center>
<Center y={920}><Stamp at={@{By Walmart}} text="by Walmart" color={C6.accent} size={110} /></Center>'''),
dict(start="The store on the front of the ad", stock=39, el='''<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={30}><Row gap={50}><Label6 at={0.05} size={54} color={C6.ink}>THE STORE</Label6><Label6 at={@{owns the TV}} size={54} color={C6.accent}>→ THE TV</Label6></Row><Row gap={50}><Label6 at={@{the home screen}} size={54} color={C6.accent}>→ THE HOME SCREEN</Label6><Label6 at={@{the ad business}} size={54} color={C6.accent}>→ THE ADS</Label6></Row><Label6 at={@{your receipts}} size={44} color={C6.ink}>+ IT ALREADY SEES YOUR RECEIPTS</Label6></Col></div></Center>'''),
dict(start="I can't see what that one TV", stock=32, el='''<Center y={860}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={42} color={C6.ink}>THAT TV'S COST: UNKNOWN · THE BUSINESS PLAN: PUBLIC</Label6></div></Center>'''),
dict(start="So when a sixty-five-inch Vizio", sfx=[('ep06-boom:0.35', '@{a billboard}')], stock=45, alt=(38, "a billboard"), el='''<Center y={300}><In at={0.1} out={@{a billboard}} from="zoom"><div style={{ padding: "10px 60px", borderRadius: 22, background: C6.panel }}><Num6 size={200}>$228</Num6></div></In></Center>
<Meme at={@{a billboard}} out={@{carry it to the car}} text="a billboard. in your living room." y={900} size={66} />
<Meme at={@{carry it to the car}} text="and you carried it" y={900} />'''),

# ---------------- ФИНАЛ ----------------
dict(start="Back to Dave", sfx=[('ep06-whoosh:0.25', '0.02')], clean=True, stock=40, el='''<Meme at={@{slightly crooked}} text="slightly crooked" y={900} />'''),
dict(start="He thinks he beat the system", stock=49, clean=True, el='''<Meme at={0.2} text="“saved” a few hundred bucks" y={900} size={66} />'''),
dict(start="What he may have actually bought", sfx=[('ep06-pop:0.3', '@{a model built}'), ('ep06-pop:0.3', '@{A soundbar}'), ('ep06-pop:0.3', '@{And a screen}')], el='''<Center y={540}><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[{ text: "A different TV", done: true, at: @{a model built} }, { text: "The TV is bait", done: true, at: @{A soundbar} }, { text: "The screen pays rent", done: true, at: @{And a screen} }]} note="+ the price comes back" /></div></Center>'''),
dict(start="None of this means", stock=59, el='''<Center y={170}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={40} color={C6.ink}>A GIANT SCREEN FOR THE PRICE OF DINNER FOR FOUR</Label6></div></Center>
<Center y={900}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Words text="Buy it like you know the game." at={@{Just buy it}} size={76} hl={["game."]} /></div></Center>'''),
dict(start="Search the exact model number", sfx=[('ep06-pop:0.3', '0.1'), ('ep06-pop:0.3', '@{Look up}'), ('ep06-pop:0.3', '@{find the viewing}')], stock=19, el='''<Center y={480}><Col gap={34} align="flex-start">
  <Label6 at={0.1} size={48} color={C6.accent}>1 · SEARCH THE EXACT MODEL NUMBER</Label6>
  <Label6 at={@{walk away}} size={36} color={C6.ink}>ONLY ADS IN THE RESULTS? WALK AWAY.</Label6>
  <Label6 at={@{Look up}} size={48} color={C6.accent}>2 · LOOK UP THE PRICE HISTORY</Label6>
  <Label6 at={@{find the viewing}} size={48} color={C6.accent}>3 · VIEWING DATA: SWITCH IT OFF</Label6>
</Col></Center>'''),
dict(start="The discount was never the point", sfx=[('ep06-stamp:0.45', '@{You were}')], hard=True, el='''<Center y={400}><Words text="The discount was never the point." at={0.05} size={100} hl={["never"]} maxW={1500} /></Center>
<Center y={720}><Stamp at={@{You were}} text="you were" color={C6.accent} size={140} /></Center>'''),
dict(start="What's the worst Black Friday deal", stock=1, el='''<Center y={440}><Words text="Your worst Black Friday deal?" at={0.1} size={100} hl={["worst"]} /></Center>
<Center y={760}><Label6 at={@{Tell me}} size={44} color={C6.accent}>TELL ME IN THE COMMENTS</Label6></Center>'''),
dict(start="And if you want the same trick", end_pad=10.0, stock=20, el='''<EndCard6 at={0.4} next="How Supermarkets Make Money (It's Not the Groceries)" />
<Center y={1000}><Label6 at={@{two cents}} size={36} color={C6.accent}>THAT ONE STARTS WITH 2¢</Label6></Center>'''),
]
