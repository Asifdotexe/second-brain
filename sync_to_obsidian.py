import os
import shutil
import argparse
from pathlib import Path

# CONFIGURATION
# Default Source: The docs directory in the current repo
SOURCE_ROOT = Path("docs")

# Default Assets Source
ASSETS_SOURCE = Path("assets")

# Default Destination: The User's Obsidian Vault (Mapped from ingest.py)
DEFAULT_DEST_VAULT = r"C:\Users\sayye\OneDrive\Documents\SecondBrain\second-brain"

def sync_notes(source_dir: Path, dest_vault: Path, dry_run: bool = False) -> None:
    """
    Syncs notes from source_dir to dest_vault.
    Logic:
    - docs/1_overview/X -> Vault/X
    - docs/Other/Y -> Vault/Other/Y
    """
    print(f"Scanning source: {source_dir}...")
    
    if not source_dir.exists():
        print(f"Error: Source directory {source_dir} does not exist.")
        return

    count = 0
    
    for file_path in source_dir.rglob('*'):
        if file_path.is_dir():
            continue
            
        # Skip hidden files and meta files
        if file_path.name.startswith('.') or file_path.name == '_meta.json':
            continue
            
        # Calculate relative path from docs/
        rel_path = file_path.relative_to(source_dir)
        
        # Determine Destination Path
        parts = rel_path.parts
        if parts[0] == "1_overview":
            # Strip 1_overview to map to Root
            dest_rel_path = Path(*parts[1:])
        else:
            # Keep structure for 2_logs, 3_library, etc.
            dest_rel_path = rel_path
            
        dest_file_path = dest_vault / dest_rel_path
        
        if dry_run:
            print(f"[DRY RUN] Would copy {rel_path} -> {dest_file_path}")
        else:
            try:
                dest_file_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(file_path, dest_file_path)
                print(f"Copied: {rel_path} -> {dest_file_path}")
                count += 1
            except Exception as e:
                print(f"Error copying {rel_path}: {e}")

    print(f"\nNotes Sync Complete. Processed {count} files.")

def sync_assets(assets_source: Path, dest_vault: Path, dry_run: bool = False) -> None:
    """
    Syncs the entire assets directory to Vault/assets
    """
    assets_dest = dest_vault / "assets"
    
    print(f"\nSyncing Assets from {assets_source} to {assets_dest}...")
    
    if not assets_source.exists():
        print("Assets source directory not found. Skipping.")
        return

    # Helper to copy directory recursively
    # shutil.copytree requires dest to NOT exist, or use dirs_exist_ok=True (Python 3.8+)
    
    if dry_run:
        print(f"[DRY RUN] Would sync assets content to {assets_dest}")
        # walk and print
        for p in assets_source.rglob('*'):
             if p.is_file():
                 rel = p.relative_to(assets_source)
                 print(f"[DRY RUN] Asset: {rel}")
        return

    try:
        shutil.copytree(assets_source, assets_dest, dirs_exist_ok=True)
        print("Assets synced successfully.")
    except Exception as e:
        print(f"Error syncing assets: {e}")

def main():
    parser = argparse.ArgumentParser(description="Sync notes from docs/ back to Obsidian Vault.")
    parser.add_argument("--vault", type=str, default=DEFAULT_DEST_VAULT, help="Path to the Obsidian Vault")
    parser.add_argument("--dry-run", action="store_true", help="Preview changes without executing")
    
    args = parser.parse_args()
    
    dest_vault = Path(args.vault)
    
    print("=== Sync to Obsidian ===")
    print(f"Source: {SOURCE_ROOT.resolve()}")
    print(f"Vault:  {dest_vault.resolve()}")
    if args.dry_run:
        print("MODE: DRY RUN (No changes will be made)")
    print("========================\n")
    
    if not dest_vault.exists():
        print(f"Error: Destination vault {dest_vault} does not exist.")
        return

    sync_notes(SOURCE_ROOT, dest_vault, args.dry_run)
    sync_assets(ASSETS_SOURCE, dest_vault, args.dry_run)

if __name__ == "__main__":
    main()
