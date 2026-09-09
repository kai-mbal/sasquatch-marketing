import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Card } from '../components/ui/card';

const headingStyle = {
  fontSize: 'clamp(24px, 4vw, 28px)',
  fontWeight: 700,
} as const;

export function TermsOfServicePage() {
  usePageTitle('Terms of Service');
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
            Terms of Service
          </h1>
          <p className="text-white/70">Effective date: September 9, 2026</p>
          <p className="text-white/50 text-sm mt-2">
            Replaces the version effective February 26, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* 1 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                1. Agreement to These Terms
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                These Terms of Service ("Terms") are a binding agreement between you and{' '}
                <strong className="text-[#1A1F1C]">Sasquatch Analytics, LLC</strong>, a Colorado limited liability
                company ("Sasquatch," "we," "us"). They govern your access to and use of the Sasquatch web application,
                mobile application, and website (together, the "Service").
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                By accessing or using the Service, you agree to these Terms. If you do not agree, do not use the
                Service.
              </p>
            </div>

            {/* 2 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                2. Eligibility and Your Account
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                You must be at least 18 years old and able to enter into a binding contract to use the Service. If you
                use the Service on behalf of an organization, you represent that you have authority to bind that
                organization, and "you" refers to both you and that organization.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                You are responsible for the accuracy of your account information, for keeping your credentials
                confidential, and for all activity under your account — including activity by users you invite. Tell us
                promptly at contact@sasquatchpermit.com if you suspect unauthorized access.
              </p>
            </div>

            {/* 3 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                3. Description of the Service
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                Sasquatch is a software platform that helps contractor organizations manage building permits,
                inspections, reminders, documents, and related workflows. The Service may include: jurisdiction
                reference data; permit, inspection, and job tracking; document storage and uploads; email ingestion and
                notifications; AI-assisted features such as permit data extraction, import mapping, materials lists and
                cost estimates, and job triage; expense and invoice tools; compliance credential tracking; and
                integration with third-party data sources.
              </p>
            </div>

            {/* 4 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                4. Early Access and Pre-Release Features
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                The Service is currently offered through early access rather than open self-serve signup, and accounts
                are provisioned individually. Some capabilities may be labeled beta, preview, or pre-release; those are
                provided without any service-level commitment and may be changed or withdrawn.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                We may add, change, or discontinue individual features at any time. If we discontinue the Service as a
                whole, Section 13 governs what happens to your subscription and your data.
              </p>
            </div>

            {/* 5 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                5. No Professional Advice; Informational Use Only
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                The Service is provided for organizational and workflow convenience only. It does not constitute legal,
                financial, accounting, permitting, engineering, or other professional advice. You are solely responsible
                for obtaining any required professional advice and for all decisions you or your business make. We do
                not guarantee the accuracy, completeness, or suitability of any data, estimates, or outputs (including
                AI-generated content) for your specific situation. Use of the Service does not create a professional or
                fiduciary relationship between you and us.
              </p>
            </div>

            {/* 6 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                6. AI-Generated and Third-Party Data
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                The Service uses artificial intelligence and third-party data sources to generate or display content
                (e.g., permit extraction, materials lists, cost estimates, job insights). Such content is provided for
                convenience only and may be incomplete, inaccurate, or outdated. We do not guarantee the correctness or
                suitability of AI-generated or third-party data for your projects, permits, or business decisions.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                You are solely responsible for verifying all information before relying on it and for any outcomes
                resulting from your use of or reliance on such content. Our{' '}
                <Link to="/governance" className="text-[#1A3D2B] underline hover:no-underline">
                  AI Governance statement
                </Link>{' '}
                describes how these features work, which outputs carry a confidence score, and what our redaction does
                and does not cover.
              </p>
            </div>

            {/* 7 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                7. Accuracy of Permit and Jurisdiction Information
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                Permit statuses, jurisdiction rules, cutoff times, contact information, and other data may be sourced
                from third parties or automated systems and may be delayed or incorrect. We do not guarantee the
                accuracy or timeliness of such information. You are responsible for confirming permit status, deadlines,
                and requirements with the relevant authorities. We are not liable for missed deadlines, rejected
                permits, fines, or other consequences resulting from your reliance on information displayed in the
                Service.
              </p>
            </div>

            {/* 8 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                8. Your Content and Data
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">You own your content.</strong> Permits, jobs, documents, records, and
                other material you submit to the Service ("Your Content") remain yours. Nothing in these Terms transfers
                ownership of Your Content to us.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                You grant us a limited, non-exclusive, worldwide, royalty-free license to host, store, copy, transmit,
                display, and process Your Content solely to operate, provide, secure, and support the Service for you,
                and as described in our{' '}
                <Link to="/privacy" className="text-[#1A3D2B] underline hover:no-underline">
                  Privacy Policy
                </Link>
                . This license exists only so we can run the Service, and it ends when you delete the content or close
                your account, except for copies in routine backups until those rotate out.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">We do not train AI models on Your Content.</strong> We may use
                aggregated, de-identified information that does not identify you, your business, your clients, or the
                contents of your documents to operate and improve the Service.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                <strong className="text-[#1A1F1C]">Your representations.</strong> You represent that you have all rights
                and permissions necessary to submit Your Content, including any personal information about third parties
                such as homeowners, clients, subcontractors, or inspectors, and that doing so does not violate any law
                or third-party right. You are responsible for responding to requests those individuals make about their
                information.
              </p>
            </div>

            {/* 9 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                9. Our Intellectual Property
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                We own the Service and everything in it other than Your Content — including the software, interfaces,
                documentation, trademarks, and the Sasquatch jurisdiction database and all compilations, structures, and
                derived data within it. These are protected by intellectual property law, and we reserve all rights not
                expressly granted here.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                Subject to these Terms and your payment of applicable fees, we grant you a limited, non-exclusive,
                non-transferable, revocable license to access and use the Service for your organization's internal
                business purposes during your subscription.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">You may not:</p>
              <ul className="text-[#5A6560] leading-relaxed space-y-2 mb-4 list-disc pl-6">
                <li>
                  scrape, crawl, harvest, or bulk-extract the jurisdiction database or any other part of the Service, by
                  automated means or otherwise, except through an interface we provide for that purpose;
                </li>
                <li>
                  resell, sublicense, redistribute, publish, or otherwise make the jurisdiction database or Service
                  content available to anyone outside your organization;
                </li>
                <li>copy, modify, translate, reverse engineer, decompile, or attempt to derive the source code of the Service;</li>
                <li>
                  use the Service to build, train, or benchmark a competing product or service, or to assist anyone else
                  in doing so;
                </li>
                <li>remove or obscure any proprietary notice, or circumvent any access control, rate limit, or usage restriction;</li>
                <li>
                  use the Service unlawfully, to infringe anyone's rights, to transmit malicious code, or to interfere
                  with its proper operation or security.
                </li>
              </ul>
              <p className="text-[#5A6560] leading-relaxed">
                If you send us feedback or suggestions, we may use them without restriction or obligation to you. You
                keep any rights you already had in them.
              </p>
            </div>

            {/* 10 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                10. Fees, Billing, and Automatic Renewal
              </h2>

              <Card className="p-6 bg-white border-2 border-[#C8821A] mb-6">
                <p className="text-[#1A1F1C]" style={{ lineHeight: 1.7 }}>
                  <strong>Please read this: your subscription renews automatically.</strong> Unless you cancel before
                  the end of your current billing period, your subscription will automatically renew for another period
                  of the same length, and the payment method on file will be charged at the then-current rate. You can
                  cancel at any time in your account settings or by emailing contact@sasquatchpermit.com, and
                  cancellation takes effect at the end of the period you have already paid for.
                </p>
              </Card>

              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Plans and fees.</strong> Fees are those displayed at the time of
                purchase. Jurisdiction Database Access and the permit, inspection, and job tracking plans are
                independent subscriptions and are billed separately; you may hold one, the other, or both.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Billing.</strong> Subscriptions are billed in advance at the start of
                each billing period, monthly or annually as you select. Payments are processed by Stripe, and by
                subscribing you authorize recurring charges to your payment method until you cancel.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Upgrades and downgrades.</strong> Upgrades take effect immediately and
                are charged a prorated amount for the remainder of the current period. Downgrades take effect at the
                start of your next billing period.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Price changes.</strong> We may change our prices, but not in the
                middle of a period you have already paid for. We will give you at least 30 days' notice by email before
                a price change takes effect at your next renewal, and you may cancel before then if you don't agree.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Failed payments.</strong> If a charge fails, we may retry it and will
                notify you. If it remains unpaid, we may suspend your access after 10 days' notice and terminate the
                subscription if it stays unpaid for 30 days.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                <strong className="text-[#1A1F1C]">Taxes.</strong> Fees are exclusive of sales, use, and similar taxes.
                You are responsible for any such taxes other than taxes on our income.
              </p>
            </div>

            {/* 11 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                11. Trials and Promotional Access
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                We may offer free trials, pilot access, or discounted promotional terms. If we do, we will tell you in
                writing how long it lasts, what happens when it ends, and whether it converts to a paid subscription —
                and if it converts, we will notify you before the first charge so you can cancel first. Promotional
                terms apply only as described and may be withdrawn for future customers at any time.
              </p>
            </div>

            {/* 12 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                12. Cancellation and Refunds
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                You may cancel at any time. Cancellation takes effect at the end of your current billing period, you
                keep access until then, and you will not be charged again.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Annual plans.</strong> If you cancel an annual plan within 14 days of
                your first payment on that plan, we will refund it in full.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                Otherwise, fees are non-refundable and we do not prorate refunds for partial periods — except where we
                terminate or discontinue the Service without cause, in which case Section 13 applies, or where a refund
                is required by law.
              </p>
            </div>

            {/* 13 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                13. Suspension and Termination
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">By us, for cause.</strong> We may suspend or terminate your access if
                you materially breach these Terms, fail to pay, create a security or legal risk, or use the Service
                unlawfully. Where the problem can reasonably be fixed, we will give you notice and 10 days to fix it
                first — except where an immediate suspension is needed to protect the Service, other customers, or
                someone's safety.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">By us, without cause.</strong> We may stop offering the Service, or
                end your subscription without cause, on 30 days' notice. If we do, we will refund the unused prepaid
                portion of your subscription.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Effect.</strong> When your subscription ends, your right to use the
                Service ends. Section 14 gives you a window to retrieve your data.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                Sections that by their nature should survive — including Sections 5 through 9, 14, 16 through 20, and
                22 — survive termination.
              </p>
            </div>

            {/* 14 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                14. Data, Privacy, and Export
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                Our{' '}
                <Link to="/privacy" className="text-[#1A3D2B] underline hover:no-underline">
                  Privacy Policy
                </Link>{' '}
                describes what we collect, who processes it, how long we keep it, and how to exercise your rights. It is
                part of these Terms.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Export.</strong> During your subscription and for 30 days after it
                ends, you may request a copy of Your Content and we will provide it in a portable format within 30 days
                of the request.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                After that window we may delete Your Content, and we will delete it sooner on request. Some working
                files expire automatically on the schedule described in the Privacy Policy, so keep your own copies of
                anything you need to retain independently.
              </p>
            </div>

            {/* 15 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                15. Third-Party Services
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                The Service relies on and may link to third-party services (for example, cloud providers, payment
                processing, jurisdiction portals, and email delivery). We are not responsible for the availability,
                accuracy, or conduct of those services, and your use of them may be subject to their own terms. The
                providers we use to deliver the Service are listed in our{' '}
                <Link to="/privacy" className="text-[#1A3D2B] underline hover:no-underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* 16 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                16. No Warranties; "As Is"
              </h2>
              <p className="text-[#5A6560] leading-relaxed uppercase">
                THE SERVICE AND ALL CONTENT, DATA, AND OUTPUTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT
                THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS. YOU USE THE
                SERVICE AT YOUR OWN RISK.
              </p>
            </div>

            {/* 17 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                17. Limitation of Liability
              </h2>
              <p className="text-[#5A6560] leading-relaxed uppercase mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE (AND OUR AFFILIATES, OFFICERS, DIRECTORS,
                EMPLOYEES, AND AGENTS) SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, BUSINESS, OR GOODWILL, ARISING OUT OF OR
                RELATED TO YOUR USE OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
                SUCH DAMAGES. IN NO EVENT SHALL OUR AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO
                THESE TERMS OR THE SERVICE EXCEED THE AMOUNT YOU PAID US FOR THE SERVICE IN THE TWELVE (12) MONTHS
                PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER. THESE LIMITATIONS APPLY
                REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE) AND
                EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF
                LIABILITY; IN SUCH JURISDICTIONS, OUR LIABILITY WILL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                Nothing in these Terms limits our liability for fraud, fraudulent misrepresentation, gross negligence,
                willful misconduct, or any liability that cannot be limited under applicable law.
              </p>
            </div>

            {/* 18 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                18. Indemnification
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Sasquatch and our affiliates, officers, directors,
                employees, and agents from and against third-party claims, and any resulting damages, losses,
                liabilities, costs, and expenses (including reasonable attorneys' fees), arising out of or related to:
                (a) your use of the Service in violation of these Terms or applicable law; (b) Your Content, including
                any claim that it infringes or misappropriates a third party's rights or violates their privacy; or
                (c) your violation of any third-party right.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                We will notify you promptly of any claim, and you may control the defense with counsel of your choice —
                but you may not settle any claim in a way that imposes an obligation or admission on us without our
                prior written consent, which we will not unreasonably withhold. We may participate in the defense at our
                own expense.
              </p>
            </div>

            {/* 19 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                19. Changes to the Service and These Terms
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                We may modify these Terms. For material changes, we will give account holders at least{' '}
                <strong className="text-[#1A1F1C]">30 days' advance notice by email</strong> before they take effect.
                Minor corrections are posted here with an updated effective date.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                If you continue using the Service after a change takes effect, you accept the revised Terms. If you
                don't agree, you may cancel before the effective date, and we will refund the unused prepaid portion of
                your current subscription period.
              </p>
            </div>

            {/* 20 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                20. Dispute Resolution; Governing Law
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Talk to us first.</strong> If you have a dispute, email
                contact@sasquatchpermit.com describing it. Both of us agree to try in good faith to resolve it
                informally for 30 days before starting formal proceedings.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">Governing law and venue.</strong> These Terms and any dispute arising
                out of them or the Service are governed by the laws of the State of Colorado, without regard to its
                conflict of laws principles. You agree to resolve any such dispute exclusively in the state or federal
                courts located in Colorado, consent to personal jurisdiction there, and waive any objection to venue.
              </p>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                <strong className="text-[#1A1F1C]">No class actions.</strong> Disputes must be brought individually, not
                as a plaintiff or class member in any class, collective, or representative proceeding.
              </p>
              <p className="text-[#5A6560] leading-relaxed">
                <strong className="text-[#1A1F1C]">Time limit.</strong> Any claim arising out of these Terms or the
                Service must be brought within one year after it arises, or it is permanently barred, unless applicable
                law prohibits a shorter period than the statutory one.
              </p>
            </div>

            {/* 21 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                21. Force Majeure
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                Neither party is liable for a delay or failure to perform caused by events beyond its reasonable
                control, including natural disasters, war, terrorism, labor disputes, government action, internet or
                utility failures, and outages at cloud providers or jurisdiction portals. This does not excuse your
                obligation to pay fees for the Service you have received.
              </p>
            </div>

            {/* 22 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                22. General
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                These Terms, together with the Privacy Policy, constitute the entire agreement between you and us
                regarding the Service and supersede any prior agreements. Our failure to enforce any right or provision
                will not be deemed a waiver. If any provision is held invalid or unenforceable, the remaining provisions
                remain in effect. You may not assign these Terms without our prior written consent; we may assign them
                in connection with a merger, acquisition, or sale of assets. Notices to you may be sent to the email
                address on your account. Nothing in these Terms creates a partnership, joint venture, employment
                relationship, or any third-party beneficiary right.
              </p>
            </div>

            {/* 23 */}
            <div className="mb-12">
              <h2 className="text-[#1A1F1C] mb-4" style={headingStyle}>
                23. Contact
              </h2>
              <p className="text-[#5A6560] leading-relaxed mb-4">
                For questions about these Terms, contact us at{' '}
                <a href="mailto:contact@sasquatchpermit.com" className="text-[#1A3D2B] hover:underline">
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

            {/* Effective Date */}
            <div className="mt-16 pt-8 border-t border-[#ECEEED]">
              <p className="text-[#5A6560] text-sm mb-2">
                <strong>Effective date:</strong> September 9, 2026
              </p>
              <p className="text-[#5A6560] text-sm">
                See also our{' '}
                <Link to="/privacy" className="text-[#1A3D2B] underline hover:no-underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/governance" className="text-[#1A3D2B] underline hover:no-underline">
                  AI Governance
                </Link>{' '}
                statement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
