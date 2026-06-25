---
description: Documents dark/light mode toggle implementation workflow with next-themes in the Sasquatch project.
globs: src/**/*.tsx
---

# Theme Toggle Workflows

## Adding Theme Toggle to Navigation

```tsx
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#ECEEED] hover:bg-[#E6F4EC] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark
        ? <Sun className="w-4 h-4" style={{ color: '#1A3D2B' }} />
        : <Moon className="w-4 h-4" style={{ color: '#1A3D2B' }} />
      }
    </button>
  );
}
```

## System Preference Toggle

```tsx
type Theme = 'light' | 'dark' | 'system';

const themes: { value: Theme; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

{themes.map(t => (
  <button
    key={t.value}
    onClick={() => setTheme(t.value)}
    className={cn('px-3 py-1.5 text-sm rounded-md', theme === t.value && 'bg-[#E6F4EC] font-medium')}
    style={{ color: theme === t.value ? '#1A3D2B' : '#5A6560' }}
  >
    {t.label}
  </button>
))}
```

## Dark Mode Tailwind Config

Ensure Tailwind is configured for class-based dark mode:

```css
/* In tailwind.css or index.css */
@media (prefers-color-scheme: dark) { ... } /* for system */
.dark { ... }                                /* for class-based */
```
