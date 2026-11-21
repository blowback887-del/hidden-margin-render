# T05 «Your Neighbor Paid Less for the Same Groceries» — пятый ролик They Saw You Coming (план сцен 21.11.2026).
# Окраска: тихий техно-триллер («ценник смотрит на тебя») + сухая сатира приправой. Компании не обвиняем:
#   расследования (Consumer Reports, WSJ, KARE 11, FTC) и собственные ответы компаний.
# Визуальная идея (своя для выпуска): электронный ценник ESL с красным огоньком — одна вещь, разные цены.
#   Глава 0 — пять ценников на одну дюжину яиц; глава 1 — ценник «тест»; глава 3 — ценники Walmart меняются разом;
#   финал — снова пять ценников над теми же яйцами.
# Талисман: дюжина яиц Lucerne ($3.99–$4.79) — в начале и в финале.
# Начало: холодный вход без трейлера — пять цен к 0:10, Сиэтл $114.34 / $123.93 к 0:30, вопрос «кто решает?» к 0:45.
# Нарастание: эксперимент (ответ-принцип «цена — это тест» ~2:20) → это не ново (Staples, Orbitz, Target) →
#   кто строит инструменты (FTC: движения мыши, 250 клиентов) ~5:30–6:30 → законы (Нью-Йорк, Мэриленд, Сиэтл) → как не попасться → яйца.
import json, os
from evid import ev

EP = dict(
    comp="T05Prices",
    words="src/videos/t05-prices-words.json",
    text="cloud/voice/t05-text",
    parts=6,
    broll="cloud/broll/t05.json",
    audio="audio/t05-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03", "t05"],
    music=[],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t05.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t05-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

CR = "CONSUMER REPORTS · GROUNDWORK · MORE PERFECT UNION · DEC 2025"
C1, C2, C3, C4, C5 = (1, "Same Cart, Different Price"), (2, "Not New"), (3, "Who Builds It"), (4, "Pushback"), (5, "Make It Guess Wrong")
EGGS = '["$3.99", "$4.28", "$4.59", "$4.69", "$4.79"]'


def doc(name, marks=(), source=None, **kw):
    return ev("t05", name, marks=list(marks), source=source, **kw)


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


def src(text, at="0.3"):
    return f"<Source6 at={{{at}}}>{text}</Source6>"


S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД =======================
dict(start="One dozen eggs", stock=K("eggs-macro"), clean=True, sfx=[('ep06-whoosh:0.2', '0.05'), ('ep06-pop:0.25', '@{Five different prices}')],
     el=plate("ONE DOZEN EGGS · SAME STORE · SAME TIME", "@{Same store}", y=880, size=38)),
dict(start="Three ninety-nine", stock=K("eggs-closeup"), dim=0.72,
     sfx=[('ep06-pop:0.22', '0.05'), ('ep06-pop:0.22', '@{Four twenty-eight}'), ('ep06-pop:0.22', '@{Four fifty-nine}'), ('ep06-pop:0.22', '@{Four sixty-nine}'), ('impact:0.25', '@{Four seventy-nine}')],
     el=f'''<Center y={{520}}><TagRow prices={{{EGGS}}} times={{[0.05, @{{Four twenty-eight}}, @{{Four fifty-nine}}, @{{Four sixty-nine}}, @{{Four seventy-nine}}]}} title="1 dozen eggs" w={{250}} /></Center>'''),
dict(start="That was a Safeway", sfx=[('t02-paper:0.3', '0.1')],
     el=doc("cr-eggs", [("$3.99, $4.28, $4.59, $4.69, and $4.79", "Instacart app")], source=CR)),
dict(start="Five shoppers, one carton", stock=K("people-phones"), sfx=[('ep06-stamp:0.22', '@{nobody told them}')],
     el=plate("AND NOBODY TOLD THEM", "@{nobody told them}", y=880, size=44, color="C6.accent")),
