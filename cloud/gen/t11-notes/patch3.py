import re
p='/home/claude/hidden-margin-render/cloud/gen/t11.py'; s=open(p).read()
L=s.split('\n')
def blocks():
    idx=[i for i,l in enumerate(L) if l.startswith('dict(start="')]
    out=[]
    for i in idx:
        j=i+1
        while j<len(L) and not (L[j].startswith('dict(') or L[j].startswith('#') or L[j].startswith(']') or L[j].strip()==''): j+=1
        out.append((i,j))
    return out
def find(start):
    hits=[(i,j) for i,j in blocks() if L[i].startswith(f'dict(start="{start}"')]
    assert len(hits)==1, (start, len(hits)); return hits[0]
def put(start, text):
    i,j=find(start); L[i:j]=text.strip('\n').split('\n')
def ins_after(start, text):
    i,j=find(start); L[j:j]=text.strip('\n').split('\n')
def sub(start, a, b):
    i,j=find(start); blk='\n'.join(L[i:j]); assert blk.count(a)==1, (start,a,blk.count(a)); L[i:j]=blk.replace(a,b).split('\n')

# ---- 1. европейская остановка → американские кадры ----
sub("Today? About eleven", 'stock=K("dt-night-mcd"), dim=0.6,', 'stock=K("r-thruway-drive-thru"), dim=0.6,')
sub("Today? About eleven", 'noteAt="@{Measured in work}"))', 'noteAt="@{Measured in work}") + src("Photo: Andre Carrotflower · CC BY-SA 4.0 (New York State Thruway)", "0.3"))')
sub("Because there's a third number on this stopwatch", 'stock=K("r-drive-thru-night"), dim=0.62,', 'stock=K("r-ct-manchester"), alt=(K("r-town-aerial-twilight"), "Somebody in America"), dim=0.62,')
sub("Because there's a third number on this stopwatch", 'q=True, color="C6.loss")], size=430, gap=90))', 'q=True, color="C6.loss")], size=430, gap=90) + src("Photo: JJBers · CC BY 2.0 (Manchester, CT)", "0.3"))')
sub("And for a business built on volume", 'stock=K("r-drive-thru-night")', 'stock=K("main-street")')
sub("So maybe the question was never", 'alt=(K("dt-night-mcd"), "Maybe it\'s whether")', 'alt=(K("r-town-street-sunset"), "Maybe it\'s whether"), dim=0.2')
# ---- повторы и несовпадения ----
sub("A McDonald's. The problem", 'stock=K("wm-downey-loc"), archive=True, sfx=[],\n     el=src("Photo: John Margolies · Library of Congress", "0.3")),', 'stock=K("town-dusk"), sfx=[], el=""),')
sub("College kid with five bucks", 'alt=(K("workers-lunch"), "Guy eating lunch")', 'alt=(K("eating-alone-car"), "Guy eating lunch")')
sub("A parent feeding three kids", 'stock=K("r-drive-thru-order")', 'stock=K("r-family-minivan")')
sub("Now, there's an easy answer", 'stock=K("stock-screen")', 'stock=K("r-boardroom")')
put("Wichita, Kansas", '''dict(start="Wichita, Kansas", tag=C2, sfx=[],
     el=words("Wichita, Kansas · 1921", at="0.05", size=110, hl=["1921"], y=470)),''')
sub("Back in 1906, a novel called The Jungle", 'el=doc("jungle-1906", [], source="THE JUNGLE · UPTON SINCLAIR · 1906 · PUBLIC DOMAIN",\n            fb=None) or "",',
    'el=(\'<div style={{ position: "absolute", inset: 0, translate: "-330px 0" }}>\' + doc("jungle-1906", [], source=None, fb="") + \'</div>\' +\n        \'<Center x={1430} y={430}><In at={0.2} from="fade"><Num6 size={190}>1906</Num6></In></Center>\' + plate("A NOVEL ABOUT CHICAGO\'S MEATPACKING PLANTS", "0.5", x=1430, y=600, size=28) + src("THE JUNGLE · UPTON SINCLAIR · 1906 · PUBLIC DOMAIN", "0.3")) if has("jungle-1906") else "",')
