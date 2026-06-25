---
description: Documents useDrag and useDrop hooks from react-dnd for the Sasquatch project.
globs: src/**/*.tsx
---

# React DnD Hooks

## useDrag

Makes a component draggable:

```tsx
import { useDrag } from 'react-dnd';
import { ItemTypes } from './itemTypes';

interface DraggablePermitProps {
  id: string;
  title: string;
}

export function DraggablePermit({ id, title }: DraggablePermitProps) {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.PERMIT,
    item: { id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      className="p-4 rounded-lg border border-[#ECEEED] cursor-grab active:cursor-grabbing"
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isDragging ? '#E6F4EC' : 'white',
      }}
    >
      {title}
    </div>
  );
}
```

## useDrop

Makes a container a drop target:

```tsx
import { useDrop } from 'react-dnd';
import { ItemTypes } from './itemTypes';

export function DropZone({ onDrop }: { onDrop: (id: string) => void }) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.PERMIT,
    drop: (item: { id: string }) => onDrop(item.id),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={dropRef}
      className="min-h-32 rounded-lg border-2 border-dashed p-4 transition-colors"
      style={{
        borderColor: isOver ? '#1A3D2B' : '#ECEEED',
        backgroundColor: isOver ? '#E6F4EC' : 'transparent',
      }}
    >
      {isOver ? 'Release to drop' : 'Drop permits here'}
    </div>
  );
}
```
