// ==========================================
// ⚙️ ENGINE (Logic Only)
// Note: 'wikiData' is already loaded from data.js
// ==========================================

const navTree = document.getElementById("navTree");
const contentDisplay = document.getElementById("contentDisplay");
const sidebar = document.getElementById("sidebar");
const themeToggle = document.getElementById("themeToggle");
let currentDocId = null;

// ==========================================
// 🚀 INITIALIZATION
// ==========================================

function setTheme(theme) {
  document.body.dataset.theme = theme;
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", theme === "dark");
  }
  localStorage.setItem("theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = saved || (prefersDark ? "dark" : "light");

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        document.body.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }
}

function init() {
  initTheme();

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
  // Handle clicks for Back Buttons, Shelf Cards, and Internal Links
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


    // 3. Handle List Item
    const listItem = e.target.closest(".list-item");
    if (listItem && listItem.dataset.id) {
      e.preventDefault();
      loadContent(listItem.dataset.id);
      return;
    }

    // 4. Handle Internal Links (e.g. [Link Text](doc-id))
    const link = e.target.closest("a");
    if (link) {
      const href = link.getAttribute("href");

      // If it's an external link (http/https/mailto) or anchor, let browser handle it
      if (!href || href.match(/^(http|https|mailto:|#)/)) {
        if (href && href.startsWith("http")) link.target = "_blank"; // Force new tab for external
        return;
      }

      // It's likely an internal ID. Try to find it in wikiData.
      // Decode URI to handle spaces (e.g. "Zero%20Trust" -> "Zero Trust")
      const targetId = decodeURIComponent(href);

      if (lookup(targetId)) {
        e.preventDefault();
        loadContent(targetId);
      }
    }
  });

  renderSidebar();

  // Handle Brand Clicks (Home)
  const brands = document.querySelectorAll(".brand, .mobile-brand");
  brands.forEach((el) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      renderLandingPage();
      if (window.innerWidth <= 768) {
        // specific for mobile brand click if we want to ensure sidebar state?
        // Actually sidebar brand is inside sidebar, mobile brand is in header.
        // If sidebar is open and we click sidebar brand -> close sidebar
        const sidebar = document.getElementById("sidebar");
        const backdrop = document.getElementById("sidebarBackdrop");
        if (sidebar.classList.contains("open")) {
          sidebar.classList.remove("open");
          if (backdrop) backdrop.classList.remove("visible");
        }
      }
    });
  });

  renderSidebar();
  renderLandingPage();
}

function renderLandingPage() {
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));
  currentDocId = null;

  let html = `
        <div class="landing-container">
            <div class="landing-hero">
                <h1>Asif's Second Brain</h1>
                <p class="landing-subtitle">
                    My personal knowledge base containing self-maintained definitions and 
                    concepts to prevent duplication of effort.
                </p>
            </div>
    `;

  Object.keys(wikiData).forEach((key) => {
    const section = wikiData[key];

    // Only render if there are items
    if (section && section.items && section.items.length > 0) {
      html += `
            <div class="landing-section">
                <h2 class="landing-section-title">${section.title}</h2>
                <div class="shelf-grid">
        `;

      section.items.forEach(item => {
        html += `
                <div class="shelf-card" onclick="loadContent('${item.id}')">
                    <i class="${item.icon || "far fa-file-alt"} shelf-icon"></i>
                    <div class="shelf-title">${item.title}</div>
                    <div class="shelf-desc">${item.desc || ""}</div>
                </div>
            `;
      });

      html += `
                </div>
            </div>
        `;
    }
  });

  html += `</div>`;
  contentDisplay.innerHTML = html;
  window.scrollTo(0, 0);
}

// Open the section in sidebar and load its first item
// Exposed to global scope for the onclick above
window.openSection = function (key) {
  const section = wikiData[key];
  if (section && section.items && section.items.length > 0) {
    loadContent(section.items[0].id);
  }
};

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
      if (found) return { ...found, rootKey: key };
    }
  }
  return null;
}

