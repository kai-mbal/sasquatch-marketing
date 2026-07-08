import { Link } from 'react-router';
import { Shield } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { CoverageCounter } from '../components/CoverageCounter';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { allFeatures, type Feature } from '../data/features';
import { totalCounties, totalMunicipalities } from '../data/jurisdictions';

function FeatureGroup({
  title,
  features,
  gridClassName = 'grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6',
}: {
  title: string;
  features: Feature[];
  gridClassName?: string;
}) {
  return (
    <div>
      <h3
        className="text-[#1A1F1C] mb-6"
        style={{
          fontSize: '22px',
          fontWeight: 700,
        }}
      >
        {title}
      </h3>
      <div className={gridClassName}>
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <feature.icon className="w-5 h-5 text-[#1A3D2B] flex-shrink-0 mt-0.5" />
            <div>
              <h4
                className="text-[#1A1F1C] mb-1"
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                {feature.title}
              </h4>
              <p className="text-[#5A6560] text-sm" style={{ lineHeight: 1.5 }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturesPage() {
  usePageTitle('Features');
  const integrations = [
    { name: 'Google Calendar', status: 'Coming Soon' },
    { name: 'QuickBooks', status: 'Coming Soon' },
  ];

  const attentionCenter = allFeatures.find((f) => f.title === 'Attention Center')!;
  const permitFeatures = allFeatures.filter((f) => f.category === 'permit');
  const inspectionFeatures = allFeatures.filter((f) => f.category === 'inspection');
  const otherFeatures = allFeatures.filter((f) => f.title !== 'Attention Center' && !f.category);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#1A3D2B] text-white pt-32 pb-16 lg:pb-20 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60M0 0h60M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Jurisdiction Intelligence and So Much More
          </h1>
          <p
            className="text-white/70 text-lg max-w-4xl mx-auto"
            style={{
              lineHeight: 1.6,
            }}
          >
            No bloat. No learning curve. Know what a jurisdiction requires first, then track the permits,
            inspections, and jobs that follow.
          </p>
        </div>
      </section>

      {/* Jurisdiction Intelligence Spotlight */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-wider mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: '#4CAF70',
                letterSpacing: '0.1em',
              }}
            >
              THE CORE OF SASQUATCH
            </div>
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: 700,
              }}
            >
              Jurisdiction Intelligence
            </h2>
            <p className="text-[#5A6560] max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
              Codes, cutoff times, contacts, and quirks for every supported Colorado county and municipality,
              built in and always up to date.
            </p>
          </div>

          <CoverageCounter counties={totalCounties} municipalities={totalMunicipalities} />

          <Card className="bg-[#F7F8F6] text-[#1A1F1C] p-8 lg:p-10 rounded-xl mt-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <ul className="space-y-4">
                {[
                  'All supported Colorado counties — more added regularly',
                  'Codes, cutoff times, contacts, and quirks in one place',
                  'AI assistant answers permitting questions in plain language',
                  'Search any city or county to check coverage instantly',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Shield className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <Link to="/jurisdictions" className="block">
                  <Button
                    className="w-full bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
                    style={{ fontWeight: 600 }}
                  >
                    Explore Jurisdiction Coverage
                  </Button>
                </Link>
                <Link to="/pricing" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#1A3D2B] text-[#1A3D2B] hover:bg-white"
                    style={{ fontWeight: 600 }}
                  >
                    See Database Access Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Permit, Inspection & Job Tracking */}
      <section className="py-16 lg:py-24 bg-[#F7F8F6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-wider mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: '#5A6560',
                letterSpacing: '0.1em',
              }}
            >
              ADD-ONS: PERMIT, INSPECTION &amp; JOB TRACKING
            </div>
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              Everything Else Sasquatch Tracks
            </h2>
            <p
              className="text-[#5A6560] text-lg max-w-3xl mx-auto"
              style={{
                lineHeight: 1.6,
              }}
            >
              Layer these on top of Jurisdiction Database Access to run permits, inspections, and jobs without
              leaving Sasquatch.
            </p>
          </div>

          <div className="space-y-12">
            <FeatureGroup title="Permit Administration" features={permitFeatures} />

            <div className="border-t border-[#ECEEED] pt-12">
              <Card className="p-8 bg-white border-2 border-[#4CAF70]">
                <div className="grid lg:grid-cols-2 gap-8">
                  <FeatureGroup
                    title="Priority Alerting"
                    features={[attentionCenter]}
                    gridClassName="grid grid-cols-1 gap-y-4"
                  />

                  <div className="lg:border-l lg:border-[#ECEEED] lg:pl-8">
                    <FeatureGroup
                      title="Inspection Tracking & Scheduling"
                      features={inspectionFeatures}
                      gridClassName="grid grid-cols-1 gap-y-4"
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="border-t border-[#ECEEED] pt-12">
              <FeatureGroup title="Team & Workflow Tools" features={otherFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-[#1A3D2B] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              Integrations
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Connections to the tools you already use are on the way. Connect your accounting, project
              management, and calendar systems.
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {integrations.map((integration, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-6 text-center border border-white/20">
                <Shield className="w-8 h-8 mx-auto mb-3 text-white/60" />
                <h3 className="font-semibold mb-2">
                  {integration.name}
                </h3>
                <span className="text-xs text-white/60 uppercase tracking-wider">{integration.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-[#1A1F1C] mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            See it in action
          </h2>
          <p className="text-[#5A6560] text-lg mb-8">
            Request early access. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/coming-soon">
              <Button
                size="lg"
                className="bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
                style={{ fontWeight: 600 }}
              >
                Request Early Access
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#1A3D2B] text-[#1A3D2B] hover:bg-[#F7F8F6]"
                style={{ fontWeight: 600 }}
              >
                See Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
