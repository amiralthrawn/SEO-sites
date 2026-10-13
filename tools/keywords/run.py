"""Recherche de mots-clés via DataForSEO Labs (France, français).

Usage : python3 tools/keywords/run.py tools/keywords/seeds-lighting.txt out/lighting
Les identifiants sont injectés par le proxy de l'environnement : aucune clé ici.
Coût : 1 tâche keyword_ideas (~0,01 $ + 0,0001 $ par mot-clé renvoyé).
"""
import csv, json, sys, urllib.request, urllib.error
from pathlib import Path

API = "https://api.dataforseo.com/v3"
LIMIT = 1000  # ~0,11 $ max


def call(path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(API + path, data=data, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            d = json.load(r)
    except urllib.error.HTTPError as e:
        d = json.load(e)
    if d.get("status_code") != 20000:
        sys.exit(f"DataForSEO {d.get('status_code')}: {d.get('status_message')}")
    return d


def main(seeds_file, out_dir):
    seeds = [l.strip() for l in Path(seeds_file).read_text().splitlines() if l.strip() and not l.startswith("#")]
    money = call("/appendix/user_data")["tasks"][0]["result"][0]["money"]
    print(f"Solde : {money.get('balance')} $")

    d = call("/dataforseo_labs/google/keyword_ideas/live", [{
        "keywords": seeds[:200],
        "location_code": 2250,
        "language_code": "fr",
        "include_serp_info": True,
        "limit": LIMIT,
        "order_by": ["keyword_info.search_volume,desc"],
    }])
    print(f"Coût : {d.get('cost')} $")
    items = (d["tasks"][0]["result"] or [{}])[0].get("items") or []

    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    (out / "raw.json").write_text(json.dumps(items, ensure_ascii=False))
    with open(out / "keywords.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["keyword", "volume", "difficulty", "cpc_eur", "intent", "serp_types"])
        for it in items:
            ki = it.get("keyword_info") or {}
            w.writerow([
                it.get("keyword"),
                ki.get("search_volume"),
                (it.get("keyword_properties") or {}).get("keyword_difficulty"),
                ki.get("cpc"),
                (it.get("search_intent_info") or {}).get("main_intent"),
                "|".join((it.get("serp_info") or {}).get("serp_item_types") or []),
            ])
    print(f"{len(items)} mots-clés -> {out / 'keywords.csv'}")


if __name__ == "__main__":
    main(*sys.argv[1:3])