function loadContent(id) {
  const result = lookup(id);
  if (!result) return;

  const { item, parent, rootKey } = result;

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



  // C. Shelf vs List vs Article Logic
  if (item.children && item.children.length > 0) {
    // Check if we are in 'overview' (Topics) -> Use List View
    // Otherwise (e.g. 'logs') -> Use Shelf View
    if (rootKey === "overview") {
      htmlContent += renderList(item);
    } else {
      htmlContent += renderShelf(item);
    }
  } else if (item.content) {
    // --- WIKILINK SUPPORT ---
    // Convert [[id]] to [id](id) and [[id|Label]] to [Label](id)
    const wikiLinkRegex = /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/g;
    const processedContent = item.content.replace(
      wikiLinkRegex,
      (match, id, _, label) => {
        const linkText = label || id;
        return `[${linkText}](${id.trim()})`;
      },
    );

    // Security Fix: Disable raw HTML to prevent XSS
    htmlContent += marked.parse(processedContent, {
      breaks: true,
      html: false,
    });
  } else {
    htmlContent += `<p style="color:var(--text-secondary)">No content available.</p>`;
  }

  // B. Tags (If available) - Moved to Bottom
  if (item.tags && item.tags.length > 0) {
    htmlContent += "<div style='margin-top: 30px; border-top: 1px solid var(--border-color); padding-top: 20px;'>";
    item.tags.forEach((tag) => {
      htmlContent += `<span class="tag-pill">#${tag}</span>`;
    });
    htmlContent += "</div>";
  }

  // --- 3. RENDER ---
  contentDisplay.innerHTML = htmlContent;

  // Mobile: Close sidebar after selection
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("open");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (backdrop) backdrop.classList.remove("visible");
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

function renderList(item) {
  let html = `
          <div class="shelf-header">
              <h1 style="margin-bottom:0.5rem">${item.title}</h1>
              <p style="color:var(--text-secondary)">${item.desc || "Select a concept below."}</p>
          </div>
          <div class="list-container">
      `;

  item.children.forEach((child) => {
    html += `
              <div class="list-item" data-id="${child.id}">
                  <div class="list-content">
                    <div class="list-title">${child.title}</div>
                    <div class="list-desc">${child.desc || ""}</div>
                  </div>
                  <i class="fas fa-chevron-right list-arrow"></i>
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

function toggleMobileSearch() {
  const overlay = document.getElementById("mobileSearchOverlay");
  overlay.classList.toggle("open");
  const input = document.getElementById("mobileSearchInput");
  if (overlay.classList.contains("open")) {
    input.focus();
  } else {
    input.value = "";
    document.getElementById("mobileSearchResults").innerHTML = "";
  }
}

function handleMobileSearch(query) {
  const term = query.toLowerCase().trim();
  const resultsContainer = document.getElementById("mobileSearchResults");

  if (term.length < 2) {
    resultsContainer.innerHTML = "";
    return;
  }

  const results = [];

  function searchItems(items) {
    items.forEach((item) => {
      const matchTitle = item.title.toLowerCase().includes(term);
      const matchDesc = item.desc && item.desc.toLowerCase().includes(term);
      const matchContent =
        item.content && item.content.toLowerCase().includes(term);
      const matchTags =
        item.tags && item.tags.some((tag) => tag.toLowerCase().includes(term));

      if (matchTitle || matchDesc || matchContent || matchTags) {
        results.push(item);
      }

      if (item.children) {
        searchItems(item.children);
      }
    });
  }

  Object.keys(wikiData).forEach((key) => {
    if (wikiData[key].items) {
      searchItems(wikiData[key].items);
    }
  });

  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = `<div style="color:var(--text-secondary); padding:10px;">No matches found.</div>`;
    return;
  }

  results.forEach((item) => {
    const resultItem = document.createElement("div");
    resultItem.className = "nav-item"; // Reuse existing style
    resultItem.style.padding = "10px 0";
    resultItem.style.borderBottom = "1px solid var(--border-color)";
    resultItem.innerHTML = `
            <i class="${item.icon || "far fa-file"}"></i>
            <span>${item.title}</span>
        `;
    resultItem.addEventListener("click", () => {
      loadContent(item.id);
      toggleMobileSearch(); // Close overlay on selection
    });
    resultsContainer.appendChild(resultItem);
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  sidebar.classList.toggle("open");
  backdrop.classList.toggle("visible");
}

// Start the Engine
init();
