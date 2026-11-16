# T01 «You've Been Tipping the Owner, Not Your Waiter» — первый ролик канала They Saw You Coming (16.11.2026).
# Визуальная идея: чек Джейка, который «дописывается» по главам: еда → service charge → wellness fee → чаевые от суммы с налогом → итог $128.16.
# Сквозной герой — Джейк (стоки 1/3, лицо не видно — «он может быть тобой»). Сквозной гэг: эспрессо-машина владельца «THE GARY 3000» → в финале «GARY 2000 MINI».
# Главы: 1 The Twenty Percent → 2 The Fee With a Spa Name → 3 The Screen → финал «как не попасться».
# Приёмы банка: бомба под столом (Jake tipped twice — в первые 15 с), действие → смысл, перевод с корпоративного, предмет-талисман (чек).
# Номера стока = порядок в cloud/broll/t01.json. Музыка — Фонотека YouTube (The Grey Room).

EP = dict(
    comp="T01Restaurants",
    words="src/videos/t01-restaurants-words.json",
    text="cloud/voice/t01-text",
    parts=5,
    broll="cloud/broll/t01.json",
    audio="audio/t01-voiceover.mp3",
    voice_vol=0.9,
    music=[
        dict(**{'from': 0.0}, to=37.6, file="audio/t01/music-trailer.mp3", vol=0.10),
        dict(**{'from': 37.0}, to=182.4, file="audio/t01/music-c1.mp3", vol=0.09),
        dict(**{'from': 181.8}, to=319.9, file="audio/t01/music-c2.mp3", vol=0.09),
        dict(**{'from': 319.3}, to=485.2, file="audio/t01/music-c3.mp3", vol=0.09),
        dict(**{'from': 484.6}, to=560.0, file="audio/t01/music-finale.mp3", vol=0.10),
    ],
    lens={},
)
import json, os
_l = os.path.join(os.path.dirname(__file__), "t01-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

C1, C2, C3 = (1, "The Twenty Percent"), (2, "The Fee With a Spa Name"), (3, "The Screen")
R = 'x={1440}'  # правая колонка для цифр (не на лицах)

S = [
# ---------------- ТРЕЙЛЕР ----------------
dict(start="This is Jake", sfx=[('ep06-pop:0.3', '0.3')], stock=1, el='''<Center y={860}><NameCard6 at={0.2} name="Jake" role="OUT FOR DINNER · COULD BE YOU" icon="person" /></Center>'''),
dict(start="Burger, fries, a cold beer", sfx=[('ep06-kaching:0.25', '@{Eighty bucks}')], stock=53, el='''<Center x={1440} y={760}><In at={@{Eighty bucks}} from="fade"><Plate6><BigNum at={@{Eighty bucks}} icon="receipt" size={150} label="ON THE MENU">$80</BigNum></Plate6></In></Center>'''),
dict(start="Jake left a twenty percent", sfx=[('ep06-coin:0.3', '0.3'), ('ep09-cheer:0.2', '@{because Jake}')], stock=4, alt=(3, "because Jake"), el='''<Center x={1440} y={300}><Plate6 at={0.3}><BigNum at={0.25} icon="percent" size={130} label="TIP">+20%</BigNum></Plate6></Center>
<Meme at={@{because Jake}} text="certified good guy" y={920} />'''),
dict(start="Here's what Jake doesn't know", stock=5, el='''<Center y={880}><In at={@{His waiter}} from="fade"><Plate6><Words text="His waiter might never see a cent of it." at={@{His waiter}} size={66} hl={["never"]} maxW={1500} /></Plate6></In></Center>'''),
dict(start="Jake actually tipped twice", sfx=[('ep06-stamp:0.4', '@{tipped twice}'), ('ep09-trombone:0.25', '@{straight to the owner}')], stock=7, alt=(57, "And one of those"), el='''<Center y={420}><Stamp at={@{tipped twice}} out={@{And one of those}} text="tipped twice" size={110} /></Center>
<Meme at={@{straight to the owner}} text="the owner, probably" y={920} />'''),
dict(start="Today, the fee that looks", hard=True, sfx=[('ep06-whoosh:0.25', '0.02')], stock=9, el='''<Center y={880}><Plate6><Label6 at={0.15} size={44} color={C6.ink}>THE FEE THAT LOOKS LIKE A TIP</Label6></Plate6></Center>'''),
dict(start="The surcharges named", hard=True, sfx=[('ep06-whoosh:0.2', '0.02')], stock=26, el='''<Center y={880}><Plate6><Label6 at={0.1} size={44} color={C6.ink}>SURCHARGES NAMED LIKE A SPA MENU</Label6></Plate6></Center>'''),
dict(start="The tip screen that does", hard=True, sfx=[('ep06-whoosh:0.2', '0.02')], stock=50, el='''<Center y={880}><Plate6><Label6 at={0.1} size={44} color={C6.ink}>THE SCREEN THAT DOES MATH AGAINST YOU</Label6></Plate6></Center>'''),
dict(start="And how an eighty dollar", hard=True, sfx=[('ep06-boom:0.3', '@{hundred and twenty}')], stock=10, el='''<Center y={800}><Split6 scale={0.6} at={@{eighty dollar}} left={{ title: "DINNER", value: "$80", color: C6.ink }} right={{ title: "THE BILL", value: "$128", color: C6.loss, at: @{hundred and twenty} }} /></Center>'''),
dict(start="They saw you coming", sfx=[('ep06-boom:0.25', '0.1')], stock=11, dim=0.35, el='''<Center y={540}><TitleCard at={0.1} title="Tipping the Owner" hl={["Owner"]} /></Center>'''),

# ---------------- ГЛАВА 1 · THE TWENTY PERCENT ----------------
dict(start="Chapter one", sfx=[('ep06-whoosh:0.25', '0.02')], tag=C1, hard=True, stock=12, dim=0.3, el='''<Center y={540}><ChapterCard n={1} title="The Twenty Percent" /></Center>'''),
dict(start="Look at the bottom", alt=(45, "Sounds like a tip"),  sfx=[('ep06-receipt:0.3', '0.3'), ('ep06-stamp:0.35', '@{Case closed}')], stock=2, dim=0.3, el='''<Center x={1380} y={500}><div style={{ scale: "1.35" }}><Receipt6 at={0.3} w={560} step={0.6} lines={[["FOOD", "$80.00"], ["SERVICE 20%", "$16.00"]]} /></div></Center>
<Center x={560} y={760}><Stamp at={@{Case closed}} text="case closed" color={C6.accent} size={80} /></Center>'''),
dict(start="Now meet the IRS", alt=(42, "The moment the restaurant"),  sfx=[('ep06-pop:0.3', '@{You pick the amount}'), ('ep06-pop:0.3', '@{You pick who}')], stock=13, dim=0.3, el='''<Meme at={0.6} out={@{A tip only}} text="irs: fun edition" y={880} size={70} />
<Center y={820}><In at={@{A tip only}} from="fade"><Plate6 pad="30px 56px"><Col gap={22} align="flex-start">
  <Label6 at={@{you choose}} size={40} color={C6.ink}>A TIP IS A TIP ONLY IF:</Label6>
  <Label6 at={@{You pick the amount}} size={40} color={C6.accent}>YOU PICK THE AMOUNT</Label6>
  <Label6 at={@{You pick who}} size={40} color={C6.accent}>YOU PICK WHO GETS IT</Label6>
</Col></Plate6></In></Center>'''),
dict(start="The IRS literally says", sfx=[('ep06-stamp:0.35', '@{service charges, not}')], stock=35, el='''<Center y={830}><Plate6><Words text="“Automatic gratuities are service charges, not tips.”" at={0.3} size={60} hl={["not", "tips.”"]} maxW={1600} /></Plate6></Center>
<Source6>IRS · Tips versus service charges</Source6>'''),
dict(start="And a service charge belongs", sfx=[('ep06-kaching:0.25', '@{belongs to the restaurant}'), ('ep06-scratch:0.3', '@{names after himself}')], stock=14, alt=(15, "on a new espresso"), el='''<Center x={1440} y={820}><In at={@{belongs to the restaurant}} out={@{on a new espresso}} from="fade"><Plate6><Label6 at={@{belongs to the restaurant}} size={40} color={C6.accent}>SERVICE CHARGE → RESTAURANT</Label6></Plate6></In></Center>
<Meme at={@{names after himself}} text="the gary 3000" y={900} />'''),
dict(start="And for a lot of waiters", sfx=[('ep06-counter:0.3', '@{two dollars and thirteen}')], stock=16, el='''<Center x={1440} y={760}><In at={@{two dollars and thirteen}} from="fade"><Plate6><BigNum at={@{two dollars and thirteen}} icon="clock" size={150} label="PER HOUR · FEDERAL TIPPED MINIMUM">$2.13</BigNum></Plate6></In></Center>
<Source6>U.S. Department of Labor · FLSA</Source6>'''),
dict(start="Two thirteen. That's not", sfx=[('ep09-trombone:0.25', '@{parking meter}')], stock=17, clean=True, el='''<Meme at={@{parking meter}} text="your waiter's hourly wage" y={900} />'''),
dict(start="So here's the one rule", sfx=[('ep06-pop:0.3', '@{A tip is money}'), ('ep06-boom:0.3', '@{A fee is money}')], stock=18, dim=0.25, el='''<Center y={780}><Split6 scale={0.6} at={@{A tip is money}} left={{ title: "A TIP", value: "YOU GIVE", color: C6.money }} right={{ title: "A FEE", value: "THEY TAKE", color: C6.loss, at: @{A fee is money} }} /></Center>'''),

dict(start="In Seattle", sfx=[('ep06-pop:0.3', '@{twenty percent service}'), ('ep06-counter:0.3', '@{fourteen percent}')], stock=19, alt=(20, "According to the lawsuit"), el='''<Center x={600} y={840}><In at={@{twenty percent service}} from="fade"><Plate6><Label6 at={@{twenty percent service}} size={38} color={C6.ink}>SEATTLE · 20% SERVICE CHARGE</Label6></Plate6></In></Center>
<Center x={1450} y={560}><Donut6 at={@{fourteen percent}} pct={14} center="~14%" label="WENT TO SERVERS" size={360} /></Center>
<Source6>Lawsuit vs. Tom Douglas restaurants · Foster Garvey</Source6>'''),
dict(start="The company says it did", sfx=[('ep06-kaching:0.3', '@{two point four}')], stock=51, el='''<Center x={1440} y={760}><In at={@{two point four}} from="fade"><Plate6><BigNum at={@{two point four}} icon="receipt" size={150} label="SETTLED · 2019 · 1,000+ WORKERS">$2.4M</BigNum></Plate6></In></Center>
<Source6>Associated Press · Nov 2019</Source6>'''),
dict(start="In New York, Per Se", sfx=[('ep06-pop:0.3', '@{added twenty percent}')], stock=22, alt=(21, "added twenty percent"), el='''<Center y={860}><In at={@{added twenty percent}} from="fade"><Plate6><Label6 at={@{added twenty percent}} size={40} color={C6.ink}>PER SE · +20% ON PRIVATE DINNERS</Label6><Label6 at={@{not the waiters}} size={34} color={C6.accent}>NOT CLEARLY DISCLOSED AS NOT A TIP</Label6></Plate6></In></Center>
<Source6>New York Attorney General · Quartz, CBS News</Source6>'''),
dict(start="Five hundred thousand dollars", sfx=[('ep06-kaching:0.3', '0.2')], stock=6, el='''<Center x={1440} y={760}><Plate6><BigNum at={0.2} icon="receipt" size={150} label="SETTLED WITH NEW YORK STATE">$500K</BigNum></Plate6></Center>'''),
dict(start="And in San Francisco", sfx=[('ep06-pop:0.3', '@{twelve years}'), ('ep06-kaching:0.3', '@{twelve million}')], stock=23, alt=(24, "banquet servers"), el='''<Center y={800}><In at={@{twelve years}} from="fade"><Plate6><Row gap={60}>
  <BigNum at={@{twelve years}} icon="calendar" size={120} label="IN COURT" color={C6.ink}>12 yrs</BigNum>
  <BigNum at={@{twelve million}} icon="receipt" size={120} label="PROPOSED SETTLEMENT">$12M</BigNum>
</Row></Plate6></In></Center>
<Source6>Hilton San Francisco Union Square · Daily Journal 2026</Source6>'''),
dict(start="The part that really stings", sfx=[('ep06-counter:0.3', '@{eight in ten}')], stock=25, el='''<Center x={480} y={480}><Donut6 at={@{eight in ten}} pct={80} center="~8 in 10" label="SKIPPED THE TIP" size={380} /></Center>
<Source6>A server who sued an LA restaurant group · Restaurant Business</Source6>'''),
dict(start="So the waiter loses", sfx=[('ep06-pop:0.3', '@{The owner keeps}'), ('ep06-scratch:0.3', '@{except the guy}')], stock=41, alt=(58, "Everybody loses"), el='''<Center x={600} y={540}><In at={0.1} out={@{Everybody loses}} from="fade"><Plate6 pad="30px 50px"><Col gap={22} align="flex-start">
  <Label6 at={0.1} size={40} color={C6.loss}>WAITER · LOSES THE TIP</Label6>
  <Label6 at={@{The owner keeps}} size={40} color={C6.money}>OWNER · KEEPS THE CHARGE</Label6>
  <Label6 at={@{And you walk}} size={40} color={C6.accent}>YOU · FEEL GENEROUS</Label6>
</Col></Plate6></In></Center>
<Meme at={@{except the guy}} text="the guy with the keys" y={920} />'''),

# ---------------- ГЛАВА 2 · THE FEE WITH A SPA NAME ----------------
dict(start="Chapter two", sfx=[('ep06-whoosh:0.25', '0.02')], tag=C2, hard=True, stock=8, dim=0.3, el='''<Center y={540}><ChapterCard n={2} title="The Fee With a Spa Name" /></Center>'''),
dict(start="Right above the service charge", sfx=[('ep06-receipt:0.3', '0.3'), ('ep06-stamp:0.35', '@{Wellness fee}')], stock=27, dim=0.3, el='''<Center x={1380} y={520}><div style={{ scale: "1.35" }}><Receipt6 at={0.2} w={600} step={0.35} lines={[["FOOD", "$80.00"], ["SERVICE 20%", "$16.00"]]} /></div></Center>
<Center x={1380} y={860}><Stamp at={@{Wellness fee}} text="wellness fee 3.5%  $2.80" color={C6.loss} size={56} rotate={-4} /></Center>'''),
dict(start="Jake did not receive", sfx=[('ep06-scratch:0.3', '0.3'), ('ep09-bell:0.3', '@{Jake received a burger}')], stock=56, clean=True, alt=(1, "Jake received a burger"), el='''<Meme at={0.4} out={@{Jake received a burger}} text="wellness (not included)" y={900} />
<Meme at={@{Jake received a burger}} text="jake's wellness" y={900} />'''),
dict(start="These fees have the best", sfx=[('ep06-pop:0.3', '@{Healthcare surcharge}'), ('ep06-pop:0.3', '@{Wellness charge}'), ('ep06-pop:0.3', '@{Inflation fee}')], stock=54, dim=0.25, el='''<Center x={620} y={560}><Plate6 at={@{Healthcare surcharge}} pad="30px 50px"><Col gap={22} align="flex-start">
  <Label6 at={@{Healthcare surcharge}} size={42} color={C6.ink}>“HEALTHCARE SURCHARGE”</Label6>
  <Label6 at={@{Wellness charge}} size={42} color={C6.ink}>“WELLNESS CHARGE”</Label6>
  <Label6 at={@{Inflation fee}} size={42} color={C6.accent}>“INFLATION FEE”</Label6>
</Col></Plate6></Center>'''),
dict(start="In Los Angeles, people", sfx=[('ep06-counter:0.3', '@{two hundred and eighty}')], stock=28, alt=(29, "started a public spreadsheet"), el='''<Center x={1440} y={760}><In at={@{two hundred and eighty}} from="fade"><Plate6><BigNum at={@{two hundred and eighty}} icon="store" size={150} label="LA COUNTY RESTAURANTS · 2023">280+</BigNum></Plate6></In></Center>
<Source6>Reddit spreadsheet via Nation's Restaurant News</Source6>'''),
dict(start="Translation from corporate", sfx=[('ep06-scratch:0.3', '@{prices went up}')], stock=30, el='''<CorpSub at={0.2} corp="“Inflation fee”" human="prices went up and we hid it" />'''),
dict(start="Because that's the whole trick", sfx=[('ep06-pop:0.3', '@{The menu says}'), ('ep09-trombone:0.25', '@{give the burger back}')], stock=43, alt=(59, "And you can't"), el='''<Center y={860}><In at={@{The real price}} out={@{And you can't}} from="fade"><Plate6><Words text="The real price shows up after you've eaten." at={@{The real price}} size={62} hl={["after"]} maxW={1500} /></Plate6></In></Center>
<Meme at={@{give the burger back}} text="no refunds on digested burgers" y={900} size={68} />'''),
dict(start="Why not just raise", alt=(53, "A seventeen dollar"),  sfx=[('ep06-pop:0.3', '@{seventeen dollar}'), ('ep06-pop:0.3', '@{eighteen dollar}')], stock=37, dim=0.25, el='''<Center y={540}><In at={0.1} out={@{A seventeen dollar}} from="fade"><Plate6><Words text="Why not just raise the menu price?" at={0.1} size={70} maxW={1500} /></Plate6></In></Center>
<Center y={780}><Split6 scale={0.6} at={@{seventeen dollar}} left={{ title: "LOOKS CHEAPER", value: "$17+fee", color: C6.money }} right={{ title: "LOOKS PRICIER", value: "$18", color: C6.loss, at: @{eighteen dollar} }} /></Center>'''),
dict(start="California's attorney general said", sfx=[('ep06-counter:0.3', '@{eighty-five percent}')], stock=10, alt=(60, "And in a Consumer"), el='''<Center x={1450} y={520}><Donut6 at={@{eighty-five percent}} pct={85} center="85%" label="HIT BY A HIDDEN FEE" size={380} /></Center>
<Source6>Consumer Reports survey · 2018</Source6>'''),
dict(start="Regulators noticed", alt=(14, "Twenty thousand"),  sfx=[('ep06-pop:0.3', '@{three and a half}'), ('ep06-kaching:0.3', '@{Twenty thousand}')], stock=31, el='''<Center y={800}><In at={@{three and a half}} from="fade"><Plate6><Row gap={60}>
  <BigNum at={@{three and a half}} icon="percent" size={110} label="“EMPLOYEE BENEFITS CHARGE”" color={C6.ink}>3.5%</BigNum>
  <BigNum at={@{Twenty thousand}} icon="receipt" size={110} label="PENALTIES · ARIZONA AG">$20K</BigNum>
</Row></Plate6></In></Center>
<Source6>Arizona Attorney General · April 2023</Source6>'''),
dict(start="In Washington, D.C.", sfx=[('ep06-pop:0.3', '@{three point seven}')], stock=32, el='''<Center x={1440} y={760}><In at={@{three point seven}} from="fade"><Plate6><BigNum at={@{three point seven}} icon="percent" size={140} label="SURCHARGE · OLD EBBITT GRILL GROUP">3.75%</BigNum></Plate6></In></Center>
<Source6>Travelers United v. Clyde's Restaurant Group</Source6>'''),
dict(start="They called it a restaurant", sfx=[('ep09-bell:0.3', '@{except the pool}')], stock=33, clean=True, alt=(34, "except the pool"), el='''<Center y={880}><In at={@{restaurant resort fee}} out={@{except the pool}} from="fade"><Plate6><Label6 at={@{restaurant resort fee}} size={44} color={C6.accent}>“RESTAURANT RESORT FEE”</Label6></Plate6></In></Center>
<Meme at={@{except the pool}} text="the pool" y={900} />'''),
dict(start="The company dropped the fee", sfx=[('ep06-stamp:0.35', '0.3')], stock=11, el='''<Center y={820}><Stamp at={0.3} text="fee dropped" color={C6.money} size={88} /></Center>'''),
dict(start="And California? California", sfx=[('ep06-pop:0.3', '@{July first}'), ('ep06-stamp:0.4', '@{got themselves an exception}'), ('ep06-scratch:0.3', '@{font size six}')], stock=35, alt=(7, "Somewhere"), el='''<Center y={820}><In at={@{July first}} out={@{Somewhere}} from="fade"><Plate6><Label6 at={@{July first}} size={36} color={C6.ink}>JULY 1, 2024 · HIDDEN FEE BAN</Label6><Label6 at={@{Two days before}} size={36} color={C6.accent}>JUNE 29 · EXCEPTION: RESTAURANTS</Label6></Plate6></In></Center>
<Meme at={@{font size six}} text="font size: six" y={900} />
<Source6>California SB 478 · SB 1524</Source6>'''),
dict(start="If your last dinner bill", sfx=[('ep06-pop:0.3', '@{hit subscribe}')], stock=55, clean=True, el='''<Subscribe6 at={@{hit subscribe}} />'''),

# ---------------- ГЛАВА 3 · THE SCREEN ----------------
dict(start="Chapter three", sfx=[('ep06-whoosh:0.25', '0.02')], tag=C3, hard=True, stock=9, dim=0.3, el='''<Center y={540}><ChapterCard n={3} title="The Screen" /></Center>'''),
dict(start="The waiter brings the card", sfx=[('click:0.4', '@{Twenty.}'), ('click:0.4', '@{Twenty-five.}'), ('click:0.4', '@{Thirty.}'), ('ep09-trombone:0.25', '@{ashamed of itself}')], stock=50, alt=(61, "hiding in the corner"), el='''<Center y={820}><In at={@{Three big buttons}} out={@{hiding in the corner}} from="fade"><Row gap={40}>
  <Plate6><Label6 at={@{Twenty.}} size={64} color={C6.ink}>20%</Label6></Plate6>
  <Plate6><Label6 at={@{Twenty-five.}} size={64} color={C6.ink}>25%</Label6></Plate6>
  <Plate6><Label6 at={@{Thirty.}} size={64} color={C6.accent}>30%</Label6></Plate6>
  <Label6 at={@{no tip}} size={20} color={C6.mint}>no tip</Label6>
</Row></In></Center>
<Meme at={@{ashamed of itself}} text="the “no tip” button" y={900} />'''),
dict(start="That's not an accident", sfx=[('ep06-counter:0.3', '@{thirteen million}')], stock=36, el='''<Center x={1440} y={760}><In at={@{thirteen million}} from="fade"><Plate6><BigNum at={@{thirteen million}} icon="car" size={150} label="NEW YORK TAXI RIDES STUDIED">13M+</BigNum></Plate6></In></Center>
<Source6>Haggag & Paci · Default Tips · AEJ: Applied 2014</Source6>'''),
dict(start="When the screen showed", sfx=[('ep06-pop:0.3', '@{instead of}'), ('ep06-boom:0.3', '@{roughly ten percent}')], stock=22, dim=0.3, el='''<Center y={780}><Split6 scale={0.6} at={0.2} left={{ title: "BUTTONS 15 · 20 · 25", value: "tips", color: C6.ink }} right={{ title: "BUTTONS 20 · 25 · 30", value: "≈+10%", color: C6.money, at: @{roughly ten percent} }} /></Center>'''),
dict(start="Same rides", sfx=[('ep06-pop:0.3', '@{tipped nothing}')], stock=49, el='''<Center y={880}><In at={0.1} out={@{More people}} from="fade"><Plate6><Words text="Same rides. Same city. Different buttons." at={0.1} size={60} hl={["Different"]} maxW={1600} /></Plate6></In></Center>
<Center x={1440} y={400}><In at={@{tipped nothing}} from="fade"><Plate6><Label6 at={@{tipped nothing}} size={40} color={C6.loss}>MORE PEOPLE TIPPED $0</Label6></Plate6></In></Center>'''),
dict(start="And there's a second switch", sfx=[('click:0.4', '@{before tax}'), ('click:0.4', '@{after tax}')], stock=4, dim=0.25, el='''<Center y={820}><Row gap={40}>
  <In at={@{before tax}} from="fade"><Plate6><Label6 at={@{before tax}} size={48} color={C6.money}>TIP BEFORE TAX</Label6></Plate6></In>
  <In at={@{after tax}} from="fade"><Plate6><Label6 at={@{after tax}} size={48} color={C6.loss}>TIP AFTER TAX</Label6></Plate6></In>
</Row></Center>
<Source6>Toast · Display suggested tip amounts</Source6>'''),
dict(start="Etiquette experts say", alt=(21, "The screen can quietly"),  sfx=[('ep06-pop:0.3', '@{The tax.}'), ('ep06-pop:0.3', '@{The wellness fee}'), ('ep06-pop:0.3', '@{Even the service}')], stock=18, el='''<Center x={600} y={560}><Plate6 pad="30px 50px"><Col gap={20} align="flex-start">
  <Label6 at={0.2} size={40} color={C6.money}>TIP ON: THE FOOD ✓</Label6>
  <Label6 at={@{The tax.}} size={40} color={C6.loss}>THE TAX ✗</Label6>
  <Label6 at={@{The wellness fee}} size={40} color={C6.loss}>THE WELLNESS FEE ✗</Label6>
  <Label6 at={@{Even the service}} size={40} color={C6.loss}>THE SERVICE CHARGE ✗</Label6>
</Col></Plate6></Center>
<Source6>Emily Post Institute via Toast</Source6>'''),
dict(start="Let's do Jake's math", alt=(29, "Jake taps"),  sfx=[('ep06-receipt:0.3', '@{Food, eighty}'), ('ep06-kaching:0.3', '@{Twenty-one thirty-six}')], stock=37, dim=0.35, el='''<Center x={1380} y={540}><div style={{ scale: "1.35" }}><Receipt6 at={@{Food, eighty}} w={640} step={1.15} lines={[["FOOD", "$80.00"], ["WELLNESS 3.5%", "$2.80"], ["SERVICE 20%", "$16.00"], ["TAX", "$8.00"], ["SUBTOTAL", "$106.80"], ["TIP 20%", "$21.36"]]} /></div></Center>'''),
dict(start="Twenty percent of the food would", sfx=[('ep06-stamp:0.4', '@{extra five bucks}')], stock=3, el='''<Center x={1440} y={360}><Plate6><Label6 at={0.2} size={36} color={C6.ink}>20% OF THE FOOD = $16.00</Label6></Plate6></Center>
<Center x={1300} y={780}><Stamp at={@{extra five bucks}} text="+$5.36 for one tap" color={C6.accent} size={76} /></Center>'''),
dict(start="Back in March", sfx=[('ep06-scratch:0.3', '@{Even she thinks}')], stock=38, alt=(44, "A restaurant owner. Even"), el='''<Center y={880}><In at={0.3} out={@{A restaurant owner. Even}} from="fade"><Plate6><Label6 at={0.3} size={36} color={C6.ink}>DAVE & BUSTER'S · TIP ON THE POST-TAX TOTAL (REPORTED)</Label6></Plate6></In></Center>
<Meme at={@{Even she thinks}} text="even the owners think it's a lot" y={900} size={66} />
<Source6>Fox News · March 2026</Source6>'''),
dict(start="Some receipts go further", alt=(59, "Just sitting there"),  sfx=[('ep06-receipt:0.3', '@{Automatic gratuity}'), ('ep09-trombone:0.25', '@{Hoping}')], stock=7, dim=0.35, el='''<Center x={1380} y={480}><div style={{ scale: "1.35" }}><Receipt6 at={@{Automatic gratuity}} w={560} step={0.9} lines={[["FOOD", "$80.00"], ["AUTO GRATUITY", "$14.40"], ["TIP", "______"]]} /></div></Center>
<Meme at={@{Hoping}} text="the tip line, hoping" y={900} />'''),
dict(start="And the QR code", alt=(60, "Convenient for who"),  sfx=[('ep06-scratch:0.3', '@{Convenient for who}')], stock=39, el='''<CorpSub at={@{convenience fee}} corp="“Convenience fee”" human="convenient for who?" />
<Source6>Hoke v. Sunday App · filed Jan 2026</Source6>'''),
dict(start="Ordering online is the same", alt=(12, "You find out"),  stock=40, el='''<Center y={880}><In at={@{Shake Shack}} from="fade"><Plate6><Label6 at={@{Shake Shack}} size={36} color={C6.ink}>SHAKE SHACK · FEES ON THE LAST SCREEN (LAWSUIT)</Label6></Plate6></In></Center>
<Source6>Copaken v. Shake Shack · Feb 2025</Source6>'''),
dict(start="People are catching on", alt=(49, "And more than a quarter"),  sfx=[('ep06-counter:0.3', '@{thirty-eight percent}'), ('ep06-pop:0.3', '@{more than a quarter}')], stock=47, dim=0.25, el='''<Center y={780}><Plate6 at={@{thirty-eight percent}}><Row gap={60}>
  <BigNum at={@{thirty-eight percent}} icon="phone" size={120} label="ANNOYED BY PRESET SCREENS">38%</BigNum>
  <BigNum at={@{more than a quarter}} icon="percent" size={120} label="TIP LESS OR NOTHING" color={C6.loss}>27%</BigNum>
</Row></Plate6></Center>
<Source6>Bankrate tipping survey · June 2025</Source6>'''),
dict(start="So, the final bill", sfx=[('ep06-boom:0.35', '@{a hundred and twenty-eight}'), ('ep06-stamp:0.4', '@{Sixty percent}')], stock=27, dim=0.3, alt=(52, "And thirty-seven"), el='''<Center y={430}><In at={0.2} out={@{And thirty-seven}} from="fade"><Split6 scale={0.7} at={@{eighty dollars}} left={{ title: "FOOD", value: "$80", color: C6.ink }} right={{ title: "JAKE PAID", value: "$128.16", color: C6.loss, at: @{a hundred and twenty-eight} }} /></In></Center>
<Center y={850}><Stamp at={@{Sixty percent}} out={@{And thirty-seven}} text="+60%" size={90} /></Center>
<Meme at={@{Almost half}} text="$37 in “tips”" y={900} size={64} />'''),

# ---------------- ФИНАЛ · КАК НЕ ПОПАСТЬСЯ ----------------
dict(start="So how do you not", sfx=[('ep06-whoosh:0.25', '0.02')], hard=True, stock=43, dim=0.3, el='''<Center y={540}><Words text="How not to get played" at={0.1} size={110} hl={["played"]} /></Center>'''),
dict(start="One. Read the bottom", sfx=[('ep06-pop:0.3', '0.2'), ('ep06-pop:0.3', '@{Does this go}')], stock=30, el='''<Center y={820}><Plate6 pad="28px 50px"><Col gap={18} align="flex-start">
  <Label6 at={0.2} size={42} color={C6.ink}>1 · READ THE BOTTOM OF THE MENU</Label6>
  <Label6 at={@{Does this go}} size={42} color={C6.accent}>ASK: “DOES THIS GO TO YOU?”</Label6>
</Col></Plate6></Center>'''),
dict(start="Two. If it does", sfx=[('ep06-pop:0.3', '0.2')], stock=9, el='''<Center y={860}><Plate6><Label6 at={0.2} size={42} color={C6.ink}>2 · IF IT DOES — THAT’S YOUR TIP</Label6></Plate6></Center>'''),
dict(start="Three. If it doesn't", sfx=[('ep06-coin:0.3', '0.3')], stock=51, el='''<Center y={860}><Plate6><Label6 at={0.2} size={42} color={C6.ink}>3 · IF NOT — TIP YOUR WAITER DIRECTLY</Label6></Plate6></Center>'''),
dict(start="Four. Tip on the food", sfx=[('ep06-pop:0.3', '0.2')], stock=2, el='''<Center y={860}><Plate6><Label6 at={0.2} size={42} color={C6.ink}>4 · TIP ON THE FOOD, NOT THE TAX OR FEES</Label6></Plate6></Center>'''),
dict(start="And if this makes you feel cheap", sfx=[('ep06-counter:0.3', '@{Seventy-two percent}'), ('ep09-cheer:0.25', '@{the majority}')], stock=44, el='''<Center x={1450} y={460}><Donut6 at={@{Seventy-two percent}} pct={72} center="72%" label="OPPOSE AUTO SERVICE CHARGES" size={340} /></Center>
<Meme at={@{the majority}} text="not cheap. the majority." y={920} />
<Source6>Pew Research Center · 2023</Source6>'''),
dict(start="Jake figured it out", sfx=[('ep09-cheer:0.25', '@{The waiter was thrilled}')], stock=1, alt=(45, "The waiter was thrilled"), el='''<Meme at={@{The waiter was thrilled}} text="the waiter, thrilled" y={920} />'''),
dict(start="The owner had to settle", sfx=[('ep09-trombone:0.25', '@{smaller espresso}')], stock=46, clean=True, el='''<Meme at={@{smaller espresso}} text="the gary 2000 mini" y={900} />'''),
dict(start="What's the weirdest fee", sfx=[('ep06-pop:0.3', '@{Drop it}')], stock=47, dim=0.3, el='''<Center y={500}><Plate6><Words text="Weirdest fee on your receipt?" at={0.1} size={84} hl={["Weirdest"]} maxW={1500} /></Plate6></Center>
<Center y={820}><Label6 at={@{Drop it}} size={40} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Center>'''),
dict(start="And if you think restaurants", sfx=[('ep06-whoosh:0.25', '@{resort fee}')], stock=48, dim=0.35, end_pad=5.0, el='''<Center y={480}><Words text="Next: the hotel resort fee" at={@{resort fee}} size={96} hl={["resort", "fee"]} maxW={1600} /></Center>'''),
]
