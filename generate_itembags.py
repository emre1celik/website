import os
import sys
from collections import defaultdict
from lxml import etree as ET
import re

def normalize_bag_name(name: str) -> str:
    if not name:
        return name

    # remove .xml extension (anywhere, case-insensitive)
    name = re.sub(r"\.xml$", "", name, flags=re.IGNORECASE)

    # remove leading "Item" or "Monster"
    name = re.sub(r"^(Item|Monster)\s*", "", name)

    # remove any (number), (number,number), (number,number,number)
    name = re.sub(r"\(\d+(?:,\d+)*\)", "", name)

    # replace underscores with spaces
    name = name.replace("_", " ")

    # clean extra spaces
    name = re.sub(r"\s+", " ", name).strip()

    return name

def parse_bag(xml_path, drops):
    try:
        parser = ET.XMLParser(recover=True)
        tree = ET.parse(xml_path, parser)
        root = tree.getroot()
    except Exception as e:
        print(f"[WARN] Skipping {xml_path}: {e}")
        return

    # Get bag name from BagConfig
    bag_cfg = root.find("BagConfig")
    raw_name = bag_cfg.get("Name") if bag_cfg is not None else "ItemBag"
    bag_name = normalize_bag_name(raw_name)

    for drop in root.findall(".//Drop"):
        rate = int(drop.get("Rate", "0"))

        for item in drop.findall("Item"):
            name = item.get("Name")
            if not name:
                continue

            entry = drops[name]

            if entry["minLevel"] is None:
                entry["minLevel"] = 1

            # accumulate per bag
            entry["maps"][bag_name] = entry["maps"].get(bag_name, 0) + rate


def main():
    if len(sys.argv) != 2:
        print("Usage:")
        print("  python generate_itembags.py <ItemBagsFolder>")
        sys.exit(1)

    folder = sys.argv[1]
    if not os.path.isdir(folder):
        print("Folder not found.")
        sys.exit(1)

    drops = defaultdict(lambda: {"minLevel": None, "maps": {}})

    for file in os.listdir(folder):
        if file.lower().endswith(".xml"):
            parse_bag(os.path.join(folder, file), drops)

    lines = []
    lines.append("const drops = [")

    for item, data in sorted(drops.items()):
        safe_item = item.replace('"', '\\"')
        min_level = data["minLevel"] or 1

        lines.append(f'  {{ item: "{safe_item}", minLevel: {min_level}, maps: [')

        for bag_name, rate in sorted(data["maps"].items()):
            lines.append(
                f'      {{ name: "{bag_name}", rate: {rate} }},'
            )

        lines.append("    ] },")
    lines.append("];\n")
    lines.append("export default drops;")

    with open("itembags_drops.js", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"Generated itembags_drops.js with {len(drops)} items.")

if __name__ == "__main__":
    main()
