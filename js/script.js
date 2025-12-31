// ==========================================
// 🧠 THE KNOWLEDGE BASE (DATABASE)
// Hierarchy: Section -> Topic/Year (Sidebar) -> Blog/Week (Shelf)
// ==========================================
const wikiData = {
  // SECTION 1: OVERVIEW
  overview: {
    title: "Overview",
    items: [
      {
        // TOPIC 1
        id: "topic-cyber",
        title: "Cybersecurity",
        icon: "fas fa-shield-alt",
        desc: "Malware, Networks, Protocols",
        // BLOGS UNDER THIS TOPIC
        children: [
          {
            id: "blog-malware",
            title: "Malware Definitions",
            icon: "fas fa-bug",
            desc: "Ransomware, Trojans, and Worms explained.",
            tags: ["security", "malware"],
            content: `
# Malware Definitions

## Ransomware
Ransomware is a type of malicious software designed to block access to a computer system until a sum of money is paid.

**Common Variants:**
1. **LockBit**: Known for its speed of encryption.
2. **WannaCry**: Utilized the EternalBlue exploit.

## Trojan
A program that claims to do one thing but actually does damage when you run it.
                        `,
          },
          {
            id: "blog-network",
            title: "Network Security",
            icon: "fas fa-network-wired",
            desc: "Firewalls, VPNs, and Zero Trust.",
            content: `# Network Security \n\nContent coming soon...`,
          },
        ],
      },
      {
        // TOPIC 2
        id: "topic-ai",
        title: "AI & ML",
        icon: "fas fa-brain",
        desc: "LLMs, RAG, Agents",
        children: [
          {
            id: "blog-rag",
            title: "RAG Architecture",
            icon: "fas fa-database",
            desc: "Retrieval Augmented Generation basics.",
            content: `
# Retrieval Augmented Generation

RAG is a technique for enhancing the accuracy and reliability of generative AI models with facts fetched from external sources.

## Process Flow
1. **Retrieval**: System searches vector DB.
2. **Augmentation**: Context attached to prompt.
3. **Generation**: LLM answers.
                        `,
          },
          {
            id: "blog-agents",
            title: "AI Agents",
            icon: "fas fa-robot",
            desc: "Autonomous decision making models.",
            content: `# AI Agents \n\nContent coming soon...`,
          },
        ],
      },
      {
        // TOPIC 3
        id: "topic-tech",
        title: "General Tech",
        icon: "fas fa-microchip",
        desc: "Hardware, OS, News",
        children: [
          {
            id: "blog-hardware",
            title: "Hardware 2025",
            icon: "fas fa-memory",
            desc: "Latest in GPU and CPU tech.",
            content: `# Hardware \n\nContent coming soon...`,
          },
        ],
      },
    ],
  },

  // SECTION 2: LOGS
  logs: {
    title: "Logs",
    items: [
      {
        // YEAR 1
        id: "year-2025",
        title: "2025 Updates",
        icon: "far fa-calendar-alt",
        desc: "Weekly logs for 2025",
        children: [
          {
            id: "2025-w52",
            title: "Week 52",
            icon: "far fa-file-alt",
            desc: "Dec 22 - Dec 28",
            tags: ["weekly"],
            content: `
# Week 52, 2025
*December 22 - December 28*

## 🛡️ Cybersecurity
1. **Zero-Day in Chrome**
   - Google released a patch for **CVE-2025-XXXX**.

## 🤖 Artificial Intelligence
1. **Gemini 2.0 Released**
   - New multimodal capabilities.
                        `,
          },
        ],
      },
      {
        // YEAR 2
        id: "year-2026",
        title: "2026 Updates",
        icon: "far fa-calendar-alt",
        desc: "Weekly logs for 2026",
        children: [
          {
            id: "2026-w01",
            title: "Week 01",
            icon: "far fa-file-alt",
            desc: "Dec 29 - Jan 4",
            tags: ["weekly"],
            content: `
# Week 01, 2026
*December 29 - January 4*

## 🛡️ Cybersecurity
1. **SSH Terrapin Attack v2**
   - A new variation of the Terrapin attack.

## 🤖 Artificial Intelligence
1. **OpenAI Safety Report**
   - Released findings on model autonomy.
                        `,
          },
        ],
      },
    ],
  },
};

