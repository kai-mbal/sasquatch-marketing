---
description: N/A - React DnD does not interact with forms in the Sasquatch project.
globs: src/**/*.tsx
---

# React DnD and Forms

React DnD is not used within form contexts in this project. Drag and drop is used for UI reordering (kanban boards, sortable lists) rather than form interactions.

## File Upload Drop Zone (If Needed)

If file upload drag-and-drop is required, use the browser's native drag events instead of react-dnd:

```tsx
export function FileDropZone({ onFiles }: { onFiles: (files: File[]) => void }) {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <div
      onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={e => {
        e.preventDefault();
        setIsDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        onFiles(files);
      }}
      className="border-2 border-dashed rounded-lg p-8 text-center transition-colors"
      style={{
        borderColor: isDragOver ? '#1A3D2B' : '#ECEEED',
        backgroundColor: isDragOver ? '#E6F4EC' : 'transparent',
      }}
    >
      <p className="text-sm" style={{ color: '#5A6560' }}>
        Drop files here or click to upload
      </p>
    </div>
  );
}
```
