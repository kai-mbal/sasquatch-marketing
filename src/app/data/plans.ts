export interface Plan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  isContactOnly?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Team',
    price: '$149',
    period: '/month',
    features: ['Up to 5 users', 'Jobs, permits, and inspections', 'Reminders', 'Jurisdiction lookup'],
  },
  {
    name: 'Company',
    price: '$299',
    period: '/month',
    features: ['Unlimited users', 'Everything in Team'],
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    features: ['Custom needs for larger companies'],
    isContactOnly: true,
  },
];

export const EARLY_ACCESS_NOTE = 'Early access pricing shown above. No credit card required to request access.';
