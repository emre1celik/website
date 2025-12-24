
import sys
from collections import defaultdict
from lxml import etree as ET

def parse_file(xml_path, map_name, drops):
    try:
        parser = ET.XMLParser(recover=True)
        tree = ET.parse(xml_path, parser)
        root = tree.getroot()
    except Exception as e:
        print(f"[WARN] Skipping {xml_path}: {e}")
        return

    for drop in root.findall("DropItem"):
        name = drop.get("Name")
        if not name:
            continue

        min_level = int(drop.get("MonsterMinLevel", "0"))
        if min_level <= 0:
            min_level = 1

        rate = int(drop.get("Rate", "0"))

        entry = drops[name]

        if entry["minLevel"] is None:
            entry["minLevel"] = min_level
        else:
            entry["minLevel"] = min(entry["minLevel"], min_level)

        # Deduplicate maps
        if map_name in entry["maps"]:
            entry["maps"][map_name] = max(entry["maps"][map_name], rate)
        else:
            entry["maps"][map_name] = rate

def main():
    if len(sys.argv) < 3 or len(sys.argv) % 2 == 0:
        print("Usage:")
        print("  python generate_drops_multi.py <xml1> <map1> [<xml2> <map2> ...]")
        sys.exit(1)

    args = sys.argv[1:]
    drops = defaultdict(lambda: {"minLevel": None, "maps": {}})

    for i in range(0, len(args), 2):
        xml_path = args[i]
        map_name = args[i + 1]
        parse_file(xml_path, map_name, drops)

    lines = []
    lines.append("const drops = [")

    for item, data in sorted(drops.items()):
        safe_item = item.replace('"', '\\"')
        min_level = data["minLevel"] if data["minLevel"] is not None else 1

        lines.append(f'  {{ item: "{safe_item}", minLevel: {min_level}, maps: [')

        for map_name, rate in sorted(data["maps"].items()):
            lines.append(
                f'      {{ name: "{map_name}", rate: {rate} }},'
            )

        lines.append("    ] },")
    lines.append("];\n")
    lines.append("export default drops;")

    with open("drops.js", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"Generated drops.js with {len(drops)} items across multiple maps.")

if __name__ == "__main__":
    main()
