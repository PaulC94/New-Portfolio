import React from 'react';
import { EDUCATIONS } from '../constants';
import { SchoolIcon } from './Icons';

const Education: React.FC = () => {
  return (
    <section id="education" className="min-h-screen flex flex-col justify-center py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Formation</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {EDUCATIONS.map((edu) => (
            <div key={edu.id} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left hover:border-teal-500/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800 group">
                <SchoolIcon className="w-8 h-8 text-teal-500 group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-100">{edu.school}</h3>
                <div className="text-teal-400 font-medium text-lg mb-2">{edu.degree}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-3">{edu.period}</div>
                <p className="text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;