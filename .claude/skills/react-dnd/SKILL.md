---
description: Covers react-dnd drag and drop usage in the Sasquatch project for draggable UI elements.
globs: src/**/*.tsx
---

# React DnD Skill

`react-dnd` with `react-dnd-html5-backend` provides drag and drop functionality.

## Reference Files

- [hooks.md](references/hooks.md) - useDrag, useDrop hooks
- [components.md](references/components.md) - DndProvider setup
- [data-fetching.md](references/data-fetching.md) - N/A
- [state.md](references/state.md) - Drag state management
- [forms.md](references/forms.md) - N/A
- [performance.md](references/performance.md) - Avoiding re-renders

## Setup

```tsx
// Wrap app or section with DndProvider
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

<DndProvider backend={HTML5Backend}>
  <DraggableList />
</DndProvider>
```

## Item Types

Define item type constants:

```ts
export const ItemTypes = {
  PERMIT: 'permit',
  JOB: 'job',
  TASK: 'task',
} as const;
```
