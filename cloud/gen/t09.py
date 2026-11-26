# T09 «Why the Outlet Sells a $499 Bag for $169» — девятый ролик They Saw You Coming (план сцен 26.11.2026).
# Окраска: детектив «кто написал на бирке $499» + сухая сатира на язык цен. Ставки растут: одна сумка → вещь →
#   цифра → вся страна (иски) → развязка JCPenney → мы сами.
# Визуальная идея (своя для выпуска): БУМАЖНАЯ БИРКА (src/brand/t09.tsx: HangTag) — в начале «COMPARABLE VALUE $499 · $169»,
#   палец закрывает верхнюю цифру (первый практический ход), в главе 4 MSRP → VALUE, в главе 6 возвращается («reference price»),
#   в финале $499 тает и бирку срезают. Отличие от T06 (чек), T07 (след денег), T08 (табло меню).
# Живые кадры (решение Павла 25.11): 4 вставки ТВ без их звука, с нашим голосом — CBC (ромбики J.Crew), 9NEWS (этикетка Talbots),
#   News 5 Cleveland («fair and square», 2012), Bloomberg (Johnson, Apple Store) + 2,7 с рекламы JCPenney 2013 «come back to see us».
# Начало: холодный вход — бирка и обе цены к 0:05, иск к 0:10, отложенное обещание (CEO) к ~1:20, первая польза («закрой пальцем») к ~1:00.
# Под ТВ и зрителя 55+: обе суммы — вслух и крупно, одна цифра на кадр, цифра держится ≥3 с.
# Нарастание глав: бирка → «остатки» — миф (J.Crew 100 vs 330, 85%, Checkbook) → чем вещь хуже (поло, пиджак, метки) →
#   кто пишет цифру (MSRP → Value, Орегон, $95.20) → это везде (Kohl's, Лос-Анджелес) → поворот: JCPenney → что делать.
# Гэги (сухие, единицы): «comparable value: $0» (подписка), «A new word for the same number», табличка SALE на гвоздях,
#   «She just wasn't having any fun» (мем-кадр), «People don't want a fair price».
# Формулировки фактчекера не менять: «according to the lawsuit», «as the lawsuit describes them», «analysts estimated upwards of 85%»,
#   цитату Fobes на экране в кавычках не ставить.
import json, os
from evid import ev

