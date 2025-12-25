import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, link, github }: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all group shadow-xl">
      <div className="h-48 bg-gray-700 flex items-center justify-center text-gray-500 overflow-hidden">
        {/* Platzhalter für Projekt-Bild */}
        <div className="text-gray-600 group-hover:scale-110 transition-transform duration-500">
          <Github size={64} opacity={0.2} />
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6 flex-1">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-semibold px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-4 border-t border-gray-700">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
