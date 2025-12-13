import React, { useState } from 'react';
import { mockResumeData } from './constants';
import ChatInterface from './components/ChatInterface';
import { 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Award, 
  MapPin, 
  Mail, 
  Phone,
  FileText,
  Users,
  Terminal,
  Download,
  Scroll,
  Linkedin,
  Github,
  Brain,
  BarChart3,
  Globe,
  Mic2
} from 'lucide-react';

const App = () => {
  const data = mockResumeData;
  // Tabs: Experience, Research (Projects), Education/Honors
  const [activeTab, setActiveTab] = useState<'trayectoria' | 'investigacion' | 'educacion'>('trayectoria');

  return (
    <div className="min-h-screen bg-dark text-emerald-50 selection:bg-primary/30 selection:text-primary-foreground pb-20 font-sans overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Navigation / Header - Mobile Optimized */}
        <header className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <GraduationCap className="text-primary" size={32} />
            <span>JORGE<span className="text-primary">.ROSALES</span></span>
          </div>
          <div className="flex gap-4">
             <a 
               href={data.personalInfo.linkedinUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-white/5 hover:bg-[#0077b5]/30 hover:border-[#0077b5]/50 px-3 py-2 rounded-full text-sm font-medium transition-all border border-white/10 text-emerald-50"
               title="LinkedIn"
             >
               <Linkedin size={18} />
             </a>
             {data.personalInfo.xUrl && (
               <a 
                 href={data.personalInfo.xUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-white/5 hover:bg-black/50 hover:border-white/30 px-3 py-2 rounded-full text-sm font-medium transition-all border border-white/10 text-emerald-50"
                 title="X"
               >
                 <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                 </svg>
               </a>
             )}
             <a 
               href={data.personalInfo.cvUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full text-sm font-medium transition-all border border-primary/20 text-primary hover:text-white"
             >
               <Download size={16} />
               <span>Descargar CV</span>
             </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-8 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
              Investigador & Académico
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {data.personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200 font-medium">
              {data.personalInfo.title}
            </h2>
            <p className="text-lg text-emerald-100/70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {data.personalInfo.about}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
               <div className="flex items-center gap-2 text-sm text-emerald-200/60 hover:text-primary transition-colors">
                 <MapPin size={16} /> {data.personalInfo.location}
               </div>
               <div className="flex items-center gap-2 text-sm text-emerald-200/60 hover:text-primary transition-colors">
                 <Mail size={16} /> {data.personalInfo.email}
               </div>
               <div className="flex items-center gap-2 text-sm text-emerald-200/60 hover:text-primary transition-colors">
                 <Phone size={16} /> {data.personalInfo.phone}
               </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center order-1 md:order-2">
            {/* Clean Avatar Container */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl bg-card">
               <img 
                  src={data.personalInfo.avatarUrl} 
                  alt={data.personalInfo.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>
            {/* Subtle backlight glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10 pointer-events-none"></div>
          </div>
        </section>

        {/* Featured Book Section */}
        <section className="mb-10">
          <div className="bg-card/40 border border-white/5 rounded-2xl p-6 md:p-12 relative overflow-hidden group backdrop-blur-sm">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="grid md:grid-cols-5 gap-8 items-center relative z-10">
              {/* Book Text */}
              <div className="md:col-span-3 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                  <BookOpen size={14} /> Publicación Destacada
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{data.highlightBook.title}</h3>
                  <p className="text-lg md:text-xl text-primary font-light">{data.highlightBook.subtitle}</p>
                </div>
                <p className="text-emerald-100/80 leading-relaxed">
                  {data.highlightBook.description}
                </p>
                <div className="pt-2">
                  <a 
                    href={data.highlightBook.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-white text-dark hover:bg-emerald-50 font-bold py-3 px-6 rounded-lg transition-all transform hover:translate-x-1 shadow-lg shadow-black/20"
                  >
                    <Download size={18} /> Descargar Libro (PDF)
                  </a>
                </div>
              </div>

              {/* Book Visual Representation */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-40 md:w-48 aspect-[2/3] bg-white rounded-r-lg shadow-[10px_10px_30px_rgba(0,0,0,0.5)] transform rotate-y-[-15deg] group-hover:rotate-y-0 transition-transform duration-500 flex flex-col overflow-hidden border-l-4 border-emerald-100/20">
                   <img 
                     src={data.highlightBook.coverUrl} 
                     alt={data.highlightBook.title}
                     className="w-full h-full object-cover"
                   />
                   {/* Book spine shadow */}
                   <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Manual Section (New) */}
        <section className="mb-20">
          <div className="bg-card/40 border border-white/5 rounded-2xl p-6 md:p-12 relative overflow-hidden group backdrop-blur-sm">
             {/* Decorative blurs */}
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

             <div className="grid md:grid-cols-5 gap-8 items-center relative z-10">
                {/* Manual Visual Representation (Left) */}
                <div className="md:col-span-2 flex justify-center order-2 md:order-1">
                   <div className="relative w-40 md:w-48 aspect-[3/4] bg-white rounded-l-lg shadow-[10px_10px_30px_rgba(0,0,0,0.5)] transform rotate-y-[15deg] group-hover:rotate-y-0 transition-transform duration-500 flex flex-col overflow-hidden border-r-4 border-emerald-100/20">
                      <img 
                        src={data.highlightManual.coverUrl} 
                        alt={data.highlightManual.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
                   </div>
                </div>

                {/* Manual Text (Right) */}
                <div className="md:col-span-3 space-y-6 order-1 md:order-2">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                     <BookOpen size={14} /> Nueva Publicación
                   </div>
                   <div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{data.highlightManual.title}</h3>
                     <p className="text-sm text-emerald-200/70 font-light">{data.highlightManual.subtitle}</p>
                   </div>
                   <p className="text-emerald-100/80 leading-relaxed">
                     {data.highlightManual.description}
                   </p>
                   <div className="pt-2 flex flex-wrap gap-4">
                     <a 
                       href={data.highlightManual.downloadUrl}
                       target="_blank"
                       rel="noopener noreferrer" 
                       className="inline-flex items-center gap-2 bg-white text-dark hover:bg-emerald-50 font-bold py-3 px-6 rounded-lg transition-all transform hover:translate-y-[-2px] shadow-lg shadow-black/20"
                     >
                       <Download size={18} /> Descargar Manual (PDF)
                     </a>
                     {data.highlightManual.webUrl && (
                       <a 
                         href={data.highlightManual.webUrl}
                         target="_blank"
                         rel="noopener noreferrer" 
                         className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition-all transform hover:translate-y-[-2px]"
                       >
                         <Globe size={18} /> Ver Sitio Web
                       </a>
                     )}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Skills & Expertise & Projects */}
          <div className="lg:col-span-1 space-y-12">
            
            {/* SKILLS */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Scroll className="text-primary" /> Áreas de Experiencia
              </h3>
              
              <div className="space-y-6">
                {/* Core Skills */}
                <div className="bg-card/50 border border-primary/20 rounded-2xl p-5 hover:border-primary/40 transition-colors">
                  <h4 className="text-primary font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <Brain size={18} /> Especialización Temática
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.filter(s => s.category === 'core').map((skill) => (
                      <span key={skill.name} className="px-3 py-1.5 bg-primary/10 text-white rounded-lg text-sm border border-primary/10 hover:bg-primary/20 transition-colors cursor-default">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Methodology Skills */}
                <div className="bg-card/50 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
                  <h4 className="text-emerald-200 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <BarChart3 size={18} /> Metodología & Análisis
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.filter(s => s.category === 'methodology').map((skill) => (
                      <span key={skill.name} className="px-3 py-1.5 bg-white/5 text-emerald-50 rounded-lg text-sm border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft/Management Skills */}
                <div className="bg-card/50 border border-accent/20 rounded-2xl p-5 hover:border-accent/40 transition-colors">
                  <h4 className="text-accent font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <Users size={18} /> Gestión Académica
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.filter(s => s.category === 'soft').map((skill) => (
                      <span key={skill.name} className="px-3 py-1.5 bg-accent/10 text-white rounded-lg text-sm border border-accent/10 hover:bg-accent/20 transition-colors cursor-default">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LANGUAGES SECTION (Retained) */}
            <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-6">
                <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                  <Globe size={18} /> Idiomas
                </h4>
                <div className="space-y-4">
                   <div className="group">
                      <div className="flex justify-between items-center text-sm mb-1.5">
                        <span className="text-emerald-50">Español</span>
                        <span className="text-xs text-emerald-200/60">Nativo</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-full group-hover:shadow-[0_0_10px_#6ee7b7] transition-shadow"></div>
                      </div>
                   </div>
                   
                   <div className="group">
                      <div className="flex justify-between items-center text-sm mb-1.5">
                        <span className="text-emerald-50">Inglés</span>
                        <span className="text-xs text-emerald-200/60">Avanzado (C1)</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[90%] group-hover:shadow-[0_0_10px_#6ee7b7] transition-shadow"></div>
                      </div>
                   </div>
                </div>
            </div>

          </div>

          {/* Right Column: Dynamic Content */}
          <div className="lg:col-span-2">
            
            {/* Custom Tabs */}
            <div className="flex gap-6 border-b border-emerald-900/50 mb-8 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('trayectoria')}
                className={`pb-4 text-sm font-bold tracking-wide transition-colors relative whitespace-nowrap ${activeTab === 'trayectoria' ? 'text-white' : 'text-emerald-200/50 hover:text-emerald-100'}`}
              >
                TRAYECTORIA
                {activeTab === 'trayectoria' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_rgba(110,231,183,0.5)]"></div>}
              </button>
              <button 
                onClick={() => setActiveTab('investigacion')}
                className={`pb-4 text-sm font-bold tracking-wide transition-colors relative whitespace-nowrap ${activeTab === 'investigacion' ? 'text-white' : 'text-emerald-200/50 hover:text-emerald-100'}`}
              >
                INVESTIGACIÓN
                {activeTab === 'investigacion' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_rgba(110,231,183,0.5)]"></div>}
              </button>
              <button 
                onClick={() => setActiveTab('educacion')}
                className={`pb-4 text-sm font-bold tracking-wide transition-colors relative whitespace-nowrap ${activeTab === 'educacion' ? 'text-white' : 'text-emerald-200/50 hover:text-emerald-100'}`}
              >
                EDUCACIÓN
                {activeTab === 'educacion' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_rgba(110,231,183,0.5)]"></div>}
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              
              {/* === TRAYECTORIA === */}
              {activeTab === 'trayectoria' && (
                <div className="space-y-10 relative pl-4 border-l border-emerald-900/50 ml-0 md:ml-4 animate-in fade-in">
                  {data.experience.map((job) => (
                    <div key={job.id} className="relative pl-8 group">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-dark border-2 border-emerald-700 group-hover:border-primary group-hover:bg-primary transition-all"></div>
                      
                      <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{job.role}</h4>
                        <span className="text-xs font-mono text-emerald-200/80 bg-emerald-900/30 px-2 py-1 rounded w-fit">{job.period}</span>
                      </div>
                      <div className="text-emerald-200/60 font-medium mb-3">{job.company}</div>
                      <p className="text-emerald-100/70 mb-4 text-sm leading-relaxed">{job.description}</p>
                      
                      {job.achievements.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-emerald-100/60">
                               <div className="min-w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5"></div>
                               {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <div className="mt-3">
                         <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded border ${
                            job.type === 'management' ? 'border-accent/20 text-accent bg-accent/5' : 
                            'border-primary/20 text-primary bg-primary/5'
                         }`}>
                           {job.type === 'management' ? 'Gestión' : 'Académico'}
                         </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* === INVESTIGACIÓN === */}
              {activeTab === 'investigacion' && (
                <div className="space-y-10 animate-in fade-in">
                  {/* Research Projects - Full Width */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <BookOpen size={20} className="text-primary" /> Proyectos FONDECYT & Otros
                    </h4>
                    <div className="grid gap-4">
                       {data.researchProjects.map((proj) => (
                         <div key={proj.id} className="bg-card/50 border border-white/5 p-4 rounded-lg hover:border-primary/30 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                               <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{proj.source}</span>
                               <span className="text-xs text-emerald-200/50">{proj.year}</span>
                            </div>
                            <h5 className="text-white font-bold mb-1">{proj.title}</h5>
                            <p className="text-sm text-emerald-100/70">Rol: {proj.role}</p>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Two Column Layout for Publications & Conferences */}
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Column 1: Publications */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FileText size={20} className="text-emerald-200/50" /> Publicaciones Científicas
                      </h4>
                      {/* Added max-height and overflow to prevent stretching */}
                      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                         {data.publications.map((pub) => (
                           <div key={pub.id} className="border-l-2 border-emerald-900/50 pl-4 py-2 hover:border-emerald-500/50 transition-colors bg-white/[0.02] rounded-r-lg">
                              <h5 className="text-emerald-50 font-medium text-sm leading-snug">{pub.title}</h5>
                              <p className="text-xs text-emerald-200/50 italic mt-1">
                                {pub.journal || "Libro/Conferencia"} — {pub.year}
                              </p>
                              <p className="text-xs text-emerald-200/40 mt-1 truncate">{pub.authors}</p>
                           </div>
                         ))}
                      </div>
                    </div>

                    {/* Column 2: Conferences */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Mic2 size={20} className="text-accent" /> Conferencias y Charlas
                      </h4>
                      {/* Added max-height to match publications if list grows */}
                      <div className="grid gap-4 max-h-[500px] overflow-y-auto pr-2">
                         {data.conferences.map((conf) => (
                           <div key={conf.id} className="bg-card/30 border border-white/5 p-4 rounded-lg hover:bg-card/50 transition-colors flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between items-start mb-2">
                                  <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold rounded uppercase tracking-wider">
                                    {conf.year}
                                  </span>
                                  <span className="text-xs text-emerald-200/40 flex items-center gap-1 text-right ml-2">
                                    <MapPin size={10} className="shrink-0" /> {conf.location}
                                  </span>
                                </div>
                                <h5 className="text-white font-bold text-sm mb-1 leading-snug">{conf.title}</h5>
                                <p className="text-xs text-emerald-200/60 mt-2">{conf.event}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* === EDUCACIÓN Y HONORES === */}
              {activeTab === 'educacion' && (
                <div className="grid md:grid-cols-2 gap-8 animate-in fade-in">
                   <div>
                      <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <GraduationCap size={20} className="text-primary" /> Formación Académica
                      </h4>
                      <div className="space-y-6">
                        {data.education.map((edu) => (
                          <div key={edu.id} className="relative">
                             <div className="text-white font-bold">{edu.degree}</div>
                             <div className="text-emerald-200/60 text-sm mb-1">{edu.institution}</div>
                             <div className="text-emerald-200/40 text-xs mb-2">{edu.year}</div>
                             <ul className="text-sm text-emerald-100/60 pl-4 list-disc marker:text-emerald-700">
                               {edu.details.map((d, i) => <li key={i}>{d}</li>)}
                             </ul>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div>
                      <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Award size={20} className="text-accent" /> Honores y Becas
                      </h4>
                      {/* Changed to scrollable list with paper styling */}
                      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        {data.honors.map((honor) => (
                          <div key={honor.id} className="border-l-2 border-accent/30 pl-4 py-2 hover:border-accent transition-colors bg-white/[0.02] rounded-r-lg group">
                             <h5 className="text-emerald-50 font-medium text-sm leading-snug group-hover:text-accent transition-colors">{honor.title}</h5>
                             <p className="text-xs text-emerald-200/50 italic mt-1">
                               {honor.institution ? `${honor.institution} — ` : ''}{honor.year}
                             </p>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="mt-20 py-12 border-t border-emerald-900/50 text-center">
           <h2 className="text-2xl font-bold text-white mb-4">¿Te interesa mi investigación?</h2>
           <p className="text-emerald-100/70 mb-8 max-w-2xl mx-auto">
             Siempre estoy disponible para colaborar en proyectos de política pública, optimización y estudios de uso del tiempo. Conversemos.
           </p>
           <a 
             href={data.personalInfo.linkedinUrl}
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#0077b5]/90 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-black/20"
           >
             <Linkedin size={20} />
             Contactar Ahora
           </a>
        </div>

      </div>

      {/* The AI Chat Widget */}
      <ChatInterface resumeData={data} />
    </div>
  );
};

export default App;