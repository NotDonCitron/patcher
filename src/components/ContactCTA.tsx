import { Mail } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Interesse an einer Zusammenarbeit?
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Ich bin derzeit auf der Suche nach einer Ausbildungsstelle oder Festanstellung, die modernes Arbeiten im Homeoffice ermöglicht. Lassen Sie uns gemeinsam herausfinden, wie ich Ihr Team unterstützen kann.
        </p>
        <a 
          href="mailto:ihre-email@beispiel.de" 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          role="button"
        >
          <Mail size={24} />
          Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
}