sub("Carhops bring food out to your car", 'stock=K("vintage-suburb"), archive=True, sfx=[],\n     el=plate("CARHOPS · A LONG MENU · BARBECUE", "0.2", y=880, size=38)),',
    'stock=K("r-archive-minneapolis-1937"), archive=True, sfx=[],\n     el=plate("CARHOPS · A LONG MENU · BARBECUE", "0.2", y=880, size=38) + src("Archive photo, Minneapolis, 1937 · public domain (illustrative)", "0.3")),')
sub("And then they do something that looks completely insane", 'stock=K("wm-downey-loc"), archive=True, dim=0.6,', 'stock=K("live-museum-15c"), dim=0.55,')
# Flywheel: живой кадр под схемой, шаги на своих словах, крупнее
sub("That's the machine", 'sfx=[', 'stock=K("grill-burgers"), dim=0.72, sfx=[')
sub("That's the machine", '<Flywheel r={300} steps={[{ word: "LOWER PRICE", at: @{Sell a lot of something cheap} }', '<Flywheel r={330} steps={[{ word: "LOWER PRICE", at: @{The lower the price} }')
# «Price»: Allentown-благотворительность убрана; цена 35¢ на рекламе 1970
put("For the next few decades", '''dict(start="For the next few decades", tag=C4, hard=True, stock=K("vintage-1970s"), archive=True, sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("THE WHOLE INDUSTRY PLAYED BY THOSE RULES", "0.3", y=880, size=40) + src("Archive home movie, 1970s (illustrative)", "0.3")),''')
put("And whenever things got slow", '''dict(start="And whenever things got slow", tag=C4, sfx=[('t02-paper:0.3', '0.05'), ('impact:0.3', '@{Price.}')],
     el=doc("ad-1970", [("35c", "Price."), ("35c-r", "Price.")], source="McDONALD'S NEWSPAPER AD · 1970 · PUBLIC DOMAIN", fb="") + plate("WHEN THINGS GOT SLOW: ONE LEVER", "0.1", y=960, size=36, out="@{Price.}") + plate("PRICE.", "@{Price.}", y=960, size=56, color="C6.accent")),''')
sub("In 1989, Wendy's put a whole row", 'sfx=[', 'stock=K("r-burger-fries-table"), dim=0.72, sfx=[')
sub("In 1989, Wendy's put a whole row", 'title="VALUE MENU · 1989" w={900} rh={92}', 'title="WENDY\'S VALUE MENU · 1989" w={1120} rh={112}')
sub("The idea was simple", 'doc("mcspot-reuters-feb97", [("55 cents", "for fifty-five cents")], source="REUTERS · FEB 26, 1997 · VIA McSPOTLIGHT.ORG", zoom=0.62, inset=None,',
    'doc("reuters-v2", [("55 cents", "for fifty-five cents")], source="REUTERS · FEB 26, 1997 · VIA McSPOTLIGHT.ORG", zoom=0.8, inset=None,')
sub("And about six weeks in", ', alt=(K("live-ap1997-signs"), "It was supposed to last")', '')
sub("Cheap only works when it's simple", 'sfx=[', 'stock=K("r-menu-hands"), dim=0.75, sfx=[')
sub("Cheap only works when it's simple", 'el="<Center y={500}><TwoTags at={0.1} bAt={@{A price you have to decode}} noteAt={@{It\'s homework}} /></Center>"',
    'el="<Center y={500}><div style={{ scale: \\"1.3\\" }}><TwoTags at={0.1} bAt={@{A price you have to decode}} noteAt={@{It\'s homework}} /></div></Center>"')
