import re
p='/home/claude/hidden-margin-render/cloud/gen/t11.py'; s=open(p).read()
L=s.split('\n')
def blocks():
    idx=[i for i,l in enumerate(L) if l.startswith('dict(start="')]
    out=[]
    for n,i in enumerate(idx):
        j=i+1
        while j<len(L) and not (L[j].startswith('dict(') or L[j].startswith('#') or L[j].startswith(']') or L[j].strip()==''): j+=1
        out.append((i,j))
    return out
def find(start):
    for i,j in blocks():
        if L[i].startswith(f'dict(start="{start}"'): return i,j
    raise SystemExit("no block "+start)
def put(start, text):
    i,j=find(start); L[i:j]=text.strip('\n').split('\n')
def insert_after(start, text):
    i,j=find(start); L[j:j]=text.strip('\n').split('\n')
def delete(start):
    i,j=find(start); del L[i:j]
def sub(start, a, b):
    i,j=find(start); blk='\n'.join(L[i:j]); assert a in blk, (start,a); L[i:j]=blk.replace(a,b).split('\n')

# ---- PART 1 hook ----
put("When this sandwich was invented", '''dict(start="When this sandwich was invented", stock=K("live-ad1974-box"), clean=True, archive=True, alt=(K("r-big-mac-meal"), "Today, the average Big Mac"), sfx=[('ep06-coin:0.25', '@{forty-five cents}'), ('swoosh:0.3', '@{costs six dollars}'), ('ep06-kaching:0.3', '@{twenty-two cents}')],
     el='<Center x={1440} y={430}><PriceFlip at={@{forty-five cents}} from="45¢" to="$6.22" flipAt={@{costs six dollars}} fromNote="1967" toNote="U.S. AVERAGE · JULY 2026" w={560} /></Center>' + src("McDonald's TV ad · 1974", "0.3") + src("The Economist · Big Mac Index, July 2026", "@{Today, the average}")),''')
delete("Today, the average Big Mac")
put("In 1968, the year the Big Mac went national", '''dict(start="In 1968, the year the Big Mac went national", stock=K("wm-mcd-1967"), archive=True, dim=0.55, sfx=[('tick:0.3', '@{about ten minutes}')],
     el=plate("1968 · A REGULAR AMERICAN WORKER", "0.1", y=880, size=36, out="@{about ten minutes}") + watches([w(10, "1968", "AVERAGE WORKER", at="@{about ten minutes}", spinAt="@{about ten minutes}", spin=1.2)], size=520, y=470) + src("Photo: railfan 44 · public domain (a McDonald's, 1967)", "0.3")),''')
sub("Today? About eleven", 'dict(start="Today? About eleven", ', 'dict(start="Today? About eleven", stock=K("dt-night-mcd"), dim=0.6, ')
put("So why did seventy-eight percent", '''dict(start="So why did seventy-eight percent", stock=K("cafe-counter-line"), sfx=[('ep06-counter:0.3', '@{seventy-eight percent}')],
     el='<Center x={1500} y={820}><BigNum at={@{seventy-eight percent}} size={150} label="CALL FAST FOOD A LUXURY NOW">78%</BigNum></Center>' + src("LendingTree survey · 2024 · illustrative footage", "0.3")),''')
sub("Because there's a third number on this stopwatch", 'dict(start="Because there\'s a third number on this stopwatch", ', 'dict(start="Because there\'s a third number on this stopwatch", stock=K("r-drive-thru-night"), dim=0.62, ')
# ---- PART 1 Delligatti era ----
sub("The guy who owns this McDonald's", 'source="HISTORY.COM · BIG MAC INTRODUCED", inset=None,', 'source="HISTORY.COM · BIG MAC INTRODUCED", inset=None, zoom=0.75,')
put("A year later, it's on every McDonald's menu", '''dict(start="A year later, it's on every McDonald's menu", stock=K("wm-mcd-1967"), archive=True, sfx=[],
     el=plate("1968 · ON EVERY McDONALD'S MENU", "0.2", y=880, size=44) + src("Photo: railfan 44 · public domain (1967)", "0.3")),''')
