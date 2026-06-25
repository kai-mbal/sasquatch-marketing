---
description: Covers Vaul animated drawer usage in the Sasquatch project for mobile bottom sheet and side drawer patterns.
globs: src/**/*.tsx
---

# Vaul Skill

`vaul` provides animated drawer components — primarily bottom sheets on mobile.

## Reference Files

- [patterns.md](references/patterns.md) - Drawer.Root, Drawer.Trigger, Drawer.Content
- [workflows.md](references/workflows.md) - Mobile drawer patterns, snap points

## Basic Usage

```tsx
import { Drawer } from 'vaul';

export function MobileMenu() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="md:hidden">Open Menu</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6">
          {/* Content */}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```

## When to Use Vaul vs Radix Sheet

| Use Vaul | Use Radix Sheet |
|----------|----------------|
| Mobile bottom drawer | Desktop side panel |
| Swipe-to-dismiss gesture | Non-gesture drawer |
| Snap point behavior | Fixed size panel |
