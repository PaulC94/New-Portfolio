import React, { useState, useEffect } from 'react';
import { BIO } from '../constants';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Phrases requested by user
  const toRotate = [ 
    "Dev Fullstack", 
    "Futur Data Analyst", 
    "Étudiant BTS SIO", 
    "Passionné d'IT" 
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Dynamic speed
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative bg-slate-950 overflow-hidden px-4 animate-fade-in">
      
      {/* Stylish Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[128px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <h2 className="text-teal-400 tracking-widest uppercase text-sm md:text-base font-bold mb-4">
          Portfolio
        </h2>
        
        <h1 className="text-6xl md:text-9xl font-black text-slate-100 mb-6 tracking-tighter">
          PAUL
        </h1>

        {/* Typewriter Area */}
        <div className="h-20 flex items-center justify-center">
          <span className="text-2xl md:text-5xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-bold">
            {text}
            <span className="text-slate-100 border-r-4 border-teal-500 ml-1 animate-pulse">&nbsp;</span>
          </span>
        </div>

        <p className="mt-8 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {BIO}
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <button onClick={() => onNavigate('projects')} className="px-8 py-3 rounded-full bg-slate-100 text-slate-950 font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-teal-500/20">
            Voir mes projets
          </button>
          <button onClick={() => onNavigate('contact')} className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;