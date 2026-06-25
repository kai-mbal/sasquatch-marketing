import { Link } from 'react-router';
import { Shield } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { FeatureCard } from '../components/FeatureCard';
import { Button } from '../components/ui/button';
import { allFeatures } from '../data/features';

export function FeaturesPage() {
  usePageTitle('Features');
  const integrations = [
    { name: 'Google Calendar', status: 'Coming Soon' },
    { name: 'QuickBooks', status: 'Coming Soon' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#1A3D2B] text-white pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Every feature your permit operation needs.
          </h1>
          <p
            className="text-white/70 text-lg max-w-4xl mx-auto"
            style={{
              lineHeight: 1.6,
            }}
          >
            Built by contractors, for contractors. No bloat. No learning curve. Just the tools you need to stay on top
            of every permit, every inspection, and every job.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 lg:py-24 bg-[#F7F8F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allFeatures.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                slug={feature.slug}
              />
            ))}
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
              We're building connections to the tools you already use. Connect your accounting, project management, and
              calendar systems.
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
            Try Sasquatch free for 14 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.sasquatchpermit.com">
              <Button
                size="lg"
                className="bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
                style={{ fontWeight: 600 }}
              >
                Start Free Trial
              </Button>
            </a>
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