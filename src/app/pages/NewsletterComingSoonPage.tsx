import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, CheckCircle2, ArrowRight, Newspaper } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function NewsletterComingSoonPage() {
  usePageTitle('Newsletter');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'newsletter-subscribe',
          email,
          name: name || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || 'Subscription failed. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
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
              <Newspaper className="w-8 h-8 text-[#4CAF70]" />
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
            THE SASQUATCH REPORT
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            The newsletter is almost here.
          </h1>

          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            style={{
              lineHeight: 1.6,
            }}
          >
            The Sasquatch Report — weekly permit intelligence for Colorado contractors — launches before the{' '}
            <span className="text-white font-semibold">end of March 2026</span>.
            Pre-subscribe now and be first in line when we go live.
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
                  You're on the pre-subscribe list!
                </h3>
                <p className="text-sm mb-6" style={{ color: '#5A6560' }}>
                  We'll email you the moment the first issue of The Sasquatch Report drops.
                </p>
                <Link to="/newsletter">
                  <Button
                    variant="ghost"
                    className="text-[#1A3D2B] hover:bg-[#E6F4EC]"
                    style={{ fontWeight: 600 }}
                  >
                    Back to Newsletter <ArrowRight className="w-4 h-4 ml-1" />
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
                    Pre-subscribe to The Sasquatch Report
                  </h3>
                </div>
                <p className="text-sm mb-6" style={{ color: '#5A6560' }}>
                  Enter your email to get on the list. We'll notify you as soon as the first issue is ready.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2.5 rounded-md border border-[#ECEEED] text-sm focus:outline-none focus:ring-2 focus:ring-[#4CAF70]/40 focus:border-[#4CAF70]"
                   
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
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
                      className="bg-[#1A3D2B] text-white hover:bg-[#2D5A3D] shrink-0 disabled:opacity-50"
                      style={{ fontWeight: 600 }}
                    >
                      {isSubmitting ? 'Subscribing...' : 'Pre-Subscribe'}
                    </Button>
                  </div>
                </form>
                {error && (
                  <p className="text-xs mt-3" style={{ color: '#dc2626' }}>
                    {error}
                  </p>
                )}
                <p className="text-xs mt-3" style={{ color: '#5A6560' }}>
                  No spam. Just one email when we launch.
                </p>
              </>
            )}
          </Card>

          {/* Alternative: email directly */}
          <div className="text-center mt-8 p-6 bg-[#F7F8F6] rounded-xl">
            <p className="text-sm mb-2" style={{ color: '#5A6560' }}>
              Prefer to email us directly? Send a note to:
            </p>
            <a
              href="mailto:contact@sasquatchpermit.com?subject=Pre-subscribe%20to%20The%20Sasquatch%20Report"
              className="inline-flex items-center gap-2 font-semibold hover:underline"
              style={{ color: '#1A3D2B' }}
            >
              <Mail className="w-4 h-4" />
              contact@sasquatchpermit.com
            </a>
            <p className="text-xs mt-2" style={{ color: '#5A6560' }}>
              Just say "pre-subscribe" and we'll add you to the list.
            </p>
          </div>
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
            What you'll get every Tuesday
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Jurisdiction Updates',
                desc: 'Portal changes, new cutoff times, fee adjustments — know before your crew shows up.',
              },
              {
                title: 'Deadline Reminders',
                desc: 'Upcoming inspection windows, permit expirations, and jurisdiction-specific holidays.',
              },
              {
                title: 'Cost Intelligence Tips',
                desc: 'Real-world scenarios where contractors caught budget leaks before they became write-offs.',
              },
              {
                title: 'Under 5 Minutes',
                desc: 'No fluff. Just actionable permit intelligence to keep your jobs moving.',
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
