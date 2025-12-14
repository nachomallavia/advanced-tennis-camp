You are syncing the structure of an i18n file in an Astro project.

CONTEXT:
- Current file: {currentFile}
- Project uses file-based routing with i18n
- Astro config location: astro.config.mjs
- Navigation utils location: src/utils/nav.js (or similar nav/routes file)

TASK:
1. Read astro.config.mjs to get i18n configuration (defaultLocale, locales array, routing settings)
2. Determine the current file's locale by analyzing its path
3. Read the navigation utils file to find route mappings across locales
4. For each locale that is NOT the current file's locale:
   a. Use nav utils to find the equivalent file path in that locale
   b. If equivalent file exists:
      - Read both current file and target file
      - Preserve ALL translated text from target file
      - Update ONLY the HTML structure, imports, components, and props to match current file
      - Preserve frontmatter translations (title, description, etc.)
      - Write the updated file back
   c. If equivalent file does NOT exist:
      - Report: "No [locale] equivalent found for [currentFile]"
      - Ask: "Would you like to create [suggested-path] with full translation?"
      - Wait for user confirmation before creating

PRESERVE (never translate):
- Import statements
- Component names
- Variable names
- CSS classes and IDs
- Data attributes (data-*)
- URLs and route paths
- Code in <script> tags
- Props and technical attributes

SYNC (update to match source):
- HTML structure and hierarchy
- Component placement and nesting
- Props and attributes
- CSS class names
- Script logic

PRESERVE TRANSLATIONS (keep from existing target file):
- All user-facing text content
- Headings, paragraphs, button text
- Alt text, meta descriptions
- Frontmatter values
- Placeholder text

OUTPUT FORMAT:
Report what was updated: 