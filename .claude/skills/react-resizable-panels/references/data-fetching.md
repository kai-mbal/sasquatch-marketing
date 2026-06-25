---
description: N/A - react-resizable-panels is a layout component with no data fetching concerns in the Sasquatch project.
globs: src/**/*.tsx
---

# React Resizable Panels and Data

`react-resizable-panels` is a pure layout library — it has no data fetching concerns.

Panel content is whatever components you render inside `<Panel>`. Each panel independently manages its own content and data loading:

```tsx
<PanelGroup direction="horizontal">
  <Panel defaultSize={35}>
    {/* This panel's content manages its own data */}
    <PermitListPanel />
  </Panel>
  <PanelResizeHandle className="w-1 bg-[#ECEEED] cursor-col-resize" />
  <Panel>
    {/* This panel shows selected item detail */}
    <PermitDetailPanel permitId={selectedPermitId} />
  </Panel>
</PanelGroup>
```

The panel library only controls sizing — all data flows through normal React patterns (props, state, context).
