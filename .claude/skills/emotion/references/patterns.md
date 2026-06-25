---
description: Documents Emotion CSS-in-JS patterns for the rare cases where it is used alongside MUI in the Sasquatch project.
globs: src/**/*.tsx
---

# Emotion Patterns

## styled() with MUI Components

When you need to extend a MUI component beyond what `sx` allows:

```tsx
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const SasquatchTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& fieldset': { borderColor: '#ECEEED' },
    '&:hover fieldset': { borderColor: '#1A3D2B' },
    '&.Mui-focused fieldset': { borderColor: '#1A3D2B' },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#1A3D2B',
  },
});

// Usage
<SasquatchTextField label="Email" variant="outlined" fullWidth />
```

## css Prop (Avoid in This Project)

Emotion supports a `css` prop but this conflicts with Tailwind conventions:

```tsx
// Avoid — use Tailwind instead
import { css } from '@emotion/react';
<div css={css`background: #E6F4EC; padding: 16px;`} />

// Prefer
<div className="p-4" style={{ backgroundColor: '#E6F4EC' }} />
```

## Global Styles via Emotion

MUI's `GlobalStyles` uses Emotion under the hood:

```tsx
import { GlobalStyles } from '@mui/material';

<GlobalStyles styles={{
  '*': { boxSizing: 'border-box' },
  body: { margin: 0, fontFamily: 'var(--font-body)' },
}} />
```

Prefer `src/styles/index.css` for global styles in this project.
