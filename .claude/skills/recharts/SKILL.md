---
description: Covers Recharts data visualization usage in the Sasquatch project for displaying permit and job metrics.
globs: src/**/*.tsx
---

# Recharts Skill

Recharts is the charting library available in this project for data visualizations.

## Reference Files

- [patterns.md](references/patterns.md) - BarChart, LineChart, PieChart patterns
- [workflows.md](references/workflows.md) - Responsive containers, custom tooltips

## Core Components

```
ResponsiveContainer  // Makes chart fill parent width
BarChart / Bar       // Bar charts
LineChart / Line     // Line/trend charts
PieChart / Pie / Cell  // Pie/donut charts
AreaChart / Area     // Area/filled line charts
XAxis / YAxis        // Axes
CartesianGrid        // Background grid lines
Tooltip              // Hover data tooltip
Legend               // Chart legend
```

## Basic Setup

```tsx
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  { month: 'Jan', permits: 12 },
  { month: 'Feb', permits: 19 },
  { month: 'Mar', permits: 8 },
];

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#ECEEED" />
    <XAxis dataKey="month" tick={{ fill: '#5A6560', fontSize: 12 }} />
    <YAxis tick={{ fill: '#5A6560', fontSize: 12 }} />
    <Tooltip />
    <Bar dataKey="permits" fill="#1A3D2B" radius={[4, 4, 0, 0]} />
  </BarChart>
</ResponsiveContainer>
```
