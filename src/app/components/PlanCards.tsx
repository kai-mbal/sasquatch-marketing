import { Link } from 'react-router';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { plans } from '../data/plans';

export function PlanCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plans.map((plan) => (
        <Card key={plan.name} className="p-8 shadow-lg flex flex-col">
          <h3 className="text-2xl mb-4" style={{ fontWeight: 700, color: '#1A1F1C' }}>
            {plan.name}
          </h3>
          <div className="mb-6">
            <span className={`font-bold ${plan.period ? 'text-5xl' : 'text-3xl'}`} style={{ color: '#1A1F1C' }}>
              {plan.price}
            </span>
            {plan.period && <span className="text-[#5A6560] text-lg">{plan.period}</span>}
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#4CAF70] flex-shrink-0 mt-0.5" />
                <span className="text-[#1A1F1C]">{feature}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="block">
            <Button
              className="w-full bg-white text-[#1A3D2B] border-2 border-[#1A3D2B] hover:bg-[#F7F8F6]"
              style={{ fontWeight: 600 }}
            >
              {plan.isContactOnly ? 'Contact Us' : 'Book a Demo'}
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
}
