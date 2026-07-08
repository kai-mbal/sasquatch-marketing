import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

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
          <p className="text-white/70">
            Effective date: February 26, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                1. Agreement to Terms
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                By accessing or using Sasquatch ("Service," "we," "us"), you agree to be bound by
                these Terms of Service ("Terms"). If you are using the Service on behalf of an organization, you
                represent that you have authority to bind that organization. If you do not agree to these Terms, do not
                use the Service.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                2. Description of the Service
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                Sasquatch is a software platform that helps contractor organizations manage building
                permits, inspections, reminders, documents, and related workflows. The Service may include: permit and
                job tracking; document storage and uploads; email ingestion and notifications; AI-assisted features such
                as permit data extraction, import mapping, materials lists and cost estimates, and job triage; expense
                and invoice tools; compliance credential tracking; and integration with third-party data sources (e.g.,
                jurisdiction portals). We may add, change, or discontinue features at any time without notice.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                3. No Professional Advice; Informational Use Only
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

            {/* Section 4 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                4. No Warranties; "As Is"
              </h2>
              <p className="text-[#5A6560] leading-relaxed uppercase">
                THE SERVICE AND ALL CONTENT, DATA, AND OUTPUTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT
                THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS. YOU USE THE
                SERVICE AT YOUR OWN RISK.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                5. Limitation of Liability
              </h2>
              <p className="text-[#5A6560] leading-relaxed uppercase">
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
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                6. Indemnification
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                You agree to indemnify, defend, and hold harmless us and our affiliates, officers, directors, employees,
                agents, and licensors from and against any and all claims, damages, losses, liabilities, costs, and
                expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the
                Service; (b) your violation of these Terms or any applicable law; (c) your violation of any third-party
                right; (d) any content or data you submit or that is submitted through your account; (e) any dispute
                between you and a third party; or (f) any harm to you, your business, your clients, or any third party
                that results from your use of or reliance on the Service, including any decisions made based on data,
                estimates, or AI-generated output from the Service. We reserve the right to assume the exclusive defense
                and control of any matter subject to indemnification by you, at your expense.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                7. AI-Generated and Third-Party Data
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                The Service may use artificial intelligence and third-party data sources to generate or display content
                (e.g., permit extraction, materials lists, cost estimates, job insights). Such content is provided for
                convenience only and may be incomplete, inaccurate, or outdated. We do not guarantee the correctness or
                suitability of AI-generated or third-party data for your projects, permits, or business decisions. You
                are solely responsible for verifying all information before relying on it and for any outcomes resulting
                from your use of or reliance on such content.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                8. Accuracy of Permit and Jurisdiction Information
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

            {/* Section 9 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                9. Your Account and Conduct
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activity
                under your account. You agree to use the Service only in compliance with applicable laws and not to use
                it for any illegal or unauthorized purpose. You may not attempt to gain unauthorized access to the
                Service, other accounts, or our systems, or to interfere with the proper operation of the Service. We
                may suspend or terminate your access at any time for violation of these Terms or for any other reason.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                10. Data and Privacy
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy. We process and store data as described
                there and as necessary to provide the Service. We do not guarantee that your data will be retained for
                any specific period beyond what is stated in our policies or required by law. You are responsible for
                backing up any data important to you.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                11. Third-Party Services
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                The Service may rely on or link to third-party services (e.g., cloud providers, jurisdiction portals,
                email delivery). We are not responsible for the availability, accuracy, or conduct of those services.
                Your use of third-party services may be subject to their own terms and policies.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                12. Changes to the Service and Terms
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                We may modify the Service or these Terms at any time. We will provide notice of material changes to the
                Terms (e.g., by posting updated Terms and a new effective date, or by email where appropriate). Continued
                use of the Service after the effective date of changes constitutes acceptance of the revised Terms. If
                you do not agree, you must stop using the Service.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                13. Termination
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                We may suspend or terminate your access to the Service at any time, with or without cause or notice.
                Upon termination, your right to use the Service ceases immediately. Sections that by their nature should
                survive (including Limitation of Liability, Indemnification, and Dispute Resolution) will survive
                termination.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                14. Dispute Resolution; Governing Law
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                Any dispute arising out of or relating to these Terms or the Service shall be governed by the laws of
                the State of Colorado, without regard to its conflict of laws principles. You agree to resolve any such
                dispute exclusively in the state or federal courts located in Colorado, and you consent to personal
                jurisdiction there. You waive any objection to venue in those courts.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                15. General
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                These Terms constitute the entire agreement between you and us regarding the Service and supersede any
                prior agreements. Our failure to enforce any right or provision of these Terms will not be deemed a
                waiver. If any provision is held invalid or unenforceable, the remaining provisions will remain in
                effect. You may not assign these Terms without our prior written consent; we may assign them without
                restriction. Nothing in these Terms creates a partnership, joint venture, or employment relationship.
              </p>
            </div>

            {/* Section 16 */}
            <div className="mb-12">
              <h2
                className="text-[#1A1F1C] mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 28px)',
                  fontWeight: 700,
                }}
              >
                16. Contact
              </h2>
              <p className="text-[#5A6560] leading-relaxed">
                For questions about these Terms, contact us at{' '}
                <a
                  href="mailto:contact@sasquatchpermit.com"
                  className="text-[#1A3D2B] hover:underline"
                >
                  contact@sasquatchpermit.com
                </a>
                .
              </p>
            </div>

            {/* Effective Date */}
            <div className="mt-16 pt-8 border-t border-[#ECEEED]">
              <p className="text-[#5A6560] text-sm">
                <strong>Effective date:</strong> February 26, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