// ==========================================
// ⚙️ ENGINE
// ==========================================

const navTree = document.getElementById("navTree");
const contentDisplay = document.getElementById("contentDisplay");
const sidebar = document.getElementById("sidebar");
let currentDocId = null;

function init() {
  renderSidebar();
  // Default to first topic of first section
  const firstTopic = wikiData.overview.items[0].id;
  loadContent(firstTopic);
}

// Render Sidebar (Only Top Level Items: Topics & Years)
function renderSidebar() {
  navTree.innerHTML = "";

  Object.keys(wikiData).forEach((sectionKey) => {
    const section = wikiData[sectionKey];

    const sectionTitle = document.createElement("div");
    sectionTitle.className = "nav-section-title";
    sectionTitle.innerText = section.title;
    navTree.appendChild(sectionTitle);

    section.items.forEach((item) => {
      const navItem = document.createElement("div");
      navItem.className = "nav-item";
      navItem.dataset.id = item.id;
      navItem.onclick = () => loadContent(item.id);

      navItem.innerHTML = `
                <i class="${item.icon}"></i>
                <span>${item.title}</span>
            `;

      navTree.appendChild(navItem);
    });

    const spacer = document.createElement("div");
    spacer.style.height = "24px";
    navTree.appendChild(spacer);
  });
}

// Helper: Find item and its parent recursively
function findItemAndParent(id, items, parent = null) {
  for (let item of items) {
    if (item.id === id) return { item, parent };
    if (item.children) {
      const found = findItemAndParent(id, item.children, item);
      if (found) return found;
    }
  }
  return null;
}

// Helper: Find in whole DB
function lookup(id) {
  for (let key of Object.keys(wikiData)) {
    const found = findItemAndParent(id, wikiData[key].items);
    if (found) return found;
  }
  return null;
}

// Render Shelf Grid (For Topics or Years)
function renderShelf(item) {
  let html = `
        <div class="shelf-header">
            <h1 style="margin-bottom:0.5rem">${item.title}</h1>
            <p style="color:var(--text-secondary)">${item.desc || "Select an item below."}</p>
        </div>
        <div class="shelf-grid">
    `;

  item.children.forEach((child) => {
    html += `
            <div class="shelf-card" onclick="loadContent('${child.id}')">
                <i class="${child.icon} shelf-icon"></i>
                <div class="shelf-title">${child.title}</div>
                <div class="shelf-desc">${child.desc || ""}</div>
            </div>
        `;
  });
  html += `</div>`;
  return html;
}

function loadContent(id) {
  const result = lookup(id);
  if (!result) return;

  const { item, parent } = result;

  // UI Updates (Sidebar Active State)
  // If parent exists (we are in leaf), highlight parent. If no parent (we are in root), highlight item.
  const highlightId = parent ? parent.id : item.id;

  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));
  const activeNav = document.querySelector(
    `.nav-item[data-id="${highlightId}"]`,
  );
  if (activeNav) activeNav.classList.add("active");

  let htmlContent = "";

  // 1. Back Button (If we are deep)
  if (parent) {
    htmlContent += `
            <div class="back-link" onclick="loadContent('${parent.id}')">
                <i class="fas fa-arrow-left"></i> Back to ${parent.title}
            </div>
        `;
  }

  // 2. Render Tags
  if (item.tags) {
    htmlContent += "<div>";
    item.tags.forEach((tag) => {
      htmlContent += `<span class="tag-pill">#${tag}</span>`;
    });
    htmlContent += "</div>";
  }

  // 3. Logic: If it has children, render Shelf. If not, render Content.
  if (item.children && item.children.length > 0) {
    htmlContent += renderShelf(item);
  } else if (item.content) {
    htmlContent += marked.parse(item.content);
  } else {
    htmlContent += `<p>No content available.</p>`;
  }

  contentDisplay.innerHTML = htmlContent;

  if (window.innerWidth <= 768) {
    sidebar.classList.remove("open");
  }

  currentDocId = id;
  window.scrollTo(0, 0);
}

function filterDocs(query) {
  const term = query.toLowerCase();
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const text = item.innerText.toLowerCase();
    if (text.includes(term)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function toggleSidebar() {
  sidebar.classList.toggle("open");
}

// Initialize
init();
