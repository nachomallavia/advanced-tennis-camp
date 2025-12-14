You are creating fresh translations for an entire folder in an Astro i18n project, OVERWRITING existing translations.

CONTEXT:
- Current folder: {currentFolder}
- Project uses file-based routing with i18n
- Astro config location: astro.config.mjs
- Navigation utils location: src/utils/nav.js (or similar nav/routes file)

⚠️  WARNING: This will OVERWRITE all existing translations in the target locales.

SAFETY CHECK FIRST:
1. Check git status
2. If there are uncommitted changes:
   - STOP and warn: "⚠️  You have uncommitted changes. Please commit or stash before running folder retranslation."
   - Do NOT proceed until working directory is clean
3. If working directory is clean:
   - Show summary of what will be overwritten
   - Ask for explicit confirmation: "This will retranslate X files across Y locales. Continue? (y/n)"
   - Wait for confirmation before proceeding

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
        * Read source file
        * Translate ALL content to target locale
        * OVERWRITE existing file with fresh translation
        * Preserve code structure
      - If equivalent does NOT exist:
        * Add to "Missing files" report
        * Suggest path based on nav utils
        * Ask for batch creation at end

TRANSLATE (convert to target language):
- All user-facing text
- Headings, paragraphs, buttons
- Alt text
- Meta descriptions
- Frontmatter values
- Placeholders
- User-facing messages

PRESERVE (never translate):
- Import statements
- Component names
- Variables
- CSS classes/IDs
- Data attributes
- URLs/routes
- Script code
- Technical props

MAINTAIN STRUCTURE:
- Same components
- Same hierarchy
- Same props
- Same classes
- Same scripts
- Only text changes

OUTPUT FORMAT: