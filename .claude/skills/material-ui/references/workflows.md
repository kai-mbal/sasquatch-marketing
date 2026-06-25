---
description: Documents MUI theme setup and the decision framework for using sx prop vs Tailwind in the Sasquatch project.
globs: src/**/*.tsx, src/main.tsx
---

# MUI Workflows

## Theme Setup

MUI requires a ThemeProvider for consistent styling. Wrap at app root:

```tsx
// src/main.tsx or src/app/App.tsx
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A3D2B',
      light: '#4CAF70',
    },
    text: {
      primary: '#1A1F1C',
      secondary: '#5A6560',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'var(--font-body)',
  },
});

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```

## sx Prop vs Tailwind

**Use Tailwind** for:
- Layout (flex, grid, gap, padding, margin)
- Generic sizing (w-full, h-screen)
- Generic colors (bg-white, text-black)
- Responsive breakpoints

**Use sx prop** for:
- MUI component internal slot overrides (`& .MuiInputRoot`)
- Pseudo-states on MUI components (`:hover`, `:focus`)
- MUI-specific theme tokens

```tsx
// Good — Tailwind for layout, sx for MUI internals
<TextField
  className="w-full"  // Tailwind for width
  sx={{
    '& fieldset': { borderColor: '#ECEEED' },  // sx for MUI slot
  }}
/>
```

## Avoiding Emotion/MUI Conflicts with Tailwind

MUI uses Emotion for CSS-in-JS. Tailwind utilities may be overridden by Emotion specificity. Use `!important` prefix in Tailwind (`!w-full`) if needed, or prefer `sx` for MUI components.
