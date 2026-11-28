import json
P = "https://videos.pexels.com/video-files/"
px = [
 ("furnace-sparks","6997856/6997856-hd_1920_1080_25fps.mp4"),
 ("steel-hyperlapse","19587106/19587106-uhd_2560_1440_25fps.mp4"),
 ("grinder-sparks","27928826/12266026_1920_1080_50fps.mp4"),
 ("workers-walking","5434220/5434220-hd_1920_1080_24fps.mp4"),
 ("town-dusk","33845060/14362861_2560_1440_60fps.mp4"),
 ("main-street","33845052/14362885_2560_1440_60fps.mp4"),
 ("burger-bite","3120243/3120243-uhd_2560_1440_25fps.mp4"),
 ("burger-wrapper","8588704/8588704-uhd_2560_1440_30fps.mp4"),
 ("counting-pennies","7062994/7062994-hd_1920_1080_24fps.mp4"),
 ("child-coins","11211726/11211726-hd_1920_1080_24fps.mp4"),
 ("old-man-paper","5642575/5642575-hd_1920_1080_30fps.mp4"),
 ("workers-lunch","4296842/4296842-uhd_2560_1440_25fps.mp4"),
 ("mom-snacks","6264513/6264513-uhd_2560_1440_25fps.mp4"),
 ("boys-burgers","7236487/7236487-uhd_2732_1440_25fps.mp4"),
 ("ground-beef","7652403/7652403-uhd_2560_1440_25fps.mp4"),
 ("raw-meat","8477205/8477205-hd_1920_1080_24fps.mp4"),
 ("tennis-aerial","32278328/13765685_2560_1440_30fps.mp4"),
 ("tennis-empty","6808190/6808190-uhd_2560_1440_30fps.mp4"),
 ("suburb-aerial","4117521/4117521-uhd_2732_1440_24fps.mp4"),
 ("suburb-aerial2","26547061/11958337_2560_1440_30fps.mp4"),
 ("keys-hand","10375432/10375432-hd_1920_1080_30fps.mp4"),
 ("stock-screen","38725029/16451625_2560_1440_50fps.mp4"),
 ("dollar-bills","3977226/3977226-hd_1920_1080_30fps.mp4"),
 ("ten-dollar","6590468/6590468-uhd_2732_1440_25fps.mp4"),
 ("coins-jar","31602655/13465769_1920_1080_24fps.mp4"),
 ("cheese-slice","6658176/6658176-uhd_2732_1440_25fps.mp4"),
 ("cheeseburger-close","8879530/8879530-uhd_2732_1440_25fps.mp4"),
 ("gavel","6101367/6101367-uhd_2732_1440_30fps.mp4"),
 ("courthouse-indiana","40903701/17486538_1920_1080_30fps.mp4"),
 ("hospital-walk","8381605/8381605-uhd_2560_1440_25fps.mp4"),
 ("hospital-hall","5203510/5203510-hd_1920_1080_30fps.mp4"),
 ("coffee-cups","6938648/6938648-uhd_2732_1440_25fps.mp4"),
 ("receipts-woman","5981291/5981291-uhd_2732_1440_25fps.mp4"),
 ("longhorns","30259809/12972591_2560_1440_60fps.mp4"),
 ("cattle-aerial","17556777/17556777-uhd_2560_1440_24fps.mp4"),
 ("cowboys-herding","36499576/15476780_2560_1440_24fps.mp4"),
 ("dry-ground","6498490/6498490-uhd_2560_1440_24fps.mp4"),
 ("dry-riverbed","36034914/15281993_2560_1440_30fps.mp4"),
 ("fries-frying","35851610/15203374_2560_1440_30fps.mp4"),
 ("fries-strainer","8879803/8879803-uhd_2732_1440_25fps.mp4"),
 ("fastfood-crew","3371015/3371015-hd_1920_1080_30fps.mp4"),
 ("dt-going","6529448/6529448-hd_1920_1080_30fps.mp4"),
 ("dt-man-order","6529452/6529452-hd_1920_1080_30fps.mp4"),
 ("dt-empty","6529446/6529446-hd_1920_1080_30fps.mp4"),
 ("dt-card","6529570/6529570-hd_1920_1080_30fps.mp4"),
 ("bag-packing","7457401/7457401-hd_1920_1080_30fps.mp4"),
 ("delivery-hold","6895613/6895613-hd_1920_1080_25fps.mp4"),
 ("phone-use","5802035/5802035-hd_1920_1080_25fps.mp4"),
 ("counting-dollars","7710826/7710826-uhd_2732_1440_25fps.mp4"),
 ("clock-hands","854314/854314-hd_1920_1080_25fps.mp4"),
 ("clock-tick","7033607/uhd_25fps.mp4"),
 ("la-aerial","13908983/13908983-uhd_2560_1440_30fps.mp4"),
 ("tired-woman","9080637/9080637-uhd_2732_1440_25fps.mp4"),
 ("truck-driver","6685023/6685023-uhd_2560_1440_30fps.mp4"),
 ("vintage-street","32299853/13774719_1920_1080_30fps.mp4"),
 ("vintage-suburb","31811394/13553130_1920_1080_30fps.mp4"),
 ("vintage-family-car","32028328/13651865_1920_1080_30fps.mp4"),
 ("vintage-1970s","31966106/13621210_1920_1080_30fps.mp4"),
 ("vintage-football","32102515/13685679_1920_1080_30fps.mp4"),
 ("eating-alone-car","17846383/17846383-uhd_2560_1440_25fps.mp4"),
 ("big-burger-hold","4731139/4731139-uhd_2560_1440_30fps.mp4"),
 ("tear-money","8370532/8370532-hd_1920_1080_30fps.mp4"),
 ("doctor-wipe","5238688/5238688-hd_1920_1080_25fps.mp4"),
 ("woman-driving","13802593/13802593-uhd_2560_1440_25fps.mp4"),
 ("film-leader","31938875/13604878_1920_1080_30fps.mp4"),
 ("crt-tv","15069622/15069622-hd_1920_1080_24fps.mp4"),
 ("podium","6951978/6951978-uhd_2560_1440_25fps.mp4"),
 ("grill-burgers","13534836/13534836-hd_1920_1080_60fps.mp4"),
 ("cheeseburger-make","5907430/5907430-hd_1920_1080_25fps.mp4"),
 ("grill-flames","8522934/8522934-hd_1920_1080_30fps.mp4"),
]
TU = "https://thumb.wikimedia.org/wikipedia/commons/thumb/"; UP = "https://upload.wikimedia.org/wikipedia/commons/"
wm = [
 ("wm-bigmac", TU+"9/9a/Big_Mac_hamburger.jpg/1920px-Big_Mac_hamburger.jpg", "Big Mac hamburger.jpg — Evan-Amos — CC0"),
 ("wm-bigmac-museum", UP+"1/13/BigMacMuseum.jpg", "BigMacMuseum.jpg — CC0"),
 ("wm-uniontown", TU+"f/fa/Uniontown%2C_Pennsylvania_%282023%29.jpg/1920px-Uniontown%2C_Pennsylvania_%282023%29.jpg", "Uniontown, Pennsylvania (2023).jpg — WeaponizingArchitecture — CC BY-SA 4.0"),
 ("wm-homestead-night", TU+"5/56/HomesteadSteelWorksSmokestacksNightFromSteakhouse.jpg/1920px-HomesteadSteelWorksSmokestacksNightFromSteakhouse.jpg", "HomesteadSteelWorksSmokestacksNightFromSteakhouse.jpg — DanielPenfield — CC BY-SA 4.0"),
 ("wm-stockyards-1909", TU+"d/d0/Chicago_stockyards_cattle_pens_men_1909.jpg/1920px-Chicago_stockyards_cattle_pens_men_1909.jpg", "Chicago stockyards cattle pens men 1909.jpg — public domain"),
 ("wm-stockyards-1905", UP+"0/0d/NIE_1905_Chicago_-_stockyards.jpg", "NIE 1905 Chicago - stockyards.jpg — public domain"),
 ("wm-first-mcd", TU+"7/7a/First_McD_SBD.jpg/1920px-First_McD_SBD.jpg", "First McD SBD.jpg — Marykdan — CC BY-SA 4.0"),
 ("wm-first-mcd2", UP+"a/aa/First_McDonalds%2C_San_Bernardino%2C_California.jpg", "First McDonalds, San Bernardino, California.jpg — Cogart Strangehill — CC BY-SA 2.0"),
 ("wm-downey", TU+"7/72/Historic_Downey_McDonalds_and_Museum.jpg/1920px-Historic_Downey_McDonalds_and_Museum.jpg", "Historic Downey McDonalds and Museum.jpg — Northwalker — CC0"),
 ("wm-downey-loc", TU+"d/d2/McDonald%27s%2C_Downey%2C_California_LCCN2017709079.tif/lossy-page1-1920px-McDonald%27s%2C_Downey%2C_California_LCCN2017709079.tif.jpg", "McDonald's, Downey, California — John Margolies, Library of Congress — public domain"),
 ("wm-mcd-museum", UP+"c/c6/McDonalds_Museum.jpg", "McDonalds Museum.jpg — Bruce Marlin — CC BY-SA 2.5"),
 ("wm-speedee", TU+"a/a3/Speedee_is_back_at_McDonald%27s_on_FL_540_in_Winter_Haven.jpg/1920px-Speedee_is_back_at_McDonald%27s_on_FL_540_in_Winter_Haven.jpg", "Speedee is back at McDonald's on FL 540 in Winter Haven.jpg — DanTD — CC BY-SA 4.0"),
 ("wm-mcdouble", TU+"8/8d/McDonald%27s_McDouble.jpg/1920px-McDonald%27s_McDouble.jpg", "McDonald's McDouble.jpg — TheDapperDan — public domain"),
 ("wm-double-cheese", UP+"2/22/McDonald%27s_Double_Cheeseburger_%2821262495748%29.jpg", "McDonald's Double Cheeseburger (21262495748).jpg — Willis Lam — CC BY-SA 2.0"),
 ("wm-orlando-occ", TU+"6/61/Orange_County_Convention_Center-1.jpg/1920px-Orange_County_Convention_Center-1.jpg", "Orange County Convention Center-1.jpg — Visitor7 — CC BY-SA 3.0"),
 ("wm-macarthur", TU+"d/d1/MacArthur_Park%2C_Los_Angeles%2C_CA%2C_USA_-_panoramio_%285%29.jpg/1920px-MacArthur_Park%2C_Los_Angeles%2C_CA%2C_USA_-_panoramio_%285%29.jpg", "MacArthur Park, Los Angeles, CA, USA - panoramio (5).jpg — peter boy12qq12 — CC BY 3.0"),
 ("wm-ucla", TU+"c/c3/Ronald_Reagan_UCLA_Medical_Center.jpg/1920px-Ronald_Reagan_UCLA_Medical_Center.jpg", "Ronald Reagan UCLA Medical Center.jpg — Coolcaesar — CC BY 4.0"),
 ("wm-bk-whopperjr", TU+"2/23/Burger_King_Whopper_Jr._%2805-16-2021%29.jpg/1920px-Burger_King_Whopper_Jr._%2805-16-2021%29.jpg", "Burger King Whopper Jr. (05-16-2021).jpg — PaulGorduiz106 — CC BY-SA 4.0"),
]
reuse = {
 "t08": ["05-mcd-sign-close","06-mcd-night","07-drive-thru-night","08-burger-fries-table","11-fries-close","12-frying","13-potatoes","17-flying-dollars","18-meeting","21-drive-thru-pay","22-drive-thru-order","23-drive-thru-going","25-empty-drive-thru","30-eating-alone","33-boys-eating","35-phone-pay-meal","39-shocked-man","46-calculator","48-empty-wallet","55-paper-bag","57-burger-bite","58-sesame-bun","59-i95-connecticut","60-service-plaza","62-ct-manchester","63-ct-lisbon","64-menu-board-cc0","65-big-mac-meal","66-archive-mcd","67-value-burgers","69-kiosk","70-mcchicken","72-midnight-lineup","73-needles-ca","74-calverton-md","19-stock-screens","56-cola-ice","41-facepalm"],
 "t10": ["60-wm-bk-houston","15-grocery-checkout","11-cooking-pan"],
 "t06": ["53-delivery-bag","67-delivery-pay","49-courthouse","34-coins-fall","62-dollar-stack","61-phone-scroll"],
}
clips = []; n = 0
def nm(s):
    global n; n += 1; return f"{n:02d}-{s}"
for s, u in px: clips.append({"name": nm(s), "url": P + u})
for s, u, c in wm: clips.append({"name": nm(s), "photo": True, "url": u, "credit": c + " (Wikimedia Commons)"})
creds = {}
for ep in reuse:
    for c in json.load(open(f"/home/claude/hidden-margin-render/cloud/broll/{ep}.json"))["clips"]:
        creds[(ep, c["name"])] = c.get("credit")
for ep, L in reuse.items():
    for s in L:
        d = {"name": nm(("r-" + s.split("-", 1)[1])), "local": True, "from": f"public/broll/{ep}/{s}.mp4"}
        if creds.get((ep, s)): d["credit"] = creds[(ep, s)]
        clips.append(d)
json.dump({"out": "public/broll/t11", "sheet": "public/research/t11-sheet.jpg", "max_sec": 14, "clips": clips}, open("/home/claude/hidden-margin-render/cloud/broll/t11.json", "w"), indent=1, ensure_ascii=False)
print(len(clips))
