import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CountUpProps {
  target: number;
  durationMs?: number;
  suffix?: string;
}

function CountUp({ target, durationMs = 1200, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();

    let frameId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, durationMs]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

interface CoverageCounterProps {
  counties: number;
  municipalities: number;
  onDark?: boolean;
}

export function CoverageCounter({ counties, municipalities, onDark = false }: CoverageCounterProps) {
  const numberColor = onDark ? '#FFFFFF' : '#1A3D2B';
  const labelColor = onDark ? 'rgba(255,255,255,0.7)' : '#5A6560';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
      <div>
        <div
          className="font-bold mb-1"
          style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: numberColor }}
        >
          <CountUp target={counties} />
        </div>
        <p className="text-sm" style={{ color: labelColor }}>Counties covered</p>
      </div>
      <div>
        <div
          className="font-bold mb-1"
          style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: numberColor }}
        >
          <CountUp target={municipalities} />
        </div>
        <p className="text-sm" style={{ color: labelColor }}>Municipalities covered</p>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <div
          className="font-bold mb-1"
          style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: '#4CAF70' }}
        >
          <CountUp target={counties + municipalities} suffix="+" />
        </div>
        <p className="text-sm" style={{ color: labelColor }}>Jurisdictions and growing</p>
      </div>
    </div>
  );
}
