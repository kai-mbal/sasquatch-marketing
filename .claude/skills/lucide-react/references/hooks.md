---
description: Documents dynamic icon loading patterns for Lucide React in the Sasquatch project.
globs: src/**/*.tsx
---

# Lucide React Dynamic Icons

Lucide React has no hooks, but dynamic icon loading can be achieved via a lookup map.

## Dynamic Icon by Name

When icon name comes from data (e.g., features.ts), use a lookup object:

```tsx
import {
  FileText, ClipboardList, Building2, CheckCircle2, Bell,
  BarChart2, Users, Zap, Shield, Search,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ClipboardList,
  Building2,
  CheckCircle2,
  Bell,
  BarChart2,
  Users,
  Zap,
  Shield,
  Search,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = 'w-5 h-5' }: DynamicIconProps) {
  const Icon = iconMap[name] ?? FileText; // fallback icon
  return <Icon className={className} />;
}
```

## Usage with Feature Data

If features.ts stores icon names as strings:

```ts
// features.ts
{ slug: 'permit-tracking', iconName: 'FileText', ... }

// Component
<DynamicIcon name={feature.iconName} className="w-6 h-6" style={{ color: '#1A3D2B' }} />
```

Note: In this project, features.ts stores the actual LucideIcon component reference directly, so the lookup map is only needed for string-based icon storage.
