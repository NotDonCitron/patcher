import React from 'react';
import { 
  Code2, 
  Cpu, 
  Server, 
  Globe, 
  Bot, 
  Terminal, 
  Database, 
  Layers 
} from 'lucide-react';
import SkillCard from './SkillCard';
import FadeIn from './FadeIn';

const skills = [
  {
    category: "Webentwicklung",
    items: [
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: Globe },
      { name: "Tailwind CSS", icon: Layers },
    ]
  },
  {
    category: "KI & Automatisierung",
    items: [
      { name: "Agentic Coding", icon: Bot },
      { name: "AI Integration", icon: Cpu },
      { name: "Python", icon: Terminal },
    ]
  },
  {
    category: "Systemadministration",
    items: [
      { name: "Linux / Server", icon: Server },
      { name: "Supabase", icon: Database },
    ]
  }
];

export default function SkillsGrid() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technische Fähigkeiten</h2>
        
        <div className="space-y-12">
          {skills.map((cat, catIndex) => (
            <div key={cat.category}>
              <h3 className="text-xl font-semibold text-blue-400 mb-6 border-b border-gray-800 pb-2">
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.items.map((skill, index) => (
                  <FadeIn key={skill.name} delay={index * 0.1} direction="up">
                    <SkillCard name={skill.name} icon={skill.icon} />
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
