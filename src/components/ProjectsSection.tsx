import React, { useState, useMemo } from 'react';
import { PROJECTS, ProjectItem } from '../data/personalData';
import { Search, BookOpen, Layers, ArrowRight, Atom, Battery, Zap, Wind } from 'lucide-react';

interface ProjectsSectionProps {
  lang: 'en' | 'ar';
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, onSelectProject }) => {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        proj.titleEn.toLowerCase().includes(q) ||
        proj.titleAr.toLowerCase().includes(q) ||
        proj.summaryEn.toLowerCase().includes(q) ||
        proj.summaryAr.toLowerCase().includes(q) ||
        proj.academicCourseEn.toLowerCase().includes(q) ||
        proj.academicCourseAr.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories = [
    { id: 'all', labelEn: 'All Projects & Labs', labelAr: 'جميع المشاريع والتجارب', count: PROJECTS.length },
    { id: 'energy', labelEn: 'Clean Energy & Hydrogen', labelAr: 'طاقة نظيفة وهيدروجين', count: PROJECTS.filter(p => p.category === 'energy').length },
    { id: 'battery', labelEn: 'Battery & Biochar', labelAr: 'البطاريات والفحم الحيوي', count: PROJECTS.filter(p => p.category === 'battery').length },
    { id: 'physics', labelEn: 'Physics & Experimental Labs', labelAr: 'الفيزياء والتجارب المعملية', count: PROJECTS.filter(p => p.category === 'physics').length },
    { id: 'thermo', labelEn: 'Thermodynamics & Turbines', labelAr: 'الديناميكا والتوربينات', count: PROJECTS.filter(p => p.category === 'thermo').length },
  ];

  return (
    <section id="projects" className="py-20 border-b border-white/10 bg-[#050b24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#35dfff] mb-2">
            {isAr ? 'أبحاث ومعامل قسم الفيزياء وتقنيات الطاقة' : 'Physics & Energy Technologies Research & Labs'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {isAr ? 'المشاريع الأكاديمية والتجارب المعملية' : 'Academic Projects & Laboratory Investigations'}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {isAr 
              ? 'مجموعة متكاملة من الأبحاث والتجارب العملية المقاسة فعلياً في معامل جامعة طيبة، تشمل التوصيف الكهروضوئي، تفكيك البطاريات وتوظيف فحم نوى التمر، التحليل الكهربائي، قياس تأثير هول، ودراسة الاندماج النووي.'
              : 'A rigorous collection of experimental and theoretical works conducted in Taibah University laboratories, spanning semiconductor Hall characterization, date-seed biochar cathodes, water splitting kinetics, and fusion energetics.'}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Functional Button Segmented Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0a1538] rounded-xl border border-white/10 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#3478ff] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{isAr ? cat.labelAr : cat.labelEn}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في المشاريع والتجارب...' : 'Search projects & experiments...'}
              className="w-full bg-[#0a1538] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#35dfff] transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0a1538] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-[#3478ff]/50 transition-all duration-200 group shadow-lg"
            >
              <div>
                {/* Clean unboxed metadata kicker */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 gap-2">
                  <span className="truncate max-w-[240px] text-[#35dfff] font-mono" title={isAr ? project.academicCourseAr : project.academicCourseEn}>
                    {isAr ? project.academicCourseAr : project.academicCourseEn}
                  </span>
                  <span className="text-[11px] font-mono text-[#ffd76a] shrink-0">
                    {isAr ? project.badgeAr : project.badgeEn}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#35dfff] transition-colors mb-3 leading-snug">
                  {isAr ? project.titleAr : project.titleEn}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {isAr ? project.summaryAr : project.summaryEn}
                </p>

                {/* Supervisor or Highlights Indicator */}
                {project.supervisorEn && (
                  <div className="text-xs text-slate-400 mb-4 bg-[#050b24] p-2 rounded-lg border border-white/5">
                    <span className="text-slate-300 font-medium">{isAr ? 'إشراف: ' : 'Supervisor: '}</span>
                    <span>{isAr ? project.supervisorAr : project.supervisorEn}</span>
                  </div>
                )}

                {/* Equations / Data Badges indicator if present */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {project.labData && (
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                      {isAr ? 'بيانات معملية مقاسة' : 'Measured Lab Data'}
                    </span>
                  )}
                  {project.slides && (
                    <span className="text-[11px] font-mono text-[#35dfff] bg-[#35dfff]/10 border border-[#35dfff]/30 px-2 py-0.5 rounded flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{project.slides.length} {isAr ? 'شرائح عرض' : 'Slides'}</span>
                    </span>
                  )}
                  {project.equations && project.equations.length > 0 && (
                    <span className="text-[11px] font-mono text-[#ffd76a] bg-[#ffd76a]/10 border border-[#ffd76a]/30 px-2 py-0.5 rounded">
                      {isAr ? 'معادلات فيزيائية' : 'Physical Laws'}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectProject(project)}
                className="w-full mt-auto py-2.5 px-4 rounded-xl bg-[#3478ff]/15 hover:bg-[#3478ff] text-[#35dfff] hover:text-white border border-[#3478ff]/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>{isAr ? 'فتح التفاصيل والبيانات الكاملة' : 'View Full Details & Data'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center bg-[#0a1538] rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm">
              {isAr ? 'لم يتم العثور على مشاريع مطابقة للبحث.' : 'No projects matched your search criteria.'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs text-[#35dfff] underline underline-offset-4"
            >
              {isAr ? 'إعادة ضبط التصفية' : 'Reset filters'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
