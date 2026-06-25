---
description: Documents how to add new Radix UI components and compose them with Tailwind in the Sasquatch project.
globs: src/app/components/ui/**, src/**/*.tsx
---

# Radix UI Workflows

## Adding a New Radix Component

1. Install the primitive (check if already in `package.json` first):
```bash
npm install @radix-ui/react-[name]
```

2. Create the wrapper file at `src/app/components/ui/[name].tsx`:
```tsx
import * as NamePrimitive from '@radix-ui/react-[name]';
import { cn } from '@/lib/utils';

const Name = NamePrimitive.Root;

const NameTrigger = React.forwardRef<...>(({ className, ...props }, ref) => (
  <NamePrimitive.Trigger
    ref={ref}
    className={cn('...base classes...', className)}
    {...props}
  />
));
NameTrigger.displayName = NamePrimitive.Trigger.displayName;

export { Name, NameTrigger };
```

3. Import from the wrapper, not the primitive:
```tsx
import { Name, NameTrigger } from '@/components/ui/name';
```

## Composing with Tailwind

Use `cn()` to merge custom classes with base styles:

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" className="md:hidden">
      <Menu className="w-5 h-5" />
    </Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-[300px] bg-white">
    <nav className="flex flex-col gap-4 mt-8">
      <Link to="/" className="text-[#1A1F1C] hover:text-[#1A3D2B]">Home</Link>
    </nav>
  </SheetContent>
</Sheet>
```

## Using `asChild`

`asChild` merges Radix behavior onto a child element:

```tsx
// Trigger behavior applied to a Link
<DialogTrigger asChild>
  <Link to="/features">View Features</Link>
</DialogTrigger>

// Avoids wrapping button in button
<TooltipTrigger asChild>
  <Button>Hover me</Button>
</TooltipTrigger>
```
