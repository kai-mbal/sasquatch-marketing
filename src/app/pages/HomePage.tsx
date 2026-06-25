import { useState, useRef } from 'react';
import { Link } from 'react-router';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  CheckCircle2,
  AlertCircle,
  XCircle,
  Calendar,
  FileText,
  Mail,
  Table,
  FileSpreadsheet,
  Clock,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { StatusChip } from '../components/StatusChip';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function HomePage() {
  usePageTitle();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCountiesScrolling, setIsCountiesScrolling] = useState(false);
  const countiesScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCountiesScroll = () => {
    setIsCountiesScrolling(true);
    if (countiesScrollTimer.current) clearTimeout(countiesScrollTimer.current);
    countiesScrollTimer.current = setTimeout(() => setIsCountiesScrolling(false), 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section — centered copy, no image */}
      <section className="relative bg-[#1A3D2B] pt-28 lg:pt-36 pb-32 lg:pb-44 overflow-hidden">
        {/* Subtle circle pattern overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60M0 0h60M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
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
            PERMIT INTELLIGENCE FOR CONTRACTORS
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Stop Managing Permits.<br />Start Running Jobs.
          </h1>

          <p
            className="text-white/80 mb-8 max-w-2xl mx-auto"
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
            }}
          >
            One dashboard to track permits, schedule inspections, manage jobs, and catch cost overruns — across
            every Colorado jurisdiction. No more portal-hopping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://app.sasquatchpermit.com">
              <Button
                size="lg"
                className="bg-white text-[#1A3D2B] hover:bg-gray-100 px-8"
                style={{ fontWeight: 600 }}
              >
                Start Free Trial
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/10 hover:text-white px-8"
                style={{ fontWeight: 600 }}
              >
                See a Live Demo
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#4CAF70] border-2 border-[#1A3D2B]" />
              <div className="w-8 h-8 rounded-full bg-[#3D7A50] border-2 border-[#1A3D2B]" />
              <div className="w-8 h-8 rounded-full bg-[#2D5A3D] border-2 border-[#1A3D2B]" />
            </div>
            <p className="text-white/60 text-sm">
              Trusted by electrical, plumbing, roofing & solar contractors
            </p>
          </div>
        </div>
      </section>

      {/* Video Showcase — overlaps hero bottom edge, extra wide */}
      <section className="relative -mt-20 lg:-mt-28 pb-12">
        <div className="max-w-[1600px] mx-auto px-3 lg:px-6">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-[#ECEEED]">
            <video
              src="/exhibition.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full block"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Trust Bar / Logo Bar */}
      <section className="bg-white py-8 border-b border-[#ECEEED]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-[#5A6560] mb-4"
            style={{
              fontSize: '13px',
            }}
          >
            Built for Colorado's trade contractors
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <StatusChip status="live" label="Denver" />
            <StatusChip status="live" label="Arapahoe" />
            <StatusChip status="live" label="Jefferson" />
            <StatusChip status="live" label="Douglas" />
            <StatusChip status="live" label="El Paso" />
            <StatusChip status="live" label="Boulder" />
            <StatusChip status="live" label="Larimer" />
            <StatusChip status="live" label="Adams" />
            <StatusChip status="live" label="Weld" />
            <StatusChip status="live" label="Pueblo" />
            <StatusChip status="live" label="Mesa" />
            <StatusChip status="live" label="Garfield" />
            <StatusChip status="live" label="Eagle" />
            <StatusChip status="live" label="Summit" />
            <StatusChip status="live" label="Routt" />
            <StatusChip status="live" label="Broomfield" />
            <StatusChip status="live" label="Clear Creek" />
            <StatusChip status="live" label="Gilpin" />
            <StatusChip status="live" label="Park" />
            <StatusChip status="live" label="Teller" />
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
                Your team is losing hours every week to permit chaos.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#FCE8E6] flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-[#CC3B2F]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1F1C] mb-2">
                    Logging into 5 different county portals to check one permit status.
                  </h3>
                  <p className="text-[#5A6560] text-sm">
                    Every jurisdiction has its own system. You waste hours every week just tracking down basic
                    information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#FBF0E0] flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-[#C8821A]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1F1C] mb-2">
                    Inspections missed because reminders lived in someone's head.
                  </h3>
                  <p className="text-[#5A6560] text-sm">
                    Your crew shows up to the wrong address. The inspector never got scheduled. Every mistake costs days
                    and money.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#FCE8E6] flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-[#CC3B2F]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1F1C] mb-2">
                    Cost overruns discovered weeks after the damage is done.
                  </h3>
                  <p className="text-[#5A6560] text-sm">
                    You find out materials went over budget when it's too late to fix it. Profit margins evaporate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#1A3D2B] text-white p-8 rounded-xl">
            <p
              className="text-center text-lg"
              style={{
                fontWeight: 500,
              }}
            >
              <strong style={{ fontWeight: 700 }}>Sasquatch centralizes everything.</strong> One login. Every permit.
              Every inspection. Every job.
            </p>
          </div>
        </div>
      </section>

      {/* Product Feature Showcase - Tabbed Section */}
      <section className="bg-white py-16 lg:py-24">
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
              Everything you need to stay ahead of every permit.
            </h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 h-auto">
              <TabsTrigger value="dashboard" className="text-xs md:text-sm py-3">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="permits" className="text-xs md:text-sm py-3">
                Permits
              </TabsTrigger>
              <TabsTrigger value="jobs" className="text-xs md:text-sm py-3">
                Jobs
              </TabsTrigger>
              <TabsTrigger value="inspections" className="text-xs md:text-sm py-3">
                Inspections
              </TabsTrigger>
              <TabsTrigger value="cost" className="text-xs md:text-sm py-3">
                Cost Intelligence
              </TabsTrigger>
              <TabsTrigger value="attention" className="text-xs md:text-sm py-3">
                Attention Center
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {[
                    'See all active permits by health status at a glance',
                    'Daily action list surfaces what needs your attention today',
                    'Upcoming inspections with dates and addresses',
                    'Cost intelligence snapshot — leakage alerts and critical issues',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1A1F1C]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F7F8F6] p-8 rounded-xl">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-semibold mb-4">Dashboard Preview</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b">
                        <span className="text-sm text-[#5A6560]">Health Status</span>
                        <div className="flex gap-2">
                          <StatusChip status="issued" />
                          <StatusChip status="in-review" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-[#5A6560]" />
                          <span>Next inspection: Tomorrow 2 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="w-4 h-4 text-[#5A6560]" />
                          <span>12 active permits tracked</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Permits Tab */}
            <TabsContent value="permits">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {[
                    'Full permit lifecycle from application to issuance',
                    'Automatic health scoring: Healthy / Warning / Critical',
                    'Bulk actions — update, assign, or remind across multiple permits',
                    'Import via PDF, CSV, Excel, or forward an email',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1A1F1C]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F7F8F6] p-8 rounded-xl">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-semibold mb-4">Permits View</h3>
                    <div className="space-y-3">
                      {['2024-EL-1234', '2024-PL-5678', '2024-SO-9012'].map((permit, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-[#F7F8F6] rounded">
                          <span className="font-mono text-sm">{permit}</span>
                          <StatusChip status={i === 0 ? 'issued' : i === 1 ? 'in-review' : 'pending'} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Jobs Tab */}
            <TabsContent value="jobs">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {[
                    'Jobs auto-generated from your permit data',
                    'Track crew size, budget vs. actual, and progress %',
                    'Visual status: In Progress / Planning / On Hold / Inspection Pending',
                    'Time tracking built directly into each job',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1A1F1C]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F7F8F6] p-8 rounded-xl">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-semibold mb-4">Job Tracking</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-[#F7F8F6] rounded">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-semibold">Residential Solar Install</span>
                          <span className="text-xs text-[#5A6560]">75% Complete</span>
                        </div>
                        <div className="w-full bg-[#ECEEED] rounded-full h-2">
                          <div className="bg-[#4CAF70] h-2 rounded-full" style={{ width: '75%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Inspections Tab */}
            <TabsContent value="inspections">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {[
                    'Calendar view — month and week toggle',
                    'Click any date to see all scheduled inspections',
                    'Jurisdiction-specific cutoff rules and contact info built in',
                    'Confirmation numbers and preferred windows tracked',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1A1F1C]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F7F8F6] p-8 rounded-xl">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-semibold mb-4">Inspection Calendar</h3>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs mb-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="font-semibold text-[#5A6560]">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 21 }, (_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded flex items-center justify-center text-xs ${
                            i === 10 || i === 15
                              ? 'bg-[#4CAF70] text-white font-semibold'
                              : 'bg-[#F7F8F6] text-[#1A1F1C]'
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Cost Intelligence Tab */}
            <TabsContent value="cost">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {[
                    'Real-time cost leakage alerts',
                    'Materials and work order uploads (drag and drop)',
                    'Per-job budget vs. actual breakdowns',
                    'Catch overruns before they become write-offs',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1A1F1C]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F7F8F6] p-8 rounded-xl">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-semibold mb-4">Cost Overview</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-[#E6F4EC] rounded">
                        <span className="text-sm">Budget</span>
                        <span className="font-semibold">$12,500</span>
                      </div>
                      <div className="flex justify-between p-3 bg-[#FBF0E0] rounded">
                        <span className="text-sm">Actual</span>
                        <span className="font-semibold">$11,800</span>
                      </div>
                      <div className="flex justify-between p-3 bg-[#E6F4EC] rounded">
                        <span className="text-sm text-[#1E6B40]">Under Budget</span>
                        <span className="font-semibold text-[#1E6B40]">$700</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Attention Center Tab */}
            <TabsContent value="attention">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {[
                    'Blocked jobs surfaced with specific issue + recommended action',
                    'At-risk permits flagged before they expire or miss windows',
                    'Estimated impact shown for every issue: delay days, dollar risk',
                    'One-click "Resolve Issue" workflow',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1A1F1C]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F7F8F6] p-8 rounded-xl">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-semibold mb-4">Attention Items</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-[#FCE8E6] rounded border border-[#CC3B2F]/20">
                        <div className="flex items-start gap-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-[#CC3B2F] mt-0.5" />
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-[#8B1F18]">Inspection window closing</div>
                            <div className="text-xs text-[#5A6560]">Schedule before Friday 3:30 PM</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-[#FBF0E0] rounded border border-[#C8821A]/20">
                        <div className="flex items-start gap-2 mb-2">
                          <Clock className="w-4 h-4 text-[#C8821A] mt-0.5" />
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-[#8B5B10]">Materials order delayed</div>
                            <div className="text-xs text-[#5A6560]">Est. 2-day job delay</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI-Powered Import Section */}
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
                Import permits from anything.
              </h2>
              <p
                className="text-white/70 mb-8 text-lg"
                style={{
                  lineHeight: 1.6,
                }}
              >
                Drag in a PDF from the county portal, forward an email confirmation, or drop in a spreadsheet.
                Sasquatch's AI parser reads it, normalizes the fields, and adds it to your dashboard — automatically.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, label: 'PDF & Image files', sub: 'via AI extraction' },
                { icon: FileSpreadsheet, label: 'CSV & Excel', sub: 'spreadsheets' },
                { icon: Mail, label: 'Email forwarding', sub: 'auto-import' },
                { icon: Table, label: 'Word documents', sub: 'any format' },
              ].map((item, i) => (
                <Card key={i} className="bg-white text-[#1A1F1C] p-6 hover:scale-105 transition-transform">
                  <item.icon className="w-8 h-8 text-[#1A3D2B] mb-3" />
                  <h3 className="font-semibold mb-1 text-sm">{item.label}</h3>
                  <p className="text-xs text-[#5A6560]">{item.sub}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdiction Intelligence */}
      <section className="bg-[#F7F8F6] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              We know how every Colorado county works.
            </h2>
            <p className="text-[#5A6560] max-w-3xl mx-auto">
              Portal URLs, inspection cutoff times, contact numbers, and processing windows — built in for every
              supported jurisdiction.
            </p>
          </div>

          <div
            onScroll={handleCountiesScroll}
            className={`counties-scroll flex gap-4 pb-3 mb-8 -mx-6 lg:-mx-8 px-6 lg:px-8${isCountiesScrolling ? ' is-scrolling' : ''}`}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: isCountiesScrolling ? '#1A3D2B #ECEEED' : '#9CA3AF #ECEEED',
            }}
          >
            {[
              { name: 'Denver', status: 'live' as const, detail: 'Inspections by 3:30 PM' },
              { name: 'Arapahoe', status: 'live' as const, detail: '3-5 day processing' },
              { name: 'Jefferson', status: 'live' as const, detail: 'Online portal sync' },
              { name: 'Douglas', status: 'live' as const, detail: '48hr processing' },
              { name: 'El Paso', status: 'live' as const, detail: 'Same-day scheduling' },
              { name: 'Boulder', status: 'live' as const, detail: '24hr advance notice' },
              { name: 'Larimer', status: 'live' as const, detail: '24hr advance notice' },
              { name: 'Adams', status: 'live' as const, detail: 'Online portal sync' },
              { name: 'Weld', status: 'live' as const, detail: '48hr processing' },
              { name: 'Pueblo', status: 'live' as const, detail: 'Same-day scheduling' },
              { name: 'Mesa', status: 'live' as const, detail: 'Same-day scheduling' },
              { name: 'Garfield', status: 'live' as const, detail: '24hr advance notice' },
              { name: 'Eagle', status: 'live' as const, detail: 'Expedited available' },
              { name: 'Summit', status: 'live' as const, detail: '48hr advance notice' },
              { name: 'Routt', status: 'live' as const, detail: 'Online portal sync' },
              { name: 'Broomfield', status: 'live' as const, detail: '48hr processing' },
              { name: 'Clear Creek', status: 'live' as const, detail: '5-7 day processing' },
              { name: 'Gilpin', status: 'live' as const, detail: '5-7 day processing' },
              { name: 'Park', status: 'live' as const, detail: '3-5 day processing' },
              { name: 'Teller', status: 'live' as const, detail: '24hr advance notice' },
            ].map((county, i) => (
              <Card key={i} className="p-4 text-center flex-shrink-0 w-40">
                <h3 className="font-semibold mb-2">{county.name}</h3>
                <div className="flex justify-center mb-2">
                  <StatusChip status={county.status} />
                </div>
                <p className="text-xs text-[#5A6560]">{county.detail}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/jurisdictions" className="text-[#1A3D2B] hover:text-[#2D5A3D] font-semibold inline-flex items-center gap-2">
              Don't see your county? Request it →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-[#EEF4F0] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#1A1F1C] mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: 700,
              }}
            >
              Simple pricing that scales with your business.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                name: 'Starter',
                price: '$49',
                period: '/mo',
                features: [
                  '1 user, 50 active permits',
                  '3 jurisdictions',
                  'Email alerts',
                  'Basic dashboard + CSV import',
                ],
                highlighted: false,
              },
              {
                name: 'Pro',
                price: '$99',
                period: '/mo',
                features: [
                  'Up to 5 users',
                  'Unlimited permits, all jurisdictions',
                  'AI import + cost leakage alerts',
                  'Time tracking, job management',
                ],
                highlighted: true,
                badge: 'Most Popular',
              },
              {
                name: 'Business',
                price: '$299',
                period: '/mo',
                features: [
                  'Unlimited users',
                  'Everything in Pro',
                  'Role-based access control',
                  'Revenue and invoicing',
                ],
                highlighted: false,
              },
              {
                name: 'Enterprise',
                price: 'Contact Us',
                period: '',
                features: [
                  'Custom SLA',
                  'Dedicated onboarding',
                  'Volume seat pricing',
                  'County/API integration support',
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`p-6 relative ${plan.highlighted ? 'border-2 border-[#1A3D2B] shadow-xl' : 'shadow-lg'}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#4CAF70] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-xl mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`font-bold ${plan.period ? 'text-4xl' : 'text-2xl'}`}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-[#5A6560]">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.price === 'Contact Us' ? (
                  <Link to="/contact">
                    <Button
                      className="w-full bg-white text-[#1A3D2B] border border-[#1A3D2B] hover:bg-[#F7F8F6]"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                ) : (
                  <a href="https://app.sasquatchpermit.com">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? 'bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]'
                          : 'bg-white text-[#1A3D2B] border border-[#1A3D2B] hover:bg-[#F7F8F6]'
                      }`}
                    >
                      Get Started
                    </Button>
                  </a>
                )}
              </Card>
            ))}
          </div>

          <p className="text-center text-[#5A6560] text-sm">
            All plans include a free trial. No credit card required.
          </p>
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
            Ready to take back your time?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Join contractors across Colorado who've eliminated permit chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.sasquatchpermit.com">
              <Button
                size="lg"
                className="bg-white text-[#1A3D2B] hover:bg-gray-100"
                style={{ fontWeight: 600 }}
              >
                Start Free Trial
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/10 hover:text-white"
                style={{ fontWeight: 600 }}
              >
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}