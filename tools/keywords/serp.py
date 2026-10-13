"""Top 10 Google (France, français) pour une liste de requêtes via DataForSEO SERP live.

Usage : python3 tools/keywords/serp.py candidats.txt sortie.json
Coût : ~0,002 $ par requête.
"""
import json, sys
from pathlib import Path

from run import call


def main(kw_file, out_file):
    kws = [l.strip() for l in Path(kw_file).read_text().splitlines() if l.strip() and not l.startswith("#")]
    out, cost = {}, 0.0
    for kw in kws:
        d = call("/serp/google/organic/live/regular", [{
            "keyword": kw, "location_code": 2250, "language_code": "fr", "depth": 10,
        }])
        cost += d.get("cost") or 0
        items = (d["tasks"][0]["result"] or [{}])[0].get("items") or []
        out[kw] = [{"rank": i.get("rank_group"), "domain": i.get("domain"), "title": i.get("title"), "url": i.get("url")}
                   for i in items if i.get("type") == "organic"]
        print(kw, "->", ", ".join(r["domain"] for r in out[kw]))
    Path(out_file).write_text(json.dumps(out, ensure_ascii=False, indent=1))
    print(f"Coût total : {cost:.4f} $")


if __name__ == "__main__":
    main(*sys.argv[1:3])
