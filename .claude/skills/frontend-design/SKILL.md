---
description: Covers the Sasquatch design system including color palette, typography, spacing conventions, and visual component patterns.
globs: src/**/*.tsx, src/styles/**
---

# Frontend Design Skill

The Sasquatch design system is derived from the Figma design at https://www.figma.com/design/FmA4M5HN764yWNUWMMDXsK/Sasquatch-Marketing-Website-Design.

## Reference Files

- [aesthetics.md](references/aesthetics.md) - Colors, typography, spacing
- [components.md](references/components.md) - Card styles, button variants, visual patterns
- [layouts.md](references/layouts.md) - Page layouts, containers, grid
- [motion.md](references/motion.md) - Animations with framer-motion
- [patterns.md](references/patterns.md) - Reusable design patterns across pages

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary green | `#1A3D2B` | CTAs, icons, headings |
| Dark text | `#1A1F1C` | Body text, headings |
| Secondary gray | `#5A6560` | Subtext, descriptions |
| Light border | `#ECEEED` | Card borders, dividers |
| Light green bg | `#E6F4EC` | Highlighted sections, tags |
| Accent green | `#4CAF70` | Active states, badges |

## Typography

```tsx
// Display/heading font
style={{ fontFamily: 'var(--font-display)' }}

// Body font
style={{ fontFamily: 'var(--font-body)' }}

// Monospace
style={{ fontFamily: 'var(--font-mono)' }}
```

## Design Principles

- Clean, professional B2B SaaS aesthetic
- Generous white space
- Green-forward brand identity (permit/nature metaphor)
- Mobile-first responsive layouts
