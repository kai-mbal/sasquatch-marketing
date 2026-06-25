---
description: Documents Command, CommandInput, CommandList, and CommandItem patterns for cmdk in the Sasquatch project.
globs: src/**/*.tsx
---

# cmdk Component Patterns

## Basic Command Palette

```tsx
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from 'cmdk';
import { useNavigate } from 'react-router';
import { FileText, DollarSign, MapPin, Mail } from 'lucide-react';

const navItems = [
  { label: 'Features', href: '/features', icon: FileText },
  { label: 'Pricing', href: '/pricing', icon: DollarSign },
  { label: 'Jurisdictions', href: '/jurisdictions', icon: MapPin },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export function CommandPalette() {
  const navigate = useNavigate();

  return (
    <Command className="rounded-xl border border-[#ECEEED] bg-white shadow-xl overflow-hidden">
      <CommandInput
        placeholder="Search pages, features..."
        className="border-b border-[#ECEEED] px-4 py-3 text-sm outline-none w-full"
        style={{ color: '#1A1F1C' }}
      />
      <CommandList className="max-h-72 overflow-auto py-2">
        <CommandEmpty className="py-6 text-center text-sm" style={{ color: '#5A6560' }}>
          No results found.
        </CommandEmpty>
        <CommandGroup heading="Navigation" className="px-2">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <CommandItem
                key={item.href}
                value={item.label}
                onSelect={() => navigate(item.href)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm"
                style={{ color: '#1A1F1C' }}
              >
                <Icon className="w-4 h-4" style={{ color: '#5A6560' }} />
                {item.label}
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
```
