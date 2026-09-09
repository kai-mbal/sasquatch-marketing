import { Link } from 'react-router';
import {
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Database,
  RefreshCw,
  MessageSquare,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function GovernancePage() {
  usePageTitle('Governance');
  const protectionSteps = [
    {
      icon: FileText,
      title: 'You Upload a Document',
      description:
        'Upload any permit document, work order, invoice, or other file. This could contain sensitive information like social security numbers, license numbers, or personal addresses.',
    },
    {
      icon: Shield,
      title: 'We Detect and Redact Sensitive Data',
      description:
        'Before any AI processing happens, Sasquatch scans the file and replaces sensitive identifiers with markers — SSNs, driver\'s license numbers, credit card numbers, and similar values. Two layers run: a pattern-matching baseline that always executes, plus Amazon Comprehend\'s PII detection on top of it.',
    },
    {
      icon: Database,
      title: 'Redacted Data Goes to AI',
      description:
        'Only the redacted copy of your document is sent to the AI model. It sees permit numbers, addresses, dates, and the other fields it needs to do its job — not the identifiers we stripped out.',
    },
    {
      icon: RefreshCw,
      title: 'AI Normalizes and Extracts',
      description:
        'The AI model reads the clean data, normalizes field values (e.g., standardizes dates, extracts permit numbers), and outputs structured information. This could be a permit record, a materials list, or cost estimates.',
    },
    {
      icon: CheckCircle2,
      title: 'Results Saved to Your Dashboard',
      description:
        'The AI output is saved to your Sasquatch dashboard. You review the extracted data, verify accuracy, and use it to manage your permits and jobs. Your original file stays in your account — only the redacted copy ever reached the model.',
    },
  ];

  const principles = [
    {
      icon: Lock,
      title: 'Privacy by Design',
      description:
        'Privacy is the default, not a setting. We redact sensitive identifiers before AI processing, encrypt data at rest and in transit, and scope every service\'s permissions to only what it needs.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'You should know exactly what happens to your data — including where our protections stop. We document our AI workflows, state plainly what the AI sees and doesn\'t see, and tell you which features carry a confidence score and which don\'t.',
    },
    {
      icon: Shield,
      title: 'Human Verification',
      description:
        'Where we can meaningfully score our own certainty, AI output carries a confidence percentage — and we say so when we can\'t. AI is a tool to save you time, not a replacement for your judgment.',
    },
    {
      icon: Database,
      title: 'Data Minimization',
      description:
        'We collect the data needed to run permit tracking and job management, and nothing we have no use for. Working files behind the AI pipeline expire on a schedule — import files after 30 days, materials files after 90.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#1A3D2B] text-white pt-32 pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            AI Governance &amp; Data Protection
          </h1>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mb-6"
            style={{
              lineHeight: 1.6,
            }}
          >
            How Sasquatch protects your sensitive information and uses AI responsibly to save you time.
          </p>
          <p className="text-white/50 text-sm">Last updated: September 9, 2026</p>
        </div>
      </section>

      {/* Main Promise */}
      <section className="py-16 lg:py-20 bg-[#F7F8F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="p-8 lg:p-12 border-2 border-[#4CAF70] bg-white">
            <h2
              className="text-[#1A1F1C] mb-6 text-center"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
              }}
            >
              Sensitive identifiers are stripped before your documents reach an AI model.
            </h2>
            <p
              className="text-[#1A1F1C] text-lg text-center mb-6"
              style={{
                lineHeight: 1.7,
              }}
            >
              When you upload a document to Sasquatch, we scan it and replace sensitive identifiers — social security
              numbers, driver's license numbers, credit card numbers, and similar data — with placeholder markers before
              any AI processing happens. The model receives the redacted copy, not your original file.
            </p>
            <p
              className="text-[#5A6560] text-center"
              style={{
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: '#1A1F1C' }}>Built to fail loudly, not silently.</strong> No automated detection
              is perfect, so we run a pattern-matching baseline unconditionally on every document, layer Amazon
              Comprehend on top of it, and alarm if that second layer ever stops working.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              How We Protect Your Data
            </h2>
            <p
              className="text-[#5A6560] text-lg max-w-3xl mx-auto"
              style={{
                lineHeight: 1.6,
              }}
            >
              Here's what happens behind the scenes when you upload a document or import a file.
            </p>
          </div>

          <div className="space-y-6">
            {protectionSteps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#E6F4EC] flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#1A3D2B]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[#4CAF70] font-mono text-sm font-semibold"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      STEP {i + 1}
                    </span>
                    <h3
                      className="text-[#1A1F1C]"
                      style={{
                        fontSize: '20px',
                        fontWeight: 600,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-[#5A6560]"
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Documents vs. chat */}
          <Card className="p-6 lg:p-8 bg-white mt-12 border-l-4 border-l-[#4CAF70]">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-[#1A3D2B] flex-shrink-0 mt-1" />
              <div>
                <h3
                  className="text-[#1A1F1C] mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                  }}
                >
                  Documents and chat features work differently — on purpose
                </h3>
                <p
                  className="text-[#5A6560] mb-4"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                  }}
                >
                  The five steps above describe document uploads and file imports, where bulk sensitive data actually
                  arrives. Those paths run our full redaction set.
                </p>
                <p
                  className="text-[#5A6560]"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                  }}
                >
                  Chat and assistant features use a deliberately narrower set. Social security numbers and credit card
                  numbers are redacted; email addresses, phone numbers, and permit, parcel, or case numbers are
                  preserved — because answering a question about a county inspector's email or a specific permit number
                  requires being able to see it. We'd rather tell you where the line sits than imply there isn't one.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* AI Confidence & Verification */}
      <section className="py-16 lg:py-20 bg-[#F7F8F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6 text-[#C8821A]" />
            </div>
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
              }}
            >
              Always Verify AI Outputs
            </h2>
            <p
              className="text-[#5A6560] text-lg max-w-3xl mx-auto"
              style={{
                lineHeight: 1.7,
              }}
            >
              AI is powerful, but it's not perfect. Where Sasquatch can meaningfully score its own certainty — email
              triage and jurisdiction answers — the result carries a{' '}
              <strong style={{ color: '#1A1F1C' }}>confidence percentage</strong> telling you how sure the AI is.
            </p>
          </div>

          <Card className="p-8 bg-white">
            <h3
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              Why confidence matters
            </h3>
            <p
              className="text-[#5A6560] mb-4"
              style={{
                lineHeight: 1.7,
              }}
            >
              AI outputs the best information possible when given relevant, complete data. But if a document is unclear,
              poorly scanned, or missing key details, the AI's confidence will be lower. We show you that confidence
              score so you can make informed decisions.
            </p>
            <p
              className="text-[#5A6560] mb-6"
              style={{
                lineHeight: 1.7,
              }}
            >
              Not every feature carries one. Drafts, reports, and general chat responses don't produce a meaningful
              confidence number, so we don't invent one — review those the same way you'd review a scored output.
            </p>
            <div className="bg-[#FFF3E0] border-l-4 border-[#C8821A] p-4 rounded">
              <p
                className="text-[#1A1F1C]"
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                }}
              >
                <strong>Use caution.</strong> Always review AI-generated data — especially materials lists, cost
                estimates, or permit extractions — before relying on it for critical decisions, billing, or compliance.
                AI is a tool to save you time, not a replacement for your expertise.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              Our AI Governance Principles
            </h2>
            <p
              className="text-[#5A6560] text-lg max-w-3xl mx-auto"
              style={{
                lineHeight: 1.6,
              }}
            >
              How we build, deploy, and manage AI features responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, i) => (
              <Card key={i} className="p-6 bg-white">
                <div className="w-10 h-10 rounded-lg bg-[#E6F4EC] flex items-center justify-center mb-4">
                  <principle.icon className="w-5 h-5 text-[#1A3D2B]" />
                </div>
                <h3
                  className="text-[#1A1F1C] mb-2"
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  className="text-[#5A6560]"
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                  }}
                >
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Promise */}
      <section className="py-16 lg:py-20 bg-[#F7F8F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="p-8 lg:p-12 bg-white border-2 border-[#1A3D2B]">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E6F4EC] flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-[#1A3D2B]" />
              </div>
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 700,
                }}
              >
                Your Data Belongs to You
              </h2>
            </div>

            <div className="space-y-4 text-[#1A1F1C]" style={{ lineHeight: 1.7 }}>
              <p>
                Sasquatch will <strong>never sell your data</strong> to third parties. Your permits,
                jobs, documents, and business information are yours — not ours to monetize.
              </p>
              <p>
                We will <strong>never share your data</strong> with advertisers, data brokers, or other companies without
                your explicit knowledge and consent. If we ever introduce optional integrations or partnerships that
                involve data sharing, we'll tell you exactly what's being shared and give you full control over whether
                to participate.
              </p>
              <p>
                We <strong>do not train AI models</strong> on your business data. We access general-purpose models
                through Amazon Bedrock, whose terms prohibit using your inputs or outputs to train the underlying
                models, and we do not fine-tune or otherwise build models on your documents.
              </p>
              <p>
                We <strong>do not track you across the web</strong>. This website sets no cookies, runs no analytics,
                and loads no third-party tracking scripts.
              </p>
              <p className="text-[#5A6560] text-sm pt-4 border-t border-[#ECEEED]">
                This commitment is part of our{' '}
                <Link to="/terms" className="text-[#1A3D2B] underline hover:no-underline">
                  Terms of Service
                </Link>
                . If our practices ever change, we'll notify you in advance. You can email us at any time to export your
                data or close your account.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Safeguards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2
            className="text-[#1A1F1C] mb-8 text-center"
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
            }}
          >
            Additional Safeguards
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#4CAF70] flex-shrink-0 mt-1" />
                <div>
                  <h3
                    className="text-[#1A1F1C] mb-2"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                    }}
                  >
                    Encryption at Rest and In Transit
                  </h3>
                  <p
                    className="text-[#5A6560]"
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                    }}
                  >
                    Stored data is encrypted with AES-256 server-side encryption across our document storage and
                    database, and everything in transit uses TLS 1.2 or higher, enforced at both our API gateway and
                    CDN. Your documents and permit data are protected in storage and when moving between systems.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#4CAF70] flex-shrink-0 mt-1" />
                <div>
                  <h3
                    className="text-[#1A1F1C] mb-2"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                    }}
                  >
                    Role-Based Access Control
                  </h3>
                  <p
                    className="text-[#5A6560]"
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                    }}
                  >
                    You control who on your team can view or change sensitive data. Assign roles (Admin, Manager,
                    Read-only) to limit access to financial information, cost data, and client details to only those who
                    need it.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#4CAF70] flex-shrink-0 mt-1" />
                <div>
                  <h3
                    className="text-[#1A1F1C] mb-2"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                    }}
                  >
                    Audit Trails
                  </h3>
                  <p
                    className="text-[#5A6560]"
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                    }}
                  >
                    Every action in Sasquatch is logged: who viewed a document, who updated a permit, who ran an AI
                    extraction. You always know who did what and when, ensuring accountability and compliance.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#4CAF70] flex-shrink-0 mt-1" />
                <div>
                  <h3
                    className="text-[#1A1F1C] mb-2"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                    }}
                  >
                    Secure Cloud Infrastructure
                  </h3>
                  <p
                    className="text-[#5A6560]"
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                    }}
                  >
                    Sasquatch runs on Amazon Web Services, using managed services for authentication, storage, and AI
                    processing, with each service's permissions scoped to only what it needs. We are not currently SOC 2
                    or ISO 27001 certified — when that changes, we'll say so here rather than imply it.
                  </p>
                </div>
              </div>
            </Card>
          </div>
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
          <p className="text-white/70 text-lg mb-8">
            We're happy to walk you through our security practices and answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#1A3D2B] hover:bg-gray-100"
                style={{ fontWeight: 600 }}
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/10 hover:text-white"
                style={{ fontWeight: 600 }}
              >
                See Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
