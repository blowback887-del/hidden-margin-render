# T04 «They Advertised $146. The Checkout Said $649.» — четвёртый ролик They Saw You Coming (план сцен 19.11.2026).
# Окраска: детективная игра со зрителем («найди $273.44 на экране») + сатира приправой (сухие колкости только над схемой;
#   сотрудники поддержки и владелец — не мишень, только факты из иска).
# Визуальная идея (своя для выпуска): «под кнопкой» — красная кнопка Continue (ContinueBtn) и то, что лежит под ней.
#   Появляется в главе 1 («Found it yet?»), в главе 2 (кнопка → стрелка вниз → настоящая строка Fig. 11),
#   в главе 4 (годы 2022–2026 над кнопкой), в финале (под кнопку сползает бейдж NO HIDDEN FEES).
# Сквозная игра: значок FIND THE $273.44 в углу всю прогулку по экранам → FOUND на «Taxes and fees» (≈2:20).
# Талисман: бейдж NO HIDDEN FEES (вырезка из Fig. 3) — улетает в угол на «Hold on to that one», возвращается в финале.
# Улики: 19 скриншотов из иска FTC (Fig. 1–19, рамка "shot" — у них уже есть своё окно браузера) + страницы самого иска (бумага).
# Начало: холодный вход без трейлера — $146.32 против настоящего итога $649.71 к 0:08 (обещание обложки), иск к 0:15, игра к 0:30.
# Нарастание: прогулка по экранам → перемотка и строка под кнопкой (разгадка ~2:20) → наш расчёт → «налоги» без налога →
#   самое сильное ~6:00: знали с 2022, групповые иски, FTC, сотни миллионов → AutoRefill → как не попасться → бейдж под кнопкой.
import json, os
from evid import ev

EP = dict(
    comp="T04Lens",
    words="src/videos/t04-lens-words.json",
    text="cloud/voice/t04-text",
    parts=6,
    broll="cloud/broll/t04.json",
    audio="audio/t04-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03", "t04"],
    music=[],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t04.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t04-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

FTC = "FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026"
FIG = lambda n: f"SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. {n} · FEB 24, 2026"
C1, C2, C3, C4, C5 = (1, "The Checkout"), (2, "Under the Button"), (3, "Whose Taxes?"), (4, "They Knew"), (5, "Don't Get Caught")
FIND = '<FindBadge at={-1} />'
BADGE = '<FeeBadge at={-1} from={[140, 250, 0.3]} />'


def fig(n, marks=(), zoom=None):
    return ev("t04", f"fig{n}", marks=list(marks), source=FIG(n), frame="shot", zoom=zoom)


