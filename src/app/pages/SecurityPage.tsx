import { Link } from 'react-router';
import { Bot, Database, Download, Scale, ShieldCheck } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { VERIFY_NOTE } from '../data/jurisdictions';

const SECTIONS = [
  {
    icon: Database,
    question: 'Where is my data, and who can see it?',
    answers: [
      'Sasquatch runs on Amazon Web Services in the United States. Stored data is encrypted with AES-256, and traffic uses TLS 1.2 or higher.',
      'Your team controls access with roles: Admin, Manager, or Read-only. Changes to records such as permits, jobs, inspections, and team members are logged, so you can see who changed what and when.',
      'Sasquatch is not currently SOC 2 or ISO 27001 certified. This page will say so when that changes.',
      'This website sets no cookies, runs no analytics, and loads no third-party tracking scripts.',
    ],
  },
  {
    icon: Bot,
    question: 'What does the AI see?',
    answers: [
      'Before a document or file import reaches an AI model, Sasquatch replaces sensitive identifiers such as Social Security numbers, driver\'s license numbers, and credit card numbers with placeholder markers. The model receives the redacted copy, and your original file stays in your account.',
      'Two layers do this: a pattern-matching baseline that always runs, and Amazon Comprehend\'s detection on top of it. No automated detection is perfect, so treat redaction as a safeguard, not a guarantee.',
      'Chat and assistant features use a narrower set. Social Security and credit card numbers are redacted, while email addresses, phone numbers, and permit, parcel, or case numbers are kept, because answering questions about them requires seeing them.',
    ],
  },
  {
    icon: ShieldCheck,
    question: 'Is my data used to train AI models?',
    answers: [
      'No. Sasquatch uses general-purpose models through Amazon Bedrock, whose terms prohibit using your inputs or outputs to train the underlying models. Sasquatch does not fine-tune or build models on your documents.',
      'Your data is not sold, and it is not shared with advertisers or data brokers.',
    ],
  },
  {
    icon: Scale,
    question: 'How accurate is AI output and local requirements information?',
    answers: [
      'AI output can be wrong, so review it before relying on it. Some results, such as jurisdiction answers, show a confidence percentage. Drafts, reports, and general chat responses do not.',
      `Local requirements are researched and reviewed, but they can be incomplete, outdated, or wrong. ${VERIFY_NOTE}`,
    ],
  },
  {
    icon: Download,
    question: 'Can I get my data out?',
    answers: [
      'Yes. Email contact@sasquatchpermit.com from the address on your account to get a copy of your data, correct it, or delete it. Requests are completed within 30 days, or you will hear why more time is needed.',
      'When you close your account, your data is deleted within 30 days of your request. Residual copies may stay briefly in encrypted backups until they rotate out.',
    ],
  },
];

export function SecurityPage() {
  usePageTitle(
    'Security & Data',
    'How Sasquatch handles your data: where it is stored, what AI models see, how it is protected, and how to get it out.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
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
            Security &amp; Data
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6" style={{ lineHeight: 1.6 }}>
            How Sasquatch handles your data, in plain language.
          </p>
          <p className="text-white/50 text-sm">Last updated: November 6, 2026</p>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
          {SECTIONS.map((section) => (
            <Card key={section.question} className="p-8 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E6F4EC] flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-[#1A3D2B]" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-[#1A1F1C]" style={{ fontSize: '20px', fontWeight: 700 }}>
                    {section.question}
                  </h2>
                  {section.answers.map((answer) => (
                    <p key={answer} className="text-[#5A6560]" style={{ lineHeight: 1.7 }}>
                      {answer}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          ))}

          <p className="text-[#5A6560] text-sm text-center pt-4">
            This page is a summary. The{' '}
            <Link to="/privacy" className="text-[#1A3D2B] underline hover:no-underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="text-[#1A3D2B] underline hover:no-underline">
              Terms of Service
            </Link>{' '}
            are the binding documents, and the Privacy Policy lists every company that processes data for Sasquatch.
          </p>
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
            Questions about data security?
          </h2>
          <p className="text-white/70 text-lg mb-8">Send a message and get a straight answer.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1A3D2B] hover:bg-gray-100" style={{ fontWeight: 600 }}>
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
