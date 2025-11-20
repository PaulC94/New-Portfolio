import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, SendIcon } from './Icons';
import { saveMessage } from '../services/database';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const success = await saveMessage(formData);
    
    if (success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-slate-950 animate-fade-in py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">Me Contacter</h2>
           <div className="w-32 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Side */}
          <div className="space-y-8">
            <p className="text-slate-400 text-lg leading-relaxed">
              À la recherche d'une alternance ou d'une opportunité dans la <span className="text-teal-400 font-bold">Data</span> ? 
              <br/><br/>
              Remplissez le formulaire ou utilisez mes réseaux sociaux. Toutes les données du formulaire sont enregistrées dans ma base de données locale.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/50 transition-all group">
                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-teal-500/20 transition-colors">
                    <LinkedinIcon className="w-6 h-6 text-slate-400 group-hover:text-teal-400" />
                </div>
                <span className="text-slate-300 font-medium group-hover:text-white">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/50 transition-all group">
                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-teal-500/20 transition-colors">
                    <GithubIcon className="w-6 h-6 text-slate-400 group-hover:text-teal-400" />
                </div>
                <span className="text-slate-300 font-medium group-hover:text-white">GitHub</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-none"
                  placeholder="Je souhaiterais discuter d'un projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-teal-500 hover:bg-teal-400 text-slate-900 hover:scale-[1.02]'
                } disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    Envoi...
                  </>
                ) : status === 'success' ? (
                  'Message envoyé !'
                ) : (
                  <>
                    Envoyer le message
                    <SendIcon className="w-5 h-5" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-400 text-center text-sm mt-2">Une erreur est survenue. Réessayez plus tard.</p>
              )}
            </form>
          </div>
        </div>
        
        <div className="text-center text-sm text-slate-600 mt-16">
          &copy; {new Date().getFullYear()} Paul. Tous droits réservés.
        </div>
      </div>
    </section>
  );
};

export default Contact;