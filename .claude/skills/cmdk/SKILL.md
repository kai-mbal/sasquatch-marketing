---
description: Covers cmdk command palette usage in the Sasquatch project for keyboard-driven navigation and search.
globs: src/**/*.tsx
---

# cmdk Skill

`cmdk` provides an accessible command palette component for keyboard-driven navigation and quick actions.

## Reference Files

- [patterns.md](references/patterns.md) - Command, CommandInput, CommandList, CommandItem
- [workflows.md](references/workflows.md) - Cmd+K trigger, filtering

## Basic Setup

```tsx
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from 'cmdk';
```

Typically used inside a Radix `Dialog` and triggered by keyboard shortcut.

## Common Use Cases

- Quick navigation between pages
- Searching features or jurisdictions
- Triggering common actions (contact, pricing)
- Site-wide search