def doc(name, marks=(), source=FTC):
    return ev("t04", name, marks=list(marks), source=source, inset=True)


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД =======================
dict(start="In February twenty twenty-six", stock=K("lens-eyechart"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("FEBRUARY 2026 · A CONTACT LENS WEBSITE", "@{a contact lens}", y=880, size=38)),
dict(start="advertised a full year", dim=0.0, sfx=[('ep06-pop:0.25', '@{one hundred forty-six}'), ('t02-declined:0.35', '@{The checkout total}')],
     el='''<OpenFlip at={0.1} totalAt={@{The checkout total}} />'''),
dict(start="No hacker", stock=K("hacker-hoodie"), clean=True, alt=(K("glitch"), "No glitch"), sfx=[('ep06-scratch:0.25', '0.05')], el=''),
dict(start="Every screen of that checkout", stock=K("detectives-docs"), sfx=[('t02-paper:0.3', '@{federal lawsuit}')],
     el=plate("EVERY SCREEN · IN A FEDERAL LAWSUIT", "@{federal lawsuit}", y=880)),
dict(start="This October, the Federal", sfx=[('t02-paper:0.3', '0.1'), ('ep06-stamp:0.22', '@{Federal Trade Commission}')],
     el=doc("ftc-caption", [("FEDERAL TRADE COMMISSION", "Federal Trade Commission")], source="CASE 2:26-cv-03232 · U.S. DISTRICT COURT, NEVADA")),
dict(start="About fifty million", stock=K("eye-closeup"), sfx=[('ep06-counter:0.3', '@{fifty million}')],
     el='''<Center x={1430} y={330}><Plate6 at={@{fifty million}}><BigNum at={@{fifty million}} icon="person" size={120} label="AMERICANS WEAR CONTACTS">50M</BigNum></Plate6></Center>
<Source6 at={@{fifty million}}>FTC complaint, ¶4</Source6>'''),
dict(start="So let's play a game", stock=K("button-press"), sfx=[('tick:0.3', '@{play a game}')],
     el=plate("A GAME: THE EXACT SCREENS A SHOPPER SAW", "@{exact screens}", y=880, size=38)),
dict(start="Somewhere along the way", dim=0.0, sfx=[('ep06-pop:0.25', '@{two hundred seventy-three}'), ('tick:0.3', '@{Try to spot}')],
     el='''<Center y={500}><Words text="Find the $273.44." at={0.1} size={130} hl={["$273.44."]} /></Center>
<Center y={680}><Label6 at={@{on the page}} size={34} color={C6.mint}>IT'S ON THE PAGE THE WHOLE TIME</Label6></Center>
<FindBadge at={@{Try to spot}} />'''),
dict(start="Ready? Let's go shopping", stock=K("laptop-night-shop"), clean=True, sfx=[('click:0.35', '@{go shopping}')], el=FIND),

# ======================= PART 2 · ГЛАВА 1 · ПРОГУЛКА ПО ЭКРАНАМ =======================
dict(start="It starts on Google", tag=C1, stock=K("google-search"), hard=True, sfx=[('click:0.3', '@{sponsored ad}')], el=FIND),
dict(start="Proclear 1 Day, ninety pack", tag=C1, sfx=[('ep06-pop:0.25', '@{Eighteen dollars}')],
     el=fig(1, [("$18.29", "Eighteen dollars")]) + FIND),
dict(start="You click", tag=C1, sfx=[('click:0.35', '0.05'), ('ep06-pop:0.2', '@{Lowest price}')],
     el=fig(2, [("$18.29", "Big red price"), ("LOWEST PRICE", "Lowest price"), ("$45.79", "Regular price")]) + FIND),
dict(start="Scroll a little", tag=C1, sfx=[('ep09-bell:0.22', '@{No hidden fees}')],
     el=fig(3, [("NO HIDDEN FEES", "No hidden fees")], zoom=0.01) + FIND),
dict(start="Hold on to that one", tag=C1, stock=K("hands-shop-laptop"), dim=0.55, sfx=[('ep06-whoosh:0.25', "@{We'll need}")],
     el='''<FeeBadge at={0.05} from={[960, 500, 1]} to={[140, 250, 0.3]} moveAt={@{We'll need}} moveDur={0.7} />''' + FIND),
dict(start="You want a year's supply", tag=C1, stock=K("eye-drops"), sfx=[('ep06-pop:0.2', '@{eight boxes total}')],
     el=plate("4 BOXES PER EYE · 8 BOXES = A YEAR", "0.2", y=880) + FIND + BADGE),
dict(start="You type in your prescription", tag=C1, sfx=[('click:0.3', '0.1'), ('click:0.3', '@{then your doctor}')],
     el=fig(4) + FIND + BADGE),
dict(start="Then the cart", tag=C1, sfx=[('ep06-pop:0.25', '@{Seventy-three sixteen}'), ('ep06-kaching:0.25', '@{One hundred forty-six}')],
     el=fig(7, [("$73.16", "Seventy-three sixteen")]) + plate("$73.16 × 2 EYES = $146.32 AFTER REBATE", "@{One hundred forty-six}", y=900, size=38) + FIND + BADGE),
dict(start="And a free lens case", tag=C1, sfx=[('ep06-pop:0.25', '@{two dollar}')],
     el=ev("t04", "case", marks=[("FREE Lens Case ($2.99 value)", "two dollar")], source=FIG(11), frame="shot") + FIND + BADGE),
dict(start="So far, the numbers match", tag=C1, sfx=[('ding:0.25', '@{match the ad}'), ('click:0.4', '@{Click Go to Checkout}')],
     el=fig(7, [("Go To Checkout", "Click Go to Checkout")]) + FIND + BADGE),
dict(start="Shipping page", tag=C1, sfx=[('ep06-pop:0.2', '@{Standard shipping}')],
     el=fig(9, [("Standard", "Standard shipping"), ("Continue", "big red button")]) + FIND + BADGE),
dict(start="Found the two hundred", tag=C1, dim=0.0, sfx=[('tick:0.35', '0.1'), ('tick:0.35', '0.9'), ('click:0.45', '@{So click it}')],
     el='''<Center y={330}><Words text="Found the $273.44 yet?" at={0.05} size={96} hl={["$273.44"]} /></Center>
<Center y={640}><ContinueBtn at={0.1} pressAt={@{So click it} + 0.4} /></Center>''' + FIND + BADGE),
dict(start="Next screen", tag=C1, sfx=[('buzz:0.3', '@{six hundred forty-nine}'), ('ep06-pop:0.2', '@{four twenty-nine}')],
     el=fig(12, [("$649.71", "six hundred forty-nine"), ("$429.71", "four twenty-nine")]) + FIND + BADGE),
dict(start="And according to the lawsuit, this screen", tag=C1, sfx=[('ep06-stamp:0.22', '@{no taxes and fees line}')],
     el=ev("t04", "crop-fig12-total", marks=[("Order Total", "two totals"), ("Total After Rebate", "two totals")], source=FIG(12), frame="shot", zoom=0.01) +
        plate("NO “TAXES &amp; FEES” LINE ON THIS SCREEN · FTC ¶41", "@{no taxes and fees line}", y=960, size=32) + FIND + BADGE),
dict(start="Just a payment form", tag=C1, sfx=[('click:0.4', '@{Submit Order}')],
     el=fig(13, [("Submit Order", "Submit Order")]) + FIND + BADGE),

# ======================= PART 3 · ГЛАВА 2 · ПОД КНОПКОЙ =======================
dict(start="So let's rewind", tag=C2, stock=K("vhs-rewind"), hard=True, alt=(K("trackpad"), "Scroll down"), sfx=[('t04-rewind:0.4', '0.05'), ('ep06-whoosh:0.2', '@{Scroll down}')],
     el=FIND + BADGE),
dict(start="Under the button sits", tag=C2, sfx=[('ep06-pop:0.2', '@{order summary}')],
     el=fig(10, [("Order Summary", "order summary")]) + FIND + BADGE),
dict(start="And one more line", tag=C2, sfx=[('ep06-pop:0.2', '@{Taxes and fees}'), ('impact:0.25', '@{Two hundred seventy-three}')],
     el=fig(11, [("Taxes & fees", "Taxes and fees"), ("$273.44", "Two hundred seventy-three")]) +
        '''<FindBadge at={-1} foundAt={@{Two hundred seventy-three}} />''' + BADGE),
dict(start="That's where it was", tag=C2, dim=0.0, sfx=[('ep06-whoosh:0.25', '@{Under the button}')],
     el='''<ButtonOverSummary at={0.05} downAt={@{Under the button}} />'''),
dict(start="The lawsuit says shoppers", tag=C2, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("ftc-never", [("instruction never see the", "never saw"), ("line item at all;", "that line at all")])),
dict(start="One forty-six thirty-two, plus", tag=C2, dim=0.0, sfx=[('ep06-pop:0.2', '0.1'), ('ep06-pop:0.2', '@{plus the fee}'), ('ep06-pop:0.2', '@{plus shipping}'), ('ding:0.35', '@{To the cent}')],
     el='''<Center y={520}><SumColumn rows={[{ label: "lenses, after rebate", value: "$146.32", at: 0.1 }, { label: "taxes & fees", value: "$273.44", at: @{plus the fee}, color: C6.loss }, { label: "shipping", value: "$9.95", at: @{plus shipping} }]} total={{ label: "total after rebate", value: "$429.71", at: @{Four twenty-nine} }} /></Center>'''),
dict(start="And that's the number after the rebate", tag=C2, dim=0.0, sfx=[('buzz:0.25', '@{Submit the order}'), ('ep06-coin:0.25', '@{six forty-nine} + 1.2')],
     el='''<Center y={500}><RebateWait at={0.3} mailAt={@{six forty-nine} + 1.2} /></Center>'''),
dict(start="The two hundred twenty dollar rebate", tag=C2, stock=K("envelope-seal"), alt=(K("calendar-write"), "wait for a prepaid"), sfx=[('t02-paper:0.25', '@{by mail}')],
     el=plate("REBATE: MAIL A FORM · WAIT FOR A PREPAID CARD", "@{by mail}", y=880, size=38) + '<Source6 at={@{by mail}}>Lens.com rebate FAQ</Source6>'),
dict(start="Now let's do the math", tag=C2, stock=K("calculator-docs"), sfx=[('click:0.3', '@{the math the ad}')],
     el=plate("THE MATH THE AD DIDN'T DO", "@{the math the ad}", y=880)),
dict(start="The lowest price was", tag=C2, dim=0.0, sfx=[('ep06-pop:0.25', '@{eighteen twenty-nine}'), ('ep06-counter:0.3', '@{thirty-four eighteen}'), ('impact:0.25', '@{almost twice}')],
     el='''<Center y={520}><BoxVsFee at={@{eighteen twenty-nine}} feeAt={@{thirty-four eighteen}} left={["LENSES · A BOX", "$18.29"]} right={["FEE · A BOX", "$34.18"]} mult="×1.87" multAt={@{almost twice}} /></Center>'''),
dict(start="Even after the rebate, every box", tag=C2, dim=0.0, sfx=[('ep06-counter:0.3', '@{fifty-two forty-seven}'), ('impact:0.25', '@{Nearly three times}')],
     el='''<Center y={520}><BoxVsFee at={0.1} feeAt={@{fifty-two forty-seven}} left={["PRICE ON GOOGLE", "$18.29"]} right={["REAL PRICE · A BOX", "$52.47"]} ratio={2.87} mult="≈ ×3" multAt={@{Nearly three times}} note="OUR CALCULATION · ($146.32 + $273.44) ÷ 8 · BEFORE SHIPPING" /></Center>'''),
dict(start="According to the lawsuit, that's the pattern", tag=C2, stock=K("card-laptop"), sfx=[('ep06-pop:0.2', '@{cheapest slice}')],
     el=plate("CHEAP SLICE UP FRONT · THE REST AT THE END", "@{cheapest slice}", y=880, size=38)),
dict(start="By then you've typed", tag=C2, stock=K("typing-lowlight"), alt=(K("frustrated-laptop"), "Nobody wants"),
     sfx=[('ep09-bell:0.2', '@{Nobody wants}')],
     el=
        '''<Meme at={@{Nobody wants}} text="me, typing my prescription. again." y={900} size={66} />'''),
dict(start="And the FTC says that's the damage", tag=C2, stock=K("phone-scroll-shop"), sfx=[('ep06-pop:0.2', '@{much harder}')],
     el=plate("NO REAL TOTAL → NO REAL COMPARISON", "@{the damage}", y=880) + '<Source6 at={@{much harder}}>FTC press release · Oct 2, 2026</Source6>'),
dict(start="But the name of that line", tag=C2, stock=K("tax-form"), dim=0.55, sfx=[('ep06-stamp:0.22', '@{Whose taxes}')],
     el='''<Center y={430}><Words text="“Taxes &amp; fees.”" at={@{Taxes and fees}} size={110} /></Center>
<Center y={620}><Words text="Whose taxes?" at={@{Whose taxes}} size={130} hl={["taxes?"]} /></Center>'''),

# ======================= PART 4 · ГЛАВА 3 · ЧЬИ НАЛОГИ =======================
dict(start="Next to the charge", tag=C3, hard=True, sfx=[('click:0.35', '@{Click it}')],
     el=fig(11, [("Taxes & fees", "little gray")])),
dict(start="The taxes part is", tag=C3, sfx=[('ep06-pop:0.25', '@{tax recovery charges}')],
     el=fig(14, [("tax recovery charges", "tax recovery charges")], zoom=0.01)),
dict(start="Most people read taxes", tag=C3, stock=K("calc-taxform"), sfx=[('ep06-pop:0.2', '@{sales tax}')],
     el=plate("MOST PEOPLE READ “TAXES” AS SALES TAX", "@{sales tax}", y=880)),
dict(start="Alaska, Delaware", tag=C3, dim=0.0, sfx=[('ep06-pop:0.2', '@{Alaska}')],
     el='''<Center y={520}><StatesBoard a={[{ st: "Alaska", at: @{Alaska} }, { st: "Delaware", at: @{Delaware} }, { st: "Montana", at: @{Montana} }, { st: "New Hampshire", at: @{New Hampshire} }, { st: "Oregon", at: @{Oregon} }]} b={[]} /></Center>
<Source6 at={0.3}>FTC complaint, ¶48</Source6>'''),
dict(start="And according to the lawsuit, Florida", tag=C3, dim=0.0, sfx=[('ep06-pop:0.2', '@{Florida}'), ('ep06-stamp:0.22', '@{anyway}')],
     el='''<Center y={520}><StatesBoard a={[{ st: "Alaska", at: -1 }, { st: "Delaware", at: -1 }, { st: "Montana", at: -1 }, { st: "New Hampshire", at: -1 }, { st: "Oregon", at: -1 }]} b={[{ st: "Florida", at: @{Florida} }, { st: "New Jersey", at: @{New Jersey} }, { st: "Virginia", at: @{Virginia} }]} stampAt={@{anyway}} /></Center>
<Source6 at={0.3}>FTC complaint, ¶48–50</Source6>'''),
dict(start="A shopper in New Hampshire", tag=C3, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("ftc-virginia", [("we are unable to change the amount", "couldn't be removed")])),
dict(start="A shopper in Florida", tag=C3, sfx=[('t02-paper:0.3', '0.1'), ('buzz:0.3', '@{two hundred forty-one}')],
     el=doc("ftc-florida", [("taxes and fees for $241.92,", "two hundred forty-one"), ("contact lens [sic] are exempt from sales tax in", "doesn't tax contacts")])),
dict(start="And in Virginia", tag=C3, sfx=[('ep06-scratch:0.3', '@{We are not charging}')],
     el=doc("ftc-virginia", [("We are not charging", "We are not charging"), ("customers sales taxes or state taxes,", "sales taxes or state")])),
dict(start="So whose taxes?", tag=C3, sfx=[('t02-paper:0.3', '0.1'), ('ep06-stamp:0.22', '@{none of it}')],
     el=doc("ftc-notsales", [("Defendants misrepresent that the hidden charges include state sales taxes.", "whose taxes"), ("But this representation is false or misleading.", "none of it")])),
dict(start="One class action from", tag=C3, stock=K("detectives-docs"), alt=(K("calculator-docs"), "the only way"), sfx=[('ep06-pop:0.25', '@{processing fee}'), ('t02-paper:0.25', '@{full receipt}')],
     el=plate("CLASS ACTION, 2024: “A PROCESSING FEE”", "0.3", y=880, out="@{the only way}") + '<Source6 at={@{processing fee}}>Nail v. Lens.com, via Frankfurt Kurnit (FKKS)</Source6>' +
        plate("THE BREAKDOWN: ONLY IF YOU ASK FOR A “FULL RECEIPT”", "@{the only way}", y=880, size=36)),
dict(start="One rep also said", tag=C3, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.25', '@{per box}')],
     el=doc("ftc-perbox", [("per box.", "per box")])),
dict(start="If that's right", tag=C3, stock=K("shocked-man"), sfx=[('ep06-counter:0.3', '@{biggest order there is}')],
     el=plate("A YEAR'S SUPPLY = THE BIGGEST ORDER", "@{biggest order there is}", y=880)),
dict(start="Customers noticed", tag=C3, stock=K("frustrated-laptop"), sfx=[('ep06-counter:0.3', '0.4')],
     el='''<Center x={1430} y={330}><Plate6 at={0.4}><BigNum at={0.4} icon="receipt" size={110} label="COMPLAINTS · LENS.COM'S OWN RECORDS">1000s</BigNum></Plate6></Center>
<Source6 at={@{thousands of complaints}}>FTC complaint, ¶79</Source6>'''),
dict(start="One shopper asked how", tag=C3, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("ftc-146", [("from $146 to $245??", "from one forty-six")])),
dict(start="Another said the price had doubled", tag=C3, sfx=[('ep06-stamp:0.22', '@{not hidden}')],
     el=doc("ftc-doubled", [("It doubled the price of my order.", "price had doubled"), ("hidden and they are shown within", "not hidden")])),
dict(start="If you want more checkouts", stock=K("trackpad"), clean=True, sfx=[('ep09-bell:0.2', '@{No fees under}')],
     el='''<Subscribe6 at={@{subscribe}} />''' + plate("SUBSCRIBING: $0.00 · NO FEES UNDER THE BUTTON", "@{No fees under}", y=880, size=36)),
dict(start="Now, a confusing checkout", stock=K("detective-board"), alt=(K("email-typing"), "this one didn't"), sfx=[('rise:0.3', "@{this one didn't}")], el=''),

# ======================= PART 5 · ГЛАВА 4 · ОНИ ЗНАЛИ =======================
dict(start="August thirty-first", tag=C4, dim=0.0, hard=True, sfx=[('ep06-pop:0.25', '0.2'), ('t02-paper:0.3', '@{current checkout process}')],
     el='''<Center y={520}><EmailCard at={0.1} slideAt={@{current checkout process}} /></Center>'''),
dict(start="According to the lawsuit, that presentation", tag=C4, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("ftc-ppt", [("Current Checkout Process", "said it plainly"), ("scrolled down below the red", "below the Continue")])),
dict(start="It went to the owner", tag=C4, dim=0.0, sfx=[('ep06-pop:0.25', '@{Cary}'), ('ep06-pop:0.2', '@{only employee}')],
     el='''<Center y={500}><OrgChart at={@{only employee}} ownerAt={0.1} speedAt={@{only employee} + 0.6} callAt={99} /></Center>'''),
dict(start="Customer service runs through", tag=C4, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("ftc-owner", [("sole owner of Speed Commerce.", "Speed Commerce"), ("Philippines-based call center.", "an outside call center")])),
dict(start="So after that slide", tag=C4, dim=0.0, sfx=[('tick:0.3', '@{what changed}'), ('ep06-boom:0.2', '@{nothing that mattered}')],
     el='''<Center y={520}><YearsOverButton at={0.1} years={[{ y: "2022", at: @{what changed} }, { y: "2023", at: @{what changed} + 0.35 }, { y: "2024", at: @{what changed} + 0.7 }, { y: "2025", at: @{According to the FTC} }, { y: "2026", at: @{According to the FTC} + 0.35 }]} label="FTC: “NOT MATERIALLY CHANGED” · ¶86" /></Center>'''),
dict(start="Then came the lawsuits", tag=C4, stock=K("gavel"), hard=True, sfx=[('ep06-stamp:0.22', '@{five class actions}')],
     el=plate("5 CLASS ACTIONS · ONE NEVADA FEDERAL COURT", "0.4", y=880) +
        '''<Source6 at={@{five class actions}}>Consolidation order, D. Nev. · May 2025</Source6>'''),
dict(start="In one case, Lens.com argued", tag=C4, stock=K("lawyers"), sfx=[('ep06-pop:0.25', '@{disclosed before checkout}')],
     el=plate("LENS.COM: THE FEE WAS DISCLOSED BEFORE CHECKOUT", "@{disclosed before checkout}", y=880, size=36) + '<Source6 at={@{disclosed before checkout}}>Nail v. Lens.com, via FKKS</Source6>'),
dict(start="and any reasonable shopper", tag=C4, stock=K("man-glasses-shock"), clean=True, sfx=[('ep09-bell:0.2', '@{the total change}')],
     el='''<Meme at={@{reasonable shopper}} text="the reasonable shopper, scrolling below “Continue”" y={900} size={62} />'''),
dict(start="In October twenty twenty-four", tag=C4, stock=K("judge-verdict"), sfx=[('ep06-pop:0.25', '@{keep going}'), ('ep06-stamp:0.22', '@{actual jury}')],
     el=plate("OCT 2024 · NEVADA: THE CASE GOES ON", "0.4", y=880, out="@{This April}") + '''<Source6 at={0.4}>Nail v. Lens.com, via FKKS</Source6>''' +
        plate("APRIL 2026 · FLORIDA: A QUESTION “FOR AN ACTUAL JURY”", "@{This April} + 0.3", y=880, size=36)),
dict(start="In August twenty twenty-five", tag=C4, sfx=[('t02-paper:0.3', '0.1'), ('ep06-stamp:0.22', '@{kept going}')],
     el=doc("ftc-cid", [("August 2025.", "formal demand"), ("more than four years;", "kept going")])),
dict(start="And the screens you just clicked", tag=C4, dim=0.0, sfx=[('ep06-pop:0.25', '@{February twenty-fourth}'), ('ep06-pop:0.25', '@{Same line}')],
     el='''<AdVsTruth at={0.1} left={{ label: "FIG. 9 · THE BUTTON · FEB 24, 2026", img: "evidence/t04/fig9.png", fit: "contain" }} right={{ label: "FIG. 11 · THE LINE UNDER IT", img: "evidence/t04/crop-fig11-summary.png", at: @{Same line} }} source="Screenshots · FTC v. Lens.com complaint" />'''),
dict(start="More than four years of this", tag=C4, stock=K("money-counter"), sfx=[('ep06-kaching:0.3', '@{hundreds of millions}')],
     el='''<Center x={960} y={330}><Plate6 at={0.3}><Label6 at={0.3} size={50} color={C6.accent}>FTC ALLEGES: “HUNDREDS OF MILLIONS”</Label6></Plate6></Center>
<Source6 at={@{hundreds of millions}}>FTC complaint, ¶6 · allegation, not a ruling</Source6>'''),
dict(start="The same low prices also sold", tag=C4, sfx=[('ep06-pop:0.25', '@{five percent off}')],
     el=fig(15, [("5% OFF", "five percent off")], zoom=0.01)),
dict(start="According to the lawsuit, the taxes and fees weren't", tag=C4, sfx=[('click:0.35', '@{handed over}')],
     el=fig(19, [("Submit Order", "handed over their card")], zoom=0.01)),
dict(start="Five percent off. In our February", tag=C4, dim=0.0, sfx=[('ep06-pop:0.25', '0.1'), ('impact:0.25', '@{three quarters}')],
     el='''<Center y={520}><PctVs at={0.1} bAt={@{In our February}} /></Center>'''),
dict(start="And according to the lawsuit, how to cancel", tag=C4, stock=K("phone-impatient"), alt=(K("facepalm"), "Some customers"), sfx=[('ep06-pop:0.25', '@{under Help}'), ('ep06-scratch:0.25', '@{told to call}')],
     el=plate("CANCEL? A SEPARATE PAGE UNDER “HELP”", "@{under Help}", y=880, out="@{Some customers} - 0.2") + '<Source6 at={@{under Help}}>FTC complaint, ¶67–75</Source6>' +
        plate("CANCEL BY CHAT? SOME WERE TOLD TO CALL", "@{Some customers}", y=880)),

# ======================= PART 6 · ГЛАВА 5 · КАК НЕ ПОПАСТЬСЯ =======================
dict(start="To be clear, the FTC's case", tag=C5, hard=True, sfx=[('t02-paper:0.3', '0.1'), ('ep06-pop:0.25', '@{not a verdict}')],
     el=doc("ftc-caption2", [("UNITED STATES DISTRICT COURT", "a lawsuit")], source="FTC v. LENS.COM · ALLEGATIONS · NO RULING YET") + plate("A LAWSUIT, NOT A VERDICT · NO RULING YET", "@{not a verdict}", y=880)),
dict(start="Until it does", tag=C5, dim=0.0, sfx=[('ep06-whoosh:0.2', '0.1')],
     el='''<UnderTheButton at={0.1} />'''),
dict(start="Before you click Continue", tag=C5, stock=K("phone-scroll-shop"), sfx=[('ep06-pop:0.3', '0.2')],
     el=plate("1 · SCROLL ALL THE WAY DOWN BEFORE “CONTINUE”", "0.2", y=880, size=40)),
dict(start="Compare totals, not box prices", tag=C5, stock=K("couple-bills-phone"), sfx=[('ep06-pop:0.3', '0.2')],
     el=plate("2 · COMPARE FINAL TOTALS, NOT BOX PRICES", "0.2", y=880, size=40)),
dict(start="A price after rebate", tag=C5, stock=K("card-tablet"), sfx=[('ep06-pop:0.3', '0.2')],
     el=plate("3 · “AFTER REBATE” = FULL PRICE TODAY", "0.2", y=880, size=40)),
dict(start="And you can shop anywhere", tag=C5, stock=K("eye-exam"), alt=(K("eyeglasses-chart"), "even if you don't"), sfx=[('ep06-pop:0.3', '@{shop anywhere}')],
     el=plate("4 · YOUR EYE DOCTOR MUST GIVE YOU A COPY", "@{shop anywhere}", y=880, size=40) + '<Source6 at={@{federal law}}>FTC Contact Lens Rule</Source6>'),
dict(start="If you were charged for something", tag=C5, dim=0.0, sfx=[('ep06-pop:0.3', '@{reportfraud}')],
     el='''<Center y={430}><Plate6 at={0.1}><Label6 at={0.1} size={44} color={C6.ink}>CALL YOUR CARD ISSUER</Label6></Plate6></Center>
<Center y={620}><Words text="ReportFraud.ftc.gov" at={@{reportfraud}} size={110} hl={["ReportFraud.ftc.gov"]} serif={false} /></Center>'''),
dict(start="Remember why customers choose", dim=0.0, sfx=[('ep09-bell:0.25', '@{No hidden fees}')],
     el=fig(3, [("NO HIDDEN FEES", "No hidden fees")], zoom=0.01)),
dict(start="And technically, the fee was on the page", dim=0.0, sfx=[('ep06-whoosh:0.25', '@{Right under}'), ('ep06-stamp:0.22', '@{told you to click}')],
     el='''<UnderTheButton at={0.05} badgeAt={0.1} slideAt={@{Right under}} caption="Right under the button they told you to click." capAt={@{technically}} />'''),
dict(start="Ever watched a total jump", stock=K("laptop-night-shop"), dim=0.45, end_pad=8.0,
     el='''<Center y={260}><Words text="Ever watched a total jump on the last screen?" at={@{Ever watched}} size={74} hl={["jump"]} maxW={1600} /></Center>
<Center y={400}><Label6 at={@{Tell me}} size={38} color={C6.accent}>TELL US WHAT YOU WERE BUYING · COMMENTS</Label6></Center>'''),
]

EP["music_at"] = [
    ("In February twenty twenty-six", "audio/t04/music-c0-open.mp3", 0.075),
    ("It starts on Google", "audio/t04/music-c1-walk.mp3", 0.07),
    ("So let's rewind", "audio/t04/music-c2-scroll.mp3", 0.07),
    ("Next to the charge", "audio/t04/music-c3-taxes.mp3", 0.08),
    ("August thirty-first", "audio/t04/music-c4-knew.mp3", 0.075),
    ("To be clear, the FTC's case", "audio/t04/music-c5-how.mp3", 0.11),
]

# графика без видео — с медленным наездом (Drift), чтобы кадр не стоял
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", ""):
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"
