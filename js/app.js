// ==========================================
// ⚙️ ENGINE (Logic Only)
// Note: 'wikiData' is already loaded from data.js
// ==========================================

const navTree = document.getElementById("navTree");
const contentDisplay = document.getElementById("contentDisplay");
const sidebar = document.getElementById("sidebar");
let currentDocId = null;

// ==========================================
// 🚀 INITIALIZATION
// ==========================================

function init() {
  // Safety Check: Did data.js load?
  if (typeof wikiData === "undefined") {
    contentDisplay.innerHTML = `
            <div style="color:#ef4444; padding:20px; background:#fee2e2; border-radius:8px;">
                <h2>⚠️ Error: Data Not Found</h2>
                <p>The <code>wikiData</code> object is missing.</p>
                <p>Please run the python build script to generate it:</p>
                <pre style="background:#000; color:#fff; padding:10px; margin-top:10px; border-radius:4px;">python build.py</pre>
            </div>
        `;
    return;
  }

  // --- EVENT DELEGATION: SIDEBAR ---
  // Handle clicks for all .nav-item elements (Sidebar & Search Results)
  navTree.addEventListener("click", (e) => {
    const navItem = e.target.closest(".nav-item");
    if (navItem && navItem.dataset.id) {
      e.preventDefault();
      loadContent(navItem.dataset.id);
    }
  });

  // --- EVENT DELEGATION: MAIN CONTENT ---
  // Handle clicks for Back Buttons and Shelf Cards
  contentDisplay.addEventListener("click", (e) => {
    // 1. Handle Back Button
    const backLink = e.target.closest(".back-link");
    if (backLink && backLink.dataset.id) {
      e.preventDefault();
      loadContent(backLink.dataset.id);
      return;
    }

    // 2. Handle Shelf Card
    const shelfCard = e.target.closest(".shelf-card");
    if (shelfCard && shelfCard.dataset.id) {
      e.preventDefault();
      loadContent(shelfCard.dataset.id);
      return;
    }
  });

  renderSidebar();

  // Auto-load the first available item
  const firstSectionKey = Object.keys(wikiData)[0];
  if (firstSectionKey) {
    const firstSection = wikiData[firstSectionKey];
    if (firstSection.items && firstSection.items.length > 0) {
      loadContent(firstSection.items[0].id);
    }
  }
}

// ==========================================
// 🌲 SIDEBAR NAVIGATION
// ==========================================

function renderSidebar() {
  navTree.innerHTML = "";

  Object.keys(wikiData).forEach((sectionKey) => {
    const section = wikiData[sectionKey];

    // Section Header (e.g., OVERVIEW, LOGS)
    const sectionTitle = document.createElement("div");
    sectionTitle.className = "nav-section-title";
    sectionTitle.innerText = section.title || sectionKey.toUpperCase();
    navTree.appendChild(sectionTitle);

    // Render Top-Level Items (Topics/Years)
    if (section.items) {
      section.items.forEach((item) => {
        const navItem = document.createElement("div");
        navItem.className = "nav-item";
        // Security: Use data attribute instead of onclick
        navItem.dataset.id = item.id;

        navItem.innerHTML = `
                    <i class="${item.icon || "fas fa-folder"}"></i>
                    <span>${item.title}</span>
                `;

        navTree.appendChild(navItem);
      });
    }

    // Spacer between sections
    const spacer = document.createElement("div");
    spacer.style.height = "24px";
    navTree.appendChild(spacer);
  });
}

// ==========================================
// 📖 CONTENT LOADING (The "Router")
// ==========================================

// Helper: Find item and its parent recursively in a list
function findItemAndParent(targetId, items, parent = null) {
  for (let item of items) {
    // Found it?
    if (item.id === targetId) return { item, parent };

    // Has children? Search them.
    if (item.children) {
      const found = findItemAndParent(targetId, item.children, item);
      if (found) return found;
    }
  }
  return null;
}

// Helper: Search across all Sections in wikiData
function lookup(id) {
  for (let key of Object.keys(wikiData)) {
    if (wikiData[key].items) {
      const found = findItemAndParent(id, wikiData[key].items);
      if (found) return found;
    }
  }
  return null;
}

