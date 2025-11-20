import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Hero onNavigate={setCurrentPage} />;
      case 'experience': return <Experience />; // Contains both Experience and Education
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-teal-500/30 selection:text-teal-200 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1 relative pt-16">
        {renderPage()}
      </main>
      
      {/* AI Assistant Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
