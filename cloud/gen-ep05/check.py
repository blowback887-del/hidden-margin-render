import re
s=open('/home/claude/hidden-margin-render/src/videos/Ep05Christmas.tsx').read()
body=s[s.index('const BEATS'):s.index('const SFX')]
beats=re.split(r"\n  \{ from: ",body)[1:]
tot_live=0;tot=0
for i,b in enumerate(beats):
    a,c=map(float,re.match(r"([\d.]+), to: ([\d.]+)",b).groups()); d=c-a; tot+=d
    if re.search(r"<(Back|Stock|Burst|Split) ",b): tot_live+=d
    ats=[float(x) for x in re.findall(r"(?<![A-Za-z])(?:at|stop|thu|last|glow|up|down|rest|left|right|hl|due|min|v|loss|lock|e|j|s|c|a|b|d|cut)=\{([\d.]+)",b)]
    ats+=[float(x) for x in re.findall(r"\bat: ([\d.]+)",b)]
    ats+=[float(x) for x in re.findall(r"\[\d+, ([\d.]+)\]",b)]
    ats=sorted(set(ats)); late=[x for x in ats if x>d-1.0]
    pts=[0]+ats+[d]; gap=max(pts[k+1]-pts[k] for k in range(len(pts)-1))
    if late or gap>4.0: print(f"{i+1:2d} {a:7.2f} dur {d:5.1f} late {late} maxgap {gap:.1f}  {re.search(r'<[A-Z][A-Za-z]+',b.split('el: (<>')[1]).group(0)}")
print('live share',round(tot_live/tot,2))
