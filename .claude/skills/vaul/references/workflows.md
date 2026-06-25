---
description: Documents mobile drawer patterns and snap points for Vaul in the Sasquatch project.
globs: src/**/*.tsx
---

# Vaul Drawer Workflows

## Mobile-Only Drawer

Show drawer on mobile, alternative on desktop:

```tsx
import { useMobile } from '@/components/use-mobile';

export function FeatureModal({ feature }: { feature: Feature }) {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button variant="outline">View Details</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-6 max-h-[90vh] overflow-auto">
            <FeatureDetail feature={feature} />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  // Desktop: use Dialog instead
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DialogTrigger>
      <DialogContent>
        <FeatureDetail feature={feature} />
      </DialogContent>
    </Dialog>
  );
}
```

## Snap Points

```tsx
<Drawer.Root snapPoints={[0.4, 1]} defaultSnap={0.4}>
  <Drawer.Portal>
    <Drawer.Content className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl">
      {/* Snap to 40% or 100% of screen height */}
      <div className="p-6">
        <p>Drag up for more content</p>
      </div>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
```

## Mobile Navigation Drawer

```tsx
export function MobileNavDrawer() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
        <button className="md:hidden p-2">
          <Menu className="w-5 h-5" style={{ color: '#1A1F1C' }} />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-white p-6">
          <nav className="flex flex-col gap-4 mt-8">
            <Link to="/" className="text-base font-medium" style={{ color: '#1A1F1C' }}>Home</Link>
            <Link to="/features" className="text-base font-medium" style={{ color: '#1A1F1C' }}>Features</Link>
            <Link to="/pricing" className="text-base font-medium" style={{ color: '#1A1F1C' }}>Pricing</Link>
          </nav>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```
