import os
import shutil
import re
from pathlib import Path

# ==========================================
# ⚙️ CONFIGURATION
# ==========================================

# 1. Source: Your Obsidian Vault Path
SOURCE_PATH = r"C:\Users\sayye\OneDrive\Documents\SecondBrain\second-brain" 

# 2. Destination: The '1_overview' folder in your Second Brain
DEST_BASE_PATH = Path("docs", "1_overview")

# 3. Assets: Where local images should be copied
ASSETS_PATH = Path("assets")

# Optional: Default icon if none provided
DEFAULT_ICON = "fas fa-file-alt"

# ==========================================
# 🛠️ HELPERS
# ==========================================

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
        
        # Simple line-by-line YAML parser
        for line in yaml_text.split('\n'):
            if ':' in line:
                key, value = line.split(':', 1)
                key = key.strip()
                value = value.strip()
                
                # Handle list syntax roughly (e.g., tags: [a, b])
                if value.startswith('[') and value.endswith(']'):
                    value = [v.strip() for v in value[1:-1].split(',') if v.strip()]
                
                metadata[key] = value
                
    return metadata, body

def find_extra_tags(body):
    """Finds inline tags like #tag in the body."""
    return re.findall(r'#(\w+)', body)

# ==========================================
# 🔄 TRANSFORMATION LOGIC
# ==========================================

def handle_images(body, dest_dir):
    """
    Finds ![[image.png]] or ![alt](image.png), copies image to assets, 
    and updates link to relative path based on destination directory depth.
    """
    
    def replacer(match):
        is_markdown_link = match.lastindex == 3 
        
        if is_markdown_link:
            alt_text = match.group(2)
            img_name = match.group(3)
        else:
            # WikiLink
            img_name = match.group(1).split('|')[0] 
            alt_text = match.group(1).split('|')[-1] if '|' in match.group(1) else img_name
            
        # Ignore external links
        if img_name.startswith('http'):
            return match.group(0)
            
        # Locate the image in source (recursive search)
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
            
            # Calculate Relative Path dynamically
            # We need path from dest_dir to ASSETS_PATH
            # Example: dest_dir = docs/1_overview/ai, ASSETS_PATH = assets
            # rel_path = ../../../assets
            
            # Convert both to absolute to be safe for relpath math, 
            # assuming we are running from repo root
            abs_dest = dest_dir.resolve() if dest_dir.is_absolute() else Path.cwd() / dest_dir
            abs_assets = ASSETS_PATH.resolve() if ASSETS_PATH.is_absolute() else Path.cwd() / ASSETS_PATH
            
            try:
                rel_path_to_assets = os.path.relpath(abs_assets, abs_dest)
                # Ensure forward slashes for markdown
                rel_path_str = Path(rel_path_to_assets).as_posix()
                return f"![{alt_text}]({rel_path_str}/{img_name})"
            except ValueError:
                # Fallback if paths match fails (e.g. cross drive)
                return f"![{alt_text}](../../../assets/{img_name})"
        else:
            print(f"   [WARN] Image not found: {img_name}")
            return match.group(0) 

    pattern = r'(!\[\[(.*?)\]\])|(!\[(.*?)\]\((.*?)\))'
    return re.sub(pattern, replacer, body)

def transform_content(file_path, dest_file_path):
    """
    Reads source, adds fm, transforms images, returns new content.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    metadata, body = parse_frontmatter(content)
    
    # Merge tags
    yaml_tags = metadata.get('tags', [])
    if isinstance(yaml_tags, str): 
        yaml_tags = [t.strip() for t in yaml_tags.split(',')]
    inline_tags = find_extra_tags(body)
    all_tags = list(set(yaml_tags + inline_tags))
    
    # Process Images (Need dest folder for relative path)
    new_body = handle_images(body, dest_file_path.parent)
    
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
    print("🚀 Starting Ingest Process (Directory Mirroring)...")
    print(f"Source: {SOURCE_PATH}")
    print(f"Dest: {DEST_BASE_PATH}")
    
    if not os.path.exists(SOURCE_PATH):
        print(f"❌ Error: Source path does not exist: {SOURCE_PATH}")
        return

    count = 0
    source_root = Path(SOURCE_PATH)
    
    # Walk through Source
    for file_path in source_root.rglob('*.md'):
        # Skip hidden files/dirs
        if '.git' in str(file_path) or file_path.name.startswith('.'):
            continue
            
        try:
            # 1. Calculate Relative Path
            # e.g., ai/note.md
            rel_path = file_path.relative_to(source_root)
            
            # 2. Construct Destination Path
            dest_file_path = DEST_BASE_PATH / rel_path
            
            # Ensure destination directory exists
            dest_file_path.parent.mkdir(parents=True, exist_ok=True)
            
            count += 1
            print(f"Processing: {rel_path} -> {dest_file_path}")
            
            # 3. Transform & Write
            final_content = transform_content(file_path, dest_file_path)
            
            with open(dest_file_path, 'w', encoding='utf-8') as f:
                f.write(final_content)
                
        except Exception as e:
            print(f"❌ Failed to process {file_path.name}: {e}")

    print(f"\n✅ Completed! Processed {count} notes.")

if __name__ == "__main__":
    run()
