import {
  Activity,
  Upload,
  Mail,
  Briefcase,
  Calendar,
  AlertCircle,
  Users,
  FileStack,
  Bell,
  FileText,
  UploadCloud,
  MapPin,
  FileUp,
  Database,
  BadgeCheck,
  UserCog,
  Building2,
  LucideIcon,
} from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  category?: 'permit' | 'inspection';
}

export const allFeatures: Feature[] = [
  {
    icon: AlertCircle,
    title: 'Attention Center',
    description:
      'All blocked jobs and at-risk permits in one place. See the issue, the estimated impact, and the recommended action.',
  },
  {
    icon: Activity,
    title: 'Permit Health Engine',
    description:
      "Know which permits are healthy, at risk, or blocked before any of them turn into a delay. Every permit is scored automatically.",
    category: 'permit',
  },
  {
    icon: Upload,
    title: 'Smart Import (AI)',
    description:
      'Upload PDFs, images, or spreadsheets. AI extracts permit data automatically and adds it to your dashboard.',
    category: 'permit',
  },
  {
    icon: Mail,
    title: 'Email Ingestion',
    description:
      "Forward permit confirmations directly to Sasquatch. It parses the email and creates the permit record for you.",
    category: 'permit',
  },
  {
    icon: FileStack,
    title: 'Bulk Operations',
    description:
      'Update, assign, or remind across multiple permits at once. Stop doing the same action 10 times in a row.',
    category: 'permit',
  },
  {
    icon: FileUp,
    title: 'Permit Upload (AI)',
    description:
      'Drop in a single permit PDF or photo and get a finished permit record back. Sensitive identifiers are stripped before anything is processed.',
    category: 'permit',
  },
  {
    icon: Database,
    title: 'Import Pipeline & Scope Mapper',
    description:
      'Bring a work order and spreadsheet in as-is. Columns get matched, values cleaned up, and materials tied to the right job — no reformatting first.',
    category: 'permit',
  },
  {
    icon: FileText,
    title: 'Audit Trail',
    description:
      'Every change is logged. See who updated what and when. Perfect for accountability and compliance tracking.',
    category: 'permit',
  },
  {
    icon: UploadCloud,
    title: 'Document Uploads',
    description:
      'Attach PDFs, images, and files to any permit or job. Keep all your documents in one searchable place.',
    category: 'permit',
  },
  {
    icon: BadgeCheck,
    title: 'Compliance Credentials',
    description:
      'Track licenses, insurance, and certifications with expiration dates. Stay ahead of renewals and audits.',
    category: 'permit',
  },
  {
    icon: Calendar,
    title: 'Inspection Calendar',
    description:
      'Month and week views with all scheduled inspections. Never miss a cutoff time or forget a confirmation number again.',
    category: 'inspection',
  },
  {
    icon: Briefcase,
    title: 'Jobs from Permits',
    description:
      'Jobs are auto-generated from your permits. Track crew and progress — all in one place.',
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    description:
      'Control who sees what. Assign each team member a role — Admin, Manager, or Read-only — to keep financial and client details limited to the people who need them.',
  },
  {
    icon: Bell,
    title: 'Notification Controls',
    description:
      'Choose exactly what you get notified about, by email or in the app. Turn off the noise, keep the signal.',
  },
  {
    icon: MapPin,
    title: 'Map View',
    description:
      'See all your permits and jobs on a map. Perfect for planning routes, spotting clusters, and visualizing workload by area.',
  },
  {
    icon: UserCog,
    title: 'User Management (Admin)',
    description:
      'Invite users, assign roles (Admin, Manager, Read-only), and manage access from one place.',
  },
  {
    icon: Building2,
    title: 'Locations',
    description:
      'Organize permits and jobs by location. View and filter by address or site for multi-site contractors.',
  },
];