sub("The Dollar Menu. What most people", 'sfx=[', 'stock=K("r-burger-fries-top"), dim=0.72, sfx=[')
sub("The Dollar Menu. What most people", 'title="DOLLAR MENU" w={860} rh={92}', 'title="DOLLAR MENU" w={1060} rh={116}')
sub("It said it would close hundreds", 'stock=K("r-calculator")', 'stock=K("r-empty-cafe-night")')
sub("He never saw what happened", 'stock=K("dt-empty")', 'stock=K("r-drive-night")')
sub("A family of four could eat", 'stock=K("burger-wrapper")', 'stock=K("r-family-dinner")')
sub("But here's the thing about a dollar", 'sfx=[', 'stock=K("dollar-bills"), dim=0.75, sfx=[')
sub("But here's the thing about a dollar", "el='<Center y={520}><DollarPress", "el='<Center y={520}><div style={{ scale: \"1.3\" }}><DollarPress")
sub("But here's the thing about a dollar", "}]} /></Center>'),", "}]} /></div></Center>'),")
sub("So McDonald's came up with a solution", 'doc("newser-mcdouble",', 'doc("newser-v2",')
sub("A year later, Burger King did something worse", 'alt=(K("wm-bk-whopperjr"), "It told its restaurant owners"), ', '')
sub("The owners had voted against it", 'sfx=[', 'stock=K("courthouse-indiana"), dim=0.72, sfx=[')
sub("So the owners did something almost unheard of", 'sfx=[', 'stock=K("r-wm-bk-houston"), dim=0.74, sfx=[')
sub("So the owners did something almost unheard of", 'doc("nrn-bk-top",', 'doc("nrn-top-v2",')
sub("One of them, a franchisee from South Bend", 'doc("nrn-bk",', 'doc("nrn-v2",')
sub("Once you count all the costs", 'doc("nrn-bk",', 'doc("nrn-v2",')
sub("And the more popular the deal got", 'stock=K("r-drive-thru-order")', 'stock=K("r-burger-fries-basket")')
sub("By the spring of 2010", 'doc("nbcmiami-bk",', 'doc("nbcmiami-v2",')
sub("And in 2013, McDonald's let go of the Dollar Menu", 'sfx=[', 'stock=K("r-menu-board-cc0"), dim=0.75, sfx=[')
sub("And in 2013, McDonald's let go of the Dollar Menu", 'w={880} rh={92} foot="ILLUSTRATION" rows={[{ name: "$1 ITEMS", price: "—", to: "$1", toAt: @{Items at one dollar} }, { name: "$2 ITEMS", price: "—", to: "$2", toAt: @{two dollars} }, { name: "$5 ITEMS", price: "—", to: "$5", toAt: @{five dollars} }]}',
    'w={1080} rh={116} foot="ILLUSTRATION" rows={[{ name: "$1 ITEMS", price: "$1", hlAt: @{Items at one dollar} }, { name: "$2 ITEMS", price: "$2", hlAt: @{two dollars} }, { name: "$5 ITEMS", price: "$5", hlAt: @{five dollars} }]}')
sub("For years, the people who run the restaurants", 'stock=K("r-dollar-stack")', 'stock=K("receipts-woman")')
sub("And here's what she told the reporter", 'doc("aol-latimes", [("barely afford", "I can barely afford"), ("cheaper option", "But it\'s a cheaper option")], source="LOS ANGELES TIMES · NOV 2025 · VIA AOL", zoom=0.7,',
    'doc("latimes-v2", [("barely afford", "I can barely afford")], source="LOS ANGELES TIMES · NOV 2025 · VIA LAS VEGAS SUN", zoom=0.9, inset=None,')
sub("Mariam put it in one sentence", 'doc("aol-latimes", [("go hungry", "He would rather go hungry")], source="LOS ANGELES TIMES · NOV 2025 · VIA AOL", zoom=0.7, inset=None,',
    'doc("latimes-v2", [("go hungry", "He would rather go hungry")], source="LOS ANGELES TIMES · NOV 2025 · VIA LAS VEGAS SUN", zoom=0.9, inset=None,')
sub("About ninety-five percent of McDonald's", 'doc("mcd-letter-95", [("95%", "About ninety-five percent")], source="McDONALD\'S OPEN LETTER · MAY 2024", zoom=0.66,',
    'doc("letter-v2", [("95%", "About ninety-five percent")], source="McDONALD\'S OPEN LETTER · JOE ERLINGER · MAY 29, 2024", zoom=0.75,')
