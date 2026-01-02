# Second Brain

A personal knowledge base and second brain, built as a static site.

## Automated Deployment
This project uses **GitHub Actions** to automatically build and deploy to **GitHub Pages**.
- On every push to `main`, the workflow runs `python build.py` to regenerate the `js/data.js` file.
- The site is then deployed to GitHub Pages.

## Local Development
To run locally:
1. Run `python build.py` to generate the data.
2. Open `index.html` in your browser.