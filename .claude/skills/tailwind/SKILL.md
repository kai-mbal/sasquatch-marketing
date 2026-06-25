---
description: Covers Tailwind CSS v4 usage in the Sasquatch project, including utility patterns, color conventions, and the cn() helper.
globs: src/**/*.tsx, src/styles/*.css
---

# Tailwind CSS Skill

Tailwind CSS 4.1.12 is the primary styling approach. All layout, spacing, and generic colors use Tailwind utilities. Brand colors use inline `style={}` props with CSS hex values.

## Reference Files

- [patterns.md](references/patterns.md) - Flex, grid, spacing, responsive, color utilities
- [workflows.md](references/workflows.md) - Adding styles, cn() utility, theme extension

## Quick Example

```tsx
<div className="flex items-center gap-3 p-6 rounded-lg border border-[#ECEEED] bg-white">
  <Icon className="w-6 h-6 shrink-0" style={{ color: '#1A3D2B' }} />
  <div className="flex flex-col gap-1">
    <h3 className="text-lg font-semibold" style={{ color: '#1A1F1C' }}>Title</h3>
    <p className="text-sm" style={{ color: '#5A6560' }}>Description</p>
  </div>
</div>
```

## Color Strategy

| Approach | When to Use |
|----------|-------------|
| Tailwind utilities (`bg-white`, `text-black`) | Generic/structural colors |
| Inline `style={{ color: '#1A3D2B' }}` | Brand/semantic colors |
| CSS custom properties (`var(--font-display)`) | Font families only |

## Vite Integration

Tailwind is configured as a Vite plugin in `vite.config.ts`. Do not remove it.
