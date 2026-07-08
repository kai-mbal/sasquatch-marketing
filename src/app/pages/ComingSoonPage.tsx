import { useState } from 'react';
import { Link } from 'react-router';
import { Rocket, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const API_URL = '/api/submit';

export function ComingSoonPage() {
  usePageTitle('Coming Soon');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'early-access', email }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setIsSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-[#1A3D2B] pt-32 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#4CAF70]/20 rounded-2xl flex items-center justify-center">
              <Rocket className="w-8 h-8 text-[#4CAF70]" />
            </div>
          </div>

          <div
            className="uppercase tracking-wider mb-4"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: '#4CAF70',
              letterSpacing: '0.1em',
            }}
          >
            EARLY ACCESS
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Request Early Access
          </h1>

          <p
            className="text-white/70 text-lg mb-4 max-w-2xl mx-auto"
            style={{
              lineHeight: 1.6,
            }}
          >
            Sasquatch is built and ready for a founding cohort of Colorado contractors. Request access below and
            we'll reach out personally to get you set up.
          </p>
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <Card className="p-8 shadow-xl border border-[#ECEEED]">
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#E6F4EC] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" style={{ color: '#4CAF70' }} />
                  </div>
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontWeight: 700, color: '#1A1F1C' }}
                >
                  Request received!
                </h3>
                <p className="text-sm mb-6" style={{ color: '#5A6560' }}>
                  We'll reach out personally to get you set up. Keep an eye on your inbox.
                </p>
                <Link to="/features">
                  <Button
                    variant="ghost"
                    className="text-[#1A3D2B] hover:bg-[#E6F4EC]"
                    style={{ fontWeight: 600 }}
                  >
                    Explore Features <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5" style={{ color: '#1A3D2B' }} />
                  <h3
                    style={{ fontWeight: 700, color: '#1A1F1C', fontSize: '18px' }}
                  >
                    Request early access
                  </h3>
                </div>
                <p className="text-sm mb-6" style={{ color: '#5A6560' }}>
                  Enter your email and we'll reach out personally to get you set up.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-md border border-[#ECEEED] text-sm focus:outline-none focus:ring-2 focus:ring-[#4CAF70]/40 focus:border-[#4CAF70]"
                   
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#1A3D2B] text-white hover:bg-[#2D5A3D] shrink-0"
                    style={{ fontWeight: 600 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Access'}
                  </Button>
                </form>
                {submitError && (
                  <p className="text-xs mt-3" style={{ color: '#CC3B2F' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
                {!submitError && (
                  <p className="text-xs mt-3" style={{ color: '#5A6560' }}>
                    No spam. We'll reach out to set up your access.
                  </p>
                )}
              </>
            )}
          </Card>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-[#F7F8F6] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2
            className="text-center mb-10"
            style={{
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 700,
              color: '#1A1F1C',
            }}
          >
            What you'll get
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'AI-Powered Import',
                desc: 'Upload PDFs, images, spreadsheets, or forward emails — Sasquatch extracts permit data automatically.',
              },
              {
                title: 'Permit Health Scoring',
                desc: 'Every permit gets a health score so you see problems before they cost you time and money.',
              },
              {
                title: 'Inspection Calendar',
                desc: 'All inspections in one calendar with jurisdiction-specific cutoff rules built in.',
              },
              {
                title: 'Cost Intelligence',
                desc: 'Real-time budget vs. actual tracking with leakage alerts to protect your margins.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#4CAF70' }} />
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: '#1A1F1C' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#5A6560' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/features">
              <Button
                variant="ghost"
                className="border border-[#1A3D2B] text-[#1A3D2B] hover:bg-[#E6F4EC]"
                style={{ fontWeight: 600 }}
              >
                See All 25+ Features <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
