import re
src=open('src/videos/T11BigMac.tsx').read()
beats=re.findall(r"\{ from: ([\d.]+), to: ([\d.]+),(.*?)back: (.*?), el: \(<>\n(.*?)\n</>\) \},", src, re.S)
for i,(a,b,_,back,el) in enumerate(beats):
    if back!='null' or '<Evidence' in el: continue
    ats=[float(x) for x in re.findall(r"\bat(?:=\{|: )([\d.]+)", el)]
    first=min(ats) if ats else 99
    if first>1.5: print(i+1, f"{float(a)//60:.0f}:{float(a)%60:04.1f}", "first element at", first)
