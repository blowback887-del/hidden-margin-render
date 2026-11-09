# Ep06 «Gas Is the Bait» — план сцен для cloud/gen/build.py.
# Визуальная идея выпуска: «разрезанный галлон» (канистра на доске, от неё отпадают ломти денег) →
# сквозная карта «Куда уходит ваш галлон» (в хуке, глава 1, финал).
# Трейлер 0–40 с: 8 вопросов-обещаний в рамке, склейки 2–4 с → титр «Gas Is the Bait».
# Главы по нарастанию: 1 «Десять центов» → 2 «Табло» → 3 «Внутри» → 4 «Пицца» (главное открытие у конца).
# Бытовая метафора: бензин — рекламный щит, за который платит сам покупатель.
# Приёмы банка: стоп-кадр+удар, мемная подпись, перевод с корпоративного, штамп, счётчик с размытием,
# разделённый экран, возврат к первому кадру в финале. Гэги 1–2 с поверх спокойной основы.
# Номера стока = порядок в cloud/broll/ep06.json.

EP = dict(
    comp="Ep06Gas",
    words="src/videos/ep06-gas-words.json",
    text="cloud/voice/ep06-text",
    parts=7,
    broll="cloud/broll/ep06.json",
    audio="audio/ep06-voiceover.mp3",
music=[
        dict(**{'from':0.0}, to=42.4, file="audio/ep06/music-trailer.mp3", vol=0.15),
        dict(**{'from':44.3}, to=173.9, file="audio/ep06/music-ch1.mp3", vol=0.12),
        dict(**{'from':173.4}, to=289.6, file="audio/ep06/music-ch2.mp3", vol=0.12),
        dict(**{'from':289.0}, to=382.5, file="audio/ep06/music-ch3.mp3", vol=0.12),
        dict(**{'from':382.0}, to=504.6, file="audio/ep06/music-ch4.mp3", vol=0.12),
        dict(**{'from':504.2}, to=600.0, file="audio/ep06/music-finale.mp3", vol=0.12),
    ],
    lens={1: 10.0, 2: 10.0, 3: 10.0, 4: 10.0, 5: 10.0, 6: 10.0, 7: 7.23, 8: 8.87, 9: 10.0, 10: 10.0, 11: 10.0, 12: 10.0, 13: 10.0, 14: 10.0, 15: 10.0, 16: 10.0, 17: 10.0, 18: 10.0, 19: 9.77, 20: 10.0, 21: 10.0, 22: 10.0, 23: 10.0, 24: 8.3, 25: 10.0, 26: 10.0, 27: 10.0, 28: 10.0, 29: 10.0, 30: 10.0, 31: 10.0, 32: 10.0, 33: 10.0, 34: 7.67, 35: 10.0, 36: 10.0, 37: 7.2, 38: 10.0, 39: 10.0, 40: 10.0, 41: 10.0, 42: 10.0, 43: 10.0, 44: 10.0, 45: 10.0, 46: 10.0, 47: 10.0, 48: 8.73, 49: 7.2, 50: 10.0, 51: 10.0, 52: 7.0},
)

CH1, CH2, CH3, CH4 = (1, "The Dime"), (2, "The Sign"), (3, "Inside"), (4, "The Pizza")
NACS = "<Source6>NACS · Who Makes Money Selling Gas?</Source6>"
NACS25 = "<Source6>NACS State of the Industry · 2025 data</Source6>"
TENK = "<Source6>Casey's 10-K · fiscal year ended Apr 30, 2026</Source6>"

