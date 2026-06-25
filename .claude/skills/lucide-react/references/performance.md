---
description: Documents tree-shaking and performance best practices for Lucide React in the Sasquatch project.
globs: src/**/*.tsx
---

# Lucide React Performance

## Named Imports Only (Tree-shaking)

Always use named imports. Each icon is a separate module and Vite will only bundle what is imported:

```ts
// Correct — only FileText, CheckCircle2, Building2 are bundled
import { FileText, CheckCircle2, Building2 } from 'lucide-react';

// Wrong — imports entire library
import * as Icons from 'lucide-react';
const Icon = Icons[name]; // Don't do this — breaks tree-shaking
```

## Avoid Storing Icons in State

Icon components are static references — they never change:

```tsx
// Unnecessary — icons don't change at runtime
const [icon, setIcon] = useState(FileText);

// Correct — derive from data directly
const icon = feature.icon;
```

## Lookup Map Instead of Dynamic Import

If icon names come from strings, use a static lookup map (defined once, not inside component):

```ts
// Define OUTSIDE component to avoid recreation on each render
const ICON_MAP: Record<string, LucideIcon> = {
  FileText, ClipboardList, Building2, CheckCircle2
};

export function IconDisplay({ name }: { name: string }) {
  const Icon = ICON_MAP[name] ?? FileText;
  return <Icon className="w-5 h-5" />;
}
```

## Stroke Width

Default stroke width is 2. Override if needed for visual consistency:

```tsx
<FileText className="w-5 h-5" strokeWidth={1.5} />
```
