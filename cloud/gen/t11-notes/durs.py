import re,json,sys
src=open('src/videos/T11BigMac.tsx').read()
beats=re.findall(r"\{ from: ([\d.]+), to: ([\d.]+),(.*?)back: (.*?), el: \(<>\n(.*?)\n</>\) \},", src, re.S)
sys.path.insert(0,'cloud/gen')
import importlib.util
spec=importlib.util.spec_from_file_location('p','cloud/gen/t11.py'); p=importlib.util.module_from_spec(spec); spec.loader.exec_module(p)
for i,(a,b,_,back,el) in enumerate(beats):
    d=float(b)-float(a); sc=p.S[i]
    kind='EV' if '<Evidence' in el else ('STK' if sc.get('stock') else 'GFX')
    alt='+alt' if sc.get('alt') else ''
    flag = '  <<' if (kind=='STK' and not alt and d>7) or (kind=='EV' and d>9) or (kind=='GFX' and d>11) else ''
    print(f"{i+1:3d} {float(a)//60:02.0f}:{float(a)%60:04.1f} {d:5.1f} {kind}{alt:5s} {sc['start'][:50]}{flag}")
