import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Clock, MessageSquare } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const API_URL = '/api/submit';

export function ContactPage() {
  usePageTitle('Contact');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    trade: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', ...formData }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setSubmitStatus('success');
      setFormData({ name: '', company: '', trade: '', email: '', message: '' });
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

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      trade: value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-[#1A1F1C] mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Let's talk counties.
          </h1>
          <p
            className="text-[#5A6560] text-lg max-w-2xl mx-auto"
            style={{
              lineHeight: 1.6,
            }}
          >
            Tell us what you're working with. We'll show you what you're missing.
            Schedule a live demo or reach out with questions — we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Dark Green Card with Messaging */}
            <div className="lg:col-span-2">
              <Card className="bg-[#1A3D2B] text-white p-8 h-full">
                <h2
                  className="mb-6 text-2xl"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Tell us what you're working with. We'll show you what you're missing.
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-[#4CAF70]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@sasquatchpermit.com"
                        className="text-white/80 hover:text-white text-sm"
                      >
                        contact@sasquatchpermit.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#4CAF70]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-white/80 text-sm">Monday - Friday</p>
                      <p className="text-white/80 text-sm">8:00 AM - 4:00 PM MST</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-[#4CAF70]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-white/80 text-sm">
                        We typically respond within 24-48 business hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-semibold mb-3">Want a live demo? →</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Use the form to request a walkthrough — we'll schedule a 15-minute live demo with your team.
                  </p>
                </div>
              </Card>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 shadow-lg">
                <h2
                  className="text-[#1A1F1C] mb-6 text-2xl"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Get in Touch
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-[#1A1F1C] mb-2"
                       
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-[#1A1F1C] mb-2"
                       
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Smith Electric"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="trade"
                        className="block text-sm font-semibold text-[#1A1F1C] mb-2"
                       
                      >
                        Trade *
                      </label>
                      <Select value={formData.trade} onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your trade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="solar">Solar</SelectItem>
                          <SelectItem value="roofing">Roofing</SelectItem>
                          <SelectItem value="general">General Contractor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#1A1F1C] mb-2"
                       
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@smithelectric.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#1A1F1C] mb-2"
                     
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your permit management challenges, the jurisdictions you work in, and what you're looking for in a solution..."
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
                    style={{ fontWeight: 600 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {submitStatus === 'success' && (
                    <p className="text-sm text-[#4CAF70] text-center font-medium">
                      Message sent! We'll get back to you within 24–48 hours.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-sm text-[#CC3B2F] text-center font-medium">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <p className="text-xs text-[#5A6560] text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="bg-[#F7F8F6] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-[#1A1F1C] mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
            }}
          >
            Not ready to talk yet?
          </h2>
          <p className="text-[#5A6560] mb-6">
            Request early access and we'll reach out personally. No sales call required unless you want one.
          </p>
          <Link to="/coming-soon">
            <Button
              className="bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
              style={{ fontWeight: 600 }}
            >
              Request Early Access
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}