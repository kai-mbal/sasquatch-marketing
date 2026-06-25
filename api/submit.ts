import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT = process.env.RECIPIENT_EMAIL ?? 'contact@sasquatchpermit.com';
const SENDER = process.env.SENDER_EMAIL ?? 'noreply@sasquatchpermit.com';
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUB_ID = process.env.BEEHIIV_PUB_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { formType, ...data } = body ?? {};

    if (!formType) return res.status(400).json({ message: 'Missing formType' });

    if (formType === 'newsletter-subscribe') {
      return res.status(200).json(await handleNewsletterSubscribe(data));
    }

    const { subject, html } = formatEmail(formType, data);

    await resend.emails.send({
      from: `Sasquatch Site <${SENDER}>`,
      to: [RECIPIENT],
      subject,
      html,
    });

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing form:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function handleNewsletterSubscribe(data: Record<string, string>) {
  if (!data.email) return { message: 'Email is required' };

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        reactivate_existing: true,
        send_welcome_email: true,
        ...(data.name ? { custom_fields: [{ name: 'Full Name', value: data.name }] } : {}),
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    console.error('Beehiiv API error:', JSON.stringify(err));
    if (response.status === 409) return { message: "You're already subscribed!" };
    return { message: 'Subscription failed. Please try again.' };
  }

  return { message: 'Subscribed successfully' };
}

function formatEmail(formType: string, data: Record<string, string>) {
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' });

  switch (formType) {
    case 'contact':
      return {
        subject: `[Sasquatch] Contact Form — ${data.name || 'Unknown'}`,
        html: buildHtml('New Contact Form Submission', [
          field('Name', data.name),
          field('Company', data.company),
          field('Trade', data.trade),
          field('Email', data.email),
          field('Message', data.message),
          field('Submitted', timestamp),
        ]),
      };
    case 'county-request':
      return {
        subject: `[Sasquatch] County Request — ${data.county || 'Unknown'}`,
        html: buildHtml('New County Request', [
          field('Name', data.name),
          field('Email', data.email),
          field('Requested County', data.county),
          field('Additional Info', data.message),
          field('Submitted', timestamp),
        ]),
      };
    case 'early-access':
      return {
        subject: `[Sasquatch] Early Access Signup — ${data.email}`,
        html: buildHtml('New Early Access Signup', [
          field('Email', data.email),
          field('Submitted', timestamp),
        ]),
      };
    case 'newsletter':
      return {
        subject: `[Sasquatch] Newsletter Signup — ${data.email}`,
        html: buildHtml('New Newsletter Signup', [
          field('Email', data.email),
          field('Submitted', timestamp),
        ]),
      };
    default:
      return {
        subject: `[Sasquatch] Form Submission — ${formType}`,
        html: buildHtml(`Form: ${formType}`, [
          ...Object.entries(data).map(([k, v]) => field(k, v)),
          field('Submitted', timestamp),
        ]),
      };
  }
}

function field(label: string, value?: string) {
  return `<tr>
    <td style="padding:8px 12px;font-weight:600;color:#1A3D2B;vertical-align:top;white-space:nowrap">${label}</td>
    <td style="padding:8px 12px;color:#1A1F1C">${escapeHtml(value ?? '—')}</td>
  </tr>`;
}

function buildHtml(title: string, rows: string[]) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#F7F8F6">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #ECEEED">
    <div style="background:#1A3D2B;padding:24px 32px">
      <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">${escapeHtml(title)}</h1>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse">
        ${rows.join('')}
      </table>
    </div>
    <div style="padding:16px 32px;background:#F7F8F6;border-top:1px solid #ECEEED">
      <p style="margin:0;font-size:12px;color:#5A6560">Sent from sasquatchpermit.com contact form</p>
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
