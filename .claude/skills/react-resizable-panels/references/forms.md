---
description: N/A - react-resizable-panels is not used in form contexts in the Sasquatch project.
globs: src/**/*.tsx
---

# React Resizable Panels and Forms

`react-resizable-panels` is not used in form contexts in this project. It is used for layout panels (sidebars, detail views, split editors).

If a form is placed inside a panel, it works normally — the panel just provides the layout container:

```tsx
<PanelGroup direction="horizontal">
  <Panel defaultSize={40}>
    {/* Form inside a panel — works normally */}
    <div className="p-6 overflow-auto h-full">
      <h2 className="text-xl font-semibold mb-4">New Permit</h2>
      <ContactForm />
    </div>
  </Panel>
  <PanelResizeHandle className="w-1 bg-[#ECEEED] cursor-col-resize" />
  <Panel>
    <PermitPreview />
  </Panel>
</PanelGroup>
```

No special integration between panels and forms is required.
