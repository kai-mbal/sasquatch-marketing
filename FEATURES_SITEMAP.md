# Sasquatch Permit Intelligence - Features Sitemap

This document lists all 25 features and their corresponding URL slugs for the Sasquatch marketing website.

## Feature URLs

All feature pages are accessible at: `/features/{slug}`

### Part A: Original 16 Features

1. **Permit Health Engine**
   - URL: `/features/permit-health-engine`
   - Description: Automatic health scoring for every permit

2. **Smart Import (AI)**
   - URL: `/features/smart-import-ai`
   - Description: Upload PDFs, images, or spreadsheets with AI extraction

3. **Email Ingestion**
   - URL: `/features/email-ingestion`
   - Description: Forward permit confirmations directly to Sasquatch

4. **Jobs from Permits**
   - URL: `/features/jobs-from-permits`
   - Description: Auto-generated jobs with crew, budget, and progress tracking

5. **Inspection Calendar**
   - URL: `/features/inspection-calendar`
   - Description: Month and week views with all scheduled inspections

6. **Cost Leakage Alerts**
   - URL: `/features/cost-leakage-alerts`
   - Description: Real-time alerts when jobs go over budget

7. **Attention Center**
   - URL: `/features/attention-center`
   - Description: All blocked jobs and at-risk permits in one place

8. **Role-Based Access**
   - URL: `/features/role-based-access`
   - Description: Control who sees what with Admin, Manager, Field Crew roles

9. **Bulk Operations**
   - URL: `/features/bulk-operations`
   - Description: Update, assign, or remind across multiple permits at once

10. **Jurisdiction Intelligence**
    - URL: `/features/jurisdiction-intelligence`
    - Description: Built-in knowledge of every supported county

11. **Time Tracking**
    - URL: `/features/time-tracking`
    - Description: Track hours directly on each job

12. **Notification Controls**
    - URL: `/features/notification-controls`
    - Description: Choose what you want to be notified about

13. **Audit Trail**
    - URL: `/features/audit-trail`
    - Description: Every change is logged for accountability

14. **Document Uploads**
    - URL: `/features/document-uploads`
    - Description: Attach PDFs, images, and files to any permit or job

15. **Materials Tracker**
    - URL: `/features/materials-tracker`
    - Description: Upload receipts and track what was ordered

16. **Map View**
    - URL: `/features/map-view`
    - Description: See all permits and jobs on a map

### Part B: Additional 9 Features

17. **Permit Upload (AI)**
    - URL: `/features/permit-upload-ai`
    - Description: Upload a single permit with AI extraction and PII redaction

18. **Import Pipeline & Scope Mapper**
    - URL: `/features/import-pipeline-scope-mapper`
    - Description: Upload work orders and CSV with AI column mapping

19. **Materials AI — Analyze Scope with Claude**
    - URL: `/features/materials-ai-analyze-scope`
    - Description: AI generates materials list with quantities and cost ranges

20. **Revenue & Invoicing**
    - URL: `/features/revenue-invoicing`
    - Description: View gross margin and generate branded invoices

21. **Job Expense Tracking**
    - URL: `/features/job-expense-tracking`
    - Description: Log expenses per job with receipt photos

22. **Compliance Credentials**
    - URL: `/features/compliance-credentials`
    - Description: Track licenses, insurance, and certifications

23. **User Management (Admin)**
    - URL: `/features/user-management`
    - Description: Invite users and assign roles from one place

24. **Locations**
    - URL: `/features/locations`
    - Description: Organize permits and jobs by location or site

25. **Email Unsubscribe & Suppression**
    - URL: `/features/email-unsubscribe-suppression`
    - Description: Respect unsubscribe preferences and stay compliant

## Implementation Notes

- All 25 features are displayed as cards on the main Features page (`/features`)
- Each card is clickable and links to its dedicated feature detail page
- Feature detail pages include:
  - Icon and title (matching the card)
  - Extended description (2-4 paragraphs)
  - "How it works" section (3-4 bullet points)
  - "Why it matters" section (3-4 bullet points)
  - CTA to start free trial or view all features
- Features are defined in `/src/app/data/features.ts`
- Shared template page at `/src/app/pages/features/FeatureDetailPage.tsx`
- Routing configured in `/src/app/routes.tsx`
