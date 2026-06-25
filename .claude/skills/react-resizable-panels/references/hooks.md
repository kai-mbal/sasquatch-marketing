---
description: Documents the usePanel hook from react-resizable-panels for the Sasquatch project.
globs: src/**/*.tsx
---

# usePanel Hook

`usePanel` (via `Panel`'s `ref` prop) provides imperative controls:

```tsx
import { useRef } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import type { ImperativePanelHandle } from 'react-resizable-panels';

export function ResizableLayout() {
  const sidebarRef = useRef<ImperativePanelHandle>(null);

  const collapseSidebar = () => sidebarRef.current?.collapse();
  const expandSidebar = () => sidebarRef.current?.expand();
  const isCollapsed = sidebarRef.current?.isCollapsed();

  return (
    <>
      <button onClick={collapseSidebar}>Hide Sidebar</button>
      <button onClick={expandSidebar}>Show Sidebar</button>

      <PanelGroup direction="horizontal">
        <Panel
          ref={sidebarRef}
          defaultSize={25}
          minSize={15}
          collapsible
          collapsedSize={0}
        >
          <Sidebar />
        </Panel>
        <PanelResizeHandle className="w-1 bg-[#ECEEED] cursor-col-resize hover:bg-[#1A3D2B] transition-colors" />
        <Panel>
          <MainContent />
        </Panel>
      </PanelGroup>
    </>
  );
}
```
