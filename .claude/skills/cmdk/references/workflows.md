---
description: Documents Cmd+K keyboard shortcut trigger and filtering setup for cmdk command palette in the Sasquatch project.
globs: src/**/*.tsx
---

# cmdk Workflows

## Cmd+K Trigger with Radix Dialog

```tsx
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CommandPalette } from './CommandPalette';

export function CommandPaletteProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 max-w-lg">
        <CommandPalette onSelect={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
```

## Feature Search

```tsx
import { allFeatures } from '@/data/features';

<CommandGroup heading="Features">
  {allFeatures.map(feature => {
    const Icon = feature.icon;
    return (
      <CommandItem
        key={feature.slug}
        value={feature.title}
        onSelect={() => {
          navigate(`/features/${feature.slug}`);
          onSelect?.();
        }}
        className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer"
      >
        <Icon className="w-4 h-4" style={{ color: '#1A3D2B' }} />
        <span className="text-sm" style={{ color: '#1A1F1C' }}>{feature.title}</span>
        <span className="ml-auto text-xs" style={{ color: '#5A6560' }}>{feature.category}</span>
      </CommandItem>
    );
  })}
</CommandGroup>
```

## Keyboard Hint in Navigation

Show the shortcut hint to guide users to open the palette:

```tsx
<button
  onClick={() => setIsOpen(true)}
  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#ECEEED] text-sm hover:bg-[#E6F4EC]"
  style={{ color: '#5A6560' }}
>
  <Search className="w-4 h-4" />
  Search...
  <kbd className="ml-2 text-xs px-1.5 py-0.5 rounded border border-[#ECEEED]">⌘K</kbd>
</button>
```