# ---- PART 2 ----
sub("Some guy in a boardroom", 'alt=(K("r-facepalm"), "And look")', 'alt=(K("man-meh"), "And look")')
put("Cheap food didn't just happen", '''dict(start="Cheap food didn't just happen", tag=C2, sfx=[('rise:0.25', '@{It was invented}')],
     el=words("Cheap food was invented.", at="0.1", size=110, y=420) + words("On purpose.", at="@{on purpose}", size=110, hl=["purpose."], y=560)),
dict(start="for guys like the ones at that steel mill", tag=C2, stock=K("grinder-sparks"), sfx=[], el=""),''')
put("Wichita, Kansas", '''dict(start="Wichita, Kansas", tag=C2, stock=K("vintage-street"), archive=True, sfx=[],
     el=plate("WICHITA, KANSAS · 1921", "0.1", y=880, size=44) + src("Archive street footage (illustrative)", "0.3")),''')
put("A cook named Walter Anderson", '''dict(start="A cook named Walter Anderson", tag=C2, stock=K("wm-white-castle-8"), sfx=[],
     el=plate("WALTER ANDERSON + BILLY INGRAM", "0.2", y=880, size=40, out="@{A white castle}") + plate("A WHITE CASTLE", "@{A white castle}", y=880, size=48, color="C6.accent") + src("A 1936 White Castle building, Minneapolis · Photo: McGhiever · CC BY-SA 4.0", "0.3")),''')
put("This was food for factory workers", '''dict(start="This was food for factory workers", tag=C2, stock=K("wm-shift-1942"), archive=True, alt=(K("wm-shift-1942b"), "and people who counted"), sfx=[],
     el=src("Shift workers, 1943 · Marjory Collins, Library of Congress · public domain", "0.3")),''')
# ---- PART 3 ----
put("San Bernardino, California", '''dict(start="San Bernardino, California", tag=C3, hard=True, stock=K("vintage-family-car"), archive=True, sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("SAN BERNARDINO, CALIFORNIA · 1948", "0.2", y=880, size=42, out="@{Two brothers}") + plate("DICK & MAC McDONALD · A DRIVE-IN THAT'S DOING WELL", "@{Two brothers}", y=880, size=38) + src("Archive footage (illustrative)", "0.3")),''')
put("Carhops bring food out to your car", '''dict(start="Carhops bring food out to your car", tag=C3, stock=K("vintage-suburb"), archive=True, sfx=[],
     el=plate("CARHOPS · A LONG MENU · BARBECUE", "0.2", y=880, size=38)),''')
sub("Paper wrappers instead of plates", 'alt=(K("wm-downey-loc"), "And the hamburger costs fifteen cents"), archive=True', 'alt=(K("wm-mcd-museum"), "And the hamburger costs fifteen cents"), archive=True')
sub("Paper wrappers instead of plates", 'src("Photo: John Margolies · Library of Congress", "@{And the hamburger costs}")', 'src("1955-style replica · Photo: Bruce Marlin · CC BY-SA 2.5", "@{And the hamburger costs}")')
put("Every worker had one job", '''dict(start="Every worker had one job", tag=C3, stock=K("cheeseburger-make"), sfx=[('ding:0.25', '@{Speedee Service System}')],
     el=plate("ONE WORKER · ONE JOB", "0.2", y=880, size=42, out="@{They called it}") + plate("THE SPEEDEE SERVICE SYSTEM", "@{They called it}", y=880, size=44, color="C6.accent")),''')
put("At first, it flopped", '''dict(start="At first, it flopped", tag=C3, stock=K("vintage-football"), archive=True, sfx=[('ep06-fall:0.25', '@{Profits dropped}')],
     el=plate("PROFITS DROPPED", "@{Profits dropped}", y=880, size=44, out="@{The carhops they'd let go}") + plate("THE FIRED CARHOPS CAME BY TO LAUGH", "@{The carhops they'd let go}", y=880, size=40)),''')
