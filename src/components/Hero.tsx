import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/personalData';
import { Award, ArrowDown, ExternalLink, ShieldCheck, Zap, Battery, Flame, Sun, Linkedin, FileText, BookOpen } from 'lucide-react';
import { AseelLogo } from './AseelLogo';

interface HeroProps {
  lang: 'en' | 'ar';
  onOpenCard: () => void;
  onOpenProject: (id: string) => void;
  onOpenLogo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCard, onOpenProject, onOpenLogo }) => {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'solar' | 'neom' | 'battery' | 'electrolysis' | 'hall' | 'sce' | 'article'>('neom');

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-white/10 bg-radial from-[#0a1538]/80 via-[#050b24] to-[#050b24] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3478ff]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[300px] bg-[#35dfff]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-screen Hero (Left: Typography & CTAs, Right: Authentic Visual Lab & Badge Stage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed metadata without pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#35dfff] mb-4">
              <span>{isAr ? 'جامعة طيبة — كلية العلوم' : 'Taibah University — College of Science'}</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>{isAr ? 'قسم الفيزياء وتقنيات الطاقة' : 'Physics & Energy Technologies'}</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="text-[#ffd76a] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isAr ? 'عضو الهيئة السعودية للمهندسين' : 'SCE Member #1297373'}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight lg:leading-[1.15] mb-5 [text-wrap:balance]">
              {isAr ? PERSONAL_INFO.nameAr : PERSONAL_INFO.nameEn}
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-[#ffd76a] mb-6">
              {isAr ? PERSONAL_INFO.titleAr : PERSONAL_INFO.titleEn}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {isAr ? PERSONAL_INFO.bioAr : PERSONAL_INFO.bioEn}
            </p>

            {/* Editorial focus domain tags - clean unboxed typography */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-400 mb-9">
              <span className="text-slate-200 font-medium">{isAr ? 'مجالات التركيز:' : 'Focus Domains:'}</span>
              <span className="text-white font-medium">{isAr ? 'الطاقة الشمسية' : 'Solar Photovoltaics'}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-white font-medium">{isAr ? 'الهيدروجين الأخضر' : 'Green Hydrogen'}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-white font-medium">{isAr ? 'فحم نوى التمر والبطاريات' : 'Biochar Batteries'}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-white font-medium">{isAr ? 'تخزين الطاقة' : 'Energy Storage'}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-white font-medium">{isAr ? 'الاندماج النووي' : 'Nuclear Fusion'}</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-[#3478ff] hover:bg-[#2563eb] rounded-xl transition-all shadow-md shadow-[#3478ff]/30 flex items-center gap-2 group whitespace-nowrap shrink-0"
              >
                <span>{isAr ? 'استكشف مشاريعي وأبحاثي' : 'Explore My Projects & Labs'}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenCard}
                className="px-5 py-3 text-sm font-semibold text-[#35dfff] bg-[#0a1538] hover:bg-[#10204e] border border-[#3478ff]/40 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Award className="w-4 h-4 text-[#ffd76a]" />
                <span>{isAr ? 'بطاقة عضوية المهندسين (SCE)' : 'Verify SCE Membership'}</span>
              </button>

              <a
                href="#cv"
                className="px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                {isAr ? 'السيرة الذاتية الأكاديمية' : 'View Full Academic CV'}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Stage with Aseel's Logo Emblem & Authentic Document Quick-View */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-[#0a1538] rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
              
              {/* Top Banner: Logo & Emblem */}
              <div className="relative z-10 pb-6 border-b border-white/10 flex items-center justify-between">
                <div 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={onOpenLogo}
                  title={isAr ? 'انقر لمعاينة الشعار الرسمي بكامل أبعاده' : 'Click to view full official logo'}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#050b24] border border-[#3478ff]/40 flex items-center justify-center p-1.5 shadow-inner group-hover:scale-105 group-hover:border-[#35dfff] transition-all">
                    <AseelLogo className="w-full h-full" showText={false} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-bold text-white tracking-wide group-hover:text-[#35dfff] transition-colors">
                        {isAr ? 'أسيل الحربي' : 'Aseel Alharbi'}
                      </h3>
                      <span className="text-[10px] font-mono text-[#ffd76a] bg-[#ffd76a]/10 px-1.5 py-0.2 rounded border border-[#ffd76a]/25">
                        {isAr ? 'الشعار المعتمد' : 'Official Emblem'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {isAr ? 'طالبة فيزياء وتقنيات الطاقة · جامعة طيبة' : 'Physics & Energy Tech · Taibah U'}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-[#ffd76a] block">
                    ID: {PERSONAL_INFO.studentId}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {PERSONAL_INFO.expectedGraduationEn}
                  </span>
                </div>
              </div>

              {/* Middle Interactive Document Preview Selector */}
              <div className="py-5 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 p-1 bg-[#050b24] rounded-lg mb-4 border border-white/5 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('neom')}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                      activeTab === 'neom' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isAr ? 'ورشة نيوم والهيدروجين' : 'NEOM Hydrogen'}
                  </button>
                  <button
                    onClick={() => setActiveTab('article')}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                      activeTab === 'article' ? 'bg-[#0077b5] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isAr ? 'مقال الطاقة الشمسية' : 'Solar Article'}
                  </button>
                  <button
                    onClick={() => setActiveTab('solar')}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                      activeTab === 'solar' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isAr ? 'الخلايا المطبوعة 455' : 'Printed Solar'}
                  </button>
                  <button
                    onClick={() => setActiveTab('sce')}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                      activeTab === 'sce' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isAr ? 'عضوية المهندسين' : 'SCE Card'}
                  </button>
                  <button
                    onClick={() => setActiveTab('battery')}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                      activeTab === 'battery' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isAr ? 'فحم نوى التمر' : 'Biochar'}
                  </button>
                  <button
                    onClick={() => setActiveTab('hall')}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                      activeTab === 'hall' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isAr ? 'تأثير هول F2' : 'Hall Effect'}
                  </button>
                </div>

                {/* Tab Previews */}
                <div className="bg-[#050b24]/90 rounded-xl p-4 border border-white/10 min-h-[190px] flex flex-col justify-between">
                  {activeTab === 'neom' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#ffd76a] flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5" />
                          <span>{isAr ? 'أ.د. أحمد أبوضيف · جامعة طيبة' : 'Prof. Dr. Ahmed Abu-Dief'}</span>
                        </span>
                        <span className="text-[11px] font-mono text-[#35dfff]">49 {isAr ? 'شريحة' : 'Slides'}</span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">
                        {isAr ? 'ورشة اقتصاد الهيدروجين الأخضر ومشاريع المملكة (نيوم وأكوا باور)' : 'Green Hydrogen Workshop & NEOM Project'}
                      </p>
                      <p className="text-xs text-slate-300 line-clamp-2 mb-2">
                        {isAr ? 'دراسة تقنيات التحليل الكهربائي الأربع، ومحفزات النانو، وأكبر مجمع لإنتاج الهيدروجين في العالم بنيوم (2 GW، 600 طن/يوم).' : 'Comprehensive 11-axes workshop on electrolysis, nanomaterial catalysts, and the 2 GW NEOM NGHC 600 t/d facility.'}
                      </p>
                      <div className="text-[11px] font-mono text-slate-400 bg-black/40 p-1.5 rounded mb-2">
                        NEOM NGHC (2 GW) · ACWA Power · 600 t/d H₂
                      </div>
                      <button
                        onClick={() => onOpenProject('green-hydrogen-saudi')}
                        className="w-full py-1.5 px-3 text-xs font-semibold rounded-lg bg-[#3478ff]/20 hover:bg-[#3478ff]/30 text-[#35dfff] border border-[#3478ff]/40 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{isAr ? 'تصفح محاور الورشة والشرائح الـ 49' : 'Open 49-Slide Workshop Deck'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {activeTab === 'article' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#ffd76a] flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5 text-[#ffd76a]" />
                          <span>{isAr ? 'مقال علمي منشور على لينكد إن' : 'LinkedIn Pulse Publication'}</span>
                        </span>
                        <span className="text-[11px] font-mono text-[#35dfff] flex items-center gap-1">
                          <Linkedin className="w-3.5 h-3.5 fill-current" />
                          <span>Pulse</span>
                        </span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">
                        {isAr ? PERSONAL_INFO.solarArticle.titleAr : PERSONAL_INFO.solarArticle.titleEn}
                      </p>
                      <p className="text-xs text-slate-300 line-clamp-2 mb-2">
                        {isAr ? PERSONAL_INFO.solarArticle.summaryAr : PERSONAL_INFO.solarArticle.summaryEn}
                      </p>
                      <div className="text-[11px] font-mono text-slate-400 bg-black/40 p-1.5 rounded mb-2">
                        {isAr ? 'الأنظمة الكهروضوئية · السعودية الخضراء · كفاءة الطاقة' : 'Photovoltaics · Saudi Green Initiative · Efficiency'}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <a
                          href="#articles"
                          className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-[#3478ff] hover:bg-[#2563eb] text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{isAr ? 'قراءة المقال في الموقع' : 'Read Article on Site'}</span>
                        </a>
                        <a
                          href={PERSONAL_INFO.solarArticle.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-3 text-xs font-semibold rounded-lg bg-[#0077b5] hover:bg-[#005582] text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                        >
                          <Linkedin className="w-3.5 h-3.5 fill-white" />
                          <span>{isAr ? 'LinkedIn' : 'LinkedIn'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  {activeTab === 'solar' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#35dfff] flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          <span>PHTE 455 · Dr. Maha Jibreel</span>
                        </span>
                        <span className="text-[11px] font-mono text-[#ffd76a]">22 Slides</span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">
                        {isAr ? 'الخلايا الشمسية المطبوعة (Printed Solar Cells)' : 'Printed Solar Cells: Future of Solar Energy'}
                      </p>
                      <p className="text-xs text-slate-300 line-clamp-2 mb-2">
                        {isAr ? 'ترسيب الأحبار الإلكترونية شبه الموصلة (البيروفسكايت والبوليمرات والغرافين) على ركائز مرنة بتقنية Roll-to-Roll.' : 'Semiconductor electronic inks printed on flexible substrates via Roll-to-Roll, Perovskites & tandem >30% efficiency.'}
                      </p>
                      <div className="text-[11px] font-mono text-slate-400 bg-black/40 p-1.5 rounded mb-2">
                        Roll-to-Roll · Perovskites · BIPV Facades
                      </div>
                      <button
                        onClick={() => onOpenProject('printed-solar-cells')}
                        className="w-full py-1.5 px-3 text-xs font-semibold rounded-lg bg-[#3478ff]/20 hover:bg-[#3478ff]/30 text-[#35dfff] border border-[#3478ff]/40 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{isAr ? 'تصفح العرض الكامل (22 شريحة والمقارنة)' : 'View 22-Slide Deck & Analysis'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {activeTab === 'sce' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#ffd76a] flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{isAr ? 'الهيئة السعودية للمهندسين' : 'Saudi Council of Engineers'}</span>
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">#1297373</span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">
                        ASEEL TALAL BIN RAJAA ALHARBI
                      </p>
                      <p className="text-xs text-slate-300 mb-3">
                        {isAr ? 'التصنيف: طالب | سارية حتى: 1449-04-26 (2027)' : 'Classification: Student | Valid: 2027-09-27'}
                      </p>
                      <button
                        onClick={onOpenCard}
                        className="w-full mt-2 py-2 px-3 text-xs font-semibold rounded-lg bg-[#3478ff]/20 hover:bg-[#3478ff]/30 text-[#35dfff] border border-[#3478ff]/40 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{isAr ? 'عرض بطاقة الاعتماد الرسمية' : 'View Official Digital Membership'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {activeTab === 'battery' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#35dfff] flex items-center gap-1">
                          <Battery className="w-3.5 h-3.5" />
                          <span>{isAr ? 'أبحاث تخزين الطاقة' : 'Battery Innovation'}</span>
                        </span>
                        <span className="text-[11px] font-mono text-[#ffd76a]">0.17 V</span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">
                        {isAr ? 'استخلاص الفحم الحيوي من نوى التمر' : 'Date-Seed Biochar in Carbon-Zinc D Cell'}
                      </p>
                      <p className="text-xs text-slate-300 line-clamp-3 mb-3">
                        {isAr ? 'تفكيك بطارية الكربون-زنك وإضافة الفحم الحيوي المستخلص من نوى التمر للكاثود لدراسة الأداء الكهربائي.' : 'Dismantling Carbon-Zinc D battery and blending date-seed biochar with MnO2 cathode paste.'}
                      </p>
                      <button
                        onClick={() => onOpenProject('biochar-battery')}
                        className="w-full mt-2 py-2 px-3 text-xs font-semibold rounded-lg bg-[#3478ff]/20 hover:bg-[#3478ff]/30 text-[#35dfff] border border-[#3478ff]/40 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{isAr ? 'فتح تفاصيل التجربة والنتائج' : 'Open Experiment & Lab Results'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {activeTab === 'electrolysis' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#35dfff] flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5" />
                          <span>CHEM 243 Electrochemistry</span>
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400">2:1 Ratio</span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">
                        {isAr ? 'التحليل الكهربائي للماء وإنتاج الهيدروجين' : 'Water Electrolysis & Green Hydrogen'}
                      </p>
                      <p className="text-xs text-slate-300 mb-2">
                        {isAr ? 'إشراف: د. خديجة عمران — قسم الفيزياء بجامعة طيبة' : 'Supervisor: Dr. Khadijah Emran — Taibah University'}
                      </p>
                      <div className="text-[11px] font-mono text-slate-400 bg-black/40 p-1.5 rounded mb-2">
                        2H₂O(l) → 2H₂(g) + O₂(g)
                      </div>
                      <button
                        onClick={() => onOpenProject('water-electrolysis')}
                        className="w-full py-1.5 px-3 text-xs font-semibold rounded-lg bg-[#3478ff]/20 hover:bg-[#3478ff]/30 text-[#35dfff] border border-[#3478ff]/40 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{isAr ? 'تصفح العرض الكامل (15 شريحة)' : 'View 15-Slide Presentation'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {activeTab === 'hall' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#ffd76a] flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5" />
                          <span>Electrical Lab F2</span>
                        </span>
                        <span className="text-[11px] font-mono text-[#35dfff]">n-type</span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">
                        {isAr ? 'تجربة تأثير هول (Hall Effect)' : 'Hall Effect & Carrier Mobility'}
                      </p>
                      <p className="text-xs text-slate-300 mb-2">
                        {isAr ? 'أسيل الحربي وهند العمري — جامعة طيبة' : 'Aseel Alharbi & Hind Alamri — Taibah University'}
                      </p>
                      <div className="text-[11px] font-mono text-slate-400 bg-black/40 p-1.5 rounded mb-2">
                        R_H ≈ 3.5×10⁻⁴ m³/C · μ ≈ 0.0175 m²/(V·s)
                      </div>
                      <button
                        onClick={() => onOpenProject('hall-effect')}
                        className="w-full py-1.5 px-3 text-xs font-semibold rounded-lg bg-[#3478ff]/20 hover:bg-[#3478ff]/30 text-[#35dfff] border border-[#3478ff]/40 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{isAr ? 'عرض جدول القياسات والحسابات' : 'Inspect Lab Data Table'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Quick Affiliations */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="truncate">
                  {isAr ? 'مركز أبحاث الطاقة والصناعة' : 'Taibah U Energy Research Center'}
                </span>
                <span className="text-[#35dfff] font-mono whitespace-nowrap">
                  Al Madinah
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI strip below the split (strictly conforming to Design Rule 13) */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0a1538]/60 p-5 rounded-xl border border-white/5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              {isAr ? 'المشاريع والأبحاث المعملية' : 'Research & Laboratory Works'}
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tabular-nums">
              10+ <span className="text-xs font-sans text-slate-400 font-normal">{isAr ? 'أبحاث وتجارب' : 'Projects'}</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {isAr ? 'طاقة شمسية، هيدروجين، بطاريات، اندماج نووي' : 'Solar, Hydrogen, Biochar, Fusion & Labs'}
            </p>
          </div>

          <div className="bg-[#0a1538]/60 p-5 rounded-xl border border-white/5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              {isAr ? 'عضوية هيئة المهندسين' : 'SCE Professional Membership'}
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#ffd76a] tabular-nums">
              1297373
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {isAr ? 'عضوية معتمدة سارية حتى 2027م' : 'Verified Student Member through 2027'}
            </p>
          </div>

          <div className="bg-[#0a1538]/60 p-5 rounded-xl border border-white/5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              {isAr ? 'النسبة الحجمية لتحليل الماء' : 'Electrolysis Stoichiometry'}
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#35dfff] tabular-nums">
              2 : 1 <span className="text-xs font-sans text-slate-400 font-normal">H₂ : O₂</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {isAr ? 'تفكيك جزيئات الماء بنسبة حجمية دقيقة' : 'Decomposing 2H₂O → 2H₂ + O₂'}
            </p>
          </div>

          <div className="bg-[#0a1538]/60 p-5 rounded-xl border border-white/5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              {isAr ? 'طاقة اندماج الديوتيريوم والتريتيوم' : 'D-T Thermonuclear Fusion'}
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tabular-nums">
              17.6 <span className="text-xs font-mono text-slate-400">MeV</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {isAr ? 'طاقة تفاعل الاندماج الواحد (Power of Stars)' : 'Per single reaction event (E = mc²)'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
