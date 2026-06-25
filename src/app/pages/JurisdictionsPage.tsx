import { useState } from 'react';
import { MapPin, ExternalLink, Phone, Clock } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { StatusChip } from '../components/StatusChip';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const API_URL = '/api/submit';

export function JurisdictionsPage() {
  usePageTitle('Jurisdictions');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    county: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const counties = [
    {
      name: 'Denver',
      status: 'live' as const,
      portal: 'https://www.denvergov.org/permits',
      cutoffTime: '3:30 PM',
      contact: '(720) 865-2500',
      processingNotes: 'Electrical permits typically process within 3-5 business days. Online portal available.',
    },
    {
      name: 'El Paso County',
      status: 'live' as const,
      portal: 'https://planningdevelopment.elpasoco.com',
      cutoffTime: '4:00 PM',
      contact: '(719) 520-6300',
      processingNotes: 'Same-day scheduling available for routine inspections. 24-hour advance notice recommended.',
    },
    {
      name: 'Jefferson County',
      status: 'live' as const,
      portal: 'https://www.jeffco.us/planning-zoning',
      cutoffTime: '3:30 PM',
      contact: '(303) 271-8700',
      processingNotes: 'Online portal syncs with Sasquatch. Inspections scheduled within 48 hours.',
    },
    {
      name: 'Douglas County',
      status: 'live' as const,
      portal: 'https://www.douglas.co.us/building',
      cutoffTime: '4:00 PM',
      contact: '(303) 660-7497',
      processingNotes: 'Standard processing time is 48 hours. Expedited service available for additional fee.',
    },
    {
      name: 'Boulder County',
      status: 'live' as const,
      portal: 'https://www.bouldercounty.org',
      cutoffTime: '3:00 PM',
      contact: '(303) 441-3930',
      processingNotes: 'Online inspection scheduling available. Standard processing time is 2-3 business days.',
    },
    {
      name: 'Weld County',
      status: 'live' as const,
      portal: 'https://www.weldgov.com/departments/building',
      cutoffTime: '3:30 PM',
      contact: '(970) 356-4000',
      processingNotes: 'Requires 48-hour advance notice for inspections. Plan review turnaround typically 5-7 business days.',
    },
    {
      name: 'Pueblo County',
      status: 'live' as const,
      portal: 'https://www.pueblo.us/building',
      cutoffTime: '4:00 PM',
      contact: '(719) 583-6000',
      processingNotes: 'Same-day inspection scheduling available for most permit types. Online portal syncs with Sasquatch.',
    },
    {
      name: 'Adams County',
      status: 'live' as const,
      portal: 'https://www.adcogov.org/building',
      cutoffTime: '3:00 PM',
      contact: '(720) 523-6800',
      processingNotes: '24-hour advance notice required for all inspections. Electronic permit submissions accepted.',
    },
    {
      name: 'Mesa County',
      status: 'live' as const,
      portal: 'https://www.mesacounty.us/building',
      cutoffTime: '4:00 PM',
      contact: '(970) 244-1850',
      processingNotes: 'Standard processing time is 3-5 business days. Inspection scheduling available online.',
    },
    {
      name: 'Larimer County',
      status: 'live' as const,
      portal: 'https://www.larimer.gov/building',
      cutoffTime: '3:30 PM',
      contact: '(970) 498-7683',
      processingNotes: 'Online portal available. Inspections typically scheduled within 48 hours of request.',
    },
    {
      name: 'Arapahoe County',
      status: 'live' as const,
      portal: 'https://www.arapahoegov.com/building',
      cutoffTime: '4:00 PM',
      contact: '(720) 874-6600',
      processingNotes: 'Online permit submissions accepted. Standard processing time is 3-5 business days.',
    },
    {
      name: 'Garfield County',
      status: 'live' as const,
      portal: 'https://www.garfield-county.com/building-planning',
      cutoffTime: '3:30 PM',
      contact: '(970) 945-8212',
      processingNotes: 'Inspections require 24-hour advance notice. Processing time is 3-5 business days.',
    },
    {
      name: 'Eagle County',
      status: 'live' as const,
      portal: 'https://www.eaglecounty.us/planning',
      cutoffTime: '4:00 PM',
      contact: '(970) 328-8730',
      processingNotes: 'Online inspection scheduling available. Expedited review available for additional fee.',
    },
    {
      name: 'Summit County',
      status: 'live' as const,
      portal: 'https://www.summitcountyco.gov/building',
      cutoffTime: '3:30 PM',
      contact: '(970) 668-4200',
      processingNotes: 'Seasonal volume may affect processing times. 48-hour advance notice required for inspections.',
    },
    {
      name: 'Routt County',
      status: 'live' as const,
      portal: 'https://www.co.routt.co.us/building',
      cutoffTime: '4:00 PM',
      contact: '(970) 870-5544',
      processingNotes: 'Standard processing time is 3-5 business days. Online portal syncs with Sasquatch.',
    },
    {
      name: 'Broomfield',
      status: 'live' as const,
      portal: 'https://www.broomfield.org/building',
      cutoffTime: '3:30 PM',
      contact: '(303) 438-6370',
      processingNotes: 'Online permits accepted. Most permits processed within 48 hours.',
    },
    {
      name: 'Clear Creek County',
      status: 'live' as const,
      portal: 'https://www.clearcreekcounty.us/building',
      cutoffTime: '4:00 PM',
      contact: '(303) 679-2336',
      processingNotes: 'Standard processing time is 5-7 business days. Inspections require 24-hour advance notice.',
    },
    {
      name: 'Gilpin County',
      status: 'live' as const,
      portal: 'https://www.gilpincounty.org/building',
      cutoffTime: '3:00 PM',
      contact: '(303) 582-5214',
      processingNotes: 'Processing time is 5-7 business days. Contact office for inspection scheduling.',
    },
    {
      name: 'Park County',
      status: 'live' as const,
      portal: 'https://www.parkco.us/building',
      cutoffTime: '4:00 PM',
      contact: '(719) 836-4255',
      processingNotes: 'Standard processing time is 3-5 business days. Inspection scheduling by phone.',
    },
    {
      name: 'Teller County',
      status: 'live' as const,
      portal: 'https://www.co.teller.co.us/building',
      cutoffTime: '3:30 PM',
      contact: '(719) 687-9246',
      processingNotes: 'Standard processing time is 5-7 business days. 24-hour notice required for inspections.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'county-request', ...formData }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', county: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            We speak every county's language.
          </h1>
          <p
            className="text-white/70 text-lg max-w-4xl mx-auto"
            style={{
              lineHeight: 1.6,
            }}
          >
            Sasquatch has built-in intelligence for Colorado's most active permit jurisdictions — so you don't have to
            memorize the rules.
          </p>
        </div>
      </section>

      {/* Colorado Map Graphic */}
      <section className="bg-[#F7F8F6] py-12 border-b border-[#ECEEED]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md">
            <MapPin className="w-8 h-8 text-[#4CAF70]" />
            <div className="text-left">
              <div className="font-bold text-lg">
                20 Counties Live
              </div>
              <div className="text-sm text-[#5A6560]">More jurisdictions added monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* County Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {counties.map((county, i) => (
              <Card key={i} className="p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* County Name & Status */}
                  <div className="lg:col-span-1">
                    <h3
                      className="text-2xl mb-3"
                      style={{
                        fontWeight: 700,
                        color: '#1A1F1C',
                      }}
                    >
                      {county.name}
                    </h3>
                    <StatusChip status={county.status} />
                  </div>

                  {/* County Details */}
                  <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <ExternalLink className="w-4 h-4 text-[#5A6560]" />
                          <span className="text-sm font-semibold text-[#1A1F1C]">Portal URL</span>
                        </div>
                        <a
                          href={county.portal}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#1A3D2B] hover:text-[#2D5A3D] underline"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {county.portal}
                        </a>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-[#5A6560]" />
                          <span className="text-sm font-semibold text-[#1A1F1C]">Inspection Cutoff</span>
                        </div>
                        <p className="text-sm text-[#5A6560]" style={{ fontFamily: 'var(--font-mono)' }}>
                          {county.cutoffTime}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="w-4 h-4 text-[#5A6560]" />
                          <span className="text-sm font-semibold text-[#1A1F1C]">Contact</span>
                        </div>
                        <p className="text-sm text-[#5A6560]" style={{ fontFamily: 'var(--font-mono)' }}>
                          {county.contact}
                        </p>
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-[#1A1F1C] block mb-2">Processing Notes</span>
                        <p className="text-sm text-[#5A6560]">
                          {county.processingNotes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request a County Form */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              Request a County
            </h2>
            <p className="text-[#5A6560]">
              Don't see your jurisdiction? Let us know and we'll prioritize adding it.
            </p>
          </div>

          <Card className="p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1A1F1C] mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1A1F1C] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="county" className="block text-sm font-semibold text-[#1A1F1C] mb-2">
                  County/Jurisdiction Name
                </label>
                <Input
                  id="county"
                  name="county"
                  type="text"
                  value={formData.county}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Larimer County"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1A1F1C] mb-2">
                  Additional Information (optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your permit volume, timeline needs, or specific requirements..."
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
                style={{ fontWeight: 600 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-sm text-[#4CAF70] text-center font-medium mt-4">
                  Request submitted! We'll look into adding this jurisdiction.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-[#CC3B2F] text-center font-medium mt-4">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}