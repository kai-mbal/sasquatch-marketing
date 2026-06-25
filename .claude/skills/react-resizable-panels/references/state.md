---
description: Documents panel size state management and localStorage persistence with react-resizable-panels in the Sasquatch project.
globs: src/**/*.tsx
---

# Panel Size State

## Auto-Save to localStorage

Use `autoSaveId` on `PanelGroup` to persist sizes across sessions:

```tsx
<PanelGroup
  direction="horizontal"
  autoSaveId="sasquatch-main-layout"
>
  <Panel defaultSize={30}>...</Panel>
  <PanelResizeHandle />
  <Panel>...</Panel>
</PanelGroup>
```

Sizes are saved to `localStorage` automatically.

## Manual Size Tracking

```tsx
const [sidebarSize, setSidebarSize] = useState(30);

<Panel
  defaultSize={30}
  onResize={size => setSidebarSize(size)}
>
  <div style={{ width: `${sidebarSize}%` }}>...</div>
</Panel>
```

## Collapsed State Tracking

```tsx
const [isCollapsed, setIsCollapsed] = useState(false);

<Panel
  collapsible
  collapsedSize={0}
  minSize={20}
  onCollapse={() => setIsCollapsed(true)}
  onExpand={() => setIsCollapsed(false)}
>
  <div className={isCollapsed ? 'hidden' : 'block'}>
    <Sidebar />
  </div>
</Panel>

{/* Toggle button in adjacent panel */}
<button onClick={() => isCollapsed ? sidebarRef.current?.expand() : sidebarRef.current?.collapse()}>
  {isCollapsed ? <PanelRightOpen className="w-4 h-4" /> : <PanelRightClose className="w-4 h-4" />}
</button>
```
