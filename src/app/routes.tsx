import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./pages/HomePage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { PricingPage } from "./pages/PricingPage";
import { JurisdictionsPage } from "./pages/JurisdictionsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { SecurityPage } from "./pages/SecurityPage";
import { NewsletterPage } from "./pages/NewsletterPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { NewsletterComingSoonPage } from "./pages/NewsletterComingSoonPage";
import { ScrollToTopLayout } from "./components/ScrollToTop";

export const router = createBrowserRouter([
  {
    element: <ScrollToTopLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/features",
        element: <FeaturesPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/jurisdictions",
        element: <JurisdictionsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/security",
        element: <SecurityPage />,
      },
      {
        path: "/governance",
        element: <Navigate to="/security" replace />,
      },
      {
        path: "/newsletter",
        element: <NewsletterPage />,
      },
      {
        path: "/terms",
        element: <TermsOfServicePage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoonPage />,
      },
      {
        path: "/newsletter-coming-soon",
        element: <NewsletterComingSoonPage />,
      },
    ],
  },
]);