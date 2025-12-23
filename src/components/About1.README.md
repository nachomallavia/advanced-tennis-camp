# About1 Component - Astro Version

This is an Astro implementation inspired by the shadcnblocks "About 1" component.

## Features

- ✅ Fully responsive grid-based layout
- ✅ Clean typography hierarchy
- ✅ Icon-highlighted value cards
- ✅ Mission/Values/Objectives sections
- ✅ Customizable content via props
- ✅ Tailwind CSS styling
- ✅ No external dependencies (except Tailwind)

## Usage

```astro
---
import About1 from '@/components/About1.astro';
---

<About1
  title="About Us"
  description="Your company description"
  mission={{
    title: "Our Mission",
    description: "What drives us..."
  }}
  values={[
    {
      icon: "🎯",
      title: "Value Title",
      description: "Value description"
    }
  ]}
  objectives={[
    { text: "First objective" },
    { text: "Second objective" }
  ]}
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | "About Us" | Main heading |
| `description` | `string` | No | Default text | Intro paragraph |
| `mission` | `object` | No | `undefined` | Mission section with title & description |
| `values` | `array` | No | `[]` | Array of value cards with icon, title, description |
| `objectives` | `array` | No | `[]` | Array of objectives with checkmark icons |

## Sections

### 1. Main About Section
Large heading + description paragraph. Always displayed.

### 2. Mission Section (Optional)
Two-column layout with title on left, description on right.

### 3. Values Section (Optional)
Three-column grid of cards with icons, titles, and descriptions.

### 4. Objectives Section (Optional)
List of items with checkmark icons.

## Customization

### Icons
For the `values` array, you can use:
- Emojis (🎾, 🏔️, 🤝)
- SVG markup
- Icon component names (if using an icon library)

### Styling
All Tailwind classes can be modified directly in the component. Key classes:
- Container: `container mx-auto px-4`
- Spacing: `py-16 md:py-24`
- Typography: Font sizes use responsive classes
- Colors: Uses `text-gray-*` and `text-primary`

## Example

See `About1.example.astro` for a complete Advanced Tennis Camp example.

## Design Notes

Based on shadcnblocks "About 1" block design:
- Clean, modern layout
- Generous spacing and padding
- Responsive breakpoints at `md:` and `lg:`
- Balanced text-to-whitespace ratio
- Structured hierarchy with clear sections