sub("The Big Mac, he wrote", 'doc("mcd-letter-95",', 'doc("letter-v2",')
sub("That's not a secret", 'alt=(K("keys-hand"), "The landlord gets paid")', 'alt=(K("r-dollar-stack"), "The landlord gets paid")')
sub("And this is a bad year for the people in the middle", 'stock=K("dt-man-order"), alt=(K("r-calculator"), "In one survey this spring")', 'stock=K("r-calculator"), alt=(K("tired-woman"), "In one survey this spring")')
# Speedee / Ludlow MA: убрать r-service-plaza
sub("A Big Mac meal, seventeen dollars", ', alt=(K("r-service-plaza"), "seventeen dollars and fifty-nine")', '')
sub("A Big Mac meal, seventeen dollars", 'plate("A CONNECTICUT REST STOP", "0.1"', 'plate("I-95 · CONNECTICUT", "0.1"')
sub("A Big Mac meal, seventeen dollars", 'src("Photo: Adam Moss · CC BY-SA 2.0", "0.3")', 'src("Interstate 95 in Connecticut · Photo: Adam Moss · CC BY-SA 2.0", "0.3")')
sub("So McDonald's did something companies almost never do", 'stock=K("r-mcd-sign-close"), sfx=[], el=plate("SOMETHING COMPANIES ALMOST NEVER DO", "0.2", y=880, size=40)),',
    'stock=K("wm-mcd-hq"), sfx=[], el=plate("SOMETHING COMPANIES ALMOST NEVER DO", "0.2", y=880, size=40) + src("McDonald\'s former HQ, Oak Brook · Photo: Rob LaRosa · CC BY-SA 2.0", "0.3")),')
put("That's how a rest stop in Connecticut", '''dict(start="That's how a rest stop in Connecticut", tag=C10, stock=K("live-nn-darien"), clean=True, sfx=[],
     el=plate("CONNECTICUT REST STOP · $17.59 BIG MAC MEAL", "0.2", y=150, size=36, color="C6.accent") + src("Footage: NewsNation", "0.3")),''')
# +40% столбик сразу (голос сказал «40» в прошлой сцене), +21% — на своём слове
sub("Over the same years, prices across America", '''a={{ label: "PRICES ACROSS AMERICA · 2019–2024", value: "+21%", v: 21, color: C6.blue }} b={{ label: "McDONALD\\'S AVERAGE MENU ITEM", value: "+40%", v: 40, color: C6.loss, at: @{the menu climbed} }}''',
    '''a={{ label: "McDONALD\\'S AVERAGE MENU ITEM", value: "+40%", v: 40, color: C6.loss }} b={{ label: "PRICES ACROSS AMERICA · 2019–2024", value: "+21%", v: 21, color: C6.blue, at: @{went up about twenty-one} }}''')
sub("If this changed how you see a price tag", 'alt=(K("r-eating-alone"), "Every week")', 'alt=(K("la-aerial"), "Every week")')
sub("If this changed how you see a price tag", 'stock=K("r-calverton-md")', 'stock=K("r-restaurant-aerial-night")')
sub("And here's the part where the company itself", 'stock=K("dt-empty")', 'stock=K("r-night-roadside")')
sub("Later he said that across fast food", 'stock=K("r-drive-thru-order"), dim=0.7', 'stock=K("r-couple-menu"), dim=0.72')
sub("And here's the painful part", 'doc("nbc-lowincome",', 'doc("nbc-v2",')
sub("And here's the painful part", 'source="NBC NEWS · AUG 2025", inset=None,', 'source="NBC NEWS · AUG 2025", inset=None, zoom=0.75,')
sub("And here's the painful part", 'plate("THEY USUALLY VISIT MORE OFTEN THAN ANYONE ELSE"', '\'<In at={0} out={1.3} from="fade"><Center y={880}><Chips size={56} items={[{ text: "RENT", at: 0 }, { text: "GROCERIES", at: 0 }, { text: "CHILD CARE", at: 0 }]} /></Center></In>\' + plate("THEY USUALLY VISIT MORE OFTEN THAN ANYONE ELSE"')
sub("And if you're the person counting every dollar", 'stock=K("counting-pennies")', 'stock=K("r-card-terminal")')
sub("Two McDonald's a few miles apart", 'stock=K("r-ct-manchester"), alt=(K("r-ct-lisbon"), "can charge you different")', 'stock=K("r-ct-lisbon"), alt=(K("r-mcd-sign-close"), "can charge you different")')
sub("Two McDonald's a few miles apart", 'src("Photos: JJBers · CC BY 2.0", "0.4")', 'src("Photo: JJBers · CC BY 2.0 (Lisbon, CT)", "0.4")')
sub("Trap number two", 'stock=K("r-kiosk")', 'stock=K("phone-use")')
sub("And there's a new question hanging", 'doc("abc7-ai-top", [("McDonald\'s sued", "filed a lawsuit")], source="AP · VIA ABC7 · OCT 2026", inset=None, zoom=0.8,',
    'doc("abc7-v2", [("McDonald\'s sued", "filed a lawsuit")], source="AP · VIA ABC7 · OCT 2026", inset=None, zoom=1.0,')