put("Dick McDonald later put the whole idea", '''dict(start="Dick McDonald later put the whole idea", tag=C3, stock=K("r-archive-mcd"), archive=True, dim=0.6, sfx=[('t02-paper:0.25', '0.05')],
     el=plate("DICK McDONALD, IN ONE LINE", "0.05", y=440, size=40, out="@{Our whole concept}") + quote("“Our whole concept was based on speed, lower prices, and volume.”", "DICK McDONALD", at="@{Our whole concept}", size=86, hl=["speed,", "prices,", "volume.”"])),''')
put("That's the machine", '''dict(start="That's the machine", tag=C3, sfx=[('ep06-pop:0.22', '@{The lower the price}'), ('ep06-pop:0.22', '@{the bigger the crowd}'), ('ding:0.25', '@{the cheaper you can make it}')],
     el=plate("THAT'S THE MACHINE", "0.05", y=110, size=36, color="C6.accent") + '<Center y={560}><Flywheel r={300} steps={[{ word: "LOWER PRICE", at: @{The lower the price} }, { word: "BIGGER CROWD", at: @{the bigger the crowd} }, { word: "CHEAPER TO MAKE", at: @{the cheaper you can make it} }]} /></Center>'),''')
sub("Then a milkshake machine salesman", 'alt=(K("wm-first-mcd2"), "and turns it into an empire")', 'alt=(K("wm-mcd-hq"), "and turns it into an empire")')
sub("Then a milkshake machine salesman", 'src("Photo: Northwalker · CC0 (Downey, CA)", "0.4")', 'src("Photos: Northwalker · CC0 (Downey, CA) · Rob LaRosa · CC BY-SA 2.0 (HQ, Oak Brook)", "0.4")')
put("Sonneborn reportedly put it like this", '''dict(start="Sonneborn reportedly put it like this", tag=C3, stock=K("suburb-aerial"), dim=0.62, sfx=[('t02-paper:0.25', '0.05')],
     el=plate("HARRY SONNEBORN, AS HE REPORTEDLY PUT IT", "0.05", y=440, size=38, out="@{We are not technically}") + quote("“We are not technically in the food business. We are in the real estate business.”", "HARRY SONNEBORN, AS HE REPORTEDLY PUT IT", at="@{We are not technically}", size=80, hl=["real", "estate"])),''')
sub("The only reason we sell fifteen-cent hamburgers", 'stock=K("suburb-aerial")', 'stock=K("suburb-aerial2")')
put("The cheap burger was never the product", '''dict(start="The cheap burger was never the product", tag=C3, stock=K("cafe-counter-line"), alt=(K("keys-hand"), "so the people running"), sfx=[],
     el=plate("THE BURGER BRINGS PEOPLE IN", "0.2", y=880, size=42, out="@{so the people running}") + plate("THE RESTAURANT PAYS RENT TO McDONALD'S", "@{so the people running}", y=880, size=42, color="C6.accent")),''')
put("That's going to matter a lot later", '''dict(start="That's going to matter a lot later", tag=C3, stock=K("tear-money"), sfx=[], el=""),''')
# ---- PART 4 ----
put("And whenever things got slow", '''dict(start="And whenever things got slow", tag=C4, sfx=[('impact:0.3', '@{Price.}')],
     el=doc("ad-1973", [], source="McDONALD'S NEWSPAPER AD · 1973 · PUBLIC DOMAIN", fb="") + plate("WHEN THINGS GOT SLOW: ONE LEVER", "0.1", y=960, size=36, out="@{Price.}") + plate("PRICE.", "@{Price.}", y=960, size=56, color="C6.accent")),''')
sub("The idea was simple", 'source="REUTERS · FEB 26, 1997 · VIA McSPOTLIGHT.ORG",', 'source="REUTERS · FEB 26, 1997 · VIA McSPOTLIGHT.ORG", zoom=0.62, inset=None,')
put("And about six weeks in", '''dict(start="And about six weeks in", tag=C4, stock=K("live-ap1997-floor"), clean=True, sfx=[('ep06-stamp:0.3', '@{for lunch and dinner}')],
     el=plate("~6 WEEKS IN: KILLED FOR LUNCH & DINNER", "@{for lunch and dinner}", y=880, size=40, color="C6.accent") + src("Footage: AP Archive · 1997 · Reuters, June 4, 1997", "0.3")),''')
