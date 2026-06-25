---
description: Documents when to use Emotion vs Tailwind for styling decisions in the Sasquatch project.
globs: src/**/*.tsx
---

# Emotion vs Tailwind Decision Guide

## Decision Tree

```
New styling needed?
├── Styling a native HTML element (div, p, h1)?
│   └── Use Tailwind utilities + inline style for brand colors
├── Styling a Radix UI component?
│   └── Use className with Tailwind via cn()
├── Styling a MUI component?
│   ├── Layout/sizing → Tailwind className
│   └── MUI internal slots → sx prop (Emotion)
└── Need to create a shared styled MUI variant?
    └── Use MUI styled() with Emotion
```

## Examples

**Use Tailwind:**
```tsx
<div className="flex items-center gap-3 p-6 rounded-lg border border-[#ECEEED]"
     style={{ backgroundColor: '#E6F4EC' }}>
```

**Use sx (Emotion via MUI):**
```tsx
<TextField sx={{ '& .MuiOutlinedInput-root fieldset': { borderColor: '#ECEEED' } }} />
```

**Use styled (Emotion via MUI):**
```tsx
const BrandTextField = styled(TextField)(/* reusable MUI overrides */);
```

## Never Mix

Do not apply both Tailwind and Emotion `css` prop to the same element — they can conflict:

```tsx
// Bad
import { css } from '@emotion/react';
<div className="p-4" css={css`padding: 16px`} />

// Good — pick one
<div className="p-4" />
```
