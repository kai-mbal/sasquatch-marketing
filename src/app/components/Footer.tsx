import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A3D2B] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/sasquatch-logo.jpeg"
                alt="Sasquatch"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-bold text-lg">
                Sasquatch
              </span>
            </Link>
            <p className="text-white/70 text-sm">
              Built for Colorado contractors who want to know the rules before they break them.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-white/70 hover:text-white text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/70 hover:text-white text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/jurisdictions" className="text-white/70 hover:text-white text-sm transition-colors">
                  Jurisdictions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/governance" className="text-white/70 hover:text-white text-sm transition-colors">
                  AI Governance
                </Link>
              </li>
              <li>
                <Link to="/governance" className="text-white/70 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Sasquatch by{' '}
            <a
              href="https://sasquatchanalytics.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white underline transition-colors"
            >
              Sasquatch Analytics
            </a>
            . All rights reserved.
          </p>
          <p className="text-white/60 text-sm">Built for Colorado contractors</p>
        </div>
      </div>
    </footer>
  );
}