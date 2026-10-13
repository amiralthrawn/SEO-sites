"""Mots-clés longue traîne par graine via DataForSEO Labs keyword_suggestions (France, français).

Usage : python3 tools/keywords/suggest.py tools/keywords/seeds-wall.txt out/wall
Une tâche par graine (~0,01 $ + 0,0001 $ par mot-clé renvoyé, LIMIT par graine).
Contrairement à keyword_ideas, les résultats contiennent la graine : ils restent dans la niche.
Les identifiants sont injectés par le proxy de l'environnement : aucune clé ici.
"""
import csv, json, sys
from pathlib import Path

from run import call

LIMIT = 100


def main(seeds_file, out_dir):
    seeds = [l.strip() for l in Path(seeds_file).read_text().splitlines() if l.strip() and not l.startswith("#")]
    money = call("/appendix/user_data")["tasks"][0]["result"][0]["money"]
    print(f"Solde : {money.get('balance')} $")

    rows, seen, cost = [], set(), 0.0
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
        cost += d.get("cost") or 0
        res = (d["tasks"][0]["result"] or [{}])[0]
        items = ([res["seed_keyword_data"]] if res.get("seed_keyword_data") else []) + (res.get("items") or [])
        for it in items:
            kw = it.get("keyword") or res.get("seed_keyword")
            if kw in seen:
                continue
            seen.add(kw)
            ki = it.get("keyword_info") or {}
            rows.append([
                kw, seed,
                ki.get("search_volume"),
                (it.get("keyword_properties") or {}).get("keyword_difficulty"),
                ki.get("cpc"),
                (it.get("search_intent_info") or {}).get("main_intent"),
                "|".join((it.get("serp_info") or {}).get("serp_item_types") or []),
            ])
        print(f"{seed} : {len(items)} mots-clés")
    print(f"Coût total : {cost:.4f} $")

    rows.sort(key=lambda r: -(r[2] or 0))
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    with open(out / "longtail.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["keyword", "seed", "volume", "difficulty", "cpc_eur", "intent", "serp_types"])
        w.writerows(rows)
    print(f"{len(rows)} mots-clés -> {out / 'longtail.csv'}")


if __name__ == "__main__":
    main(*sys.argv[1:3])
