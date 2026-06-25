---
description: Documents color palette, typography system, and spacing conventions for the Sasquatch design system.
globs: src/styles/**, src/**/*.tsx
---

# Design Aesthetics

## Color Palette

Always apply brand colors via inline `style={}`:

```tsx
// Primary CTA buttons and key icons
style={{ backgroundColor: '#1A3D2B', color: 'white' }}

// Dark headings and body text
style={{ color: '#1A1F1C' }}

// Secondary/muted text
style={{ color: '#5A6560' }}

// Card/section borders
style={{ borderColor: '#ECEEED' }}

// Highlighted section backgrounds
style={{ backgroundColor: '#E6F4EC' }}

// Accent — active states, success badges
style={{ color: '#4CAF70' }}
```

## Typography

Font families are CSS custom properties defined in `src/styles/theme.css`:

```css
--font-display: 'YourDisplayFont', sans-serif;
--font-body: 'YourBodyFont', sans-serif;
--font-mono: 'YourMonoFont', monospace;
```

Applied in components:
```tsx
<h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl font-bold tracking-tight">
  Permit Intelligence Platform
</h1>

<p style={{ fontFamily: 'var(--font-body)' }} className="text-lg leading-relaxed">
  Manage permits, inspections, and jobs in one place.
</p>
```

## Typography Scale

```tsx
// Hero heading
className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"

// Section heading
className="text-2xl md:text-3xl font-semibold"

// Card title
className="text-xl font-semibold"

// Body text
className="text-base leading-relaxed"

// Caption/label
className="text-sm font-medium"

// Tiny label
className="text-xs uppercase tracking-wider"
```

## Spacing System

Use Tailwind spacing. Key values for this project:
- Card padding: `p-6` or `p-8`
- Section padding: `py-16 md:py-24`
- Page container: `px-6 md:px-12 lg:px-24`
- Gap between cards: `gap-6`
- Gap in nav: `gap-8`
