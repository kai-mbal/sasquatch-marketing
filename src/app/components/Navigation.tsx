import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const LOGIN_URL = '/login';
const REQUEST_ACCESS_URL = '/coming-soon';

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
              alt="Sasquatch"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover"
            />
            <span className="font-bold text-lg lg:text-xl">
              Sasquatch
            </span>
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
            <Link to={LOGIN_URL}>
              <Button
                variant="ghost"
                className="border border-[#1A3D2B] text-[#1A3D2B] hover:bg-[#1A3D2B] hover:text-white"
                style={{ fontWeight: 600 }}
              >
                Log In
              </Button>
            </Link>
            <Link to={REQUEST_ACCESS_URL}>
              <Button
                className="bg-[#1A3D2B] text-white hover:bg-[#2D5A3D]"
                style={{ fontWeight: 600 }}
              >
                Request Early Access
              </Button>
            </Link>
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
                <Link to={LOGIN_URL}>
                  <Button
                    variant="ghost"
                    className="w-full border border-[#1A3D2B] text-[#1A3D2B]"
                    style={{ fontWeight: 600 }}
                  >
                    Log In
                  </Button>
                </Link>
                <Link to={REQUEST_ACCESS_URL}>
                  <Button
                    className="w-full bg-[#1A3D2B] text-white"
                    style={{ fontWeight: 600 }}
                  >
                    Request Early Access
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}