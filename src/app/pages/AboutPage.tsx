import { Wrench, Target, Users, Linkedin } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Card } from '../components/ui/card';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export function AboutPage() {
  usePageTitle('About');
  const values = [
    {
      icon: Wrench,
      title: 'Simplicity',
      description:
        'No training required. No enterprise bloat. Just a straight answer on what a jurisdiction requires, and the tools to track the permits and inspections that follow.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description:
        'Jurisdiction and permit data are too important to lose. Sasquatch runs on systems that work every time, backed by secure infrastructure and daily backups.',
    },
    {
      icon: Users,
      title: 'Contractor-First',
      description:
        'Not built for investors or accountants. Built for the people in the field who need real answers, fast.',
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
            Built To Answer One Question: What Does This Jurisdiction Require?
          </h1>
          <p
            className="text-white/80 text-lg leading-relaxed"
            style={{
              lineHeight: 1.7,
            }}
          >
            Sasquatch was built by someone who's spent too many hours on hold with county clerks, hunting for a
            jurisdiction's requirements across five different portals, and missing inspection windows because nobody
            wrote down the cutoff time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              Running a contracting business in Colorado means guessing what a jurisdiction wants until you're already
              on the job. Denver, El Paso County, Arapahoe, Jefferson — each with its own codes, its own portal, its
              own inspection cutoff time, and nothing written down in one place.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              Contractors end up finding out the hard way — from an inspector who just failed them, or a permit that
              gets kicked back over a requirement nobody knew existed. Every jurisdiction is a black box until someone
              calls it, and the next contractor has to figure it out all over again.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              Sasquatch exists to close that gap: one place to check exactly what a jurisdiction requires before a
              crew shows up, instead of after.
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
              Sasquatch is a jurisdiction intelligence platform that knows how every Colorado county works — codes,
              cutoff times, contacts, and quirks — and puts it in one searchable place. Permit, inspection, and job
              tracking layer on top for teams that want them.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              It's built for electrical contractors, plumbing crews, solar installers, and roofers. People who need a
              straight answer, not enterprise software that takes 3 weeks to learn.
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
              The long-term goal is for Sasquatch to be the definitive source of jurisdiction knowledge in
              Colorado — the place a contractor checks first, before a bid, before a permit, before a truck leaves
              the yard.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              Deeper integration — in-app permit filing, live inspection scheduling — will eventually require direct
              API access to government systems. That means formal partnerships with jurisdictions across Colorado,
              navigating complex security protocols, and securing permissions that typically demand extensive
              collaboration with government IT departments and regulatory bodies. It's a significant undertaking
              that will take time, persistence, and careful relationship-building.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              That hasn't changed the plan. Contractors deserve a real source of truth for permitting, and getting
              there is worth the work. In the meantime, the jurisdiction database keeps growing — more counties, more
              detail, and more of the day-to-day knowledge that used to live only in a veteran field manager's head.
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
                As more contractors rely on Sasquatch, the jurisdiction coverage grows, the detail gets sharper, and
                the case for jurisdictions to work directly with the platform gets stronger. Every contractor who
                joins makes the database more useful for the next one.
              </p>
            </div>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              This is a multi-year effort. If you're a contractor who's tired of guessing what a jurisdiction wants,
              there's a place for you here.
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
            software company focused on jurisdiction data and field operations tools.
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
                network. I'm not building in a vacuum. I'm building alongside the people who
                use it every day.
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