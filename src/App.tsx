import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <main className="p-6">
      <p>Willkommen zu meinem Portfolio. Ich bin spezialisiert auf KI-Integration und Systemadministration.</p>
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="p-6">
        <h1 className="text-4xl font-bold">AI Engineer & System Developer</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;