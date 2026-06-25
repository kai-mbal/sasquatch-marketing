---
description: Documents Vaul Drawer component patterns for bottom sheets and mobile drawers in the Sasquatch project.
globs: src/**/*.tsx
---

# Vaul Drawer Patterns

## Basic Bottom Drawer

```tsx
import { Drawer } from 'vaul';

export function FeatureDrawer({ feature }: { feature: Feature }) {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button
          className="w-full p-4 rounded-lg border border-[#ECEEED] text-left hover:bg-[#E6F4EC] transition-colors"
        >
          {feature.title}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl focus:outline-none">
          {/* Drag handle */}
          <div className="mx-auto w-12 h-1.5 rounded-full bg-[#ECEEED] mt-4 mb-6" />

          <div className="px-6 pb-8">
            <Drawer.Title
              className="text-xl font-semibold mb-2"
              style={{ color: '#1A1F1C', fontFamily: 'var(--font-display)' }}
            >
              {feature.title}
            </Drawer.Title>
            <Drawer.Description className="text-base" style={{ color: '#5A6560' }}>
              {feature.description}
            </Drawer.Description>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```

## Controlled Drawer

```tsx
const [isOpen, setIsOpen] = useState(false);

<Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
  <Drawer.Trigger asChild>
    <Button onClick={() => setIsOpen(true)}>Open</Button>
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
    <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-6">
      <button onClick={() => setIsOpen(false)}>Close</button>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
```
