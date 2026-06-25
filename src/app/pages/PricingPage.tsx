import { useState } from 'react';
import { Link } from 'react-router';
import { CheckCircle2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function PricingPage() {
  usePageTitle('Pricing');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans: {
    name: string;
    monthlyPrice: number;
    annualPrice: number;
    period: string;
    features: string[];
    highlighted: boolean;
    badge?: string;
    contactUs?: boolean;
  }[] = [
    {
      name: 'Starter',
      monthlyPrice: 49,
      annualPrice: 470,
      period: billingPeriod === 'monthly' ? '/mo' : '/yr',
      features: [
        '1 user',
        '50 active permits',
        '3 jurisdictions',
        'Email alerts',
        'Basic dashboard',
        'CSV import',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      monthlyPrice: 99,
      annualPrice: 950,
      period: billingPeriod === 'monthly' ? '/mo' : '/yr',
      features: [
        'Up to 5 users',
        'Unlimited permits',
        'Advanced reminders',
        'Full dashboard + attention center',
        'All supported jurisdictions',
        'AI-powered import (PDF, email, Excel)',
        'Cost leakage alerts',
        'Time tracking, job management',
      ],
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Business',
      monthlyPrice: 299,
      annualPrice: 2870,
      period: billingPeriod === 'monthly' ? '/mo' : '/yr',
      features: [
        'Unlimited users',
        'Everything in Pro',
        'Role-based access control',
        'Priority support',
        'Best-in-class cost intelligence',
        'Revenue and invoicing',
      ],
      highlighted: false,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 0,
      annualPrice: 0,
      contactUs: true,
      period: '',
      features: [
        'Custom SLA',
        'Dedicated onboarding',
        'Volume seat pricing',
        'County/API integration support',
        'White-label potential',
        'For GCs, franchise contractors & large commercial ops',
      ],
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! All plans come with a 14-day free trial. No credit card required. You can explore the full platform before committing.',
    },
    {
      question: 'Can I import my existing permits?',
      answer:
        'Absolutely. You can import permits via CSV, Excel, PDF, email forwarding, or even drag-and-drop images. Our AI parser handles the data extraction automatically.',
    },
    {
      question: 'Which counties are supported?',
      answer:
        'We currently support 20 Colorado counties: Denver, Arapahoe, Jefferson, Douglas, El Paso, Boulder, Larimer, Adams, Weld, Pueblo, Mesa, Garfield, Eagle, Summit, Routt, Broomfield, Clear Creek, Gilpin, Park, and Teller. More jurisdictions are added regularly. Don\'t see yours? Request it on our Jurisdictions page.',
    },
    {
      question: 'What file types can I import?',
      answer:
        'PDF, PNG, JPG, CSV, Excel (.xlsx, .xls), Word documents, and email forwarding. Our AI parser can read most permit documents from Colorado jurisdictions.',
    },
    {
      question: 'How does billing work?',
      answer:
        'You\'ll be billed at the start of each billing cycle (monthly or annual). You can cancel anytime, and you won\'t be charged for the next cycle. No long-term contracts.',
    },
    {
      question: 'Can I switch plans later?',
      answer:
        'Yes. You can upgrade or downgrade your plan at any time. If you upgrade, you\'ll be charged a prorated amount for the remainder of your billing cycle.',
    },
    {
      question: 'Do you offer discounts for larger teams?',
      answer:
        'Yes. If you need more than 10 users or have specific enterprise requirements, contact us for custom pricing and volume discounts.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'All plans include email support. Professional and Business plans get priority support with faster response times. We also have detailed documentation and video tutorials.',
    },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-[#1A1F1C] mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Pricing built for field businesses.
          </h1>
          <p
            className="text-[#5A6560] text-lg max-w-4xl mx-auto mb-8"
            style={{
              lineHeight: 1.6,
            }}
          >
            Pay for what you use. Cancel anytime. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#F7F8F6] p-1 rounded-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white shadow-sm font-semibold text-[#1A3D2B]'
                  : 'text-[#5A6560]'
              }`}
             
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-white shadow-sm font-semibold text-[#1A3D2B]'
                  : 'text-[#5A6560]'
              }`}
             
            >
              Annual
              <span className="ml-2 text-xs text-[#4CAF70]">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`p-8 relative ${plan.highlighted ? 'border-2 border-[#1A3D2B] shadow-2xl scale-105' : 'shadow-lg'}`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#4CAF70] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className="text-2xl mb-4"
                    style={{
                      fontWeight: 700,
                      color: '#1A1F1C',
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    {plan.contactUs ? (
                      <span
                        className="text-3xl font-bold"
                        style={{ color: '#1A1F1C' }}
                      >
                        Contact Us
                      </span>
                    ) : (
                      <>
                        <span
                          className="text-5xl font-bold"
                          style={{ color: '#1A1F1C' }}
                        >
                          ${getPrice(plan)}
                        </span>
                        <span className="text-[#5A6560] text-lg">{plan.period}</span>
                      </>
                    )}
                  </div>
                  {billingPeriod === 'annual' && !plan.contactUs && (
                    <p className="text-sm text-[#5A6560]">
                      ${(getPrice(plan) / 12).toFixed(2)}/mo billed annually
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1A1F1C]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.contactUs ? (
                  <Link to="/contact" className="block">
                    <Button
                      className="w-full bg-white text-[#1A3D2B] border-2 border-[#1A3D2B] hover:bg-[#F7F8F6]"
                      style={{ fontWeight: 600 }}
                    >
                      Contact Sales
                    </Button>
                  </Link>
                ) : (
                  <a href="https://app.sasquatchpermit.com" className="block">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? 'bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]'
                          : 'bg-white text-[#1A3D2B] border-2 border-[#1A3D2B] hover:bg-[#F7F8F6]'
                      }`}
                      style={{ fontWeight: 600 }}
                    >
                      Get Started
                    </Button>
                  </a>
                )}
              </Card>
            ))}
          </div>

          <p className="text-center text-[#5A6560] text-sm mt-8">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2
            className="text-[#1A1F1C] text-center mb-12"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-[#ECEEED] rounded-lg px-6">
                <AccordionTrigger
                  className="text-left hover:no-underline py-4"
                  style={{ fontWeight: 600 }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#5A6560] pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1A3D2B] text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            Ready to get started?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Try Sasquatch free for 14 days. See how much time you can save.
          </p>
          <a href="https://app.sasquatchpermit.com">
            <Button
              size="lg"
              className="bg-white text-[#1A3D2B] hover:bg-gray-100"
              style={{ fontWeight: 600 }}
            >
              Start Free Trial
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}