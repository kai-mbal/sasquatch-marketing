---
description: Documents functional component patterns, naming conventions, and prop interface patterns used in the Sasquatch project.
globs: src/**/*.tsx
---

# React Component Patterns

## Basic Functional Component

```tsx
export function Navigation() {
  return <nav className="fixed top-0 w-full">...</nav>;
}
```

## Props Interface Pattern

Name interfaces `[ComponentName]Props`:

```tsx
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isHighlighted?: boolean;
  onSelect?: () => void;
}

export function FeatureCard({ icon: Icon, title, description, isHighlighted = false, onSelect }: FeatureCardProps) {
  return (
    <div className="rounded-lg p-6 border border-[#ECEEED]">
      <Icon className="w-6 h-6" style={{ color: '#1A3D2B' }} />
      <h3>{title}</h3>
    </div>
  );
}
```

## LucideIcon Prop Pattern

Import and destructure-rename icons passed as props:

```tsx
import type { LucideIcon } from 'lucide-react';

interface StatusChipProps {
  icon: LucideIcon;
  label: string;
}

export function StatusChip({ icon: Icon, label }: StatusChipProps) {
  return (
    <span className="flex items-center gap-2">
      <Icon className="w-4 h-4" />
      {label}
    </span>
  );
}
```

## Conditional Rendering

```tsx
// Ternary for simple conditions
{isOpen ? <OpenView /> : <ClosedView />}

// && for show-if-true
{hasPermission && <AdminPanel />}

// Avoid deeply nested conditions — extract to variables
const content = isLoading ? <Spinner /> : <FeatureList features={features} />;
return <div>{content}</div>;
```

## Component File Structure

```tsx
// 1. Imports
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// 2. Interface
interface MyComponentProps { ... }

// 3. Component
export function MyComponent({ ... }: MyComponentProps) {
  // hooks
  // handlers
  // return JSX
}
```
