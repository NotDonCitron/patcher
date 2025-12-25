import { Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 px-6 flex flex-col items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-700">
      <div className="mb-6 p-4 bg-blue-500/10 rounded-full text-blue-400">
        <Terminal size={48} />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        AI Engineer & <span className="text-blue-500">System Developer</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8">
        Willkommen! Ich entwickle intelligente Lösungen durch Agentic Coding und robuste Systemadministration – spezialisiert auf effiziente Remote-Zusammenarbeit.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Projekte ansehen
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium border border-gray-600 transition-colors">
          Kontakt
        </button>
      </div>
    </section>
  );
}