dict(start="In Seattle, thirty-nine people", stock=K("seattle-aerial"), alt=(K("cart-aisle"), "put the exact same"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("SEATTLE · 39 SHOPPERS · THE SAME 20 ITEMS", "@{thirty-nine people}", y=880, size=38)),
dict(start="They got five different totals", dim=0.0, sfx=[('ep06-pop:0.25', '@{one hundred fourteen}'), ('impact:0.25', '@{one twenty-three}')],
     el='''<Center y={500}><PricePair at={@{one hundred fourteen}} a={["CHEAPEST CART", "$114.34"]} b={["MOST EXPENSIVE", "$123.93"]} bAt={@{one twenty-three}} note="SAME 20 ITEMS · SAFEWAY, SEATTLE · SEPT 4, 2025" /></Center>''' + src("Consumer Reports investigation, 2025")),
dict(start="Same cart. Same store.", stock=K("cart-aisle"), dim=0.55, sfx=[('ep06-kaching:0.25', '@{nearly ten dollars}')],
     el='''<Center y={500}><Words text="+$9.59 for nothing." at={@{nearly ten dollars}} size={130} hl={["+$9.59"]} /></Center>''' + src("our calculation: $123.93 − $114.34", "@{nearly ten dollars}")),
dict(start="So who decides", stock=K("supermarket-evening"), dim=0.45, sfx=[('ep06-pop:0.25', '@{price tag at your store}')],
     el='''<Center y={470}><ESL at={@{price tag at your store}} price="$?.??" top="YOUR STORE" w={460} /></Center>''' + plate("WHO DECIDES WHO PAYS MORE?", "0.1", y=880)),

# ======================= PART 2 · ГЛАВА 1 · ЭКСПЕРИМЕНТ =======================
dict(start="Those numbers come from", tag=C1, hard=True, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("cr-top", [], source=CR)),
dict(start="Nearly three quarters", tag=C1, stock=K("shop-online-phone"), dim=0.55, sfx=[('ep06-counter:0.3', '@{three quarters}'), ('ep06-pop:0.22', '@{five prices at once}')],
     el='''<Center y={440}><Words text="3 in 4 items" at={@{three quarters}} size={140} hl={["3", "4"]} /></Center>
<Center y={620}><Label6 at={@{different prices}} size={36} color={C6.mint}>SHOWED DIFFERENT PRICES TO DIFFERENT SHOPPERS</Label6></Center>''' + src("Consumer Reports / Groundwork, 2025", "@{three quarters}")),
dict(start="On staples like cereal", tag=C1, stock=K("cereal-aisle"), sfx=[('ep06-pop:0.22', '@{thirteen percent}')],
     el=plate("AVERAGE GAP ON BASICS: 13%", "@{thirteen percent}", y=880, size=42)),
dict(start="A box of Wheat Thins", tag=C1, sfx=[('impact:0.25', '@{Up to twenty-three}')],
     el=doc("cr-23", [("the highest price 23% more than the lowest", "Up to twenty-three")], source=CR)),
dict(start="The researchers found these tests", tag=C1, stock=K("shoppers-market"), alt=(K("app-scroll"), "Instacart's own AI"), sfx=[('ep06-pop:0.22', '@{Eversight}')],
     el=plate("SAFEWAY · KROGER · COSTCO · VIA THE INSTACART APP", "@{stores like Safeway}", y=880, size=36, out="@{Instacart's own AI}") +
        plate("ENABLED BY INSTACART'S AI PRICING SOFTWARE: EVERSIGHT", "@{Instacart's own AI}", y=880, size=36)),
dict(start="And here's my favorite detail", tag=C1, sfx=[('ep06-pop:0.22', '@{What changed}')],
     el=doc("cr-original", [("creating the impression of a larger discount", "What changed")], source=CR)),
dict(start="So one shopper saw a small discount", tag=C1, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('ep06-stamp:0.22', '@{exact same sale}')],
     el='''<Center y={500}><SaleTwins at={0.1} sale="$4.99" olds={["$5.29", "$5.59"]} /></Center>''' + src("Groundwork Collaborative report · Washington, D.C. · Sept 10, 2025", "0.3")),
