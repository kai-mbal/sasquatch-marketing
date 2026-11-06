import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PlanCards } from '../components/PlanCards';
import { usePageTitle } from '../hooks/usePageTitle';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { COVERAGE_STATEMENT, VERIFY_NOTE } from '../data/jurisdictions';
import { EARLY_ACCESS_NOTE } from '../data/plans';

const FAQS = [
  {
    question: 'Is there a free trial?',
    answer:
      'Sasquatch is currently in early access rather than open self-serve signup. Book a demo and your account gets set up personally.',
  },
  {
    question: 'What is the difference between Team and Company?',
    answer:
      'The number of users. Team covers up to 5 users, and Company covers unlimited users. Both plans include the same jobs, permits, inspections, reminders, and jurisdiction lookup.',
  },
  {
    question: 'Can I import my existing permits?',
    answer:
      'Yes. Bring them in from a CSV or Excel file, or upload a PDF, image, or Word document. Review the details after import to make sure they came through correctly.',
  },
  {
    question: 'Which jurisdictions are supported?',
    answer: `${COVERAGE_STATEMENT} The full list is on the Jurisdictions page, where you can also request yours.`,
  },
  {
    question: 'Can I rely on the local requirements in Sasquatch?',
    answer: `Use them as a starting point. ${VERIFY_NOTE}`,
  },
  {
    question: 'Does Sasquatch file permits or schedule inspections for me?',
    answer:
      'No. Sasquatch helps you track permits and inspections. Filing and scheduling still happen through each jurisdiction, and Sasquatch does not connect to jurisdiction portals.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Plans are priced monthly. During early access, accounts are set up personally, and there is no self-serve checkout yet.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes. Send a message through the Contact page to move between Team and Company.',
  },
  {
    question: 'What if my company has custom needs?',
    answer: 'Enterprise is for larger companies with custom needs. Send a message through the Contact page to talk it through.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'All plans include email support.',
  },
];

export function PricingPage() {
  usePageTitle(
    'Pricing',
    'Sasquatch plans for contractor offices: Team at $149/month for up to 5 users, Company at $299/month for unlimited users, and Enterprise for custom needs.'
  );

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
            Pricing built for contractor offices.
          </h1>
          <p
            className="text-[#5A6560] text-lg max-w-4xl mx-auto"
            style={{
              lineHeight: 1.6,
            }}
          >
            Jobs, permits, inspections, reminders, and jurisdiction lookup in every plan.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PlanCards />

          <p className="text-center text-[#5A6560] text-sm mt-8">{EARLY_ACCESS_NOTE}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`} className="border border-[#ECEEED] rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4" style={{ fontWeight: 600 }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#5A6560] pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            Ready to get started?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Send a message and set up a 20-minute walkthrough.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-[#1A3D2B] hover:bg-gray-100"
              style={{ fontWeight: 600 }}
            >
              Book a 20-minute demo
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