# ---- PART 5 ----
put("At the end of 2002, McDonald's posted", '''dict(start="At the end of 2002, McDonald's posted", tag=C5, sfx=[('t02-paper:0.3', '0.05'), ('ep06-fall:0.3', '@{Three hundred and forty-three}')],
     el=doc("cbs-mcdeficit", [("343", "Three hundred and forty-three")], source="CBS NEWS · JAN 2003 · VIA WEB.ARCHIVE.ORG", url="cbsnews.com/news/mcdeficit-for-mcdonalds", inset=None, zoom=0.8,
            fb=doc("hs-loss", [("343", "Three hundred and forty-three")], source="HERALD-STANDARD, UNIONTOWN · AP · JAN 24, 2003", inset=None,
                   fb=plate("END OF 2002 · THE FIRST QUARTERLY LOSS IN ITS HISTORY", "0.1", y=200, size=36) + '<Center y={470}><BigNum at={@{Three hundred and forty-three}} size={200} color={C6.loss} label="Q4 2002 · NET LOSS">−$343M</BigNum></Center>'))),''')
sub("The most famous restaurant on earth", 'stock=K("r-mcd-night")', 'stock=K("r-calverton-md")')
put("So the company called back a man", '''dict(start="So the company called back a man", tag=C5, stock=K("wm-mcd-hq"), sfx=[],
     el=plate("JIM CANTALUPO · ~30 YEARS AT McDONALD'S", "@{Jim Cantalupo}", y=880, size=40) + src("McDonald's former HQ, Oak Brook · Photo: Rob LaRosa · CC BY-SA 2.0", "0.3")),''')
sub("Sixteen months in", 'alt=(K("film-leader"), "Jim Cantalupo had a heart attack")', 'alt=(K("town-dusk"), "Jim Cantalupo had a heart attack")')
sub("A family of four could eat", 'stock=K("r-burger-fries-table"), alt=(K("counting-pennies"), "A teenager with a few quarters")', 'stock=K("burger-table"), alt=(K("boy-coins-jar"), "A teenager with a few quarters")')
sub("Somebody has to absorb that difference", 'stock=K("r-empty-wallet")', 'stock=K("r-coins-fall")')
# ---- PART 6 ----
sub("In 2008, the cheese answered", '@{the double cheeseburger, at a dollar}', "@{and the owners of McDonald's restaurants}")
sub("One of them, a franchisee from South Bend", '[("Fitzpatrick", "Dan Fitzpatrick")]', '[("Fitzpatrick", "Dan Fitzpatrick"), ("South Bend", "from South Bend")]')
put("Once you count all the costs", '''dict(start="Once you count all the costs", tag=C6x, sfx=[('ep06-pop:0.25', '@{between a dollar ten}')],
     el=doc("nrn-bk", [("$1.10 and $1.15", "between a dollar ten")], source="NATION'S RESTAURANT NEWS · NOV 13, 2009", inset=None, zoom=1.0,
            fb="<Center y={480}><DimeLoss at={0.05} costAt={@{between a dollar ten}} lossAt={99} /></Center>")),
dict(start="They were losing a dime", tag=C6x, sfx=[('ep06-pop:0.25', '0.1'), ('ep06-fall:0.3', '0.5')],
     el="<Center y={480}><DimeLoss at={0.05} costAt={0.2} lossAt={0.5} /></Center>"),''')
