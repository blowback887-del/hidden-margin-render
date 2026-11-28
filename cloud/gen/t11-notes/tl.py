import re,json,sys,os
os.chdir('/home/claude/hidden-margin-render')
src=open('src/videos/T11BigMac.tsx').read()
beats=re.findall(r"\{ from: ([\d.]+), to: ([\d.]+),(.*?)back: (.*?), el: \(<>\n(.*?)\n</>\) \},", src, re.S)
c=json.load(open('cloud/broll/t11.json'))['clips']
sys.path.insert(0,'cloud/gen')
import importlib.util
spec=importlib.util.spec_from_file_location('p','cloud/gen/t11.py'); p=importlib.util.module_from_spec(spec); spec.loader.exec_module(p)
for i,(a,b,_,back,el) in enumerate(beats):
    sc=p.S[i]; ns=re.findall(r'n=\{(\d+)\}(?: from=\{([\d.]+)\})?',back)
    st=' '.join(c[int(n)-1]['name'].split('-',1)[1]+(f'@{f}' if f else '') for n,f in ns)
    evs=re.findall(r'name="([^"]+)"|src="evidence/t11/([^".]+)',el)
    ev=' '.join(x or y for x,y in evs)
    print(f"{i+1:3d} {float(a)//60:02.0f}:{float(a)%60:04.1f}-{float(b)//60:02.0f}:{float(b)%60:04.1f} [{st}] {('EV:'+ev) if ev else ''} | {sc['start'][:45]}")