sub("And there's a new question hanging", 'else K("r-courthouse")),', 'else K("r-courthouse"), dim=0.75),')
i,j=find("And there's a new question hanging"); blk='\n'.join(L[i:j])
blk=blk.replace('stock=None if (has("abc7-ai-top", "McDonald\'s sued") or has("wftv-ai", "lawsuit")) else K("r-courthouse"), dim=0.75),', 'stock=K("r-kiosk"), dim=0.75),'); L[i:j]=blk.split('\n')
sub("McChicken. McDouble.", 'stock=K("wm-mcdouble")', 'stock=K("r-mcchicken")')
# Fox: 10 с → заголовок 4–5 с + цитата из Reddit отдельной сценой
sub("Not everybody was impressed", 'doc("fox-mcdouble-99", [("99 cents", "Anyone remember when"), ("$2.50", "It was only ten years ago")], source="FOX NEWS · QUOTING A REDDIT USER (NAME NOT SHOWN)", inset=None,',
    'doc("fox-v2", [("$2.50", "One person on Reddit")], source="FOX NEWS · MAY 2026", inset=None, zoom=0.8,')
ins_after("Not everybody was impressed", '''dict(start="Anyone remember when McDoubles", tag=C11, stock=K("r-value-burgers"), dim=0.72, sfx=[],
     el='<Center y={460}><PostCard at={0.05} site="REDDIT" note="QUOTED BY FOX NEWS · USERNAME HIDDEN" text="Anyone remember when McDoubles used to be 99 cents? It was only 10 years ago." /></Center>'),''')
sub("Fair point", 'stock=K("r-mcchicken"), sfx=[],', 'stock=K("wm-mcdouble"), sfx=[],')
sub("Fair point", 'src("Photo: Evan-Amos · public domain", "0.4")', 'src("Photo: TheDapperDan · public domain", "0.4")')
sub("A month later, the row of items", 'sfx=[', 'stock=K("burger-bite"), dim=0.75, sfx=[')
sub("A month later, the row of items", '"<Center y={470}><MenuSplit at={0.1} rightAt={0.3} footAt={@{One menu}} /></Center>"', '"<Center y={500}><div style={{ scale: \\"1.15\\" }}><MenuSplit at={0.1} rightAt={0.3} footAt={@{One menu}} /></div></Center>"')
sub("And back in February", 'stock=K("live-gma-bargain"), dim=0.6,', 'stock=K("r-boardroom"), dim=0.7,')
sub("And back in February", ' + src("Footage: Good Morning America · 2024", "0.3")),', '),')
sub("If there are two McDonald's near you", 'alt=(K("r-ct-lisbon"), "Different owners")', 'alt=(K("r-calverton-md"), "Different owners")')
L2='\n'.join(L)
# плашки с out: старая уходит до появления новой (контролёр: две плашки одновременно на 6:06)
L2=L2.replace('''    o = f" out={{{out}}}" if out else ""''', '''    o = f" out={{{out}-0.3}}" if out else ""''')
open(p,'w').write(L2)
print("ok")
