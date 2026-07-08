import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { PricingPage } from "./pages/PricingPage";
import { JurisdictionsPage } from "./pages/JurisdictionsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { GovernancePage } from "./pages/GovernancePage";
import { NewsletterPage } from "./pages/NewsletterPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
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
        path: "/governance",
        element: <GovernancePage />,
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