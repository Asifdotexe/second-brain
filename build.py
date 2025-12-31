"""
Module to build the markdown file into JSON objects
"""

import json
import os
import re

# Configuration
DOCS_DIR = "docs"
OUTPUT_FILE = "js/data.js"


# Helper: Parse Frontmatter from Markdown
# Looks for content between --- and ---
def parse_markdown(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Default metadata
    meta = {
        "id": os.path.splitext(os.path.basename(file_path))[0],
        "title": os.path.splitext(os.path.basename(file_path))[0]
        .replace("-", " ")
        .title(),
        "icon": "far fa-file-alt",  # Default icon
        "desc": "",
        "tags": [],
    }

    # Regex to find Frontmatter
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)", content, re.DOTALL)

    if match:
        frontmatter = match.group(1)
        markdown_body = match.group(2)

        # Simple key: value parser for Frontmatter
        for line in frontmatter.split("\n"):
            if ":" in line:
                key, value = line.split(":", 1)
                key = key.strip()
                value = value.strip()

                if key == "tags":
                    # Handle comma separated tags
                    meta["tags"] = [t.strip() for t in value.split(",")]
                else:
                    meta[key] = value

        return {**meta, "content": markdown_body}
    else:
        # No frontmatter, treat whole file as content
        return {**meta, "content": content}


# Helper: Get metadata for a folder (from _meta.json)
def get_folder_meta(folder_path):
    meta_path = os.path.join(folder_path, "_meta.json")
    defaults = {
        "id": os.path.basename(folder_path),
        "title": os.path.basename(folder_path).replace("_", " ").title(),
        "icon": "fas fa-folder",
        "desc": "",
    }

    if os.path.exists(meta_path):
        try:
            with open(meta_path, "r") as f:
                custom = json.load(f)
                defaults.update(custom)
        except FileNotFoundError:
            pass

    return defaults


# Recursive function to build tree
def build_tree(current_path):
    items = []

    # List all files and directories
    try:
        entries = sorted(os.listdir(current_path))
    except FileNotFoundError:
        print(f"Error: Directory '{current_path}' not found.")
        return []

    for entry in entries:
        full_path = os.path.join(current_path, entry)

        # Ignore hidden files/folders and meta files
        if entry.startswith(".") or entry == "_meta.json":
            continue

        if os.path.isdir(full_path):
            # It's a Category/Topic
            meta = get_folder_meta(full_path)
            children = build_tree(full_path)

            # Only add folder if it has content
            if children:
                items.append(
                    {
                        "id": meta["id"],
                        "title": meta["title"],
                        "icon": meta.get("icon", "fas fa-folder"),
                        "desc": meta.get("desc", ""),
                        "children": children,
                    }
                )

        elif entry.endswith(".md"):
            # It's an Article
            data = parse_markdown(full_path)
            items.append(data)

    return items


def main():
    print(f"🧠 Scanning '{DOCS_DIR}'...")

    if not os.path.exists(DOCS_DIR):
        os.makedirs(DOCS_DIR)
        print(f"Created empty {DOCS_DIR} folder.")

    # Level 1 Folders are the SECTIONS (Overview, Logs)
    wiki_data = {}

    sections = sorted(os.listdir(DOCS_DIR))

    for section_name in sections:
        section_path = os.path.join(DOCS_DIR, section_name)

        if os.path.isdir(section_path) and not section_name.startswith("."):
            # Get clean key (remove numbering like "1_Overview" -> "Overview")
            clean_key = section_name.split("_")[-1].lower()

            # Get Meta
            meta = get_folder_meta(section_path)

            # Build Children (Topics)
            items = build_tree(section_path)

            wiki_data[clean_key] = {"title": meta["title"], "items": items}

    # Write JS file
    js_content = f"const wikiData = {json.dumps(wiki_data, indent=4)};"

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"✅ Build complete! Data written to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
