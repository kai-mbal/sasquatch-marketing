---
description: N/A - React DnD has no data fetching concerns. This file documents the data update pattern after drag events.
globs: src/**/*.tsx
---

# React DnD and Data

React DnD does not handle data fetching. The `drop` handler is where you update data after a drag operation.

## Updating State After Drop

```tsx
export function KanbanBoard() {
  const [items, setItems] = useState<PermitItem[]>(initialItems);

  const handleMove = (id: string, newStatus: string) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, status: newStatus } : item)
    );

    // If you need to persist: call API here
    // updatePermitStatus(id, newStatus).catch(() => {
    //   toast.error('Failed to update permit status');
    //   setItems(prev); // revert
    // });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Column status="pending" items={items.filter(i => i.status === 'pending')} onMove={handleMove} />
      <Column status="approved" items={items.filter(i => i.status === 'approved')} onMove={handleMove} />
    </DndProvider>
  );
}
```