S = [
# ---------------- ТРЕЙЛЕР ----------------
dict(start="Right now, somewhere in America", sfx=[('ep06-pump:0.35', '0.1')], stock=2, clean=True, el='''<TrailerFrame />
<Meme at={@{these people are robbing}} text="these people are robbing me" y={930} />'''),
dict(start="Here's the twist", sfx=[('ep06-coin:0.35', '@{less than three bucks}')], stock=1, el='''<TrailerFrame />
<Center y={500}><BigNum at={@{less than three bucks}} icon="coin" size={210} label="WHAT THE STATION KEEPS · WHOLE 20-GALLON TANK">$2.60</BigNum></Center>
<Center y={860}><Label6 at={@{whole twenty gallon}} size={24} color={C6.ink}>OUR CALCULATION · 20 GAL × ~13¢</Label6></Center>'''),
dict(start="Almost half of drivers", sfx=[('ep06-pop:0.3', '0.1'), ('ep06-pop:0.3', '@{two dollars}')], stock=20, el='''<TrailerFrame />
<Center y={520}><Row gap={120}>
  <BigNum at={0.1} size={170} color={C6.ink} label="OF DRIVERS THINK">45%</BigNum>
  <BigNum at={@{two dollars}} size={170} label="PROFIT · PER GALLON">$2+</BigNum>
</Row></Center>
<Source6>NACS consumer survey</Source6>'''),
dict(start="So how do a hundred", sfx=[('ep06-counter:0.3', '@{hundred and twenty two}')], stock=8, el='''<TrailerFrame />
<Center y={500}><Counter6 to={122620} at={@{hundred and twenty two}} dur={1.0} fmt={(v) => Math.round(v).toLocaleString("en-US")} size={210} /></Center>
<Center y={680}><Label6 at={@{hundred and twenty two}} size={28}>GAS STATIONS · AND THEY STAY OPEN</Label6></Center>
<Source6>NACS / NIQ store count · Jan 2026</Source6>'''),
dict(start="Why does every price", sfx=[('ep06-pop:0.35', '@{nine tenths}')], stock=3, el='''<TrailerFrame />
<Center y={520}><PriceSign at={0.05} price="$4.16" hlFrac={@{nine tenths}} /></Center>'''),
dict(start="Why do prices shoot", sfx=[('ep06-rocket:0.25', '@{shoot up}'), ('ep06-fall:0.25', '@{float down}')], stock=22, alt=(23, "float down"), clean=True, el='''<TrailerFrame />
<Center x={520} y={540}><Label6 at={@{shoot up}} size={44} color={C6.loss} out={@{float down}}>UP LIKE A ROCKET</Label6></Center>
<Center x={1400} y={540}><Label6 at={@{float down}} size={44} color={C6.money}>DOWN LIKE A FEATHER</Label6></Center>'''),
dict(start="Why does the station care", stock=5, el='''<TrailerFrame />
<Center y={540}><Words text="Your coffee > your gas?" at={@{your coffee}} size={110} hl={["coffee"]} /></Center>'''),
dict(start="And how did one tiny", sfx=[('ep06-boom:0.3', '@{fifth biggest}')], stock=52, alt=(7, "fifth biggest"), el='''<TrailerFrame />
<Center y={250}><Label6 at={@{in Iowa}} size={30} color={C6.ink}>ONE TINY GAS STATION · IOWA</Label6></Center>
<Center y={560}><BigNum at={@{fifth biggest}} icon="pizza" size={220} label="PIZZA CHAIN IN AMERICA">#5</BigNum></Center>'''),
dict(start="Because the gas was never", stock=4, el='''<TrailerFrame />
<Center y={540}><Words text="The gas was never the business." at={@{the gas was never}} size={100} hl={["business."]} /></Center>'''),
dict(start="The gas is the bait", sfx=[('ep06-stamp:0.4', '0.05')], hard=True, el='''<Center y={520}><TitleCard at={0.05} title="Gas Is the Bait" hl={["Bait"]} /></Center>'''),

# ---------------- ГЛАВА 1 · THE DIME ----------------
dict(start="Meet Mike", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH1, stock=31, el='''<Center y={500}><In at={0} out={@{He owns one}} from="fade"><ChapterCard n={1} title="The Dime" /></In></Center>
<Center y={560}><NameCard6 at={@{He owns one}} name="Mike" role="MADE UP · HIS NUMBERS ARE REAL" icon="pump" /></Center>
<Center y={780}><Label6 at={@{off a highway}} size={26} color={C6.ink}>ONE STATION · OFF A HIGHWAY · OHIO</Label6></Center>'''),
dict(start="His sign says four dollars", stock=3, el='''<Center y={500}><PriceSign at={0.05} price="$4.17" /></Center>
<Center y={820}><Label6 at={@{national average}} size={26}>≈ U.S. AVERAGE · EARLY NOVEMBER</Label6></Center>
<Source6>AAA national average · Nov 1, 2026</Source6>'''),
dict(start="Mike looks rich", sfx=[('ep06-scratch:0.3', '@{Mike is not rich}')], stock=9, el='''<Meme at={@{Mike is not rich}} text="me “owning” a gas station" y={900} />'''),
dict(start="Let's cut one gallon open", sfx=[('ep06-pop:0.25', '@{crude oil}'), ('ep06-pop:0.25', '@{refinery takes}'), ('ep06-pop:0.25', '@{Taxes take}'), ('ep06-coin:0.3', "@{What's left for Mike}")], stock=10, alt=(11, "The refinery takes"), dim=0.15, el='''<GallonCutter at={0.1} slices={[
  { at: @{crude oil}, label: "CRUDE OIL", value: "$1.85", frac: 0.595, color: "#3b4a50" },
  { at: @{refinery takes}, label: "REFINERY", value: "40¢", frac: 0.13, color: C6.blue },
  { at: @{Taxes take}, label: "TAXES", value: "≈51¢", frac: 0.164, color: C6.mint },
  { at: @{What's left for Mike}, label: "MIKE'S MARKUP", value: "35¢", frac: 0.113, color: C6.accent },
]} />
<Center y={1000}><Label6 at={@{Federal tax alone}} out={@{What's left}} size={22} color={C6.ink}>FEDERAL TAX 18.4¢ · NOT RAISED SINCE 1993</Label6></Center>
<Source6>NACS · example gallon at $3.11</Source6>'''),
dict(start="Thirty five cents! Mike's", stock=14, clean=True, el='''<Meme at={@{Mike's getting}} text="Mike's boat (pending)" y={900} />'''),
dict(start="Not so fast", stock=13, alt=(15, "Then credit card fees"), el='''<Center y={300}><BigNum at={0.05} size={150} punch={false} label="MIKE'S MARKUP">35¢</BigNum></Center>
<Center y={640}><Col gap={26}>
  <Label6 at={@{Six cents}} size={44} color={C6.loss}>−6¢ · TRUCK DELIVERY</Label6>
  <Label6 at={@{About eight cents}} size={44} color={C6.loss}>−8.4¢ · CARD FEES (2023)</Label6>
</Col></Center>
<Source6>NACS</Source6>'''),
dict(start="So on average, the card", stock=16, el='''<CorpSub at={@{Without owning}} corp="Interchange & processing fees" human="We exist. Pay us." />'''),
dict(start="Across the industry last year", sfx=[('ep06-counter:0.3', '@{twenty one billion}'), ('ep06-stamp:0.4', '@{Fees On taxes}')], stock=45, el='''<Center y={420}><Counter6 to={21.3} at={@{twenty one billion}} fmt={(v) => "$" + v.toFixed(1) + "B"} size={200} /></Center>
<Center y={580}><Label6 at={@{twenty one billion}} size={28}>CARD FEES · 2025 · A RECORD</Label6></Center>
<Center y={760}><Label6 at={@{four and a half billion}} size={34} color={C6.loss}>≈$4.6B OF IT · CHARGED ON TAXES</Label6></Center>
<Center y={900}><Stamp at={@{Fees On taxes}} text="fees on taxes" /></Center>
<Source6>NACS · 2025</Source6>'''),
dict(start="Then the lights", stock=48, el='''<Center y={520}><Row gap={110}>
  <Col><IconIn at={0.05} name="building" size={130} color={C6.ink} /><Label6 at={0.05} size={24}>LIGHTS</Label6></Col>
  <Col><IconIn at={@{the staff}} name="person" size={130} color={C6.ink} /><Label6 at={@{the staff}} size={24}>STAFF</Label6></Col>
  <Col><IconIn at={@{the pumps}} name="pump" size={130} color={C6.ink} /><Label6 at={@{the pumps}} size={24}>WEAR</Label6></Col>
  <Col><IconIn at={@{drives off}} name="car" size={130} color={C6.loss} /><Label6 at={@{drives off}} size={24} color={C6.loss}>DRIVE-OFFS</Label6></Col>
</Row></Center>'''),
dict(start="What Mike actually keeps", sfx=[('ep06-coin:0.35', '@{about thirteen cents}')], el='''<Center y={480}><BigNum at={@{about thirteen cents}} icon="coin" size={260} label="WHAT MIKE KEEPS · PER GALLON">≈13¢</BigNum></Center>
<Center y={800}><Label6 at={@{On a good day}} size={30} color={C6.ink}>ON A GOOD DAY: A DIME AND CHANGE</Label6></Center>
<Source6>NACS · net margin 10–15¢</Source6>'''),
dict(start="Now do the math", stock=17, el='''<Center y={540}><Words text="Now: your whole year." at={0.1} size={110} hl={["year."]} /></Center>'''),
dict(start="The average car burns", sfx=[('ep06-kaching:0.25', '@{sixty five dollars}')], stock=50, el='''<Center y={330}><Label6 at={@{five hundred gallons}} size={36} color={C6.ink}>500+ GALLONS A YEAR × 13¢</Label6></Center>
<Center y={540}><BigNum at={@{sixty five dollars}} icon="coin" size={220} color={C6.money} label="MIKE'S PROFIT FROM YOU · PER YEAR">≈$65</BigNum></Center>
<Center y={850}><Label6 at={@{All year}} size={24}>OUR CALCULATION · NACS DATA</Label6></Center>'''),
dict(start="At early November prices", stock=20, el='''<Center y={500}><BigNum at={@{one tank}} icon="gallon" size={200} label="$65 ÷ $4.17 ≈ 15.6 GALLONS">1 TANK</BigNum></Center>'''),
dict(start="If he really made two", sfx=[('ep06-scratch:0.3', '@{not worth a thousand}')], el='''<Center y={560}><TwoBars at={@{two dollars a gallon}} a={{ label: "WHAT DRIVERS IMAGINE", value: "$1,000", v: 1000 }} b={{ label: "REALITY", value: "$65", v: 65, at: @{You are not} }} /></Center>
<Meme at={@{not worth a thousand}} text="yep. that's you." y={140} size={70} />'''),
dict(start="So if the gallon barely pays", stock=3, el='''<Center y={540}><Words text="The only thing he controls: the sign." at={@{the only thing}} size={96} hl={["sign."]} /></Center>'''),

# ---------------- ГЛАВА 2 · THE SIGN ----------------
dict(start="Look closely at any price", sfx=[('ep06-whoosh:0.25', '0.02'), ('ep06-pop:0.3', '@{nine tenths}')], tag=CH2, el='''<Center y={520}><In at={0} out={@{Four seventeen}} from="fade"><ChapterCard n={2} title="The Sign" /></In></Center>
<Center y={540}><In at={@{Four seventeen}} from="zoom"><PriceSign at={@{Four seventeen}} price="$4.17" hlFrac={@{nine tenths}} scale={1.25} /></In></Center>'''),
dict(start="Nobody in history", stock=18, clean=True, el='''<Meme at={@{under the couch}} text="looking for 9/10 of a cent" y={900} />'''),
dict(start="It started in the nineteen thirties", sfx=[('ep06-coin:0.3', '@{one cent}')], stock=19, sepia=True, el='''<Center y={300}><Label6 at={@{nineteen thirty two}} size={30} color={C6.ink}>REVENUE ACT OF 1932</Label6></Center>
<Center y={540}><BigNum at={@{one cent}} size={220} label="FIRST FEDERAL GAS TAX · PER GALLON">1¢</BigNum></Center>'''),
dict(start="Back then gas cost", stock=33, sepia=True, el='''<Center y={480}><BigNum at={@{less than twenty}} size={220} color={C6.ink} label="A GALLON · EARLY 1930s">&lt;20¢</BigNum></Center>
<Center y={800}><Label6 at={@{whole penny}} size={36} color={C6.loss}>+1¢ = A HUGE JUMP</Label6></Center>'''),
dict(start="The tax grew", el='''<Center y={160}><Label6 at={@{by the seventies}} size={28}>9/10 BECOMES STANDARD · 1970s</Label6></Center>
<Center y={500}><Row gap={90}><PriceSign at={@{four sixteen}} price="$4.17" frac="" scale={0.8} /><PriceSign at={@{four sixteen}} price="$4.16" scale={0.8} /></Row></Center>
<Center y={880}><Words text="Feels cheaper." at={@{just feels cheaper}} size={90} hl={["cheaper."]} /></Center>'''),
dict(start="And for Mike, that tiny", el='''<Center y={520}><Donut6 at={@{up to a tenth}} pct={10} center="≤10%" label="OF FUEL PROFIT" /></Center>
<Source6>NACS · fractions of a penny</Source6>'''),
dict(start="Iowa once banned it", sfx=[('ep06-stamp:0.4', '@{banned it}'), ('ep06-stamp:0.35', '@{the ban was gone}')], stock=21, el='''<Center y={420}><Stamp at={@{banned it}} text="banned · Iowa, 1980s" out={@{the ban was gone}} /></Center>
<Center y={420}><Stamp at={@{the ban was gone}} text="ban repealed" color={C6.money} rotate={6} /></Center>
<Center y={760}><Words text="The nine-tenths won." at={@{The nine tenths won}} size={90} hl={["won."]} /></Center>'''),
dict(start="The second trick", el='''<Center y={420}><Row gap={160}><IconIn at={0.1} name="rocket" size={200} color={C6.loss} /><IconIn at={0.4} name="feather" size={200} color={C6.money} /></Row></Center>
<Center y={760}><Words text="It's physics. Kind of." at={@{It's physics}} size={84} hl={["Kind"]} /></Center>'''),
dict(start="This year, the national average", sfx=[('ep06-rocket:0.22', '@{two seventy nine}'), ('ep06-fall:0.22', '@{But when prices fall}')], el='''<Center y={500}><RocketFeather at={@{two seventy nine}} fall={@{But when prices fall}} /></Center>
<Center y={150}><Label6 at={@{drop to zero}} out={@{But when prices}} size={32} color={C6.loss}>MIKE'S 13¢ → 0¢ (OR LESS)</Label6></Center>
<Center y={150}><Label6 at={@{A federal study}} size={30} color={C6.ink}>FTC STUDY, 2010 · UP 4×+ FASTER THAN DOWN</Label6></Center>
<Center y={930}><Words text="“Rockets and feathers.”" at={@{rockets and feathers}} size={70} hl={["feathers.”"]} /></Center>
<Source6>AAA national average, 2026</Source6>'''),
dict(start="So here's a fun one", stock=23, el='''<Center y={540}><Col gap={30}><Words text="Prices falling" at={@{as prices came down}} size={96} /><Words text="= wider margins" at={@{margins get wider}} size={110} hl={["wider"]} /></Col></Center>'''),
dict(start="The cheaper your gas gets", stock=24, clean=True, el='''<Meme at={@{the happier Mike}} text="Mike, watching prices fall" y={900} />'''),
dict(start="If this is changing", sfx=[('ep06-pop:0.3', '@{hit subscribe}')], stock=1, el='''<Subscribe6 at={@{hit subscribe}} />
<Center y={540}><Words text="One business you use every day. Every week." at={@{Every week}} size={72} hl={["Every"]} /></Center>'''),
dict(start="But even feathers", el='''<Center y={540}><Words text="So where does the money come from?" at={@{So where}} size={96} hl={["money"]} /></Center>'''),

# ---------------- ГЛАВА 3 · INSIDE ----------------
dict(start="Walk inside", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH3, stock=25, el='''<Center y={540}><ChapterCard n={3} title="Inside" /></Center>'''),
dict(start="More than half the people", sfx=[('ep06-pop:0.3', '@{Fifty seven percent}')], stock=34, el='''<Center y={520}><BigNum at={@{Fifty seven percent}} icon="store" size={230} label="OF PEOPLE WHO FILL UP · GO INSIDE">57%</BigNum></Center>
''' + NACS),
dict(start="That walk is the whole", el='''<Center y={540}><Words text="That walk is the whole business plan." at={0.05} size={96} hl={["walk", "plan."]} /></Center>'''),
dict(start="Here's last year across", sfx=[('ep06-kaching:0.22', '@{sixty one percent}')], el='''<Center y={540}><Split6 at={@{sixty five percent}} left={{ title: "FUEL: 65% OF SALES → PROFIT", value: "39%", icon: "pump", color: C6.ink }} right={{ title: "THE STORE → PROFIT", value: "≈61%", icon: "store", at: @{sixty one percent} }} /></Center>
''' + NACS25),
dict(start="Same station", stock=26, el='''<Center y={540}><Words text="The part you barely notice makes most of the money." at={@{The part you}} size={84} maxW={1500} hl={["money."]} /></Center>'''),
dict(start="Let that sink in", stock=30, alt=(44, "The candy aisle"), clean=True, el='''<Meme at={@{side hustle}} out={@{The candy aisle}} text="gas: the side hustle" y={900} />
<Meme at={@{The candy aisle}} text="the candy aisle: CEO" y={900} />'''),
dict(start="And the best part", stock=27, el='''<Center y={900}><Label6 at={@{behind the counter}} size={40} color={C6.accent}>BEHIND THE COUNTER</Label6></Center>'''),
dict(start="Food — coffee", stock=28, el='''<Center y={540}><Split6 at={@{twenty eight percent}} left={{ title: "FOOD · SHARE OF INSIDE SALES", value: "28.5%", icon: "coffee", color: C6.ink }} right={{ title: "SHARE OF INSIDE PROFIT", value: "38.9%", icon: "coin", at: @{thirty nine percent} }} /></Center>
''' + NACS25),
dict(start="Think about what that means", stock=29, el='''<Center y={480}><Words text="To Mike, the gas is an ad." at={@{the gas is an ad}} size={100} hl={["ad."]} /></Center>
<Center y={700}><Label6 at={@{that you pay for}} size={34} color={C6.ink}>A GIANT GLOWING AD · THAT YOU PAY FOR</Label6></Center>'''),
dict(start="You paid for the commercial", sfx=[('ep06-stamp:0.4', '0.15')], stock=15, clean=True, el='''<Center y={540}><Stamp at={0.15} text="paid advertisement" color={C6.accent} size={96} /></Center>'''),
dict(start="And the ad is slowly shrinking", stock=50, el='''<Center y={480}><Label6 at={@{buy less fuel}} size={44} color={C6.loss}>GASOLINE USE ↓ · 2026–2027</Label6></Center>
<Center y={640}><Label6 at={@{Cars keep going}} size={30} color={C6.ink}>CARS GO FARTHER ON EVERY GALLON</Label6></Center>
<Source6>EIA forecast</Source6>'''),
dict(start="So gas stations are quietly", stock=31, clean=True, el='''<Meme at={@{Restaurants with}} text="restaurants with a really big parking lot" y={880} size={66} />'''),
dict(start="Most stations stop at hot dogs", stock=47, alt=(6, "And it started"), el='''<Center y={880}><Label6 at={@{twelve thousand}} size={34} color={C6.ink}>A TOWN OF ~12,000 PEOPLE</Label6></Center>'''),

# ---------------- ГЛАВА 4 · THE PIZZA ----------------
dict(start="Nineteen sixty eight", sfx=[('ep06-whoosh:0.25', '0.02')], tag=CH4, stock=33, sepia=True, el='''<Center y={500}><In at={0} out={@{Boone Iowa}} from="fade"><ChapterCard n={4} title="The Pizza" /></In></Center>
<Center y={460}><Words text="Boone, Iowa · 1968" at={@{Boone Iowa}} size={110} hl={["1968"]} /></Center>
<Center y={660}><Label6 at={@{three bay}} size={32} color={C6.ink}>DON LAMBERTI BUYS A 3-BAY SERVICE STATION</Label6></Center>'''),
dict(start="The idea came from", stock=19, sepia=True, el='''<Center y={380}><NameCard6 at={@{Kurvin Fish}} name="Kurvin Fish" role="FUEL SUPPLIER · THE IDEA" /></Center>
<Center y={700}><In at={@{K.C.}} out={@{Casey's}} from="zoom"><Num6 size={170}>K.C.</Num6></In></Center>
<Center y={700}><BigNum at={@{Casey's}} size={170}>CASEY'S</BigNum></Center>'''),
dict(start="It works", stock=39, el='''<Center y={540}><Words text="Small towns nobody else wanted." at={@{In small towns}} size={96} hl={["Small", "towns"]} /></Center>'''),
dict(start="Then, in nineteen eighty four", sfx=[('ep06-pop:0.3', '@{nineteen eighty four}')], stock=35, alt=(36, "At a gas station"), el='''<Center y={500}><BigNum at={@{nineteen eighty four}} icon="pizza" size={230} label="PIZZA · MADE IN THE STORE · AT A GAS STATION">1984</BigNum></Center>'''),
dict(start="That sounds like a dare", sfx=[('ep06-counter:0.3', '@{eighty five stores}')], stock=51, el='''<Center y={500}><Counter6 to={85} at={@{eighty five stores}} dur={0.8} fmt={(v) => Math.round(v) + ""} size={240} /></Center>
<Center y={690}><Label6 at={@{eighty five stores}} size={30}>STORES SELLING PIZZA · END OF 1985</Label6></Center>'''),
dict(start="Later came a breakfast pizza", stock=38, clean=True, el='''<Center y={150}><Label6 at={@{sausage gravy}} size={36} color={C6.ink}>SAUSAGE GRAVY · ON A PIZZA</Label6></Center>
<Meme at={@{balanced breakfast}} text="a balanced breakfast" y={900} />'''),
dict(start="Today Casey's has about", stock=32, el='''<Center y={480}><BigNum at={@{two thousand nine hundred}} icon="store" size={210} label="STORES · 19 STATES">≈2,950</BigNum></Center>
<Center y={800}><Label6 at={@{Nearly half}} size={30} color={C6.ink}>NEARLY HALF · IN TOWNS OF ≤5,000 PEOPLE</Label6></Center>'''),
dict(start="And by sales, Bank", sfx=[('ep06-boom:0.3', '@{fifth biggest}')], stock=40, el='''<Center y={500}><BigNum at={@{fifth biggest}} icon="pizza" size={260} label="PIZZA CHAIN IN AMERICA">#5</BigNum></Center>
<Source6>Bank of America Research · via Fortune</Source6>'''),
dict(start="A gas station. Now open", sfx=[('ep06-stamp:0.4', '0.05')], stock=41, el='''<Center y={480}><Stamp at={0.05} text="a gas station" color={C6.accent} size={110} out={@{Now open}} /></Center>
<Center y={540}><Label6 at={@{annual report}} size={40} color={C6.ink}>CASEY'S ANNUAL REPORT · FY2026</Label6></Center>'''),
dict(start="Last fiscal year, Casey's sold", sfx=[('ep06-receipt:0.25', '@{three and a half billion}')], stock=48, el='''<Center y={520}><Row gap={140}>
  <BigNum at={@{three and a half billion}} size={170} color={C6.ink} label="GALLONS SOLD">3.52B</BigNum>
  <BigNum at={@{forty three cents}} size={170} label="KEPT PER GALLON">≈43¢</BigNum>
</Row></Center>
''' + TENK),
dict(start="On prepared food and drinks", stock=44, el='''<Center y={480}><BigNum at={@{fifty nine cents}} icon="pizza" size={240} label="KEPT FROM EVERY $1 · FOOD & DRINKS">≈59¢</BigNum></Center>
<Center y={800}><Label6 at={@{before running}} size={26} color={C6.ink}>BEFORE THE COST OF RUNNING THE STORE</Label6></Center>
''' + TENK),
dict(start="Let's make that real", el='''<Center y={540}><Split6 at={@{Ten dollars of gas}} left={{ title: "$10 OF GAS ≈ 2.4 GALLONS", value: "≈$1", icon: "pump", color: C6.ink }} right={{ title: "$10 OF PIZZA", value: "≈$5.86", icon: "pizza", at: @{Ten dollars of pizza} }} /></Center>
<Source6>Our calculation · Casey's FY2026 margins · AAA $4.17</Source6>'''),
dict(start="Same customer", sfx=[('ep06-boom:0.28', '@{Almost six times}')], el='''<Center y={520}><BigNum at={@{Almost six times}} size={300}>≈6×</BigNum></Center>
<Center y={780}><Label6 at={@{Same ten bucks}} size={30} color={C6.ink}>SAME CUSTOMER · SAME TEN BUCKS</Label6></Center>'''),
dict(start="Over the last three years", el='''<Center y={150}><Label6 at={0.1} size={28}>CASEY'S · FOOD + STORE ITEMS · LAST 3 FISCAL YEARS</Label6></Center>
<Center y={560}><Row gap={160}>
  <Col><Donut6 at={@{thirty six percent}} pct={36} center="36%" color={C6.ink} /><Label6 at={@{thirty six percent}} size={26}>OF REVENUE</Label6></Col>
  <Col><Donut6 at={@{sixty three percent}} pct={63} center="63%" /><Label6 at={@{sixty three percent}} size={26}>OF GROSS PROFIT</Label6></Col>
</Row></Center>
''' + TENK),
dict(start="Last fiscal year Casey's made", sfx=[('ep06-kaching:0.25', '@{seven hundred and fourteen}')], stock=43, el='''<Center y={460}><BigNum at={@{seven hundred and fourteen}} size={240} color={C6.money} label="NET INCOME · FY2026">$714M</BigNum></Center>
<Center y={780}><Label6 at={@{S and P}} size={34} color={C6.ink}>JOINED THE S&amp;P 500 · APRIL 2026</Label6></Center>
''' + TENK),
dict(start="So is Casey's a gas station", stock=7, clean=True, el='''<Meme at={@{happens to sell gas}} text="parking lot: very large" y={900} />'''),

# ---------------- ФИНАЛ ----------------
dict(start="Remember our guy at the pump", stock=2, clean=True, el='''<Meme at={@{being robbed}} text="these people are robbing me" y={930} size={60} />'''),
dict(start="He's half right", sfx=[('ep06-fall:0.22', '@{Not Mike}')], dim=0.2, el='''<GallonCutter at={0} slices={[
  { at: 0.05, label: "CRUDE OIL", value: "$1.85", frac: 0.595, color: "#3b4a50" },
  { at: 0.15, label: "REFINERY", value: "40¢", frac: 0.13, color: C6.blue },
  { at: 0.25, label: "TAXES", value: "≈51¢", frac: 0.164, color: C6.mint },
  { at: 0.35, label: "MIKE KEEPS ≈13¢", value: "35¢", frac: 0.113, color: C6.accent },
]} shrink={{ at: @{Not Mike}, to: 0.37, label: "NOBODY GETS RICH ON THE GAS" }} />'''),
dict(start="The money was never in the tank", sfx=[('ep06-counter:0.25', '@{twenty steps}')], stock=25, el='''<Center y={500}><Counter6 to={20} at={@{twenty steps}} dur={0.8} fmt={(v) => Math.round(v) + " steps"} size={190} /></Center>
<Center y={690}><Label6 at={@{between the pump}} size={30} color={C6.ink}>BETWEEN THE PUMP AND THE DOOR</Label6></Center>'''),
dict(start="The cheap gas pulls you in", stock=49, alt=(26, "the snacks"), el='''<Center y={520}><Words text="Gas pulls you in. Food pays the bills." at={@{pulls you in}} size={92} maxW={1500} hl={["in.", "bills."]} /></Center>'''),
dict(start="Every station in America", stock=4, alt=(36, "the pizza yet"), clean=True, el='''<Meme at={@{haven't figured out}} text="still figuring out the pizza" y={900} />'''),
dict(start="And Mike? Mike is fine", sfx=[('ep06-pumpoff:0.3', '0.05')], stock=24, clean=True, el='''<Meme at={@{pizza oven}} text="Mike, 2027" y={900} />'''),
dict(start="So next time you walk in", el='''<Center y={500}><Words text="You know who you're paying." at={@{you know who}} size={100} hl={["paying."]} /></Center>'''),
dict(start="And that nine tenths", stock=18, clean=True, el='''<Meme at={@{Keep checking}} text="still looking" y={900} />'''),
dict(start="Tell me in the comments", stock=46, el='''<Center y={520}><Words text="What do you always grab inside?" at={0.1} size={96} hl={["grab"]} /></Center>'''),
dict(start="And if you want to see", end_pad=20.0, el='''<EndCard6 at={0.1} next="Costco's $1.50 hot dog" />'''),
]
