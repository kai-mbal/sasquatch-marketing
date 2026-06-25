---
description: Covers next-themes usage for dark/light theme switching in the Sasquatch project.
globs: src/**/*.tsx, src/main.tsx, src/app/App.tsx
---

# next-themes Skill

`next-themes` provides theme switching (dark/light mode) with SSR support and localStorage persistence.

## Reference Files

- [patterns.md](references/patterns.md) - ThemeProvider, useTheme hook
- [workflows.md](references/workflows.md) - Dark/light mode toggle

## Setup

```tsx
// src/app/App.tsx
import { ThemeProvider } from 'next-themes';

export function App() {
  return (
    <ThemeProvider
      attribute="class"        // Adds class="dark" to <html>
      defaultTheme="system"    // 'light' | 'dark' | 'system'
      enableSystem             // Respects OS preference
      disableTransitionOnChange // Prevents flash on theme change
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
```

## Usage

```tsx
import { useTheme } from 'next-themes';

const { theme, setTheme, resolvedTheme } = useTheme();
// theme: 'light' | 'dark' | 'system'
// resolvedTheme: 'light' | 'dark' (resolves 'system' to actual)
```

## Note on Current Project

The Sasquatch site uses Tailwind v4 and primarily light mode. Dark mode is available via next-themes if needed.
