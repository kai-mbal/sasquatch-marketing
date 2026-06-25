import { useState } from 'react';
import { Mail, CheckCircle2, Calendar, TrendingUp, FileText, Send, Check } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function NewsletterPage() {
  usePageTitle('Newsletter');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
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

      setSubscribed(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#1A3D2B] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="uppercase tracking-wider mb-6 text-[#4CAF70]"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              letterSpacing: '0.1em',
            }}
          >
            WEEKLY NEWSLETTER
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            The Sasquatch Report
          </h1>

          <p
            className="text-white/80 text-xl mb-4"
            style={{
              fontSize: '20px',
              lineHeight: 1.5,
            }}
          >
            Permit intelligence for Colorado contractors — delivered weekly
          </p>

          <p
            className="text-white/60 max-w-2xl mx-auto mb-10"
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
            }}
          >
            Stay ahead of jurisdiction changes, inspection deadlines, and cost intelligence insights. Get the
            contractor-focused updates you actually need, every Tuesday at 7 AM.
          </p>

          {/* Above-fold Email Capture */}
          {subscribed ? (
            <div className="bg-white/10 border-2 border-white/30 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-white mb-2">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-semibold text-lg">You're subscribed!</span>
              </div>
              <p className="text-white/70 text-sm">Check your inbox for a confirmation email.</p>
            </div>
          ) : !showSubscribeForm ? (
            <div className="max-w-md mx-auto">
              <Button
                onClick={() => setShowSubscribeForm(true)}
                size="lg"
                className="bg-white text-[#1A3D2B] hover:bg-gray-100 px-8"
                style={{ fontWeight: 600 }}
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
              <p className="text-white/50 text-xs mt-3">
                Unsubscribe with one click anytime. No spam.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
              <h3
                className="text-center mb-4"
                style={{ fontWeight: 700, color: '#1A1F1C', fontSize: '18px' }}
              >
                Subscribe to The Sasquatch Report
              </h3>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-md border border-[#ECEEED] text-sm text-[#1A1F1C] placeholder-[#5A6560]/60 focus:outline-none focus:ring-2 focus:ring-[#4CAF70]/40 focus:border-[#4CAF70]"
                 
                />
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-md border border-[#ECEEED] text-sm text-[#1A1F1C] placeholder-[#5A6560]/60 focus:outline-none focus:ring-2 focus:ring-[#4CAF70]/40 focus:border-[#4CAF70]"
                 
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-[#1A3D2B] text-white hover:bg-[#2D5A3D] disabled:opacity-50"
                  style={{ fontWeight: 600 }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
              {error && (
                <p className="text-xs mt-3 text-center" style={{ color: '#dc2626' }}>
                  {error}
                </p>
              )}
              <p className="text-xs mt-3 text-center" style={{ color: '#5A6560' }}>
                Unsubscribe with one click anytime. No spam.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F7F8F6] py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2
            className="text-center text-[#1A1F1C] mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
            }}
          >
            What you'll get every week
          </h2>
          <p className="text-center text-[#5A6560] mb-12 max-w-2xl mx-auto">
            No fluff. Just actionable permit intelligence to keep your jobs moving.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-14 h-14 bg-[#E6F4EC] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-[#1E6B40]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[#1A1F1C]">
                Jurisdiction Updates
              </h3>
              <p className="text-[#5A6560] text-sm">
                Portal changes, new cutoff times, fee adjustments — know before your crew shows up.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-14 h-14 bg-[#FBF0E0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-[#8B5B10]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[#1A1F1C]">
                Deadline Reminders
              </h3>
              <p className="text-[#5A6560] text-sm">
                Upcoming inspection windows, permit expirations, and jurisdiction-specific holidays.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-14 h-14 bg-[#E6F4EC] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#1E6B40]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[#1A1F1C]">
                Cost Intelligence Tips
              </h3>
              <p className="text-[#5A6560] text-sm">
                Real-world scenarios where contractors caught budget leaks before they became write-offs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
              }}
            >
              Premium intelligence, contractor pricing
            </h2>
            <p className="text-[#5A6560] max-w-2xl mx-auto mb-3">
              Less than 2 hours of crew time per month. Pay for itself with one avoided permit delay.
            </p>
            <p className="text-[#1A3D2B] font-semibold">
              First Tuesday issue free — 14-day trial
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-[#F7F8F6] p-1.5 rounded-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-[#1A3D2B] shadow-sm'
                    : 'text-[#5A6560] hover:text-[#1A1F1C]'
                }`}
                style={{ fontWeight: 600 }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md transition-all relative ${
                  billingCycle === 'annual'
                    ? 'bg-white text-[#1A3D2B] shadow-sm'
                    : 'text-[#5A6560] hover:text-[#1A1F1C]'
                }`}
                style={{ fontWeight: 600 }}
              >
                Annual
                <span className="absolute -top-3 -right-3 bg-[#C8821A] text-white text-xs px-2 py-0.5 rounded-full">
                  Save $38
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            {/* Monthly Option */}
            <Card
              className={`p-8 transition-all ${
                billingCycle === 'monthly' ? 'ring-2 ring-[#1A3D2B] shadow-lg' : 'opacity-60'
              }`}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-[#1A1F1C]">
                  Monthly
                </h3>
                <div className="mb-4">
                  <span
                    className="text-5xl font-bold text-[#1A1F1C]"
                   
                  >
                    $19
                  </span>
                  <span className="text-[#5A6560] text-lg">
                    /month
                  </span>
                </div>
                <p className="text-sm text-[#5A6560] mb-6">
                  Billed monthly, cancel anytime
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Weekly Tuesday delivery',
                    'Jurisdiction updates',
                    'Cost intelligence alerts',
                    'Deadline reminders',
                    'PDF archive access',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#1A1F1C]">
                      <Check className="w-5 h-5 text-[#1E6B40] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Annual Option - Highlighted */}
            <Card
              className={`p-8 transition-all ${
                billingCycle === 'annual' ? 'ring-2 ring-[#1A3D2B] shadow-lg bg-[#F7F8F6]' : 'opacity-60'
              }`}
            >
              <div className="text-center">
                <div className="inline-block bg-[#1A3D2B] text-white text-xs px-3 py-1 rounded-full mb-3">
                  RECOMMENDED
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#1A1F1C]">
                  Annual
                </h3>
                <div className="mb-4">
                  <span
                    className="text-5xl font-bold text-[#1A1F1C]"
                   
                  >
                    $190
                  </span>
                  <span className="text-[#5A6560] text-lg">
                    /year
                  </span>
                </div>
                <p className="text-sm text-[#1A3D2B] font-semibold mb-2">
                  Save $38 (2 months free)
                </p>
                <p className="text-xs text-[#5A6560] mb-6">
                  One-time annual payment
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Weekly Tuesday delivery',
                    'Jurisdiction updates',
                    'Cost intelligence alerts',
                    'Deadline reminders',
                    'PDF archive access',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#1A1F1C]">
                      <Check className="w-5 h-5 text-[#1E6B40] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={() => { setShowSubscribeForm(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              size="lg"
              className="w-full max-w-md bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
              style={{ fontWeight: 600 }}
            >
              Start Reading — 14-Day Free Trial
            </Button>

            <div className="space-y-2 mt-4">
              <p className="text-sm text-[#5A6560]">
                30-day money back guarantee • Cancel anytime with one click
              </p>
              <p className="text-xs text-[#5A6560]">
                One missed inspection costs $500+ in idle crew time. This newsletter pays for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Content Preview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
              }}
            >
              Recent newsletter topics
            </h2>
            <p className="text-[#5A6560]">
              See what contractors are reading
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                date: 'Feb 18, 2026',
                title: 'Denver Inspection Cutoff Changed to 3:00 PM',
                excerpt:
                  'Effective March 1st, Denver requires all same-day inspection requests by 3:00 PM instead of 3:30 PM. Here is what that means for your scheduling workflow.',
              },
              {
                date: 'Feb 11, 2026',
                title: 'El Paso County Portal Update: New Login Process',
                excerpt:
                  'El Paso County launched a modernized permit portal. We have updated Sasquatch to sync automatically — here is what changed and how to verify your connection.',
              },
              {
                date: 'Feb 4, 2026',
                title: 'Cost Leakage Case Study: $4,200 Caught on a $28K Job',
                excerpt:
                  'A roofing contractor in Jefferson County used cost intelligence alerts to spot material overruns mid-job. Here is how they recovered before close-out.',
              },
            ].map((issue, i) => (
              <Card key={i} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="font-semibold text-lg text-[#1A1F1C] mb-2 sm:mb-0">
                    {issue.title}
                  </h3>
                  <span
                    className="text-[#5A6560] text-sm whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {issue.date}
                  </span>
                </div>
                <p className="text-[#5A6560] text-sm">
                  {issue.excerpt}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="text-[#1A3D2B] hover:text-[#2D5A3D] font-semibold inline-flex items-center gap-2"
             
            >
              Read a sample newsletter (PDF) →
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#EEF4F0] py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold text-[#1A3D2B] mb-2"
               
              >
                &lt;5 min
              </div>
              <p className="text-[#5A6560]">
                Average read time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-[#1A1F1C] mb-4"
            style={{
              fontSize: 'clamp(24px, 4vw, 32px)',
              fontWeight: 700,
            }}
          >
            Questions or feedback?
          </h2>
          <p className="text-[#5A6560] mb-6" style={{ lineHeight: 1.7 }}>
            We'd love to hear from you. Reach out directly and we'll get back to you quickly.
          </p>
          <a
            href="mailto:contact@sasquatchpermit.com"
            className="inline-flex items-center gap-2 text-[#1A3D2B] hover:text-[#4CAF70] transition-colors"
            style={{ fontWeight: 600, fontSize: '18px' }}
          >
            <Mail className="w-5 h-5" />
            contact@sasquatchpermit.com
          </a>
        </div>
      </section>

      {/* Frequency & Delivery Info */}
      <section className="bg-[#F7F8F6] py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm mb-6">
            <Calendar className="w-5 h-5 text-[#1A3D2B]" />
            <span className="font-semibold">
              Delivered every Tuesday at 7:00 AM MST
            </span>
          </div>
          <p className="text-[#5A6560] text-sm">
            We respect your inbox. You'll receive exactly one email per week — no sponsored content, no affiliate
            links, no promotional offers. Just permit intelligence.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1A3D2B] text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(32px, 5vw, 42px)',
              fontWeight: 700,
            }}
          >
            Join Your Contracting Peers
          </h2>
          <p className="text-white/70 text-lg">
            Get permit intelligence delivered to your inbox every Tuesday
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}