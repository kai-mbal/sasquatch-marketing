---
description: Documents PanelGroup, Panel, and PanelResizeHandle components from react-resizable-panels for the Sasquatch project.
globs: src/**/*.tsx
---

# Resizable Panel Components

## PanelGroup

Container for panels. Sets direction:

```tsx
<PanelGroup
  direction="horizontal"  // or "vertical"
  className="h-[calc(100vh-64px)]"
  autoSaveId="main-layout"  // persists sizes to localStorage
>
```

## Panel

Individual resizable pane:

```tsx
<Panel
  defaultSize={30}      // % of parent
  minSize={15}          // minimum % — prevents over-collapse
  maxSize={60}          // maximum %
  collapsible           // allows collapsing to collapsedSize
  collapsedSize={0}     // size when collapsed
  onCollapse={() => setIsSidebarOpen(false)}
  onExpand={() => setIsSidebarOpen(true)}
>
  <div className="h-full overflow-auto p-4">
    <Sidebar />
  </div>
</Panel>
```

## PanelResizeHandle

The draggable divider between panels:

```tsx
{/* Horizontal resize handle */}
<PanelResizeHandle className="w-1.5 bg-[#ECEEED] hover:bg-[#1A3D2B] transition-colors cursor-col-resize" />

{/* Vertical resize handle */}
<PanelResizeHandle className="h-1.5 bg-[#ECEEED] hover:bg-[#1A3D2B] transition-colors cursor-row-resize" />

{/* With grab indicator */}
<PanelResizeHandle className="w-1 bg-[#ECEEED] hover:bg-[#1A3D2B] cursor-col-resize flex items-center justify-center group">
  <div className="w-0.5 h-8 rounded-full bg-[#5A6560] group-hover:bg-white" />
</PanelResizeHandle>
```
