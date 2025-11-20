import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Projets</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-teal-500/90 text-slate-900 text-xs font-bold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                    {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:text-white transition-colors"
                          title="Voir le site"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                        </a>
                    )}
                </div>
                
                <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-semibold px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;