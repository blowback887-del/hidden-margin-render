# Ep09 «Why Golden Corral Doesn't Care How Much Steak You Eat» — план сцен для cloud/gen/build.py.
# Визуальная идея выпуска: боксёрское табло «DALE vs THE HOUSE» (Scoreboard) — пять раундов, лампа за каждый.
#   Сквозная карта: табло в конце трейлера, в конце раундов 1–3, в начале раунда 5; итог — список «кто за кого заплатил» в финале.
#   В Ep08 был ценник из трёх слоёв, в Ep07 — рентген чека; здесь другое устройство и другая структура (поединок).
# Трейлер ~38 с, без рамки: Дейл → план → «ресторан знал» → три вопроса → табло и гонг.
# Раунды по нарастанию: 1 The Bet → 2 The Line → 3 The Decoy → 4 The Average (главное открытие: бабушка) → 5 The Empty Chair.
# Бытовая метафора: казино не боится одного джекпота — ему нужен полный зал. Талисман: булочка (раунд 2 → совет в финале).
# Приёмы банка: бомба под столом («ресторан знал» → экран кухни 6:15), остаток истории (кто платит за Дейла),
#   лицо героя (сток 3/4/5 — «Дейл», сток 40/72 — «бабушка»), перевод с корпоративного, мемные подписи, разделённый экран.
# Номера стока = порядок в cloud/broll/ep09.json (1–76 Pexels, 77–102 Pexels, 103–112 фото Wikimedia Commons).
# Музыка — Фонотека YouTube, The Grey Room (новые треки, не из Ep06/Ep07).

