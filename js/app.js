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
  initFuse();

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


  // --- EVENT DELEGATION: BREADCRUMBS ---
  const breadcrumbs = document.getElementById("breadcrumbs");
  if (breadcrumbs) {
    breadcrumbs.addEventListener("click", (e) => {
      const item = e.target.closest(".breadcrumb-item");
      // Use logical AND to ensure item matches and has dataset
      if (item && item.dataset.action) {
        e.preventDefault();
        const action = item.dataset.action;

        switch (action) {
          case "home":
            renderLandingPage();
            break;
          case "openSection":
            if (item.dataset.key) openSection(item.dataset.key);
            break;
          case "loadContent":
            if (item.dataset.id) loadContent(item.dataset.id);
            break;
        }
      }
    });
  }

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

  // Clear Breadcrumbs
  const breadcrumbs = document.getElementById("breadcrumbs");
  if (breadcrumbs) breadcrumbs.innerHTML = "";

  let html = `
        <div class="landing-container">
            <div class="landing-hero">
                <h1>Asif's Second Brain</h1>
                <p class="landing-subtitle">
                    A digital garden of thoughts, curated definitions, and evolving ideas.
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
                <div class="shelf-card" data-id="${item.id}">
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
  if (!id) return null;
  id = id.toLowerCase();
  for (let key of Object.keys(wikiData)) {
    if (wikiData[key].items) {
      const found = findItemAndParent(id, wikiData[key].items);
      if (found) return { ...found, rootKey: key };
    }
  }
  return null;
}

// ==========================================
// 🍞 BREADCRUMBS
// ==========================================

function getBreadcrumbPath(targetId) {
  for (let key of Object.keys(wikiData)) {
    const section = wikiData[key];
    const path = findPathInItems(targetId, section.items);
    if (path) {
      // Prepend Section Info
      return [{ title: section.title, isSection: true, key: key }, ...path];
    }
  }
  return [];
}

function findPathInItems(targetId, items) {
  for (let item of items) {
    if (item.id === targetId) return [item];
    if (item.children) {
      const childPath = findPathInItems(targetId, item.children);
      if (childPath) return [item, ...childPath];
    }
  }
  return null;
}

function renderBreadcrumbs(path) {
  const container = document.getElementById("breadcrumbs");
  if (!container) return;

  // Start with Home
  // Security Fix: Removed onclick, added data-action="home"
  let html = `
        <div class="breadcrumb-item" data-action="home">
            <i class="fas fa-home"></i>
        </div>
    `;

  path.forEach((step, index) => {
    // Separator
    html += `<span class="breadcrumb-separator">/</span>`;

    const isLast = index === path.length - 1;
    const activeClass = isLast ? "active" : "";

    // Determine data attributes
    let dataAttributes = "";
    if (!isLast) {
      if (step.isSection) {
        // Section: Action = openSection, Key = step.key
        dataAttributes = `data-action="openSection" data-key="${step.key}"`;
      } else {
        // Content: Action = loadContent, Id = step.id
        dataAttributes = `data-action="loadContent" data-id="${step.id}"`;
      }
    }

    html += `
            <div class="breadcrumb-item ${activeClass}" ${dataAttributes}>
                ${step.title}
            </div>
        `;
  });

  container.innerHTML = html;
}

// Helper: Render Markdown with Math Protection
function renderMarkdown(text) {
  if (!text) return "";

  // 1. Protect Math ($...$ and $$...$$)
  const mathBlocks = [];
  const protectedText = text.replace(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g, (match) => {
    mathBlocks.push(match);
    return `MATHBLOCKPLACEHOLDER${mathBlocks.length - 1}`;
  });

  // 2. Render Markdown
  let html = marked.parse(protectedText, {
    breaks: true,
    html: false, // Security: Disable raw HTML
  });

  // 3. Restore Math
  mathBlocks.forEach((block, index) => {
    html = html.replace(`MATHBLOCKPLACEHOLDER${index}`, block);
  });

  return html;
}

function loadContent(id) {
  const result = lookup(id);
  if (!result) return;

  const { item, parent, rootKey } = result;

  // --- 0. BREADCRUMBS ---
  const path = getBreadcrumbPath(id);
  renderBreadcrumbs(path);

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
    // Otherwise -> Use Shelf View
    // Priority: Custom View (from _meta.json) -> Root Key Default
    const viewType = item.view || (rootKey === "overview" ? "list" : "shelf");

    if (viewType === "list") {
      htmlContent += renderList(item);
    } else {
      // Check if we are in logs root (Year view) -> Render Calendar
      if (rootKey === "logs") {
        htmlContent += renderCalendar(item);
      } else {
        htmlContent += renderShelf(item);
      }
    }
  } else if (item.content) {

    // If we are in 'logs', use the custom Interactive Renderer
    if (rootKey === "logs") {
      htmlContent += renderLogEntry(item);
    } else {
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

      htmlContent += renderMarkdown(processedContent);
    }

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

  // --- 4. RENDER MATH (KaTeX) ---
  if (window.renderMathInElement) {
    renderMathInElement(contentDisplay, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }

  // Mobile: Close sidebar after selection
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("open");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (backdrop) backdrop.classList.remove("visible");
  }

  currentDocId = id;
  window.scrollTo(0, 0);
}

function renderCalendar(item) {
  const year = parseInt(item.title) || new Date().getFullYear();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Collect all available log dates (IDs) into a Set for fast lookup
  const availableDates = new Set();
  if (item.children) {
    item.children.forEach(child => {
      // IDs are expected to be 'YYYY-MM-DD'
      availableDates.add(child.id);
    });
  }

  let html = `
        <div class="shelf-header">
            <h1 style="margin-bottom:0.5rem">${item.title} Logs</h1>
            <p style="color:var(--text-secondary)">Select a date to view entries.</p>
        </div>
        <div class="calendar-year-container">
    `;

  months.forEach((monthName, monthIndex) => {
    html += `
            <div class="calendar-month">
                <div class="calendar-month-title">${monthName}</div>
                <div class="calendar-grid">
                    <div class="calendar-day-header">S</div>
                    <div class="calendar-day-header">M</div>
                    <div class="calendar-day-header">T</div>
                    <div class="calendar-day-header">W</div>
                    <div class="calendar-day-header">T</div>
                    <div class="calendar-day-header">F</div>
                    <div class="calendar-day-header">S</div>
        `;

    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstDayIndex = new Date(year, monthIndex, 1).getDay(); // 0 = Sunday

    // Empty cells before first day
    for (let i = 0; i < firstDayIndex; i++) {
      html += `<div class="calendar-day empty"></div>`;
    }

    // Days
    for (let day = 1; day <= daysInMonth; day++) {
      // Format: YYYY-MM-DD (ensure double digits)
      const mm = String(monthIndex + 1).padStart(2, '0');
      const dd = String(day).padStart(2, '0');
      const dateId = `${year}-${mm}-${dd}`;

      const hasNews = availableDates.has(dateId);
      const extraClass = hasNews ? 'has-news' : '';
      const dataAttr = hasNews ? `data-id="${dateId}"` : '';

      // Only add click handler (via data-id) if it has news
      // If we want empty days to do nothing, we just don't add data-id? 
      // Our event delegation checks for data-id. YES.

      html += `
                <div class="calendar-day ${extraClass} shelf-card" ${dataAttr} style="border-radius: var(--radius); padding:0;">
                    <span>${day}</span>
                    ${hasNews ? '<div class="calendar-marker"></div>' : ''}
                </div>
            `;
    }

    html += `</div></div>`; // Close grid and month
  });

  html += `</div>`; // Close container
  return html;
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

function renderLogEntry(item) {
  let html = `
          <div class="shelf-header">
              <h1 style="margin-bottom:0.5rem">${item.title}</h1>
              <p style="color:var(--text-secondary)">${item.desc || "Latest updates and logs."}</p>
          </div>
          <div class="log-container">
      `;

  const content = item.content || "";

  // Custom Parser: Split by H1 (#), H2 (##) or H3 (###) headers
  // We use a regex with capturing group to keep the delimiter and the rest
  // Regex: start of line, 1, 2 or 3 hashes, space, rest of line

  const chunks = content.split(/(^#{1,3}\s+.*$)/gm);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i].trim();
    if (!chunk) continue;

    // Check if it's a header line
    if (chunk.startsWith('#')) {
      const headerLevel = chunk.startsWith('### ') ? 3 : (chunk.startsWith('## ') ? 2 : 1);
      const title = chunk.replace(/^#+\s+/, '').trim();

      // Get the immediately following content body (next index)
      let bodyRaw = "";
      // Check if the next chunk exists and is not another header
      if (i + 1 < chunks.length && !chunks[i + 1].trim().startsWith('#')) {
        bodyRaw = chunks[i + 1].trim();
        i++; // Skip next iteration as we consumed it
      }

      if (headerLevel === 1) {
        // --- H1 (Page Title) ---
        // IGNORE THE TITLE (it is already rendered by the shelf-header)
        // But render the body (intro text) if any
        if (bodyRaw) {
          html += renderMarkdown(bodyRaw);
        }

      } else if (headerLevel === 2) {
        // --- RENDER SECTION HEADER ---
        html += `<h2 class="log-section-title">${title}</h2>`;

        // If body exists after H2 (intro text), render it
        if (bodyRaw) {
          html += renderMarkdown(bodyRaw);
        }

      } else {
        // --- RENDER NEWS CARD (H3) ---

        // 1. Extract Image (first image tag in body)
        let image = null;
        let date = null;
        let bodyClean = bodyRaw;

        const imgMatch = bodyRaw.match(/!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
          image = imgMatch[2];
          // Remove image from body
          bodyClean = bodyRaw.replace(imgMatch[0], '').trim();
        }

        // 2. Extract Date (Date: YYYY-MM-DD)
        // Case insensitive match for line starting with Date:
        const dateMatch = bodyClean.match(/^Date:\s*(.*)$/im);
        if (dateMatch) {
          const rawDate = dateMatch[1].trim();
          // Parse and format: YYYY-MM-DD -> Month Dayth, Year
          // We split manually to avoid timezone issues with new Date(string)
          const parts = rawDate.split('-');
          if (parts.length === 3) {
            const year = parseInt(parts[0]);
            const monthIndex = parseInt(parts[1]) - 1;
            const day = parseInt(parts[2]);

            // Get Month Name
            const dateObj = new Date(year, monthIndex, day);
            const monthName = dateObj.toLocaleString('default', { month: 'long' });

            // Get Ordinal Suffix
            const getSuffix = (d) => {
              if (d > 3 && d < 21) return 'th';
              switch (d % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
              }
            };

            date = `${monthName} ${day}${getSuffix(day)}, ${year}`;
          } else {
            // Fallback if not standard format
            date = rawDate;
          }

          // Remove date line from body
          bodyClean = bodyClean.replace(dateMatch[0], '').trim();
        }

        // 3. Fix WikiLinks
        const wikiLinkRegex = /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/g;
        const processedBody = bodyClean.replace(
          wikiLinkRegex,
          (match, id, _, label) => {
            const linkText = label || id;
            return `[${linkText}](${id.trim()})`;
          }
        );

        const renderedBody = renderMarkdown(processedBody);
        const imageStyle = image ? `background-image: url('${image}')` : '';

        html += `
                <div class="news-container ${image ? '' : 'no-image'}">
                    <div class="news-header-box" onclick="toggleNewsBody(this)">
                        ${image ? `<div class="news-thumb-small" style="${imageStyle}"></div>` : ''}
                        <div class="news-title-wrapper">
                            <div class="news-title-text">${title}</div>
                            ${date ? `<div class="news-date-badge">${date}</div>` : ''}
                        </div>
                        <i class="fas fa-chevron-down news-toggle-icon"></i>
                    </div>
                    <div class="news-body-content" style="display:none;">
                        ${renderedBody}
                    </div>
                </div>
            `;
      }
    } else {
      // Content appearing before any header? Render it normally
      if (i === 0) {
        html += renderMarkdown(chunk);
      }
    }
  }

  html += `</div>`;
  // Tags are handled globally in loadContent

  return html;
}

// Global toggle function
window.toggleNewsBody = function (header) {
  const container = header.closest('.news-container');
  const body = container.querySelector('.news-body-content');
  const icon = container.querySelector('.news-toggle-icon');

  if (body.style.display === 'none') {
    body.style.display = 'block';
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
    container.classList.add('expanded');
  } else {
    body.style.display = 'none';
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
    container.classList.remove('expanded');
  }
};



// ==========================================
// 🔍 DEEP SEARCH ENGINE
// ==========================================

// ==========================================
// 🔍 FUSE.JS SEARCH ENGINE
// ==========================================
let fuse;

function initFuse() {
  if (typeof Fuse === "undefined") {
    console.error("Fuse.js not loaded!");
    return;
  }

  // Flatten the wikiData for Fuse indexing
  const flatData = [];

  function flatten(items) {
    items.forEach((item) => {
      // Add item to index
      flatData.push({
        id: item.id,
        title: item.title,
        desc: item.desc || "",
        content: item.content || "",
        tags: item.tags || [],
        icon: item.icon,
      });

      // Recurse
      if (item.children) {
        flatten(item.children);
      }
    });
  }

  // Start flattening from root categories
  Object.keys(wikiData).forEach((key) => {
    if (wikiData[key].items) {
      flatten(wikiData[key].items);
    }
  });

  // Configure Fuse
  const options = {
    includeScore: true,
    threshold: 0.3, // 0.0 = Perfect match, 1.0 = Match anything. 0.3 is good for typos.
    keys: [
      { name: "title", weight: 3 }, // Title is most important
      { name: "tags", weight: 2 },  // Tags are second
      { name: "desc", weight: 1 },  // Description is third
      { name: "content", weight: 0.5 }, // Content is least important (noise)
    ],
  };

  fuse = new Fuse(flatData, options);
}

function filterDocs(query) {
  const term = query.toLowerCase().trim();

  // 1. Reset if query is empty
  if (term.length < 2) {
    renderSidebar(); // Restore original hierarchy
    return;
  }

  // 2. Clear Sidebar
  navTree.innerHTML = "";

  // 3. Execute Fuse Search
  const fuseResults = fuse.search(term);

  // 4. Render Results Header
  const header = document.createElement("div");
  header.className = "nav-section-title";
  header.innerText = `Search Results (${fuseResults.length})`;
  navTree.appendChild(header);

  if (fuseResults.length === 0) {
    const noRes = document.createElement("div");
    noRes.style.padding = "0 24px";
    noRes.style.color = "var(--text-secondary)";
    noRes.style.fontSize = "0.9rem";
    noRes.innerText = "No matches found.";
    navTree.appendChild(noRes);
    return;
  }

  // 5. Render Results (Flat List)
  fuseResults.forEach((result) => {
    const item = result.item; // Fuse returns { item: {...}, score: ... }
    const navItem = document.createElement("div");
    navItem.className = "nav-item";
    navItem.dataset.id = item.id;

    // Add score for debugging (optional, useful to see how "fuzzy" it is)
    // const score = Math.round((1 - result.score) * 100); 

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

  // Execute Fuse Search
  const fuseResults = fuse.search(term);

  resultsContainer.innerHTML = "";

  if (fuseResults.length === 0) {
    resultsContainer.innerHTML = `<div style="color:var(--text-secondary); padding:10px;">No matches found.</div>`;
    return;
  }

  fuseResults.forEach((result) => {
    const item = result.item;
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
// --- GRAPH VIEW LOGIC ---
let graphNetwork = null;
const categoryColors = {
  ai: "#00d4ff",
  cybersecurity: "#ff4757",
  general: "#ced6e0",
  insurance: "#ffa502",
  philosophy: "#a55eea",
  psychology: "#2ed573",
  science: "#eccc68"
};

function toggleGraphView() {
  const mainContent = document.querySelector(".main-content");
  const graphContainer = document.getElementById("graphContainer");
  const toggleBtn = document.querySelector(".graph-toggle-btn");

  mainContent.classList.toggle("graph-mode");
  graphContainer.classList.toggle("active");
  toggleBtn.classList.toggle("active");

  if (graphContainer.classList.contains("active")) {
    renderGraph();
  } else if (graphNetwork) {
    graphNetwork.destroy();
    graphNetwork = null;
  }
}

function renderGraph() {
  const container = document.getElementById("graphContainer");
  const nodes = [];
  const edges = [];
  const seenNodes = new Set();
  const connectionCounts = {};

  // 1. Pre-process to count connections for scaling
  function countConnections(items) {
    if (!items) return;
    items.forEach(item => {
      if (!item.id || seenNodes.has(item.id)) return;
      seenNodes.add(item.id);
      connectionCounts[item.id] = (connectionCounts[item.id] || 0);

      if (item.children) {
        item.children.forEach(child => {
          connectionCounts[item.id]++;
          connectionCounts[child.id] = (connectionCounts[child.id] || 0) + 1;
          countConnections([child]);
        });
      }

      if (item.links) {
        item.links.forEach(linkId => {
          if (lookup(linkId)) {
            connectionCounts[item.id]++;
            connectionCounts[linkId] = (connectionCounts[linkId] || 0) + 1;
          }
        });
      }
    });
  }

  seenNodes.clear();
  Object.keys(wikiData).forEach(key => {
    if (wikiData[key] && wikiData[key].items) {
      countConnections(wikiData[key].items);
    }
  });

  // 2. Build items with scaling
  seenNodes.clear();
  const style = getComputedStyle(document.documentElement);
  const labelColor = style.getPropertyValue('--graph-label').trim() || "rgba(255,255,255,0.6)";
  const focusedLabelColor = style.getPropertyValue('--graph-label-focused').trim() || "rgba(255,255,255,1)";

  function processItems(items) {
    if (!items) return;
    items.forEach(item => {
      if (!item.id || seenNodes.has(item.id)) return;
      seenNodes.add(item.id);

      let color = "#94a3b8";
      if (item.group && categoryColors[item.group.toLowerCase()]) {
        color = categoryColors[item.group.toLowerCase()];
      }

      // Obsidian-style Scaling: Base size 4, scaling by sqrt of connections
      const size = 6 + Math.sqrt(connectionCounts[item.id] || 0) * 4;

      nodes.push({
        id: item.id,
        label: item.title,
        group: item.group,
        size: size,
        color: {
          background: color,
          border: color,
          highlight: { background: color, border: color },
          hover: { background: color, border: color }
        },
        font: {
          color: labelColor,
          size: 10,
          strokeWidth: 0,
          face: "Inter"
        },
        title: item.desc || item.title
      });

      if (item.children) {
        item.children.forEach(child => {
          edges.push({
            from: item.id,
            to: child.id,
            color: { opacity: 0.1, color: "#475569" },
            width: 1,
            dashes: true
          });
          processItems([child]);
        });
      }

      if (item.links) {
        item.links.forEach(linkId => {
          if (lookup(linkId)) {
            edges.push({
              from: item.id,
              to: linkId,
              color: { opacity: 0.2, color: color },
              width: 1
            });
          }
        });
      }
    });
  }

  Object.keys(wikiData).forEach(key => {
    if (wikiData[key] && wikiData[key].items) {
      processItems(wikiData[key].items);
    }
  });

  const data = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges)
  };

  const options = {
    nodes: {
      shape: "dot",
      borderWidth: 0,
      shadow: { enabled: true, color: "rgba(0,0,0,0.2)", size: 4 },
      font: { multi: true }
    },
    edges: {
      arrows: { to: { enabled: true, scaleFactor: 0.3 } },
      smooth: { type: "continuous" }
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 90,
        springConstant: 0.08
      },
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: {
        enabled: true,
        iterations: 1000,
        updateInterval: 100
      }
    },
    interaction: {
      hover: true,
      tooltipDelay: 300,
      zoomView: true,
      dragView: true
    }
  };

  if (graphNetwork) {
    graphNetwork.destroy();
  }
  graphNetwork = new vis.Network(container, data, options);

  // Stop physics once stabilized to prevent oscillation/floating
  graphNetwork.on("stabilized", function () {
    graphNetwork.setOptions({ physics: { enabled: false } });
  });

  // --- NEIGHBOR HIGHLIGHTING ---
  graphNetwork.on("hoverNode", function (params) {
    const hoveredNodeId = params.node;
    const neighbors = graphNetwork.getConnectedNodes(hoveredNodeId);
    const neighborEdges = graphNetwork.getConnectedEdges(hoveredNodeId);

    // Fade all nodes except neighbors and self
    const nodeUpdate = nodes.map(n => ({
      id: n.id,
      color: { opacity: (neighbors.includes(n.id) || n.id === hoveredNodeId) ? 1 : 0.1 },
      font: { color: (neighbors.includes(n.id) || n.id === hoveredNodeId) ? focusedLabelColor : "rgba(255,255,255,0)" }
    }));
    data.nodes.update(nodeUpdate);

    // Fade all edges except connected ones
    const edgeUpdate = data.edges.getIds().map(id => ({
      id: id,
      color: { opacity: neighborEdges.includes(id) ? 0.6 : 0.02 }
    }));
    data.edges.update(edgeUpdate);
  });

  graphNetwork.on("blurNode", function () {
    // Restore everything
    data.nodes.update(nodes.map(n => ({
      id: n.id,
      color: { opacity: 1 },
      font: { color: labelColor }
    })));
    data.edges.update(data.edges.getIds().map((id, idx) => ({
      id: id,
      color: { opacity: edges[idx].color.opacity }
    })));
  });

  // --- ZOOM-AWARE LABELS ---
  graphNetwork.on("zoom", function () {
    const scale = graphNetwork.getScale();
    if (scale < 0.6) {
      data.nodes.update(nodes.map(n => ({ id: n.id, font: { size: 0 } })));
    } else {
      data.nodes.update(nodes.map(n => ({ id: n.id, font: { size: 10 } })));
    }
  });

  graphNetwork.on("click", function (params) {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      toggleGraphView();
      loadContent(nodeId);
    }
  });

  graphNetwork.on("stabilizationIterationsDone", function () {
    graphNetwork.fit();
  });

  setupLegend(nodes, data);
}

function setupLegend(nodes, data) {
  const legendContainer = document.getElementById("graphLegend");
  if (!legendContainer) return;
  legendContainer.innerHTML = "";

  const activeGroups = [...new Set(nodes.map(n => n.group).filter(Boolean))];
  let activeFilter = null;

  activeGroups.forEach(group => {
    const item = document.createElement("div");
    item.className = "legend-item";
    const color = categoryColors[group.toLowerCase()] || "#94a3b8";

    item.innerHTML = `
            <div class="legend-color" style="background: ${color}"></div>
            <span>${group.toUpperCase()}</span>
        `;

    item.onclick = (e) => {
      e.stopPropagation();
      const isRemoving = activeFilter === group;
      activeFilter = isRemoving ? null : group;

      // Update UI
      document.querySelectorAll(".legend-item").forEach(i => i.classList.remove("active"));
      if (!isRemoving) item.classList.add("active");

      // Update Graph
      if (!activeFilter) {
        // Restore all
        data.nodes.update(nodes.map(n => ({
          id: n.id,
          color: { opacity: 1 },
          font: { color: "rgba(255, 255, 255, 0.4)" }
        })));
        data.edges.update(data.edges.getIds().map(id => ({
          id: id,
          color: { opacity: 0.08 }
        })));
      } else {
        // Focus category
        data.nodes.update(nodes.map(n => ({
          id: n.id,
          color: { opacity: n.group === activeFilter ? 1 : 0.05 },
          font: { color: n.group === activeFilter ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)" }
        })));
        data.edges.update(data.edges.getIds().map(id => {
          const edge = data.edges.get(id);
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          const isRelevant = fromNode?.group === activeFilter || toNode?.group === activeFilter;
          return {
            id: id,
            color: { opacity: isRelevant ? 0.4 : 0.01 }
          };
        }));
      }
    };

    legendContainer.appendChild(item);
  });
}
