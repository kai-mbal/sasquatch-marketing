---
description: Covers Radix UI usage in the Sasquatch project, where primitives are pre-wrapped with Tailwind styling in components/ui/.
globs: src/app/components/ui/**, src/**/*.tsx
---

# Radix UI Skill

Radix UI provides 40+ accessible, unstyled primitives. In this project, they are pre-wrapped with Tailwind styling in `src/app/components/ui/`.

## Reference Files

- [patterns.md](references/patterns.md) - How primitives are wrapped, CVA variant patterns
- [workflows.md](references/workflows.md) - Adding new Radix components, composing with Tailwind

## Available UI Components

Located at `src/app/components/ui/`:

```
button.tsx          card.tsx            dropdown-menu.tsx
sheet.tsx           dialog.tsx          popover.tsx
tooltip.tsx         badge.tsx           input.tsx
label.tsx           select.tsx          checkbox.tsx
radio-group.tsx     switch.tsx          slider.tsx
tabs.tsx            accordion.tsx       separator.tsx
avatar.tsx          progress.tsx        skeleton.tsx
alert.tsx           alert-dialog.tsx    command.tsx
navigation-menu.tsx scroll-area.tsx     table.tsx
form.tsx            ...and more
```

## Usage

Always import from `@/components/ui/`, not directly from `@radix-ui/*`:

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
```

## Key Benefit

Radix handles: keyboard navigation, ARIA attributes, focus management, screen reader support. You handle: styling via Tailwind.
