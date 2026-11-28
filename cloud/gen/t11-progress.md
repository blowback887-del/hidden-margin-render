# T11 — монтаж, прогресс (пауза 28.11.2026, ~10:30 UTC)

## Готово
- Прочитаны «Монтаж и звук», «Техника», «Где остановились» T09/T10.
- cloud/broll/t11.json — 135 клипов: 70 Pexels (1–70), 18 фото Wikimedia (71–88, автор/лицензия в credit), 47 переиспользованных из t08/t10/t06 (89–135, local, файлы уже скопированы в public/broll/t11).
- cloud/broll/t11ev.json — 42 улики (LA Times через AOL/LV Sun, BLS, AgWeb 1951, NRN McDouble/BK, CBS McDeficit, mcspotlight Reuters 1997, LendingTree, McDonald's McValue 2026 через web.archive, AP/ABC AI-иск, Fortune картошка, Fox $2.50 McDouble, и др.).
- Живые кадры: 23 куска нарезаны (ffmpeg) в public/broll/t11/136–158-live-*.mp4 (без звука; FOX5 — ник в посте размыт; 4:3 — с полями). Список и credit — cloud/broll/t11-live.json, скрипт — cloud/broll/t11-cut.py. Источники: t11-01…t11-11 (D:\проекты ютуба\live-clips). t11-12…14 ещё не скачаны/не взяты.
- src/brand/t11.tsx — графика выпуска: Stopwatch/Watches (10/11/51 MIN, размытие blurAt/revealAt), PriceFlip (45¢→$6.22), TenSplit ($10 → 4 стопки), Jars (15¢/84¢), MenuSplit (UNDER $3 / BIG ARCH), TwoTags ($1 vs 55¢*), CheeseStack, DimeLoss, DollarPress, Division, FloorLine, CrackWord, MenuShrink, PostCard. Не проверено компиляцией.
- cloud/gen/t11-sentences.txt — тайминги всех предложений озвучки (опора для плана).

## Workflows в полёте (на момент паузы)
- 46134694110 — Fetch stock cloud/broll/t11.json (скачивает 1–88 + лист public/research/t11-sheet.jpg)
- 46134777888 — Fetch stock cloud/broll/t11ev.json (улики → public/evidence/t11, лист public/research/t11ev-evidence-sheet.jpg)
После них: git pull; проверить листы; NOT FOUND фразы — исправить по тексту страниц.

## Дальше (по порядку)
1. Дописать в cloud/broll/t11.json живые кадры из t11-live.json (append, local:true) — номера 136–158.
2. Улики T08 переиспользовать: скопировать public/evidence/t08/mcd-letter*, mcd-myths*, cbs-hikes* в public/evidence/t11 (найти $4.39/44% — OCR tesseract или finds вручную).
3. Написать cloud/gen/t11.py (comp "T11BigMac", parts=11, words src/videos/t11-bigmac-words.json, audio audio/t11-voiceover.mp3, brand ["t03","t07","t08","t10","t11"], образец t10.py; Drift-цикл в конце; ~230 сцен; ILLUSTRATIVE FOOTAGE на стоке под Мариам; ALLEGATION/ALLEGED у исков).
4. src/t11-entry.tsx + регистрация T11-Big-Mac в Root.tsx; t11-lens.json (ffprobe длины).
5. Музыка из public/audio/t06–t10 по главам (music_at, 18–20 дБ под голос).
6. build.py → листы кадров каждые ~2 с → зритель-контролёр → правки. Рендер НЕ запускать.
7. Отчёт Павлу: /home/claude/t11/edit-report.md.
