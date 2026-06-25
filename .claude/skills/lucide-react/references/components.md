---
description: Documents the LucideIcon prop pattern and icon sizing conventions used in the Sasquatch project.
globs: src/**/*.tsx
---

# Lucide Icon Component Patterns

## Icon as Prop (LucideIcon Type)

The standard pattern for accepting icons as props:

```tsx
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
}

// Destructure-rename to capitalize for JSX
export function FeatureCard({ icon: Icon, title }: FeatureCardProps) {
  return (
    <div>
      <Icon className="w-6 h-6" style={{ color: '#1A3D2B' }} />
      <span>{title}</span>
    </div>
  );
}

// Usage
import { FileText } from 'lucide-react';
<FeatureCard icon={FileText} title="Permit Tracking" />
```

## Icon in Icon Container

For boxed icons (feature cards):

```tsx
<div
  className="w-12 h-12 rounded-lg flex items-center justify-center"
  style={{ backgroundColor: '#E6F4EC' }}
>
  <Icon className="w-6 h-6" style={{ color: '#1A3D2B' }} />
</div>
```

## Nav Icons

```tsx
import { Menu, X, ChevronDown } from 'lucide-react';

// Mobile menu toggle
{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}

// Dropdown indicator
<ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
```

## Status Icons

```tsx
import { CheckCircle2, Clock, XCircle, AlertTriangle } from 'lucide-react';

const statusIcon = {
  approved: <CheckCircle2 className="w-4 h-4" style={{ color: '#4CAF70' }} />,
  pending: <Clock className="w-4 h-4" style={{ color: '#f59e0b' }} />,
  rejected: <XCircle className="w-4 h-4" style={{ color: '#ef4444' }} />,
  warning: <AlertTriangle className="w-4 h-4" style={{ color: '#f59e0b' }} />,
};
```
