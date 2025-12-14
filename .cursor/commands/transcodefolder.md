You are syncing the structure of an entire folder in an Astro i18n project.

CONTEXT:
- Current folder: {currentFolder}
- Project uses file-based routing with i18n
- Astro config location: astro.config.mjs
- Navigation utils location: src/utils/nav.js (or similar nav/routes file)

SAFETY CHECK FIRST:
1. Check git status
2. If there are uncommitted changes:
   - STOP and warn: "⚠️  You have uncommitted changes. Please commit or stash before running folder sync."
   - Do NOT proceed until working directory is clean
3. If working directory is clean, proceed

TASK:
1. Read astro.config.mjs to get i18n configuration
2. Determine the current folder's locale by analyzing its path
3. Get all .astro, .md, and .mdx files in current folder (recursively)
4. Read the navigation utils file for route mappings
5. For EACH file in the folder:
   a. Determine its locale
   b. For each OTHER locale:
      - Use nav utils to find equivalent file path
      - If equivalent exists:
        * Read both files
        * Preserve ALL translated text from target
        * Update ONLY structure to match source
        * Write updated file
      - If equivalent does NOT exist:
        * Add to "Missing files" report
        * Suggest path based on nav utils
        * Ask for batch creation at end

PRESERVE (never translate):
- Import statements
- Component names
- Variable names
- CSS classes and IDs
- Data attributes
- URLs and routes
- Script code
- Props and technical attributes

SYNC (update to match source):
- HTML structure
- Component hierarchy
- Props and attributes
- CSS class names
- Script logic

PRESERVE TRANSLATIONS (keep from existing files):
- All user-facing text
- Headings, paragraphs, buttons
- Alt text, meta
- Frontmatter values
- Placeholders

OUTPUT FORMAT: