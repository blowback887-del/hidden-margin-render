# Ep04 Costco — scene spec. Each scene: start phrase (script words), optional tag/back, TSX body.
# @{phrase} -> seconds from scene start to the first word of phrase (searched from scene start), minus lead.
# B## refers to stock clip number in cloud/broll/ep04.json.
CH1, CH2, CH3, CH4, CH5 = (1, "The threat"), (2, "The cap"), (3, "The card"), (4, "Other people's money"), (5, "Who really pays")

S = [
# ---------------- HOOK ----------------
dict(start="This hot dog costs", el='''<Stock n={4} until={DUR} dim={-0.3} />
<Center y={560}><HotDogTag at={0.05} /></Center>
<At x={1440} y={800}><Label at={@{Soda included}} size={36}>+ SODA</Label></At>
<At x={1440} y={860}><Label at={@{Free refills}} size={36} color={C3.money}>FREE REFILLS</Label></At>''',
 sfx=[("pop", "0.05")]),
dict(start="It cost a dollar fifty in", back=5, el='''<Center y={430}><HotDogTag at={0.05} small /></Center>
<Center y={760}><Big at={@{nineteen eighty}} size={200} color={C3.gold}>1985</Big></Center>
<Center y={900}><Label at={@{too}} size={30}>SAME PRICE · STILL TODAY</Label></Center>'''),
dict(start="Since then, prices", back=7, el='''<Top>WHAT IT SHOULD COST</Top>
<Center y={520}><Row gap={200}>
  <Col><Label at={0.1} size={26}>1985</Label><Big at={0.15} color={C3.money} size={170}>$1.50</Big></Col>
  <Col><Label at={@{more than four}} size={26} color={C3.loss}>TODAY · WITH INFLATION</Label><Big at={@{more than four}} color={C3.loss} size={170}>$4+</Big></Col>
</Row></Center>
<Center y={820}><Label at={@{tripled}} size={32}>PRICES IN GENERAL: ROUGHLY ×3</Label></Center>
<Source>Inflation-adjusted estimates · CNN, CPI calculators</Source>''', sfx=[("rise", "@{more than four}")]),
dict(start="In a single year", el='''<Stock n={8} until={DUR} dim={-0.15} />
<Center y={480}><Row gap={50}><IconAt at={0.1} name="hotdog" size={170} color={C3.gold} /><Counter to={245.1} at={@{two hundred}} dur={1.2} fmt={(v) => Math.round(v) + "M"} color={C3.ink} size={190} /></Row></Center>
<Center y={720}><Label at={@{two hundred}} size={30}>HOT DOG COMBOS SOLD IN ONE YEAR</Label></Center>
<Source>Costco annual meeting 2026 · fiscal 2025</Source>''', sfx=[("tick", "@{two hundred}")]),
dict(start="And a man who ran", back=11, el='''<Center y={470}><HotDogTag at={0.05} loss={@{losing}} /></Center>
<Center y={800}><Label at={@{losing}} size={34} color={C3.loss}>“WE ARE LOSING…”</Label></Center>
<CoinAt x={1530} y={980} tl={[{ at: @{admitted}, pose: "shocked" }]} />''', sfx=[("buzz", "@{losing}")]),
dict(start="So here's the puzzle", el='''<Stock n={2} until={DUR} dim={-0.1} />
<Center y={300}><Title text="Sells cheap. Earns billions." hl={["billions."]} size={84} at={0.2} /></Center>
<Center y={560}><Counter to={9.226} at={@{nine billion}} dur={1.1} fmt={(v) => "$" + v.toFixed(1) + "B"} size={220} /></Center>
<Center y={760}><Label at={@{nine billion}} size={28}>NET PROFIT · LATEST FISCAL YEAR</Label></Center>
<Source>Costco FY2026 results (year ended Aug 30, 2026)</Source>''', sfx=[("cash", "@{nine billion}")]),
dict(start="Somebody is paying for", back=44, el='''<Center y={300}><Title text="Who pays for the hot dog?" hl={["pays"]} size={88} at={0.1} /></Center>
<Center y={620}><In at={@{hint}} from="zoom"><div style={{ position: "relative" }}><Icon name="receipt" size={200} color={C3.ink} /><Strike at={@{counter}} w={300} /></div></In></Center>
<Center y={880}><Label at={@{hint}} size={32} color={C3.gold}>HINT: YOU’VE ALREADY PAID</Label></Center>
<CoinAt x={1560} y={1000} tl={[{ at: 0.1, pose: "suspicious" }, { at: @{already paid}, pose: "wink" }]} />''', sfx=[("ding", "@{already paid}")]),
# ---------------- CHAPTER 1 ----------------
dict(start="To understand the hot dog", tag=CH1, el='''<Stock n={9} until={DUR} dim={0.08} />
<Center y={300}><Label at={0.2} size={34}>MEET TWO MEN</Label></Center>
<Center y={600}><Row gap={120}>
  <NameCard at={@{Jim Sinegal}} name="JIM SINEGAL" role="CO-FOUNDED COSTCO · SEATTLE · 1983" />
  <NameCard at={@{Craig Jelinek}} name="CRAIG JELINEK" role="LATER CEO" />
</Row></Center>''', sfx=[("click", "@{Jim Sinegal}"), ("click", "@{Craig Jelinek}")]),
dict(start="One day, Jelinek went", back=10, el='''<Center y={520}><Quote at={@{Jim, we}} who="CRAIG JELINEK · AS HE RECALLED IN 2018" size={64}>“Jim, we can’t sell this hot dog for a buck fifty. We are losing our rear ends.”</Quote></Center>'''),
dict(start="Sinegal's answer", back=10, el='''<Center y={230}><Label at={0.1} size={32}>SINEGAL’S ANSWER</Label></Center>
<Center y={470}><Quote at={@{If you raise}} who="JIM SINEGAL · AS JELINEK TOLD IT" size={78}>“If you raise the effing hot dog, I will kill you.”</Quote></Center>
<Center y={800}><Big at={@{Figure it}} color={C3.gold} size={130}>Figure it out.</Big></Center>
<CoinAt x={1640} y={1010} h={260} tl={[{ at: @{kill}, pose: "shocked" }]} />''', sfx=[("impact", "@{kill}")]),
dict(start="Sinegal meant it", back=10, el='''<Center y={330}><Label at={0.2} size={30}>YEARS EARLIER · A REPORTER ASKED</Label></Center>
<Center y={470}><Label at={@{what it would}} size={34} color={C3.ink}>“If the price ever goes up, what will it mean?”</Label></Center>
<Center y={720}><Big at={@{That I'm}} color={C3.gold} size={150}>“That I’m dead.”</Big></Center>
<Source>Jim Sinegal to The Seattle Times, 2009</Source>'''),
dict(start="In Jelinek's telling", el='''<Stock n={38} until={DUR} dim={0} />
<Top>CUTAWAY · HOW THEY FIGURED IT OUT</Top>
<Center y={470}><Row gap={110}>
  <Col><In at={@{Hebrew}} from="zoom"><div style={{ position: "relative" }}><Icon name="truck" size={170} color={C3.dim} /><Strike at={@{Hebrew} + 0.6} w={240} /></div></In><Label at={@{Hebrew}} size={26}>OLD SUPPLIER</Label></Col>
  <Col><IconAt at={@{California}} name="factory" size={170} color={C3.money} /><Label at={@{California}} size={26} color={C3.money}>OWN PLANT · CALIFORNIA</Label></Col>
  <Col><IconAt at={@{Illinois}} name="factory" size={170} color={C3.money} /><Label at={@{Illinois}} size={26} color={C3.money}>2ND PLANT · ILLINOIS</Label></Col>
</Row></Center>''', sfx=[("thud", "@{Hebrew} + 0.6"), ("pop", "@{California}"), ("pop", "@{Illinois}")]),
dict(start="Think about how strange", back=8, el='''<Center y={430}><MenuBoard at={0.1} lock={@{one number}} /></Center>
<Center y={800}><Label at={@{meat plant}} size={30}>A MEAT PLANT · TO PROTECT ONE NUMBER</Label></Center>'''),
dict(start="Two hundred and forty-five million combos at", back=5, el='''<Center y={480}><Row gap={40}>
  <Big at={0.05} color={C3.ink} size={130}>245M</Big><Big at={@{a dollar fifty}} color={C3.dim} size={90}>×</Big><Big at={@{a dollar fifty}} color={C3.ink} size={130}>$1.50</Big>
  <Big at={@{three hundred}} color={C3.dim} size={90}>≈</Big><Big at={@{three hundred}} color={C3.money} size={150}>$368M</Big>
</Row></Center>
<Center y={760}><Label at={@{goal}} size={32} color={C3.gold}>THE GOAL ISN’T TO PROFIT FROM IT</Label></Center>
<Source>Our math · 245.1M combos × $1.50</Source>''', sfx=[("cash", "@{three hundred}")]),
dict(start="And it's not just the hot dog", el='''<Stock n={16} until={DUR} dim={-0.1} />
<Center y={480}><Tag at={@{four ninety}} label="ROTISSERIE CHICKEN" value="$4.99" /></Center>
<Center y={720}><Label at={@{two thousand nine}} size={32}>SAME PRICE SINCE 2009</Label></Center>'''),
dict(start="To protect that price", el='''<Stock n={17} until={DUR} dim={-0.1} />
<At x={330} y={760} anchor="l"><Callout at={@{four hundred}} label="NEBRASKA POULTRY COMPLEX" value="$450M" sub="BUILT BY COSTCO · OPENED 2019" color={C3.gold} line={140} vsize={110} /></At>
<Source>CNN · The Hustle</Source>''', sfx=[("cash", "@{four hundred}")]),
dict(start="Its finance chief", back=17, el='''<Center y={300}><Label at={0.1} size={30}>COSTCO’S FINANCE CHIEF, ON THE $4.99 CHICKEN</Label></Center>
<Center y={540}><Big at={@{thirty}} color={C3.loss} size={200}>−$30–40M</Big></Center>
<Center y={760}><Label at={@{a year}} size={30}>MARGIN GIVEN UP · EVERY YEAR</Label></Center>
<Source>CFO Richard Galanti, via CNN</Source>''', sfx=[("buzz", "@{thirty}")]),
dict(start="And notice where the chicken", back=41, el='''<FloorPlan at={0.1} e={@{electronics}} j={@{jewelry}} s={@{bulk snacks}} c={@{very back}} />'''),
dict(start="That's the first clue", back=18, el='''<Center y={420}><Title text="Not products." size={110} at={@{aren't really}} /></Center>
<Center y={600}><Title text="Promises." hl={["Promises."]} size={150} at={@{They're promises}} /></Center>
<Center y={830}><Label at={@{keep coming}} size={30}>ONLY PAYS OFF IF YOU KEEP COMING BACK</Label></Center>
<CoinAt x={1700} y={1000} h={260} tl={[{ at: 0.1, pose: "point" }]} flip />''', sfx=[("ding", "@{They're promises}")]),
# ---------------- CHAPTER 2 ----------------
dict(start="But one cheap hot dog", tag=CH2, el='''<Stock n={23} until={DUR} dim={-0.1} />
<Center y={520}><Row gap={60}><IconAt at={0.2} name="hotdog" size={160} color={C3.gold} /><Big at={0.4} color={C3.loss} size={120}>≠</Big><Big at={@{nine billion}} color={C3.money} size={150}>$9.2B</Big></Row></Center>
<Center y={780}><Label at={@{walk into}} size={30}>SO, INSIDE THE WAREHOUSE</Label></Center>'''),
dict(start="Here's a rule most shoppers", back=27, el='''<Top>THE RULE MOST SHOPPERS NEVER HEARD OF</Top>
<Center y={540}><Row gap={140}>
  <Tag at={@{fourteen}} label="NAME BRANDS · MAX MARKUP" value="≈14%" rotate={-3} />
  <Tag at={@{about fifteen}} label="KIRKLAND · MAX MARKUP" value="≈15%" rotate={3} color={C3.money} />
</Row></Center>
<Center y={840}><Label at={@{caps its}} size={28}>PAID $100 → YOU PAY ABOUT $114 AT MOST</Label></Center>
<Source>Widely reported Costco pricing rule (Clark Howard, RetailWire)</Source>'''),
dict(start="And it keeps the choice small", el='''<Stock n={25} until={DUR} dim={-0.1} />
<Center y={500}><Stat icon="cart" at={@{four thousand}} label="DIFFERENT ITEMS IN A WAREHOUSE" value={<Num color={C3.gold} size={170}>&lt; 4,000</Num>} color={C3.gold} /></Center>
<Source>Costco 10-K · fewer than 4,000 active items per warehouse</Source>'''),
dict(start="So instead of a whole aisle", el='''<Stock n={26} until={DUR} dim={0.1} />
<Center y={380}><Label at={@{just a few}} size={34}>A FEW BRANDS · ENORMOUS VOLUME</Label></Center>
<Center y={760}><Label at={@{suppliers}} size={40} color={C3.gold}>SUPPLIERS FIGHT FOR THE SHELF</Label></Center>'''),
dict(start="That fifteen percent brand", back=28, el='''<Center y={260}><Label at={0.1} size={30}>KIRKLAND SIGNATURE · SALES IN 2024</Label></Center>
<Center y={480}><Counter to={86} at={@{eighty-six}} dur={1.0} fmt={(v) => "$" + Math.round(v) + "B"} size={220} /></Center>
<Center y={700}><Label at={@{bigger}} size={32} color={C3.gold}>BIGGER THAN PROCTER &amp; GAMBLE</Label></Center>
<Center y={850}><Label at={@{honest}} size={28}>KEEPS THE BIG BRANDS HONEST ON PRICE</Label></Center>
<Source>The Wall Street Journal, 2025</Source>''', sfx=[("cash", "@{eighty-six}")]),
dict(start="But here's where it gets weird", back=29, el='''<CoinAt x={960} y={980} h={480} tl={[{ at: 0.1, pose: "sign" }]} sign="DO THE MATH" />
<Center y={200}><Title text="Let’s do the math." hl={["math."]} size={80} at={@{math}} /></Center>''', sfx=[("pop", "0.1")]),
dict(start="In its latest year, Costco sold", back=47, el='''<Waterfall sales={@{two hundred and ninety}} fees={@{Set the}} goods={@{what it paid}} costs={@{wages}} wh={@{nine hundred}} />''', sfx=[("cash", "@{two hundred and ninety}")]),
dict(start="What's left?", el='''<Center y={300}><Label at={0.1} size={34}>WHAT’S LEFT FROM EVERY $100 YOU SPEND</Label></Center>
<Center y={560}><HundredBill at={0.15} cut={@{about two}} /></Center>
<Center y={830}><Label at={@{about two}} size={28} color={C3.gold}>BY OUR MATH · OPERATING PROFIT, FEES SET ASIDE</Label></Center>
<Source>Costco FY2026: $297.2B sales − $264.3B goods − $27.2B costs</Source>''', sfx=[("ding", "@{about two}")]),
dict(start="Two dollars. A store", back=31, el='''<Center y={330}><Big at={0.1} color={C3.gold} size={170}>≈ $2</Big></Center>
<Center y={560}><Label at={@{breaking even}} size={40} color={C3.ink}>BASICALLY BREAKING EVEN ON THE SHELVES</Label></Center>
<Center y={760}><Title text="So where do the billions come from?" hl={["billions"]} size={64} at={@{So where}} /></Center>
<CoinAt x={1640} y={1010} h={260} tl={[{ at: @{So where}, pose: "shrug" }]} />'''),
dict(start="If you like this kind of math", back=18, el='''<Subscribe at={0.1} />
<CoinAt x={1640} y={1000} h={300} tl={[{ at: 0.4, pose: "wink" }]} flip />'''),
# ---------------- CHAPTER 3 ----------------
dict(start="Remember the hint?", tag=CH3, back=32, el='''<Center y={300}><Label at={0.1} size={34}>REMEMBER THE HINT? YOU’VE ALREADY PAID</Label></Center>
<Center y={620}><MemberCard at={@{It's the card}} /></Center>''', sfx=[("impact", "@{It's the card}")]),
dict(start="To shop at Costco, you need", back=35, el='''<Center y={300}><Label at={0.1} size={32}>NO MEMBERSHIP · NO SHOPPING</Label></Center>
<Center y={600}><Row gap={120}>
  <Tag at={@{sixty-five}} label="BASIC · PER YEAR (U.S.)" value="$65" rotate={-3} />
  <Tag at={@{hundred and thirty}} label="EXECUTIVE · PER YEAR" value="$130" rotate={3} color={C3.money} />
</Row></Center>'''),
dict(start="In the latest year, those fees", el='''<Stock n={33} until={DUR} dim={0.12} />
<Center y={480}><Counter to={5.907} at={@{five point nine}} dur={1.1} fmt={(v) => "$" + v.toFixed(1) + "B"} size={230} /></Center>
<Center y={700}><Label at={@{five point nine}} size={30}>MEMBERSHIP FEES · ONE YEAR</Label></Center>
<Source>Costco FY2026 results</Source>''', sfx=[("cash", "@{five point nine}")]),
dict(start="Now put that next to the store", back=41, el='''<Top>BY OUR MATH · OPERATING PROFIT</Top>
<Center y={600}><Row gap={160} align="flex-end">
  <VBar at={@{five point eight}} h={380} value="$5.8B" label="THE WHOLE STORE" color={C3.blue} />
  <VBar at={@{The little}} h={388} value="$5.9B" label="THE PLASTIC CARD" color={C3.gold} />
</Row></Center>
<Source>FY2026: operating income $11.7B − fees $5.9B = store $5.8B</Source>''', sfx=[("ding", "@{The little}")]),
dict(start="Costco is really two businesses", back=19, el='''<Center y={500}><Row gap={220}>
  <Col><IconAt at={@{One sells}} name="warehouse" size={200} color={C3.blue} /><Label at={@{One sells}} size={30}>SELLS YOU EVERYTHING</Label></Col>
  <Col><IconAt at={@{The other}} name="card" size={200} color={C3.gold} /><Label at={@{The other}} size={30} color={C3.gold}>SELLS YOU PERMISSION</Label></Col>
</Row></Center>
<Center y={820}><Label at={0.1} size={28}>TWO BUSINESSES · ABOUT THE SAME SIZE</Label></Center>'''),
dict(start="Look at it per person", back=35, el='''<Center y={260}><Row gap={30}><IconAt at={0.1} name="person" size={110} color={C3.ink} /><Big at={@{eighty-four}} color={C3.ink} size={120}>84M</Big></Row></Center>
<Center y={380}><Label at={@{eighty-four}} size={26}>PAYING MEMBERS</Label></Center>
<Center y={640}><Row gap={160} align="flex-end">
  <VBar at={@{seventy dollars a year}} h={250} value="≈ $70" label="FEES PER MEMBER" color={C3.gold} />
  <VBar at={@{seventy dollars of}} h={245} value="≈ $70" label="STORE PROFIT PER MEMBER" color={C3.blue} />
</Row></Center>
<Source>Our math · Costco 10-K FY2026</Source>'''),
dict(start="And the members aren't all equal", back=36, el='''<Center y={500}><Row gap={200}>
  <Donut at={@{About half}} pct={0.503} color={C3.gold} size={340} label="OF MEMBERS PAY FOR EXECUTIVE" center="½" />
  <Donut at={@{three quarters}} pct={0.752} color={C3.money} size={340} label="OF ALL SALES" center="75%" />
</Row></Center>
<Center y={880}><Label at={@{two percent}} size={28}>EXECUTIVE: 2% BACK · UP TO $1,250 A YEAR</Label></Center>
<Source>Costco 10-K FY2026</Source>'''),
dict(start="Here's the difference", back=34, el='''<Center y={480}><Row gap={180}>
  <Col><Label at={@{depends}} size={28} color={C3.blue}>STORE PROFIT DEPENDS ON</Label><Label at={@{prices}} size={26}>PRICES · WAGES · FREIGHT</Label></Col>
  <Col><IconAt at={@{up front}} name="card" size={150} color={C3.gold} /><Label at={@{up front}} size={28} color={C3.gold}>THE FEE: PAID UP FRONT</Label></Col>
</Row></Center>
<Center y={800}><Row gap={30}><Big at={@{ninety-two}} color={C3.money} size={120}>92%</Big><Label at={@{ninety-two}} size={26}>RENEW · U.S. &amp; CANADA</Label></Row></Center>
<Source>Costco 10-K FY2026 · 92.3% U.S./Canada</Source>''', sfx=[("ding", "@{ninety-two}")]),
dict(start="That's why the hot dog matters", back=41, el='''<Center y={430}><HotDogGrid at={@{forty-three}} /></Center>
<Center y={180}><Label at={@{forty-three}} size={32} color={C3.gold}>$65 ≈ 43 HOT DOG COMBOS</Label></Center>
<Center y={850}><Label at={@{They just}} size={34}>“COSTCO NEVER RAISED THE HOT DOG.”</Label></Center>'''),
dict(start="Even the last price hike", back=29, el='''<Center y={300}><Label at={@{September}} size={30}>SEPT 2024 · FIRST FEE HIKE SINCE 2017</Label></Center>
<Center y={540}><Row gap={50}><Big at={@{sixty to}} color={C3.dim} size={150}>$60</Big><Big at={@{sixty-five dollars}} color={C3.ink} size={110}>→</Big><Big at={@{sixty-five dollars}} color={C3.gold} size={150}>$65</Big></Row></Center>
<Center y={760}><Label at={@{Fee income}} size={30} color={C3.money}>FEE INCOME KEPT CLIMBING</Label></Center>
<Center y={900}><HotDogTag at={@{The hot dog stayed}} small /></Center>'''),
# ---------------- CHAPTER 4 ----------------
dict(start="The card explains the profit", tag=CH4, back=42, el='''<Center y={480}><Title text="One more trick." hl={["trick."]} size={110} at={@{one more}} /></Center>
<Center y={700}><Label at={@{annual report}} size={30}>HIDING IN PLAIN SIGHT · THE ANNUAL REPORT</Label></Center>
<CoinAt x={1580} y={1000} tl={[{ at: 0.2, pose: "suspicious" }]} flip />'''),
dict(start="In the company's own words", back=42, el='''<Center y={520}><Quote at={0.1} who="COSTCO 10-K · FISCAL 2026" size={70}>“We often sell inventory before we are required to pay for it.”</Quote></Center>'''),
dict(start="Remember: fewer than four thousand", el='''<Burst clips={[[38, 0], [39, @{huge volumes}], [48, @{Everything moves}], [40, @{The goods}], [41, @{supplier's bill}]]} />
<Center y={860}><Label at={@{The goods}} size={36} color={C3.gold}>GOODS LEAVE BEFORE THE BILL COMES DUE</Label></Center>''', sfx=[("whoosh", "@{Everything moves}")]),
dict(start="At the end of its last fiscal year", back=39, el='''<Top>END OF FISCAL 2026</Top>
<At x={300} y={420} anchor="l"><Col gap={50} align="flex-start">
  <BarV at={@{twenty-two}} w={980} label="COSTCO OWED ITS SUPPLIERS" value="$22.6B" color={C3.loss} />
  <BarV at={@{Everything on}} v={@{nineteen}} w={838} label="EVERYTHING ON ITS SHELVES" value="$19.3B" color={C3.blue} />
</Col></At>
<Center y={760}><Row gap={40}><Big at={@{three billion}} color={C3.gold} size={150}>+$3.3B</Big><Label at={@{paying for}} size={28}>SUPPLIERS PAY FOR THE SHELVES</Label></Row></Center>
<Center y={900}><Label at={@{hold}} size={28} color={C3.gold}>AND COSTCO HOLDS THE CASH IN THE MEANTIME</Label></Center>
<Source>Costco FY2026 balance sheet</Source>''', sfx=[("cash", "@{three billion}")]),
dict(start="And that cash pile pays", back=31, el='''<Center y={420}><Row gap={160}>
  <Callout at={@{seven hundred}} label="INTEREST & OTHER INCOME" value="+$711M" color={C3.money} line={80} vsize={110} />
  <Callout at={@{hundred and forty}} label="INTEREST PAID ON DEBT" value="−$145M" color={C3.loss} line={80} vsize={110} />
</Row></Center>
<Center y={760}><Title text="Even its money makes money." hl={["money."]} size={76} at={@{Even its}} /></Center>
<Source>Costco FY2026 results</Source>'''),
dict(start="Put it all together", back=41, el='''<Machine a={@{A promise}} b={@{Tiny markups}} c={@{Fast shelves}} d={@{And the card}} />''', sfx=[("click", "@{A promise}"), ("click", "@{Tiny markups}"), ("click", "@{Fast shelves}"), ("ding", "@{And the card}")]),
# ---------------- CHAPTER 5 ----------------
dict(start="So, who really pays for", tag=CH5, el='''<Stock n={4} until={DUR} dim={0.12} />
<Center y={520}><Title text="Who really pays?" hl={["pays?"]} size={120} at={0.1} /></Center>'''),
dict(start="Partly, Costco does", back=16, el='''<Center y={480}><Row gap={180}>
  <Col><IconAt at={@{chicken}} name="chicken" size={180} color={C3.loss} /><Label at={@{chicken}} size={28} color={C3.loss}>LOSES MONEY ON THE CHICKEN</Label></Col>
  <Col><IconAt at={@{hot dog too}} name="hotdog" size={180} color={C3.loss} /><Label at={@{hot dog too}} size={28} color={C3.loss}>AND ON THE HOT DOG</Label></Col>
</Row></Center>
<Center y={800}><Label at={@{at least}} size={28}>AT LEAST BEFORE IT STARTED MAKING ITS OWN</Label></Center>'''),
dict(start="Partly, suppliers do", el='''<Stock n={40} until={DUR} dim={-0.1} />
<Center y={520}><Row gap={40}><IconAt at={0.1} name="truck" size={180} color={C3.blue} /><IconAt at={@{wait}} name="clock" size={150} color={C3.gold} /></Row></Center>
<Center y={760}><Label at={@{wait}} size={32}>SUPPLIERS WAIT · THEIR MONEY WORKS FOR COSTCO</Label></Center>'''),
dict(start="But largely, you do", el='''<Stock n={1} until={DUR} dim={-0.1} />
<Center y={640}><MemberCard at={@{sixty-five}} price="$65" /></Center>
<Center y={260}><Title text="Largely, you do." hl={["you"]} size={100} at={0.15} /></Center>
<CoinAt x={1620} y={1010} h={280} tl={[{ at: @{At the door}, pose: "wink" }]} />''', sfx=[("ding", "@{sixty-five}")]),
dict(start="And here's the twist", back=35, el='''<Center y={260}><Title text="Costco needs the deal to feel good." hl={["needs"]} size={68} at={@{needs}} /></Center>
<Center y={580}><Donut at={@{ninety-two}} pct={0.923} color={C3.money} size={320} label="RENEW · U.S. & CANADA" center="92%" /></Center>
<Center y={900}><Label at={@{half the profit}} size={30} color={C3.loss}>OR HALF THE PROFIT WALKS OUT</Label></Center>'''),
dict(start="It's the opposite of the gym", el='''<Split left={45} right={24} />
<At x={480} y={700}><Col gap={10}><Big at={@{A gym}} color={C3.ink} size={110}>GYM</Big><Label at={@{don't show}} size={26}>PROFITS WHEN YOU DON’T SHOW UP</Label></Col></At>
<At x={1440} y={700}><Col gap={10}><Big at={@{Costco only}} color={C3.gold} size={110}>COSTCO</Big><Label at={@{Costco only}} size={26} color={C3.gold}>ONLY IF YOU DO</Label></Col></At>'''),
dict(start="So the next time you hand over", el='''<Stock n={11} until={DUR} dim={-0.1} />
<Center y={480}><HotDogTag at={0.1} out={@{It's the receipt}} /></Center>
<Center y={540}><PromiseReceipt at={@{It's the receipt}} /></Center>''', sfx=[("ding", "@{It's the receipt}")]),
dict(start="What's the one Costco price", back=18, el='''<Center y={240}><Title text="Which Costco price would you never forgive?" hl={["never"]} size={60} at={0.2} /></Center>
<CoinAt x={960} y={1000} h={440} tl={[{ at: 0.2, pose: "sign" }]} sign="YOUR PICK?" />
<At x={1560} y={900}><Row gap={16}><IconAt at={@{comments}} name="phone" size={100} color={C3.money} /><Label at={@{comments}} color={C3.money}>Tell me in the comments</Label></Row></At>'''),
dict(start="And if you want the opposite", back=45, el='''<EndCard at={0.2} />''', end_pad=6.0),
]
