import { useState } from 'react';
import { Link } from 'react-router';
import { usePageTitle } from '../hooks/usePageTitle';
import { CheckCircle2, AlertCircle, XCircle, FileText, Table, FileSpreadsheet } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PlanCards } from '../components/PlanCards';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { COVERAGE_STATEMENT, VERIFY_NOTE } from '../data/jurisdictions';
import { EARLY_ACCESS_NOTE } from '../data/plans';

const WORKFLOW_TABS = [
  {
    value: 'dashboard',
    label: 'Dashboard',
    items: [
      'See active permits by health status at a glance',
      'A daily action list shows what needs attention today',
      'Upcoming inspections and permits expiring soon',
      'Jobs past their completion date',
    ],
  },
  {
    value: 'jobs',
    label: 'Jobs',
    items: [
      'Track every job by stage and status',
      'Link each permit to the job it belongs to',
      'Create a job from an existing permit',
      'Keep notes with the job',
    ],
  },
  {
    value: 'permits',
    label: 'Permits',
    items: [
      'Track status, application date, and expiration date',
      'Permits turn yellow 14 days before they expire and red once they have',
      'Update or archive several permits at once',
      'Import from a spreadsheet, PDF, image, or Word document',
    ],
  },
  {
    value: 'inspections',
    label: 'Inspections',
    items: [
      'Record more than one inspection per permit',
      'Calendar view of upcoming inspections',
      'Keep the inspector, confirmation number, and time or window with each one',
      'Record results and any corrections that need follow-up',
    ],
  },
  {
    value: 'reminders',
    label: 'Reminders',
    items: [
      'At most one email each morning, and only when something needs attention',
      'Inspections scheduled for tomorrow',
      'Permits expiring in 14 or 7 days',
      'Inspections with no result recorded, expired permits, and jobs past their completion date',
    ],
  },
  {
    value: 'attention',
    label: 'Attention Center',
    items: [
      'Blocked jobs and at-risk permits in one list',
      'See the issue and the action it needs',
      'Keep notes on each issue',
      'Mark an issue resolved when it is handled',
    ],
  },
];

const PROBLEMS = [
  {
    icon: XCircle,
    iconColor: 'text-[#CC3B2F]',
    iconBackground: 'bg-[#FCE8E6]',
    title: 'The spreadsheet is only as current as the last person who updated it.',
    description:
      'Permit numbers, statuses, and dates end up in a shared file, and someone has to keep it right by hand.',
  },
  {
    icon: AlertCircle,
    iconColor: 'text-[#C8821A]',
    iconBackground: 'bg-[#FBF0E0]',
    title: 'Every jurisdiction has its own portal.',
    description: 'Checking on your permits means logging in somewhere else, one jurisdiction at a time.',
  },
  {
    icon: XCircle,
    iconColor: 'text-[#CC3B2F]',
    iconBackground: 'bg-[#FCE8E6]',
    title: 'Deadlines sit in rows until someone goes looking for them.',
    description: 'Expiration dates and inspection dates are easy to lose track of across dozens of open jobs.',
  },
];

const IMPORT_FORMATS = [
  { icon: FileSpreadsheet, label: 'CSV & Excel', sub: 'spreadsheets' },
  { icon: FileText, label: 'PDF & images', sub: 'permit documents' },
  { icon: Table, label: 'Word documents', sub: '.docx files' },
];

