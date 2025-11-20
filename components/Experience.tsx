import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { BriefcaseIcon, SchoolIcon } from './Icons';

const Experience: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20 bg-slate-900 animate-fade-in relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Mon Parcours</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Une formation solide et des expériences concrètes.</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative">
          {/* Central Line (Tree Trunk) - Visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700 rounded-full"></div>
          {/* Mobile Line - Left aligned */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-slate-700 rounded-full"></div>

          <div className="space-y-16">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEdu = item.category === 'education';
              
              return (
                <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Card */}
                  <div className="w-full md:w-5/12 pl-20 md:pl-0">
                    <div className={`bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 shadow-xl relative group ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      
                      {/* Connection Line for Mobile */}
                      <div className="md:hidden absolute left-[-3rem] top-8 w-8 h-1 bg-teal-500"></div>
                      {/* Connection Line for Desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-1 bg-teal-500 ${isEven ? '-right-10' : '-left-10'}`}></div>

                      <div className="flex flex-wrap gap-2 mb-3 justify-start md:justify-inherit items-center">
                         <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${item.color} text-white`}>
                            {item.period}
                         </div>
                         <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border border-slate-700 text-slate-300`}>
                            {isEdu ? <SchoolIcon className="w-3 h-3"/> : <BriefcaseIcon className="w-3 h-3"/>}
                            {isEdu ? 'Formation' : 'Expérience'}
                         </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-100 mb-1">{item.title}</h3>
                      <div className="text-lg text-teal-400 font-medium mb-3">{item.subtitle}</div>
                      
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {item.details && (
                        <ul className={`space-y-1 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                            {item.details.map((detail, i) => (
                            <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                                {/* Render dot based on alignment */}
                                {!isEven && <span className="w-1.5 h-1.5 bg-teal-500 rounded-full hidden md:block"></span>}
                                <span className="md:hidden w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                                <span>{detail}</span>
                                {isEven && <span className="w-1.5 h-1.5 bg-teal-500 rounded-full hidden md:block"></span>}
                            </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Center Node (The Tree Node) */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-slate-900 bg-slate-800 z-10 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm sm:text-xl overflow-hidden`}>
                      {item.logoInitial}
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
