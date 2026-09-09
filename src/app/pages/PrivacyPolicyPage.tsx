import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Card } from '../components/ui/card';

export function PrivacyPolicyPage() {
  usePageTitle('Privacy Policy');

  const subprocessors = [
    {
      name: 'Amazon Web Services (AWS)',
      purpose:
        'Hosting, authentication, file storage, database, email delivery, and AI processing (Bedrock, Comprehend, Textract). Nearly all application data lives here.',
    },
    {
      name: 'Stripe',
      purpose:
        'Subscription billing. Stripe receives your billing contact and payment details directly — we never see or store your full card number.',
    },
    {
      name: 'Vercel',
      purpose: 'Hosting for this marketing website (sasquatchpermit.com).',
    },
    {
      name: 'Resend',
      purpose: 'Delivers the contact and demo-request forms on this website to our inbox.',
    },
    {
      name: 'Beehiiv',
      purpose: 'Runs our email newsletter. Only applies if you subscribe, and only receives your email address and name.',
    },
    {
      name: 'Supabase',
      purpose:
        'Stores our own jurisdiction reference data (county rules, contacts, fees). We read from it; your account data is never written to it.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#1A3D2B] pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-white mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 700,
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/70">Effective date: September 9, 2026</p>
        </div>
      </section>

      {/* Plain-language summary */}
      <section className="py-12 lg:py-16 bg-[#F7F8F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="p-8 lg:p-10 border-2 border-[#4CAF70] bg-white">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(22px, 4vw, 26px)',
                fontWeight: 700,
              }}
            >
              The short version
            </h2>
            <p className="text-[#5A6560] mb-6 leading-relaxed">
              This summary is here for readability. The numbered sections below are the actual policy, and they control
              if the two ever disagree.
            </p>
            <ul className="space-y-3 text-[#1A1F1C]" style={{ lineHeight: 1.7 }}>
              <li className="flex gap-3">
                <span className="text-[#4CAF70] font-semibold flex-shrink-0">—</span>
                <span>
                  We collect what's needed to run permit tracking: your account details, the permits and jobs you
                  create, the files you upload, and billing information.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4CAF70] font-semibold flex-shrink-0">—</span>
                <span>We don't sell your data, share it with advertisers or data brokers, or train AI models on it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4CAF70] font-semibold flex-shrink-0">—</span>
                <span>
                  This website sets no cookies, runs no analytics, and loads no third-party tracking scripts.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4CAF70] font-semibold flex-shrink-0">—</span>
                <span>
                  Sensitive identifiers are redacted before documents reach an AI model. Our{' '}
                  <Link to="/governance" className="text-[#1A3D2B] underline hover:no-underline">
                    AI Governance page
                  </Link>{' '}
                  explains exactly how, including where that protection stops.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4CAF70] font-semibold flex-shrink-0">—</span>
                <span>
                  Email us and we'll send you a copy of your data, correct it, or delete it — see Section 13.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4CAF70] font-semibold flex-shrink-0">—</span>
                <span>
                  Every company we pass data to is named in Section 10. There is no unnamed "trusted partners"
                  category.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* 1 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                1. Who We Are and What This Covers
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                Sasquatch ("we," "us") is a permit and inspection management platform for contractor organizations,
                operated by Sasquatch Analytics, LLC in Colorado, United States. This policy covers the Sasquatch web
                application, our mobile application, and this website.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                This policy describes what we actually do today. When we change what the product does with data, we
                change this policy and tell you — see Section 18.
              </p>
            </div>

            {/* 2 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                2. Two Kinds of People in This Policy
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Our users.</strong> People who create a Sasquatch account and use the
                Service. We decide how their account data is handled, and this policy governs that directly.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                <strong className="text-[#1A1F1C]">Everyone else in your records.</strong> Homeowners, clients,
                subcontractors, and inspectors whose names, addresses, phone numbers, or emails appear in permits and
                documents you upload. We process that information on your instruction and on your behalf — you decide
                what goes in and what comes out, and Section 7 explains what that means for both of us.
              </p>
            </div>

            {/* 3 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                3. Information You Give Us Directly
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                When you create an account we collect your name, email address, organization name, and the role assigned
                to you (Admin, Manager, or Read-only). Authentication is handled by Amazon Cognito; we do not store your
                password.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                If you subscribe to a paid plan, Stripe collects and processes your payment details directly. We receive
                and store only your plan, subscription status, and Stripe customer identifier — never your full card
                number.
              </p>
            </div>

            {/* 4 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                4. Information You Put Into the Service
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                This is the bulk of what we hold. It includes permits and jobs (addresses, jurisdictions, project names,
                statuses, inspection dates), uploaded documents (permit paperwork, work orders, invoices, receipts),
                expense and invoice records, compliance credentials, and any client contact details you choose to store
                alongside a job.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                We do not ask for social security numbers, driver's license numbers, or payment card numbers, and the
                Service has no field for them. They sometimes appear inside documents you upload anyway, which is why we
                redact them before AI processing — see Section 9.
              </p>
            </div>

            {/* 5 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                5. Email You Forward to Us
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                If you use our email ingestion feature, we receive the messages routed to your Sasquatch address and
                store the sender, subject, timestamp, and a truncated copy of the message body so we can match it to the
                right permit.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                Stored email bodies are not redacted, because the sender address and phone numbers in them are exactly
                what the matching depends on. Only forward mail you're comfortable storing in Sasquatch.
              </p>
            </div>

            {/* 6 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                6. Information Collected Automatically
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                Our servers write operational logs: request identifiers, timestamps, the endpoint called, your account
                and organization identifiers, error traces, and IP address. These exist to keep the system running and
                to investigate problems, and they are not used to build a profile of you.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                <strong className="text-[#1A1F1C]">This website collects nothing.</strong> No cookies, no analytics, no
                pixels, no session recording, no third-party scripts of any kind. The application itself uses browser
                storage only to keep you signed in and remember interface preferences.
              </p>
            </div>

            {/* 7 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                7. Other People's Information in Your Account
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                When you upload a permit containing a homeowner's name and address, that person has no relationship with
                us and never agreed to anything. We hold their information because you put it there, we use it only to
                provide the Service to you, and we don't contact them, market to them, or use their details for any
                purpose of our own.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                You are responsible for having the right to upload that information and for handling any request those
                individuals make to you about it. If one of them contacts us directly, we will refer them to you and
                help you respond.
              </p>
            </div>

            {/* 8 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                8. How We Use Information
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                We use it to operate the Service: to display and organize your permits and jobs, run AI-assisted
                extraction and estimation, send notifications and reminders you've enabled, provide support you've asked
                for, bill you, and keep the platform secure and working.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                We also use aggregated, de-identified statistics — for example, how many permits move through a given
                jurisdiction — to improve the product. This never includes your business's identity, your clients, or
                the contents of your documents.
              </p>
            </div>

            {/* 9 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                9. AI Processing
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                AI features send your content to large language models operated by Amazon Web Services (Bedrock). Before
                a document reaches a model, we redact sensitive identifiers such as social security numbers, driver's
                license numbers, and payment card numbers. Chat and assistant features use a deliberately narrower
                redaction set that preserves emails, phone numbers, and permit numbers, because answering those
                questions requires seeing them.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                Our{' '}
                <Link to="/governance" className="text-[#1A3D2B] underline hover:no-underline">
                  AI Governance page
                </Link>{' '}
                describes the full pipeline, the limits of automated redaction, and which outputs carry a confidence
                score. Your content is not used to train these models — see Section 11.
              </p>
            </div>

            {/* 10 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                10. Who We Share Information With
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-6">
                This is the complete list of companies that process data on our behalf. Each is bound by its own
                contractual terms and receives only what it needs for its stated purpose. There is no additional
                "partners" or "affiliates" category.
              </p>

              <div className="space-y-3 mb-6">
                {subprocessors.map((sp, i) => (
                  <Card key={i} className="p-5 bg-white">
                    <h3 className="text-[#1A1F1C] mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                      {sp.name}
                    </h3>
                    <p className="text-[#5A6560]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                      {sp.purpose}
                    </p>
                  </Card>
                ))}
              </div>

              <p className="text-[#5A6560] leading-relaxed">
                We may also disclose information if legally compelled by valid process, or to protect against fraud or
                imminent harm. If we are ever acquired, your data would transfer with the business — and we would tell
                you before it did, with the option to export and close your account first.
              </p>
            </div>

            {/* 11 — What we never do */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                11. What We Don't Do
              </h2>
              <Card className="p-6 lg:p-8 bg-white border-2 border-[#1A3D2B]">
                <ul className="space-y-4 text-[#1A1F1C]" style={{ lineHeight: 1.7 }}>
                  <li>
                    <strong>We do not sell your data.</strong> Not to anyone, for any price, in any form — including the
                    broader definitions of "sale" used by state privacy laws.
                  </li>
                  <li>
                    <strong>We do not share it with advertisers or data brokers.</strong> We run no advertising, and we
                    do not disclose your information for anyone else's marketing.
                  </li>
                  <li>
                    <strong>We do not train AI models on your business data.</strong> We use general-purpose models
                    through Amazon Bedrock, whose terms prohibit using your inputs or outputs to train the underlying
                    models, and we do not fine-tune on your documents.
                  </li>
                  <li>
                    <strong>We do not track you across the web.</strong> No cross-site tracking, no advertising
                    identifiers, no data enrichment from outside sources.
                  </li>
                  <li>
                    <strong>We do not use your data for automated decisions about you.</strong> Nothing in Sasquatch
                    scores, ranks, or profiles you or your business.
                  </li>
                </ul>
              </Card>
            </div>

            {/* 12 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                12. How Long We Keep Information
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                Working files behind the AI pipeline expire automatically: import files and everything derived from them
                are deleted after 30 days, and materials-pipeline files after 90 days. Operational logs are retained for
                troubleshooting and then rotated out.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">
                  Uploaded permit documents and stored email bodies do not currently expire on a schedule.
                </strong>{' '}
                They are kept for as long as your account is active, because they're the records you're relying on us to
                hold. You can delete them at any time, and we will delete them on request.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                When you close your account, we delete your data within 30 days of your request. Residual copies may
                persist briefly in encrypted backups before those rotate out.
              </p>
            </div>

            {/* 13 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                13. Your Rights and How to Use Them
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                You can ask us to send you a copy of your data in a portable format, correct anything inaccurate, delete
                your data, or tell you what we hold and who we've shared it with. Much of this you can also do yourself
                inside the application.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                Email{' '}
                <a
                  href="mailto:contact@sasquatchpermit.com"
                  className="text-[#1A3D2B] underline hover:no-underline"
                >
                  contact@sasquatchpermit.com
                </a>{' '}
                from the address on your account. We'll confirm receipt within 5 business days and complete the request
                within 30 days, or tell you why we need longer.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                We will not charge you, degrade your service, or treat you differently for making a request. These
                requests are handled by a person, not a form that goes nowhere.
              </p>
            </div>

            {/* 14 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                14. Colorado and Other State Privacy Laws
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                Sasquatch is a business-to-business tool, and most state privacy laws — including the Colorado Privacy
                Act — apply to consumer data rather than data processed in a commercial context. We extend the rights in
                Section 13 to all of our users regardless of whether a statute requires it.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                Because we do not sell personal information or use it for targeted advertising, there is nothing for you
                to opt out of on those grounds. If you believe we've mishandled a request, you may contact the Colorado
                Attorney General's office.
              </p>
            </div>

            {/* 15 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                15. Security and Data Location
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                Data is stored and processed in the United States on Amazon Web Services. Stored data is encrypted with
                AES-256, traffic uses TLS 1.2 or higher, access is scoped by role, and each internal service holds only
                the permissions it needs.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                Our{' '}
                <Link to="/governance" className="text-[#1A3D2B] underline hover:no-underline">
                  AI Governance &amp; Data Protection page
                </Link>{' '}
                covers this in more detail, including what we are and aren't certified for. No system is perfectly
                secure, and we don't claim otherwise.
              </p>
            </div>

            {/* 16 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                16. If Something Goes Wrong
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                If we discover a breach affecting your personal information, we will notify affected users without undue
                delay and within 72 hours of confirming it, by email to your account address. We'll tell you what
                happened, what data was involved, and what we're doing about it — including when the answer is
                unflattering.
              </p>
            </div>

            {/* 17 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                17. Children's Information
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                Sasquatch is a tool for licensed contractors and is not directed to anyone under 18. We do not knowingly
                collect information from children, and we'll delete it promptly if we learn we have.
              </p>
            </div>

            {/* 18 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                18. Changes to This Policy
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                This policy is written narrowly and specifically, which means we have to update it when the product
                changes. That's intentional — an amendment is the notice you're owed, and a policy vague enough to never
                need one isn't telling you much.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                For material changes — new categories of data, a new sub-processor, or a new use of your information —
                we'll email account holders at least 30 days before the change takes effect, so you can export your data
                or close your account first. Minor corrections are posted here with an updated effective date.
              </p>
            </div>

            {/* 19 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 700 }}
              >
                19. Contact
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                For any privacy question or request, email{' '}
                <a
                  href="mailto:contact@sasquatchpermit.com"
                  className="text-[#1A3D2B] underline hover:no-underline"
                >
                  contact@sasquatchpermit.com
                </a>
                .
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                Sasquatch Analytics, LLC
                <br />
                Colorado, United States
              </p>
            </div>

            {/* Related */}
            <div className="pt-8 border-t border-[#ECEEED]">
              <p className="text-[#5A6560] text-sm">
                See also our{' '}
                <Link to="/governance" className="text-[#1A3D2B] underline hover:no-underline">
                  AI Governance &amp; Data Protection
                </Link>{' '}
                statement and our{' '}
                <Link to="/terms" className="text-[#1A3D2B] underline hover:no-underline">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
