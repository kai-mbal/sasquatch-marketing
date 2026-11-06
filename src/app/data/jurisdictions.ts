export interface SupportedCounty {
  /** Display name shown on the site */
  name: string;
  /** Matches the polygon id in the Colorado county map SVG (always "X County") */
  svgId: string;
  municipalities: string[];
  /** True when the city and county are one jurisdiction (Denver, Broomfield) */
  isConsolidated?: boolean;
  /** False when a municipality is supported but the county itself is not */
  isCountySupported?: boolean;
}

export interface JurisdictionRegion {
  region: string;
  counties: SupportedCounty[];
}

/**
 * The supported list: every jurisdiction with at least one row in the
 * production.extracted_fields view in sasquatch-data, as of 2026-11-06
 * (18 counties, 41 municipalities, 59 total). The view has no county for a
 * municipality, so the grouping below is by geography. Keep this in step with
 * the view when jurisdictions are added.
 */
export const jurisdictionRegions: JurisdictionRegion[] = [
  {
    region: 'Denver Metro',
    counties: [
      { name: 'City & County of Denver', svgId: 'Denver County', municipalities: [], isConsolidated: true },
      { name: 'Broomfield', svgId: 'Broomfield County', municipalities: [], isConsolidated: true },
      {
        name: 'Adams',
        svgId: 'Adams County',
        municipalities: ['Brighton', 'Commerce City', 'Thornton', 'Westminster'],
      },
      {
        name: 'Arapahoe',
        svgId: 'Arapahoe County',
        municipalities: ['Aurora', 'Centennial', 'Englewood', 'Greenwood Village', 'Littleton'],
      },
      {
        name: 'Jefferson',
        svgId: 'Jefferson County',
        municipalities: ['Lakewood', 'Arvada', 'Golden', 'Wheat Ridge'],
      },
      {
        name: 'Douglas',
        svgId: 'Douglas County',
        municipalities: ['Castle Rock', 'Parker', 'Lone Tree', 'Castle Pines'],
      },
    ],
  },
  {
    region: 'Northern Front Range',
    counties: [
      {
        name: 'Boulder',
        svgId: 'Boulder County',
        municipalities: ['City of Boulder', 'Longmont', 'Louisville', 'Lafayette', 'Erie', 'Superior'],
      },
      {
        name: 'Larimer',
        svgId: 'Larimer County',
        municipalities: ['Fort Collins', 'Loveland', 'Wellington'],
      },
      {
        name: 'Weld',
        svgId: 'Weld County',
        municipalities: ['Greeley', 'Windsor', 'Evans', 'Firestone', 'Fort Lupton'],
      },
    ],
  },
  {
    region: 'Pikes Peak & South',
    counties: [
      {
        name: 'El Paso',
        svgId: 'El Paso County',
        municipalities: ['Colorado Springs', 'Manitou Springs', 'Monument'],
      },
      { name: 'Teller', svgId: 'Teller County', municipalities: ['Woodland Park'] },
      { name: 'Pueblo County', svgId: 'Pueblo County', municipalities: ['City of Pueblo'] },
    ],
  },
  {
    region: 'Western Slope',
    counties: [
      { name: 'Garfield', svgId: 'Garfield County', municipalities: [] },
      { name: 'Mesa', svgId: 'Mesa County', municipalities: ['Grand Junction', 'Fruita'] },
      { name: 'Eagle', svgId: 'Eagle County', municipalities: ['Basalt'] },
      { name: 'Archuleta', svgId: 'Archuleta County', municipalities: [] },
    ],
  },
  {
    region: 'Mountain Communities',
    counties: [
      { name: 'Summit', svgId: 'Summit County', municipalities: [] },
      {
        name: 'Clear Creek',
        svgId: 'Clear Creek County',
        municipalities: ['Georgetown'],
        isCountySupported: false,
      },
      { name: 'Park', svgId: 'Park County', municipalities: ['Fairplay'] },
    ],
  },
];

export interface SearchableJurisdiction {
  name: string;
  countyName: string;
  region: string;
}

export const searchableJurisdictions: SearchableJurisdiction[] = jurisdictionRegions.flatMap((r) =>
  r.counties.flatMap((c) => [
    ...(c.isCountySupported === false ? [] : [{ name: c.name, countyName: c.name, region: r.region }]),
    ...c.municipalities.map((m) => ({ name: m, countyName: c.name, region: r.region })),
  ])
);

const supportedCounties = jurisdictionRegions.flatMap((r) =>
  r.counties.filter((c) => c.isCountySupported !== false)
);

export const supportedCountySvgIds = new Set(supportedCounties.map((c) => c.svgId));

export const totalCounties = supportedCounties.length;
export const totalMunicipalities = jurisdictionRegions.reduce(
  (sum, r) => sum + r.counties.reduce((s, c) => s + c.municipalities.length, 0),
  0
);
export const totalJurisdictions = totalCounties + totalMunicipalities;

export const COVERAGE_STATEMENT = `Local requirements available for ${totalJurisdictions} supported Colorado jurisdictions, with more added based on customer need.`;

export const VERIFY_NOTE =
  'Always verify requirements with the jurisdiction. Sasquatch does not provide legal advice or guarantee code compliance.';
