import re
p='cloud/gen/t11.py'; s=open(p).read()
def rep(a,b):
    global s
    assert s.count(a)==1, (s.count(a), a[:80])
    s=s.replace(a,b)
def addalt(start, alt):
    global s
    a=f'dict(start="{start}",'
    assert s.count(a)==1, start
    i=s.index(a)+len(a)
    s=s[:i]+f' alt={alt},'+s[i:]
# 6: split
rep('''dict(start="So why did seventy-eight percent"''', '''dict(start="I'll show you exactly where those numbers", stock=K("r-burger-bite"), sfx=[], el=plate("WHERE THESE NUMBERS COME FROM · LATER IN THE VIDEO", "0.2", y=880, size=36)),
dict(start="So why did seventy-eight percent"''')
addalt("And there's a second mystery", '(K("live-cbs-store"), "That one tells you")')
addalt("A bigger sandwich", '(K("live-ad1974-logo"), "A third piece of bun")')
addalt("Some guy in a boardroom", '(K("r-facepalm"), "And look")')
addalt("Then a milkshake machine salesman", '(K("wm-first-mcd2"), "and turns it into an empire")')
addalt("The only reason we sell fifteen-cent hamburgers", '(K("r-dollar-stack"), "from which our tenants")')
addalt("The cheap burger was never the product", '(K("r-coins-fall"), "so the people running")')
addalt("For the next few decades", '(K("wm-speedee"), "And whenever things got slow")')
addalt("And in 1997, McDonald's tried the boldest", '(K("live-ad1997-family"), "They called it Campaign")')
addalt("It said it would close hundreds", '(K("r-stock-screens"), "The stock fell")')
addalt("So the company called back a man", '''(K("r-archive-mcd"), "He'd spent nearly thirty years")''')
addalt("He came back as CEO", '(K("r-mcchicken"), "and leaned on the oldest weapon")')
addalt("Sixteen months in", '(K("podium"), "Jim Cantalupo had a heart attack")')
# 86 split
rep('el="<Center y={500}><CheeseStack at={0.05} liftAt={0.4} noteAt={@{saved about six cents}} /></Center>"),',
    'el="<Center y={500}><CheeseStack at={0.05} liftAt={0.4} /></Center>"),\ndict(start="One analyst estimated", tag=C6x, stock=K("cheeseburger-close"), sfx=[(\'ep06-coin:0.25\', \'@{saved about six cents}\')],\n     el=plate("−1 SLICE ≈ 6¢ A SANDWICH · ANALYST ESTIMATE", "@{saved about six cents}", y=880, size=40, color="C6.accent")),')
rep("('swoosh:0.25', '0.4'), ('ep06-coin:0.25', '@{saved about six cents}')]", "('swoosh:0.25', '0.4')]")
addalt("A year later, Burger King did something worse", '(K("wm-bk-whopperjr"), "It told its restaurant owners")')
# 91 / DimeLoss
rep('''fb=plate("DAN FITZPATRICK · SOUTH BEND, INDIANA", "@{Dan Fitzpatrick}"))),''','''fb=plate("DAN FITZPATRICK · SOUTH BEND, INDIANA", "@{Dan Fitzpatrick}"))),
dict(start="Once you count all the costs", tag=C6x, sfx=[('ep06-pop:0.25', '@{between a dollar ten}'), ('ep06-fall:0.3', '@{losing a dime}')],
     el="<Center y={480}><DimeLoss at={0.05} costAt={@{between a dollar ten}} lossAt={@{losing a dime}} /></Center>"),
dict(start="And the more popular the deal got", tag=C6x, stock=K("r-drive-thru-order"), sfx=[],
     el=plate("THE MORE POPULAR THE DEAL, THE MORE THEY LOST", "0.1", y=880, size=38, color="C6.accent")),''')