sub("And in 2013, McDonald's let go of the Dollar Menu", 'name: "SOME ITEMS", price: "—", to: "$1"', 'name: "$1 ITEMS", price: "—", to: "$1"')
sub("And in 2013, McDonald's let go of the Dollar Menu", 'name: "SOME ITEMS", price: "—", to: "$2"', 'name: "$2 ITEMS", price: "—", to: "$2"')
sub("And in 2013, McDonald's let go of the Dollar Menu", 'name: "SOME ITEMS", price: "—", to: "$5"', 'name: "$5 ITEMS", price: "—", to: "$5"')
sub("But if you ever stood in front of that board", 'stock=K("r-drive-thru-going")', 'stock=K("dt-woman-order")')
# ---- PART 7 Mariam ----
sub("Now let me introduce you to someone", 'stock=K("la-aerial")', 'stock=K("wm-la-skyline")')
sub("Now let me introduce you to someone", 'plate("LOS ANGELES · LAST FALL", "@{Los Angeles, last fall}", y=880, size=42)', 'plate("LOS ANGELES · LAST FALL", "@{Los Angeles, last fall}", y=880, size=42) + src("Photo: Levi Clancy · CC BY-SA 4.0", "0.3")')
put("She and two other people at her table", '''dict(start="She and two other people at her table", tag=C7, stock=K("coffee-cups"), alt=(K("r-paper-bag"), "The receipt came to"), sfx=[('ep06-kaching:0.3', '@{nearly twenty dollars}')],
     el=plate("2 COFFEES + 1 SODA", "@{Two coffees}", y=880, size=44, out="@{The receipt came to}") + plate("≈ $20", "@{nearly twenty dollars}", y=880, size=64, color="C6.loss") + src(ILL, "0.3")),''')
sub("And here's what she told the reporter", 'source="LOS ANGELES TIMES · NOV 2025 · VIA AOL",', 'source="LOS ANGELES TIMES · NOV 2025 · VIA AOL", zoom=0.7,')
sub("Mariam put it in one sentence", 'source="LOS ANGELES TIMES · NOV 2025 · VIA AOL",', 'source="LOS ANGELES TIMES · NOV 2025 · VIA AOL", zoom=0.7, inset=None,')
put("Remember Mariam", '''dict(start="Remember Mariam", tag=C7, stock=K("doctor-wipe"), sfx=[],
     el=plate("THAT 51 WILL EXPLAIN HER", "@{that fifty-one}", y=880, size=42) + src(ILL, "0.3")),''')
sub("About ninety-five percent of McDonald's", 'source="McDONALD\'S OPEN LETTER · MAY 2024", zoom=1.1,', 'source="McDONALD\'S OPEN LETTER · MAY 2024", zoom=0.66, inset=None,')
sub("And this is a bad year for the people in the middle", 'plate("95% OF McDONALD\'S FRANCHISE OWNERS: PROFITS FALLING", "@{ninety-five percent}", y=880, size=36, color="C6.accent")', 'plate("OWNERS SURVEYED: 95% SAY PROFITS ARE FALLING", "@{ninety-five percent}", y=880, size=36, color="C6.loss")')
sub("That's not a secret", 'stock=K("suburb-aerial2")', 'stock=K("main-street")')
# ---- PART 8 ----
put("Start in the middle of the bun", '''dict(start="Start in the middle of the bun", tag=C8, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("profarmer-herd-top", [("since 1951", "since 1951")], source="FARM JOURNAL / PRO FARMER · USDA CATTLE INVENTORY · JAN 2026", inset=None,
            fb=doc("drovers-herd-top", [("since 1951", "since 1951")], source="DROVERS · USDA CATTLE INVENTORY · JAN 2026", inset=None,
                   fb=doc("dairyherd-herd-top", [("since 1951", "since 1951")], source="FARM JOURNAL · USDA CATTLE INVENTORY · JAN 2026", inset=None,
                          fb=doc("nass-release", [("86.2 million head", "fewer cattle")], source="USDA NASS · CATTLE · JAN 30, 2026",
                                 fb=plate("FEWEST CATTLE SINCE 1951 · USDA", "0.1", y=880, size=40))))),
     stock=None if any(has(n, "since 1951") for n in ("profarmer-herd-top", "drovers-herd-top", "dairyherd-herd-top")) or has("nass-release", "86.2 million head") else K("cattle-aerial")),''')
put("Years of drought pushed ranchers", '''dict(start="Years of drought pushed ranchers", tag=C8, stock=K("dry-riverbed"), alt=(K("longhorns"), "and you can't grow a cow"), sfx=[],
     el=plate("YEARS OF DROUGHT · HERDS SOLD OFF", "0.1", y=880, size=40)),''')
