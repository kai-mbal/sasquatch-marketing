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
        'No training required. No enterprise bloat. Just the tools you need to manage permits and inspections without the chaos.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description:
        'Your permit data is too important to lose. We build systems that work every time, backed by secure infrastructure and daily backups.',
    },
    {
      icon: Users,
      title: 'Contractor-First',
      description:
        'We\'re not building for investors or accountants. We\'re building for the people in the field who need real answers, fast.',
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
            Built because we lived the problem.
          </h1>
          <p
            className="text-white/80 text-lg leading-relaxed"
            style={{
              lineHeight: 1.7,
            }}
          >
            Sasquatch was built by people who've spent too many hours on hold with county clerks, tracking down permit
            status in 5 different portals, and missing inspection windows because someone forgot to write down a cutoff
            time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              We know what it's like to run a contracting business in Colorado. You're juggling permits across Denver,
              El Paso County, Arapahoe, and Jefferson — each with their own portal, their own rules, their own
              inspection cutoff times.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              You've got spreadsheets, sticky notes, calendar reminders, and a folder full of PDFs from 6 different
              jurisdictions. Your crew is asking where they need to be tomorrow. Your client wants an update. The county
              portal is down again.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              We built Sasquatch because we got tired of that chaos. We wanted one place to see every permit, every
              inspection, every job — without logging into 5 different systems or digging through email threads to find
              a confirmation number.
            </p>

            <div
              className="bg-[#1A3D2B] text-white p-8 rounded-xl my-12"
              style={{
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              "We believe a contractor's time should be spent on the job — not on hold with a county clerk."
            </div>

            <p className="text-[#1A1F1C] text-lg leading-relaxed mb-6">
              So we built Sasquatch. A permit intelligence platform that knows how every Colorado county works, tracks
              health status automatically, surfaces what needs attention today, and gets out of your way so you can do
              the work that matters.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              It's built for electrical contractors, plumbing crews, solar installers, and roofers. People who need real
              tools, not enterprise software that takes 3 weeks to learn.
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
            Our Vision for Sasquatch
          </h2>

          <div className="space-y-6">
            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              Our ultimate goal is to transform Sasquatch into a comprehensive command center for contractors — a
              single platform where you can not only track permits and inspections, but schedule them, file for new
              permits, communicate with jurisdictions, and manage every aspect of your permitting operations without
              leaving the application.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              We're transparent about the challenges ahead. To enable in-app permit filing and inspection scheduling,
              we need direct API integration with government systems. This requires establishing formal partnerships
              with jurisdictions across Colorado, navigating complex security protocols, and securing permissions that
              typically demand extensive collaboration with government IT departments and regulatory bodies. It's a
              significant undertaking that will take time, persistence, and careful relationship-building.
            </p>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              Despite these obstacles, we're committed to pursuing this vision. We believe contractors deserve better
              tools, and we're willing to do the hard work required to build them. While we work toward these deeper
              integrations, we'll continue shipping features that solve real problems today — smarter tracking,
              better alerts, jurisdiction-specific intelligence, and workflow automation that saves time on every
              project.
            </p>

            <div
              className="bg-[#E6F4EC] border-l-4 border-[#1A3D2B] p-6 rounded-r-lg my-8"
            >
              <p
                className="text-[#1A1F1C] text-lg font-semibold"
               
              >
                Sasquatch will evolve alongside our users.
              </p>
              <p className="text-[#5A6560] mt-2">
                As our user base grows, so will our feature set, our jurisdiction coverage, and our ability to
                advocate for better contractor tools across Colorado's permitting ecosystem. Every contractor who
                joins Sasquatch makes the platform stronger and brings us closer to the full-service command center
                we're building toward.
              </p>
            </div>

            <p className="text-[#1A1F1C] text-lg leading-relaxed">
              This is a multi-year journey, and we're in it for the long haul. If you're a contractor who's tired of
              the status quo and wants to be part of building something better, we'd love to have you with us.
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
            Sasquatch Permit Intelligence is built and operated by{' '}
            <a
              href="https://sasquatchanalytics.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1A3D2B] hover:text-[#4CAF70] underline transition-colors"
            >
              Sasquatch Analytics
            </a>, a Colorado-based
            software company focused on field operations tools.
          </p>
          <p className="text-[#5A6560]">
            We're a small team that understands the trade contractor space. We build tools that solve real problems, not
            software that looks good in investor decks.
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
            Our Values
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
                contracting business kept venting about the same thing — hours lost to permit
                paperwork, missed inspection windows, and juggling different jurisdiction portals.
                As a machine learning engineer, I knew there had to be a better way.
              </p>
              <p className="text-[#5A6560] mb-4" style={{ lineHeight: 1.8 }}>
                I built Sasquatch because I care about solving real problems for real people.
                Construction is an industry that keeps the world running, and the people in it
                deserve tools that actually work for them — not against them.
              </p>
              <p className="text-[#5A6560] mb-5" style={{ lineHeight: 1.8 }}>
                Every feature in Sasquatch is shaped by direct feedback from contractors in my
                network. I'm not building in a vacuum — I'm building alongside the people who
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
            Get in touch with our team or start a free trial today.
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