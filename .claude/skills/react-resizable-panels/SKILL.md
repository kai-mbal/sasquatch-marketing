---
description: Covers react-resizable-panels usage in the Sasquatch project for split-panel layouts.
globs: src/**/*.tsx
---

# React Resizable Panels Skill

`react-resizable-panels` enables split-panel resizable layouts.

## Reference Files

- [hooks.md](references/hooks.md) - usePanel hook
- [components.md](references/components.md) - PanelGroup, Panel, PanelResizeHandle
- [data-fetching.md](references/data-fetching.md) - N/A
- [state.md](references/state.md) - Panel size state, persistence
- [forms.md](references/forms.md) - N/A
- [performance.md](references/performance.md) - Collapsible panels

## Basic Setup

```tsx
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';

<PanelGroup direction="horizontal" className="h-screen">
  <Panel defaultSize={30} minSize={20}>
    <Sidebar />
  </Panel>
  <PanelResizeHandle className="w-1 bg-[#ECEEED] hover:bg-[#1A3D2B] transition-colors cursor-col-resize" />
  <Panel>
    <MainContent />
  </Panel>
</PanelGroup>
```

## Directions

- `direction="horizontal"` — side-by-side panels
- `direction="vertical"` — stacked panels