sub("Lawsuits claim they coordinated", 'source="FORTUNE · NOV 2024", inset=None,', 'source="FORTUNE · NOV 2024", inset=None, zoom=0.85,')
sub("Lawsuits claim they coordinated", 'stamp("ALLEGED", "0.8", x=1520, y=300)', 'stamp("ALLEGED", "0.8", x=1560, y=760)')
put("And wages", '''dict(start="And wages", tag=C8, stock=K("fastfood-crew") if False else K("r-drive-thru-pay"), sfx=[],
     el=plate("CALIFORNIA · $20/HR MINIMUM · BIG FAST FOOD CHAINS · 2024", "@{California set}", y=880, size=34) + src(ILL, "0.3")),''')
put("Economists are still fighting", '''dict(start="Economists are still fighting", tag=C8, stock=K("r-stock-screens"), dim=0.55, sfx=[],
     el=words("Economists: still fighting.", at="0.1", size=110, y=430) + plate("BOTH SIDES HAVE DATA", "@{Both sides have data}", y=720, size=42, color="C6.accent")),''')
sub("And then, in 2023, a photo went viral", 'el=src("Footage: NewsNation", "0.3")', 'el=src("Footage: NewsNation", "0.3") + plate("THE REAL BOARD: $17.59 · TV ROUNDED IT TO $18", "1.2", y=150, size=34, color="C6.accent")')
sub("The president of McDonald's USA", 'source="McDONALD\'S OPEN LETTER · JOE ERLINGER · MAY 29, 2024 · VIA WEB.ARCHIVE.ORG", inset=None)', 'source="McDONALD\'S OPEN LETTER · JOE ERLINGER · MAY 29, 2024 · VIA WEB.ARCHIVE.ORG", inset=None, zoom=0.9, focus=(500, 900, 1900, 600))')
sub("The Big Mac, he wrote", 'source="McDONALD\'S OPEN LETTER · MAY 29, 2024", zoom=1.1,', 'source="McDONALD\'S OPEN LETTER · MAY 29, 2024", zoom=0.66, inset=None,')
sub("So yes, costs are real", 'stock=K("r-burger-fries-table"), alt=(K("tired-woman"), "But none of that")', 'stock=K("r-fries-close"), alt=(K("doctor-wipe"), "But none of that")')
sub("For that, we have to open the stopwatch", 'dict(start="For that, we have to open the stopwatch", ', 'dict(start="For that, we have to open the stopwatch", stock=K("clock-tick"), dim=0.6, ')
# ---- PART 9 ----
sub("Here's the math", 'tag=C9, hard=True,', 'tag=C9, hard=True, lead=1.0, flash=True,')
put("For the average worker, that's about twenty-one", '''dict(start="For the average worker, that's about twenty-one", tag=C9, sfx=[('ep06-pop:0.25', '0.3'), ('ep06-pop:0.25', "@{it's forty-six}")],
     el='<Center y={500}><MinuteBars title="ONE TYPICAL COMBO MEAL · $11.56 · 50 BIGGEST U.S. CITIES" rows={[{ label: "AVERAGE WORKER", min: 21.2, value: "21 min", at: 0.3 }, { label: "FAST FOOD WORKER", min: 46.0, value: "46 min", at: @{it\\'s forty-six}, color: C6.loss }]} /></Center>' + src("LendingTree · 2025 · 21.2 vs 46.0 minutes of work", "0.3")),''')
put("Now think about Mariam again", '''dict(start="Now think about Mariam again", tag=C9, stock=K("doctor-wipe"), dim=0.55, sfx=[],
     el=quote("“He would rather go hungry than eat outside.”", "MARIAM GERGIS, ABOUT HER BROTHER · LA TIMES", at="0.2", size=80, hl=["hungry"]) + src(ILL, "0.3")),''')