EP = dict(
    comp="Ep09Buffet",
    words="src/videos/ep09-buffet-words.json",
    text="cloud/voice/ep09-text",
    parts=5,
    broll="cloud/broll/ep09.json",
    audio="audio/ep09-voiceover.mp3",
    voice_vol=0.82,
    music=[
        dict(**{'from': 0.0}, to=97.4, file="audio/ep09/music-trailer.mp3", vol=0.12),
        dict(**{'from': 96.9}, to=187.2, file="audio/ep09/music-r2.mp3", vol=0.12),
        dict(**{'from': 186.7}, to=260.4, file="audio/ep09/music-r3.mp3", vol=0.12),
        dict(**{'from': 259.9}, to=381.7, file="audio/ep09/music-r4.mp3", vol=0.12),
        dict(**{'from': 381.2}, to=482.0, file="audio/ep09/music-r5.mp3", vol=0.11),
        dict(**{'from': 481.5}, to=600.0, file="audio/ep09/music-finale.mp3", vol=0.12),
    ],
    lens={},  # заполняется cloud/gen/ep09-lens.json (длины клипов)
)
import json, os
_l = os.path.join(os.path.dirname(__file__), "ep09-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

R1, R2, R3, R4, R5 = (1, "The Bet"), (2, "The Line"), (3, "The Decoy"), (4, "The Average"), (5, "The Empty Chair")
WSJ = "<Source6>The Wall Street Journal, via Fox News · Oct 2026</Source6>"
HUS = "<Source6>The Hustle · estimate for a typical buffet</Source6>"
FSR = "<Source6>FSR magazine · July 2026</Source6>"

S = [
# ---------------- ТРЕЙЛЕР ----------------
dict(start="This is Dale", sfx=[('ep06-stamp:0.4', '@{eighteen ninety-nine}')], stock=4, alt=(1, "he skipped lunch"), el='''<Center y={200}><div style={{ scale: "1.3" }}><NameCard6 at={0.15} name="Dale" role="NOT A REAL GUY · A REAL TYPE" icon="person" /></div></Center>
<Center y={640}><Plate6><BigNum at={@{eighteen ninety-nine}} icon="receipt" size={220} label="ALL THE STEAK HE CAN EAT">$18.99</BigNum></Plate6></Center>'''),
dict(start="Dale has a plan", sfx=[('ep06-pop:0.3', '@{bankruptcy}')], stock=3, clean=True, el='''<Meme at={@{bankruptcy}} text="it's personal" y={900} />'''),
dict(start="One problem", sfx=[('ep06-boom:0.28', '@{somebody else}')], stock=8, alt=(10, "It priced him in"), el='''<Center y={330}><Words text="The restaurant knew Dale was coming." at={@{The restaurant knew}} size={92} hl={["knew"]} maxW={1500} /></Center>
<Center y={720}><Label6 at={@{somebody else}} size={46} color={C6.accent}>SOMEBODY ELSE PAYS FOR HIS DINNER</Label6></Center>'''),
dict(start="So how does unlimited steak", sfx=[('ep09-sizzle:0.3', '0.1')], stock=17, el='''<Center y={540}><Plate6><Words text="Unlimited steak. Under $20." at={0.1} size={110} hl={["$20."]} /></Plate6></Center>'''),
dict(start="Who's covering Dale", stock=5, el='''<Center y={540}><Plate6><Words text="Who's covering Dale?" at={0.05} size={120} hl={["covering"]} /></Plate6></Center>'''),
dict(start="And why is the real threat", stock=75, el='''<Center y={540}><Words text="The real threat: an empty chair." at={@{not the guy}} size={104} hl={["empty", "chair."]} maxW={1500} /></Center>'''),
dict(start="Five rounds", sfx=[('ep09-bell:0.5', '@{Dale versus}')], hard=True, el='''<Center y={500}><Scoreboard at={0.05} lamps={["", "", "", "", ""]} scale={1.45} /></Center>
<Center y={985}><Label6 at={@{Dale versus}} size={30} color={C6.mint}>FIVE ROUNDS · WHY GOLDEN CORRAL DOESN'T CARE HOW MUCH STEAK YOU EAT</Label6></Center>'''),

# ---------------- РАУНД 1 · THE BET ----------------
dict(start="The house is Golden Corral", sfx=[('ep06-whoosh:0.25', '0.02')], tag=R1, stock=109, el='''<Center y={560}><In at={0} out={@{Golden Corral} + 0.3} from="fade"><ChapterCard n={1} title="The Bet" /></In></Center>
<Center y={780}><Plate6><Words text="Golden Corral" at={@{Golden Corral}} size={130} hl={["Golden", "Corral"]} /><Label6 at={@{The biggest}} size={38} color={C6.ink}>THE BIGGEST BUFFET CHAIN IN AMERICA</Label6></Plate6></Center>
<Source6>Photo: Mr. Blue MauMau · CC BY 2.0 · chain facts: WSJ via Fox News</Source6>'''),
dict(start="About three hundred fifty restaurants", sfx=[('ep06-pop:0.3', '0.2'), ('ep06-pop:0.3', '@{around a hundred}'), ('ep06-kaching:0.25', '@{roughly seventeen}')], stock=104, alt=(106, "around a hundred"), el='''<Center y={520}><Row gap={70}>
  <Plate6><BigNum at={0.2} icon="store" size={150} label="RESTAURANTS">≈350</BigNum></Plate6>
  <Plate6><BigNum at={@{around a hundred}} icon="cart" size={150} label="ITEMS ON THE LINE">≈150</BigNum></Plate6>
  <Plate6><BigNum at={@{roughly seventeen}} icon="receipt" size={150} label="DINNER, BY TOWN">$17–21</BigNum></Plate6>
</Row></Center>
<Source6>WSJ via Fox News · Entrepreneur, Sept 2026 · photo: The Bushranger, CC BY-SA 4.0</Source6>'''),
dict(start="The man running it", stock=99, el='''<Center y={480}><Plate6><BigNum at={@{forty-one years}} icon="clock" size={220} label="YEARS AT THE COMPANY · CEO LANCE TRENARY">41</BigNum></Plate6></Center>
<Meme at={@{every kind of Dale}} text="he has seen things" y={930} size={64} />
<Source6>Entrepreneur · Sept 2026</Source6>'''),
dict(start="And on that line", sfx=[('ep09-sizzle:0.35', '@{sirloin steak}')], stock=105, clean=True, el='''<Center y={800}><Plate6><Words text="Sirloin steak." at={@{sirloin steak}} size={120} hl={["Sirloin"]} /><Label6 at={@{sirloin steak} + 0.4} size={34} color={C6.ink}>AS MANY TIMES AS YOU ASK</Label6></Plate6></Center>
<Source6>Photo taken at a Golden Corral: inazakira · CC BY-SA 2.0</Source6>'''),
dict(start="Now walk into a grocery store", sfx=[('ep06-kaching:0.25', '@{fourteen dollars}')], stock=22, el='''<Center y={520}><Plate6><BigNum at={@{fourteen dollars}} icon="cart" size={240} label="A POUND · SIRLOIN · U.S. AVERAGE · JULY 2026">$14.59</BigNum></Plate6></Center>
<Source6>Bureau of Labor Statistics average prices, via USAFacts</Source6>'''),
dict(start="So Dale's math is simple", sfx=[('ep06-pop:0.3', '@{Two pounds}')], stock=19, el='''<Center y={380}><Plate6><Words text="2 lb × $14.59 = $29" at={@{Two pounds}} size={120} hl={["$29"]} /></Plate6></Center>
<Center y={760}><Plate6><Label6 at={@{He paid nineteen}} size={54} color={C6.accent}>HE PAID $18.99</Label6></Plate6></Center>'''),
dict(start="In Dale's head", sfx=[('ep06-scratch:0.3', '@{Legal, delicious theft}')], stock=5, clean=True, el='''<Meme at={@{Legal, delicious theft}} text="allegedly" y={900} />'''),
dict(start="And honestly", stock=18, el='''<Center y={540}><Plate6><Words text="On steak alone, Dale might be right." at={@{On steak alone}} size={88} hl={["right."]} maxW={1500} /></Plate6></Center>'''),
dict(start="Round one, Dale", sfx=[('ep09-bell:0.5', '0.1'), ('ep09-cheer:0.3', '0.5')], stock=24, el='''<Center y={520}><Scoreboard at={0.05} lamps={["d", "", "", "", ""]} lampAt={0.35} scale={1.45} /></Center>'''),

# ---------------- РАУНД 2 · THE LINE ----------------
dict(start="But Dale has to walk to the steak", sfx=[('ep06-whoosh:0.25', '0.02')], tag=R2, stock=14, el='''<Center y={300}><In at={0} out={@{that walk}} from="fade"><ChapterCard n={2} title="The Line" /></In></Center>
<Center y={640}><Plate6><Words text="That walk is not an accident." at={@{that walk}} size={96} hl={["not"]} maxW={1500} /></Plate6></Center>'''),
dict(start="Golden Corral's CEO told", sfx=[('ep06-pop:0.3', '@{modules}')], stock=13, alt=(92, "Every module"), el='''<Center y={420}><Plate6><Words text="“Modules”" at={@{modules}} size={190} hl={["“Modules”"]} /></Plate6></Center>
<Center y={760}><Plate6><Label6 at={@{Every module}} size={42} color={C6.ink}>SOMETHING EXPENSIVE + SOMETHING CHEAP</Label6></Plate6></Center>
''' + WSJ),
dict(start="Shrimp sits with hush puppies", stock=26, alt=(28, "french fries"), el='''<Center y={540}><Split6 at={0.1} left={{ title: "SHRIMP", value: "$$$", color: C6.loss }} right={{ title: "FRIES · HUSH PUPPIES", value: "¢", color: C6.money, at: @{hush puppies} }} /></Center>
''' + WSJ),
dict(start="The Journal's own example", stock=31, el='''<Center y={330}><Plate6><Words text="Meatloaf" at={@{meatloaf}} size={120} /><Label6 at={@{potatoes}} size={40} color={C6.accent}>+ POTATOES · GRAVY · GREEN BEANS</Label6></Plate6></Center>
<Center y={780}><Plate6><Label6 at={@{Nothing is hidden}} size={44} color={C6.ink}>NOTHING IS HIDDEN. IT'S JUST ARRANGED.</Label6></Plate6></Center>'''),
dict(start="Translation from corporate", sfx=[('ep06-pop:0.3', '@{a chaperone}')], stock=73, el='''<CorpSub at={0.2} corp="“menu modules”" human="every shrimp gets a potato chaperone" />'''),
dict(start="The Hustle once priced", sfx=[('ep06-kaching:0.25', '@{about two dollars}'), ('ep06-coin:0.3', '@{thirty cents}')], stock=85, alt=(29, "A serving of potatoes"), el='''<Center y={540}><Split6 at={@{A serving of steak}} left={{ title: "A SERVING OF STEAK", value: "$2.25", color: C6.loss }} right={{ title: "A SERVING OF POTATOES", value: "30¢", color: C6.money, at: @{thirty cents} }} /></Center>
<Source6>The Hustle · cost estimates from wholesale data</Source6>'''),
dict(start="Beef has only gotten pricier", stock=20, el='''<Center y={540}><Plate6><Words text="Potatoes are still potatoes." at={@{Potatoes are still}} size={100} hl={["still"]} /></Plate6></Center>'''),
dict(start="So every scoop of mashed potatoes", sfx=[('ep06-coin:0.3', '@{swaps}')], stock=81, el='''<Center y={540}><Plate6><Words text="A $2 bite → a 30¢ bite" at={@{swaps}} size={110} hl={["30¢"]} /></Plate6></Center>'''),
dict(start="And nobody makes him do it", stock=6, clean=True, el='''<Meme at={@{With a ladle}} text="with a ladle. smiling." y={900} />'''),
dict(start="Then there's the roll", sfx=[('ep06-pop:0.3', '0.3')], stock=32, el='''<Center y={300}><Words text="The roll." at={0.3} size={170} hl={["roll."]} /></Center>
<Center y={840}><Plate6><Label6 at={@{basically a pillow}} size={42} color={C6.ink}>BASICALLY A PILLOW WITH BUTTER ON IT</Label6></Plate6></Center>'''),
dict(start="It's one of the cheapest things", stock=33, el='''<Center y={540}><Plate6><Words text="It takes the space of steak #3." at={@{it takes up}} size={92} hl={["steak", "#3."]} maxW={1500} /></Plate6></Center>'''),
dict(start="And here's a twist", stock=11, el='''<Center y={540}><Plate6><Words text="At a buffet, bad food is expensive." at={@{At a buffet}} size={92} hl={["expensive."]} maxW={1500} /></Plate6></Center>'''),
dict(start="If a dish is dry", sfx=[('ep09-trombone:0.3', '@{You dump it}')], stock=34, clean=True, el='''<Meme at={@{the house pays twice}} text="paid for. twice." y={900} />'''),
dict(start="So the cheap stuff actually has to be good", sfx=[('ep06-stamp:0.4', '@{They have to taste}')], stock=30, el='''<Center y={330}><Plate6><Words text="Those potatoes are a weapon." at={@{Those potatoes}} size={96} hl={["weapon."]} maxW={1500} /></Plate6></Center>
<Center y={760}><Stamp at={@{They have to taste}} text="weapon-grade" color={C6.accent} size={110} /></Center>'''),
dict(start="Round two goes to the house", sfx=[('ep09-bell:0.5', '0.1')], stock=16, el='''<Center y={520}><Scoreboard at={0.05} lamps={["d", "h", "", "", ""]} lampAt={0.35} scale={1.45} /></Center>'''),

# ---------------- РАУНД 3 · THE DECOY ----------------
dict(start="This year, the steak started fighting back", sfx=[('ep06-whoosh:0.25', '0.02'), ('ep09-sizzle:0.3', '0.6')], tag=R3, stock=96, el='''<Center y={540}><ChapterCard n={3} title="The Decoy" /></Center>'''),
dict(start="Ground beef hit record prices", sfx=[('ep06-boom:0.25', '0.1')], stock=21, el='''<Center y={380}><Plate6><Words text="Ground beef: record high." at={0.1} size={104} hl={["record", "high."]} /></Plate6></Center>
<Center y={740}><Plate6><Label6 at={@{and steak}} size={44} color={C6.accent}>STEAK: NEAR ITS RECORD · 2026</Label6></Plate6></Center>
<Source6>Bureau of Labor Statistics average prices · 2026</Source6>'''),
dict(start="For a restaurant that promises", sfx=[('ep09-trombone:0.3', '@{a leak in the boat}')], stock=68, clean=True, el='''<Meme at={@{a leak in the boat}} text="the boat" y={900} />'''),
dict(start="So right next to the steak", sfx=[('ep06-pop:0.3', '@{A bone-in}')], stock=78, alt=(79, "Golden, crunchy"), el='''<Center y={300}><Plate6><Words text="A bone-in fried pork chop." at={@{A bone-in}} size={96} hl={["pork", "chop."]} maxW={1500} /></Plate6></Center>
<Center y={860}><Plate6><Label6 at={@{the size of}} size={40} color={C6.ink}>THE SIZE OF A CATCHER'S MITT</Label6></Plate6></Center>'''),
dict(start="The CEO says they refuse", stock=112, el='''<Center y={380}><Plate6><Words text="They didn't remove the steak." at={@{So they didn't}} size={92} maxW={1500} /></Plate6></Center>
<Center y={740}><Plate6><Words text="They surrounded it." at={@{They surrounded}} size={110} hl={["surrounded"]} /></Plate6></Center>
<Source6>“Not going to… cheapen” the menu: CEO Lance Trenary, FSR · July 2026 · photo at a Golden Corral: Nick Gray, CC BY-SA 2.0</Source6>'''),
dict(start="According to the Journal, that pork chop", sfx=[('ep06-counter:0.3', '@{forty percent}')], el='''<Center y={520}><TwoBars at={0.2} a={{ label: "SIRLOIN", value: "100%", v: 1, color: C6.loss }} b={{ label: "PORK CHOP", value: "≈40%", v: 0.4, color: C6.money, at: @{forty percent} }} /></Center>
<Center y={120}><Label6 at={0.1} size={36} color={C6.ink}>WHAT EACH ONE COSTS THE CHAIN</Label6></Center>
''' + WSJ),
dict(start="Nobody took Dale's steak away", sfx=[('ep06-stamp:0.4', '@{sixty percent off}')], stock=84, alt=(35, "Every pork chop"), el='''<Center y={330}><Plate6><Words text="A reason to cheat on it." at={@{a reason}} size={96} hl={["cheat"]} /></Plate6></Center>
<Center y={760}><Stamp at={@{sixty percent off}} text="60% off. for them." color={C6.accent} size={100} /></Center>'''),
dict(start="And then, the drink", stock=37, el='''<Center y={540}><Plate6><Words text="Food: unlimited. Soda: extra." at={@{The food is unlimited}} size={100} hl={["extra."]} /></Plate6></Center>
''' + WSJ),
dict(start="A fountain drink costs", sfx=[('ep06-coin:0.3', '@{twelve cents}')], stock=77, el='''<Center y={520}><Plate6><BigNum at={@{twelve cents}} icon="cup" size={240} label="TO POUR · SOLD FOR ABOUT $2">≈12¢</BigNum></Plate6></Center>
''' + HUS),
dict(start="And Dale needs something", stock=2, clean=True, el=''''''),
dict(start="Round three, house", sfx=[('ep09-bell:0.5', '0.1')], stock=9, el='''<Center y={520}><Scoreboard at={0.05} lamps={["d", "h", "h", "", ""]} lampAt={0.35} scale={1.45} /></Center>'''),
dict(start="Dale is still smiling", sfx=[('ep06-pop:0.3', '@{has not looked}')], stock=5, clean=True, el='''<Meme at={@{has not looked}} text="has not checked the score" y={900} size={68} />'''),
dict(start="Quick thing", stock=15, el='''<Subscribe6 at={@{subscribe}} />
<Center y={560}><Plate6><Words text="It's free. Unlike the soda." at={@{It's free}} size={90} hl={["free."]} /></Plate6></Center>'''),

# ---------------- РАУНД 4 · THE AVERAGE ----------------
dict(start="Still, let's give Dale his moment", sfx=[('ep06-whoosh:0.25', '0.02')], tag=R4, stock=1, el='''<Center y={540}><ChapterCard n={4} title="The Average" /></Center>'''),
dict(start="Four plates", sfx=[('ep06-pop:0.3', '0.1')], stock=38, el='''<Center y={540}><Plate6><Words text="Four plates. Steak on every one." at={0.1} size={100} hl={["Four"]} /></Plate6></Center>'''),
dict(start="Say he eats", sfx=[('ep06-kaching:0.25', '@{twenty-five}'), ('ep09-cheer:0.3', '@{He beat the house}')], stock=4, el='''<Center y={480}><Split6 at={0.1} left={{ title: "HE PAID", value: "$18.99", color: C6.ink }} right={{ title: "HE ATE (OUR WHAT-IF)", value: "$25", color: C6.accent, at: @{twenty-five} }} /></Center>
<Center y={880}><Stamp at={@{He beat the house}} text="dale wins?" color={C6.accent} size={90} /></Center>'''),
dict(start="By six dollars", sfx=[('ep09-trombone:0.3', '0.2')], stock=25, clean=True, el='''<Meme at={0.1} text="by six dollars" y={900} />'''),
dict(start="And the house does not care", stock=61, el='''<Center y={540}><Plate6><Words text="The house was never playing against Dale." at={@{Because the house}} size={86} hl={["never"]} maxW={1500} /></Plate6></Center>'''),
dict(start="Here's the number that runs", sfx=[('ep06-counter:0.3', '@{thirty-eight cents}')], stock=62, dim=0.2, el='''<Center y={110}><Label6 at={0.05} size={38} color={C6.ink}>THE NUMBER THAT RUNS THE WHOLE PLACE</Label6></Center>
<Center y={560}><Donut6 at={@{thirty-eight cents}} pct={38} center="38¢" label="OF EVERY DOLLAR GOES TO FOOD" size={600} /></Center>
''' + WSJ),
dict(start="On an eighteen ninety-nine dinner", sfx=[('ep06-kaching:0.25', '@{about seven dollars}')], stock=12, el='''<Center y={400}><Plate6><BigNum at={@{about seven dollars}} icon="receipt" size={220} label="OF FOOD PER HEAD · OUR MATH: $18.99 × 38%">≈$7</BigNum></Plate6></Center>
<Center y={820}><Plate6><Label6 at={@{The average head}} size={44} color={C6.accent}>NOT DALE'S HEAD. THE AVERAGE HEAD.</Label6></Plate6></Center>'''),
dict(start="And look who's in the average", sfx=[('ep06-pop:0.3', '@{more than six thousand}')], stock=10, el='''<Center y={400}><Plate6><BigNum at={@{more than six thousand}} icon="person" size={200} label="GUESTS A WEEK · A TYPICAL RESTAURANT">6,000+</BigNum></Plate6></Center>
<Center y={820}><Plate6><Label6 at={@{nine hundred}} size={50} color={C6.accent}>≈ 900 A DAY</Label6></Plate6></Center>
''' + FSR),
dict(start="The Hustle's estimate is that maybe", sfx=[('ep06-counter:0.3', '0.1'), ('ep06-boom:0.25', '@{forty-five Dales}')], el='''<Center y={110}><Label6 at={0.05} size={36} color={C6.ink}>900 GUESTS TONIGHT</Label6></Center>
<Center y={520}><Dots at={0.1} hotAt={@{forty-five Dales}} /></Center>
<Center y={950}><Label6 at={@{forty-five Dales}} size={44} color={C6.loss}>45 DALES · 1 IN 20</Label6></Center>
''' + HUS),
dict(start="And eight hundred fifty-five", stock=71, el='''<Center y={540}><Plate6><Words text="855 people who are not Dale." at={0.1} size={100} hl={["855"]} /></Plate6></Center>'''),
dict(start="A grandmother who has soup", stock=40, el='''<Center y={820}><div style={{ scale: "1.25" }}><NameCard6 at={0.2} name="Grandma" role="SOUP · SALAD · HALF A ROLL" icon="person" /></div></Center>'''),
dict(start="A seven-year-old", sfx=[('ep06-pop:0.3', '@{dessert}')], stock=42, clean=True, el='''<Meme at={@{dessert}} text="dinner: dessert" y={900} />'''),
dict(start="A guy on a diet", sfx=[('ep09-trombone:0.3', '@{regrets everything}')], stock=74, clean=True, el='''<Meme at={@{regrets everything}} text="regrets everything" y={900} />'''),
dict(start="Grandma paid the same", sfx=[('ep06-kaching:0.25', '@{four or five}')], stock=39, el='''<Center y={520}><Split6 at={0.1} left={{ title: "GRANDMA PAID", value: "$18.99", color: C6.ink }} right={{ title: "GRANDMA ATE", value: "$4–5", color: C6.money, at: @{four or five} }} /></Center>
<Source6>Light-eater food-cost estimates: The Hustle</Source6>'''),
dict(start="Dale isn't robbing Golden Corral", sfx=[('ep06-boom:0.3', '@{Dale is eating}'), ('ep06-coin:0.3', '@{change}')], stock=72, dim=0.1, el='''<Center y={540}><Words text="Dale is eating Grandma's change." at={@{Dale is eating}} size={124} hl={["Grandma's", "change."]} maxW={1600} /></Center>'''),
dict(start="A casino doesn't panic", stock=46, alt=(45, "It just needs"), el='''<Center y={500}><Plate6><Words text="It just needs the floor full." at={@{It just needs}} size={96} hl={["full."]} /></Plate6></Center>
<Meme at={@{More gravy}} text="same game. more gravy." y={920} size={66} />'''),
dict(start="Statisticians call it", sfx=[('ep06-pop:0.3', '@{the law}')], stock=93, dim=0.2, el='''<Center y={200}><Label6 at={0.05} size={38} color={C6.mint}>STATISTICIANS CALL IT</Label6></Center>
<Center y={420}><Words text="The law of large numbers" at={@{the law}} size={120} hl={["large", "numbers"]} /></Center>
<Center y={720}><Label6 at={@{feed enough}} size={40} color={C6.mint}>FEED ENOUGH PEOPLE, AND NO SINGLE APPETITE MATTERS</Label6></Center>'''),
dict(start="Here's our rough math", sfx=[('ep06-kaching:0.25', '@{about seventeen thousand}'), ('ep06-receipt:0.3', '@{About sixty-five hundred}')], stock=108, alt=(107, "About sixty-five hundred"), el='''<Center y={170}><Plate6><Label6 at={0.1} size={34} color={C6.mint}>OUR ROUGH MATH · ONE NIGHT</Label6></Plate6></Center>
<Center y={440}><Plate6><Words text="900 guests × $18.99 ≈ $17,000" at={@{Nine hundred guests}} size={92} hl={["$17,000"]} maxW={1600} /></Plate6></Center>
<Center y={740}><Plate6><Words text="Food at 38% ≈ $6,500" at={@{About sixty-five hundred}} size={92} hl={["$6,500"]} /></Plate6></Center>
<Source6>Rough: assumes everyone pays the dinner price · photo: inazakira, CC BY-SA 2.0</Source6>'''),
dict(start="Dale's heroic extra six bucks", sfx=[('ep06-stamp:0.4', '@{before he parked}')], stock=3, el='''<Center y={800}><Stamp at={@{before he parked}} text="already priced in" color={C6.accent} size={100} /></Center>'''),
dict(start="And I mean that almost literally", stock=47, el='''<Center y={540}><Plate6><Words text="Demand forecast: 15-minute blocks." at={@{fifteen-minute}} size={88} hl={["15-minute"]} maxW={1500} /></Plate6></Center>
''' + WSJ),
dict(start="so the kitchen cooks", stock=48, clean=True, el=''''''),
dict(start="The house knew a Dale", sfx=[('ep06-boom:0.3', '@{six fifteen}')], el='''<Center y={440}><div style={{ scale: "1.35" }}><KitchenBlocks at={0.05} markAt={@{six fifteen}} /></div></Center>
<Center y={960}><Label6 at={@{It just didn't}} size={44} color={C6.accent}>IT JUST DIDN'T KNOW HIS NAME</Label6></Center>'''),

# ---------------- РАУНД 5 · THE EMPTY CHAIR ----------------
dict(start="So the house always wins", sfx=[('ep09-bell:0.5', '0.1'), ('ep06-scratch:0.3', '@{No}')], tag=R5, stock=59, el='''<Center y={430}><Scoreboard at={0.05} lamps={["d", "h", "h", "h", ""]} lampAt={0.3} scale={1.15} /></Center>
<Center y={900}><Stamp at={@{No}} text="not so fast" color={C6.loss} size={90} /></Center>'''),
dict(start="After the food, there's the building", sfx=[('ep06-receipt:0.3', '@{the building}')], stock=70, el='''<Center y={420}><Col gap={26}>
  <Plate6><Label6 at={@{the building}} size={46} color={C6.ink}>THE BUILDING</Label6></Plate6>
  <Plate6><Label6 at={@{the lights}} size={46} color={C6.ink}>THE LIGHTS</Label6></Plate6>
  <Plate6><Label6 at={@{the insurance}} size={46} color={C6.ink}>THE INSURANCE</Label6></Plate6>
  <Plate6><Label6 at={@{eighty percent}} size={46} color={C6.accent}>A KITCHEN MAKING ≈80% IN-HOUSE</Label6></Plate6>
</Col></Center>
''' + WSJ),
dict(start="The Hustle's estimate for a typical buffet", sfx=[('ep06-coin:0.35', '@{about one dollar}')], stock=88, dim=0.2, el='''<Center y={110}><Label6 at={0.05} size={38} color={C6.ink}>OUT OF A $20 TICKET AT A TYPICAL BUFFET</Label6></Center>
<Center y={560}><Donut6 at={@{about one dollar}} pct={5} center="$1" label="IS PROFIT" color={C6.money} size={600} /></Center>
''' + HUS),
dict(start="That's what's left", stock=100, clean=True, el='''<Meme at={0.1} text="one (1) dollar" y={900} />'''),
dict(start="A full house prints", stock=8, alt=(50, "A half-empty one"), el='''<Center y={540}><Plate6><Words text="It only works when the room is full." at={@{The whole machine}} size={90} hl={["full."]} maxW={1500} /></Plate6></Center>'''),
dict(start="In twenty twenty, the room emptied", sfx=[('ep06-boom:0.28', '0.2')], stock=75, el='''<Center y={260}><Words text="2020: the room emptied." at={0.2} size={110} hl={["emptied."]} /></Center>
<Center y={580}><Label6 at={@{sales fell}} size={46} color={C6.loss}>SALES FELL BY MORE THAN HALF</Label6></Center>
<Center y={720}><Label6 at={@{at least eighty}} size={46} color={C6.loss}>AT LEAST 80 RESTAURANTS LOST</Label6></Center>
<Source6>WSJ, via Entrepreneur · Sept 2026</Source6>'''),
dict(start="It had about four hundred eighty", sfx=[('ep06-fall:0.3', '@{It ended}')], stock=51, el='''<Center y={520}><Split6 at={0.1} left={{ title: "RESTAURANTS · 2019", value: "483", color: C6.ink }} right={{ title: "END OF 2025", value: "348", color: C6.loss, at: @{It ended} }} /></Center>
<Source6>Technomic Top 500 (2019) · FSR (end of 2025)</Source6>'''),
dict(start="And that's the survivor", sfx=[('ep06-fall:0.3', '@{to sixteen}'), ('ep06-fall:0.3', '@{to seventeen}')], stock=52, el='''<Center y={520}><Split6 at={@{Ryan's}} left={{ title: "RYAN'S", value: "400 → 16", color: C6.loss }} right={{ title: "OLD COUNTRY BUFFET", value: "350 → 17", color: C6.loss, at: @{Old Country} }} /></Center>
<Source6>The Hustle</Source6>'''),
dict(start="Now it's twenty twenty-six", stock=104, alt=(87, "The goal"), el='''<Center y={400}><Plate6><Words text="“This has been a difficult year for us.”" at={@{This has been}} size={84} hl={["difficult"]} maxW={1500} /><Label6 at={@{This has been} + 0.6} size={30} color={C6.mint}>LANCE TRENARY, CEO OF GOLDEN CORRAL</Label6></Plate6></Center>
<Center y={800}><Plate6><Label6 at={@{tread water}} size={46} color={C6.accent}>THE GOAL: “TREAD WATER”</Label6></Plate6></Center>
<Source6>WSJ via Fox News · Oct 2026 · photo: The Bushranger, CC BY-SA 4.0</Source6>'''),
dict(start="Not because of Dale", sfx=[('ep06-pop:0.3', '@{seventy times}')], stock=71, el='''<Center y={250}><Plate6><Words text="Because of the regulars." at={@{Because of the regulars}} size={96} hl={["regulars."]} /></Plate6></Center>
<Center y={680}><Plate6><BigNum at={@{seventy times}} icon="calendar" size={200} label="VISITS A YEAR · THE MOST LOYAL GUESTS">≈70</BigNum></Plate6></Center>
''' + FSR),
dict(start="And the CEO says one regular", stock=69, el='''<Center y={520}><Split6 at={@{instead of}} left={{ title: "VISITS A MONTH · BEFORE", value: "5–6", color: C6.ink }} right={{ title: "NOW", value: "2", color: C6.loss, at: @{it's two} }} /></Center>
''' + FSR),
dict(start="The chain's core customer earns", stock=53, alt=(66, "When that budget"), el='''<Center y={480}><Plate6><BigNum at={@{under eighty thousand}} icon="person" size={200} label="A YEAR · THE CHAIN'S CORE CUSTOMER">&lt;$80K</BigNum></Plate6></Center>
''' + FSR),
dict(start="When Dale eats four plates", sfx=[('ep06-coin:0.3', '@{six dollars}'), ('ep06-boom:0.28', '@{the nineteen dollars}')], el='''<Center y={520}><Split6 at={0.1} left={{ title: "DALE EATS FOUR PLATES", value: "−$6", color: C6.accent }} right={{ title: "A REGULAR STAYS HOME", value: "−$18.99", color: C6.loss, at: @{When a regular} }} /></Center>'''),
dict(start="Dale was never the threat", sfx=[('ep06-boom:0.32', '@{The empty chair}')], stock=50, dim=0.1, el='''<Center y={540}><Words text="The empty chair is." at={@{The empty chair}} size={150} hl={["empty", "chair"]} /></Center>'''),

# ---------------- ФИНАЛ ----------------
dict(start="Back to Dale", sfx=[('ep06-whoosh:0.25', '0.02')], stock=83, clean=True, el='''<Meme at={@{He thinks he won}} text="champion" y={900} />'''),
dict(start="What actually happened", sfx=[('ep06-pop:0.3', '@{Grandma covered}'), ('ep06-pop:0.3', '@{The potatoes covered}'), ('ep06-pop:0.3', '@{The pork chop covered}'), ('ep06-kaching:0.25', '@{sixteen times}')], el='''<Center y={130}><Words text="What actually happened" at={0.05} size={70} hl={["actually"]} /></Center>
<Center y={540}><Col gap={34}>
  <Words text="Grandma → his steak" at={@{Grandma covered}} size={78} hl={["Grandma"]} />
  <Words text="The potatoes → the shrimp" at={@{The potatoes covered}} size={78} hl={["potatoes"]} />
  <Words text="The pork chop → the beef" at={@{The pork chop covered}} size={78} hl={["pork", "chop"]} />
  <Words text="The soda → itself, ×16" at={@{And the soda}} size={78} hl={["×16"]} />
</Col></Center>'''),
dict(start="And everybody's copying the trick", sfx=[('ep06-counter:0.3', '@{a hundred fifty}')], stock=56, alt=(102, "Four times"), el='''<Center y={420}><Plate6><BigNum at={@{a hundred fifty}} icon="store" size={220} label="“UNLIMITED” DEALS AT BIG CHAINS · FIRST HALF OF 2026">≈150</BigNum></Plate6></Center>
<Center y={840}><Plate6><Label6 at={@{Four times}} size={48} color={C6.accent}>4× AS MANY AS IN 2021</Label6></Plate6></Center>
<Source6>Technomic data, via WSJ / Fox News</Source6>'''),
dict(start="Red Lobster", stock=57, el='''<Center y={540}><Plate6><Words text="Same math, different sauce." at={@{Same math}} size={100} hl={["sauce."]} /></Plate6></Center>'''),
dict(start="So the next time a sign says", stock=98, el='''<Center y={540}><Plate6><Words text="How many people sat down next to you?" at={@{It's how many}} size={86} hl={["next", "to", "you?"]} maxW={1500} /></Plate6></Center>'''),
dict(start="Want to beat it anyway", sfx=[('ep06-pop:0.3', '@{Skip the roll}'), ('ep06-pop:0.3', '@{Walk past}'), ('ep06-pop:0.3', '@{Drink water}')], stock=95, el='''<Center y={500}><Col gap={30}>
  <Plate6><Label6 at={@{Skip the roll}} size={52} color={C6.accent}>1 · SKIP THE ROLL</Label6></Plate6>
  <Plate6><Label6 at={@{Walk past}} size={52} color={C6.ink}>2 · WALK PAST THE POTATOES</Label6></Plate6>
  <Plate6><Label6 at={@{Drink water}} size={52} color={C6.ink}>3 · DRINK WATER</Label6></Plate6>
</Col></Center>'''),
dict(start="Or just be Grandma", sfx=[('ep09-cheer:0.25', "@{She's the one}")], stock=72, clean=True, el='''<Meme at={@{She's the one}} text="the real mvp" y={900} />'''),
dict(start="What's your buffet strategy", stock=4, el='''<Center y={420}><Plate6><Words text="What's your buffet strategy?" at={0.05} size={100} hl={["strategy?"]} /></Plate6></Center>
<Center y={760}><Plate6><Label6 at={@{Confess}} size={44} color={C6.accent}>CONFESS IN THE COMMENTS</Label6></Plate6></Center>'''),
dict(start="And if you want another deal", el='''<EndCard6 at={0.2} next="WHY COSTCO'S HOT DOG STILL COSTS $1.50" />''', end_pad=8.0),
]

# плашка Plate6 появляется вместе с первым своим элементом (пустых плашек в кадре нет)
import re as _re
def _plate(el):
    def f(m):
        a = _re.search(r"at=\{(@\{[^}]*\}(?: \+ [\d.]+)?|[\d.]+)\}", m.group(1))
        return "<Plate6" + (" at={%s}" % a.group(1) if a else "") + ">" + m.group(1) + "</Plate6>"
    return _re.sub(r"<Plate6>(.*?)</Plate6>", f, el, flags=_re.S)
for _s in S: _s["el"] = _plate(_s.get("el", ""))
