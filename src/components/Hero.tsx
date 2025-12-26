import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const title = "AI Engineer & System Developer";
  const words = title.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 px-6 flex flex-col items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-700">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-6 p-4 bg-blue-500/10 rounded-full text-blue-400"
      >
        <Terminal size={48} />
      </motion.div>
      
      <motion.h1 
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 flex flex-wrap justify-center gap-x-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span 
            variants={child} 
            key={index} 
            className={word.includes("System") || word.includes("Developer") ? "text-blue-500" : "text-white"}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8"
      >
        Willkommen! Ich entwickle intelligente Lösungen durch Agentic Coding und robuste Systemadministration – spezialisiert auf effiziente Remote-Zusammenarbeit.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex gap-4"
      >
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Projekte ansehen
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium border border-gray-600 transition-colors">
          Kontakt
        </button>
      </motion.div>
    </section>
  );
}
