import {
  Activity,
  Upload,
  Mail,
  Briefcase,
  Calendar,
  DollarSign,
  AlertCircle,
  Users,
  FileStack,
  MapPin,
  Clock,
  Bell,
  FileText,
  UploadCloud,
  TrendingUp,
  FileUp,
  Database,
  Bot,
  Receipt,
  CreditCard,
  BadgeCheck,
  UserCog,
  Building2,
  MailX,
  LucideIcon,
} from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  longDescription: string[];
  howItWorks?: string[];
  whyItMatters?: string[];
}

export const allFeatures: Feature[] = [
  {
    icon: Activity,
    title: 'Permit Health Engine',
    slug: 'permit-health-engine',
    description:
      'Automatic health scoring for every permit. See at a glance what\'s healthy, at risk, or blocked before it becomes a problem.',
    longDescription: [
      'Every permit in Sasquatch gets an automatic health score: Healthy, Warning, or Critical. The system monitors deadlines, inspection windows, pending documents, and approval stages to keep you informed before issues escalate.',
      'See color-coded status chips across your dashboard, permit list, and reports. No more guessing which permits need attention — the health engine tells you.',
    ],
    howItWorks: [
      'Sasquatch analyzes permit timelines, jurisdiction-specific deadlines, and pending requirements.',
      'Health scores update in real-time as conditions change (e.g., inspection window approaching, document uploaded).',
      'Visual indicators across the platform ensure you always know which permits are on track and which need action.',
    ],
    whyItMatters: [
      'Catch at-risk permits before they expire or miss critical windows.',
      'Prioritize your team\'s attention on the permits that matter most.',
      'Reduce delays and keep jobs moving forward.',
    ],
  },
  {
    icon: Upload,
    title: 'Smart Import (AI)',
    slug: 'smart-import-ai',
    description:
      'Upload PDFs, images, or spreadsheets. Our AI extracts permit data automatically and adds it to your dashboard.',
    longDescription: [
      'Drag and drop any permit document — PDF, image, CSV, or Excel — and Sasquatch\'s AI parser extracts the key fields automatically. Permit number, address, jurisdiction, fees, dates, and more are recognized and populated without manual entry.',
      'The AI normalizes data across different county formats, so everything appears consistently in your dashboard regardless of where the permit originated.',
    ],
    howItWorks: [
      'Upload a file via drag-and-drop or file browser.',
      'AI scans the document, identifies fields (permit number, address, dates, fees), and extracts the data.',
      'You review the extracted fields and confirm or edit as needed.',
      'The permit is created in your dashboard with all details populated.',
    ],
    whyItMatters: [
      'Save hours of manual data entry every week.',
      'Reduce human error from copying permit numbers and dates.',
      'Get permits into the system faster so you can act on them sooner.',
    ],
  },
  {
    icon: Mail,
    title: 'Email Ingestion',
    slug: 'email-ingestion',
    description:
      'Forward permit confirmations directly to Sasquatch. We\'ll parse the email and create the permit record for you.',
    longDescription: [
      'When you receive a permit confirmation email from a county or jurisdiction, simply forward it to your Sasquatch inbox. The system parses the email content, extracts permit details, and creates a permit record automatically.',
      'Email ingestion works with most Colorado jurisdiction formats. The AI identifies key fields even when email layouts vary.',
    ],
    howItWorks: [
      'Forward a permit confirmation email to your unique Sasquatch email address.',
      'Sasquatch parses the email body and any PDF attachments.',
      'A new permit record is created with extracted data (permit number, address, dates).',
      'You receive a notification that the permit was added and can review it in your dashboard.',
    ],
    whyItMatters: [
      'No more copying and pasting from emails into spreadsheets or portals.',
      'Permits are captured instantly when you receive them.',
      'Nothing falls through the cracks — every email becomes a trackable permit.',
    ],
  },
  {
    icon: Briefcase,
    title: 'Jobs from Permits',
    slug: 'jobs-from-permits',
    description:
      'Jobs are auto-generated from your permits. Track crew, budget, progress, and time — all in one place.',
    longDescription: [
      'Every permit can generate a linked job. Jobs include crew assignments, budget vs. actual tracking, progress percentage, time tracking, and status (In Progress, Planning, On Hold, Inspection Pending).',
      'Jobs and permits stay connected. When the permit changes status, you see it reflected in the job. When a job reaches an inspection milestone, you can schedule directly from the job view.',
    ],
    howItWorks: [
      'When a permit is issued or ready to work, create a job from the permit with one click.',
      'Assign crew members, set budget, and define the scope.',
      'Track progress, log hours, and upload materials receipts directly to the job.',
      'Monitor budget vs. actual spend in real-time to catch overruns early.',
    ],
    whyItMatters: [
      'Keep permit compliance and job execution in one platform.',
      'See the full picture: permit status, crew assignments, budget, and timeline.',
      'Eliminate the need for separate job tracking tools or spreadsheets.',
    ],
  },
  {
    icon: Calendar,
    title: 'Inspection Calendar',
    slug: 'inspection-calendar',
    description:
      'Month and week views with all scheduled inspections. Never miss a cutoff time or forget a confirmation number again.',
    longDescription: [
      'The Inspection Calendar shows all scheduled inspections in month or week view. Click any date to see inspections for that day, including address, permit number, confirmation number, and preferred time window.',
      'Jurisdiction-specific cutoff times and contact info are built in, so you know exactly when to schedule and who to call.',
    ],
    howItWorks: [
      'View inspections by month or week.',
      'Click a date to see all inspections scheduled for that day.',
      'See cutoff times, contact numbers, and confirmation numbers for each jurisdiction.',
      'Set reminders and receive notifications before inspections.',
    ],
    whyItMatters: [
      'Never miss an inspection cutoff window.',
      'Reduce scheduling errors and missed appointments.',
      'Keep your crew informed with accurate dates and addresses.',
    ],
  },
  {
    icon: DollarSign,
    title: 'Cost Leakage Alerts',
    slug: 'cost-leakage-alerts',
    description:
      'Real-time alerts when jobs go over budget. Upload materials receipts and work orders to track actual vs. budget.',
    longDescription: [
      'Sasquatch monitors your job budgets in real-time. Upload materials receipts, work orders, and invoices. The system compares actual spend to budgeted amounts and alerts you when a job is trending over budget.',
      'Catch cost overruns before they become write-offs. See which line items are driving the variance and take action.',
    ],
    howItWorks: [
      'Set a budget for each job (materials, labor, subcontractors).',
      'Upload receipts and invoices as work progresses.',
      'Sasquatch calculates actual spend and compares to budget.',
      'When spend exceeds budget or approaches a threshold, you receive an alert.',
    ],
    whyItMatters: [
      'Protect your profit margins by catching overruns early.',
      'Make data-driven decisions about scope changes and change orders.',
      'Stop discovering cost issues weeks after the damage is done.',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Attention Center',
    slug: 'attention-center',
    description:
      'All blocked jobs and at-risk permits in one place. See the issue, the estimated impact, and the recommended action.',
    longDescription: [
      'The Attention Center surfaces all permits and jobs that need your attention right now. Blocked jobs, at-risk permits, expiring documents, and cost overruns are flagged with a clear issue description, estimated impact (delay days, dollar risk), and recommended action.',
      'One-click workflows let you resolve issues quickly: schedule an inspection, upload a missing document, or contact a jurisdiction.',
    ],
    howItWorks: [
      'Sasquatch monitors all permits and jobs for issues (missed deadlines, missing documents, budget overruns).',
      'Issues are surfaced in the Attention Center with a description, impact, and recommended action.',
      'Click "Resolve Issue" to take action directly from the Attention Center.',
    ],
    whyItMatters: [
      'Stop playing defense — see every issue in one place.',
      'Prioritize your team\'s efforts on the highest-impact problems.',
      'Resolve issues faster with built-in workflows and recommendations.',
    ],
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    slug: 'role-based-access',
    description:
      'Control who sees what. Assign roles to team members: Admin, Manager, Field Crew, or custom permissions.',
    longDescription: [
      'Sasquatch supports role-based access control. Assign users to roles (Admin, Manager, Field Crew) and control what they can view, edit, or delete.',
      'Admins have full access. Managers can view and edit permits and jobs. Field Crew can view assigned jobs and log time. You can also create custom roles with specific permissions.',
    ],
    howItWorks: [
      'Invite users to your organization.',
      'Assign a role to each user (Admin, Manager, Field Crew, or custom).',
      'Users see only the data and features their role permits.',
      'Change roles or permissions anytime from the User Management page.',
    ],
    whyItMatters: [
      'Keep sensitive financial data visible only to those who need it.',
      'Empower field crews with the job details they need without overwhelming them.',
      'Maintain accountability and audit trails for every action.',
    ],
  },
  {
    icon: FileStack,
    title: 'Bulk Operations',
    slug: 'bulk-operations',
    description:
      'Update, assign, or remind across multiple permits at once. Stop doing the same action 10 times in a row.',
    longDescription: [
      'Select multiple permits from your list and perform bulk actions: update status, assign to a team member, send reminders, or export to CSV.',
      'Bulk operations save you from repeating the same action dozens of times. Update 20 permits at once instead of clicking through 20 individual records.',
    ],
    howItWorks: [
      'Select multiple permits from the permit list (checkboxes).',
      'Choose a bulk action: Update Status, Assign To, Send Reminder, or Export.',
      'Confirm the action and Sasquatch applies it to all selected permits.',
    ],
    whyItMatters: [
      'Save hours every week by automating repetitive tasks.',
      'Keep data consistent across multiple permits.',
      'Reduce human error from manual, repetitive updates.',
    ],
  },
  {
    icon: MapPin,
    title: 'Jurisdiction Intelligence',
    slug: 'jurisdiction-intelligence',
    description:
      'Built-in knowledge of every supported county: portal URLs, cutoff times, contact info, and processing windows.',
    longDescription: [
      'Sasquatch includes built-in data for every supported Colorado jurisdiction: permit portal URLs, inspection cutoff times, contact phone numbers, email addresses, and typical processing windows.',
      'When you add a permit for a jurisdiction, Sasquatch automatically populates the jurisdiction-specific rules and contact info. No more hunting for phone numbers or cutoff times.',
    ],
    howItWorks: [
      'Select the jurisdiction when creating a permit.',
      'Sasquatch populates portal URLs, cutoff times, contact info, and processing windows.',
      'You see the jurisdiction-specific rules directly in the permit and inspection views.',
    ],
    whyItMatters: [
      'Stop wasting time looking up jurisdiction-specific rules.',
      'Reduce errors from using outdated contact info or incorrect cutoff times.',
      'Speed up permit submissions and inspection scheduling.',
    ],
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    slug: 'time-tracking',
    description:
      'Track hours directly on each job. See who worked what, when, and for how long — no separate timesheet app.',
    longDescription: [
      'Log hours directly on each job. Team members can clock in and out, or manually log hours with a description of work performed.',
      'Time tracking is linked to jobs and permits, so you can see total hours per job, per crew member, and per date range. Use this data for billing, payroll, or project analysis.',
    ],
    howItWorks: [
      'From the job view, click "Log Time."',
      'Enter the crew member, date, hours, and description.',
      'Time entries are saved to the job and visible in reports.',
      'Export time logs to CSV for payroll or billing integration.',
    ],
    whyItMatters: [
      'Eliminate separate timesheet apps or paper logs.',
      'See actual labor hours vs. budgeted hours for each job.',
      'Improve billing accuracy and payroll processing.',
    ],
  },
  {
    icon: Bell,
    title: 'Notification Controls',
    slug: 'notification-controls',
    description:
      'Choose what you want to be notified about: email, SMS, or in-app. Turn off the noise, keep the signal.',
    longDescription: [
      'Sasquatch lets you customize your notifications. Choose to receive alerts via email, SMS, in-app, or all three. Control which events trigger notifications: permit status changes, inspection reminders, cost overruns, attention items, and more.',
      'Turn off the noise and keep the signal. Get only the notifications that matter to you.',
    ],
    howItWorks: [
      'Go to Notification Settings.',
      'Choose notification channels: email, SMS, in-app.',
      'Select which events trigger notifications (e.g., inspection reminders, cost alerts).',
      'Save your preferences and Sasquatch respects them across all notifications.',
    ],
    whyItMatters: [
      'Reduce notification fatigue and focus on what matters.',
      'Customize alerts for different team members (e.g., managers get cost alerts, field crew gets inspection reminders).',
      'Stay informed without being overwhelmed.',
    ],
  },
  {
    icon: FileText,
    title: 'Audit Trail',
    slug: 'audit-trail',
    description:
      'Every change is logged. See who updated what and when. Perfect for accountability and compliance tracking.',
    longDescription: [
      'Sasquatch logs every change: who created a permit, who updated the status, who uploaded a document, who assigned a job. The audit trail shows the user, timestamp, and what changed.',
      'Perfect for accountability, compliance audits, and resolving disputes. You can always see the history of a permit or job.',
    ],
    howItWorks: [
      'View the audit trail from any permit or job detail page.',
      'See a chronological list of changes: who, when, and what changed.',
      'Filter by user, date range, or action type.',
      'Export the audit trail to CSV for compliance reporting.',
    ],
    whyItMatters: [
      'Maintain accountability across your team.',
      'Resolve disputes with a clear record of who did what.',
      'Meet compliance requirements for audit trails and record-keeping.',
    ],
  },
  {
    icon: UploadCloud,
    title: 'Document Uploads',
    slug: 'document-uploads',
    description:
      'Attach PDFs, images, and files to any permit or job. Keep all your documents in one searchable place.',
    longDescription: [
      'Upload any file to a permit or job: permit applications, approval letters, inspection reports, photos, drawings, or invoices. All documents are stored securely and linked to the relevant permit or job.',
      'Search across all documents by file name, permit number, or job name. No more digging through email or file folders.',
    ],
    howItWorks: [
      'From a permit or job, click "Upload Document."',
      'Select a file from your computer or drag and drop.',
      'The file is uploaded, stored, and linked to the permit or job.',
      'View, download, or delete documents anytime.',
    ],
    whyItMatters: [
      'Keep all permit and job documents in one place.',
      'Find documents quickly without searching through email or file folders.',
      'Reduce the risk of losing important paperwork.',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Materials Tracker',
    slug: 'materials-tracker',
    description:
      'Upload receipts and invoices. Track what was ordered, when, and for which job. Catch cost overruns early.',
    longDescription: [
      'Track materials purchases by job. Upload receipts and invoices, log the item, quantity, cost, and supplier. See total materials spend per job and compare to budget.',
      'Catch cost overruns early by monitoring materials spend in real-time. If materials are trending over budget, you\'ll know before it\'s too late.',
    ],
    howItWorks: [
      'From a job, click "Add Material."',
      'Enter the item, quantity, cost, supplier, and upload a receipt.',
      'Sasquatch calculates total materials cost for the job.',
      'Compare actual materials spend to budgeted amounts.',
    ],
    whyItMatters: [
      'Track materials costs separately from labor and overhead.',
      'Catch cost overruns before they impact profit margins.',
      'Maintain a record of all materials purchases for billing or warranty claims.',
    ],
  },
  {
    icon: MapPin,
    title: 'Map View',
    slug: 'map-view',
    description:
      'See all your permits and jobs on a map. Perfect for planning routes, spotting clusters, and visualizing workload by area.',
    longDescription: [
      'The Map View displays all your permits and jobs as pins on an interactive map. See where your work is concentrated, plan efficient routes for your crew, and identify geographic clusters.',
      'Filter by status, jurisdiction, or date range to see specific subsets of permits and jobs.',
    ],
    howItWorks: [
      'Open the Map View from the navigation menu.',
      'See all permits and jobs plotted by address.',
      'Click a pin to see permit or job details.',
      'Filter by status, jurisdiction, or date to refine the view.',
    ],
    whyItMatters: [
      'Optimize crew routing and reduce travel time.',
      'Spot geographic clusters and plan multi-job visits.',
      'Visualize your workload by area and prioritize accordingly.',
    ],
  },
  {
    icon: FileUp,
    title: 'Permit Upload (AI)',
    slug: 'permit-upload-ai',
    description:
      'Upload a single permit PDF or image; AI extracts key fields and creates the permit record with PII redaction.',
    longDescription: [
      'Upload a single permit document (PDF or image) and Sasquatch\'s AI extracts all key fields: permit number, address, jurisdiction, applicant name, fees, dates, and more.',
      'The AI automatically redacts personally identifiable information (PII) such as social security numbers, driver\'s license numbers, and other sensitive data to ensure compliance and privacy.',
    ],
    howItWorks: [
      'Upload a permit PDF or image.',
      'AI scans the document and extracts permit fields.',
      'PII is automatically redacted.',
      'Review the extracted data and confirm or edit as needed.',
      'The permit is created in your dashboard.',
    ],
    whyItMatters: [
      'Ensure compliance with privacy regulations by auto-redacting PII.',
      'Save time by eliminating manual data entry.',
      'Reduce errors from copying permit details.',
    ],
  },
  {
    icon: Database,
    title: 'Import Pipeline & Scope Mapper',
    slug: 'import-pipeline-scope-mapper',
    description:
      'Upload a work order plus CSV. AI maps columns, normalizes data, and ties materials and cost to jobs.',
    longDescription: [
      'Upload a work order document and a CSV of materials or costs. Sasquatch\'s AI maps the CSV columns to the correct fields (item, quantity, cost, supplier), normalizes the data, and links it to the relevant job.',
      'The Scope Mapper intelligently ties materials and costs to jobs based on permit numbers, addresses, or job names in the uploaded files.',
    ],
    howItWorks: [
      'Upload a work order document and a CSV file.',
      'AI maps CSV columns to Sasquatch fields (item, quantity, cost).',
      'Review the mapped data and confirm or adjust mappings.',
      'Materials and costs are imported and linked to the relevant job.',
    ],
    whyItMatters: [
      'Automate the import of complex work orders and material lists.',
      'Reduce manual data entry and mapping errors.',
      'Keep materials and costs tied to the correct jobs automatically.',
    ],
  },
  {
    icon: Bot,
    title: 'Materials AI — Analyze Scope with Claude',
    slug: 'materials-ai-analyze-scope',
    description:
      'Upload a work order document; AI generates a materials list with quantities, cost ranges, and labor estimates.',
    longDescription: [
      'Upload a work order or scope document and Sasquatch\'s AI (powered by Claude) generates a detailed materials list with quantities, cost ranges, and labor hour estimates.',
      'The AI understands construction terminology, trade-specific scopes, and typical material requirements for common permit types (electrical, plumbing, HVAC, solar, etc.).',
    ],
    howItWorks: [
      'Upload a work order or scope document.',
      'AI analyzes the scope and generates a materials list.',
      'Review quantities, cost ranges, and labor estimates.',
      'Adjust as needed and import into the job.',
    ],
    whyItMatters: [
      'Speed up estimating and materials planning.',
      'Reduce errors from manual scope analysis.',
      'Get cost and labor estimates before starting the job.',
    ],
  },
  {
    icon: Receipt,
    title: 'Revenue & Invoicing',
    slug: 'revenue-invoicing',
    description:
      'View gross margin and invoiceability per job. Generate and send branded invoices by email with one click.',
    longDescription: [
      'Track revenue, costs, and gross margin for each job. See which jobs are profitable and which are losing money. Mark jobs as invoiceable and generate branded invoices with one click.',
      'Send invoices directly to clients via email from Sasquatch. Track invoice status (sent, viewed, paid) and follow up on overdue payments.',
    ],
    howItWorks: [
      'Enter job revenue (contract amount or billable hours).',
      'Track costs (materials, labor, subcontractors).',
      'Sasquatch calculates gross margin.',
      'Generate a branded invoice and send via email.',
      'Track invoice status and payment.',
    ],
    whyItMatters: [
      'Understand which jobs are profitable and which are losing money.',
      'Simplify invoicing and payment tracking.',
      'Reduce time spent on billing and follow-ups.',
    ],
  },
  {
    icon: CreditCard,
    title: 'Job Expense Tracking',
    slug: 'job-expense-tracking',
    description:
      'Log expenses per job and upload receipt photos. Track actual spend and compare to budget in one place.',
    longDescription: [
      'Log any job expense: materials, tools, permits, subcontractors, or miscellaneous costs. Upload a receipt photo or PDF for each expense. See total expenses per job and compare to budget.',
      'Job Expense Tracking integrates with Cost Leakage Alerts to notify you when expenses exceed budget.',
    ],
    howItWorks: [
      'From a job, click "Add Expense."',
      'Enter the category, amount, description, and upload a receipt.',
      'Sasquatch calculates total expenses for the job.',
      'Compare actual expenses to budgeted amounts.',
    ],
    whyItMatters: [
      'Keep all job expenses in one place for easy tracking.',
      'Compare actual spend to budget in real-time.',
      'Maintain receipts for billing, reimbursements, or tax purposes.',
    ],
  },
  {
    icon: BadgeCheck,
    title: 'Compliance Credentials',
    slug: 'compliance-credentials',
    description:
      'Track licenses, insurance, and certifications with expiration dates. Stay ahead of renewals and audits.',
    longDescription: [
      'Track all your compliance credentials in Sasquatch: contractor licenses, insurance policies, certifications, and bonds. Set expiration dates and receive reminders before renewals are due.',
      'Perfect for staying ahead of audits, renewals, and jurisdiction-specific requirements.',
    ],
    howItWorks: [
      'Add a credential: license, insurance policy, certification, or bond.',
      'Enter the issuer, number, issue date, and expiration date.',
      'Sasquatch sends reminders before expiration.',
      'Upload a copy of the credential document for your records.',
    ],
    whyItMatters: [
      'Never miss a license or insurance renewal.',
      'Stay compliant with jurisdiction-specific requirements.',
      'Be ready for audits with up-to-date credential records.',
    ],
  },
  {
    icon: UserCog,
    title: 'User Management (Admin)',
    slug: 'user-management',
    description:
      'Invite users, assign roles (Admin, Manager, Field Crew), and manage access from one place.',
    longDescription: [
      'Admins can invite users, assign roles, and manage access from the User Management page. Add or remove users, change roles, and control permissions for your organization.',
      'See a list of all users, their roles, and their last activity. Deactivate users who leave the company without losing historical data.',
    ],
    howItWorks: [
      'Go to User Management (Admin only).',
      'Click "Invite User" and enter their email.',
      'Assign a role (Admin, Manager, Field Crew, or custom).',
      'The user receives an invitation email and can set up their account.',
    ],
    whyItMatters: [
      'Control who has access to your organization\'s data.',
      'Assign appropriate roles to keep data secure and relevant.',
      'Manage your team efficiently as your business grows.',
    ],
  },
  {
    icon: Building2,
    title: 'Locations',
    slug: 'locations',
    description:
      'Organize permits and jobs by location. View and filter by address or site for multi-site contractors.',
    longDescription: [
      'Organize your permits and jobs by location (address or site). Perfect for contractors working across multiple properties, developments, or geographic areas.',
      'Filter permits and jobs by location to see all work at a specific site. Useful for property managers, developers, or contractors with recurring clients.',
    ],
    howItWorks: [
      'Create a location (address or site name).',
      'Assign permits and jobs to the location.',
      'Filter by location to see all permits and jobs at that site.',
      'View location-specific reports and analytics.',
    ],
    whyItMatters: [
      'Organize work by property or development for easy tracking.',
      'Simplify reporting for clients with multiple sites.',
      'See all work at a specific location in one view.',
    ],
  },
  {
    icon: MailX,
    title: 'Email Unsubscribe & Suppression',
    slug: 'email-unsubscribe-suppression',
    description:
      'Every notification respects unsubscribe preferences and the suppression list so you stay compliant and avoid spam.',
    longDescription: [
      'Sasquatch respects email unsubscribe requests and maintains a suppression list to ensure compliance with email best practices and anti-spam regulations.',
      'Users can unsubscribe from specific notification types or all emails. Suppressed emails are never sent, even if a notification would normally trigger.',
    ],
    howItWorks: [
      'Users can unsubscribe from emails via the unsubscribe link in any notification email.',
      'Admins can manage the suppression list from User Management.',
      'Sasquatch checks the suppression list before sending any email notification.',
    ],
    whyItMatters: [
      'Stay compliant with email regulations and best practices.',
      'Respect user preferences and reduce spam complaints.',
      'Maintain a healthy email sender reputation.',
    ],
  },
];
