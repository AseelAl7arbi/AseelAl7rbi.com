import React, { useState } from 'react';
import { ProjectItem } from '../data/personalData';
import { X, ChevronLeft, ChevronRight, BookOpen, Atom, Table, Layers, CheckCircle2, User, Calendar, GraduationCap } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: 'en' | 'ar';
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  lang,
}) => {
  if (!project) return null;
  const isAr = lang === 'ar';

  const [activeTab, setActiveTab] = useState<'overview' | 'equations' | 'labData' | 'slides'>('overview');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const slides = project.slides || [];
  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="bg-[#0a1538] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-[#070e28]">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#35dfff] mb-1.5">
              <span>{isAr ? project.academicCourseAr : project.academicCourseEn}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#ffd76a]">{isAr ? project.institutionAr : project.institutionEn}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-slate-400">{isAr ? project.dateAr : project.dateEn}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {isAr ? project.titleAr : project.titleEn}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="px-6 py-2.5 border-b border-white/10 bg-[#060c24] flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-[#3478ff] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isAr ? 'نظرة عامة والمنهجية' : 'Overview & Methodology'}</span>
          </button>

          {project.equations && project.equations.length > 0 && (
            <button
              onClick={() => setActiveTab('equations')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'equations'
                  ? 'bg-[#3478ff] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Atom className="w-3.5 h-3.5" />
              <span>{isAr ? 'المعادلات والقوانين' : 'Physical Laws & Equations'}</span>
            </button>
          )}

          {project.labData && (
            <button
              onClick={() => setActiveTab('labData')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'labData'
                  ? 'bg-[#3478ff] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>{isAr ? 'البيانات المعملية المقاسة' : 'Measured Lab Data'}</span>
            </button>
          )}

          {slides.length > 0 && (
            <button
              onClick={() => setActiveTab('slides')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'slides'
                  ? 'bg-[#3478ff] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isAr ? `شرائح العرض الأكاديمية (${slides.length} شريحة)` : `Slide Deck (${slides.length} Slides)`}</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-200">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Metadata Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.supervisorEn && (
                  <div className="bg-[#050b24] p-4 rounded-xl border border-white/5 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#ffd76a] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">{isAr ? 'الإشراف الأكاديمي' : 'Faculty Supervisor'}</span>
                      <span className="text-sm font-semibold text-white">{isAr ? project.supervisorAr : project.supervisorEn}</span>
                    </div>
                  </div>
                )}

                {project.teamEn && (
                  <div className="bg-[#050b24] p-4 rounded-xl border border-white/5 flex items-start gap-3">
                    <User className="w-5 h-5 text-[#35dfff] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">{isAr ? 'فريق العمل الأكاديمي' : 'Project Researchers'}</span>
                      <span className="text-xs font-medium text-slate-300 leading-relaxed">
                        {(isAr ? project.teamAr : project.teamEn)?.join(' · ')}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Summary Description */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono text-[#35dfff]">
                  {isAr ? 'الملخص العلمي للبحث' : 'Scientific Abstract'}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300 bg-[#050b24] p-5 rounded-xl border border-white/5">
                  {isAr ? project.summaryAr : project.summaryEn}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-mono text-[#35dfff]">
                  {isAr ? 'أهم النتائج والركائز العملية' : 'Key Findings & Pillars'}
                </h4>
                <div className="space-y-2.5">
                  {(isAr ? project.keyHighlightsAr : project.keyHighlightsEn).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#050b24] p-3.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EQUATIONS */}
          {activeTab === 'equations' && project.equations && (
            <div className="space-y-6">
              <div className="max-w-2xl text-xs text-slate-400">
                {isAr 
                  ? 'المعادلات الرياضية والفيزيائية الحاكمة المستخدمة في التحليل واستخراج النتائج المعملية:'
                  : 'Governing mathematical equations and physical relations employed in the empirical evaluation:'}
              </div>

              <div className="space-y-4">
                {project.equations.map((eq, idx) => (
                  <div key={idx} className="bg-[#050b24] p-5 rounded-xl border border-white/10">
                    <div className="text-xs font-mono uppercase text-[#ffd76a] mb-2">{eq.name}</div>
                    <div className="font-mono text-base sm:text-xl font-bold text-white bg-black/40 px-4 py-3 rounded-lg border border-white/5 overflow-x-auto mb-3 text-center">
                      {eq.formula}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {isAr ? eq.descriptionAr : eq.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: MEASURED LAB DATA */}
          {activeTab === 'labData' && project.labData && (
            <div className="space-y-6">
              <div className="text-sm text-slate-300">
                {isAr ? project.labData.descriptionAr : project.labData.descriptionEn}
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#050b24]">
                <table className="w-full text-left sm:text-sm text-xs font-mono">
                  <thead className="bg-[#081233] text-slate-300 border-b border-white/10">
                    <tr>
                      {(isAr ? project.labData.table.headersAr : project.labData.table.headersEn).map((h, i) => (
                        <th key={i} className="py-3 px-4 font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {project.labData.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2.5 px-4 whitespace-nowrap text-slate-200">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Calculated Results Strip */}
              {project.labData.calculatedResults && (
                <div className="mt-4">
                  <h4 className="text-xs font-bold text-[#35dfff] uppercase tracking-wider mb-3 font-mono">
                    {isAr ? 'القيم الفيزيائية المحسوبة' : 'Calculated Physical Parameters'}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.labData.calculatedResults.map((res, i) => (
                      <div key={i} className="bg-[#050b24] p-3.5 rounded-xl border border-white/10 text-center">
                        <span className="text-[11px] text-slate-400 block mb-1">
                          {isAr ? res.labelAr : res.labelEn}
                        </span>
                        <span className="text-sm font-mono font-bold text-[#ffd76a]">
                          {res.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: SLIDES READER */}
          {activeTab === 'slides' && slides.length > 0 && currentSlide && (
            <div className="flex flex-col space-y-4">
              {/* Slide Navigation Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-[#050b24] p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    {isAr ? 'الشريحة' : 'Slide'} <strong className="text-white text-sm">{currentSlideIndex + 1}</strong> / {slides.length}
                  </span>

                  {/* Dropdown jump selector for 49 slides */}
                  <select
                    value={currentSlideIndex}
                    onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
                    className="bg-[#0a1538] border border-white/10 text-xs font-mono text-[#35dfff] px-2.5 py-1 rounded-lg focus:outline-none focus:border-[#35dfff] max-w-[220px] sm:max-w-[320px] truncate"
                    title={isAr ? 'الانتقال المباشر لشريحة محددة' : 'Jump directly to slide'}
                  >
                    {slides.map((s, idx) => (
                      <option key={idx} value={idx} className="bg-[#050b24] text-white">
                        {isAr ? `#${s.slideNumber}: ${s.title.slice(0, 35)}...` : `#${s.slideNumber}: ${s.title.slice(0, 35)}...`}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentSlideIndex === 0}
                    onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center gap-1 text-xs"
                    title={isAr ? 'الشريحة السابقة' : 'Previous Slide'}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">{isAr ? 'السابقة' : 'Prev'}</span>
                  </button>
                  <button
                    disabled={currentSlideIndex === slides.length - 1}
                    onClick={() => setCurrentSlideIndex((prev) => Math.min(slides.length - 1, prev + 1))}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center gap-1 text-xs"
                    title={isAr ? 'الشريحة التالية' : 'Next Slide'}
                  >
                    <span className="hidden sm:inline">{isAr ? 'التالية' : 'Next'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* The Slide Canvas */}
              <div className="bg-[#060e2a] border border-white/15 rounded-2xl p-6 sm:p-10 min-h-[340px] flex flex-col justify-between shadow-2xl relative">
                <div>
                  <div className="text-xs font-mono text-[#ffd76a] uppercase tracking-wider mb-2">
                    {project.titleEn} · Slide #{currentSlide.slideNumber}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {currentSlide.title}
                  </h3>

                  {currentSlide.subtitle && (
                    <p className="text-sm font-medium text-[#35dfff] mb-6">
                      {currentSlide.subtitle}
                    </p>
                  )}

                  {currentSlide.equation && (
                    <div className="my-5 p-3.5 bg-black/50 border border-white/10 rounded-xl font-mono text-sm sm:text-base text-emerald-400 text-center">
                      {currentSlide.equation}
                    </div>
                  )}

                  {currentSlide.bullets && (
                    <ul className="space-y-3 mt-4 text-sm sm:text-base text-slate-200 list-disc list-inside">
                      {currentSlide.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  )}

                  {currentSlide.notes && (
                    <p className="text-xs text-slate-400 italic mt-6 border-t border-white/5 pt-3">
                      {currentSlide.notes}
                    </p>
                  )}
                </div>

                {/* Slide indicator dots */}
                <div className="pt-6 flex items-center justify-center gap-1.5 overflow-x-auto">
                  {slides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentSlideIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all ${
                        dotIdx === currentSlideIndex ? 'w-6 bg-[#35dfff]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#070e28] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            {project.badgeEn}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            {isAr ? 'إغلاق النافذة' : 'Close Inspector'}
          </button>
        </div>
      </div>
    </div>
  );
};
