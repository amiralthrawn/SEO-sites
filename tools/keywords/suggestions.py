"""Longue traîne via DataForSEO Labs keyword_suggestions (France, français).

Usage : python3 tools/keywords/suggestions.py out/lighting "graine 1" "graine 2" ...
Coût : par graine ~0,01 $ + 0,0001 $ par mot-clé renvoyé (LIMIT=100 -> ~0,02 $).
"""
import csv, json, sys, urllib.request, urllib.error
from pathlib import Path

API = "https://api.dataforseo.com/v3"
LIMIT = 100


def call(path, body):
    req = urllib.request.Request(API + path, data=json.dumps(body).encode(), headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            d = json.load(r)
    except urllib.error.HTTPError as e:
        d = json.load(e)
    if d.get("status_code") != 20000 or d["tasks"][0].get("status_code") != 20000:
        sys.exit(f"DataForSEO {d.get('status_code')}: {d.get('status_message')} / {d['tasks'][0].get('status_message') if d.get('tasks') else ''}")
    return d


def main(out_dir, *seeds):
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    rows, total = {}, 0.0
    for seed in seeds:
        d = call("/dataforseo_labs/google/keyword_suggestions/live", [{
            "keyword": seed,
            "location_code": 2250,
            "language_code": "fr",
            "include_seed_keyword": True,
            "include_serp_info": True,
            "limit": LIMIT,
            "order_by": ["keyword_info.search_volume,desc"],
        }])
        total += d.get("cost") or 0
        items = (d["tasks"][0]["result"] or [{}])[0].get("items") or []
        print(f"{seed}: {len(items)} mots-clés, {d.get('cost')} $")
        for it in items:
            ki = it.get("keyword_info") or {}
            rows.setdefault(it["keyword"], [
                it["keyword"], seed, ki.get("search_volume"),
                (it.get("keyword_properties") or {}).get("keyword_difficulty"),
                ki.get("cpc"),
                (it.get("search_intent_info") or {}).get("main_intent"),
                "|".join((it.get("serp_info") or {}).get("serp_item_types") or []),
            ])
    data = sorted(rows.values(), key=lambda r: -(r[2] or 0))
    with open(out / "longtail.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["keyword", "seed", "volume", "difficulty", "cpc_eur", "intent", "serp_types"])
        w.writerows(data)
    print(f"Total : {round(total, 4)} $ ; {len(data)} mots-clés -> {out / 'longtail.csv'}")


if __name__ == "__main__":
    main(sys.argv[1], *sys.argv[2:])