export function HomePage() {
  usePageTitle();
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section — centered copy, no image */}
      <section className="relative bg-[#1A3D2B] pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
        {/* Grid line overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60M0 0h60M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="uppercase tracking-wider mb-6"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: '#4CAF70',
              letterSpacing: '0.15em',
            }}
          >
            JOB, PERMIT &amp; INSPECTION TRACKING FOR CONTRACTORS
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Know the Rules<br />Before You Break Them.
          </h1>

          <p
            className="text-white/80 mb-8 max-w-2xl mx-auto"
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
            }}
          >
            Sasquatch gives contractor admins one place to manage every job, permit, and inspection, with deadlines,
            reminders, and what needs attention today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#1A3D2B] hover:bg-gray-100 px-8"
                style={{ fontWeight: 600 }}
              >
                Book a 20-minute demo
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/10 hover:text-white px-8"
                style={{ fontWeight: 600 }}
              >
                See how it works
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <p className="text-white/60 text-sm">
              Built for Colorado's electrical, plumbing, roofing &amp; solar contractors
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-[#1A1F1C]"
                style={{
                  fontSize: 'clamp(32px, 4vw, 40px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Stop running permits and inspections from a spreadsheet.
              </h2>
            </div>

            <div className="space-y-6">
              {PROBLEMS.map((problem) => (
                <div key={problem.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${problem.iconBackground}`}
                    >
                      <problem.icon className={`w-6 h-6 ${problem.iconColor}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1F1C] mb-2">{problem.title}</h3>
                    <p className="text-[#5A6560] text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-[#1A3D2B] text-white p-8 rounded-xl">
            <p
              className="text-center text-lg"
              style={{
                fontWeight: 500,
              }}
            >
              <strong style={{ fontWeight: 700 }}>Sasquatch keeps it in one place</strong> — every job, permit, and
              inspection, plus what needs attention today.
            </p>
          </div>
        </div>
      </section>

      {/* Product Feature Showcase - Tabbed Section */}
      <section id="how-it-works" className="bg-white py-16 lg:py-24 scroll-mt-16 lg:scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-wider mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: '#4CAF70',
                letterSpacing: '0.1em',
              }}
            >
              HOW IT WORKS
            </div>
            <h2
              className="text-[#1A1F1C]"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              Your day, from one screen.
            </h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 h-auto">
              {WORKFLOW_TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className="text-xs md:text-sm py-3">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {WORKFLOW_TABS.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="max-w-2xl mx-auto space-y-4">
                  {tab.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1A1F1C]">{item}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Import Section */}
      <section className="bg-[#1A3D2B] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="mb-6"
                style={{
                  fontSize: 'clamp(32px, 4vw, 40px)',
                  fontWeight: 700,
                }}
              >
                Bring your spreadsheet with you.
              </h2>
              <p
                className="text-white/70 text-lg"
                style={{
                  lineHeight: 1.6,
                }}
              >
                Drop in a spreadsheet, a permit PDF, or a photo. Sasquatch pulls out the permit details so you can
                review them instead of retyping them.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {IMPORT_FORMATS.map((item) => (
                <Card key={item.label} className="bg-white text-[#1A1F1C] p-6">
                  <item.icon className="w-8 h-8 text-[#1A3D2B] mb-3" />
                  <h3 className="font-semibold mb-1 text-sm">{item.label}</h3>
                  <p className="text-xs text-[#5A6560]">{item.sub}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdiction Information */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="uppercase tracking-wider mb-4"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: '#4CAF70',
              letterSpacing: '0.1em',
            }}
          >
            ALSO BUILT IN
          </div>
          <h2
            className="text-[#1A1F1C] mb-4"
            style={{
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 700,
            }}
          >
            Local requirements and portal links.
          </h2>
          <p className="text-[#5A6560] max-w-2xl mx-auto mb-4">{COVERAGE_STATEMENT}</p>
          <p className="text-[#5A6560] text-sm max-w-2xl mx-auto mb-10">{VERIFY_NOTE}</p>

          <Link to="/jurisdictions">
            <Button size="lg" className="bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]" style={{ fontWeight: 600 }}>
              Check Your Jurisdiction
            </Button>
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-[#1A1F1C]"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: 700,
              }}
            >
              Simple monthly pricing
            </h2>
          </div>

          <PlanCards />

          <p className="text-center text-[#5A6560] text-sm mt-8">{EARLY_ACCESS_NOTE}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1A3D2B] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 700,
            }}
          >
            Ready to retire the spreadsheet?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Send a message and set up a 20-minute walkthrough of your jobs, permits, and inspections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#1A3D2B] hover:bg-gray-100"
                style={{ fontWeight: 600 }}
              >
                Book a 20-minute demo
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
