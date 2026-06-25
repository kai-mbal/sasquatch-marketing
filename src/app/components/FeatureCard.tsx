import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug?: string;
}

export function FeatureCard({ icon: Icon, title, description, slug }: FeatureCardProps) {
  const content = (
    <>
      <div className="w-12 h-12 rounded-lg bg-[#E6F4EC] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#1A3D2B]" />
      </div>
      <h3
        className="mb-2"
        style={{
          fontWeight: 600,
          fontSize: '18px',
          color: '#1A1F1C',
        }}
      >
        {title}
      </h3>
      <p
        className="text-[#5A6560] leading-relaxed"
        style={{
          fontSize: '14px',
        }}
      >
        {description}
      </p>
    </>
  );

  if (slug) {
    return (
      <Link to={`/features/${slug}`} className="block h-full">
        <div className="bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-200 cursor-pointer h-full flex flex-col">
          {content}
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
      {content}
    </div>
  );
}