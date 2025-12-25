import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
}

export default function SkillCard({ name, icon: Icon }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all group">
      <div className="mb-4 text-gray-400 group-hover:text-blue-400 transition-colors">
        <Icon size={32} />
      </div>
      <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}