function loadContent(id) {
  const result = lookup(id);
  if (!result) return;

  const { item, parent } = result;

  // --- 1. HIGHLIGHT SIDEBAR ---
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));

  // Try finding exact match first (Search Mode or Top Level)
  let activeNav = document.querySelector(`.nav-item[data-id="${item.id}"]`);

  // If not found, try finding the parent (Normal Mode - Deep Navigation)
  if (!activeNav && parent) {
    activeNav = document.querySelector(`.nav-item[data-id="${parent.id}"]`);
  }

  if (activeNav) activeNav.classList.add("active");

  // --- 2. BUILD HTML CONTENT ---
  let htmlContent = "";

  // A. Back Button (Only if deep inside a topic)
  if (parent) {
    // Security Fix: Removed inline onclick, added data-id
    htmlContent += `
            <div class="back-link" data-id="${parent.id}">
                <i class="fas fa-arrow-left"></i> Back to ${parent.title}
            </div>
        `;
  }

  // B. Tags (If available)
  if (item.tags && item.tags.length > 0) {
    htmlContent += "<div>";
    item.tags.forEach((tag) => {
      htmlContent += `<span class="tag-pill">#${tag}</span>`;
    });
    htmlContent += "</div>";
  }

  // C. Shelf vs Article Logic
  if (item.children && item.children.length > 0) {
    htmlContent += renderShelf(item);
  } else if (item.content) {
    htmlContent += marked.parse(item.content);
  } else {
    htmlContent += `<p style="color:var(--text-secondary)">No content available.</p>`;
  }

  // --- 3. RENDER ---
  contentDisplay.innerHTML = htmlContent;

  // Mobile: Close sidebar after selection
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("open");
  }

  currentDocId = id;
  window.scrollTo(0, 0);
}

function renderShelf(item) {
  let html = `
        <div class="shelf-header">
            <h1 style="margin-bottom:0.5rem">${item.title}</h1>
            <p style="color:var(--text-secondary)">${item.desc || "Select an item below."}</p>
        </div>
        <div class="shelf-grid">
    `;

  item.children.forEach((child) => {
    // Security Fix: Removed inline onclick, added data-id
    html += `
            <div class="shelf-card" data-id="${child.id}">
                <i class="${child.icon || "far fa-file-alt"} shelf-icon"></i>
                <div class="shelf-title">${child.title}</div>
                <div class="shelf-desc">${child.desc || ""}</div>
            </div>
        `;
  });
  html += `</div>`;
  return html;
}

// ==========================================
// 🔍 DEEP SEARCH ENGINE
// ==========================================

function filterDocs(query) {
  const term = query.toLowerCase().trim();

  // 1. Reset if query is empty
  if (term.length < 2) {
    renderSidebar(); // Restore original hierarchy
    return;
  }

  // 2. Clear Sidebar
  navTree.innerHTML = "";
  const results = [];

  // 3. Recursive Search Function
  function searchItems(items) {
    items.forEach((item) => {
      // Check all fields
      const matchTitle = item.title.toLowerCase().includes(term);
      const matchDesc = item.desc && item.desc.toLowerCase().includes(term);
      const matchContent =
        item.content && item.content.toLowerCase().includes(term);
      const matchTags =
        item.tags && item.tags.some((tag) => tag.toLowerCase().includes(term));

      if (matchTitle || matchDesc || matchContent || matchTags) {
        results.push(item);
      }

      // Recurse
      if (item.children) {
        searchItems(item.children);
      }
    });
  }

  // 4. Execute Search
  Object.keys(wikiData).forEach((key) => {
    if (wikiData[key].items) {
      searchItems(wikiData[key].items);
    }
  });

  // 5. Render Results Header
  const header = document.createElement("div");
  header.className = "nav-section-title";
  header.innerText = `Search Results (${results.length})`;
  navTree.appendChild(header);

  if (results.length === 0) {
    const noRes = document.createElement("div");
    noRes.style.padding = "0 24px";
    noRes.style.color = "var(--text-secondary)";
    noRes.style.fontSize = "0.9rem";
    noRes.innerText = "No matches found.";
    navTree.appendChild(noRes);
    return;
  }

  // 6. Render Results (Flat List)
  results.forEach((item) => {
    const navItem = document.createElement("div");
    navItem.className = "nav-item";
    // Security: Use data attribute instead of onclick
    navItem.dataset.id = item.id;

    navItem.innerHTML = `
            <i class="${item.icon || "far fa-file"}"></i>
            <span>${item.title}</span>
        `;

    navTree.appendChild(navItem);
  });
}

function toggleSidebar() {
  sidebar.classList.toggle("open");
}

// Start the Engine
init();
