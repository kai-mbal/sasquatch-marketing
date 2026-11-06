import { useEffect } from 'react';

const DEFAULT_TITLE = 'Sasquatch — Job, Permit & Inspection Tracking for Contractors';
const DEFAULT_DESCRIPTION =
  'Sasquatch gives contractor admins one place to manage every job, permit, and inspection, with deadlines, reminders, and what needs attention today.';

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content);
}

export function usePageTitle(title?: string, description: string = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Sasquatch` : DEFAULT_TITLE;
    document.title = fullTitle;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', fullTitle);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', fullTitle);
    setMetaContent('meta[name="twitter:description"]', description);
  }, [title, description]);
}
