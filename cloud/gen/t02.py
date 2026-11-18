# T02 «The Free Sample That Costs $5,000» — второй ролик They Saw You Coming (план сцен 18.11.2026).
# Окраска: детективное расследование + триллер (ставка растёт: $5,000 → $44,280 → федеральное дело 2013 года). Юмор — сухие гэги
#   только над схемой и её языком (среди пострадавших пожилые и люди с инвалидностью — над ними не шутим).
# Визуальная идея: «доска расследования» (CaseBoard) — города-дела с красными нитями к центру «?»; центр раскрывается
#   «MAZAL GROUP» на ~5:24 и в финале меняет вывеску на «INV BRANDS». Предмет-талисман — пакетик-пробник (начало, 3:57, финал).
# Инструменты: улики на экране (NPR, CBS, FTC — скриншоты страниц с маркером на строке голоса), «рецепт» из пяти шагов
#   (табличка шага в углу вместо глав — по уроку T01 таблички «Chapter» не ставим), перевод с корпоративного, сквозной гэг «the snake».
# Начало: холодный вход без оглавления — $5,000 → $42,000 → $44,280 за первые 40 с, первое доказательство (NPR) на 0:17.
# Нарастание: история Мишель → рецепт (ответ на название к ~3:30) → «это не один магазин» → дистрибьютор → это ловили ещё в 2013 → новое имя, тот же адрес → правила.
# Номера стока — по имени из cloud/broll/t02.json (helper K). Музыка — Фонотека YouTube.
import json, os
from evid import ev

