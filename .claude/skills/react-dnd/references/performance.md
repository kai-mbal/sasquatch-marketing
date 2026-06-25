---
description: Documents performance patterns for react-dnd to avoid unnecessary re-renders in draggable components.
globs: src/**/*.tsx
---

# React DnD Performance

## Memoize Draggable Items

Wrap draggable items with `memo` to avoid re-renders when sibling items change:

```tsx
import { memo } from 'react';

export const DraggablePermit = memo(function DraggablePermit({ id, title, onMove }: Props) {
  const [{ isDragging }, dragRef] = useDrag({ ... });
  return <div ref={dragRef}>...</div>;
});
```

## Stable Callback References

Use `useCallback` for move handlers passed to many draggable children:

```tsx
const handleMove = useCallback((id: string, status: string) => {
  setItems(prev => prev.map(item => item.id === id ? { ...item, status } : item));
}, []); // stable — only depends on setter
```

## Minimize collect Usage

Only collect the monitor values you actually use:

```tsx
// Good — only what's needed
const [{ isDragging }, dragRef] = useDrag({
  type: ItemTypes.PERMIT,
  item: { id },
  collect: monitor => ({ isDragging: monitor.isDragging() }),
});

// Avoid — collecting unused values causes extra re-renders
collect: monitor => ({
  isDragging: monitor.isDragging(),
  canDrag: monitor.canDrag(),
  itemType: monitor.getItemType(), // not needed
  initialOffset: monitor.getInitialSourceClientOffset(), // not needed
})
```

## DndProvider Placement

Place `DndProvider` as close to the drag/drop components as possible, not at the app root, to limit its render scope.
