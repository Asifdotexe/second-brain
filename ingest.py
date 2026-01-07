import os
import shutil
import re
from pathlib import Path

# Configuration
SOURCE_PATH = r"C:\Users\sayye\OneDrive\Documents\SecondBrain\second-brain" 
DEST_BASE_PATH = Path("docs", "1_overview")
ASSETS_PATH = Path("assets")

# Map Obsidian tags to destination subfolders
# Logic: Key = Tag, Value = Folder Name
TAG_MAPPING = {
    "cybersecurity": "cybersecurity",
    "ai": "ai",
    "iot": "iot",
}

DEFAULT_ICON = "fas fa-lock"


def get_destination_folder(tags):
    """
    Determines the destination folder based on the first matching tag.
    Returns: string (folder name) or None
    """
    if not tags:
        return None
    
    for tag in tags:
        clean_tag = tag.replace("#", "").lower()
        if clean_tag in TAG_MAPPING:
            return TAG_MAPPING[clean_tag]
    return None

def parse_frontmatter(content):
    """
    Extracts YAML frontmatter and content.
    Returns: dict (metadata), string (body)
    """
    # Regex to find YAML block at the start of file
    yaml_pattern = r"^---\s*\n(.*?)\n---\s*\n"
    match = re.match(yaml_pattern, content, re.DOTALL)
    
    metadata = {}
    body = content
    
    if match:
        yaml_text = match.group(1)
        body = content[match.end():]
        
        # Simple line-by-line YAML parser (avoids PyYAML dependency)
        for line in yaml_text.split('\n'):
            if ':' in line:
                key, value = line.split(':', 1)
                key = key.strip()
                value = value.strip()
                
                # Handle list syntax handling (e.g., tags: [a, b])
                if value.startswith('[') and value.endswith(']'):
                    value = [v.strip() for v in value[1:-1].split(',') if v.strip()]
                
                # Handle standard list syntax (simple case) doesn't work well 
                # with simple parser, relying on bracket syntax for now for simplicity
                
                metadata[key] = value
                
    return metadata, body

def find_extra_tags(body):
    """Finds inline tags like #tag in the body."""
    return re.findall(r'#(\w+)', body)

# ==========================================
# 🔄 TRANSFORMATION LOGIC
# ==========================================

def handle_images(body, source_file_path):
    """
    Finds ![[image.png]] or ![alt](image.png), copies image to assets, 
    and updates link to relative path.
    """
    
    # 1. Regex for WikiLinks: ![[image.png]]
    # 2. Regex for Markdown Links: ![alt](image.png)
    # We ignore external links (http)
    
    def replacer(match):
        is_markdown_link = match.lastindex == 3 # Group 3 is the path in markdown link
        
        if is_markdown_link:
            alt_text = match.group(2)
            img_name = match.group(3)
        else:
            # WikiLink
            img_name = match.group(1).split('|')[0] # Handle aliases ![[img|alt]]
            alt_text = match.group(1).split('|')[-1] if '|' in match.group(1) else img_name
            
        # Ignore external links
        if img_name.startswith('http'):
            return match.group(0)
            
        # Locate the image in source (Obsidian)
        # Assuming images are in the root or same folder or 'attachments' folder.
        # Simple recursive search in Source Path for the image filename
        img_source_path = None
        for path in Path(SOURCE_PATH).rglob(img_name):
            img_source_path = path
            break
            
        if img_source_path:
            # Copy to Assets
            if not ASSETS_PATH.exists():
                ASSETS_PATH.mkdir(parents=True)
                
            dest_img_path = ASSETS_PATH / img_name
            shutil.copy2(img_source_path, dest_img_path)
            print(f"   [IMAGE] Copied: {img_name}")
            
            # Rewrite Link: From 'docs/1_overview/category/note.md' to 'assets/img.png'
            # Depth is always 3 levels down from root (docs -> 1_overview -> category)
            # So path to assets is ../../../assets
            
            # BUT: This script runs from root, and the output path in markdown 
            # depends on where the markdown file lives relative to assets.
            # Docs are in: docs/1_overview/category/
            # Assets are in: assets/
            # Path: ../../../assets/image.png
            
            return f"![{alt_text}](../../../assets/{img_name})"
        else:
            print(f"   [WARN] Image not found: {img_name}")
            return match.group(0) # Return original

    # Pattern: ![[...]] OR ![...](...)
    pattern = r'(!\[\[(.*?)\]\])|(!\[(.*?)\]\((.*?)\))'
    return re.sub(pattern, replacer, body)

def transform_content(file_path, dest_folder_name):
    """
    Reads source, adds fm, transforms images, returns new content.
    """
    filename = file_path.name
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    metadata, body = parse_frontmatter(content)
    
    # helper: merge explicit tags with inline tags
    yaml_tags = metadata.get('tags', [])
    if isinstance(yaml_tags, str): 
        # Handle "tags: tag1, tag2" format roughly
        yaml_tags = [t.strip() for t in yaml_tags.split(',')]
        
    inline_tags = find_extra_tags(body)
    all_tags = list(set(yaml_tags + inline_tags))
    
    # Process Images
    new_body = handle_images(body, file_path)
    
    # Generate New Frontmatter
    title = metadata.get('title', file_path.stem.replace('-', ' ').title())
    
    # Construct YAML
    new_fm = "---\n"
    new_fm += f"title: {title}\n"
    new_fm += f"icon: {metadata.get('icon', DEFAULT_ICON)}\n"
    new_fm += "tags: [" + ", ".join(all_tags) + "]\n"
    new_fm += "---\n\n"
    
    return new_fm + new_body

# ==========================================
# 🚀 MAIN LOOP
# ==========================================

def run():
    print("🚀 Starting Ingest Process...")
    print(f"Source: {SOURCE_PATH}")
    print(f"Dest: {DEST_BASE_PATH}\n")
    
    if not os.path.exists(SOURCE_PATH):
        print(f"❌ Error: Source path does not exist: {SOURCE_PATH}")
        print("Please check the 'SOURCE_PATH' configuration in ingest.py")
        return

    count = 0
    
    # Walk through Source
    for file_path in Path(SOURCE_PATH).rglob('*.md'):
        # Skip if in .git or other excluded dirs (basic check)
        if '.git' in str(file_path): continue
        if file_path.name.startswith('.'): continue
        
        # 1. Parse for Tags to decide destination
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                # Read just enough to get tags usually, but files are small
                raw = f.read()
                
            meta, body = parse_frontmatter(raw)
            # Combine tags
            t1 = meta.get('tags', [])
            if isinstance(t1, str): t1 = [t1]
            t2 = find_extra_tags(body)
            tags = list(set(t1 + t2))
            
            # 2. Check Mapping
            dest_category = get_destination_folder(tags)
            
            if dest_category:
                # 3. Transform
                count += 1
                print(f"Processing: {file_path.name} -> {dest_category}")
                
                final_content = transform_content(file_path, dest_category)
                
                # 4. Write to Destination
                target_dir = DEST_BASE_PATH / dest_category
                target_dir.mkdir(parents=True, exist_ok=True)
                
                target_file = target_dir / file_path.name
                with open(target_file, 'w', encoding='utf-8') as f:
                    f.write(final_content)
                    
            else:
                # Optional: Verbose logging for skipped files
                # print(f"Skipping: {file_path.name} (No matching tags)")
                pass
                
        except Exception as e:
            print(f"❌ Failed to process {file_path.name}: {e}")

    print(f"\n✅ Completed! Processed {count} notes.")

if __name__ == "__main__":
    run()
