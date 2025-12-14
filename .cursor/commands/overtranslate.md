You are creating fresh translations of an i18n file in an Astro project, OVERWRITING any existing translations.

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
      - Read current source file
      - Translate ALL user-facing content to target locale
      - OVERWRITE the existing target file with fresh translation
      - Preserve all code structure, imports, components
   c. If equivalent file does NOT exist:
      - Report: "No [locale] equivalent found for [currentFile]"
      - Suggest filename based on nav utils patterns or AI inference
      - Ask: "Create [suggested-path] with full translation?"
      - Wait for user confirmation before creating

TRANSLATE (convert to target language):
- All user-facing text content
- Headings, paragraphs, button text
- Alt text for images
- Meta descriptions
- Frontmatter title/description
- Placeholder text
- Error messages shown to users

PRESERVE (never translate):
- Import statements
- Component names
- Variable names
- CSS class names
- HTML IDs
- Data attributes (data-*)
- URLs or route paths
- Code in script tags
- Technical props

MAINTAIN EXACT STRUCTURE:
- Same component hierarchy
- Same props and attributes
- Same CSS classes
- Same script logic
- Only text content changes

OUTPUT FORMAT:
Report what was translated: