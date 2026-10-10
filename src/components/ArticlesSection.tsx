import React, { useState } from 'react';
import { ARTICLES, Article, ArticleSection } from '../data/articlesData';
import { 
  FileText, 
  Linkedin, 
  ExternalLink, 
  Sun, 
  BookOpen, 
  Check, 
  Copy, 
  Share2, 
  Battery, 
  Zap, 
  Thermometer, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Globe2 
} from 'lucide-react';

interface ArticlesSectionProps {
  lang: 'en' | 'ar';
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const article = ARTICLES[0]; // Primary featured article
  const [readingLang, setReadingLang] = useState<'ar' | 'en' | 'bilingual'>(isAr ? 'ar' : 'en');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [copiedCitation, setCopiedCitation] = useState<boolean>(false);

  const handleCopyCitation = () => {
    const citation = `Al Harbi, Aseel Talal Rajaa. (2026). "Solar Energy: A Cornerstone of a Sustainable Energy Future". LinkedIn Pulse. ${article.url}`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2500);
    });
  };

  return (
    <section id="articles" className="py-20 border-b border-white/10 bg-[#050b24] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ffd76a]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[300px] bg-[#3478ff]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ffd76a] mb-2">
              <Sun className="w-4 h-4 text-[#ffd76a]" />
              <span>{isAr ? 'قسم المقالات والأوراق العلمية' : 'Scientific Articles & Publications'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {isAr ? 'المقالات والإنتاج العلمي الموثق' : 'Published Articles & Academic Insights'}
            </h2>
            <p className="mt-3 text-base text-slate-300">
              {isAr
                ? 'مقالات علمية وأبحاث منشورة للباحثة أسيل الحربي تناقش تقنيات الطاقة الشمسية وتخزين الطاقة والهيدروجين الأخضر ومستقبل الاستدامة.'
                : 'Peer-oriented articles and scientific essays published by researcher Aseel Alharbi covering solar photovoltaics, energy storage, and green hydrogen.'}
            </p>
          </div>

          {/* Quick External Link */}
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#005f93] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-md shadow-[#0077b5]/20 shrink-0"
            >
              <Linkedin className="w-4 h-4 fill-white" />
              <span>{isAr ? 'المقال على لينكد إن' : 'View on LinkedIn'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Article Reader Card */}
        <div className="bg-[#0a1538] border border-[#3478ff]/30 hover:border-[#35dfff]/60 rounded-3xl shadow-2xl overflow-hidden transition-all">
          
          {/* Article Header Top Banner */}
          <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-[#0c1a47] via-[#09153a] to-[#0c1a47]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-[#ffd76a]/15 border border-[#ffd76a]/40 text-[#ffd76a] font-bold flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5" />
                  <span>{isAr ? 'مقال تخصصي منشور' : 'Featured Publication'}</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0077b5]/20 border border-[#0077b5]/50 text-sky-300 font-semibold flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 fill-current" />
                  <span>{isAr ? article.platformAr : article.platformEn}</span>
                </span>
              </div>

              {/* Reader Language Toggle & Citation Copy */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#050b24] p-1 rounded-xl border border-white/10 text-xs font-medium">
                  <button
                    onClick={() => setReadingLang('ar')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      readingLang === 'ar' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => setReadingLang('en')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      readingLang === 'en' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setReadingLang('bilingual')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      readingLang === 'bilingual' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                    title="عرض اللغتين معاً"
                  >
                    {isAr ? 'ثنائي اللغة' : 'Bilingual'}
                  </button>
                </div>

                <button
                  onClick={handleCopyCitation}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  title="نسخ التوثيق الأكاديمي"
                >
                  {copiedCitation ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">{isAr ? 'تم النسخ!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{isAr ? 'توثيق المقال' : 'Cite'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Article Titles */}
            <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
              {readingLang === 'en' ? article.titleEn : article.titleAr}
            </h3>
            {readingLang === 'bilingual' && (
              <h4 className="text-lg sm:text-xl font-bold text-slate-300 font-serif mb-3">
                {article.titleEn}
              </h4>
            )}
            {readingLang !== 'bilingual' && (
              <h4 className="text-sm sm:text-base font-medium text-[#ffd76a] mb-4">
                {readingLang === 'ar' ? article.titleEn : article.titleAr}
              </h4>
            )}

            {/* Author Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <span className="text-[#35dfff]">{isAr ? 'الكاتبة:' : 'Author:'}</span>
                <span>{isAr ? article.authorAr : article.authorEn}</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="text-slate-400 font-mono text-xs">
                {isAr ? article.authorTitleAr : article.authorTitleEn}
              </div>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-white/5">
              <span className="text-xs font-mono text-slate-400 ml-1">
                {isAr ? 'الكلمات المفتاحية:' : 'Keywords:'}
              </span>
              {(readingLang === 'en' ? article.keywordsEn : article.keywordsAr).map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-[#050b24] border border-white/10 text-[11px] font-mono text-[#35dfff]"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-10 space-y-10 text-slate-200">
            
            {/* Abstract Callout Box */}
            <div className="bg-[#050b24] rounded-2xl border-l-4 border-l-[#ffd76a] border border-white/10 p-6 sm:p-7 shadow-inner">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ffd76a] font-bold mb-3">
                <BookOpen className="w-4 h-4 text-[#ffd76a]" />
                <span>{readingLang === 'en' ? 'Abstract' : 'الملخص (Abstract)'}</span>
              </div>
              
              {readingLang === 'ar' && (
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {article.abstractAr}
                </p>
              )}

              {readingLang === 'en' && (
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {article.abstractEn}
                </p>
              )}

              {readingLang === 'bilingual' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                  <div className="space-y-1 text-right">
                    <span className="text-[11px] font-mono text-[#ffd76a] block">العربية</span>
                    <p className="text-sm text-slate-200 leading-relaxed">{article.abstractAr}</p>
                  </div>
                  <div className="space-y-1 text-left">
                    <span className="text-[11px] font-mono text-[#35dfff] block">English</span>
                    <p className="text-sm text-slate-200 leading-relaxed">{article.abstractEn}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sections Content */}
            <div className="space-y-10 divide-y divide-white/10">
              {article.sections.map((section) => (
                <div key={section.number} className="pt-8 first:pt-0 space-y-4">
                  {/* Section Title */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#3478ff]/15 border border-[#3478ff]/40 text-[#35dfff] font-mono font-bold flex items-center justify-center text-sm shrink-0">
                      {section.number}
                    </span>
                    <h4 className="text-lg sm:text-2xl font-bold text-white">
                      {readingLang === 'en' 
                        ? section.titleEn 
                        : readingLang === 'ar' 
                          ? section.titleAr 
                          : `${section.titleAr} | ${section.titleEn}`}
                    </h4>
                  </div>

                  {/* Section Content */}
                  {readingLang === 'ar' && (
                    <div className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {Array.isArray(section.contentAr) ? (
                        <ul className="space-y-2 mr-4 list-disc marker:text-[#ffd76a]">
                          {section.contentAr.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">{bullet}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{section.contentAr}</p>
                      )}
                    </div>
                  )}

                  {readingLang === 'en' && (
                    <div className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {Array.isArray(section.contentEn) ? (
                        <ul className="space-y-2 ml-4 list-disc marker:text-[#35dfff]">
                          {section.contentEn.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">{bullet}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{section.contentEn}</p>
                      )}
                    </div>
                  )}

                  {readingLang === 'bilingual' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="text-right bg-[#050b24]/60 p-4 rounded-xl border border-white/5">
                        <span className="text-[11px] font-mono text-[#ffd76a] block mb-2">العربية</span>
                        {Array.isArray(section.contentAr) ? (
                          <ul className="space-y-2 mr-4 list-disc marker:text-[#ffd76a]">
                            {section.contentAr.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed">{section.contentAr}</p>
                        )}
                      </div>
                      <div className="text-left bg-[#050b24]/60 p-4 rounded-xl border border-white/5">
                        <span className="text-[11px] font-mono text-[#35dfff] block mb-2">English</span>
                        {Array.isArray(section.contentEn) ? (
                          <ul className="space-y-2 ml-4 list-disc marker:text-[#35dfff]">
                            {section.contentEn.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed">{section.contentEn}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Subsections (e.g. for Challenges) */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                      {section.subsections.map((sub, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="p-4 rounded-xl bg-[#050b24] border border-white/10 hover:border-[#ffd76a]/40 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                              {sIdx === 0 && <Zap className="w-4 h-4 text-[#ffd76a]" />}
                              {sIdx === 1 && <Battery className="w-4 h-4 text-[#35dfff]" />}
                              {sIdx === 2 && <Thermometer className="w-4 h-4 text-rose-400" />}
                            </div>
                            <h5 className="text-sm font-bold text-white mb-2">
                              {readingLang === 'en' ? sub.titleEn : sub.titleAr}
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {readingLang === 'en' ? sub.contentEn : sub.contentAr}
                            </p>
                          </div>
                          {readingLang === 'bilingual' && (
                            <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400 leading-normal">
                              <span className="font-semibold text-slate-200 block mb-0.5">{sub.titleEn}</span>
                              <span>{sub.contentEn}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* References Section */}
            <div className="pt-10 border-t border-white/15">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#ffd76a]" />
                  <h4 className="text-base sm:text-lg font-bold text-white font-mono uppercase tracking-wider">
                    {isAr ? 'المراجع والمصادر العلمية (References)' : 'References & Academic Sources'}
                  </h4>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {article.references.length} {isAr ? 'مراجع معتمدة' : 'Official Sources'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {article.references.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#050b24] border border-white/10 hover:border-[#35dfff] transition-all group flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1 min-w-0">
                      <span className="text-[10px] font-mono text-[#ffd76a] block font-semibold truncate">
                        {ref.source}
                      </span>
                      <p className="text-xs font-medium text-slate-200 group-hover:text-white leading-snug">
                        {ref.title}
                      </p>
                      <span className="text-[10px] font-mono text-slate-400 truncate block group-hover:text-[#35dfff]">
                        {ref.url}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#35dfff] shrink-0 mt-1 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Article Footer CTA Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0a1538] via-[#0d1e4c] to-[#0a1538] border border-[#3478ff]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-base font-bold text-white mb-1">
                  {isAr ? 'قراءة ومشاركة المقال على منصة لينكد إن الرسمية' : 'Read & Share on Official LinkedIn Pulse'}
                </h5>
                <p className="text-xs text-slate-300">
                  {isAr 
                    ? 'يمكنك التفاعل مع المقال والمشاركة في النقاش العلمي لتقنيات الطاقة النظيفة ورؤية المملكة 2030.' 
                    : 'Engage with the article, participate in academic discourse, and explore clean tech synergies.'}
                </p>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#0077b5] hover:bg-[#005f93] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#0077b5]/30 shrink-0 whitespace-nowrap"
              >
                <Linkedin className="w-4 h-4 fill-white" />
                <span>{isAr ? 'فتح المقال في LinkedIn' : 'Open in LinkedIn'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
