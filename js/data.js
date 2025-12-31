const wikiData = {
    "overview": {
        "title": "Overview",
        "items": [
            {
                "id": "cybersecurity",
                "title": "Cybersecurity",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "zero-trust",
                        "title": "Zero Trust Architecture",
                        "icon": "fas fa-lock",
                        "desc": "The \"never trust, always verify\" security model explained.",
                        "tags": [
                            "security",
                            "network",
                            "architecture"
                        ],
                        "content": "# Zero Trust Security\n\n**Zero Trust** is a strategic initiative that helps prevent successful data breaches by eliminating the concept of trust from an organization's network architecture.\n\n> \"Never trust, always verify.\"\n\n## Core Principles\n\n1. **Verify Explicitly**: Always authenticate and authorize based on all available data points (identity, location, device health).\n2. **Use Least Privilege Access**: Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA).\n3. **Assume Breach**: Minimize blast radius and segment access. Verify end-to-end encryption.\n\n## Traditional vs. Zero Trust\n\n| Traditional Security | Zero Trust |\n| :--- | :--- |\n| \"Castle and Moat\" | Identity-based perimeter |\n| Trust anyone inside | Trust no one, inside or out |\n| Static credentials | Continuous validation |\n\n## Implementation Example\n\nInstead of a VPN that gives access to the whole network, use an **Identity Aware Proxy**:\n\n```bash\n# Example policy logic\nif user.mfa_verified && device.is_managed:\n    allow_access(resource=\"database_prod\")\nelse:\n    deny_access()\n```\n"
                    }
                ]
            }
        ]
    },
    "logs": {
        "title": "Logs",
        "items": [
            {
                "id": "2025",
                "title": "2025",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "Week 51",
                        "title": "Week 51",
                        "icon": "fas fa-newspaper",
                        "desc": "Summary of 13 December - 19 December 2025.",
                        "tags": [
                            "security",
                            "network",
                            "architecture"
                        ],
                        "content": "# Week 51\n\n### CyberSecurity\n\n### Artificial Intelligence\n\n### General Technology\n"
                    },
                    {
                        "id": "Week 52",
                        "title": "Week 52",
                        "icon": "fas fa-newspaper",
                        "desc": "Summary of 20 December - 26 December 2025.",
                        "tags": [
                            "security",
                            "network",
                            "architecture"
                        ],
                        "content": "# Week 52\n\n### CyberSecurity\n\n### Artificial Intelligence\n\n### General Technology\n"
                    }
                ]
            },
            {
                "id": "2026",
                "title": "2026",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "Week 1",
                        "title": "Week 1",
                        "icon": "fas fa-newspaper",
                        "desc": "Summary of 26 December 2025 - 03 January 2026.",
                        "tags": [
                            "security",
                            "network",
                            "architecture"
                        ],
                        "content": "# Week 52\n\n### CyberSecurity\n\nWatchGuard Firebox Critical [Zero-day](docs\\1_overview\\cybersecurity\\zero-trust.md) Vulnerability Exploited\n\n- Hackers are actively attacking the critical vulnerability (CVE-2025-14733)\n\n### Artificial Intelligence\n\n### General Technology\n"
                    }
                ]
            }
        ]
    }
};