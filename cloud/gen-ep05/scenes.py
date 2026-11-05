# Ep05 Christmas — scene spec. start = first words of the scene (script text); @{phrase} = seconds from scene start
# to the first word of phrase (searched from scene start). n in <Stock>/<Back> = clip number in cloud/broll/ep05.json.
CH1, CH2, CH3, CH4, CH5, CH6 = (1, "August 1939"), (2, "November"), (3, "December"), (4, "December 26"), (5, "January"), (6, "December 1909")
SRC_NRF = '<Source>NRF holiday forecast, Oct 2026</Source>'

S = [
# ---------------- HOOK · JANUARY 2 ----------------
dict(start="It's January second", el='''<Stock n={2} until={DUR} dim={-0.15} />
<Top at={0.05}>JANUARY 2</Top>
<Center y={560}><Col gap={22}><Big at={@{About seven}} size={150} color={C3.money}>~7 YEARS</Big><Label at={@{About seven}} size={30}>TO GROW A CHRISTMAS TREE</Label></Col></Center>
<Center y={860}><Label at={@{Five weeks}} size={36} color={C3.gold}>5 WEEKS ON THE JOB</Label></Center>
<Source>National Christmas Tree Association</Source>''', sfx=[("pop", "@{Five weeks}")]),
dict(start="Inside, a fifty", el='''<Stock n={3} until={DUR} dim={-0.05} />
<Center y={520}><GiftCard at={@{fifty dollar}} /></Center>
<Center y={900}><Label at={@{kitchen drawer}} size={32}>INTO THE KITCHEN DRAWER</Label></Center>'''),
dict(start="And in the mailbox", el='''<Stock n={4} until={DUR} dim={0} />
<Center y={540}><Statement at={@{credit card statement}} /></Center>''', sfx=[("swoosh", "@{credit card statement}")]),
dict(start="The magic is over", back=55, el='''<Center y={420}><Title text="The magic is over." hl={["magic"]} size={96} at={0.1} /></Center>
<Center y={600}><Title text="The money is just getting started." hl={["money"]} size={80} at={@{The money is just}} /></Center>
<CoinAt x={1560} y={1010} h={280} tl={[{ at: 0.2, pose: "suspicious" }, { at: @{The money is just}, pose: "point" }]} />'''),
dict(start="This year, American retail", alt=54, el='''<Stock n={5} until={DUR} dim={-0.15} />
<At x={960} y={300}><Label at={0.2} size={32}>THIS YEAR · NOVEMBER + DECEMBER</Label></At>
<Center y={500}><Counter to={1.013} at={@{one point zero}} dur={1.2} fmt={(v) => "$" + v.toFixed(3) + "T"} size={230} color={C3.gold} /></Center>
<Center y={720}><Label at={@{one point zero}} size={30}>U.S. RETAIL SALES · NOV + DEC 2026 · FORECAST</Label></Center>
''' + SRC_NRF, sfx=[("cash", "@{one point zero}")]),
dict(start="That's not a holiday", back=24, el='''<Center y={440}><Title text="That's not a holiday." hl={["holiday."]} size={92} at={0.05} /></Center>
<Center y={620}><Title text="That's an economy." hl={["economy."]} size={110} at={@{That's an economy}} /></Center>'''),
dict(start="And most of it doesn't", el='''<Stock n={6} until={DUR} dim={0.05} />
<Center y={380}><Title text="It doesn't work the way you think." hl={["think."]} size={72} at={@{most of it}} /></Center>
<Center y={600}><Col gap={20}><Big at={@{rewind}} size={160} color={C3.gold}>◀◀ REWIND</Big></Col></Center>''', sfx=[("whoosh", "@{rewind}")]),
# ---------------- JENNA · DECEMBER 20 ----------------
dict(start="December twentieth, last year", alt=25, el='''<Stock n={7} until={DUR} dim={-0.05} />
<Top at={0.05}>DECEMBER 20, 2025</Top>
<Center y={560}><NameCard at={@{Meet Jenna}} name="JENNA" role="NOT A REAL PERSON · VERY AVERAGE" /></Center>''', sfx=[("click", "@{Meet Jenna}")]),
dict(start="She's finishing her Christmas", el='''<Stock n={8} until={DUR} dim={0} />
<Center y={470}><Big at={@{Twelve hundred}} size={220} color={C3.ink}>$1,223</Big></Center>
<Center y={690}><Label at={@{average holiday debt}} size={30} color={C3.gold}>AVERAGE HOLIDAY DEBT · AMONG THOSE WHO BORROWED</Label></Center>
<Source>LendingTree survey, Dec 2025</Source>''', sfx=[("cash", "@{Twelve hundred}")]),
dict(start="Here's what Jenna doesn't", back=9, el='''<Center y={520}><YearFlip at={@{If she pays}} stop={@{twenty thirty}} label="PAID OFF · JULY 2033" /></Center>
<Center y={860}><Label at={@{only the minimum}} size={30} color={C3.loss}>IF SHE PAYS ONLY THE MINIMUM</Label></Center>
<CoinAt x={1560} y={1010} h={280} tl={[{ at: @{doesn't know}, pose: "suspicious" }, { at: @{twenty thirty}, pose: "shocked" }]} />
<Source>Our calculation · details later in the video</Source>''', sfx=[("ding", "@{twenty thirty}")]),
dict(start="Hold that thought", el='''<Stock n={10} until={DUR} dim={-0.1} />
<Center y={540}><Title text="Hold that thought." hl={["thought."]} size={88} at={0.05} /></Center>
<CoinAt x={1560} y={1010} h={280} tl={[{ at: @{We'll come back}, pose: "wink" }]} />'''),
# ---------------- CHAPTER 1 · AUGUST 1939 ----------------
dict(start="Before credit cards", tag=CH1, el='''<Center y={420}><Row gap={90}>
  <Col><IconAt at={@{Before credit cards}} name="card" size={190} color={C3.ink} /><Label at={@{Before credit cards}} size={30}>CREDIT CARDS</Label></Col>
  <Col><IconAt at={@{before Black Friday}} name="bag" size={190} color={C3.ink} /><Label at={@{before Black Friday}} size={30}>BLACK FRIDAY</Label></Col>
  <Col><IconAt at={@{before Amazon}} name="truck" size={190} color={C3.ink} /><Label at={@{before Amazon}} size={30}>AMAZON</Label></Col>
</Row></Center>
<Center y={760}><Row gap={24}><IconAt at={@{problem with}} name="calendar" size={110} color={C3.gold} /><Label at={@{problem with}} size={34} color={C3.gold}>A PROBLEM WITH THE CALENDAR</Label></Row></Center>'''),
dict(start="In nineteen thirty nine", back=11, el='''<Center y={540}><Nov1939 at={0.05} thu={@{five Thursdays}} last={@{thirtieth}} /></Center>''', sfx=[("tick", "@{five Thursdays}"), ("thud", "@{thirtieth}")]),
dict(start="Back then, stores", el='''<Stock n={12} until={DUR} dim={0} />
<Center y={420}><Row gap={30}><Label at={0.2} size={32}>THANKSGIVING</Label><div style={{ width: 260, height: 6, borderRadius: 3, background: C3.loss }} /><Label at={0.2} size={32}>CHRISTMAS</Label></Row></Center>
<Center y={250}><IconAt at={@{didn't push}} name="calendar" size={90} color={C3.dim} /></Center>
<Center y={560}><Label at={@{short}} size={40} color={C3.loss}>A SHORT SHOPPING SEASON</Label></Center>
<Center y={760}><Label at={@{Great Depression}} size={30}>+ STILL CRAWLING OUT OF THE GREAT DEPRESSION</Label></Center>'''),
dict(start="So the retailers did", el='''<Stock n={13} until={DUR} dim={0} />
<Center y={540}><Row gap={40}><IconAt at={0.2} name="store" size={150} color={C3.ink} /><Big at={@{lobbied}} size={110} color={C3.gold}>→</Big><IconAt at={@{the President}} name="building" size={150} color={C3.gold} /></Row></Center>
<Center y={760}><Label at={@{lobbied}} size={32}>RETAILERS LOBBIED THE PRESIDENT</Label></Center>'''),
dict(start="Franklin Roosevelt reportedly", el='''<Stock n={14} until={DUR} dim={0.05} />
<At x={960} y={150}><Label at={0.15} size={28}>PRESIDENT FRANKLIN D. ROOSEVELT</Label></At>
<Center y={360}><Quote at={@{silly}} who="FDR ON THE IDEA · AS REPORTED BY AP, 1939" size={96}>“Silly.”</Quote></Center>
<At x={960} y={540}><Label at={@{did it anyway}} size={28} color={C3.dim}>THEN HE DID IT ANYWAY</Label></At>
<Center y={680}><Big at={@{proclaimed}} size={140} color={C3.gold}>NOV 30 → NOV 23</Big></Center>
<Center y={850}><Label at={@{For shopping}} size={34} color={C3.loss}>A NATIONAL HOLIDAY · MOVED · FOR SHOPPING</Label></Center>''', sfx=[("impact", "@{Moved}")]),
dict(start="People were furious", el='''<Stock n={15} until={DUR} dim={0} />
<Center y={300}><Title text="“Franksgiving”" hl={["“Franksgiving”"]} size={110} at={@{Franksgiving}} /></Center>
<Center y={620}><Row gap={160}>
  <Col><Big at={@{thirty two}} size={170} color={C3.money}>32</Big><Label at={@{thirty two}} size={26}>STATES FOLLOWED FDR</Label></Col>
  <Col><Big at={@{sixteen}} size={170} color={C3.loss}>16</Big><Label at={@{sixteen}} size={26}>KEPT THE OLD DATE</Label></Col>
</Row></Center>
<Source>1940 · Newspapers.com archive</Source>'''),
dict(start="For a while, America", back=16, el='''<Center y={500}><Title text="Two Thanksgivings." hl={["Two"]} size={110} at={0.1} /></Center>
<CoinAt x={1560} y={1010} h={280} tl={[{ at: @{turkey}, pose: "shrug" }]} />'''),
dict(start="Eventually, Congress", el='''<Stock n={17} until={DUR} dim={0.05} />
<Center y={420}><Big at={@{fourth Thursday}} size={150} color={C3.gold}>4TH THURSDAY</Big></Center>
<Center y={580}><Label at={@{Congress}} size={28}>FIXED BY CONGRESS · 1941</Label></Center>
<Center y={800}><Label at={@{head start}} size={34} color={C3.money}>THE SHOPPING SEASON KEPT ITS HEAD START</Label></Center>'''),
dict(start="That same year, in Chicago", el='''<Stock n={18} until={DUR} dim={0.05} />
<At x={300} y={200}><IconAt at={@{department store}} name="store" size={110} color={C3.gold} /></At>
<Center y={360}><Label at={@{Montgomery Ward}} size={34} color={C3.gold}>MONTGOMERY WARD · CHICAGO · 1939</Label></Center>
<Center y={600}><NameCard at={@{Robert May}} name="ROBERT L. MAY" role="COPYWRITER · AGE 34" /></Center>
<Center y={840}><Label at={@{give away}} size={30}>JOB: A CHRISTMAS STORY TO GIVE AWAY TO SHOPPERS</Label></Center>
<Source>Smithsonian National Museum of American History</Source>'''),
dict(start="A freebie", el='''<Stock n={19} until={DUR} dim={0.05} />
<Center y={420}><Title text="A freebie." hl={["freebie."]} size={100} at={0.05} /></Center>
<Center y={600}><Title text="A marketing gimmick." hl={["gimmick."]} size={100} at={@{A marketing}} /></Center>'''),
dict(start="May wrote about a reindeer", back=20, backdim=-0.25, el='''<At x={620} y={540}><Booklets at={0.05} glow={@{shiny red nose}} /></At>
<At x={1380} y={480}><Counter to={2.4} at={@{two point four}} dur={1.0} fmt={(v) => v.toFixed(1) + "M"} size={200} color={C3.gold} /></At>
<At x={1380} y={650}><Label at={@{two point four}} size={28}>FREE COPIES · FIRST YEAR</Label></At>
<At x={1380} y={330}><Label at={@{handed out}} size={26} color={C3.gold}>HANDED OUT IN THE STORE</Label></At>''', sfx=[("sparkle", "@{shiny red nose}"), ("tick", "@{two point four}")]),
dict(start="His name was Rudolph", el='''<Center y={500}><Big at={@{Rudolph}} size={210} color={C3.loss}>RUDOLPH</Big></Center>
<CoinAt x={1560} y={1010} h={280} tl={[{ at: 0.05, pose: "suspicious" }, { at: @{Rudolph}, pose: "shocked" }]} />''', sfx=[("ding", "@{Rudolph}")]),
dict(start="So, yes. One of the most", back=40, el='''<Center y={420}><Title text="Christmas icon." hl={["icon."]} size={96} at={@{One of the most}} /></Center>
<Center y={600}><Title text="Store promotion." hl={["promotion."]} size={96} at={@{store promotion}} /></Center>
<CoinAt x={1560} y={1010} h={280} tl={[{ at: @{most American}, pose: "wink" }]} />'''),
dict(start="About twenty years later", el='''<Stock n={21} until={DUR} dim={0} />
<Center y={360}><Label at={0.2} size={30}>PHILADELPHIA POLICE · EARLY 1960s</Label></Center>
<Center y={540}><Big at={@{Black Friday}} size={170} color={C3.ink}>BLACK FRIDAY</Big></Center>
<Center y={720}><Label at={@{traffic}} size={34} color={C3.loss}>BECAUSE OF THE TRAFFIC</Label></Center>
<Source>Vocabulary.com · Philadelphia Inquirer, 1994</Source>'''),
dict(start="Merchants tried to rebrand", el='''<Stock n={22} until={DUR} dim={0} />
<Center y={520}><div style={{ position: "relative" }}><Tag at={@{Big Friday}} label="MERCHANTS' REBRAND" value="BIG FRIDAY" /><Strike at={@{went nowhere}} w={560} /></div></Center>''', sfx=[("buzz", "@{went nowhere}")]),
dict(start="So the name got a makeover", el='''<Stock n={23} until={DUR} dim={0.05} />
<Center y={440}><Row gap={60}><Big at={@{makeover}} size={130} color={C3.loss}>RED INK</Big><Big at={@{as in profit}} size={110} color={C3.dim}>→</Big><Big at={@{as in profit}} size={130} color={C3.ink}>BLACK INK</Big></Row></Center>
<Center y={700}><Label at={@{Nice story}} size={34} color={C3.gold}>NICE STORY · NOT THE ORIGINAL</Label></Center>'''),
dict(start="Here's the thing", back=24, el='''<Center y={400}><Row gap={110}>
  <Col><IconAt at={@{old tradition}} name="calendar" size={130} color={C3.gold} /><Label at={@{old tradition}} size={24}>A MOVED HOLIDAY</Label></Col>
  <Col><IconAt at={@{business took}} name="receipt" size={130} color={C3.gold} /><Label at={@{business took}} size={24}>A STORE GIVEAWAY</Label></Col>
  <Col><IconAt at={@{later}} name="bag" size={130} color={C3.gold} /><Label at={@{later}} size={24}>A RENAMED FRIDAY</Label></Col>
</Row></Center>
<Center y={720}><Title text="Built on purpose." hl={["purpose."]} size={100} at={@{built on purpose}} /></Center>''', sfx=[("ding", "@{built on purpose}")]),
# ---------------- CHAPTER 2 · NOVEMBER ----------------
dict(start="Fast forward to today", tag=CH2, alt=40, el='''<Stock n={25} until={DUR} dim={0.05} />
<At x={960} y={150}><Label at={0.1} size={30} color={C3.gold}>FAST FORWARD → TODAY</Label></At>
<Center y={480}><Donut at={@{nineteen percent}} pct={0.19} center="19%" color={C3.gold} size={400} /></Center>
<Center y={790}><Label at={@{nineteen percent}} size={28}>OF A YEAR'S RETAIL SALES · JUST NOV + DEC</Label></Center>
<Center y={250}><Label at={@{Almost a fifth}} size={26}>ALMOST A FIFTH OF THE YEAR</Label></Center>
<Center y={850}><Label at={@{darkest weeks}} size={26} color={C3.gold}>IN THE DARKEST WEEKS OF THE YEAR</Label></Center>
<Source>NRF · 5-year average</Source>'''),
dict(start="To pull it off", alt=9, el='''<Stock n={26} until={DUR} dim={0} />
<Center y={460}><Counter to={300000} at={@{three hundred thousand}} dur={1.2} fmt={(v) => Math.round(v).toLocaleString("en-US") + "+"} size={190} color={C3.ink} /></Center>
<Center y={650}><Label at={@{three hundred thousand}} size={30}>AMAZON · HOLIDAY HIRES 2026</Label></Center>
<Center y={760}><Label at={@{up twenty}} size={34} color={C3.money}>+20% VS LAST YEAR</Label></Center>
<Source>Amazon via Reuters / GeekWire, Oct 2026</Source>''', sfx=[("tick", "@{three hundred thousand}")]),
dict(start="UPS wants", el='''<Stock n={28} until={DUR} dim={0} />
<Center y={500}><Big at={@{hundred thousand}} size={190} color={C3.ink}>≈100,000</Big></Center>
<Center y={680}><Label at={@{hundred thousand}} size={30}>UPS · SEASONAL WORKERS 2026</Label></Center>'''),
dict(start="And the delivery companies", el='''<Stock n={29} until={DUR} dim={0} />
<StockSwap n={27} at={@{Last season}} until={DUR} dim={0} />
<Center y={460}><Tag at={@{peak surcharges}} label="EXTRA · PER PACKAGE" value="PEAK SURCHARGE" color={C3.loss} /></Center>
<Center y={680}><Label at={@{middle of January}} size={32}>FROM THE FALL → MID-JANUARY</Label></Center>
<Center y={820}><Label at={@{markup}} size={32} color={C3.gold}>EVEN DELIVERY HAS A CHRISTMAS MARKUP</Label></Center>
<Source>UPS · FedEx 2025 peak schedules</Source>'''),
dict(start="Even the soundtrack", el='''<Stock n={30} until={DUR} dim={-0.1} />
<At x={960} y={200}><Label at={0.1} size={32} color={C3.gold}>EVEN THE SOUNDTRACK IS A BUSINESS</Label></At>
<Center y={360}><Big at={@{nineteen ninety four}} size={130} color={C3.dim}>ONE SONG · 1994</Big></Center>
<Center y={560}><Big at={@{two and a half}} size={170} color={C3.gold}>$2.5–3M</Big></Center>
<Center y={720}><Label at={@{two and a half}} size={30}>A YEAR · ESTIMATED ROYALTIES</Label></Center>
<CoinAt x={1560} y={1010} h={280} tl={[{ at: @{never really ends}, pose: "wink" }]} />
<Source>Estimates: The Economist, NY Post</Source>'''),
dict(start="But the most interesting money", el='''<Stock n={31} until={DUR} dim={0.1} />
<At x={960} y={220}><Label at={@{stuff in the boxes}} size={32}>NOT THE STUFF IN THE BOXES…</Label></At>
<Center y={540}><GiftCard at={@{small piece of plastic}} /></Center>''', sfx=[("sparkle", "@{small piece of plastic}")]),
# ---------------- CHAPTER 3 · DECEMBER ----------------
dict(start="Gift cards are the second", tag=CH3, el='''<Stock n={32} until={DUR} dim={0.05} />
<Center y={380}><Row gap={120}>
  <Col><Big at={@{right after clothes}} size={120} color={C3.dim}>#1</Big><Label at={@{right after clothes}} size={26}>CLOTHES · 50%</Label></Col>
  <Col><Big at={@{second most}} size={120} color={C3.gold}>#2</Big><Label at={@{second most}} size={26} color={C3.gold}>GIFT CARDS · 43%</Label></Col>
</Row></Center>
<Center y={680}><Counter to={29.1} at={@{twenty nine billion}} dur={1.1} fmt={(v) => "$" + v.toFixed(1) + "B"} size={170} color={C3.money} /></Center>
<Center y={830}><Label at={@{twenty nine billion}} size={28}>PLANNED GIFT CARD SPENDING · 2025 SEASON</Label></Center>
<Source>NRF, Nov 2025</Source>'''),
dict(start="Now look at a gift card", back=33, el='''<Center y={480}><Row gap={50}>
  <GiftCard at={0.1} w={420} tilt={false} />
  <Col><Big at={@{fifty dollars today}} size={90} color={C3.money}>$50 →</Big><Label at={@{fifty dollars today}} size={24}>TODAY</Label></Col>
  <Col><IconAt at={@{company gets}} name="building" size={180} color={C3.ink} /><Label at={@{company gets}} size={24}>THE COMPANY</Label></Col>
</Row></Center>
<Center y={820}><Label at={@{owes you}} size={36} color={C3.gold}>OWES YOU: A COFFEE… SOMEDAY?</Label></Center>'''),
dict(start="Accountants call that", el='''<At x={960} y={220}><Label at={0.05} size={30}>WHAT ACCOUNTANTS CALL IT</Label></At>
<Center y={380}><div style={{ position: "relative" }}><Big at={@{deferred revenue}} size={110} color={C3.dim}>“DEFERRED REVENUE”</Big><Strike at={@{Translation}} w={900} /></div></Center>
<Center y={600}><Big at={@{interest free loan}} size={130} color={C3.gold}>INTEREST-FREE LOAN</Big></Center>
<Center y={780}><Label at={@{from you}} size={34}>FROM YOU → TO A CORPORATION</Label></Center>
<CoinAt x={1600} y={1010} h={260} tl={[{ at: @{interest free loan}, pose: "point" }]} />'''),
dict(start="And sometimes, someday", el='''<Stock n={34} until={DUR} dim={0.05} />
<At x={960} y={200}><Title text="Someday never comes." hl={["never"]} size={70} at={0.1} /></At>
<Center y={420}><Label at={@{don't expire}} size={34}>STARBUCKS CARDS IN THE U.S. · NO EXPIRATION</Label></Center>
<Center y={250}><Label at={@{statistically}} size={26} color={C3.dim}>…STATISTICALLY</Label></Center>
<Center y={600}><Label at={@{never be spent}} size={34} color={C3.gold}>BUT SOME MONEY IS NEVER SPENT</Label></Center>
<Center y={780}><Label at={@{books that}} size={30}>→ BOOKED AS REVENUE</Label></Center>'''),
dict(start="It's called breakage", back=35, el='''<Center y={300}><Title text="“Breakage.”" hl={["“Breakage.”"]} size={110} at={0.05} /></Center>
<Center y={540}><Big at={@{more than two hundred}} size={220} color={C3.money}>$200M+</Big></Center>
<Center y={720}><Label at={@{In fiscal}} size={28}>STARBUCKS · FY2025 · COMPANY-OPERATED STORES</Label></Center>
<Center y={850}><Label at={@{for coffee}} size={36} color={C3.gold}>FOR COFFEE NOBODY DRANK</Label></Center>
<CoinAt x={1600} y={1010} h={260} tl={[{ at: @{dollars of it}, pose: "shocked" }]} />
<Source>Starbucks FY2025 annual report (SEC)</Source>''', sfx=[("cash", "@{more than two hundred}")]),
dict(start="Across the country, Bankrate", el='''<Stock n={3} until={DUR} dim={0.08} />
<Center y={480}><Counter to={27} at={@{twenty seven billion}} dur={1.1} fmt={(v) => "$" + Math.round(v) + "B"} size={220} color={C3.gold} /></Center>
<Center y={680}><Label at={@{unused gift cards}} size={30}>IN UNUSED GIFT CARDS · U.S.</Label></Center>
<Center y={820}><Label at={@{kitchen drawer}} size={32} color={C3.money}>INCLUDING ONE IN YOUR DRAWER</Label></Center>
<Source>Bankrate survey estimate, 2024</Source>'''),
dict(start="And the presents that do", el='''<Stock n={37} until={DUR} dim={0.05} />
<At x={960} y={200}><Label at={0.1} size={30}>AND THE PRESENTS THAT DO GET OPENED?</Label></At>
<Center y={420}><NameCard at={@{Joel Waldfogel}} name="JOEL WALDFOGEL" role="ECONOMIST" /></Center>
<Center y={700}><Quote at={@{what is this gift}} who="HIS QUESTION" size={58}>“What is this gift actually worth to you?”</Quote></Center>'''),
dict(start="In his surveys", back=36, el='''<Center y={500}><Row gap={110}>
  <Tag at={@{well below}} label="WHAT IT COST" value="$100" color={C3.ink} rotate={-3} />
  <Tag at={@{twenty percent less}} label="WORTH TO YOU" value="≈ $80" color={C3.loss} rotate={3} />
</Row></Center>
<Center y={800}><Label at={@{twenty percent less}} size={32}>ROUGHLY 20% LESS · IN HIS SURVEYS</Label></Center>'''),
dict(start="By his estimate", el='''<Stock n={38} until={DUR} dim={0.05} />
<Center y={420}><Counter to={13} at={@{thirteen billion}} dur={1.1} fmt={(v) => "UP TO $" + Math.round(v) + "B"} size={170} color={C3.loss} /></Center>
<Center y={600}><Label at={@{evaporates}} size={30}>OF VALUE · GONE IN ONE U.S. CHRISTMAS</Label></Center>
<Center y={780}><Label at={@{Not stolen}} size={34} color={C3.gold}>NOT STOLEN · NOT SPENT · JUST GONE</Label></Center>
<Source>Waldfogel's estimate · Scroogenomics / AER 1993</Source>'''),
dict(start="Other economists push back", el='''<Stock n={39} until={DUR} dim={0.05} />
<Center y={420}><Label at={0.2} size={34}>OTHER ECONOMISTS: A GIFT ISN'T ONLY MONEY</Label></Center>
<Center y={500}><Label at={@{they have a point}} size={28} color={C3.money}>AND THEY HAVE A POINT</Label></Center>
<Center y={660}><Big at={@{sweater}} size={110} color={C3.gold}>SWEATER ≠ INVESTMENT</Big></Center>
<CoinAt x={1600} y={1010} h={260} tl={[{ at: @{sweater}, pose: "shrug" }]} />'''),
dict(start="Quick thing", back=40, el='''<Subscribe at={@{If you like}} />
<CoinAt x={1500} y={1000} h={340} tl={[{ at: @{If you like}, pose: "point" }, { at: @{Subscribing costs}, pose: "celebrate" }, { at: @{never expires}, pose: "wink" }]} />'''),
# ---------------- CHAPTER 4 · DECEMBER 26 ----------------
dict(start="Then comes the morning after", alt=8, tag=CH4, el='''<Stock n={41} until={DUR} dim={0.05} />
<Center y={400}><Big at={@{seventeen percent}} size={190} color={C3.loss}>17%</Big></Center>
<Center y={560}><Label at={@{seventeen percent}} size={28}>OF HOLIDAY SALES EXPECTED BACK · 2025</Label></Center>
<Center y={740}><Big at={@{hundred and seventy}} size={120} color={C3.ink}>≈ $170B</Big></Center>
<Center y={860}><Label at={@{traveling backwards}} size={28}>TRAVELING BACKWARDS</Label></Center>
<Source>NRF / Happy Returns, Oct 2025</Source>'''),
dict(start="And about nine percent", el='''<Stock n={42} until={DUR} dim={0.05} />
<StockSwap n={43} at={@{You buy a TV}} until={DUR} dim={0} />
<Center y={360}><Big at={@{nine percent}} size={170} color={C3.loss}>9%</Big></Center>
<Center y={500}><Label at={@{nine percent}} size={28}>OF ALL RETURNS ARE FRAUDULENT</Label></Center>
<Center y={600}><Label at={@{name for a classic}} size={26}>RETAILERS EVEN HAVE A NAME FOR IT</Label></Center>
<Center y={720}><Big at={@{box of rocks}} size={120} color={C3.gold}>“BOX OF ROCKS”</Big></Center>
<CoinAt x={1600} y={1010} h={260} tl={[{ at: @{of rocks}, pose: "shocked" }]} />
<At x={960} y={860}><Label at={@{Merry Christmas}} size={32} color={C3.loss}>MERRY CHRISTMAS</Label></At>
<Source>NRF / Happy Returns, Oct 2025</Source>''', sfx=[("thud", "@{of rocks}")]),
dict(start="But all of that is small change", back=6, backdim=-0.2, el='''<At x={960} y={250}><Label at={0.1} size={30} color={C3.dim}>ALL OF THAT IS SMALL CHANGE</Label></At>
<Center y={430}><Title text="The biggest Christmas money" hl={["biggest"]} size={86} at={@{biggest}} /></Center>
<Center y={580}><Title text="isn't made in December." hl={["December."]} size={86} at={@{isn't made}} /></Center>'''),
# ---------------- CHAPTER 5 · JANUARY ----------------
dict(start="Remember Jenna", tag=CH5, el='''<Stock n={44} until={DUR} dim={0.05} />
<Center y={560}><Statement at={@{statement}} due={@{statement} + 0.4} min={@{not alone}} /></Center>''', sfx=[("swoosh", "@{statement}")]),
dict(start="In the last three months", back=47, el='''<At x={960} y={140}><Label at={@{record}} size={30} color={C3.gold}>U.S. CREDIT CARD BALANCES · RECORD $1.28 TRILLION</Label></At>
<Center y={580}><DebtBar up={@{forty four}} down={@{come down}} rest={@{About nineteen}} /></Center>
<Source>New York Fed · Household Debt and Credit, Q4 2025 / Q1 2026</Source>''', sfx=[("rise", "@{forty four}")]),
dict(start="And that's just the plastic", el='''<Stock n={46} until={DUR} dim={0.05} />
<Center y={420}><Label at={@{Buy now}} size={34}>BUY NOW, PAY LATER</Label></Center>
<Center y={300}><Label at={@{split a purchase}} size={26} color={C3.dim}>SPLIT INTO SMALL INSTALLMENTS</Label></Center>
<Center y={600}><Counter to={20} at={@{twenty billion}} dur={1.0} fmt={(v) => "$" + Math.round(v) + "B"} size={200} color={C3.loss} /></Center>
<Center y={780}><Label at={@{twenty billion}} size={28}>ONLINE HOLIDAY SPENDING · 2025 · A RECORD</Label></Center>
<Source>Adobe Analytics, Jan 2026</Source>'''),
dict(start="Last season, thirty seven", back=7, el='''<Center y={330}><Big at={@{thirty seven}} size={170} color={C3.loss}>37%</Big></Center>
<Center y={470}><Label at={@{thirty seven}} size={28}>OF AMERICANS TOOK ON HOLIDAY DEBT</Label></Center>
<Center y={650}><People at={@{four in ten}} n={4} hl={@{four in ten} + 0.3} /></Center>
<Center y={790}><Label at={@{four in ten}} size={28}>4 IN 10 OF THEM · STILL PAYING THE CHRISTMAS BEFORE</Label></Center>
<Center y={880}><Label at={@{subscription}} size={34} color={C3.gold}>CHRISTMAS IS A SUBSCRIPTION</Label></Center>
<Source>LendingTree survey, Dec 2025</Source>'''),
dict(start="And the average interest rate", back=31, el='''<Center y={500}><Tag at={@{Twenty two point}} label="AVERAGE APR · CARDS WITH A BALANCE" value="22.36%" color={C3.loss} /></Center>
<Source>Federal Reserve G.19 · Aug 2026</Source>'''),
dict(start="So let's do Jenna's math", el='''<Stock n={45} until={DUR} dim={0.12} />
<Center y={320}><Kicker size={34} color={C3.gold}>JENNA'S MATH</Kicker></Center>
<Center y={480}><Big at={@{Twelve hundred}} size={150} color={C3.ink}>$1,223</Big></Center>
<Center y={640}><Big at={@{Twenty two percent}} size={120} color={C3.loss}>× 22%</Big></Center>
<Center y={800}><Label at={@{Minimum payments}} size={36} color={C3.gold}>MINIMUM PAYMENTS ONLY</Label></Center>''', sfx=[("click", "@{Twelve hundred}"), ("click", "@{Twenty two percent}")]),
dict(start="That's ninety one", back=48, el='''<At x={960} y={160}><Big at={@{ninety one}} size={110} color={C3.loss}>91 PAYMENTS</Big></At>
<Center y={480}><PayStrip at={@{ninety one}} dur={2.6} /></Center>
<Center y={760}><Label at={@{seven and a half}} size={34}>≈ 7.5 YEARS</Label></Center>
<Center y={880}><Big at={@{Total interest}} size={110} color={C3.gold}>≈ $1,200 INTEREST</Big></Center>
<Source>Our calculation: interest + 1% of balance, $25 minimum, 22.36% APR, no new purchases</Source>''', sfx=[("cash", "@{Total interest}")]),
dict(start="She pays for every present", el='''<Center y={500}><Row gap={90}>
  <Receipt at={0.1} title="THE GIFTS" value="$1,223" />
  <Receipt at={@{twice}} title="THE INTEREST" value="≈$1,200" color="#b8182b" />
</Row></Center>
<Center y={860}><Label at={@{goes to the bank}} size={36} color={C3.gold}>THE SECOND TIME → THE BANK</Label></Center>''', sfx=[("ding", "@{twice}")]),
dict(start="Now, to be fair", alt=5, el='''<Stock n={9} until={DUR} dim={0.08} />
<Center y={260}><Label at={@{most people}} size={28} color={C3.money}>MOST PEOPLE DON'T</Label></Center>
<Center y={420}><Big at={@{one in five}} size={160} color={C3.ink}>≈ 1 IN 5</Big></Center>
<Center y={580}><Label at={@{one in five}} size={28}>HOLIDAY BORROWERS PAID JUST THE MINIMUM</Label></Center>
<Center y={690}><Label at={@{system is built}} size={28}>BUT THE SYSTEM ALLOWS IT</Label></Center>
<Center y={790}><Label at={@{whoever lends}} size={34} color={C3.gold}>WHOEVER LENDS THE TIME GETS PAID</Label></Center>
<CoinAt x={1600} y={1010} h={260} tl={[{ at: @{whoever lends}, pose: "point" }]} />
<Source>LendingTree holiday debt survey (2023)</Source>'''),
# ---------------- CHAPTER 6 · DECEMBER 1909 ----------------
dict(start="Which brings us to a small town", tag=CH6, el='''<Stock n={50} until={DUR} dim={0.1} />
<Center y={360}><Label at={@{Pennsylvania}} size={32} color={C3.gold}>CARLISLE, PENNSYLVANIA · 1909</Label></Center>
<Center y={580}><NameCard at={@{Merkel Landis}} name="MERKEL LANDIS" role="TREASURER · CARLISLE TRUST CO." /></Center>
<Center y={820}><Big at={@{Christmas Club}} size={120} color={C3.money}>THE CHRISTMAS CLUB</Big></Center>
<Source>Rutgers NJ Digital Newspaper Project · Library of Congress</Source>'''),
dict(start="Working people brought", alt=11, el='''<Stock n={49} until={DUR} dim={0.3} />
<Center y={420}><Label at={0.2} size={34}>SMALL DEPOSITS · EVERY WEEK · ALL YEAR</Label></Center>
<Center y={620}><Label at={@{just before Christmas}} size={36} color={C3.money}>PAID BACK JUST BEFORE CHRISTMAS</Label></Center>'''),
dict(start="Back then, families paid", back=54, el='''<Center y={520}><TwoEras left={0.1} right={@{Today, we pay}} /></Center>
<CoinAt x={1640} y={1030} h={240} tl={[{ at: @{The bank held}, pose: "neutral" }, { at: @{The bank holds}, pose: "shocked" }]} />''', sfx=[("swoosh", "@{Today, we pay}")]),
dict(start="Same holiday", back=36, el='''<Center y={430}><Title text="Same holiday. Same presents." hl={["Same"]} size={86} at={0.05} /></Center>
<Center y={640}><Label at={@{The money just}} size={38} color={C3.gold}>THE MONEY FLOWS THE OTHER WAY</Label></Center>'''),
dict(start="And that's the real Christmas", el='''<Stock n={51} until={DUR} dim={0.1} />
<Center y={380}><Row gap={70}>
  <div style={{ position: "relative" }}><Label at={@{Not the toys}} size={36}>TOYS</Label><Strike at={@{Not the toys} + 0.4} w={150} /></div>
  <div style={{ position: "relative" }}><Label at={@{Not the trees}} size={36}>TREES</Label><Strike at={@{Not the trees} + 0.4} w={150} /></div>
  <div style={{ position: "relative" }}><Label at={@{trillion dollars}} size={36}>$1 TRILLION</Label><Strike at={@{trillion dollars} + 0.4} w={260} /></div>
</Row></Center>
<Center y={620}><Big at={@{It's time}} size={240} color={C3.gold}>TIME.</Big></Center>''', sfx=[("impact", "@{It's time}")]),
dict(start="The gap between getting", el='''<Center y={280}><Label at={0.1} size={38}>THE GAP BETWEEN THE GIFT AND THE PAYMENT</Label></Center>
<Center y={560}><Row gap={120}>
  <Col><IconAt at={@{gift card is you}} name="receipt" size={200} color={C3.money} /><Label at={@{gift card is you}} size={32} color={C3.money}>GIFT CARD: YOU → STORE</Label></Col>
  <IconAt at={0.3} name="clock" size={220} color={C3.gold} />
  <Col><IconAt at={@{credit card is the bank}} name="card" size={200} color={C3.loss} /><Label at={@{credit card is the bank}} size={32} color={C3.loss}>CREDIT CARD: BANK → YOU</Label></Col>
</Row></Center>
<Center y={820}><Label at={@{someone gets paid}} size={36} color={C3.gold}>SOMEONE GETS PAID FOR THE WAIT</Label></Center>'''),
# ---------------- FINAL · JANUARY 2 AGAIN ----------------
dict(start="So, January second again", el='''<Stock n={2} until={DUR} dim={0} />
<StockSwap n={53} at={@{tinsel}} until={DUR} dim={0} />
<Top at={0.05}>JANUARY 2 · AGAIN</Top>'''),
dict(start="And that fifty dollar gift card", el='''<Stock n={3} until={DUR} dim={0.08} />
<Center y={480}><GiftCard at={@{fifty dollar}} /></Center>
<Center y={850}><Label at={@{most profitable}} size={34} color={C3.gold}>THE MOST PROFITABLE PRESENT IN THE HOUSE</Label></Center>''', sfx=[("sparkle", "@{most profitable}")]),
dict(start="Thanksgiving was moved", back=52, el='''<Center y={540}><Col gap={46}>
  <Row gap={24}><IconAt at={0.05} name="calendar" size={90} color={C3.gold} /><Label at={0.05} size={34}>THANKSGIVING · MOVED FOR SHOPPING</Label></Row>
  <Row gap={24}><IconAt at={@{Rudolph was}} name="receipt" size={90} color={C3.gold} /><Label at={@{Rudolph was}} size={34}>RUDOLPH · A STORE GIVEAWAY</Label></Row>
  <Row gap={24}><IconAt at={@{loan you forgot}} name="card" size={90} color={C3.gold} /><Label at={@{loan you forgot}} size={34}>YOUR GIFT CARD · A FORGOTTEN LOAN</Label></Row>
</Col></Center>'''),
dict(start="So, be honest", back=55, el='''<Center y={440}><Title text="Still paying for last Christmas?" hl={["paying"]} size={86} at={@{Are you still}} /></Center>
<Center y={620}><Label at={@{comments}} size={34} color={C3.gold}>TELL ME IN THE COMMENTS</Label></Center>
<CoinAt x={1560} y={1010} h={300} tl={[{ at: 0.1, pose: "suspicious" }, { at: @{comments}, pose: "point" }]} />'''),
dict(start="And if you want to know", end_pad=3.0, el='''<EndCard at={0.1} />'''),
]
