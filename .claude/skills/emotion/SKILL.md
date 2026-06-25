---
description: Covers Emotion CSS-in-JS usage in the Sasquatch project. Emotion is bundled with MUI and is not used directly for custom styles.
globs: src/**/*.tsx
---

# Emotion Skill

Emotion (`@emotion/react`, `@emotion/styled`) is included as a dependency of Material-UI 7. It is **not used directly** in this project for custom styling — Tailwind CSS is used instead.

## Reference Files

- [patterns.md](references/patterns.md) - styled components and css prop
- [workflows.md](references/workflows.md) - When to use Emotion vs Tailwind

## Key Rule

Do not introduce Emotion for new custom styles. Use Tailwind utilities and inline `style={}` props instead.

```tsx
// Project convention: Tailwind + inline style
<div
  className="flex items-center gap-3 rounded-lg p-4"
  style={{ backgroundColor: '#E6F4EC', color: '#1A3D2B' }}
>

// Avoid: Emotion styled (unless extending MUI component)
const StyledDiv = styled('div')({
  display: 'flex',
  backgroundColor: '#E6F4EC',
});
```

## When Emotion Appears

Emotion is used automatically by MUI's `sx` prop and `styled()` API. You may encounter it when customizing MUI components deeply.
