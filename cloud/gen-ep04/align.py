import json,re,difflib
norm=lambda t:re.sub(r"[^a-z0-9']","",t.lower().replace('’',"'"))
W=json.load(open('/home/claude/hidden-margin-render/src/videos/ep04-costco-words.json'))
gt=[(norm(w['text']),w['start'],w['end']) for w in W if norm(w['text'])]
toks=[]  # (beat, word, norm)
for l in open('/home/claude/ep04/script.md'):
    if l.startswith('B'):
        bid=l.split('|')[0].strip(); en=l.split('|')[1].replace('[PAUSE]',' ').replace('*','')
        for t in re.split(r"[\s—]+",en):
            for u in t.split('-'):
                if norm(u): toks.append((bid,u,norm(u)))
a=[t[2] for t in toks]; b=[g[0] for g in gt]
sm=difflib.SequenceMatcher(a=a,b=b,autojunk=False)
st=[None]*len(a); en=[None]*len(a)
for i,j,n in sm.get_matching_blocks():
    for k in range(n): st[i+k]=gt[j+k][1]; en[i+k]=gt[j+k][2]
# interpolate gaps
idx=[i for i in range(len(a)) if st[i] is not None]
for i in range(len(a)):
    if st[i] is None:
        p=max([x for x in idx if x<i],default=None); q=min([x for x in idx if x>i],default=None)
        if p is None: st[i]=en[i]=0
        elif q is None: st[i]=en[i]=en[p]
        else:
            fr=(i-p)/(q-p); st[i]=en[p]+(st[q]-en[p])*fr; en[i]=st[i]
TOK=[{'beat':t[0],'w':t[1],'n':t[2],'s':round(st[i],2),'e':round(en[i],2)} for i,t in enumerate(toks)]
json.dump(TOK,open('/home/claude/ep04/gen/tokens.json','w'))
# per beat
beats={}
for t in TOK: beats.setdefault(t['beat'],[t['s'],t['e']]); beats[t['beat']][1]=t['e']
for k,v in beats.items(): print(k,v)
