export interface SupportedCounty {
  /** Display name shown on the site */
  name: string;
  /** Matches the polygon id in the Colorado county map SVG (always "X County") */
  svgId: string;
  municipalities: string[];
}

export interface JurisdictionRegion {
  region: string;
  counties: SupportedCounty[];
}

export const jurisdictionRegions: JurisdictionRegion[] = [
  {
    region: 'Denver Metro',
    counties: [
      { name: 'City & County of Denver', svgId: 'Denver County', municipalities: [] },
      { name: 'Broomfield', svgId: 'Broomfield County', municipalities: [] },
      {
        name: 'Adams',
        svgId: 'Adams County',
        municipalities: ['Brighton', 'Commerce City', 'Thornton', 'Westminster'],
      },
      {
        name: 'Arapahoe',
        svgId: 'Arapahoe County',
        municipalities: ['Centennial', 'Englewood', 'Greenwood Village', 'Littleton'],
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
        municipalities: ['Longmont', 'Louisville', 'Lafayette', 'Erie', 'Superior'],
      },
      {
        name: 'Larimer',
        svgId: 'Larimer County',
        municipalities: ['Fort Collins', 'Loveland', 'Estes Park', 'Wellington'],
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
        municipalities: ['Colorado Springs', 'Fountain', 'Manitou Springs', 'Monument'],
      },
      {
        name: 'Teller',
        svgId: 'Teller County',
        municipalities: ['Woodland Park', 'Cripple Creek', 'Victor'],
      },
      { name: 'Pueblo County', svgId: 'Pueblo County', municipalities: ['City of Pueblo'] },
    ],
  },
  {
    region: 'Western Slope',
    counties: [
      {
        name: 'Garfield',
        svgId: 'Garfield County',
        municipalities: ['Glenwood Springs', 'Carbondale', 'Rifle', 'Silt', 'Basalt'],
      },
      { name: 'Mesa', svgId: 'Mesa County', municipalities: ['Grand Junction', 'Fruita', 'Palisade'] },
      {
        name: 'Eagle',
        svgId: 'Eagle County',
        municipalities: ['Vail', 'Avon', 'Gypsum', 'Minturn', 'Red Cliff'],
      },
    ],
  },
  {
    region: 'Mountain Communities',
    counties: [
      {
        name: 'Summit',
        svgId: 'Summit County',
        municipalities: ['Breckenridge', 'Frisco', 'Silverthorne', 'Dillon'],
      },
      { name: 'Routt', svgId: 'Routt County', municipalities: ['Steamboat Springs', 'Hayden', 'Oak Creek'] },
      {
        name: 'Clear Creek',
        svgId: 'Clear Creek County',
        municipalities: ['Idaho Springs', 'Georgetown', 'Silver Plume'],
      },
      { name: 'Gilpin', svgId: 'Gilpin County', municipalities: ['Central City', 'Black Hawk'] },
      { name: 'Park', svgId: 'Park County', municipalities: ['Fairplay', 'Alma'] },
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
    { name: c.name, countyName: c.name, region: r.region },
    ...c.municipalities.map((m) => ({ name: m, countyName: c.name, region: r.region })),
  ])
);

export const supportedCountySvgIds = new Set(
  jurisdictionRegions.flatMap((r) => r.counties.map((c) => c.svgId))
);

export const totalCounties = jurisdictionRegions.reduce((sum, r) => sum + r.counties.length, 0);
export const totalMunicipalities = jurisdictionRegions.reduce(
  (sum, r) => sum + r.counties.reduce((s, c) => s + c.municipalities.length, 0),
  0
);
export const totalJurisdictions = totalCounties + totalMunicipalities;
