---
description: Covers Lucide React icon usage in the Sasquatch project, including the icon-as-prop pattern and tree-shaking conventions.
globs: src/**/*.tsx
---

# Lucide React Skill

Lucide React 0.487.0 provides the icon library for this project. Always use named imports for tree-shaking.

## Reference Files

- [hooks.md](references/hooks.md) - Dynamic icon loading
- [components.md](references/components.md) - Icon as prop pattern, sizing
- [data-fetching.md](references/data-fetching.md) - N/A for icons
- [state.md](references/state.md) - Conditional icon rendering
- [forms.md](references/forms.md) - Icons in form inputs
- [performance.md](references/performance.md) - Tree-shaking, named imports

## Basic Usage

```tsx
import { CheckCircle2, FileText, Building2, ClipboardList } from 'lucide-react';

<CheckCircle2 className="w-5 h-5" style={{ color: '#4CAF70' }} />
<FileText className="w-6 h-6" style={{ color: '#1A3D2B' }} />
```

## Icon Sizes (Tailwind)

| Class | Size | Usage |
|-------|------|-------|
| `w-4 h-4` | 16px | Inline/badge icons |
| `w-5 h-5` | 20px | List item icons |
| `w-6 h-6` | 24px | Feature card icons |
| `w-8 h-8` | 32px | Section header icons |
| `w-10 h-10` | 40px | Hero/large icons |

## Never Use Default Import

```ts
// Wrong — no default export
import FileText from 'lucide-react';

// Correct — named import
import { FileText } from 'lucide-react';
```
