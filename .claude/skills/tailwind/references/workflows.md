---
description: Documents workflows for adding styles, using the cn() utility, and extending Tailwind in the Sasquatch project.
globs: src/**/*.tsx, src/styles/*.css, tailwind.config.ts
---

# Tailwind Workflows

## cn() Utility (clsx + tailwind-merge)

Located at `src/app/components/ui/utils.ts` (or `src/lib/utils.ts`):

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Usage for conditional and merged classes:

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'rounded-lg p-6 border',
  isActive && 'border-[#1A3D2B] bg-[#E6F4EC]',
  isDisabled && 'opacity-50 cursor-not-allowed',
  className
)}>
```

## Adding New Utility Styles

Prefer Tailwind utilities over custom CSS. Order: layout → sizing → spacing → typography → color → border → effects.

```tsx
// Good ordering
className="flex items-center gap-3 w-full px-4 py-2 text-sm font-medium text-white bg-[#1A3D2B] border border-transparent rounded-lg hover:opacity-90 transition-opacity"
```

## Arbitrary Values

Use bracket notation for one-off values:

```tsx
className="w-[420px] h-[calc(100vh-64px)] bg-[#1A3D2B] border-[#ECEEED]"
```

## Responsive Strategy

Mobile-first: base styles are mobile, add `md:` and `lg:` prefixes for larger screens:

```tsx
className="text-xl md:text-3xl lg:text-5xl"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-4 md:px-8 lg:px-16"
```

## Global Styles

Put non-utility styles in `src/styles/index.css`. Font families are set via CSS custom properties in `src/styles/theme.css` and applied via `style={{ fontFamily: 'var(--font-display)' }}`.
