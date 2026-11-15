# RU01 «Аутлеты: скидка от цены, которой не было» — пробный ролик на русском для Павла (не для YouTube).
# Визуальная идея: бирка с тремя ценами, которые сгорают одна за другой; сквозной герой — Майк (стоки 1/2, фото 3/45).
# Главы: 1 Ценник → 2 Фабрика скидок → 3 Чем ты платишь → 4 Почему это работает. Финал возвращается к Майку.
# Номера стока = порядок в cloud/broll/ru01.json. Музыка — Фонотека YouTube (треки из Ep09).

EP = dict(
    comp="Ru01Outlets",
    words="src/videos/ru01-words.json",
    text="cloud/voice/ru01-text",
    parts=6,
    broll="cloud/broll/ru01.json",
    audio="audio/ru01-voiceover.mp3",
    voice_vol=0.85,
    music=[
        dict(**{'from': 0.0}, to=31.5, file="audio/ru01/music-trailer.mp3", vol=0.12),
        dict(**{'from': 31.0}, to=90.0, file="audio/ru01/music-r2.mp3", vol=0.11),
        dict(**{'from': 89.5}, to=142.0, file="audio/ru01/music-r3.mp3", vol=0.11),
        dict(**{'from': 141.5}, to=190.5, file="audio/ru01/music-r4.mp3", vol=0.11),
        dict(**{'from': 190.0}, to=270.0, file="audio/ru01/music-finale.mp3", vol=0.12),
    ],
    lens={},
)
import json, os
_l = os.path.join(os.path.dirname(__file__), "ru01-lens.json")
if os.path.exists(_l): EP["lens"] = {int(k): v for k, v in json.load(open(_l)).items()}

C1, C2, C3, C4 = (1, "Ценник"), (2, "Фабрика скидок"), (3, "Чем ты платишь"), (4, "Почему это работает")
KORS = "<Source6>Gattinella v. Michael Kors · Reuters, Quartz · 2015</Source6>"
CONG = "<Source6>Письмо 4 членов Конгресса в FTC · 30.01.2014</Source6>"
CHK = "<Source6>Consumers' Checkbook · 2026</Source6>"

