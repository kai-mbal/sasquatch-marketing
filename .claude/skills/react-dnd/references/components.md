---
description: Documents DndProvider setup and drag and drop component composition in the Sasquatch project.
globs: src/**/*.tsx
---

# React DnD Components

## DndProvider Setup

`DndProvider` must wrap any component tree using `useDrag`/`useDrop`:

```tsx
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export function KanbanBoard() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-4">
        <Column status="pending" />
        <Column status="approved" />
        <Column status="completed" />
      </div>
    </DndProvider>
  );
}
```

## Complete Kanban Column

```tsx
interface ColumnProps {
  status: string;
  permits: Permit[];
  onMove: (id: string, newStatus: string) => void;
}

export function Column({ status, permits, onMove }: ColumnProps) {
  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.PERMIT,
    drop: (item: { id: string }) => onMove(item.id, status),
    collect: monitor => ({ isOver: monitor.isOver() }),
  });

  return (
    <div
      ref={dropRef}
      className="flex-1 min-h-64 rounded-xl border border-[#ECEEED] p-4"
      style={{ backgroundColor: isOver ? '#E6F4EC' : 'white' }}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#5A6560' }}>
        {status}
      </h3>
      <div className="flex flex-col gap-2">
        {permits.map(p => <DraggablePermit key={p.id} id={p.id} title={p.title} />)}
      </div>
    </div>
  );
}
```
