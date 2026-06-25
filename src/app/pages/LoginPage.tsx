import { useEffect } from 'react';
import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function LoginPage() {
  usePageTitle('Login');
  useEffect(() => {
    // Optional: Auto-redirect after a few seconds
    // const timer = setTimeout(() => {
    //   window.location.href = 'https://app.sasquatchrisk.com';
    // }, 3000);
    // return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    window.location.href = 'https://app.sasquatchpermit.com';
  };

  return (
    <div className="min-h-screen bg-[#F7F8F6] flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <Card className="max-w-md w-full p-8 text-center shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/sasquatch-logo.jpeg"
              alt="Sasquatch Permit Intelligence"
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
            Welcome Back
          </h1>

          <p
            className="text-[#5A6560] mb-8"
            style={{
              fontSize: '16px',
            }}
          >
            Click below to access your Sasquatch Permit Intelligence dashboard.
          </p>

          <Button
            onClick={handleLogin}
            className="w-full bg-[#1A3D2B] text-white hover:bg-[#2D5A3D] mb-4"
            style={{ fontWeight: 600 }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Go to App Login
          </Button>

          <div className="border-t border-[#ECEEED] pt-6 mt-6">
            <p className="text-sm text-[#5A6560] mb-3">Don't have an account yet?</p>
            <a href="https://app.sasquatchpermit.com">
              <Button
                variant="outline"
                className="w-full border-[#1A3D2B] text-[#1A3D2B] hover:bg-[#F7F8F6]"
                style={{ fontWeight: 600 }}
              >
                Start Free Trial
              </Button>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#ECEEED]">
            <p className="text-xs text-[#5A6560]">
              Need help?{' '}
              <a href="mailto:hello@sasquatchrisk.com" className="text-[#1A3D2B] hover:underline">
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
