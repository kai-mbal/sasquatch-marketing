---
description: Documents common TypeScript errors encountered in this React/Vite/Tailwind stack and their fixes.
globs: src/**/*.tsx, src/**/*.ts
---

# Common TypeScript Errors

## Type 'X' is not assignable to type 'LucideIcon'

**Cause:** Passing icon component incorrectly.

```ts
// Wrong
import FileText from 'lucide-react'; // no default export

// Correct
import { FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
```

## Property does not exist on type

```ts
// Wrong — feature may be undefined
const title = features[0].title;

// Correct
const title = features[0]?.title ?? 'Untitled';
```

## Object is possibly 'null' or 'undefined'

```ts
// Use optional chaining
const slug = feature?.slug;

// Or null check
if (!feature) return null;
```

## Type 'string | undefined' is not assignable to 'string'

```ts
// useParams returns string | undefined
const { slug } = useParams<{ slug: string }>();
if (!slug) return <Navigate to="/features" />;
// Now slug is string
```

## Implicit any on event handlers

```ts
// Wrong
const handleChange = (e) => { ... };

// Correct
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };
```

## Cannot find module '@/...'

Ensure `tsconfig.json` has paths configured and `vite.config.ts` has the alias. Both must match.

## JSX element type does not have any construct or call signatures

```ts
// Wrong — using type as value
import type { LucideIcon } from 'lucide-react';
function Comp({ icon }: { icon: LucideIcon }) {
  return <icon />; // wrong — lowercase is HTML element
}

// Correct — rename to capitalize
function Comp({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon />;
}
```
