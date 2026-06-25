---
description: Documents collapsible panel patterns and performance considerations for react-resizable-panels in the Sasquatch project.
globs: src/**/*.tsx
---

# Resizable Panels Performance

## Collapsible Panels (Hide on Mobile)

```tsx
import { useRef } from 'react';
import { useMobile } from '@/components/use-mobile';
import type { ImperativePanelHandle } from 'react-resizable-panels';

export function AppLayout() {
  const sidebarRef = useRef<ImperativePanelHandle>(null);
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) {
      sidebarRef.current?.collapse();
    } else {
      sidebarRef.current?.expand();
    }
  }, [isMobile]);

  return (
    <PanelGroup direction="horizontal">
      <Panel ref={sidebarRef} defaultSize={25} minSize={20} collapsible collapsedSize={0}>
        <Sidebar />
      </Panel>
      <PanelResizeHandle className="w-1 bg-[#ECEEED] cursor-col-resize" />
      <Panel>
        <MainContent />
      </Panel>
    </PanelGroup>
  );
}
```

## Avoid Rendering Hidden Panel Content

When collapsed, avoid rendering heavy content:

```tsx
<Panel
  collapsible
  onCollapse={() => setIsCollapsed(true)}
  onExpand={() => setIsCollapsed(false)}
>
  {!isCollapsed && <HeavyComponent />}
</Panel>
```

## Panel Overflow

Always set `overflow-auto` or `overflow-hidden` on panel content to prevent layout overflow:

```tsx
<Panel defaultSize={30}>
  <div className="h-full overflow-auto">
    <SidebarContent />
  </div>
</Panel>
```
