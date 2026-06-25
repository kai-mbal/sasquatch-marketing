import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Features', href: '/features' },
    { label: 'Jurisdictions', href: '/jurisdictions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Governance', href: '/governance' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.08)]' : 'border-b border-[#ECEEED]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/sasquatch-logo.jpeg"
              alt="Sasquatch Permit Intelligence"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg lg:text-xl">
                Sasquatch
              </span>
              <span className="text-xs text-[#5A6560] hidden sm:block">
                Permit Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[#1A1F1C] hover:text-[#1A3D2B] transition-colors"
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://app.sasquatchpermit.com">
              <Button
                variant="ghost"
                className="border border-[#1A3D2B] text-[#1A3D2B] hover:bg-[#1A3D2B] hover:text-white"
                style={{ fontWeight: 600 }}
              >
                Log In
              </Button>
            </a>
            <a href="https://app.sasquatchpermit.com">
              <Button
                className="bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
                style={{ fontWeight: 600 }}
              >
                Start Free Trial
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1F1C]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#ECEEED]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[#1A1F1C] hover:text-[#1A3D2B] py-2"
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-[#ECEEED]">
                <a href="https://app.sasquatchpermit.com">
                  <Button
                    variant="ghost"
                    className="w-full border border-[#1A3D2B] text-[#1A3D2B]"
                    style={{ fontWeight: 600 }}
                  >
                    Log In
                  </Button>
                </a>
                <a href="https://app.sasquatchpermit.com">
                  <Button
                    className="w-full bg-[#1A3D2B] text-white"
                    style={{ fontWeight: 600 }}
                  >
                    Start Free Trial
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}