import FadeIn from './FadeIn';

export default function About() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-gray-300">
      <FadeIn>
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">Über mich</h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Als leidenschaftlicher Entwickler mit Fokus auf <span className="text-white font-semibold">AI Engineering</span> und <span className="text-white font-semibold">Systemadministration</span> verbinde ich technisches Expertenwissen mit einer lösungsorientierten Arbeitsweise. 
          </p>
          
          <p>
            Ein zentraler Aspekt meiner beruflichen Philosophie ist die <span className="text-blue-400">effiziente Remote-Zusammenarbeit</span>. Aufgrund meiner aktuellen Lebensumstände und um meine nachhaltige Leistungsfähigkeit sowie meine <span className="text-white font-semibold">Gesundheit</span> zu priorisieren, ist das Arbeiten im <span className="text-blue-400">Homeoffice</span> für mich nicht nur eine Präferenz, sondern die Basis für meinen Erfolg. 
          </p>

          <p>
            Trotz eingeschränkter Mobilität vor Ort liefere ich digital Höchstleistungen. Ich nutze moderne Tools für Agentic Coding und Automatisierung, um komplexe Aufgaben präzise und zeitnah zu lösen. Mein Ziel ist es, in einem Umfeld zu arbeiten, das Flexibilität und Professionalität vereint.
          </p>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mt-10">
            <h3 className="text-xl font-semibold text-white mb-4">Warum ich die richtige Wahl für Ihr Team bin:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Spezialisierung auf Agentic Coding und KI-Workflows</li>
              <li>Erfahrung in der Administration robuster Systeme</li>
              <li>Hohe Eigenverantwortung und Disziplin im Remote-Setup</li>
              <li>Kontinuierliche Weiterbildung in zukunftssicheren Technologien</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