dict(start="Instacart said the tests were random", tag=C1, stock=K("phone-closeup"), sfx=[('ep06-pop:0.22', '@{negligible}')],
     el=plate("INSTACART: “RANDOMIZED” · NO PERSONAL DATA · “NEGLIGIBLE”", "@{random}", y=880, size=34)),
dict(start="The report did the math anyway", tag=C1, sfx=[('ep06-counter:0.3', '@{twelve hundred}')],
     el=doc("cr-1200", [("about $1,200 per year", "twelve hundred")], source=CR)),
dict(start="Instacart also said the shoppers", tag=C1, sfx=[('ep06-pop:0.22', "@{didn't know}")],
     el=doc("cr-aware", [("end shoppers are not aware", "didn't know")], source="INSTACART, QUOTED IN THE CONSUMER REPORTS RELEASE")),
dict(start="Which, if you think about it", tag=C1, stock=K("mouse-small"), clean=True, sfx=[('ep06-scratch:0.25', '@{Nobody tells}')],
     el='''<Meme at={@{Nobody tells}} text="shopper #3. unaware." y={900} size={70} />'''),
dict(start="Which means a price tag", tag=C1, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('buzz:0.25', "@{it's a test}")],
     el='''<Center y={420}><ESL at={0.1} price="$3.99" top="EGGS · 1 DOZEN" w={520} flipAt={@{it's a test}} flipTo="$4.79" /></Center>
<Center y={780}><Label6 at={@{How much will people}} size={46} color={C6.accent}>HOW MUCH WILL PEOPLE PAY?</Label6></Center>'''),
dict(start="That December", tag=C1, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("instacart-ends", [("price tests", "end all")], source="REUTERS VIA YAHOO NEWS · DEC 2025")),
dict(start="Problem solved?", tag=C1, stock=K("pages-flip"), sfx=[('ep06-whoosh:0.2', '@{a lot older}')],
     el=plate("THOSE TESTS WERE RANDOM. WHAT IF A PRICE ISN'T?", "@{what happens}", y=880, size=38)),

# ======================= PART 3 · ГЛАВА 2 · ЭТО НЕ НОВО =======================
dict(start="Twenty twelve", tag=C2, stock=K("press-newspaper"), hard=True, archive=True, sfx=[('t02-paper:0.25', '0.1')],
     el=plate("2012 · THE WALL STREET JOURNAL TESTS STAPLES.COM", "0.2", y=880, size=36)),
dict(start="A plain Swingline stapler", tag=C2, stock=K("stapler-rotating"), clean=True, sfx=[('ep06-pop:0.22', '0.1')],
     el=plate("42,000+ ZIP CODES · ONE STAPLER", "0.1", y=880)),
dict(start="Some people saw fourteen", tag=C2, sfx=[('ep06-pop:0.22', '@{fourteen twenty-nine}'), ('ep06-pop:0.22', '@{fifteen seventy-nine}')],
     el=doc("staples", [("$14.29", "fourteen twenty-nine"), ("$15.79", "fifteen seventy-nine")], source="CONSUMERIST, ON THE WSJ INVESTIGATION · DEC 2012")),
dict(start="The pattern tracked", tag=C2, stock=K("highway-villages"), sfx=[('ep06-pop:0.22', '@{within about twenty}')],
     el=plate("A RIVAL STORE WITHIN ~20 MILES → LOWER PRICE", "@{within about twenty}", y=880, size=38)),
dict(start="Live near competition", tag=C2, dim=0.0, sfx=[('ep06-pop:0.22', '0.1'), ('ep06-pop:0.22', '@{pay full price}')],
     el='''<Center y={500}><PricePair at={0.1} a={["NEAR A RIVAL", "$14.29"]} b={["ONLY GAME IN TOWN", "$15.79"]} bAt={@{pay full price}} note="SWINGLINE STAPLER · STAPLES.COM · WSJ TEST, 2012" /></Center>'''),
