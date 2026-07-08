import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, CheckCircle2, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { searchableJurisdictions } from '../data/jurisdictions';

interface JurisdictionSearchProps {
  onRequestJurisdiction: (query: string) => void;
}

const MAX_RESULTS = 6;
const DEBOUNCE_MS = 250;

function countyLabel(countyName: string) {
  if (/county/i.test(countyName) || /^city & county/i.test(countyName)) return countyName;
  return `${countyName} County`;
}

export function JurisdictionSearch({ onRequestJurisdiction }: JurisdictionSearchProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  const matches = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return [];
    return searchableJurisdictions
      .filter((j) => j.name.toLowerCase().includes(q))
      .slice(0, MAX_RESULTS);
  }, [debouncedQuery]);

  const hasQuery = debouncedQuery.trim().length > 0;
  const hasMatches = matches.length > 0;

  return (
    <div className="max-w-xl mx-auto">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
          style={{ color: '#5A6560' }}
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Where do you work? Try a city or county…"
          className="pl-12 h-14 text-base shadow-lg text-[#1A1F1C]"
        />
      </div>

      <AnimatePresence>
        {hasQuery && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: 'easeInOut', layout: { duration: 0.45, ease: 'easeInOut' } }}
            className="mt-3 rounded-xl border shadow-lg overflow-hidden bg-white"
            style={{ borderColor: '#ECEEED' }}
          >
            {hasMatches ? (
              <ul>
                {matches.map((j) => (
                  <li
                    key={`${j.name}-${j.countyName}`}
                    className="flex items-center gap-3 px-5 py-4 border-b last:border-b-0"
                    style={{ borderColor: '#ECEEED' }}
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: '#4CAF70' }} />
                    <div className="flex-1">
                      <p className="font-semibold" style={{ color: '#1A1F1C' }}>
                        {j.name}
                      </p>
                      <p className="text-xs" style={{ color: '#5A6560' }}>
                        {countyLabel(j.countyName)} · {j.region}
                      </p>
                    </div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#E6F4EC', color: '#1E6B40' }}
                    >
                      Covered
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex items-center gap-4 px-5 py-5">
                <MapPin className="w-6 h-6 shrink-0" style={{ color: '#C8821A' }} />
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: '#1A1F1C' }}>
                    We don't cover "{query.trim()}" yet.
                  </p>
                  <p className="text-sm" style={{ color: '#5A6560' }}>
                    Want to be the reason we add it?
                  </p>
                </div>
                <Button
                  onClick={() => onRequestJurisdiction(query.trim())}
                  className="shrink-0 bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
                  style={{ fontWeight: 600 }}
                >
                  Request it
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
