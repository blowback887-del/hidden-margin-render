"""Download voiceover parts, join with pauses, clean, normalise to -14 LUFS,
transcribe word timings. Usage: python cloud/voice/prepare.py cloud/voice/ep04.json"""
import json, subprocess, sys, os, re

cfg = json.load(open(sys.argv[1]))
os.makedirs("work", exist_ok=True)

def run(cmd):
    print("+", " ".join(cmd), flush=True)
    return subprocess.run(cmd, check=True, capture_output=True, text=True)

def dur(p):
    return float(run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p]).stdout)

parts = []
for p in cfg["parts"]:
    raw = f"work/p{p['part']}.mp3"
    run(["curl", "-sSfL", "-o", raw, p["url"]])
    wav = f"work/p{p['part']}.wav"
    # trim leading/trailing silence of each take so pauses are exactly pause_sec
    run(["ffmpeg", "-y", "-i", raw, "-af",
         "silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05,"
         "areverse,silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05,areverse",
         "-ar", "48000", "-ac", "1", wav])
    parts.append(wav)

sil = "work/sil.wav"
run(["ffmpeg", "-y", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", str(cfg["pause_sec"]), sil])

offsets, seq, t = [], [], 0.0
for i, w in enumerate(parts):
    offsets.append(t)
    seq.append(w); t += dur(w)
    if i < len(parts) - 1:
        seq.append(sil); t += cfg["pause_sec"]
with open("work/list.txt", "w") as f:
    for s in seq: f.write(f"file '{os.path.abspath(s)}'\n")
run(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", "work/list.txt", "-c", "pcm_s16le", "work/joined.wav"])

# gentle clean (TTS is already clean: no gate, no strong denoise) + two-pass loudnorm
chain = "highpass=f=70,acompressor=threshold=-20dB:ratio=2:attack=10:release=200"
m = run(["ffmpeg", "-i", "work/joined.wav", "-af", chain + ",loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json",
         "-f", "null", "-"]).stderr
j = json.loads(m[m.rindex("{"):m.rindex("}") + 1])
ln = (f"loudnorm=I=-14:TP=-1.5:LRA=11:measured_I={j['input_i']}:measured_TP={j['input_tp']}:"
      f"measured_LRA={j['input_lra']}:measured_thresh={j['input_thresh']}:offset={j['target_offset']}:linear=true")
os.makedirs(os.path.dirname(cfg["audio_out"]), exist_ok=True)
run(["ffmpeg", "-y", "-i", "work/joined.wav", "-af", chain + "," + ln + ",alimiter=limit=0.84",
     "-ar", "48000", "-ac", "2", "-b:a", "256k", cfg["audio_out"]])
check = run(["ffmpeg", "-i", cfg["audio_out"], "-af", "loudnorm=print_format=json", "-f", "null", "-"]).stderr
print("FINAL LOUDNESS", check[check.rindex("{"):], flush=True)
print("DURATION", dur(cfg["audio_out"]), "OFFSETS", offsets, flush=True)

from faster_whisper import WhisperModel
model = WhisperModel("medium.en", device="cpu", compute_type="int8")
segs, _ = model.transcribe(cfg["audio_out"], word_timestamps=True, beam_size=5, language="en",
                           vad_filter=False, condition_on_previous_text=False)
words = []
for s in segs:
    for w in s.words:
        st = round(w.start, 2)
        part = max(i + 1 for i, o in enumerate(offsets) if st >= o - 0.05) if st >= 0 else 1
        words.append({"text": w.word.strip(), "start": st, "end": round(w.end, 2), "part": part})
json.dump(words, open(cfg["words_out"], "w"), indent=0)
print("WORDS", len(words))
