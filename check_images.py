import urllib.request, json, urllib.parse, ssl, certifi

ctx = ssl.create_default_context(cafile=certifi.where())

def get_thumbs(titles):
    joined = "|".join(titles)
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(joined, safe='|:')}&prop=imageinfo&iiprop=url&iiurlwidth=500&format=json"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    data = json.loads(urllib.request.urlopen(req, context=ctx).read())
    results = {}
    for pid, page in data['query']['pages'].items():
        t = page.get('title', '')
        ii = page.get('imageinfo', [{}])
        thumb = ii[0].get('thumburl', None) if ii else None
        results[t] = thumb
    return results

# Batch 1: Replacement candidates
batch1 = [
    "File:Codex Manesse 052r Walther von Klingen.jpg",
    "File:Codex Manesse 362r Rudolf der Schreiber.jpg",
    "File:Codex Manesse 069r Werner von Teufen.jpg",
    "File:Codex Manesse Reinmar der Alte.jpg",
    "File:Dresdner Sachsenspiegel blatt 83.png",
    "File:Pieter Aertsen - Market Scene - Google Art Project.jpg",
    "File:Frederick III, Holy Roman Emperor (Burgkmair).jpg",
    "File:Heinrich 4 g.jpg",
    "File:Nuremberg chronicles - Burning of the Jews (CCXXv).jpg",
    "File:Late Medieval Trade Routes.jpg",
]
r1 = get_thumbs(batch1)
for t, u in sorted(r1.items()):
    print(f"{'OK' if u else 'MISSING'}: {t}")
    if u: print(f"  {u}")
    print()

# Batch 2: More replacements
batch2 = [
    "File:Courtyard facade - Maulbronn Monastery.jpg",
    "File:Holy Roman Empire 11th century map-en.svg",
    "File:Rohrbach-verbrennung-1525.jpg",
    "File:Benedictus-XII crusade.jpg",
    "File:The Moneylender and his Wife by Quinten Massijs.jpg",
]
r2 = get_thumbs(batch2)
for t, u in sorted(r2.items()):
    print(f"{'OK' if u else 'MISSING'}: {t}")
    if u: print(f"  {u}")
    print()

# Batch 3: Previously verified originals
batch3 = [
    "File:Codex Manesse Hartmann von Aue.jpg",
    "File:Escribano.jpg",
    "File:Les Très Riches Heures du duc de Berry mars.jpg",
    "File:Mendel I 100 v.jpg",
    "File:Pieter Bruegel the Elder - Peasant Wedding - Google Art Project 2.jpg",
    "File:Les Très Riches Heures du duc de Berry février.jpg",
    "File:Les Très Riches Heures du duc de Berry juin.jpg",
    "File:Mendel I 015 v.jpg",
    "File:Mendel I 029 v.jpg",
    "File:Mendel I 074 v.jpg",
]
r3 = get_thumbs(batch3)
for t, u in sorted(r3.items()):
    print(f"{'OK' if u else 'MISSING'}: {t}")
    if u: print(f"  {u}")
    print()

# Batch 4
batch4 = [
    "File:Nuremberg chronicles - Nuremberga.png",
    "File:Burg Eltz HDR.jpg",
    "File:Die Gartenlaube (1887) b 261.jpg",
    "File:Laurentius de Voltolina 001.jpg",
    "File:Nuremberg chronicles - NORIMBERGA.png",
]
r4 = get_thumbs(batch4)
for t, u in sorted(r4.items()):
    print(f"{'OK' if u else 'MISSING'}: {t}")
    if u: print(f"  {u}")
    print()
