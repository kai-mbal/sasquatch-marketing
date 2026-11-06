import { Wrench, Target, Users, Linkedin } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Card } from '../components/ui/card';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export function AboutPage() {
  usePageTitle(
    'About',
    'Sasquatch is built by Sasquatch Analytics in Colorado for the contractor admins, office managers, and owners who run permits and inspections.'
  );
  const values = [
    {
      icon: Wrench,
      title: 'Simplicity',
      description:
        'No enterprise bloat. Just one place to track jobs, permits, and inspections, and see what needs attention.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description:
        'Permit and inspection records are too important to lose. Sasquatch is backed by secure infrastructure and daily backups.',
    },
    {
      icon: Users,
      title: 'Contractor-First',
      description:
        'Not built for investors or accountants. Built for the people in the office who keep jobs moving.',
    },
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#1A3D2B] text-white pt-32 pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h1
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Built for the People Who Keep Permits Moving
          </h1>
          <p
            className="text-white/80 text-lg leading-relaxed"
            style={{
              lineHeight: 1.7,
            }}
          >
            Sasquatch started with a simple problem: contractor offices running permits and inspections from
            spreadsheets, switching between jurisdiction portals, and keeping track of deadlines by hand.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              Running permits for a contracting business in Colorado means keeping a lot of moving parts straight.
              Denver, El Paso County, Arapahoe, Jefferson — each with its own portal, its own process, and its own
              requirements.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              Most of that work falls on an administrator, an office manager, or an owner. It usually lives in a
              spreadsheet, an inbox, and a row of browser tabs, and it depends on someone remembering to check.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              Sasquatch exists to put it in one place: every job, permit, and inspection, with deadlines, reminders,
              and what needs attention today.
            </p>

            <div
              className="bg-[#1A3D2B] text-white p-8 rounded-xl my-12"
              style={{
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              "A contractor's time should be spent on the job — not on hold with a county clerk."
            </div>

            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              Sasquatch is a job, permit, and inspection tool for contractor offices. Local requirements and portal
              links for supported Colorado jurisdictions are built in.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              It's built for the administrators, office managers, and owners at electrical, plumbing, solar, and
              roofing contractors. People who need something straightforward, not enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Future Section */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2
            className="text-[#1A1F1C] text-center mb-12"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            The Vision for Sasquatch
          </h2>

          <div className="space-y-6">
            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              The goal is for Sasquatch to be the first thing a contractor's office opens in the morning: one screen
              that shows what's open, what's due, and what needs attention.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              Jurisdiction coverage keeps growing too, with more added based on customer need.
            </p>

            

            <div
              className="bg-[#E6F4EC] border-l-4 border-[#1A3D2B] p-6 rounded-r-lg my-8"
            >
              <p
                className="text-[#1A1F1C] text-lg font-semibold"

              >
                Sasquatch will evolve alongside the contractors who use it.
              </p>
              <p className="text-[#5A6560] mt-2">
                What gets built next comes from the people running permits and inspections every day.
              </p>
            </div>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              If you're tired of running permits and inspections from a spreadsheet, there's a place for you here.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-[#1A1F1C] mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            About Sasquatch Analytics
          </h2>
          <p className="text-[#5A6560] text-lg mb-4">
            Sasquatch is built and operated by{' '}
            <a
              href="https://sasquatchanalytics.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1A3D2B] hover:text-[#4CAF70] underline transition-colors"
            >
              Sasquatch Analytics
            </a>, a Colorado-based
            software company focused on permit and inspection tools for contractors.
          </p>
          <p className="text-[#5A6560]">
            It's a solo operation right now, built by someone who understands the trade contractor space and builds
            tools that solve real problems, not software that looks good in an investor deck.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-[#1A1F1C] text-center mb-12"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <Card key={i} className="p-8 text-center shadow-lg">
                <div className="w-16 h-16 rounded-full bg-[#E6F4EC] flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#1A3D2B]" />
                </div>
                <h3
                  className="text-xl mb-4"
                  style={{
                    fontWeight: 700,
                    color: '#1A1F1C',
                  }}
                >
                  {value.title}
                </h3>
                <p className="text-[#5A6560]">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2
            className="text-[#1A1F1C] text-center mb-12"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            Meet the Founder
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-[#E6F4EC]">
              <video
                src="/pfp.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-125"
                style={{ objectPosition: 'center 47%' }}
              />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: '#1A1F1C' }}
              >
                Kai Balčiūnas
              </h3>
              <p className="text-sm text-[#4CAF70] font-medium mb-4">
                CEO & Founder
              </p>
              <p className="text-[#5A6560] mb-4" style={{ lineHeight: 1.8 }}>
                Sasquatch started with a conversation. A close friend who runs an electrical
                contracting business kept venting about the same thing: never knowing what a
                jurisdiction actually required until it was too late, plus missed inspection
                windows and juggling different portals. As an AI engineer, I knew
                there had to be a better way.
              </p>
              <p className="text-[#5A6560] mb-4" style={{ lineHeight: 1.8 }}>
                I built Sasquatch because I care about solving real problems for real people.
                Construction is an industry that keeps the world running, and the people in it
                deserve tools that actually work for them, not against them.
              </p>
              <p className="text-[#5A6560] mb-5" style={{ lineHeight: 1.8 }}>
                Every feature in Sasquatch is shaped by direct feedback from contractors in my
                network. I'm not building in a vacuum.
              </p>
              <a
                href="https://www.linkedin.com/in/kai-bal%C4%8Di%C5%ABnas-939673100/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1A3D2B] hover:text-[#4CAF70] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A3D2B] text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            Want to learn more?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get in touch or explore pricing.
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