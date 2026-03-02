import os
import re
import yaml
import sys

def build_concepts(docs_dir):
    concepts = {}
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                basename = file[:-3]
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
                if match:
                    try:
                        frontmatter = yaml.safe_load(match.group(1))
                        if frontmatter and 'title' in frontmatter:
                            title = str(frontmatter['title']).lower()
                            concepts[title] = basename
                    except:
                        pass
                
                spaced_name = basename.replace('-', ' ')
                concepts[spaced_name.lower()] = basename

    sorted_concepts = sorted(concepts.keys(), key=len, reverse=True)
    ignore_list = ['ai', 'the', 'and', 'or', 'in', 'on', 'at', 'to', 'of', 'for', 'with', 'by', 'as', 'is', 'are', 'was', 'were', 'be', 'been', 'being']
    sorted_concepts = [c for c in sorted_concepts if len(c) > 3 and c not in ignore_list]
    
    return concepts, sorted_concepts

def apply_links(docs_dir, concepts, sorted_concepts):
    total_mapped = 0
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                parts = new_content.split('---\n', 2)
                if len(parts) == 3 and parts[0] == '':
                    frontmatter = '---\n' + parts[1] + '---\n'
                    body = parts[2]
                else:
                    frontmatter = ''
                    body = new_content
                    
                for concept in sorted_concepts:
                    target_file = concepts[concept]
                    if target_file == file[:-3]:
                        continue
                    
                    escaped_concept = re.escape(concept)
                    
                    def replace_func(m):
                        original_text = m.group(1)
                        # Avoid double-linking if the text happens to be a valid link target already 
                        # This happens safely because of the regex boundary, but just in case
                        return f"[[{target_file}|{original_text}]]"
                    
                    # Regex explanation:
                    # (?<!...) Negative lookbehind: ensure the term is NOT preceded by [, ], (, ), -, word characters, /, `, #, *, or _
                    # (?![...]) Negative lookahead: ensure the term is NOT followed by [, ], (, ), -, word characters, /, `, or _
                    # This safely isolates the term from existing markdown links, URLs, code blocks, or partial words.
                    pattern = re.compile(rf'(\[\[.*?\]\]|\[.*?\]\(.*?\)|\[.*?\])|(?<![\[\]\(\)\-\w/`#\*_])({escaped_concept})(?![\[\]\(\)\-\w/`_])', re.IGNORECASE)
                    
                    actual_replacements = 0
                    def replace_func(m):
                        nonlocal actual_replacements
                        if m.group(1):
                            return m.group(1)
                        actual_replacements += 1
                        original_text = m.group(2)
                        return f"[[{target_file}|{original_text}]]"
                    
                    body = pattern.sub(replace_func, body)
                    if actual_replacements > 0:
                        print(f"[{file}] Auto-linked '{concept}' -> [[{target_file}]] ({actual_replacements} times)")
                        total_mapped += actual_replacements
                
                if body != (parts[2] if len(parts)==3 else new_content):
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(frontmatter + body)
                        
    return total_mapped

if __name__ == "__main__":
    # Default to the docs directory, or allow passing a specific directory
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "docs"
    
    # Ensure absolute path for safety
    abs_target_dir = os.path.abspath(target_dir)
    print(f"Scanning directory: {abs_target_dir}")
    
    concepts, sorted_concepts = build_concepts(abs_target_dir)
    print(f"Built dictionary of {len(sorted_concepts)} concepts.")
    
    print("Applying links...")
    total_links = apply_links(abs_target_dir, concepts, sorted_concepts)
    print(f"\nFinished! Added {total_links} new links across the repository.")
