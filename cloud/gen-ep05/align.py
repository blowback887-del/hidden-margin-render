# Привязка слов сценария (тексты частей озвучки) к пословной расшифровке ep05-christmas-words.json
import json,re,difflib
R='/home/claude/hidden-margin-render'
norm=lambda t:re.sub(r"[^a-z0-9']","",t.lower().replace('’',"'"))
W=json.load(open(f'{R}/src/videos/ep05-christmas-words.json'))
# whisper пишет цифры — раскладываем такие токены как "цифра" и сопоставляем блоками
gt=[(norm(w['text']),w['start'],w['end']) for w in W if norm(w['text'])]
toks=[]
for i in range(1,8):
    for t in re.split(r"[\s—]+",open(f'{R}/cloud/voice/ep05-text/part{i}.txt').read()):
        for u in t.split('-'):
            if norm(u): toks.append((i,u,norm(u)))
a=[t[2] for t in toks]; b=[g[0] for g in gt]
sm=difflib.SequenceMatcher(a=a,b=b,autojunk=False)
st=[None]*len(a); en=[None]*len(a)
for i,j,n in sm.get_matching_blocks():
    for k in range(n): st[i+k]=gt[j+k][1]; en[i+k]=gt[j+k][2]
# несовпавшие (числа словами против цифр): берём соответствующий диапазон whisper из opcodes
for op,i1,i2,j1,j2 in sm.get_opcodes():
    if op in('replace',) and j2>j1:
        s0,e0=gt[j1][1],gt[j2-1][2]
        for k in range(i1,i2):
            fr=(k-i1)/max(1,i2-i1); fr2=(k-i1+1)/max(1,i2-i1)
            st[k]=round(s0+(e0-s0)*fr,2); en[k]=round(s0+(e0-s0)*fr2,2)
idx=[i for i in range(len(a)) if st[i] is not None]
for i in range(len(a)):
    if st[i] is None:
        p=max([x for x in idx if x<i],default=None); q=min([x for x in idx if x>i],default=None)
        if p is None: st[i]=en[i]=0
        elif q is None: st[i]=en[i]=en[p]
        else:
            fr=(i-p)/(q-p); st[i]=en[p]+(st[q]-en[p])*fr; en[i]=st[i]
TOK=[{'part':t[0],'w':t[1],'n':t[2],'s':round(st[i],2),'e':round(en[i],2)} for i,t in enumerate(toks)]
json.dump(TOK,open('/home/claude/ep05/gen/tokens.json','w'))
print(len(TOK),'tokens; end',TOK[-1]['e'])