EP = dict(
    comp="T02Sample",
    words="src/videos/t02-sample-words.json",
    text="cloud/voice/t02-text",
    parts=6,
    broll="cloud/broll/t02.json",
    audio="audio/t02-voiceover.mp3",
    voice_vol=0.9,
    music=[
        dict(**{'from': 0.0}, to=92.0, file="audio/t02/music-c0-open.mp3", vol=0.085),
        dict(**{'from': 91.4}, to=197.2, file="audio/t02/music-c1-recipe.mp3", vol=0.08),
        dict(**{'from': 196.6}, to=271.6, file="audio/t02/music-c2-card.mp3", vol=0.08),
        dict(**{'from': 271.0}, to=424.0, file="audio/t02/music-c3-network.mp3", vol=0.075),
        dict(**{'from': 423.4}, to=509.0, file="audio/t02/music-c4-history.mp3", vol=0.08),
        dict(**{'from': 508.4}, to=590.0, file="audio/t02/music-c5-rules.mp3", vol=0.09),
    ],
    lens={},
)
_R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
_names = [c["name"].split("-", 1)[1] for c in json.load(open(f"{_R}/cloud/broll/t02.json"))["clips"]]
K = lambda name: _names.index(name) + 1
_l = os.path.join(os.path.dirname(__file__), "t02-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

NPR = "NPR · Oct 14, 2026"
CBS = "CBS News California Investigates · 2026"
NPRC, CBSC = (450, 1800), (40, 1340)  # колонки текста на скриншотах
ILL = '<div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>'
S1, S2, S3, S4, S5 = (1, "The Sample"), (2, "The Chair"), (3, "The Price"), (4, "The Card"), (5, "The Bag")

# пины доски расследования (координаты кадра)
P_AA = '{ label: "ANN ARBOR, MI", sub: "$5,000", x: 380, y: 300, at: %s }'
P_MI = '{ label: "MICHIGAN", sub: "$42,000", x: 330, y: 760, at: %s }'
P_SF = '{ label: "SANTA FE, NM", sub: "$44,280", x: 1520, y: 290, at: %s }'
P_MB = '{ label: "MANHATTAN BEACH, CA", sub: "$53,500", x: 1540, y: 770, at: %s }'
P_LA = '{ label: "LOS ANGELES, CA", sub: "BEE & CO.", x: 960, y: 900, at: %s }'
P_HI = '{ label: "HAWAII", sub: "$950K SETTLEMENT", x: 960, y: 170, at: %s }'

S = [
# ======================= PART 1 · ХОЛОДНЫЙ ВХОД =======================
dict(start="It starts with a free", stock=K("sample-sachets"), clean=True, alt=(K("seller-terminal-smile"), "You've walked past"),
     sfx=[('ep06-pop:0.2', '0.4')], el=''),
dict(start="In Ann Arbor", stock=K("shopping-bags-hold"), sfx=[('ep06-kaching:0.3', '@{five thousand dollars}')],
     el='''<Center x={1430} y={720}><In at={@{five thousand dollars}} from="fade"><Plate6 at={@{five thousand dollars}}><BigNum at={@{five thousand dollars}} icon="bag" size={150} label="SKINCARE SHE NEVER WANTED">$5,000</BigNum></Plate6></In></Center>'''),
dict(start="And honestly", stock=K("mall-corridor"), clean=True, dim=0.15, sfx=[('impact:0.35', '@{off easy}')], el=''),
dict(start="Also in Michigan, an elderly", sfx=[('t02-paper:0.35', '0.1')],
     el=ev("t02", "npr-42k", marks=[("charged $42,000 for skincare products", "charged forty")], source=NPR, col=NPRC)),
dict(start="His family only found out", stock=K("old-man-head-hands"),
     el='''<Center x={1450} y={300}><Plate6 at={@{credit score}}><Label6 at={@{credit score}} size={40} color={C6.loss}>CREDIT SCORE ↓</Label6></Plate6></Center>'''),
dict(start="In Santa Fe, a sixty", stock=K("door-dark-wood"), alt=(K("seller-card-payment"), "until she agreed"),
     sfx=[('tick:0.3', '@{for hours}'), ('ep06-coin:0.3', '@{six hundred}')],
     el='''<Center x={1440} y={760}><In at={@{six hundred}} from="fade"><Plate6 at={@{six hundred}}><BigNum at={@{six hundred}} icon="card" size={130} label="WHAT SHE AGREED TO">$600</BigNum></Plate6></In></Center>'''),
dict(start="Later, her banking app", sfx=[('ep06-boom:0.35', '@{two charges}')],
     el=ev("t02", "npr-44k", marks=[("two charges totaling $44,280", "two charges")], source=NPR, col=NPRC)),
dict(start="NPR spent a year", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-head", source=NPR, col=NPRC)),
dict(start="More than fifty people", sfx=[('ep06-pop:0.25', '0.3'), ('ep06-pop:0.25', '0.9'), ('ep06-pop:0.25', '1.5'), ('rise:0.3', '@{one company}')],
     el='''<CaseBoard title="NPR · 50+ PEOPLE · ~500 COMPLAINTS" pins={[%s, %s, %s]} hub={{ label: "?", x: 960, y: 540, at: @{one company} }} />''' % (P_AA % 0.3, P_MI % 0.9, P_SF % 1.5)),
dict(start="So how does a free sample", stock=K("hand-jar-open"), clean=True,
     el='''<Center x={960} y={880}><Row gap={36}><Plate6 at={@{free sample}}><Label6 at={@{free sample}} size={46} color={C6.ink}>FREE</Label6></Plate6><Plate6 at={@{five thousand dollar}}><Label6 at={@{five thousand dollar}} size={46} color={C6.loss}>$5,000</Label6></Plate6></Row></Center>'''),
dict(start="And if federal agents", stock=K("stakeout-binoculars"), sfx=[('ep06-stamp:0.35', '@{twenty thirteen}')],
     el='''<Center x={1400} y={300}><Stamp at={@{twenty thirteen}} text="2013" color={C6.accent} size={90} /></Center>'''),
dict(start="why is the same business model", stock=K("mall-xmas-lights"), sfx=[('ep06-stamp:0.35', '@{still running}')],
     el='''<Center x={1400} y={300}><Stamp at={@{still running}} text="2026" color={C6.loss} size={90} /></Center>'''),
dict(start="The woman with the five thousand", stock=K("daughter-mother-older"),
     el='''''' + ILL + '''<Center y={880}><NameCard6 at={@{Michele Anliker}} name="Michele Anliker" role="HER DAUGHTER · MICHIGAN" icon="person" /></Center>'''),
dict(start="Christmas, twenty twenty four", stock=K("mall-xmas-escalators"), alt=(K("mall-xmas-tree"), "Her mother left"),
     sfx=[('ep06-stamp:0.35', '@{Remember that name}')],
     el='''''' + ILL + '''<Center y={880}><In at={@{Briarwood Mall}} out={@{Her mother left}} from="fade"><Plate6 at={@{Briarwood Mall}}><Label6 at={@{Briarwood Mall}} size={38} color={C6.ink}>BRIARWOOD MALL · ANN ARBOR · DEC 2024</Label6></Plate6></In></Center>
<Center x={1400} y={330}><Stamp at={@{Remember that name}} text="voupre" color={C6.accent} size={86} /></Center>'''),
dict(start="When Michele went back", sfx=[('t02-paper:0.3', '0.1'), ('ep06-scratch:0.3', '@{accused her mother}')],
     el=ev("t02", "npr-anliker", marks=[("leaving with $5,000 in Voupre skincare products", "explanation ready")], source=NPR, col=NPRC)),
dict(start="Merry Christmas", stock=K("merry-xmas-letters"), clean=True, sfx=[('t02-door:0.35', '0.15')],
     el='''<Meme at={0.35} text="the holiday spirit" y={900} />'''),

# ======================= PART 2 · РЕЦЕПТ: ШАГИ 1–3 =======================
dict(start="NPR heard the same story", stock=K("pin-board"), hard=True, sfx=[('ep06-whoosh:0.2', '0.02')],
     el='''<Center x={1420} y={820}><Plate6 at={@{people who never met}}><Label6 at={@{people who never met}} size={36} color={C6.ink}>DIFFERENT STATES · SAME STORY</Label6></Plate6></Center>'''),
dict(start="It works in steps", stock=K("luxury-jars"), dim=0.3,
     el='''<Center y={540}><Words text="The recipe" at={@{Like a recipe}} size={120} hl={["recipe"]} /></Center>'''),
dict(start="Step one", tag=S1, stock=K("seller-customer-counter"), alt=(K("salesman-compliment"), "A compliment on your handbag"), sfx=[('ep06-pop:0.25', '0.1')], el=''),
dict(start="Why does that work", tag=S1, stock=K("woman-cream-smile"), dim=0.2, sfx=[('ep06-stamp:0.3', '@{Reciprocity}')],
     el='''<Center x={1380} y={330}><Stamp at={@{Reciprocity}} text="reciprocity" color={C6.accent} size={78} /></Center>'''),
dict(start="NPR once reported on waiters", tag=S1, stock=K("cash-bill-table"), sfx=[('ep06-counter:0.3', '@{Their tips went up}')],
     el='''<Center x={1440} y={330}><Plate6 at={@{Their tips went up}}><BigNum at={@{Their tips went up}} icon="receipt" size={130} label="TIPS · 2ND MINT “JUST FOR YOU”" color={C6.money}>+20%</BigNum></Plate6></Center>
<Source6 at={@{Their tips went up}}>NPR · Nov 26, 2012 (Robert Cialdini)</Source6>'''),
dict(start="One extra mint", stock=K("shocked-woman"), clean=True, sfx=[('ep09-bell:0.25', '0.3')],
     el='''<Meme at={0.3} text="one. extra. mint." y={900} />'''),
dict(start="Now imagine a free facial", tag=S1, stock=K("facial-gloves"), clean=True, el=''),
dict(start="Step two", tag=S2, stock=K("facial-bed"), hard=True, sfx=[('ep06-whoosh:0.2', '0.02')], el=''),
dict(start="Then you sit", tag=S2, stock=K("facial-mask-spa"), alt=(K("door-dark-wood"), "sometimes in a back room"),
     sfx=[('t02-door:0.3', '@{back room}')],
     el='''<Center x={1430} y={300}><In at={@{an hour or more}} out={@{sometimes in a back room}} from="fade"><Plate6 at={@{an hour or more}}><BigNum at={@{an hour or more}} icon="clock" size={110} label="IN THE CHAIR">1 hr+</BigNum></Plate6></In></Center>'''),
dict(start="In Hawaii, a woman", tag=S2, sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-walker", marks=[("The salesperson took her walker", "took her walker")], source=NPR, col=NPRC)),
dict(start="until she spent", tag=S2, stock=K("wall-clock"), sfx=[('ep06-kaching:0.3', '@{two thousand six}')],
     el='''<Center x={1440} y={760}><Plate6 at={@{two thousand six}}><BigNum at={@{two thousand six}} icon="receipt" size={130} label="HAWAII · STATE COMPLAINT">$2,600</BigNum></Plate6></Center>'''),
dict(start="Step three", tag=S3, stock=K("shelf-pink"), alt=(K("jars-black"), "No price tags"), hard=True,
     sfx=[('ep06-whoosh:0.2', '0.02'), ('ep06-scratch:0.3', '@{No price tags}')],
     el='''<Center y={880}><In at={@{No price tags}} from="fade"><Plate6 at={@{No price tags}}><Label6 at={@{No price tags}} size={44} color={C6.loss}>PRICE TAGS: NONE</Label6></Plate6></In></Center>'''),
dict(start="A former federal investigator", tag=S3, sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-noprice", marks=[("The products carry no price tags", "No price tag means")], source=NPR, col=NPRC)),
dict(start="The more they sell", tag=S3, stock=K("counting-dollars"), sfx=[('ep06-counter:0.3', '@{ten thousand dollars a month}')],
     el='''<Center x={1440} y={760}><Plate6 at={@{ten thousand dollars a month}}><BigNum at={@{ten thousand dollars a month}} icon="coin" size={120} label="WHAT ONE SALESMAN BRAGGED">$10K/mo</BigNum></Plate6></Center>
<Source6 at={1.5}>A salesman's own video · 2025</Source6>'''),
dict(start="So the first number", tag=S3, stock=K("calculator"), alt=(K("car-salesman"), "Their words"),
     sfx=[('ep06-kaching:0.3', '@{twenty thousand dollar}')],
     el='''<Center x={1440} y={330}><In at={@{twenty thousand dollar}} out={@{Their words}} from="fade"><Plate6 at={@{twenty thousand dollar}}><BigNum at={@{twenty thousand dollar}} icon="receipt" size={120} label="FIRST OFFER">$20,000</BigNum></Plate6></In></Center>
<Center y={860}><In at={@{I felt like}} from="fade"><Plate6 at={@{I felt like}}><Words text="“I felt like I was in a car dealership.”" at={@{I felt like}} size={52} hl={["car", "dealership.”"]} maxW={1500} /></Plate6></In></Center>
<Source6 at={@{Their words}}>BBB complaint, via CBS News</Source6>'''),
dict(start="It's a discount", tag=S3, stock=K("shop-50-off"), clean=True, sfx=[('ep09-trombone:0.25', '@{made up thirty}')],
     el='''<Meme at={@{made up thirty}} text="50% off a made-up number" y={900} size={70} />'''),

# ======================= PART 3 · ШАГИ 4–5, ОДИН МАГАЗИН? =======================
dict(start="Step four", tag=S4, stock=K("card-terminal"), hard=True, sfx=[('ep06-whoosh:0.2', '0.02')], el=''),
dict(start="The Santa Fe woman", tag=S4, stock=K("man-card-frustrated"), alt=(K("woman-receipt-shock"), "That evening"),
     sfx=[('t02-declined:0.35', '@{declined}'), ('ep06-boom:0.3', '@{Forty-four thousand}')],
     el='''<Center x={1430} y={330}><In at={@{Forty-four thousand}} from="fade"><Plate6 at={@{Forty-four thousand}}><BigNum at={@{Forty-four thousand}} icon="card" size={130} label="TWO CHARGES, SAME DAY" color={C6.loss}>$44,280</BigNum></Plate6></In></Center>'''),
dict(start="Another shopper told authorities", tag=S4, sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-zero", marks=[("the salesperson added a zero", "added a zero")], source=NPR, col=NPRC)),
dict(start="Some say their payment plan", tag=S4, stock=K("card-tablet"),
     el='''<CorpSub at={@{payment plan}} corp="“Payment plan”" human="a high-interest loan" />'''),
dict(start="Step five", tag=S5, stock=K("sign-tablet"), hard=True, sfx=[('ep06-whoosh:0.2', '0.02')], el=''),
dict(start="At the bottom of the bag", tag=S5, sfx=[('ep06-receipt:0.3', '0.2'), ('ep06-stamp:0.35', '@{All sales final}')],
     el=ev("t02", "npr-receipt", marks=[("All sales final. No refunds. No exchanges.", "All sales final")], source=NPR, col=NPRC)),
dict(start="The sample was free", stock=K("sample-sachets"), dim=0.35, sfx=[('impact:0.3', '@{The chair was not}')],
     el='''<Center y={540}><Col gap={10}><Words text="The sample was free." at={0.1} size={96} /><Words text="The chair was not." at={@{The chair was not}} size={96} hl={["not."]} /></Col></Center>'''),
dict(start="Michele did what most", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-flyers", marks=[("distributed flyers warning shoppers away", "handed out flyers")], source=NPR, col=NPRC)),
dict(start="If you like seeing", stock=K("mall-walkers"), clean=True, el='''<Subscribe6 at={@{subscribe}} />'''),
dict(start="The mall didn't fix it", stock=K("mall-aerial"), alt=(K("mall-terrace"), "Only then"), sfx=[('ep06-stamp:0.35', '@{get a refund}')],
     el='''<Center y={880}><In at={@{Simon Property Group}} out={@{Only then}} from="fade"><Plate6 at={@{Simon Property Group}}><Label6 at={@{Simon Property Group}} size={38} color={C6.ink}>SIMON PROPERTY GROUP · THE MALL'S OWNER</Label6></Plate6></In></Center>
<Center x={1420} y={330}><Stamp at={@{get a refund}} text="refunded" color={C6.money} size={84} /></Center>'''),
dict(start="Happy ending, right", stock=K("mother-daughter-kitchen"), clean=True, el=''),
dict(start="Except it was never one store", hard=True, sfx=[('ep06-boom:0.35', '0.1'), ('ep06-pop:0.25', '0.6'), ('ep06-pop:0.25', '1.0')],
     el='''<CaseBoard pins={[%s, %s, %s]} hub={{ label: "?", x: 960, y: 540, at: 1.4 }} />''' % (P_AA % 0.1, P_MI % 0.6, P_SF % 1.0)),

# ======================= PART 4 · СЕТЬ =======================
dict(start="In Manhattan Beach", stock=K("mb-palms-pier"), alt=(K("wheelchair-hand"), "Mary Ellen"),
     el='''''' + ILL + '''<Center y={880}><In at={@{Mia's by Voupre}} out={@{Mary Ellen}} from="fade"><Plate6 at={@{Mia's by Voupre}}><Label6 at={@{Mia's by Voupre}} size={38} color={C6.ink}>MIA'S BY VOUPRE · MANHATTAN BEACH, CA</Label6></Plate6></In></Center>
<Center y={880}><In at={@{eighty two}} from="fade"><Plate6 at={@{eighty two}}><Label6 at={@{eighty two}} size={38} color={C6.ink}>MARY ELLEN ECKHERT, 82 · RETIRED TEACHER</Label6></Plate6></In></Center>'''),
dict(start="Then she kept coming back", stock=K("facial-bed"), clean=True, el=''),
dict(start="Over a year, she was charged", sfx=[('t02-paper:0.3', '0.1'), ('ep06-boom:0.3', '@{fifty three thousand}')],
     el=ev("t02", "npr-53k", marks=[("charged her $53,500 across four credit cards", "fifty three thousand")], source=NPR, col=NPRC)),
dict(start="After disputes", stock=K("elderly-hands-bills"), sfx=[('ep06-counter:0.3', '@{seventeen thousand}')],
     el='''<Center x={1440} y={330}><Plate6 at={@{seventeen thousand}}><BigNum at={@{seventeen thousand}} icon="card" size={120} label="STILL OUT, AFTER DISPUTES" color={C6.loss}>$17,000+</BigNum></Plate6></Center>'''),
dict(start="Her son asked", stock=K("mb-pier-aerial"), dim=0.4,
     el='''<Center y={540}><Words text="“What kind of a spa charges anyone $54,000?”" at={@{What kind}} size={74} hl={["$54,000?”"]} maxW={1500} /></Center>
<Source6 at={@{What kind}}>Her son, Marc Eckhert, via NPR</Source6>'''),
dict(start="Different state", stock=K("mall-cosmetics-aisle"), dim=0.15,
     el='''<Center y={900}><Plate6 at={@{Same five steps}}><Label6 at={@{Same five steps}} size={34} color={C6.accent}>SAMPLE · CHAIR · PRICE · CARD · BAG</Label6></Plate6></Center>'''),
dict(start="And there's a clue", stock=K("man-magnifier"), alt=(K("luxury-jars"), "The name on the jars"), sfx=[('ep06-stamp:0.35', '@{Voupre}')],
     el='''<Center x={1400} y={330}><Stamp at={@{Voupre}} text="voupre" color={C6.accent} size={90} /></Center>'''),
dict(start="Michigan, New Mexico, California", sfx=[('ep06-pop:0.25', '0.1'), ('ep06-pop:0.25', '@{New Mexico}'), ('ep06-pop:0.25', '@{California}'), ('rise:0.3', '@{one distributor}'), ('ep06-boom:0.4', '@{Mazal Group}')],
     el='''<CaseBoard title="ONE NAME ON THE JARS" pins={[%s, %s, %s]} hub={{ label: "MAZAL GROUP", sub: "CHATSWORTH, CA · DISTRIBUTOR", x: 960, y: 540, at: @{one distributor}, q: @{Mazal Group} }} />''' % (P_MI % 0.1, P_SF % "@{New Mexico}", P_MB % "@{California}")),
dict(start="Court records show", stock=K("office-palms"), dim=0.3, sfx=[('ep06-pop:0.25', '@{sell only}'), ('ep06-pop:0.25', '@{follow its refund}'), ('ep06-pop:0.25', '@{send complaints}')],
     el='''''' + ILL + '''<Center x={620} y={560}><Plate6 at={@{sell only}} pad="30px 50px"><Col gap={20} align="flex-start">
  <Label6 at={@{sell only}} size={38} color={C6.ink}>SELL ONLY MAZAL PRODUCTS</Label6>
  <Label6 at={@{follow its refund}} size={38} color={C6.ink}>FOLLOW ITS REFUND POLICY</Label6>
  <Label6 at={@{send complaints}} size={38} color={C6.accent}>SEND COMPLAINTS TO HQ</Label6>
</Col></Plate6></Center>
<Source6 at={@{Court records}}>Court records, via NPR</Source6>'''),
dict(start="A former employee says", stock=K("mall-topdown"), sfx=[('ep06-counter:0.3', '@{two thousand stores}')],
     el='''<Center x={1440} y={760}><Plate6 at={@{two thousand stores}}><BigNum at={@{two thousand stores}} icon="store" size={130} label="STORES · A FORMER EMPLOYEE'S ESTIMATE">2,000+</BigNum></Plate6></Center>'''),
dict(start="Mazal's lawyer says", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-noown", marks=[("does not own or operate any retail locations", "does not own")], source=NPR, col=NPRC)),
dict(start="Now, what's in the jars", stock=K("hand-jar"), clean=True, el=''),
dict(start="NPR got the price forms", stock=K("counting-dollars"), alt=(K("calculator"), "That's a hundred"), dim=0.35, sfx=[('ep06-pop:0.3', '@{twenty three dollars}'), ('ep06-boom:0.3', '@{three thousand}'), ('ep06-stamp:0.4', '@{hundred and thirty}')],
     el='''<Center y={480}><Split6 scale={0.62} at={@{twenty three dollars}} left={{ title: "STORE PAYS", value: "$23", color: C6.ink }} right={{ title: "SUGGESTED RETAIL", value: "$3,000", color: C6.loss, at: @{three thousand} }} /></Center>
<Center y={880}><Stamp at={@{hundred and thirty}} text="×130" color={C6.accent} size={96} /></Center>'''),
dict(start="A retail expert told NPR", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-luxury", marks=[("rarely stretch the suggested retail price to even 20 times", "rarely go above")], source=NPR, col=NPRC)),
dict(start="NPR also paid a lab", stock=K("lab-tubes"), alt=(K("lab-gloves"), "The lab found neither"),
     sfx=[('ep06-pop:0.3', '@{vitamin A}'), ('ep06-stamp:0.4', '@{found neither}')],
     el='''<Center x={1440} y={300}><In at={@{thirteen hundred}} out={@{The label promises}} from="fade"><Plate6 at={@{thirteen hundred}}><BigNum at={@{thirteen hundred}} icon="bottle" size={110} label="SUGGESTED PRICE · ONE SERUM">$1,300</BigNum></Plate6></In></Center>
<Center y={880}><In at={@{vitamin A}} out={@{found neither}} from="fade"><Plate6 at={@{vitamin A}}><Label6 at={@{vitamin A}} size={40} color={C6.ink}>LABEL: VITAMIN A · VITAMIN E</Label6></Plate6></In></Center>
<Center y={820}><Stamp at={@{found neither}} text="not detected" color={C6.loss} size={80} /></Center>
<Center y={960}><Label6 at={@{found neither}} size={28} color={C6.ink}>NPR LAB TEST · ONE BOX</Label6></Center>'''),
dict(start="But the lab's boss", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-under10", marks=[("retails for under $10", "under ten dollars")], source=NPR, col=NPRC)),
dict(start="It's not only Voupre", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "cbs-head", focus=(330, 100, 1000, 820), source=CBS, col=CBSC)),
dict(start="Victor Chisholm", stock=K("card-terminal"), dim=0.2, sfx=[('ep06-counter:0.3', '@{forty one thousand}')],
     el='''<Center x={1430} y={330}><Plate6 at={@{forty one thousand}}><BigNum at={@{forty one thousand}} icon="receipt" size={120} label="RECEIPTS · SKINCARE + RED LIGHT DEVICE">~$41,700</BigNum></Plate6></Center>'''),
dict(start="He says he was also", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "cbs-tips", marks=[("more than $10,000 in tips", "ten thousand dollars in tips")], source=CBS, col=CBSC)),
dict(start="The store's lawyer calls", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "cbs-onesided", marks=[("a one-sided and misleading account", "one sided")], source=CBS, col=CBSC)),
dict(start="And the free sample packs", stock=K("hand-jar-open"), dim=0.2, sfx=[('ep06-stamp:0.4', '@{Chatsworth}')],
     el='''<Center x={1400} y={330}><Stamp at={@{Chatsworth}} text="chatsworth, ca" color={C6.accent} size={80} /></Center>'''),
dict(start="That location now appears closed", stock=K("temporarily-closed"), clean=True, sfx=[('t02-door:0.3', '0.2')],
     el='''<Center y={880}><In at={@{Los Angeles police}} from="fade"><Plate6 at={@{Los Angeles police}}><Label6 at={@{Los Angeles police}} size={38} color={C6.ink}>LAPD IS LOOKING INTO HIS CASE</Label6></Plate6></In></Center>'''),

# ======================= PART 5 · ЭТО УЖЕ БЫЛО =======================
dict(start="Worst part", stock=K("film-reel"), archive=True, hard=True, sfx=[('ep06-whoosh:0.2', '0.02')], el=''),
dict(start="In twenty thirteen, federal agents", stock=K("stakeout-camera"), sfx=[('ep06-stamp:0.35', '@{Salty Winds}')],
     el='''<Center x={1380} y={320}><Stamp at={@{Salty Winds}} text="operation salty winds" color={C6.accent} size={70} /></Center>'''),
dict(start="They watched skincare stores", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-salty", marks=[("Salty Winds", "They watched")], source=NPR, col=NPRC)),
dict(start="Another case went after", stock=K("fbi-interrogation"),
     el='''''' + ILL + '''<Center y={880}><In at={@{Orogold}} from="fade"><Plate6 at={@{Orogold}}><Label6 at={@{Orogold}} size={38} color={C6.ink}>EAST COAST CHAIN · INCLUDING OROGOLD KIOSKS</Label6></Plate6></In></Center>'''),
dict(start="Its owner pleaded guilty", stock=K("cuffs-money"), alt=(K("hands-cuffed"), "Sentenced"), sfx=[('ep06-counter:0.3', '@{fourteen million}'), ('ep06-stamp:0.35', '@{thirty months}')],
     el='''<Center x={1440} y={330}><Plate6 at={@{fourteen million}}><BigNum at={@{fourteen million}} icon="coin" size={120} label="EARNED, PER THE JUSTICE DEPT.">$14M+</BigNum></Plate6></Center>
<Center y={880}><In at={@{six and a half}} from="fade"><Plate6 at={@{six and a half}}><Row gap={30}><Label6 at={@{six and a half}} size={40} color={C6.ink}>SENTENCED: 6.5 YEARS</Label6><Label6 at={@{thirty months}} size={40} color={C6.loss}>SERVED: 30 MONTHS</Label6></Row></Plate6></In></Center>'''),
dict(start="An FBI agent told NPR", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-snake", marks=[("we wanted to cut the head off the snake", "cut the head")], source=NPR, col=NPRC)),
dict(start="The snake, it turns out", stock=K("snake"), clean=True, sfx=[('ep09-trombone:0.25', '@{licensees}')],
     el='''<Meme at={@{licensees}} text="the snake, 2026" y={900} />'''),
dict(start="Today, NPR says", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-overcharge", marks=[("credit card overcharge scheme", "business model"), ("from Honolulu to Annapolis", "Honolulu")], source=NPR, col=NPRC)),
dict(start="The Santa Fe spa owner settled", stock=K("courthouse-dusk"), sfx=[('ep06-kaching:0.3', '@{three hundred fifty}')],
     el='''<Center x={1440} y={760}><Plate6 at={@{three hundred fifty}}><BigNum at={@{three hundred fifty}} icon="flag" size={130} label="SETTLED WITH NEW MEXICO">$350K</BigNum></Plate6></Center>'''),
dict(start="In Hawaii, Mazal Group", sfx=[('t02-paper:0.3', '0.1')],
     el=ev("t02", "npr-950k", marks=[("agreed to pay $950,000 in restitution", "nine hundred fifty")], source=NPR, col=NPRC)),
dict(start="And a month before NPR", sfx=[('t02-paper:0.3', '0.1'), ('ep06-stamp:0.35', '@{terminated}')],
     el=ev("t02", "npr-terminated", marks=[("terminated its business license in California", "terminated")], source=NPR, col=NPRC)),
dict(start="The sign on the Chatsworth", stock=K("office-palms"), dim=0.3, sfx=[('ep06-pop:0.3', '@{INV Brands}')],
     el='''''' + ILL + '''<Center y={430}><Split6 scale={0.6} at={0.2} left={{ title: "THE OLD SIGN", value: "MAZAL", color: C6.ink }} right={{ title: "THE SIGN NOW", value: "INV", color: C6.accent, at: @{INV Brands} }} /></Center>
<Center y={880}><In at={@{founded in}} from="fade"><Plate6 at={@{founded in}}><Label6 at={@{founded in}} size={36} color={C6.ink}>INNOVATION BRANDS · FOUNDED 2024 BY MAZAL'S OWNER + HUSBAND</Label6></Plate6></In></Center>'''),
dict(start="New name", sfx=[('ep06-boom:0.35', '@{Same address}')],
     el='''<CaseBoard title="NEW NAME · SAME ADDRESS" pins={[%s, %s, %s, %s, %s]} hub={{ label: "MAZAL GROUP", sub: "SIGN NOW SAYS: INV BRANDS", x: 960, y: 540, at: 0.1 }} />''' % (P_AA % 0.1, P_SF % 0.2, P_MB % 0.3, P_LA % 0.4, P_HI % 0.5)),

# ======================= PART 6 · ПРАВИЛА =======================
dict(start="So. House rules", stock=K("mall-terrace"), dim=0.4, hard=True, sfx=[('ep06-whoosh:0.2', '0.02')],
     el='''<Center y={540}><Words text="House rules" at={@{House rules}} size={130} hl={["rules"]} /></Center>'''),
dict(start="One. The sample", stock=K("mall-walkers"), sfx=[('ep06-pop:0.3', '0.2')],
     el='''<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>1 · TAKE THE SAMPLE. KEEP WALKING.</Label6></Plate6></Center>'''),
dict(start="Two. No chair", stock=K("door-handle"), sfx=[('t02-door:0.3', '@{No back room}')],
     el='''<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>2 · NO CHAIR. NO BACK ROOM.</Label6></Plate6></Center>'''),
dict(start="Three. No price", stock=K("shelf-pink"), sfx=[('ep06-pop:0.3', '0.2')],
     el='''<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>3 · GET THE TOTAL IN WRITING FIRST</Label6></Plate6></Center>'''),
dict(start="Four. Card declined", stock=K("card-phone-app"), sfx=[('t02-declined:0.3', '0.4')],
     el='''<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>4 · DECLINED? DON'T HAND OVER CARD #2. LEAVE.</Label6></Plate6></Center>'''),
dict(start="Five. Don't count", stock=K("phone-in-hand"), dim=0.3, sfx=[('ep06-pop:0.3', '@{cooling off rule}')],
     el='''<Center y={800}><In at={@{cooling off rule}} from="fade"><Plate6 at={@{cooling off rule}} pad="28px 50px"><Col gap={16} align="flex-start">
  <Label6 at={@{cooling off rule}} size={38} color={C6.ink}>FTC COOLING-OFF RULE · 3 DAYS</Label6>
  <Label6 at={@{your home}} size={38} color={C6.money}>YOUR HOME, A TEMPORARY SPOT ✓</Label6>
  <Label6 at={@{permanent location}} size={38} color={C6.loss}>A STORE'S PERMANENT LOCATION ✗</Label6>
</Col></Plate6></In></Center>
<Source6 at={@{cooling off rule}}>FTC · consumer.ftc.gov</Source6>'''),
dict(start="Your real exit", stock=K("older-man-card-phone"), sfx=[('ep06-pop:0.3', '0.2')],
     el='''<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>5 · DISPUTE WITH YOUR CARD COMPANY. FAST.</Label6></Plate6></Center>'''),
dict(start="And six", stock=K("daughter-father-talk"), alt=(K("elderly-hands-bills"), "A credit score"), sfx=[('ep06-pop:0.3', '0.3')],
     el='''<Center y={880}><In at={0.3} out={@{A credit score}} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={42} color={C6.ink}>6 · GLANCE AT YOUR PARENTS' STATEMENTS</Label6></Plate6></In></Center>'''),
dict(start="Michele's mom got", stock=K("daughter-mother-older"), clean=True, alt=(K("mall-corridor"), "A lot of people"), el=''),
dict(start="Has a mall kiosk", stock=K("seller-customer-counter"), dim=0.35,
     el='''<Center y={480}><Words text="What did they say first?" at={@{Tell me}} size={90} hl={["first?"]} maxW={1500} /></Center>
<Center y={760}><Label6 at={@{Tell me}} size={40} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Center>'''),
dict(start="And if you want to see", stock=K("cash-bill-table"), dim=0.45, end_pad=6.0, sfx=[('ep06-whoosh:0.25', '@{restaurants}')],
     el='''<Center y={420}><Words text="Who really gets your tip?" at={@{restaurants}} size={92} hl={["tip?"]} maxW={1600} /></Center>'''),
]
