---
description: Documents ThemeProvider setup and useTheme hook patterns for next-themes in the Sasquatch project.
globs: src/**/*.tsx
---

# next-themes Patterns

## ThemeProvider

```tsx
import { ThemeProvider } from 'next-themes';

<ThemeProvider
  attribute="class"
  defaultTheme="light"
  enableSystem={false}
>
  {children}
</ThemeProvider>
```

## useTheme Hook

```tsx
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg border border-[#ECEEED] hover:bg-[#E6F4EC]"
    >
      {resolvedTheme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
```

## Hydration-Safe Rendering

`useTheme` returns `undefined` on initial render to prevent hydration mismatch:

```tsx
const { resolvedTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => setMounted(true), []);

if (!mounted) return <div className="w-8 h-8" />; // placeholder to avoid layout shift

return (
  <button onClick={toggleTheme}>
    {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
  </button>
);
```

## Tailwind Dark Mode Classes

With `attribute="class"`, use Tailwind's `dark:` prefix:

```tsx
<div className="bg-white dark:bg-[#1A1F1C] text-[#1A1F1C] dark:text-white">
  Content
</div>
```
