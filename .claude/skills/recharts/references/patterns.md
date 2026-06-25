---
description: Documents BarChart, LineChart, and PieChart patterns with project brand colors for the Sasquatch project.
globs: src/**/*.tsx
---

# Recharts Patterns

## Bar Chart

```tsx
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const permitData = [
  { month: 'Jan', approved: 12, pending: 5 },
  { month: 'Feb', approved: 19, pending: 3 },
  { month: 'Mar', approved: 8, pending: 9 },
];

<ResponsiveContainer width="100%" height={280}>
  <BarChart data={permitData} barGap={4}>
    <CartesianGrid strokeDasharray="3 3" stroke="#ECEEED" vertical={false} />
    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#5A6560', fontSize: 12 }} />
    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#5A6560', fontSize: 12 }} />
    <Tooltip contentStyle={{ borderRadius: '8px', borderColor: '#ECEEED' }} />
    <Bar dataKey="approved" fill="#1A3D2B" radius={[4, 4, 0, 0]} />
    <Bar dataKey="pending" fill="#4CAF70" radius={[4, 4, 0, 0]} />
  </BarChart>
</ResponsiveContainer>
```

## Line Chart (Trend)

```tsx
import { LineChart, Line } from 'recharts';

<ResponsiveContainer width="100%" height={240}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#ECEEED" />
    <XAxis dataKey="date" tick={{ fill: '#5A6560', fontSize: 12 }} />
    <YAxis tick={{ fill: '#5A6560', fontSize: 12 }} />
    <Tooltip />
    <Line
      type="monotone"
      dataKey="permits"
      stroke="#1A3D2B"
      strokeWidth={2}
      dot={{ fill: '#1A3D2B', r: 4 }}
      activeDot={{ r: 6 }}
    />
  </LineChart>
</ResponsiveContainer>
```

## Pie Chart

```tsx
import { PieChart, Pie, Cell, Legend } from 'recharts';

const statusData = [
  { name: 'Approved', value: 45 },
  { name: 'Pending', value: 30 },
  { name: 'Rejected', value: 25 },
];

const COLORS = ['#1A3D2B', '#4CAF70', '#ECEEED'];

<ResponsiveContainer width="100%" height={280}>
  <PieChart>
    <Pie data={statusData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value">
      {statusData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
    </Pie>
    <Legend />
    <Tooltip />
  </PieChart>
</ResponsiveContainer>
```
