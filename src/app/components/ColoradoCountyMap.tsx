import { useEffect, useRef, useState } from 'react';
// Base map: "Map of Colorado counties, blank.svg" by David Benbennick, Wikimedia Commons, public domain.
import mapSvg from '../../assets/maps/colorado-counties.svg?raw';
import { jurisdictionRegions, supportedCountySvgIds } from '../data/jurisdictions';

interface ColoradoCountyMapProps {
  onSelectCounty?: (countyName: string) => void;
}

const countyBySvgId = new Map(jurisdictionRegions.flatMap((r) => r.counties.map((c) => [c.svgId, c])));

const SUPPORTED_FILL = '#B7E0C4';
const SUPPORTED_FILL_HOVER = '#4CAF70';
const UNSUPPORTED_FILL = '#ECEEED';
const UNSUPPORTED_FILL_HOVER = '#DADDD9';

export function ColoradoCountyMap({ onSelectCounty }: ColoradoCountyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<{ svgId: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const polygons = container.querySelectorAll<SVGPolygonElement>('polygon[id$="County"]');
    const cleanups: Array<() => void> = [];

    polygons.forEach((polygon) => {
      const svgId = polygon.id;
      const isSupported = supportedCountySvgIds.has(svgId);

      polygon.setAttribute('fill', isSupported ? SUPPORTED_FILL : UNSUPPORTED_FILL);
      polygon.style.cursor = isSupported ? 'pointer' : 'default';
      polygon.style.transition = 'fill 150ms ease';

      const handleEnter = () => {
        polygon.setAttribute('fill', isSupported ? SUPPORTED_FILL_HOVER : UNSUPPORTED_FILL_HOVER);
        const rect = polygon.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setHovered({
          svgId,
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top - containerRect.top,
        });
      };
      const handleLeave = () => {
        polygon.setAttribute('fill', isSupported ? SUPPORTED_FILL : UNSUPPORTED_FILL);
        setHovered((prev) => (prev?.svgId === svgId ? null : prev));
      };
      const handleClick = () => {
        if (isSupported) {
          const county = countyBySvgId.get(svgId);
          if (county) onSelectCounty?.(county.name);
        }
      };

      polygon.addEventListener('mouseenter', handleEnter);
      polygon.addEventListener('mouseleave', handleLeave);
      polygon.addEventListener('click', handleClick);

      cleanups.push(() => {
        polygon.removeEventListener('mouseenter', handleEnter);
        polygon.removeEventListener('mouseleave', handleLeave);
        polygon.removeEventListener('click', handleClick);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [onSelectCounty]);

  const hoveredCounty = hovered ? countyBySvgId.get(hovered.svgId) : null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div ref={containerRef} className="relative">
        <div className="[&_svg]:w-full [&_svg]:h-auto" dangerouslySetInnerHTML={{ __html: mapSvg }} />

        {hovered && (
          <div
            className="absolute pointer-events-none z-10 -translate-x-1/2 -translate-y-full px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap"
            style={{
              left: hovered.x,
              top: hovered.y - 10,
              backgroundColor: '#1A3D2B',
              color: 'white',
            }}
          >
            <div className="font-semibold">{hoveredCounty ? hoveredCounty.name : hovered.svgId}</div>
            <div className="text-xs text-white/70">
              {hoveredCounty
                ? `${hoveredCounty.municipalities.length} ${
                    hoveredCounty.municipalities.length === 1 ? 'municipality' : 'municipalities'
                  } covered`
                : 'Not yet covered — request it below'}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: SUPPORTED_FILL }} />
          <span className="text-[#5A6560]">Supported</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: UNSUPPORTED_FILL }} />
          <span className="text-[#5A6560]">Not yet covered</span>
        </div>
      </div>
    </div>
  );
}