sub("So here's the answer to the question in the title", 'w(51, "$7.25/HR", "FEDERAL MINIMUM", at=0.05, still=True, redAt=0.05, color="C6.loss")', 'w(51, "2026 · $7.25/HR", "FEDERAL MINIMUM", at=0.05, still=True, redAt=0.05, color="C6.loss")')
sub("At seven twenty-five, a Big Mac costs", 'w(51, "$7.25/HR", "FEDERAL MINIMUM",', 'w(51, "2026 · $7.25/HR", "FEDERAL MINIMUM",')
put("The people it was invented for", '''dict(start="The people it was invented for", tag=C9, stock=K("wm-shift-1942b"), archive=True, sfx=[], el=""),''')
sub("If this changed how you see a price tag", 'alt=(K("eating-alone-car"), "Every week")', 'alt=(K("r-eating-alone"), "Every week")')
# ---- PART 10 ----
delete("His reasons? Rent.")
put("Later he said that across fast food", '''dict(start="Later he said that across fast food", tag=C10, sfx=[('ep06-pop:0.22', '@{Rent.}'), ('ep06-pop:0.22', '@{Groceries.}'), ('ep06-pop:0.22', '@{Child care.}')],
     el="<Center y={400}><TwoWay at={0.05} upAt={@{higher income visits were up}} /></Center>" + "<Center y={880}><Chips size={56} items={[{ text: \\"RENT\\", at: @{Rent.} }, { text: \\"GROCERIES\\", at: @{Groceries.} }, { text: \\"CHILD CARE\\", at: @{Child care.} }]} /></Center>" + src("McDonald's CEO, Q3 2025 call · via LA Times", "0.3")),''')
sub("And if you're the person counting every dollar", 'stock=K("r-empty-wallet")', 'stock=K("counting-pennies")')
put("Two McDonald's a few miles apart", '''dict(start="Two McDonald's a few miles apart", tag=C10, stock=K("r-ct-manchester"), alt=(K("r-ct-lisbon"), "can charge you different"), sfx=[],
     el=plate("DIFFERENT OWNERS · DIFFERENT PRICES", "0.2", y=880, size=42) + src("Photos: JJBers · CC BY 2.0", "0.4")),''')
put("Trap number two", '''dict(start="Trap number two", tag=C10, stock=K("r-kiosk"), sfx=[('ep06-stamp:0.25', '0.1')],
     el=plate("TRAP #2 · THE BEST PRICES LIVED IN THE APP", "0.1", y=880, size=38, color="C6.accent")),''')
sub("McDonald's now has about two hundred and ten", 'alt=(K("r-phone-scroll"), "If you don\'t use it"), ', '')
put("A study by the finance company Self", '''dict(start="A study by the finance company Self", tag=C10, stock=K("delivery-hold"), sfx=[],
     el=plate("SELF FINANCIAL · SAME McDONALD'S ORDER · 100 U.S. CITIES", "0.1", y=880, size=36) + src(ILL, "0.3")),
dict(start="Through the big delivery apps", tag=C10, sfx=[('t02-paper:0.3', '0.05'), ('ep06-kaching:0.3', '@{almost seventy percent more}')],
     el=doc("self-markup", [("68.6%", "almost seventy percent more")], source="SELF FINANCIAL · FOOD DELIVERY STUDY · 2025", inset=None, zoom=0.8,
            fb=plate("VIA DELIVERY APPS: ≈ +70%", "@{almost seventy percent more}", y=880, size=44, color="C6.loss")),
     stock=None if has("self-markup", "68.6%") else K("r-delivery-pay")),''')
sub("And there's a new question hanging", '"McDonald\'s sued", "filed a lawsuit")], source="AP · VIA ABC7 · OCT 2026", inset=None,', '"McDonald\'s sued", "filed a lawsuit")], source="AP · VIA ABC7 · OCT 2026", inset=None, zoom=0.8,')
sub("And for a business built on volume", 'alt=(K("r-drive-thru-going"), "The crowd was walking away")', 'alt=(K("r-empty-drive-thru"), "The crowd was walking away")')
sub("And here's the part where the company itself", 'stock=K("r-empty-drive-thru")', 'stock=K("dt-empty")')
# ---- PART 11 ----
sub("McChicken. McDouble.", 'stock=K("r-mcchicken")', 'stock=K("wm-mcdouble")')
sub("Fair point", 'stock=K("wm-mcdouble")', 'stock=K("r-mcchicken")')
sub("Fair point", 'src("Photo: TheDapperDan · public domain", "0.4")', 'src("Photo: Evan-Amos · public domain", "0.4")')
put("And back in February", '''dict(start="And back in February", tag=C11, stock=K("live-gma-bargain"), dim=0.6, sfx=[('t02-paper:0.3', '0.05')],
     el=plate("FEBRUARY 2026 · THE CEO TO INVESTORS", "0.05", y=440, size=38, out="@{McDonald's value leadership}") + quote("“McDonald's value leadership is working.”", "CEO CHRIS KEMPCZINSKI · FEBRUARY 2026", at="@{McDonald's value leadership}", size=96, hl=["working.”"]) +
        plate("NOT A STRAIGHT LINE", "@{It's not a straight line}", y=900, size=38) + src("Footage: Good Morning America · 2024", "0.3")),''')
