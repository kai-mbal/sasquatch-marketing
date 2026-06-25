type StatusType = 'issued' | 'in-review' | 'blocked' | 'pending' | 'live' | 'coming-soon';

interface StatusChipProps {
  status: StatusType;
  label?: string;
}

const statusConfig = {
  issued: {
    bg: '#E6F4EC',
    text: '#1E6B40',
    dot: '#4CAF70',
    defaultLabel: 'ISSUED',
  },
  'in-review': {
    bg: '#FBF0E0',
    text: '#8B5B10',
    dot: '#C8821A',
    defaultLabel: 'IN REVIEW',
  },
  blocked: {
    bg: '#FCE8E6',
    text: '#8B1F18',
    dot: '#CC3B2F',
    defaultLabel: 'BLOCKED',
  },
  pending: {
    bg: '#ECEEED',
    text: '#3D4844',
    dot: '#7A8B84',
    defaultLabel: 'PENDING',
  },
  live: {
    bg: '#E6F4EC',
    text: '#1E6B40',
    dot: '#4CAF70',
    defaultLabel: 'LIVE',
  },
  'coming-soon': {
    bg: '#FBF0E0',
    text: '#8B5B10',
    dot: '#C8821A',
    defaultLabel: 'COMING SOON',
  },
};

export function StatusChip({ status, label }: StatusChipProps) {
  const config = statusConfig[status];
  const displayLabel = label || config.defaultLabel;

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
      style={{
        backgroundColor: config.bg,
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        fontWeight: 400,
      }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: config.dot }}
      />
      <span style={{ color: config.text }}>{displayLabel}</span>
    </div>
  );
}