EP = dict(
    comp="T09Outlet",
    words="src/videos/t09-outlet-words.json",
    text="cloud/voice/t09-text",
    parts=7,
    broll="cloud/broll/t09.json",
    audio="audio/t09-voiceover.mp3",
    voice_vol=0.9,
    brand=["t03", "t07", "t08", "t09"],
    music=[],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_clips = json.load(open(f"{_R}/cloud/broll/t09.json"))["clips"]
_names = [c["name"].split("-", 1)[1] for c in _clips]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t09-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

C2, C3, C4, C5, C6x, C7 = (2, "Made For The Outlet"), (3, "Made How?"), (4, "The Big Number"), (5, "It's Everywhere"), (6, "Somebody Tried"), (7, "Your Move")
_EVD = f"{_R}/public/evidence/t09"


def doc(name, marks=(), source=None, **kw):
    kw.setdefault("zoom", 0.9)  # урок T02: не загонять камеру в голый текст
    top = name.rsplit("-", 1)[0] + "-top" if name.count("-") >= 2 else name + "-top"
    if not name.endswith("-top") and "inset" not in kw and os.path.exists(f"{_EVD}/{top}.json"): kw["inset"] = top
    if kw.get("inset") is None: kw.pop("inset", None)
    return ev("t09", name, marks=list(marks), source=source, **kw)


def has(name, phrase=None):
    p = f"{_EVD}/{name}.json"
    if not os.path.exists(p): return False
    return phrase is None or phrase in json.load(open(p))["finds"]


def pick(prefixes, phrase):
    """первая скачанная улика (страница PDF), где найдена фраза"""
    for f in sorted(os.listdir(_EVD)):
        if f.endswith(".json") and any(f.startswith(x) for x in prefixes) and phrase in json.load(open(f"{_EVD}/{f}"))["finds"]:
            return f[:-5]
    return None


def plate(text, at, y=880, x=960, size=40, color="C6.ink", out=None):
    o = f" out={{{out}}}" if out else ""
    return f'<Center x={{{x}}} y={{{y}}}><In at={{{at}}}{o} from="fade"><Plate6 at={{{at}}}><Label6 at={{{at}}} size={{{size}}} color={{{color}}}>{text}</Label6></Plate6></In></Center>'


def src(text, at="0.3"):
    return f"<Source6 at={{{at}}}>{text}</Source6>"


def quote(text, who, at="0.3", size=72, hl=None, y=430):
    h = json.dumps(hl or [])
    return f'<Center y={{{y}}}><Words text={json.dumps(text, ensure_ascii=False)} at={{{at}}} size={{{size}}} maxW={{1500}} hl={{{h}}} /></Center>' + \
        f'<Center y={{{y + 260}}}><Label6 at={{{at}}} size={{30}} color={{C6.mint}}>{who}</Label6></Center>'


def tag(top_label, top_value, price, at="0.05", y=560, x=960, brand="KATE SPADE OUTLET", **kw):
    a = " ".join(f"{k}={{{v}}}" for k, v in kw.items())
    return f'<Center x={{{x}}} y={{{y}}}><HangTag at={{{at}}} brand="{brand}" top={{{{ label: "{top_label}", value: "{top_value}" }}}} price={{{{ value: "{price}" }}}} {a} /></Center>'


RECON = "RECONSTRUCTION · AS DESCRIBED IN THE LAWSUIT"
CURRY = "CURRY v. TAPESTRY · D. OR. · 2026"
ILL = "ILLUSTRATIVE FOOTAGE"

S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД · БИРКА =======================
dict(start="Four hundred and ninety-nine dollars", dim=0.0, sfx=[('t02-paper:0.3', '0.05'), ('ep06-pop:0.3', '@{Comparable value}'), ('ep06-kaching:0.3', '@{one sixty-nine}')],
     el=tag("COMPARABLE VALUE", "$499", "$169", at="0.05", y=590, scale=0.95, hlTopAt="@{Comparable value}") +
        f'<Center x={{1560}} y={{960}}><Label6 at={{0.3}} size={{24}} color={{C6.mint}}>{RECON}</Label6></Center>'),
dict(start="You just saved three hundred and thirty dollars", stock=K("woman-bag-walk"), sfx=[('ep06-counter:0.3', '@{three hundred and thirty}')],
     el=plate("YOU SAVED $330!", "@{three hundred and thirty}", y=880, size=50, color="C6.money")),
dict(start="Except, according to a lawsuit filed this year", sfx=[('t02-paper:0.3', '0.05')],
     el=doc("curry-tina-p1", [("CLASS ACTION ALLEGATION", "a lawsuit filed this year")], source=CURRY + " · CLASS ACTION COMPLAINT", zoom=None) +
        plate("“RARELY, IF EVER” A REAL PRICE · PER THE LAWSUIT", "@{rarely, if ever}", y=960, size=34, color="C6.accent")),
dict(start="The lawsuit lists prices from that store", dim=0.0, sfx=[('t02-paper:0.3', '0.05'), ('ep06-fall:0.25', '@{Not one of them}')],
     el='''<Center y={500}><PriceCeiling at={0.05} ceil="$499" ceilLabel="COMPARABLE VALUE" low="never reached it" lowLabel="PRICES LISTED IN THE LAWSUIT" drawAt={0.4} note="ILLUSTRATION OF THE LAWSUIT'S CLAIM · ¶56" noteAt={@{Not one of them}} /></Center>'''),
dict(start="And the lawsuit says that on the same day", stock=K("parking-aerial2"), alt=(K("parking-aerial"), "Michael Kors had"), sfx=[('ep06-pop:0.25', '@{ninety-five dollars}')],
     el=plate("SAME DAY · SAME OUTLET CENTER · OREGON", "0.3", y=880, size=36, out="@{Michael Kors had}") +
        plate("SIMILAR LEATHER TOTE NEXT DOOR: $95.20 · PER THE LAWSUIT", "@{ninety-five dollars}", y=880, size=36, color="C6.accent") + src(ILL, "0.4")),
dict(start="So who wrote four ninety-nine", dim=0.0, sfx=[('rise:0.25', '0.1'), ('ep06-pop:0.25', '@{comparable to}')],
     el=tag("COMPARABLE VALUE", "$499", "$169", at="0.05", y=560, scale=0.9, tilt=3, hlTopAt="@{wrote four ninety-nine}") +
        f'<Center x={{1540}} y={{540}}><In at={{@{{comparable to}}}} from="fade"><Num6 size={{200}}>?</Num6></In></Center>'),
dict(start="If you've ever walked out of an outlet mall", stock=K("friends-bags"), alt=(K("women-bags"), "that feeling is the product"), sfx=[('ep06-stamp:0.25', '@{that feeling is the product}')],
     el=plate("THAT FEELING IS THE PRODUCT", "@{that feeling is the product}", y=880, size=50, color="C6.accent")),
dict(start="Here's the first thing you can do", dim=0.0, sfx=[('ding:0.3', '0.1'), ('whoosh:0.25', '@{Put your thumb}')],
     el=tag("COMPARABLE VALUE", "$499", "$169", at="0.05", y=560, scale=0.9, coverAt="@{Put your thumb}", hlPriceAt="@{Look only at the small one}") +
        plate("TRICK #1 · COVER THE BIG NUMBER", "0.2", y=980, size=34, color="C6.accent")),
dict(start="Would you pay one sixty-nine", stock=K("bags-sale-tag"), sfx=[('ep06-stamp:0.25', "@{That's the real price}")],
     el=plate("$169 · THAT'S THE REAL PRICE", "@{That's the real price}", y=880, size=50, color="C6.money", out="@{The other one}") +
        plate("THE OTHER NUMBER IS THERE TO WORK ON YOU", "@{The other one}", y=880, size=38, color="C6.accent")),
dict(start="And before this video is over", stock=K("suit-walking"), dim=0.35, sfx=[('rise:0.25', '@{a CEO}'), ('impact:0.25', '@{strangest part}')],
     el=plate("A CEO WHO TRIED TO GET RID OF NUMBERS LIKE THAT", "@{a CEO}", y=880, size=36, out="@{What happened to him}") +
        plate("2012", "@{What happened to him}", y=880, size=60, color="C6.accent")),

# ======================= PART 2 · ГЛАВА 2 · СШИТО ДЛЯ АУТЛЕТА =======================
dict(start="Let's start with the bag itself", tag=C2, hard=True, stock=K("warehouse-racks"), alt=(K("box-shelf"), "The leftovers"), sfx=[('ep06-whoosh:0.2', '0.05'), ('ep06-pop:0.2', '@{The leftovers}')],
     el=plate("THE STORY WE TELL OURSELVES: LAST SEASON'S LEFTOVERS", "0.4", y=880, size=34, out="@{The leftovers}") +
        plate("LEFTOVERS · THE COLOR NOBODY BOUGHT", "@{The leftovers}", y=880, size=38)),
dict(start="And that story used to be closer", tag=C2, sfx=[('t02-paper:0.3', '@{In twenty fourteen}')],
     el=doc("wh-letter-top", [], source="4 MEMBERS OF CONGRESS → FTC · LETTER, 2014")),
dict(start="Historically, they wrote", tag=C2, sfx=[('ep06-pop:0.25', '@{excess inventory}')],
     el=doc("wh-letter", [("excess inventory", "excess inventory")], source="4 MEMBERS OF CONGRESS → FTC · LETTER, 2014")),
dict(start="But do the math on one brand", tag=C2, dim=0.0, sfx=[('ep06-counter:0.3', '@{a hundred regular}'), ('impact:0.3', '@{three hundred and thirty}')],
     el='''<Center y={480}><TwoBars at={0.1} a={{ label: "J.CREW STORES", value: "~100", v: 100 }} b={{ label: "J.CREW FACTORY STORES", value: "330", v: 330, color: C6.accent, at: @{three hundred and thirty} }} h={480} /></Center>''' + src("Consumers' Checkbook · 2026", "0.4")),
dict(start="That's more than three outlets", tag=C2, dim=0.0, sfx=[('ep06-stamp:0.25', "@{You can't fill}")],
     el='''<Center y={440}><Words text="3 outlets ← leftovers of 1 store?" at={0.2} size={92} maxW={1500} hl={["3", "1"]} /></Center>''' +
        plate("THE MATH DOESN'T WORK", "@{You can't fill}", y=880, size=44, color="C6.accent")),
dict(start="So where does it all come from", tag=C2, sfx=[('t02-paper:0.3', '0.05'), ('ep06-counter:0.3', '@{eighty-five percent}')],
     el=doc("wh-letter", [("85%", "eighty-five percent")], source="LETTER TO THE FTC · 2014 · ANALYSTS' ESTIMATE") +
        plate("UPWARDS OF 85% MADE FOR OUTLETS · ANALYSTS' ESTIMATE, 2014", "@{made only for outlets}", y=960, size=32, color="C6.accent")),
dict(start="That was almost thirteen years ago", tag=C2, sfx=[('ep06-pop:0.22', '@{Four researchers}'), ('ep06-pop:0.22', '@{Three months}'), ('ep06-pop:0.22', '@{Forty brands}')],
     stock=K("docs-table"),
     el=plate("CONSUMERS' CHECKBOOK · NONPROFIT · JUNE 2026", "@{Consumers' Checkbook}", y=200, size=36, color="C6.accent") +
        plate("4 RESEARCHERS", "@{Four researchers}", y=960, x=560, size=36, color="C6.accent") + plate("3 MONTHS", "@{Three months}", y=960, x=960, size=36, color="C6.accent") +
        plate("40 BRANDS", "@{Forty brands}", y=960, x=1360, size=36, color="C6.accent")),
dict(start="They found that more than half", tag=C2, stock=K("mall-escalators"), alt=(K("mannequins"), "J.Crew Factory"), sfx=[('ep06-pop:0.2', '@{J.Crew Factory}'), ('ep06-pop:0.2', '@{Banana Republic Factory}'), ('ep06-pop:0.2', '@{Gap Factory}'), ('ep06-pop:0.2', '@{Ann Taylor Factory}'), ('ding:0.25', '@{Kate Spade sells a mix}')],
     el=plate("MORE THAN HALF · MADE FOR THE OUTLET", "0.3", y=200, size=40, color="C6.accent") +
        plate("J.CREW FACTORY", "@{J.Crew Factory}", y=880, size=40, out="@{Banana Republic Factory}") + plate("BANANA REPUBLIC FACTORY", "@{Banana Republic Factory}", y=880, size=40, out="@{Gap Factory}") +
        plate("GAP FACTORY", "@{Gap Factory}", y=880, size=40, out="@{Ann Taylor Factory}") + plate("ANN TAYLOR FACTORY", "@{Ann Taylor Factory}", y=880, size=40, out="@{Kate Spade sells a mix}") +
        plate("KATE SPADE OUTLET · A MIX", "@{Kate Spade sells a mix}", y=880, size=40, color="C6.accent") + src("Consumers' Checkbook · 2026", "0.4")),
dict(start="Checkbook emailed all forty companies", tag=C2, dim=0.0, sfx=[('ep06-pop:0.25', '0.1'), ('ding:0.3', '@{One answered}')],
     el='''<Center y={470}><Envelopes at={0.1} oneAt={@{One answered}} /></Center>''' + plate("40 ASKED · 1 REPLIED", "@{One answered}", y=900, size=44, color="C6.accent")),
dict(start="Some don't even hide it", tag=C2, stock=K("online-store"), alt=(K("phone-shop"), "Ann Taylor's site"), sfx=[('ep06-pop:0.22', "@{don't sell overstock}")],
     el=plate("GAP'S OWN SITE: FACTORY STORES DON'T SELL OVERSTOCK", "@{don't sell overstock}", y=880, size=34, out="@{Ann Taylor's site}") +
        plate("ANN TAYLOR'S SITE: LOFT OUTLET · CREATED FOR OUTLETS", "@{Ann Taylor's site}", y=880, size=34, out="@{They just don't}") +
        plate("…NOT ON THE TAG", "@{They just don't}", y=880, size=50, color="C6.accent")),
dict(start="So if the bag was made for the outlet", tag=C2, stock=K("magnify-dollar"), sfx=[('rise:0.25', '@{Made how}')],
     el=plate("MADE HOW?", "@{Made how}", y=880, size=60, color="C6.accent")),

# ======================= PART 3 · ГЛАВА 3 · ЧЕМ ХУЖЕ =======================
dict(start="In another lawsuit filed this summer", tag=C3, hard=True, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("aal-tommy-top", [], source="HASHIMI v. PVH · S.D. CAL. · 2026 (VIA ALL ABOUT LAWYER)")),
dict(start="Their lawyers hired a textile expert", tag=C3, stock=K("textile-above"), alt=(K("sewing-close"), "with clothes from a Tommy"), sfx=[],
     el=plate("A TEXTILE EXPERT · MACY'S vs. TOMMY HILFIGER OUTLET", "0.3", y=880, size=36)),
dict(start="Look at the polo shirts", tag=C3, stock=K("polo-man"), sfx=[],
     el=plate("THE POLO SHIRTS · AS THE LAWSUIT DESCRIBES THEM", "0.2", y=880, size=36)),
dict(start="The Macy's polo was ninety-six percent cotton", tag=C3, dim=0.0, sfx=[('ep06-pop:0.25', '0.1'), ('ep06-stamp:0.3', '@{forty percent polyester}')],
     el='''<Center y={470}><FabricLabels at={0.1} a={{ title: "MACY'S POLO", lines: ["96% COTTON · 4% ELASTANE", "3 BUTTONS"] }} b={{ title: "OUTLET POLO", lines: ["60% COTTON · 40% POLYESTER", "2 BUTTONS", "DIFFERENT COUNTRY"], at: @{The outlet polo} }} hlAt={@{forty percent polyester}} /></Center>''' + src("Hashimi v. PVH · complaint, 2026", "0.4")),
dict(start="Same name on the chest", tag=C3, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("aal-tommy", [("polyester", "a different shirt")], source="HASHIMI v. PVH · VIA ALL ABOUT LAWYER")),
dict(start="Checkbook found the same pattern", tag=C3, stock=K("suit-buttoning"), alt=(K("blazer-lowlight"), "At the regular store"), sfx=[('ep06-counter:0.25', '@{a hundred and forty dollars}'), ('ep06-counter:0.25', '@{three hundred and fifty}')],
     el=plate("FACTORY JACKET · $140 · NO LINING", "@{a hundred and forty dollars}", y=880, size=40, out="@{At the regular store}") +
        plate("REGULAR STORE · $350 · PARTLY LINED", "@{three hundred and fifty}", y=880, size=40, color="C6.accent") + src("Consumers' Checkbook · 2026", "0.4")),
dict(start="Cole Haan outlet dress shoes", tag=C3, stock=K("shoe-bend"), alt=(K("coat-mannequins"), "A Gap Factory barn jacket"), sfx=[('ep06-pop:0.22', '@{rubber soles}'), ('ep06-counter:0.25', '@{fifty dollars}'), ('ep06-counter:0.25', '@{a hundred and forty-eight}')],
     el=plate("OUTLET: RUBBER SOLES · STORE: LEATHER", "@{rubber soles}", y=880, size=38, out="@{A Gap Factory barn jacket}") +
        plate("BARN JACKET · FACTORY $50", "@{fifty dollars}", y=880, size=40, out="@{a hundred and forty-eight}") +
        plate("REGULAR GAP · $148 · MORE BUTTONS, MORE TAILORING", "@{a hundred and forty-eight}", y=880, size=36, color="C6.accent")),
dict(start="So the outlet isn't selling you", tag=C3, stock=K("leather-artisan"), alt=(K("leather-sewing"), "And the tag points"), sfx=[('ep06-stamp:0.25', "@{the expensive thing's name}")],
     el=plate("A CHEAPER THING · WITH THE EXPENSIVE THING'S NAME", "@{the expensive thing's name}", y=880, size=36, color="C6.accent", out="@{And the tag points}") +
        plate("…AND THE TAG POINTS AT THE EXPENSIVE ONE", "@{And the tag points}", y=880, size=36)),
dict(start="Here's how to catch it before you pay", tag=C3, stock=K("live-jcrew-diamonds"), clean=True, sfx=[('ding:0.3', '0.1'), ('ep06-pop:0.25', '@{two little diamonds}')],
     el=plate("TRICK #2 · READ THE LABEL INSIDE", "0.1", y=120, size=34, color="C6.accent", out="@{Banana Republic Factory has three}") +
        plate("BANANA REPUBLIC FACTORY · 3 DIAMONDS", "@{Banana Republic Factory has three}", y=120, size=34, color="C6.accent") + src("Footage: CBC Marketplace", "0.3")),
dict(start="A Talbots outlet label", tag=C3, stock=K("live-talbots"), clean=True, sfx=[('ep06-pop:0.22', '@{three dots}')],
     el=plate("TALBOTS OUTLET · WHITE LABEL, 3 DOTS", "0.05", y=120, size=34, color="C6.accent") + src("Footage: 9NEWS Denver · 2026", "0.3")),
dict(start="At Brooks Brothers", tag=C3, dim=0.0, sfx=[('ep06-pop:0.25', '@{just says eighteen eighteen}'), ('ep06-pop:0.25', '@{Established eighteen eighteen}')],
     el='''<Center y={470}><TagTrio tags={[{ label: "OUTLET LABEL", value: "1818", at: @{just says eighteen eighteen}, color: C6.loss }, { label: "REGULAR STORE", value: "EST. 1818", at: @{Established eighteen eighteen} }]} /></Center>''' + src("Consumers' Checkbook · 2026", "0.4")),
dict(start="Then read the fabric line", tag=C3, stock=K("fabric-cut"), alt=(K("folding-sweater"), "you now know"), sfx=[('ep06-stamp:0.25', '@{what the discount was for}')],
     el=plate("MOSTLY POLYESTER AT THE OUTLET? THAT'S WHAT THE DISCOUNT WAS FOR", "@{you now know}", y=880, size=32, color="C6.accent")),
dict(start="To be fair, not every outlet deal is fake", tag=C3, stock=K("box-shelf"), alt=(K("blazer-lowlight"), "A Burberry outlet shirt"), sfx=[('ep06-pop:0.22', '@{seven hundred dollar}')],
     el=plate("REAL LEFTOVERS EXIST", "0.2", y=880, size=40, out="@{A Burberry outlet shirt}") +
        plate("BURBERRY OUTLET SHIRT · $700 → $250", "@{seven hundred dollar}", y=880, size=40, color="C6.money") + src("Consumers' Checkbook · 2026", "0.4")),
dict(start="Scratched dressers at an RH outlet", tag=C3, stock=K("warehouse-inside"), sfx=[('ep06-pop:0.22', '@{eighty percent off}')],
     el=plate("SCRATCHED DRESSERS · RH OUTLET · −80%", "0.1", y=880, size=40, color="C6.money") + src(ILL, "0.4")),
dict(start="Those are the real thing, just late", tag=C3, stock=K("closed-sign"), sfx=[],
     el=plate("THE REAL THING · JUST LATE", "0.2", y=880, size=44)),
dict(start="At Nike clearance stores", tag=C3, stock=K("printed-sale-tag"), alt=(K("bags-sale-tag"), "A real markdown"), sfx=[('ep06-pop:0.22', '@{stickers slapped on}')],
     el=plate("NIKE CLEARANCE · HAND STICKERS WITH A DATE", "@{stickers slapped on}", y=880, size=36, out="@{A real markdown}") +
        plate("REAL MARKDOWN = A STICKER ON AN OLD PRICE", "@{A real markdown}", y=880, size=38, color="C6.accent")),
dict(start="Every week we take one price tag", tag=C3, dim=0.0, sfx=[('ding:0.25', '@{subscribe}'), ('ep06-pop:0.25', '@{no comparable value}')],
     el='''<Subscribe6 at={@{subscribe}} />''' + tag("COMPARABLE VALUE", "$0", "FREE", at="0.1", y=560, x=960, scale=0.8, brand="THIS CHANNEL", hlTopAt="@{no comparable value}")),

# ======================= PART 4 · ГЛАВА 4 · КТО ПИШЕТ ЦИФРУ =======================
dict(start="Now the big number", tag=C4, hard=True, stock=K("pen-paper"), sfx=[('scribble:0.3', '0.3')],
     el=plate("WHO WRITES IT?", "@{Who actually writes it}", y=880, size=56, color="C6.accent")),
dict(start="In twenty fourteen, a shopper named", tag=C4, stock=K("signing-docs"), sfx=[('t02-paper:0.3', '0.1')],
     el=plate("2014 · GATTINELLA v. MICHAEL KORS", "0.2", y=880, size=40, color="C6.accent")),
dict(start="The tag said MSRP", tag=C4, dim=0.0, sfx=[('ep06-counter:0.3', '@{a hundred and twenty dollars}'), ('ep06-kaching:0.3', '@{seventy-nine ninety-nine}')],
     el=tag("MSRP", "$120", "$79.99", at="0.05", y=560, brand="MICHAEL KORS OUTLET", scale=0.9, hlTopAt="@{a hundred and twenty dollars}") +
        f'<Center x={{1560}} y={{960}}><Label6 at={{0.3}} size={{24}} color={{C6.mint}}>{RECON}</Label6></Center>'),
dict(start="MSRP means manufacturer's suggested", tag=C4, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("tfl-mk", [("MSRP", "manufacturer's suggested")], source="THE FASHION LAW · GATTINELLA v. MICHAEL KORS") +
        plate("MADE ONLY FOR THE OUTLET · PER HER LAWSUIT", "@{made only for the outlet}", y=960, size=34, color="C6.accent")),
dict(start="So the price was suggested", tag=C4, stock=K("seniors-boutique"), sfx=[('ep06-stamp:0.25', '@{never sold}')],
     el=plate("SUGGESTED FOR A STORE WHERE THEY WERE NEVER SOLD", "@{never sold}", y=880, size=36, color="C6.accent")),
dict(start="Michael Kors denied doing anything wrong", tag=C4, sfx=[('t02-paper:0.3', '0.05'), ('ep06-kaching:0.3', '@{four point eight eight}')],
     el="MK_SETTLE"),
dict(start="Here's how. It would stop using", tag=C4, dim=0.0, sfx=[('scribble:0.3', '@{replace them}'), ('ep06-stamp:0.3', '@{Value}')],
     el=tag("MSRP", "$120", "$79.99", at="0.05", y=560, brand="MICHAEL KORS OUTLET", scale=0.9, strikeAt="@{stop using the letters}", swap='{ word: "VALUE", at: @{Value} }') +
        plate("…OR DROP THE BIG NUMBER ON OUTLET-ONLY ITEMS", "@{Or drop the big number}", y=990, size=30)),
dict(start="A new word for the same number", tag=C4, stock=K("disappointed-man"), clean=True, sfx=[('ep06-scratch:0.25', '0.05')],
     el='''<Meme at={0.05} text="a new word. same number." y={900} size={80} />'''),
dict(start="Eleven years later, look at the tag", tag=C4, dim=0.0, sfx=[('ep06-pop:0.3', '@{Comparable value}')],
     el=tag("COMPARABLE VALUE", "$499", "$169", at="0.05", y=560, scale=0.9, tilt=-2, hlTopAt="@{Comparable value}") +
        plate("2015: “VALUE” → 2026: “COMPARABLE VALUE”", "@{Comparable value}", y=990, size=30, color="C6.accent")),
dict(start="Comparable to what? In Oregon", tag=C4, sfx=[('t02-paper:0.3', '0.05')],
     el="CURRY_RULE"),
dict(start="The lawsuit says Kate Spade sets that number", tag=C4, stock=K("mall-skylight"), alt=(K("parking-aerial"), "And it points to a competitor"), sfx=[('ep06-pop:0.22', '@{across the whole country}'), ('ep06-counter:0.3', '@{ninety-five twenty}')],
     el=plate("ONE NUMBER · THE WHOLE COUNTRY · PER THE LAWSUIT", "@{across the whole country}", y=880, size=36, out="@{And it points to a competitor}") +
        f'<Center y={{470}}><In at={{@{{And it points to a competitor}}}} from="fade"><PriceDuel at={{@{{And it points to a competitor}}}} a={{{{ label: "Kate Spade Outlet · comparable value", value: "$499", color: C6.accent }}}} b={{{{ label: "Michael Kors Outlet · same center", value: "$95.20", color: C6.money, at: @{{ninety-five twenty}} }}}} /></In></Center>'),
dict(start="Same story with a wallet from that store", tag=C4, dim=0.0, sfx=[('ep06-counter:0.3', '@{two thirty-nine}'), ('ep06-kaching:0.3', '@{fifty-nine twenty-five}')],
     el=tag("COMPARABLE VALUE", "$239", "$59.25", at="0.05", y=560, scale=0.85, brand="KATE SPADE OUTLET · WALLET", hlTopAt="@{two thirty-nine}", extra='{ label: "EXTRA 25% OFF", value: "", at: @{After an extra} }') +
        f'<Center x={{1560}} y={{1000}}><Label6 at={{0.3}} size={{24}} color={{C6.mint}}>{RECON} · ¶45–47</Label6></Center>'),
dict(start="And the lawsuit says a similar leather wallet", tag=C4, dim=0.0, sfx=[('ep06-pop:0.3', '@{forty-seven twenty}')],
     el='''<Center y={500}><PriceDuel at={0.05} a={{ label: "Kate Spade Outlet wallet · after discounts", value: "$59.25", color: C6.accent }} b={{ label: "Similar wallet · Michael Kors, same center", value: "$47.20", color: C6.money, at: @{forty-seven twenty} }} /></Center>''' + src("Per the lawsuit · " + CURRY, "0.4")),
dict(start="It gets stranger", tag=C4, stock=K("wow-woman"), clean=True, sfx=[('ep06-scratch:0.25', '0.05')],
     el='''<Meme at={0.05} text="it gets stranger." y={900} size={80} />'''),
dict(start="Checkbook found a Banana Republic Factory shirtdress", tag=C4, dim=0.0, sfx=[('ep06-pop:0.25', '@{compare at price}'), ('ep06-pop:0.25', '@{one ninety-eight}'), ('rise:0.25', '@{matched neither}')],
     el='''<Center y={540}><TagTrio tags={[{ label: "FACTORY DRESS", value: "$75", at: 0.2 }, { label: "“COMPARE AT”", value: "$140", at: @{compare at price}, color: C6.loss, q: true }, { label: "REAL STORE DRESS", value: "$198", at: @{one ninety-eight} }]} qAt={@{matched neither}} /></Center>''' +
        src("Consumers' Checkbook · 2026 · Banana Republic Factory", "0.4")),
dict(start="And the Tommy Hilfiger lawsuit goes further", tag=C4, dim=0.0, sfx=[('click:0.3', '0.4'), ('click:0.3', '2.8'), ('click:0.3', '5.2'), ('click:0.3', '7.6'), ('ep06-stamp:0.3', '@{not once}')],
     el='''<Center y={470}><NeverEndingSale at={0.1} step={2.4} /></Center>''' +
        plate("NOT ONCE AT FULL ORIGINAL PRICE · PER THE LAWSUIT", "@{not once}", y=930, size=34, color="C6.accent")),
dict(start="Hundreds, maybe thousands", tag=C4, stock=K("red-sale-tags"), alt=(K("half-price"), "marked on sale the whole time"), sfx=[],
     el=plate("HUNDREDS, MAYBE THOUSANDS OF PRODUCTS · ALWAYS “ON SALE”", "0.3", y=880, size=34) + src("Hashimi v. PVH · complaint, 2026", "0.4")),
dict(start="A sale that never ends isn't a sale", tag=C4, dim=0.0, sfx=[('ep06-stamp:0.3', '0.3'), ('ep06-stamp:0.3', "@{It's just the price}")],
     el='''<Center y={470}><NeverEndingSale at={0.05} step={0.0001} years={["∞"]} label="50% OFF" /></Center>''' +
        plate("IT'S JUST THE PRICE", "@{It's just the price}", y=930, size=50, color="C6.accent")),

# ======================= PART 5 · ГЛАВА 5 · ЭТО ВЕЗДЕ =======================
dict(start="At this point you might think", tag=C5, hard=True, stock=K("highway-aerial"), alt=(K("highway-coastal"), "Stay away from outlet malls"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("OUTLETS ARE A SPECIAL CASE?", "0.3", y=880, size=44)),
dict(start="Except the same number lives", tag=C5, stock=K("woman-rack"), alt=(K("elderly-rack"), "every week"), sfx=[('ep06-stamp:0.25', '@{every week}')],
     el=plate("THE SAME NUMBER · IN STORES YOU SHOP EVERY WEEK", "@{the same number lives}", y=880, size=36, color="C6.accent")),
dict(start="Years before the outlet lawsuits", tag=C5, stock=K("family-clothes-shop"), sfx=[('t02-paper:0.3', "@{took Kohl's to court}")],
     el=plate("COURT CASE · HINOJOS v. KOHL'S", "@{took Kohl's to court}", y=200, size=40, color="C6.accent") + src(ILL, "0.4")),
dict(start="He'd bought a Samsonite suitcase", tag=C5, stock=K("suitcase-carousel"), sfx=[('ep06-pop:0.25', '@{fifty percent off}'), ('ep06-counter:0.3', '@{two ninety-nine ninety-nine}')],
     el=tag("ORIGINAL", "$299.99", "50% OFF", at="@{fifty percent off}", y=560, x=1400, scale=0.62, brand="SUITCASE · KOHL'S") + src(ILL + " · TAG: ILLUSTRATION", "0.3")),
dict(start="His claim was that Kohl's routinely", tag=C5, stock=K("card-pay"), sfx=[('ep06-stamp:0.25', '@{at the sale price}')],
     el=plate("HIS CLAIM: KOHL'S ROUTINELY SOLD IT AT THE SALE PRICE", "@{routinely sold}", y=880, size=34)),
dict(start="A lower court threw the case out", tag=C5, stock=K("gavel"), sfx=[('ep06-stamp:0.3', '@{threw the case out}')],
     el=plate("DISMISSED", "@{threw the case out}", y=880, size=56, color="C6.loss", out="@{so where's the harm}") +
        plate("“HE GOT WHAT HE PAID FOR. WHERE'S THE HARM?”", "@{so where's the harm}", y=880, size=36)),
dict(start="In twenty thirteen, the federal appeals court disagreed", tag=C5, sfx=[('t02-paper:0.3', '0.05'), ('impact:0.3', '@{price advertisements matter}')],
     el="HINOJOS"),
dict(start="In December twenty sixteen, the city of Los Angeles", tag=C5, sfx=[('t02-paper:0.3', '0.05'), ('ep06-pop:0.22', '@{J.C. Penney}'), ('ep06-pop:0.22', "@{Kohl's}"), ('ep06-pop:0.22', "@{Macy's}"), ('ep06-pop:0.22', '@{And Sears}')],
     stock=K("newspaper-man"),
     el=plate("DEC 2016 · CITY OF LOS ANGELES SUES", "0.2", y=200, size=38, color="C6.accent") + src("WTKR / CNN Wire · Dec 2016", "0.4") +
        plate("J.C. PENNEY", "@{J.C. Penney}", y=960, x=420, size=34, color="C6.accent") + plate("KOHL'S", "@{Kohl's}", y=960, x=780, size=34, color="C6.accent") +
        plate("MACY'S", "@{Macy's}", y=960, x=1120, size=34, color="C6.accent") + plate("SEARS", "@{And Sears}", y=960, x=1460, size=34, color="C6.accent")),
dict(start="One example from the lawsuit against Sears", tag=C5, stock=K("washer-spin"), alt=(K("laundromat"), "The city said"), sfx=[('ep06-counter:0.3', '@{eleven seventy-nine}')],
     el=plate("“ORIGINAL” $1,179.99", "@{eleven seventy-nine}", y=880, size=46, color="C6.accent", out="@{The city said}") +
        plate("FIRST ~6 MONTHS ONLINE: NEVER MORE THAN $999.99 · PER THE CITY", "@{never offered it}", y=880, size=34)),
dict(start="So, according to the city, the original price", tag=C5, dim=0.0, sfx=[('ep06-fall:0.25', '@{higher than any price}')],
     el='''<Center y={500}><PriceCeiling at={0.05} ceil="$1,179.99" ceilLabel="ORIGINAL PRICE" low="≤ $999.99" lowLabel="WHAT SEARS ACTUALLY CHARGED · PER THE CITY" drawAt={0.2} pts={[0.5, 0.5, 0.48, 0.5, 0.44, 0.5, 0.5, 0.46, 0.5]} /></Center>'''),
dict(start="Or take Macy's", tag=C5, stock=K("cross-necklace"), alt=(K("silver-necklace"), "Seventy-five percent off"), sfx=[('ep06-counter:0.3', '@{a hundred and twenty dollars}'), ('ep06-pop:0.25', '@{sale price of thirty}')],
     el=plate("ORIGINAL $120 · SALE $30", "@{a hundred and twenty dollars}", y=880, size=44, color="C6.accent", out="@{Seventy-five percent off}") +
        plate("75% OFF · FROM DAY ONE", "@{Seventy-five percent off}", y=880, size=46, color="C6.accent")),
dict(start="And in the five months after", tag=C5, sfx=[('t02-paper:0.3', '0.05'), ('ep06-stamp:0.25', '@{never sold for more}')],
     el=doc("wtkr-la", [("120", "never sold for more")], source="WTKR / CNN WIRE · DEC 2016") + plate("NEXT 5 MONTHS: NEVER MORE THAN $30 · PER THE CITY", "@{never sold for more}", y=960, size=34, color="C6.accent")),
dict(start="So here's the obvious question", tag=C5, stock=K("docs-table"), alt=(K("signing-docs"), "why doesn't anybody just stop"), sfx=[('rise:0.25', "@{why doesn't anybody}")],
     el=plate("WHY DOESN'T ANYBODY JUST STOP?", "@{why doesn't anybody}", y=880, size=48, color="C6.accent")),
dict(start="Somebody tried", tag=C5, stock=K("suit-walking"), dim=0.2, sfx=[('impact:0.3', '0.05')],
     el=plate("SOMEBODY TRIED.", "0.1", y=880, size=60, color="C6.accent")),

# ======================= PART 6 · ГЛАВА 6 · JCPENNEY =======================
dict(start="In twenty eleven, J.C. Penney hired a new CEO", tag=C6x, hard=True, stock=K("boardroom"), sfx=[('ep06-whoosh:0.2', '0.05')],
     el=plate("2011 · J.C. PENNEY HIRES A NEW CEO", "0.2", y=880, size=40, color="C6.accent")),
dict(start="He came from Apple", tag=C6x, stock=K("live-johnson-apple"), clean=True, sfx=[('ep06-pop:0.22', '0.1')],
     el=plate("RON JOHNSON · EX-APPLE RETAIL CHIEF", "0.1", y=120, size=34, color="C6.accent") + src("Footage: Bloomberg · 2013", "0.3")),
dict(start="Johnson looked at J.C. Penney", tag=C6x, stock=K("half-price"), alt=(K("big-discount"), "Coupons"), sfx=[('ep06-pop:0.22', '@{Tags marked up}'), ('ep06-pop:0.22', '@{Coupons}')],
     el=plate("A STORE HOOKED ON FAKE PRICES", "@{hooked on fake prices}", y=880, size=44, color="C6.accent", out="@{Coupons}") + plate("MARKED UP · MARKED DOWN · COUPONS", "@{Coupons}", y=880, size=40)),
dict(start="So in early twenty twelve", tag=C6x, stock=K("live-fair-square"), clean=True, sfx=[('ep06-stamp:0.3', '@{fake prices}')],
     el=plate("2012 · NO MORE “FAKE PRICES”", "@{fake prices}", y=120, size=36, color="C6.accent") + src("Footage: News 5 Cleveland · 2012", "0.3")),
dict(start="One everyday price on the tag", tag=C6x, stock=K("seniors-boutique"), sfx=[('ep06-stamp:0.3', '@{fair and square}')],
     el=plate("ONE EVERYDAY PRICE", "0.1", y=880, size=44, out="@{fair and square}") + plate("“FAIR AND SQUARE”", "@{fair and square}", y=880, size=56, color="C6.accent")),
dict(start="On paper, this is exactly what", tag=C6x, dim=0.0, sfx=[('ding:0.3', '@{the real price}')],
     el=f'<Center y={{560}}><HangTag at={{0.05}} brand="J.C. PENNEY · 2012" top={{{{ label: "EVERYDAY PRICE", value: "$25" }}}} price={{{{ label: "NO FAKE “ORIGINAL”", value: "✓" }}}} scale={{0.85}} priceColor={{C6.money}} priceColorAt={{0.05}} /></Center>' +
        plate("ILLUSTRATION", "0.3", y=1000, size=24)),
dict(start="The customers left", tag=C6x, stock=K("mall-empty-drone"), sfx=[('ep06-fall:0.3', '0.1')],
     el=plate("THE CUSTOMERS LEFT.", "0.1", y=880, size=56)),
dict(start="The New York Times found one of them", tag=C6x, stock=K("grocery-woman"), alt=(K("grocery-veg"), "When Penney dropped the sales"), sfx=[],
     el=plate("A MISSOURI SHOPPER · THE NEW YORK TIMES, 2013", "0.2", y=880, size=34, out="@{When Penney dropped the sales}") +
        plate("NO SALES → SHE STOPPED GOING", "@{When Penney dropped the sales}", y=880, size=40) + src(ILL, "0.4")),
dict(start="It wasn't that the prices were bad", tag=C6x, stock=K("shocked-woman"), clean=True, sfx=[('ep06-scratch:0.25', '@{any fun}')],
     el='''<Meme at={@{any fun}} text="no sale. no fun." y={900} size={80} />''' + src("Paraphrase · The New York Times, 2013", "0.3")),
dict(start="In twenty twelve, sales at stores open", tag=C6x, sfx=[('t02-paper:0.3', '0.05'), ('ep06-fall:0.3', '@{twenty-five percent}'), ('impact:0.3', '@{nine hundred and eighty-five}')],
     el=doc("jck-loss", [("985", "nine hundred and eighty-five")], source="JCK · FEB 2013 · J.C. PENNEY 2012 RESULTS") +
        plate("SAME-STORE SALES −25%", "@{twenty-five percent}", y=960, x=640, size=38, color="C6.loss") + plate("LOSS −$985M", "@{nine hundred and eighty-five}", y=960, x=1280, size=38, color="C6.loss")),
dict(start="Johnson admitted the pricing was a mistake", tag=C6x, stock=K("boardroom"), sfx=[('ep06-stamp:0.25', '@{a mistake}')],
     el=plate("“A MISTAKE”", "@{a mistake}", y=880, size=56, color="C6.accent")),
dict(start="The customer, he said", tag=C6x, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("jck-loss", [("reference price", "she always wants a reference price")], source="JCK · FEB 2013 · RON JOHNSON ON THE EARNINGS CALL")),
dict(start="She always wants a reference price. That's the big number", tag=C6x, dim=0.0, sfx=[('ep06-pop:0.3', '@{That\'s the big number}')],
     el=tag("COMPARABLE VALUE", "$499", "$169", at="0.05", y=560, scale=0.9, hlTopAt="@{That's the big number}") +
        plate("A “REFERENCE PRICE”", "@{That's the big number}", y=990, size=32, color="C6.accent")),
dict(start="The sales and the coupons came back", tag=C6x, stock=K("live-jcp-comeback"), clean=True, sfx=[('ding:0.25', '0.1')],
     el=plate("J.C. PENNEY AD · 2013", "0.1", y=880, size=36, color="C6.accent") + src("J.C. Penney ad · 2013", "0.3")),
dict(start="And according to reports, J.C. Penney quietly raised", tag=C6x, sfx=[('t02-paper:0.3', '0.05')],
     el="TIME_TOP"),
dict(start="One side table went from", tag=C6x, sfx=[('ep06-counter:0.3', '@{a hundred and fifty dollars}'), ('impact:0.3', '@{two forty-five}')],
     el="TIME_245"),
dict(start="Johnson was out after about seventeen months", tag=C6x, stock=K("exit-door"), alt=(K("door-close"), "seventeen months"), sfx=[('t02-door:0.3', '@{seventeen months}')],
     el=plate("OUT AFTER ~17 MONTHS · APRIL 2013", "@{seventeen months}", y=880, size=44, color="C6.accent")),
dict(start="A Northwestern marketing professor", tag=C6x, stock=K("newspaper-man"), dim=0.72, sfx=[('ep06-stamp:0.3', '@{They want a great deal}')],
     el=quote("“People don't want a fair price. They want a great deal.”", "ALEXANDER CHERNEV · NORTHWESTERN UNIVERSITY", at="@{People don't want}", size=78, hl=["great", "deal.”"])),
dict(start="And in December twenty sixteen, J.C. Penney was one", tag=C6x, sfx=[('t02-paper:0.3', '0.05')],
     el=doc("wtkr-la", [("1,179.99", "one of the four")], source="WTKR / CNN WIRE · DEC 2016") + plate("J.C. PENNEY · ONE OF THE FOUR SUED", "@{one of the four}", y=960, size=34, color="C6.accent")),
dict(start="And it works on smart people", tag=C6x, stock=K("woman-rack"), sfx=[],
     el=plate("NOBODY JUDGES A PRICE ALONE", "@{nobody judges a price alone}", y=880, size=44, color="C6.accent")),
dict(start="One sixty-nine next to four ninety-nine", tag=C6x, dim=0.0, sfx=[('ding:0.3', '0.05'), ('buzz:0.25', '@{Next to ninety-five twenty}')],
     el='''<Center y={540}><Anchor at={0.05} mid="$169" left="$499" right="$95.20" rightAt={@{Next to ninety-five twenty}} /></Center>'''),
dict(start="That's the answer to the question", tag=C6x, dim=0.0, sfx=[('scribble:0.3', '@{A store did}')],
     el=tag("COMPARABLE VALUE", "$499", "$169", at="0.05", y=560, scale=0.9, hlTopAt="@{Who wrote four ninety-nine}") +
        plate("A STORE WROTE IT · FOR US", "@{But it wrote it for us}", y=990, size=36, color="C6.accent")),
dict(start="Because when one store tried to stop", tag=C6x, stock=K("shopping-spree"), sfx=[('ep06-stamp:0.3', '@{shoppers walked away}')],
     el=plate("ONE STORE TRIED TO STOP · SHOPPERS WALKED AWAY", "@{shoppers walked away}", y=880, size=36)),

# ======================= PART 7 · ГЛАВА 7 · ЧТО ДЕЛАТЬ =======================
dict(start="So the next time you see two prices", tag=C7, hard=True, dim=0.0, sfx=[('ding:0.25', '@{cover the big one}'), ('ding:0.25', '@{check the label inside}'), ('ding:0.25', '@{take ten seconds}')],
     el='''<Center y={480}><Checklist items={[{ text: "Cover the big number", at: @{cover the big one} }, { text: "Check the label inside", at: @{check the label inside} }, { text: "Ten seconds on your phone", at: @{take ten seconds} }]} /></Center>'''),
dict(start="Checkbook often found Adidas cheaper", tag=C7, stock=K("online-store"), sfx=[('ep06-kaching:0.25', '@{cheaper at Amazon}')],
     el=plate("ADIDAS: OFTEN CHEAPER AT AMAZON OR DICK'S THAN AT THE OUTLET", "@{cheaper at Amazon}", y=880, size=32, color="C6.money") + src("Consumers' Checkbook · 2026", "0.4")),
dict(start="Now back to our bag", tag=C7, stock=K("women-bags"), sfx=[],
     el=plate("$169 · MIGHT BE FAIR · MIGHT NOT", "@{One sixty-nine might be}", y=880, size=40)),
dict(start="But it was never a four hundred", tag=C7, dim=0.0, sfx=[('ep06-fall:0.3', "@{never a four hundred}"), ('ep06-stamp:0.3', '@{with a story written}')],
     el=tag("COMPARABLE VALUE", "$499", "$169", at="0.05", y=560, scale=0.9, meltAt="@{never a four hundred}", hlPriceAt="@{It's a one sixty-nine bag}")),
dict(start="The stores will keep writing that story", tag=C7, dim=0.0, sfx=[('scribble:0.3', '0.3'), ('swoosh:0.3', '@{whether you believe it}')],
     el=tag("COMPARABLE VALUE", "$499", "$169", at="0.05", y=560, scale=0.9, cutAt="@{whether you believe it}") +
        plate("WHAT YOU CAN CHANGE: WHETHER YOU BELIEVE IT", "@{What you can change}", y=990, size=34, color="C6.accent")),
dict(start="They saw you coming. Now you can see them coming", tag=C7, stock=K("woman-bag-walk"), dim=0.45, sfx=[('impact:0.3', '0.05')],
     el=plate("THEY SAW YOU COMING · NOW YOU SEE THEM COMING", "0.1", y=540, size=48, color="C6.accent")),
dict(start="What's the biggest compare at number", tag=C7, stock=K("mall-skylight"), dim=0.55, end_pad=8.0, sfx=[('ep06-whoosh:0.2', '0.3')],
     el='''<EndCard6 at={0.3} next="" />''' + plate("THE BIGGEST “COMPARE AT” NUMBER YOU EVER BELIEVED?", "0.4", y=1000, size=36, color="C6.accent")),
]
S = [s for s in S if s]

# музыка по главам (Фонотека YouTube, автора указывать не нужно; треки взяты из прошлых выпусков — см. компромиссы)
EP["music_at"] = [
    ("Four hundred and ninety-nine dollars", "audio/t04/music-c0-open.mp3", 0.07),
    ("Let's start with the bag itself", "audio/t02/music-c1-recipe.mp3", 0.075),
    ("In another lawsuit filed this summer", "audio/t03/music-c2-gap.mp3", 0.075),
    ("Now the big number", "audio/t05/music-c1-test.mp3", 0.075),
    ("At this point you might think", "audio/t03/music-c3-states.mp3", 0.075),
    ("In twenty eleven, J.C. Penney hired a new CEO", "audio/t04/music-c4-knew.mp3", 0.08),
    ("So the next time you see two prices", "audio/t05/music-c5-how.mp3", 0.08),
]

_SPECIAL = ("MK_SETTLE", "CURRY_RULE", "HINOJOS", "TIME_245", "TIME_TOP")
for _sc in S:
    if not _sc.get("stock") and "<Evidence" not in _sc.get("el", "") and _sc.get("el", "") not in _SPECIAL:
        _sc["el"] = "<Drift>" + _sc["el"] + "</Drift>"


def _mk():
    if has("yahoo-mk", "4.88 million"):
        return doc("yahoo-mk", [("4.88 million", "four point eight eight")], source="REUTERS VIA YAHOO FINANCE · JUNE 2015")
    return doc("tfl-mk-top", [], source="THE FASHION LAW · 2015") + plate("SETTLED · $4.88 MILLION · DENIED WRONGDOING", "@{four point eight eight}", y=960, size=36, color="C6.accent")


def _curry():
    if has("curry-tina-p2", "Oregon law prohibits retail price comparisons"):
        return doc("curry-tina-p2", [("Oregon law prohibits retail price comparisons", "In Oregon")], source=CURRY + " · ¶4", zoom=None)
    return doc("aal-kate", [("comparable value", "Comparable to what")], source="ALL ABOUT LAWYER · " + CURRY) + \
        plate("OREGON: A COMPARED PRICE SHOULD COME FROM A REAL COMPETITOR NEARBY", "@{In Oregon}", y=960, size=30, color="C6.accent")


def _hinojos():
    n = pick(["hinojos-"], "price advertisements matter")
    if n:
        return doc(n, [("price advertisements matter", "price advertisements matter")], source="HINOJOS v. KOHL'S · 9TH CIR. · MAY 2013", zoom=None)
    return '<Drift>' + quote("“Price advertisements matter.”", "U.S. COURT OF APPEALS, 9TH CIRCUIT · HINOJOS v. KOHL'S · 2013", at="@{price advertisements matter}", size=96, hl=["matter.”"]) + '</Drift>'


def _timetop():
    if has("time2-jcp", "fake prices"):
        return doc("time2-jcp", [("fake prices", "quietly raised")], source="TIME · MAY 2013")
    return doc("npr-jcp-top", [], source="NPR · MARCH 2013") + plate("REPORTS: EVERYDAY PRICES RAISED · TO HAVE SOMETHING TO MARK DOWN", "@{something to mark down}", y=960, size=30, color="C6.accent")


def _time():
    if has("time2-jcp", "$245"):
        return doc("time2-jcp", [("$245", "two forty-five")], source="TIME · MAY 2013")
    return '<Drift>' + f'<Center y={{560}}><HangTag at={{0.05}} brand="SIDE TABLE · J.C. PENNEY" top={{{{ label: "LAST WEEK", value: "$150" }}}} price={{{{ label: "EVERYDAY PRICE", value: "$245", at: @{{two forty-five}} }}}} scale={{0.8}} /></Center>' + src("TIME · May 2013 (dealnews price tracking)", "0.3") + '</Drift>'


_SUB = {"MK_SETTLE": _mk, "CURRY_RULE": _curry, "HINOJOS": _hinojos, "TIME_245": _time, "TIME_TOP": _timetop}
for _sc in S:
    if _sc.get("el") in _SUB:
        _sc["el"] = _SUB[_sc["el"]]()
