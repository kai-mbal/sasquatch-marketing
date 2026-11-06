import {
  Activity,
  Upload,
  Briefcase,
  Calendar,
  ClipboardCheck,
  AlertCircle,
  Users,
  FileStack,
  Bell,
  SlidersHorizontal,
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
  category?: 'attention' | 'permit' | 'inspection';
}

export const allFeatures: Feature[] = [
  {
    icon: AlertCircle,
    title: 'Attention Center',
    description: 'All blocked jobs and at-risk permits in one place. See the issue and the action it needs.',
    category: 'attention',
  },
  {
    icon: Bell,
    title: 'Daily Alert Email',
    description:
      'At most one email each morning, and only when something needs attention: tomorrow\'s inspections, permits expiring soon, or items past due.',
    category: 'attention',
  },
  {
    icon: Activity,
    title: 'Permit Health',
    description: 'See which permits are healthy, at risk, or blocked. Permits change color as expiration gets close.',
    category: 'permit',
  },
  {
    icon: Upload,
    title: 'Smart Import',
    description: 'Upload spreadsheets, PDFs, or images. Sasquatch pulls out the permit details for you to review.',
    category: 'permit',
  },
  {
    icon: FileStack,
    title: 'Bulk Operations',
    description: 'Update the status of several permits or archive them at once.',
    category: 'permit',
  },
  {
    icon: FileUp,
    title: 'Permit Upload',
    description:
      'Drop in a single permit PDF or photo and get a permit record to review. Sensitive identifiers are stripped before anything is processed.',
    category: 'permit',
  },
  {
    icon: Database,
    title: 'Import Pipeline & Scope Mapper',
    description: 'Bring a work order or spreadsheet in as-is. Columns get matched and values cleaned up, with no reformatting first.',
    category: 'permit',
  },
  {
    icon: FileText,
    title: 'Audit Trail',
    description: 'Changes are logged, so you can see who updated what and when.',
    category: 'permit',
  },
  {
    icon: UploadCloud,
    title: 'Document Uploads',
    description: 'Attach PDFs, images, and files to a permit so the paperwork stays with the record.',
    category: 'permit',
  },
  {
    icon: BadgeCheck,
    title: 'Compliance Credentials',
    description: 'Keep licenses, insurance, and certifications in one place with their expiration dates.',
    category: 'permit',
  },
  {
    icon: Calendar,
    title: 'Inspection Calendar',
    description: 'See upcoming inspections on a calendar and open any one for its details.',
    category: 'inspection',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspection Records',
    description:
      'Record every inspection on a permit, with the inspector, confirmation number, time or window, result, and corrections.',
    category: 'inspection',
  },
  {
    icon: Briefcase,
    title: 'Job Tracking',
    description: 'Track each job by stage and status, link the permits that belong to it, or create a job from a permit.',
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    description: 'Control who sees what. Give each team member a role: Admin, Manager, or Read-only.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Notification Controls',
    description: 'Each person chooses which alerts they get.',
  },
  {
    icon: MapPin,
    title: 'Map View',
    description: 'See your locations on a map to spot clusters and plan your workload by area.',
  },
  {
    icon: UserCog,
    title: 'User Management',
    description: 'Invite users, assign roles, and manage access from one place.',
  },
  {
    icon: Building2,
    title: 'Locations',
    description: 'Organize work by address or site for multi-site contractors.',
  },
];
