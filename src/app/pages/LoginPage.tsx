import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function LoginPage() {
  usePageTitle('Login');

  return (
    <div className="min-h-screen bg-[#F7F8F6] flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <Card className="max-w-md w-full p-8 text-center shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/sasquatch-logo.jpeg"
              alt="Sasquatch"
              className="w-16 h-16 rounded-xl object-cover"
            />
          </div>

          <h1
            className="text-[#1A1F1C] mb-3"
            style={{
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            Sasquatch is in Early Access
          </h1>

          <p
            className="text-[#5A6560] mb-8"
            style={{
              fontSize: '16px',
            }}
          >
            Sasquatch isn't publicly self-serve yet. Existing early-access users should use the link they were
            given directly. New here? Request access and we'll set you up personally.
          </p>

          <Link to="/coming-soon">
            <Button
              className="w-full bg-[#1A3D2B] text-white hover:bg-[#2D5A3D] mb-4"
              style={{ fontWeight: 600 }}
            >
              Request Early Access
            </Button>
          </Link>

          <div className="mt-8 pt-6 border-t border-[#ECEEED]">
            <p className="text-xs text-[#5A6560]">
              Need help?{' '}
              <a href="mailto:contact@sasquatchpermit.com" className="text-[#1A3D2B] hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