S = [
# ---------------- ТРЕЙЛЕР ----------------
dict(start="Это Майк", sfx=[('ep06-pop:0.3', '0.3')], stock=1, el='''<Center y={260}><div style={{ scale: "1.25" }}><NameCard6 at={0.2} name="Майк" role="НЕ НАСТОЯЩИЙ · НО ТЫ ЕГО ЗНАЕШЬ" icon="person" /></div></Center>'''),
dict(start="На бирке написано", sfx=[('ep06-kaching:0.25', '@{Майк заплатил}')], stock=6, el='''<Center y={520}><Row gap={90}>
  <Plate6><BigNum at={@{сто двадцать}} icon="receipt" size={190} label="НА БИРКЕ" color={C6.ink}>$120</BigNum></Plate6>
  <Plate6><BigNum at={@{Майк заплатил}} icon="card" size={190} label="ЗАПЛАТИЛ">$80</BigNum></Plate6>
</Row></Center>'''),
dict(start="Сорок долларов чистой", sfx=[('ep06-stamp:0.4', '@{Майк гений}')], stock=3, clean=True, el='''<Center y={230}><Plate6><BigNum at={0.1} size={150} label="ЧИСТОЙ ЭКОНОМИИ" color={C6.money}>+$40</BigNum></Plate6></Center>
<Meme at={@{Майк гений}} text="гений экономии" y={900} />'''),
dict(start="Проблема одна", sfx=[('ep06-boom:0.25', '@{никогда}')], stock=4, el='''<Center y={540}><Plate6><Words text="Эти джинсы никогда не стоили $120." at={@{Эти джинсы}} size={92} hl={["никогда"]} maxW={1500} /></Plate6></Center>'''),
dict(start="Ни дня", sfx=[('ep06-stamp:0.4', '@{родились}')], stock=7, el='''<Center y={540}><Stamp at={@{родились}} text="родились со скидкой" color={C6.accent} size={110} /></Center>'''),
dict(start="Сегодня разберём", stock=8, el='''<Center y={540}><Plate6><Col gap={30}>
  <Label6 at={@{скидку от цены}} size={44} color={C6.ink}>1 · СКИДКА ОТ ЦЕНЫ, КОТОРОЙ НЕ БЫЛО</Label6>
  <Label6 at={@{Почему вещь}} size={44} color={C6.ink}>2 · ВЕЩЬ ЧАСТО НЕ ТА</Label6>
  <Label6 at={@{И как не}} size={44} color={C6.accent}>3 · КАК НЕ ПОПАСТЬСЯ</Label6>
</Col></Plate6></Center>'''),

# ---------------- ГЛАВА 1 · ЦЕННИК ----------------
dict(start="Глава первая", sfx=[('ep06-whoosh:0.25', '0.02')], tag=C1, hard=True, stock=11, el='''<Center y={540}><ChapterCard n={1} title="Ценник" label="Глава 1" /></Center>'''),
dict(start="История Майка почти", stock=12, el='''<Center y={540}><Plate6><Words text="История почти настоящая." at={0.1} size={100} hl={["настоящая."]} /></Plate6></Center>'''),
dict(start="Покупательница из Калифорнии", stock=5, el='''<Center y={540}><Plate6><Words text="Белые джинсы." at={@{белые джинсы}} size={110} /><Label6 at={@{в аутлете}} size={40} color={C6.accent}>КАЛИФОРНИЯ · АУТЛЕТ MICHAEL KORS</Label6></Plate6></Center>
''' + KORS),
dict(start="На бирке рекомендованная", sfx=[('ep06-receipt:0.3', '0.2'), ('ep06-pop:0.3', '@{Цена магазина}'), ('ep06-pop:0.3', '@{И ещё одна}')], stock=36, dim=0.35, el='''<Center y={540}><Plate6 pad="40px 60px"><Col gap={26} align="flex-start">
  <Row gap={60}><Label6 at={0.2} size={44} color={C6.ink}>РЕКОМЕНДОВАННАЯ</Label6><Label6 at={@{сто двадцать}} size={60} color={C6.loss}>$120</Label6></Row>
  <Row gap={60}><Label6 at={@{Цена магазина}} size={44} color={C6.ink}>ЦЕНА МАГАЗИНА</Label6><Label6 at={@{девяносто девять}} size={60} color={C6.blue}>$99.99</Label6></Row>
  <Row gap={60}><Label6 at={@{И ещё одна}} size={44} color={C6.ink}>ЕЩЁ СКИДКА</Label6><Label6 at={@{семьдесят девять}} size={60} color={C6.money}>$79.99</Label6></Row>
</Col></Plate6></Center>
''' + KORS),
dict(start="Три цены на одной", sfx=[('ep09-cheer:0.25', '@{Аттракцион}')], stock=51, clean=True, el='''<Meme at={@{Аттракцион}} text="аттракцион неслыханной щедрости" y={900} size={70} />'''),
dict(start="В две тысячи четырнадцатом она", sfx=[('ep06-boom:0.25', '@{коллективный иск}')], stock=16, el='''<Center y={330}><Plate6><Label6 at={@{коллективный иск}} size={48} color={C6.accent}>2014 · КОЛЛЕКТИВНЫЙ ИСК</Label6></Plate6></Center>
<Center y={720}><Plate6><Words text="Шили специально для аутлета." at={@{шили специально}} size={84} hl={["специально"]} maxW={1500} /></Plate6></Center>
''' + KORS),
dict(start="В две тысячи пятнадцатом", sfx=[('ep06-kaching:0.25', '@{четыре миллиона}'), ('ep06-stamp:0.35', '@{Вину не}')], stock=18, el='''<Center y={430}><Plate6><BigNum at={@{четыре миллиона}} icon="receipt" size={200} label="МИРОВОЕ СОГЛАШЕНИЕ · 2015">$4,88 млн</BigNum></Plate6></Center>
<Center y={830}><Stamp at={@{Вину не}} text="вину не признал" color={C6.loss} size={80} /></Center>
''' + KORS),
dict(start="Но пообещал заменить", sfx=[('ep06-pop:0.3', '@{вэлью}')], stock=20, el='''<Center y={540}><Split6 at={0.2} left={{ title: "БЫЛО НА БИРКЕ", value: "MSRP", color: C6.loss }} right={{ title: "СТАЛО", value: "VALUE", color: C6.accent, at: @{вэлью} }} /></Center>'''),
dict(start="Перевод с корпоративного", sfx=[('ep06-scratch:0.3', '@{Нам просто}')], stock=19, el='''<CorpSub at={0.2} corp="«Value»" human="нам просто нравится это число" />'''),

# ---------------- ГЛАВА 2 · ФАБРИКА СКИДОК ----------------
dict(start="Глава вторая", sfx=[('ep06-whoosh:0.25', '0.02')], tag=C2, hard=True, stock=22, el='''<Center y={540}><ChapterCard n={2} title="Фабрика скидок" label="Глава 2" /></Center>'''),
dict(start="Ты думаешь аутлет", sfx=[('ep06-stamp:0.35', '@{Так было}')], stock=48, el='''<Center y={380}><Plate6><Words text="Аутлет = склад остатков?" at={0.1} size={100} hl={["остатков?"]} /></Plate6></Center>
<Center y={760}><Stamp at={@{Так было}} text="так было раньше" color={C6.loss} size={90} /></Center>'''),
dict(start="В две тысячи четырнадцатом четверо", stock=25, el='''<Center y={540}><Plate6><Words text="Конгресс США → FTC" at={@{Конгресса США}} size={110} hl={["FTC"]} /><Label6 at={@{Федеральную}} size={38} color={C6.ink}>ЯНВАРЬ 2014 · ПРОСЬБА РАССЛЕДОВАТЬ АУТЛЕТЫ</Label6></Plate6></Center>
''' + CONG),
dict(start="По оценкам аналитиков", sfx=[('ep06-counter:0.3', '@{восьмидесяти пяти}')], stock=23, el='''<Center y={520}><Donut6 at={@{восьмидесяти пяти}} pct={85} center="85%+" label="СДЕЛАНЫ СПЕЦИАЛЬНО ДЛЯ АУТЛЕТОВ" /></Center>
''' + CONG),
dict(start="Коуч и производитель", sfx=[('ep06-pop:0.3', '0.3'), ('ep06-pop:0.3', '@{Туми}')], stock=27, dim=0.3, el='''<Center y={520}><Row gap={80}>
  <Plate6><BigNum at={0.3} icon="bag" size={170} label="COACH">85%</BigNum></Plate6>
  <Plate6><BigNum at={@{Туми}} icon="suitcase" size={170} label="TUMI">85%</BigNum></Plate6>
</Row></Center>
<Source6>BuzzFeed News, Business Insider · 2014</Source6>'''),
dict(start="А в аутлетах универмага", sfx=[('ep06-coin:0.3', '@{десять процентов}')], stock=24, el='''<Center y={430}><Plate6><BigNum at={@{десять процентов}} icon="store" size={210} label="ОСТАТКИ ИЗ SAKS · OFF 5TH, 2014">10%</BigNum></Plate6></Center>
<Center y={820}><Plate6><Label6 at={@{Остальное}} size={40} color={C6.accent}>ОСТАЛЬНОЕ — ПОД АУТЛЕТ</Label6></Plate6></Center>
<Source6>Business Insider · 2015</Source6>'''),
dict(start="То есть это не та", stock=42, el='''<Center y={380}><Plate6><Words text="Не та же сумка дешевле." at={0.1} size={90} /></Plate6></Center>
<Center y={720}><Plate6><Words text="Другая сумка. Тот же логотип." at={@{Это другая}} size={90} hl={["Другая"]} /></Plate6></Center>'''),
dict(start="Ты не поймал скидку", sfx=[('ep09-trombone:0.3', '@{Скидка поймала}')], stock=49, clean=True, el='''<Meme at={@{Скидка поймала}} text="скидка поймала тебя" y={900} />'''),

# ---------------- ГЛАВА 3 · ЧЕМ ТЫ ПЛАТИШЬ ----------------
dict(start="Глава третья", sfx=[('ep06-whoosh:0.25', '0.02')], tag=C3, hard=True, stock=31, el='''<Center y={540}><ChapterCard n={3} title="Чем ты платишь" label="Глава 3" /></Center>'''),
dict(start="Вещь для аутлета дешевле", stock=32, el='''<Center y={540}><Plate6><Words text="Дешевле в производстве." at={0.1} size={100} hl={["Дешевле"]} /></Plate6></Center>'''),
dict(start="Некоммерческая организация", sfx=[('ep06-pop:0.3', '@{сорок брендов}')], stock=37, el='''<Center y={430}><Plate6><BigNum at={@{сорок брендов}} icon="store" size={200} label="БРЕНДОВ ПРОВЕРИЛ CONSUMERS' CHECKBOOK">40</BigNum></Plate6></Center>
<Center y={830}><Plate6><Label6 at={@{Примерно у половины}} size={38} color={C6.accent}>≈ ПОЛОВИНА — ОТДЕЛЬНЫЙ, БОЛЕЕ ДЕШЁВЫЙ ТОВАР</Label6></Plate6></Center>
''' + CHK),
dict(start="Пример из их проверки", sfx=[('ep06-pop:0.3', '@{В аутлете подошва}')], stock=34, el='''<Center y={540}><Split6 at={@{В аутлете подошва}} left={{ title: "АУТЛЕТ · ПОДОШВА", value: "РЕЗИНА", color: C6.loss }} right={{ title: "УНИВЕРМАГ · ПОДОШВА", value: "КОЖА", color: C6.money, at: @{в универмаге} }} /></Center>
<Center y={130}><Label6 at={0.2} size={34} color={C6.ink}>МУЖСКИЕ ТУФЛИ COLE HAAN</Label6></Center>
''' + CHK),
dict(start="Ткань тоньше", stock=33, el='''<Center y={540}><Plate6><Col gap={28}>
  <Label6 at={@{Ткань тоньше}} size={54} color={C6.ink}>ТКАНЬ ТОНЬШЕ</Label6>
  <Label6 at={@{Подкладки нет}} size={54} color={C6.ink}>ПОДКЛАДКИ НЕТ</Label6>
  <Label6 at={@{Швы проще}} size={54} color={C6.ink}>ШВЫ ПРОЩЕ</Label6>
</Col></Plate6></Center>'''),
dict(start="Бирка та же", sfx=[('ep06-scratch:0.3', '@{Гордость Майка}')], stock=45, clean=True, el='''<Meme at={@{Гордость Майка}} text="гордость майка та же" y={900} />'''),
dict(start="И бренды это знают", stock=36, dim=0.3, el='''<Center y={540}><Plate6><Words text="Тайные знаки на этикетке." at={@{тайными знаками}} size={100} hl={["Тайные"]} /></Plate6></Center>'''),
dict(start="У Джей Крю", sfx=[('ep06-pop:0.3', '@{два ромбика}'), ('ep06-pop:0.3', '@{три точки}')], stock=13, el='''<Center y={540}><Row gap={80}>
  <Plate6><Col gap={18}><Label6 at={0.1} size={36} color={C6.ink}>J.CREW FACTORY</Label6><Label6 at={@{два ромбика}} size={84} color={C6.accent}>R ◆◆</Label6></Col></Plate6>
  <Plate6><Col gap={18}><Label6 at={@{У аутлета Гэп}} size={36} color={C6.ink}>GAP OUTLET</Label6><Label6 at={@{три точки}} size={84} color={C6.accent}>• • •</Label6></Col></Plate6>
</Row></Center>
<Source6>Business Insider · 2015</Source6>'''),
dict(start="Это не секрет фирмы", sfx=[('ep06-stamp:0.4', '@{секрет от тебя}')], stock=21, clean=True, el='''<Center y={820}><Stamp at={@{секрет от тебя}} text="секрет от тебя" color={C6.loss} size={96} /></Center>'''),

# ---------------- ГЛАВА 4 · ПОЧЕМУ ЭТО РАБОТАЕТ ----------------
dict(start="Глава четвёртая", sfx=[('ep06-whoosh:0.25', '0.02')], tag=C4, hard=True, stock=29, el='''<Center y={540}><ChapterCard n={4} title="Почему это работает" label="Глава 4" /></Center>'''),
dict(start="К концу того же", sfx=[('ep06-counter:0.3', '@{одиннадцати}')], stock=17, el='''<Center y={500}><Plate6><BigNum at={@{одиннадцати}} icon="receipt" size={210} label="КОЛЛЕКТИВНЫХ ИСКОВ · 7 БРЕНДОВ · 2014">11+</BigNum></Plate6></Center>
<Source6>Письмо сенаторов в FTC · 04.12.2014</Source6>'''),
dict(start="Бренды платили", stock=14, el='''<Center y={540}><Plate6><Words text="Заплатили. Сменили слова. Продолжили." at={0.1} size={84} hl={["Продолжили."]} maxW={1600} /></Plate6></Center>'''),
dict(start="Потому что ты едешь", sfx=[('ep06-whoosh:0.25', '0.2')], stock=39, el='''<Center y={540}><Plate6><Label6 at={@{Час в машине}} size={60} color={C6.accent}>ЧАС ЗА РУЛЁМ. РАДИ СКИДКИ.</Label6></Plate6></Center>'''),
dict(start="Уезжать с пустыми", stock=40, el='''<Center y={380}><Plate6><Words text="Уехать с пустыми руками обидно." at={0.1} size={86} maxW={1500} /></Plate6></Center>
<Center y={740}><Plate6><Words text="Он продаёт чувство, что ты выиграл." at={@{Он продаёт}} size={86} hl={["выиграл."]} maxW={1500} /></Plate6></Center>'''),
dict(start="Как не попасться", sfx=[('ep06-pop:0.3', '@{Первое}'), ('ep06-pop:0.3', '@{Второе}'), ('ep06-pop:0.3', '@{Третье}')], stock=12, dim=0.3, el='''<Center y={540}><Plate6 pad="40px 60px"><Col gap={34} align="flex-start">
  <Label6 at={@{Первое}} size={48} color={C6.ink}>1 · СМОТРИ НА ВЕЩЬ, А НЕ НА ЗАЧЁРКНУТУЮ ЦЕНУ</Label6>
  <Label6 at={@{Второе}} size={48} color={C6.ink}>2 · ИЩИ ТАЙНЫЕ ЗНАЧКИ НА ЭТИКЕТКЕ</Label6>
  <Label6 at={@{Третье}} size={48} color={C6.accent}>3 · СРАВНИ С ОБЫЧНЫМ МАГАЗИНОМ</Label6>
</Col></Plate6></Center>'''),
dict(start="Если там такой нет", sfx=[('ep06-stamp:0.4', '@{скидки не было}')], stock=10, clean=True, el='''<Center y={820}><Stamp at={@{скидки не было}} text="скидки не было" color={C6.loss} size={96} /></Center>'''),

# ---------------- ФИНАЛ ----------------
dict(start="А Майк", sfx=[('ep09-cheer:0.2', '0.3'), ('ep06-scratch:0.3', '@{Не говорите}')], stock=2, clean=True, el='''<Meme at={@{Не говорите}} text="не говорите ему" y={900} />'''),
dict(start="А вы покупали", stock=44, end_pad=4.0, el='''<Center y={420}><Plate6><Words text="Тебя тоже разводил аутлет?" at={0.1} size={96} hl={["разводил"]} /></Plate6></Center>
<Center y={760}><Label6 at={@{Напишите}} size={44} color={C6.accent}>НАПИШИ В КОММЕНТАРИЯХ</Label6></Center>'''),
]