sub("But the biggest restaurant chain in the world", 'stock=K("tennis-empty"), alt=(K("wm-downey"), "Speed, lower prices")', 'stock=K("tennis-empty"), alt=(K("live-news-store"), "Speed, lower prices")')
sub("Before you order, check the app", ', alt=(K("r-phone-scroll"), "Sometimes the cheapest version")', ', alt=(K("r-phone-pay-meal"), "Sometimes the cheapest version")')
put("Start measuring prices the way we did today", '''dict(start="Start measuring prices the way we did today", tag=C11, sfx=[('ding:0.25', '0.1'), ('tick:0.3', '@{Ten minutes for a Big Mac}'), ('tick:0.3', '@{Fifty-one minutes is}')],
     el=plate("4 · COUNT PRICES IN MINUTES OF YOUR OWN WORK", "0.1", y=110, size=34, color="C6.accent") +
        watches([w(10, "A deal", "10 MIN FOR A BIG MAC", at="@{Ten minutes for a Big Mac}", spinAt="@{Ten minutes for a Big Mac}", spin=1.0), w(51, "A decision", "51 MIN FOR THE SAME", at="@{Fifty-one minutes is}", spinAt="@{Fifty-one minutes is}", spin=1.4, redAt="@{Fifty-one minutes is}", color="C6.loss")], size=450, gap=160, y=560)),''')
put("for people who worked hard and needed", '''dict(start="for people who worked hard and needed", tag=C11, stock=K("wm-homestead-night"), alt=(K("steel-hyperlapse"), "and needed a big"), sfx=[], el=""),''')
sub("That's who fast food was built for", 'stock=K("workers-walking")', 'stock=K("wm-shift-1942")')
sub("That's who fast food was built for", 'dict(start="That\'s who fast food was built for", ', 'dict(start="That\'s who fast food was built for", archive=True, ')
put("So maybe the question was never", '''dict(start="So maybe the question was never", tag=C11, stock=K("r-midnight-lineup"), alt=(K("wm-bigmac-museum"), "Maybe it's whether"), sfx=[],
     el=plate("DO THEY STILL REMEMBER WHO THEY BUILT IT FOR?", "@{still remember who}", y=880, size=38, color="C6.accent")),''')
put("How many minutes of work does your lunch", '''dict(start="How many minutes of work does your lunch", tag=C11, end_pad=17.0, sfx=[('ding:0.3', '@{Tell me in the comments}')],
     el='<In at={0.05} out={8.5} from="fade"><div style={{ position: "absolute", inset: 0 }}>' + watches([w(10, "1968", "AVERAGE WORKER", at=0.05, still=True), w(51, "2026 · $7.25/HR", "FEDERAL MINIMUM", at=0.05, still=True, redAt=0.05, color="C6.loss")], size=480, gap=200, y=450) +
        plate("HOW MANY MINUTES DOES YOUR LUNCH COST? ↓", "@{Tell me in the comments}", y=930, size=38, color="C6.accent") + '</div></In>' +
        '<In at={8.9} from="fade"><div style={{ position: "absolute", inset: 0 }}>' + watches([w(10, "1968", "AVERAGE WORKER", at=8.9, still=True), w(51, "2026 · $7.25/HR", "FEDERAL MINIMUM", at=8.9, still=True, redAt=8.9, color="C6.loss")], size=250, gap=140, y=230) + '</div></In>'),''')
open(p,'w').write('\n'.join(L))
print("ok")
