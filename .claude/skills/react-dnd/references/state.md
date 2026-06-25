---
description: Documents drag state management patterns with react-dnd in the Sasquatch project.
globs: src/**/*.tsx
---

# React DnD State Management

## Drag State from collect

Use `collect` to access drag/drop monitor state:

```tsx
const [{ isDragging }, dragRef] = useDrag({
  type: ItemTypes.PERMIT,
  item: { id, title },
  collect: monitor => ({
    isDragging: monitor.isDragging(),
  }),
});

const [{ isOver, canDrop, draggingItem }, dropRef] = useDrop({
  accept: ItemTypes.PERMIT,
  collect: monitor => ({
    isOver: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    draggingItem: monitor.getItem<{ id: string }>(),
  }),
});
```

## Ordered List (Re-ordering)

Track order in component state and update on drop:

```tsx
const [orderedIds, setOrderedIds] = useState(() => items.map(i => i.id));

const moveItem = useCallback((dragId: string, dropId: string) => {
  setOrderedIds(prev => {
    const from = prev.indexOf(dragId);
    const to = prev.indexOf(dropId);
    const next = [...prev];
    next.splice(from, 1);
    next.splice(to, 0, dragId);
    return next;
  });
}, []);

const orderedItems = orderedIds.map(id => items.find(i => i.id === id)!);
```

## Visual Feedback Styling

```tsx
// Dragging element: reduce opacity
style={{ opacity: isDragging ? 0.4 : 1 }}

// Drop target when hovering
style={{ backgroundColor: isOver && canDrop ? '#E6F4EC' : 'white' }}

// Drop target border highlight
className={`border-2 ${isOver ? 'border-[#1A3D2B]' : 'border-dashed border-[#ECEEED]'}`}
```
