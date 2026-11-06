import { Link } from 'react-router';
import { Shield } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { allFeatures, type Feature } from '../data/features';
import { COVERAGE_STATEMENT, VERIFY_NOTE } from '../data/jurisdictions';

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
  usePageTitle(
    'Features',
    'Track jobs, permits, inspections, deadlines, and reminders in one place, with local requirements and portal links for supported Colorado jurisdictions.'
  );
  const attentionFeatures = allFeatures.filter((f) => f.category === 'attention');
  const permitFeatures = allFeatures.filter((f) => f.category === 'permit');
  const inspectionFeatures = allFeatures.filter((f) => f.category === 'inspection');
  const otherFeatures = allFeatures.filter((f) => !f.category);

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
            Everything Your Permit Workflow Needs
          </h1>
          <p
            className="text-white/70 text-lg max-w-4xl mx-auto"
            style={{
              lineHeight: 1.6,
            }}
          >
            One place to manage jobs, permits, inspections, deadlines, reminders, and what needs attention
            today.
          </p>
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
              JOBS, PERMITS &amp; INSPECTIONS
            </div>
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              What Sasquatch Tracks
            </h2>
            <p
              className="text-[#5A6560] text-lg max-w-3xl mx-auto"
              style={{
                lineHeight: 1.6,
              }}
            >
              Replace the spreadsheet with one view of what's open, what's due, and what needs you today.
            </p>
          </div>

          <div className="space-y-12">
            <FeatureGroup title="Permit Administration" features={permitFeatures} />

            <div className="border-t border-[#ECEEED] pt-12">
              <Card className="p-8 bg-white border-2 border-[#4CAF70]">
                <div className="grid lg:grid-cols-2 gap-8">
                  <FeatureGroup
                    title="What Needs Attention"
                    features={attentionFeatures}
                    gridClassName="grid grid-cols-1 gap-y-4"
                  />

                  <div className="lg:border-l lg:border-[#ECEEED] lg:pl-8">
                    <FeatureGroup
                      title="Inspection Tracking"
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

      {/* Jurisdiction Information */}
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
              ALSO BUILT IN
            </div>
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: 700,
              }}
            >
              Local requirements and portal links
            </h2>
            <p className="text-[#5A6560] max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
              {COVERAGE_STATEMENT}
            </p>
          </div>

          <Card className="bg-[#F7F8F6] text-[#1A1F1C] p-8 lg:p-10 rounded-xl shadow-lg">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <ul className="space-y-4">
                {[
                  'Local requirements for supported jurisdictions',
                  'Links to jurisdiction portals',
                  'Jurisdiction chat for permitting questions',
                  'Search any city or county to check coverage',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
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
                    Check Your Jurisdiction
                  </Button>
                </Link>
                <p className="text-[#5A6560] text-sm">{VERIFY_NOTE}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1A3D2B] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            See it in action
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
            Send a message and set up a 20-minute walkthrough of your jobs, permits, and inspections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#1A3D2B] hover:bg-gray-100"
                style={{ fontWeight: 600 }}
              >
                Book a 20-minute demo
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/10 hover:text-white"
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
