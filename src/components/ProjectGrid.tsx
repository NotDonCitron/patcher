import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Automatisierter Fishing Bot",
    description: "Ein intelligentes Automatisierungstool für Ice Fishing, entwickelt mit Python und OpenCV zur Bilderkennung in Echtzeit.",
    tags: ["Python", "OpenCV", "PyAutoGUI", "Automation"],
    github: "https://github.com/NotDonCitron/ice_fishing_bot"
  },
  {
    title: "AI Agent Workflow",
    description: "Entwicklung von autonomen Agenten zur Lösung komplexer Coding-Aufgaben unter Nutzung moderner LLMs.",
    tags: ["TypeScript", "AI Agents", "LLM", "Node.js"],
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "Diese professionelle Webseite, optimiert für Performance und Barrierefreiheit, um meine Skills zu präsentieren.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "#"
  }
];

export default function ProjectGrid() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ausgewählte Projekte</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Hier sind einige meiner Arbeiten, die meine Leidenschaft für Automatisierung, KI und saubere Softwarearchitektur widerspiegeln.
            </p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors mb-1">
            Alle Projekte auf GitHub →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
