import { useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { JurisdictionSearch } from '../components/JurisdictionSearch';
import { ColoradoCountyMap } from '../components/ColoradoCountyMap';
import { CoverageCounter } from '../components/CoverageCounter';
import { jurisdictionRegions, totalCounties, totalMunicipalities } from '../data/jurisdictions';

const API_URL = '/api/submit';

const countySlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

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
  const formSectionRef = useRef<HTMLDivElement>(null);

  const handleRequestJurisdiction = (query: string) => {
    setFormData((prev) => ({ ...prev, county: query }));
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSelectCounty = (countyName: string) => {
    document.getElementById(`county-${countySlug(countyName)}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

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

      {/* Hero + Search */}
      <section className="bg-[#1A3D2B] text-white pt-32 pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Is your jurisdiction covered?
          </h1>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mb-10"
            style={{
              lineHeight: 1.6,
            }}
          >
            Search for the city or county where you work. If it's not covered yet, tell us — we're expanding
            every week.
          </p>
          <JurisdictionSearch onRequestJurisdiction={handleRequestJurisdiction} />
        </div>
      </section>

      {/* Colorado County Map */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
              }}
            >
              Every county we cover, at a glance.
            </h2>
            <p className="text-[#5A6560] max-w-2xl mx-auto">
              Hover a county to see how deep our coverage goes. Click one to jump to its cities below.
            </p>
          </div>
          <ColoradoCountyMap onSelectCounty={handleSelectCounty} />
        </div>
      </section>

      {/* Animated Coverage Counter */}
      <section className="py-16 lg:py-20 bg-[#F7F8F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CoverageCounter counties={totalCounties} municipalities={totalMunicipalities} />
        </div>
      </section>

      {/* Jurisdictions by Region */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
              }}
            >
              Browse by region
            </h2>
            <p className="text-[#5A6560] max-w-2xl mx-auto">
              Every supported county and the municipalities within it.
            </p>
          </div>

          <div className="space-y-12">
            {jurisdictionRegions.map((region) => (
              <div key={region.region}>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5" style={{ color: '#4CAF70' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#1A1F1C' }}>
                    {region.region}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {region.counties.map((county) => (
                    <Card key={county.name} id={`county-${countySlug(county.name)}`} className="p-5">
                      <h4 className="font-semibold mb-3" style={{ color: '#1A1F1C' }}>
                        {county.name}
                      </h4>
                      {county.municipalities.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {county.municipalities.map((m) => (
                            <span
                              key={m}
                              className="text-xs px-2.5 py-1 rounded-full"
                              style={{ backgroundColor: '#E6F4EC', color: '#1E6B40' }}
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: '#E6F4EC', color: '#1E6B40' }}
                        >
                          Consolidated city &amp; county
                        </span>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Jurisdiction Form */}
      <section ref={formSectionRef} className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              Request a Jurisdiction
            </h2>
            <p className="text-[#5A6560]">
              Don't see your city or county? Let us know and we'll prioritize adding it.
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
                  City or County Name
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
