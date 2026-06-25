---
description: Documents responsive container setup and custom tooltip patterns for Recharts in the Sasquatch project.
globs: src/**/*.tsx
---

# Recharts Workflows

## Always Use ResponsiveContainer

Never set fixed pixel widths on charts — always wrap with `ResponsiveContainer`:

```tsx
// Good
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>...</BarChart>
</ResponsiveContainer>

// Bad — breaks on mobile
<BarChart width={600} height={300} data={data}>...</BarChart>
```

## Custom Tooltip

```tsx
interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className="rounded-lg p-3 shadow-lg border"
      style={{ backgroundColor: 'white', borderColor: '#ECEEED' }}
    >
      <p className="text-sm font-semibold mb-1" style={{ color: '#1A1F1C' }}>{label}</p>
      {payload.map(entry => (
        <p key={entry.name} className="text-xs" style={{ color: '#5A6560' }}>
          {entry.name}: <span style={{ color: '#1A3D2B' }}>{entry.value}</span>
        </p>
      ))}
    </div>
  );
}

// Usage
<Tooltip content={<CustomTooltip />} />
```

## Chart Card Wrapper

Wrap charts in a card for consistent appearance:

```tsx
<div className="p-6 rounded-xl border border-[#ECEEED] bg-white">
  <h3 className="text-base font-semibold mb-4" style={{ color: '#1A1F1C' }}>
    Permit Activity
  </h3>
  <ResponsiveContainer width="100%" height={240}>
    <BarChart data={data}>...</BarChart>
  </ResponsiveContainer>
</div>
```
