---
description: Documents how Radix UI primitives are wrapped with Tailwind and CVA variant patterns in the Sasquatch project.
globs: src/app/components/ui/**, src/**/*.tsx
---

# Radix UI Patterns

## Wrapped Component Pattern

Each `components/ui/` file wraps a Radix primitive with Tailwind and CVA:

```tsx
// src/app/components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#1A3D2B] text-white hover:opacity-90',
        secondary: 'bg-[#E6F4EC] text-[#1A3D2B] hover:opacity-80',
        ghost: 'hover:bg-[#E6F4EC] text-[#1A1F1C]',
        outline: 'border border-[#1A3D2B] text-[#1A3D2B] hover:bg-[#E6F4EC]',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-10 px-6',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
```

## Using Wrapped Components

```tsx
import { Button } from '@/components/ui/button';

<Button>Get Started</Button>
<Button variant="outline">Learn More</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button className="w-full mt-4">Custom class added</Button>
```

## Card Pattern

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card className="border border-[#ECEEED]">
  <CardHeader>
    <CardTitle style={{ color: '#1A1F1C' }}>Permit Tracking</CardTitle>
  </CardHeader>
  <CardContent>
    <p style={{ color: '#5A6560' }}>Track all your permits in one place.</p>
  </CardContent>
</Card>
```

## Dialog Pattern

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Feature Details</DialogTitle>
    </DialogHeader>
    <p>Content here...</p>
  </DialogContent>
</Dialog>
```
