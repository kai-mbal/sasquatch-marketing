---
description: N/A - Lucide React is a static icon library with no data fetching concerns in the Sasquatch project.
globs: src/**/*.tsx
---

# Lucide React and Data

Lucide React is a static icon component library. It has no data fetching, async operations, or side effects.

Icons are imported at build time and tree-shaken. There is no runtime fetching of icon assets.

## Icons in Data Structures

Icons can be stored directly in data arrays as component references:

```ts
// src/app/data/features.ts
import { FileText, ClipboardList, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  slug: string;
  title: string;
  icon: LucideIcon;  // Store the component reference
}

export const allFeatures: Feature[] = [
  { slug: 'permits', title: 'Permit Tracking', icon: FileText },
  { slug: 'inspections', title: 'Inspections', icon: ClipboardList },
  { slug: 'jobs', title: 'Job Management', icon: Building2 },
];
```

These are static imports resolved at build time — no fetching needed.
