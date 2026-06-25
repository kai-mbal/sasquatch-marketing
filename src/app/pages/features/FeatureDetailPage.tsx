import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { usePageTitle } from '../../hooks/usePageTitle';
import { Button } from '../../components/ui/button';
import { allFeatures } from '../../data/features';

export function FeatureDetailPage() {
  const { slug } = useParams();
  const feature = allFeatures.find((f) => f.slug === slug);
  usePageTitle(feature?.title);

  if (!feature) {
    return <Navigate to="/features" replace />;
  }

  const Icon = feature.icon;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#F7F8F6] pt-32 pb-12 lg:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-[#1A3D2B] hover:text-[#2D5A3D] mb-8 transition-colors"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all features
          </Link>

          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-xl bg-[#E6F4EC] flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-[#1A3D2B]" />
            </div>
            <div>
              <h1
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {feature.title}
              </h1>
              <p
                className="text-[#5A6560] text-lg"
                style={{
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {feature.longDescription.map((paragraph, i) => (
              <p
                key={i}
                className="text-[#1A1F1C] mb-6"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                }}
              >
                {paragraph}
              </p>
            ))}

            {feature.howItWorks && feature.howItWorks.length > 0 && (
              <div className="mt-12">
                <h2
                  className="text-[#1A1F1C] mb-6"
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                  }}
                >
                  How it works
                </h2>
                <ul className="space-y-4">
                  {feature.howItWorks.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-1" />
                      <span
                        className="text-[#1A1F1C]"
                        style={{
                          fontSize: '16px',
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {feature.whyItMatters && feature.whyItMatters.length > 0 && (
              <div className="mt-12">
                <h2
                  className="text-[#1A1F1C] mb-6"
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                  }}
                >
                  Why it matters
                </h2>
                <ul className="space-y-4">
                  {feature.whyItMatters.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-1" />
                      <span
                        className="text-[#1A1F1C]"
                        style={{
                          fontSize: '16px',
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A3D2B] text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            Ready to see {feature.title} in action?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Try Sasquatch free for 14 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.sasquatchpermit.com">
              <Button
                size="lg"
                className="bg-white text-[#1A3D2B] hover:bg-gray-100"
                style={{ fontWeight: 600 }}
              >
                Start Free Trial
              </Button>
            </a>
            <Link to="/features">
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/10 hover:text-white"
                style={{ fontWeight: 600 }}
              >
                View All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