dict(start="And the Journal noticed", tag=C2, stock=K("suburb-aerial"), sfx=[('ep06-pop:0.22', '@{richer ZIP codes}'), ('ep06-pop:0.22', '@{earned less}')],
     el=plate("DISCOUNT AREAS ≈ $59,900 AVG INCOME", "@{richer ZIP codes}", y=820, size=36, color="C6.money") +
        plate("HIGHER-PRICE AREAS ≈ $48,700", "@{earned less}", y=920, size=36, color="C6.loss") + src("WSJ findings via The Verge, 2012", "@{richer ZIP codes}")),
dict(start="Staples said prices vary", tag=C2, stock=K("boardroom"), sfx=[('ep06-pop:0.22', '@{a variety of factors}')],
     el=plate("STAPLES: “A VARIETY OF FACTORS”", "@{a variety of factors}", y=880, size=40)),
dict(start="Same year, Orbitz", tag=C2, stock=K("hotel-lobby"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("2012 · ORBITZ", "0.15", y=880)),
dict(start="The travel site found", tag=C2, sfx=[('ep06-pop:0.22', '@{twenty to thirty}')],
     el=doc("orbitz", [("$20 to $30 more a night", "twenty to thirty")], source="MACRUMORS, ON THE WSJ REPORT · JUNE 2012")),
dict(start="So it started showing them", tag=C2, stock=K("macbook"), sfx=[('ep06-pop:0.22', '@{more prominently}')],
     el=plate("MAC USERS → PRICIER HOTELS SHOWN MORE PROMINENTLY", "@{more prominently}", y=880, size=36)),
dict(start="To be fair, Orbitz said", tag=C2, stock=K("confusion"), clean=True, sfx=[('ding:0.2', '@{It just assumed}')],
     el=plate("ORBITZ: NOT A HIGHER PRICE FOR THE SAME ROOM", "0.2", y=880, size=36, out="@{It just assumed}") +
        '''<Meme at={@{It just assumed}} text="my laptop, apparently: rich" y={900} size={66} />'''),
dict(start="Then, twenty nineteen", tag=C2, stock=K("parking-aerial"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("2019 · KARE 11 · MINNEAPOLIS", "0.15", y=880)),
dict(start="She bought an electric shaver", tag=C2, sfx=[('ep06-pop:0.22', '@{ninety-nine ninety-nine}'), ('buzz:0.25', '@{sixty-nine ninety-nine}')],
     el=doc("kare-shaver", [("It was $99.99 in the store", "ninety-nine ninety-nine")], source="KARE 11 INVESTIGATION · FEB 2019")),
dict(start="So reporters spent two months", tag=C2, stock=K("parking-busy"), sfx=[('ep06-pop:0.2', '@{two months}')],
     el=plate("TWO-MONTH TEST · TARGET APP", "@{two months}", y=880)),
dict(start="In one test, the app showed", tag=C2, dim=0.0, sfx=[('ep06-pop:0.2', '@{four ninety-nine}'), ('impact:0.25', '@{jumped to}')],
     el='''<Center y={480}><PhoneJump at={0.1} from="$499.99" to="$599.99" jumpAt={@{jumped to}} /></Center>'''),
dict(start="Out of ten items", tag=C2, sfx=[('ep06-kaching:0.25', '@{two hundred sixty-two}')],
     el=doc("kare-262", [("$262 cheaper", "two hundred sixty-two")], source="KARE 11 INVESTIGATION · FEB 2019")),
dict(start="So the cheapest way", tag=C2, stock=K("suburb-drive"), clean=True, sfx=[('ep06-scratch:0.25', '@{to not be}')],
     el='''<Meme at={@{to not be}} text="best price: anywhere but the store" y={900} size={64} />'''),
dict(start="Target said the app simply", tag=C2, stock=K("phone-hands"), sfx=[('ep06-pop:0.2', '@{label which price}')],
     el=plate("TARGET: IN-STORE PRICES IN STORE · APP NOW LABELS THEM", "@{label which price}", y=880, size=34) + src("KARE 11, Feb 2019", "@{label which price}")),
dict(start="But think about what the app", tag=C2, stock=K("eye-closeup"), clean=True, sfx=[('ep06-pop:0.2', '@{Where your phone}')],
     el=plate("IT KNEW WHERE YOUR PHONE WAS", "@{Where your phone}", y=880, size=42, color="C6.accent")),
dict(start="See the pattern?", tag=C2, stock=K("code-screen"), sfx=[('ep06-pop:0.2', '@{explanation}'), ('ep06-pop:0.2', '@{a fix}'), ('rise:0.25', "@{Who's building}")],
     el=plate("CAUGHT → EXPLANATION → FIX", "@{explanation}", y=860, size=40, out="@{Meanwhile}") +
        '''<Center y={500}><Words text="Who's building them?" at={@{Who's building}} size={100} hl={["building"]} /></Center>'''),

# ======================= PART 4 · ГЛАВА 3 · КТО СТРОИТ =======================
dict(start="In twenty twenty-four, the Federal", tag=C3, hard=True, sfx=[('ep06-stamp:0.22', '@{eight companies}')],
     el=doc("ftc-2024", [("eight companies", "eight companies")], source="FEDERAL TRADE COMMISSION · JULY 2024")),
dict(start="Not stores. The middlemen.", tag=C3, stock=K("boardroom"), dim=0.6, sfx=[('ep06-pop:0.2', '@{Mastercard}'), ('ep06-pop:0.2', '@{JPMorgan}'), ('ep06-pop:0.2', '@{Accenture}'), ('ep06-pop:0.2', '@{McKinsey}')],
     el='''<Center y={520}><ListReveal title="FTC ORDERS · 4 OF THE 8 COMPANIES" w={760} items={[{ text: "Mastercard", at: @{Mastercard} }, { text: "JPMorgan Chase", at: @{JPMorgan} }, { text: "Accenture", at: @{Accenture} }, { text: "McKinsey", at: @{McKinsey} }]} /></Center>'''),
dict(start="In January twenty twenty-five", tag=C3, stock=K("server-cables"), dim=0.62,
     sfx=[('ep06-pop:0.2', '@{your location}'), ('ep06-pop:0.2', '@{your demographics}'), ('ep06-pop:0.2', '@{your browsing}'), ('ep06-pop:0.2', '@{sitting in your cart}'), ('impact:0.25', '@{how your mouse}')],
     el='''<Center y={540}><ListReveal title="WHAT A PRICE CAN BE BUILT FROM · FTC, JAN 2025" w={980} items={[{ text: "Your location", at: @{your location} }, { text: "Your demographics", at: @{your demographics} }, { text: "Your browsing history", at: @{your browsing} }, { text: "What you leave in your cart", at: @{sitting in your cart} }, { text: "How your mouse moves", at: @{how your mouse}, hot: true }]} /></Center>'''),
dict(start="The FTC couldn't name", tag=C3, stock=K("dad-baby"), sfx=[('ep06-pop:0.2', '@{hypothetical}')],
     el=plate("FTC: HYPOTHETICAL EXAMPLES ONLY", "@{hypothetical}", y=880)),
dict(start="A new parent, for example", tag=C3, sfx=[('ep06-pop:0.2', '@{baby thermometers}')],
     el=doc("ftc-baby", [("higher priced baby thermometers", "baby thermometers")], source="FEDERAL TRADE COMMISSION · JAN 2025")),
dict(start="The theory being", tag=C3, stock=K("woman-bed-phone"), clean=True, sfx=[('ep06-scratch:0.25', "@{isn't comparison}")],
     el='''<Meme at={@{two in the morning}} text="2:00 AM. not comparison shopping." y={900} size={64} />'''),
dict(start="The agency said the study", tag=C3, sfx=[('ep06-counter:0.3', '@{two hundred fifty}')],
     el=doc("ftc-250", [("at least 250 clients", "two hundred fifty")], source="FEDERAL TRADE COMMISSION · JAN 2025")),
dict(start="If you've found something useful", tag=C3, stock=K("thumb-scroll"), sfx=[('click:0.35', '@{subscribe}')],
     el='''<Subscribe6 at={@{subscribe}} />''' + plate("SAME PRICE FOR EVERYONE: $0", "@{unlike your cart}", y=880, size=38)),
dict(start="Then the idea went airborne", tag=C3, stock=K("plane-taxi"), sfx=[('ep06-whoosh:0.25', '0.05')],
     el=plate("DELTA + FETCHERR · AI PRICING", "@{Fetcherr}", y=880)),
dict(start="with a goal of twenty percent", tag=C3, sfx=[('ep06-pop:0.2', '@{twenty percent}')],
     el=doc("delta-ajc", [("20% by the end of the year", "twenty percent")], source="ATLANTA JOURNAL-CONSTITUTION · JULY 2025")),
dict(start="Three senators wrote", tag=C3, stock=K("departure-board"), sfx=[('ep06-pop:0.2', '@{pain point}')],
     el=plate("3 SENATORS: FARES “UP TO EACH … PERSONAL ‘PAIN POINT’”", "@{pain point}", y=880, size=34)),
dict(start="Delta wrote back", tag=C3, sfx=[('ep06-stamp:0.22', '@{never takes}')],
     el=doc("delta-reply", [("personal data", "never takes")], source="DELTA NEWS HUB · AUG 2025")),
dict(start="And now the same question", tag=C3, stock=K("dairy-aisle"), sfx=[('ep06-pop:0.2', '@{all its U.S. stores}')],
     el=plate("WALMART: DIGITAL PRICE TAGS IN ALL U.S. STORES WITHIN A YEAR", "@{all its U.S. stores}", y=880, size=34)),
dict(start="A worker used to swap", tag=C3, stock=K("stock-clerk"), sfx=[],
     el=plate("PAPER TAGS · SWAPPED BY HAND", "@{paper tags}", y=880, size=38)),
dict(start="Now a price can change instantly", tag=C3, dim=0.0, sfx=[('buzz:0.25', '@{instantly}')],
     el='''<Center y={500}><Row gap={40}><ESL at={0.05} price="$3.49" top="MILK" w={330} flipAt={@{instantly}} flipTo="$3.79" /><ESL at={0.15} price="$4.29" top="EGGS" w={330} flipAt={@{instantly}} flipTo="$4.59" /><ESL at={0.25} price="$2.99" top="BREAD" w={330} flipAt={@{instantly}} flipTo="$3.19" /></Row></Center>''' +
        plate("ILLUSTRATION · ONE CENTRAL COMPUTER, EVERY TAG AT ONCE", "@{central computer}", y=900, size=30, color="C6.mint")),
dict(start="Walmart says the tags have no", tag=C3, sfx=[('ep06-pop:0.2', '@{prices the product}')],
     el=doc("walmart-letter", [("the product, not the person", "prices the product")], source="SUPERMARKET NEWS · SEPT 2026") +
        plate("WALMART: NO CAMERAS, NO MICROPHONES IN THE TAGS", "0.2", y=960, size=30)),
dict(start="That's the promise", tag=C3, dim=0.0, sfx=[('ep06-pop:0.2', '@{behind the number}')],
     el='''<Center y={430}><ESL at={0.1} price="$4.29" top="ANY STORE" bottom="why this price? —" w={520} /></Center>''' +
        plate("THE TAG NEVER SAYS WHY", "@{behind the number}", y=820, size=42, color="C6.accent")),
dict(start="So people stopped waiting", tag=C3, stock=K("chambers"), sfx=[('ep06-whoosh:0.2', '@{writing laws}')],
     el=plate("SO PEOPLE STARTED WRITING LAWS", "@{writing laws}", y=880)),

# ======================= PART 5 · ГЛАВА 4 · ОТПОР =======================
dict(start="New York went first", tag=C4, hard=True, sfx=[('t02-paper:0.3', '0.1')],
     el=doc("ny-ag", [("Algorithmic Pricing Disclosure Act", "Since November")], source="NEW YORK ATTORNEY GENERAL · NOV 2025")),
dict(start="In these exact words", tag=C4, sfx=[('ep06-stamp:0.22', '@{This price was set}')],
     el=doc("ny-law", [("THIS PRICE WAS SET BY AN ALGORITHM USING YOUR PERSONAL DATA", "This price was set")], source="NEW YORK GENERAL BUSINESS LAW § 349-A")),
dict(start="Imagine seeing that under your milk", tag=C4, stock=K("milk-carton"), dim=0.6, sfx=[('ding:0.25', '0.3')],
     el='''<Center y={480}><Disclosure at={0.3} price="$4.29" item="Milk, 1 gallon" w={1150} /></Center>''' + plate("ILLUSTRATION", "0.3", y=960, size=24, color="C6.mint")),
dict(start="And this summer, New York", tag=C4, sfx=[('ep06-pop:0.2', "@{governor's signature}")],
     el=doc("ny-ban", [("Kathy Hochul", "governor's signature")], source="PATCH · JUNE 2026")),
dict(start="Then Maryland", tag=C4, stock=K("cashier"), sfx=[('ep06-pop:0.2', '@{October first}')],
     el=plate("MARYLAND · SINCE OCT 1, 2026 · GROCERIES &amp; DELIVERY APPS", "@{October first}", y=880, size=34)),
dict(start="And this fall, Seattle", tag=C4, stock=K("seattle-needle"), sfx=[('ep06-stamp:0.22', '@{first city}')],
     el=plate("SEATTLE · FIRST U.S. CITY TO BAN IT", "@{first city}", y=880, size=42, color="C6.accent")),
dict(start="The list of things grocers", tag=C4, dim=0.0,
     sfx=[('ep06-pop:0.2', '@{Your race}'), ('ep06-pop:0.2', '@{Your gender}'), ('ep06-pop:0.2', '@{have a job}'), ('ep06-pop:0.2', '@{Your browsing}'), ('impact:0.25', '@{conversations with chatbots}')],
     el='''<Center y={540}><ListReveal strike title="SEATTLE: CAN'T BE USED TO SET YOUR GROCERY PRICE" w={1000} items={[{ text: "Your race", at: @{Your race} }, { text: "Your gender", at: @{Your gender} }, { text: "Whether you have a job", at: @{have a job} }, { text: "Your browsing & social media", at: @{Your browsing} }, { text: "Your conversations with chatbots", at: @{conversations with chatbots}, hot: true }]} /></Center>'''),
dict(start="Somebody, somewhere", tag=C4, sfx=[('ep06-pop:0.2', '@{told an AI}')],
     el=doc("seattle", [("conversations with chatbots", "told an AI")], source="COMMON DREAMS · SEPT 2026")),
dict(start="Not everyone cheered", tag=C4, stock=K("council-mic"), sfx=[('ep06-pop:0.2', '@{loyalty discounts}'), ('ep06-pop:0.2', '@{Safeway said}')],
     el=plate("GROCERS: THE BAN COULD COST COUPONS &amp; LOYALTY DEALS", "@{loyalty discounts}", y=820, size=32, out="@{Safeway said}") +
        plate("SAFEWAY: DOESN'T USE PERSONAL INFO TO CHARGE MORE", "@{Safeway said}", y=880, size=32)),
dict(start="Seattle's rules don't start", tag=C4, stock=K("pages-flip"), sfx=[('ep06-pop:0.2', '@{twenty twenty-seven}'), ('ep06-pop:0.2', '@{this August}')],
     el=plate("SEATTLE: SEPT 2027", "@{twenty twenty-seven}", y=820, size=36, out="@{this August}") + plate("FTC: PROPOSED GUIDANCE, AUG 2026", "@{this August}", y=880, size=36)),
dict(start="Until any of that reaches", tag=C4, stock=K("woman-pricetag"), sfx=[('rise:0.25', '@{the only defense}')],
     el='''<Center y={860}><Words text="The only defense is you." at={@{the only defense}} size={84} hl={["you."]} /></Center>'''),

# ======================= PART 6 · ГЛАВА 5 · КАК НЕ ПОПАСТЬСЯ =======================
dict(start="So how do you make", tag=C5, stock=K("rubik"), hard=True, sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("MAKE THE ALGORITHM GUESS WRONG", "0.2", y=880)),
dict(start="Check the price twice", tag=C5, stock=K("man-annoyed"), dim=0.4, sfx=[('click:0.3', '@{logged in}'), ('click:0.3', '@{logged out}')],
     el=plate("1 · APP, LOGGED IN", "@{logged in}", y=800, size=36, color="C6.accent") + plate("2 · PRIVATE WINDOW, LOGGED OUT", "@{logged out}", y=900, size=36, color="C6.accent")),
dict(start="Turn off location", tag=C5, stock=K("phone-hands"), sfx=[('click:0.35', '0.3')],
     el=plate("STORE APPS · LOCATION → OFF", "0.2", y=880, size=40)),
dict(start="Don't trust the crossed-out", tag=C5, dim=0.0, sfx=[('ep06-pop:0.2', '0.1'), ('ep06-stamp:0.22', '@{the part that moved}')],
     el='''<Center y={500}><SaleTwins at={0.1} sale="$4.99" olds={["$5.29", "$5.59"]} item="TRUST THE PRICE YOU PAY, NOT THE ONE CROSSED OUT" /></Center>'''),
dict(start="And if you're in New York", tag=C5, stock=K("nyc-street"), dim=0.55, sfx=[('ding:0.25', '@{one sentence}')],
     el='''<Center y={480}><Disclosure at={@{one sentence}} price="$12.40" item="Your cart" w={1100} /></Center>'''),
dict(start="Back to those eggs", tag=C5, stock=K("eggs-closeup"), dim=0.72,
     sfx=[('ep06-pop:0.2', '0.2'), ('ep06-pop:0.2', '0.4'), ('ep06-pop:0.2', '0.6'), ('ep06-pop:0.2', '0.8'), ('ep06-pop:0.2', '1.0')],
     el=f'''<Center y={{520}}><TagRow prices={{{EGGS}}} times={{[0.2, 0.4, 0.6, 0.8, 1.0]}} title="1 dozen eggs" w={{250}} /></Center>'''),
dict(start="The eggs didn't change", tag=C5, stock=K("eggs-shopper"), clean=True, sfx=[('impact:0.2', '@{the shopper}')],
     el=plate("THE ONLY THING THAT CHANGED: THE SHOPPER", "@{the shopper}", y=880, size=38, color="C6.accent")),
dict(start="So next time you see a price", tag=C5, dim=0.0, sfx=[('ep06-pop:0.2', '@{price of the eggs}'), ('impact:0.25', '@{price of me}')],
     el='''<Center y={360}><ESL at={0.1} price="$?.??" top="EGGS · 1 DOZEN" w={420} /></Center>
<Center y={720}><Words text="The price of the eggs, or the price of me?" at={@{price of the eggs}} size={74} hl={["me?"]} /></Center>'''),
dict(start="Have you ever caught", stock=K("couple-surprised"), dim=0.45, end_pad=8.0, sfx=[('ep06-pop:0.2', '@{in the comments}')],
     el='''<Center y={300}><Words text="Ever caught a price changing on you?" at={@{Have you ever}} size={74} hl={["changing"]} /></Center>
<Center y={440}><Label6 at={@{in the comments}} size={38} color={C6.accent}>TELL US WHAT IT WAS · COMMENTS</Label6></Center>'''),
]

EP["music_at"] = [
    ("One dozen eggs", "audio/t05/music-c0-open.mp3", 0.07),
    ("Those numbers come from", "audio/t05/music-c1-test.mp3", 0.065),
    ("Twenty twelve", "audio/t05/music-c2-history.mp3", 0.07),
    ("In twenty twenty-four, the Federal", "audio/t05/music-c3-middlemen.mp3", 0.07),
    ("New York went first", "audio/t05/music-c4-laws.mp3", 0.06),
    ("So how do you make", "audio/t05/music-c5-how.mp3", 0.08),
]

# графика без видео — мягкий свет фона (Drift), чтобы кадр не стоял
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", ""):
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"