rep('''("Fitzpatrick", "Dan Fitzpatrick"), ("$1.10", "between a dollar ten")''', '''("Fitzpatrick", "Dan Fitzpatrick")''')
rep('''dict(start="They were losing a dime", tag=C6x, sfx=[('ep06-fall:0.3', '0.6')],
     el="<Center y={480}><DimeLoss at={0.05} costAt={0.3} lossAt={0.6} /></Center>" + plate("THE MORE POPULAR THE DEAL, THE MORE THEY LOST", "@{And the more popular}", y=900, size=34)),
''','')
# 95 split
rep('''        plate("SAME IDEA, TECHNICALLY", "@{Same idea}", y=920, size=40)),''','''        ""),
dict(start="Same idea, technically", tag=C6x, stock=K("r-kiosk"), sfx=[], el=plate("SAME IDEA, TECHNICALLY", "0.1", y=880, size=42)),''')
addalt("For years, the people who run the restaurants", '(K("coins-jar"), "And at some point")')
addalt("She and two other people at her table", '(K("receipts-woman"), "The receipt came to")')
addalt("That's not a secret", '(K("keys-hand"), "The landlord gets paid")')
rep('''dict(start="And this is a bad year for the people in the middle", tag=C7, stock=K("r-calculator"),''','''dict(start="And this is a bad year for the people in the middle", tag=C7, stock=K("dt-man-order"), alt=(K("r-calculator"), "In one survey this spring"),''')
rep('''fb=""), stock=None if has("agweb-herd", "1951") else K("cattle-aerial")),''','''fb=""), stock=None if has("agweb-herd", "1951") else K("cattle-aerial"), alt=None if has("agweb-herd", "1951") else (K("cowboys-herding"), "back when the country had")),''')
addalt("Then the fries", '(K("fries-strainer"), "About ninety-seven percent")')
# 124 split
rep('''dict(start="So McDonald's did something companies almost never do", tag=C8, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("mcd-letter-top",''','''dict(start="So McDonald's did something companies almost never do", tag=C8, stock=K("r-mcd-sign-close"), sfx=[], el=plate("SOMETHING COMPANIES ALMOST NEVER DO", "0.2", y=880, size=40)),
dict(start="The president of McDonald's USA", tag=C8, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("mcd-letter-top",''')
# 127 split
rep('''        plate("THEY JUST LED WITH THE BIG MAC", "@{They just led}", y=960, size=36, color="C6.accent")),''','''        ""),
dict(start="They told us", tag=C8, stock=K("r-big-mac-meal"), sfx=[], el=plate("THEY TOLD US. THEY JUST LED WITH THE BIG MAC.", "0.1", y=880, size=40, color="C6.accent")),''')
rep('''dict(start="So yes, costs are real", tag=C8, stock=K("r-burger-fries-table"), sfx=[],
     el=''','''dict(start="So yes, costs are real", tag=C8, stock=K("r-burger-fries-table"), alt=(K("tired-woman"), "But none of that"), sfx=[],
     el=src(ILL, "@{But none of that}") + ''')
# 139 split
rep('''("$7.25", "seven twenty-five"), ("20 states", "And in twenty states")''','''("$7.25", "seven twenty-five")''')
rep('''        plate("UNCHANGED SINCE JULY 2009 · LONGEST EVER WITHOUT A RAISE", "@{It hasn't moved}", y=960, size=32, color="C6.accent")),''','''        plate("UNCHANGED SINCE JULY 2009", "@{It hasn't moved}", y=960, size=36, color="C6.accent")),
dict(start="That's the longest it's ever gone", tag=C9, stock=K("clock-hands"), sfx=[('ep06-pop:0.25', '@{And in twenty states}')],
     el=plate("LONGEST EVER WITHOUT A RAISE", "0.1", y=880, size=42, out="@{And in twenty states}") + plate("20 STATES STILL USE $7.25", "@{And in twenty states}", y=880, size=46, color="C6.accent")),''')
addalt("If this changed how you see a price tag", '(K("eating-alone-car"), "Every week")')
addalt("And stay with me", '''(K("live-cbs-store"), "because McDonald's own numbers")''')
addalt("Trap number two", '(K("r-kiosk"), "They lived in the app")')
addalt("McDonald's now has about two hundred and ten", '''(K("r-phone-scroll"), "If you don't use it")''')
rep('''dict(start="For somebody too tired to drive", tag=C10, stock=K("r-delivery-bag"), sfx=[], el=""),''','''dict(start="Seventy percent. For somebody", tag=C10, stock=K("r-delivery-bag"), sfx=[], el=plate("+70% · FOR SOMEBODY TOO TIRED TO DRIVE", "0.1", y=880, size=40, color="C6.loss")),''')
addalt("And for a business built on volume", '(K("r-empty-drive-thru"), "The crowd was walking away")')
rep('''dict(start="McChicken. McDouble.", tag=C11, stock=K("live-gma-under3"), clean=True,''','''dict(start="McChicken. McDouble.", tag=C11, stock=K("r-mcchicken"), alt=(K("live-gma-under3"), "Small fries"),''')
rep('''            fb=plate("TWO QUARTER-POUND PATTIES · THREE SLICES OF CHEESE", "0.2")) +
        plate("THE SANDWICH ALONE: $8–10 IN A LOT OF PLACES", "@{the sandwich alone}", y=960, size=34, color="C6.accent")),''','''            fb=plate("TWO QUARTER-POUND PATTIES · THREE SLICES OF CHEESE", "0.2"))),
dict(start="In a lot of places, the sandwich alone", tag=C11, stock=K("big-burger-hold"), sfx=[('ep06-kaching:0.25', '@{eight to ten dollars}')],
     el=plate("THE SANDWICH ALONE: $8–10 IN A LOT OF PLACES", "@{eight to ten dollars}", y=880, size=38, color="C6.accent") + src(ILL, "0.3")),''')
addalt("If there are two McDonald's near you", '(K("r-ct-lisbon"), "Different owners")')
addalt("Jim Delligatti never got royalties", '(K("live-museum-sign"), "When people asked him")')
addalt("So maybe the question was never", '''(K("wm-first-mcd2"), "Maybe it's whether")''')
open(p,'w').write(s)
