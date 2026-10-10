import React from 'react';
import { PERSONAL_INFO } from '../data/personalData';
import { ShieldCheck, Award, Building, Sparkles, ExternalLink, Compass, Zap, CheckCircle2, Sun, BookOpen, Linkedin } from 'lucide-react';

interface CredentialsProps {
  lang: 'en' | 'ar';
  onOpenCard: () => void;
  onOpenProject?: (id: string) => void;
}

export const CredentialsSection: React.FC<CredentialsProps> = ({ lang, onOpenCard, onOpenProject }) => {
  const isAr = lang === 'ar';
  const sce = PERSONAL_INFO.sceMembership;

  return (
    <section id="credentials" className="py-20 border-b border-white/10 bg-[#050b24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#35dfff] mb-2">
            {isAr ? 'العضويات والشهادات والمشاركات المعتمدة' : 'Verified Credentials, Certificates & Affiliations'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {isAr ? 'قسم الشهادات والعضويات المهنية' : 'Certifications & Professional Credentials'}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {isAr
              ? 'وثائق العضوية الرسمية والشهادات الأكاديمية والورش التخصصية المعتمدة لأسيل طلال الحربي لدى الهيئة السعودية للمهندسين وجامعة طيبة والمراكز البحثية.'
              : 'Official verified membership documents, certified workshops, and institutional credentials of Aseel Talal Alharbi.'}
          </p>
        </div>

        {/* Featured SCE Credential Banner */}
        <div className="bg-gradient-to-r from-[#0a1538] via-[#0e1d4d] to-[#0a1538] border border-[#3478ff]/40 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ffd76a] uppercase tracking-wider font-mono">
                <ShieldCheck className="w-4 h-4 text-[#ffd76a]" />
                <span>{isAr ? 'عضوية مهنية موثقة — الهيئة السعودية للمهندسين' : 'Official Professional Membership — SCE'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {isAr ? sce.authorityAr : sce.authorityEn}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? `عضوية طالب معتمدة برقم رسمي (${sce.memberNo}) صادرة لأسيل طلال بن رجاء الحربي، سارية المفعول حتى ${sce.validDateAr}هـ (${sce.validDateEn}م).`
                  : `Certified Student Member (No. ${sce.memberNo}) issued to ASEEL TALAL BIN RAJAA ALHARBI, valid through ${sce.validDateEn}.`}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-300">
                <span className="bg-[#050b24] px-3 py-1.5 rounded-lg border border-white/10">
                  {isAr ? 'التصنيف: طالب' : 'Status: Student'}
                </span>
                <span className="bg-[#050b24] px-3 py-1.5 rounded-lg border border-white/10">
                  {isAr ? `تاريخ الانتهاء: ${sce.validDateAr}` : `Expires: ${sce.validDateEn}`}
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {isAr ? sce.statusAr : sce.statusEn}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenCard}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#3478ff] hover:bg-[#2563eb] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3478ff]/30"
              >
                <Award className="w-4 h-4 text-[#ffd76a]" />
                <span>{isAr ? 'معاينة بطاقة الاعتماد الرقمية' : 'View Verified Digital Card'}</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>
        </div>

        {/* Featured Certificate Card: Green Hydrogen Workshop */}
        <div className="bg-[#08133a] border border-[#35dfff]/40 rounded-2xl p-6 sm:p-8 mb-10 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase text-[#35dfff]">
                <span className="flex items-center gap-1 text-[#ffd76a] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{isAr ? 'شهادة حضور ورشة عمل تخصصية معتمدة' : 'Certified Specialized Workshop Attendance'}</span>
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span>{isAr ? 'جامعة طيبة — تكنولوجيا الطاقة النظيفة' : 'Taibah University Clean Energy Series'}</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-[#35dfff] font-mono">49 {isAr ? 'شريحة تخصصية' : 'Slides'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {isAr 
                  ? 'ورشة عمل: الهيدروجين الأخضر — تكنولوجيا الطاقة النظيفة من المختبر إلى الصناعة (نيوم وأكوا باور)'
                  : 'Workshop: Green Hydrogen — Clean Energy Technology from Lab to Industry (NEOM & ACWA Power)'}
              </h3>

              <div className="text-sm font-medium text-slate-300">
                <span className="text-[#ffd76a] font-semibold">{isAr ? 'مقدم الورشة: ' : 'Workshop Instructor: '}</span>
                <span>{isAr ? 'أ.د. أحمد محمد أبوضيف محمد (جامعة طيبة)' : 'Prof. Dr. Ahmed Mohamed Abu-Dief Mohamed (Taibah University)'}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                {isAr 
                  ? 'حضور ودراسة متقدمة شملت 11 محوراً تخصصياً: ألوان الهيدروجين، تكامل الطاقة الشمسية وطاقة الرياح، تقنيات المحللات (Alkaline, PEM, AEM, SOEC)، تفاعلات HER/OER ومحفزات النانو، النقل وتخزين الأمونيا الخضراء، وتفاصيل أضخم مشروع هيدروجين أخضر في العالم: مشروع نيوم (NGHC) في أوكساجون بقدرة 2 جيجاواط وإنتاج 600 طن يومياً بتحالف نيوم وأكوا باور وشركة Air Products.'
                  : 'Certified attendance covering 11 critical axes: hydrogen color taxonomy, solar & wind integration, electrolyzer architectures (Alkaline, PEM, AEM, SOEC), HER/OER electrocatalysts, green ammonia maritime transport, and deep case study of the 2 GW NEOM Green Hydrogen Facility (NGHC) in Oxagon producing 600 tons/day in partnership with ACWA Power and Air Products.'}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-slate-400">
                <span className="bg-[#050b24] px-2.5 py-1 rounded-md border border-white/5 text-[#35dfff]">
                  NEOM NGHC (2 GW / 600 t/d)
                </span>
                <span className="bg-[#050b24] px-2.5 py-1 rounded-md border border-white/5 text-[#ffd76a]">
                  ACWA Power & Air Products
                </span>
                <span className="bg-[#050b24] px-2.5 py-1 rounded-md border border-white/5 text-emerald-400">
                  HER / OER Electrocatalysts
                </span>
                <span className="bg-[#050b24] px-2.5 py-1 rounded-md border border-white/5 text-slate-300">
                  Green Ammonia NH₃
                </span>
              </div>
            </div>

            {onOpenProject && (
              <div className="shrink-0 w-full lg:w-auto">
                <button
                  onClick={() => onOpenProject('green-hydrogen-saudi')}
                  className="w-full lg:w-auto px-5 py-3 rounded-xl bg-[#3478ff] hover:bg-[#2563eb] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-[#3478ff]/30 whitespace-nowrap"
                >
                  <Zap className="w-4 h-4 text-[#ffd76a]" />
                  <span>{isAr ? 'عرض العرض الكامل ومحاور الورشة (49 شريحة)' : 'View Full 49-Slide Deck & Details'}</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured Scientific Publication Banner: Solar Energy Article on LinkedIn */}
        {PERSONAL_INFO.solarArticle && (
          <div className="bg-gradient-to-r from-[#0d1e4c] via-[#0b173d] to-[#07112c] border border-[#ffd76a]/40 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider font-mono">
                  <span className="text-[#ffd76a] flex items-center gap-1.5 bg-[#ffd76a]/10 px-2.5 py-1 rounded-lg border border-[#ffd76a]/30">
                    <Sun className="w-3.5 h-3.5 text-[#ffd76a]" />
                    <span>{isAr ? 'مقال علمي منشور — منصة لينكد إن Pulse' : 'Published Article — LinkedIn Pulse'}</span>
                  </span>
                  <span className="text-[#35dfff] flex items-center gap-1 bg-[#35dfff]/10 px-2.5 py-1 rounded-lg border border-[#35dfff]/30">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>{isAr ? 'نشر موثق' : 'Verified Publication'}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>{isAr ? PERSONAL_INFO.solarArticle.titleAr : PERSONAL_INFO.solarArticle.titleEn}</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 font-mono">
                  {isAr 
                    ? `بقلم: ${PERSONAL_INFO.solarArticle.authorAr} · طالبة فيزياء وتقنيات الطاقة بجامعة طيبة` 
                    : `By: ${PERSONAL_INFO.solarArticle.authorEn} · Physics & Energy Technologies Student at Taibah University`}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {isAr ? PERSONAL_INFO.solarArticle.summaryAr : PERSONAL_INFO.solarArticle.summaryEn}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
                  <span className="bg-[#050b24] px-2.5 py-1 rounded-md border border-white/5 text-[#35dfff]">
                    Photovoltaic Systems (PV)
                  </span>
                  <span className="bg-[#050b24] px-2.5 py-1 rounded-md border border-white/5 text-[#ffd76a]">
                    {isAr ? 'مبادرة السعودية الخضراء' : 'Saudi Green Initiative'}
                  </span>
                  <span className="bg-[#050b24] px-2.5 py-1 rounded-md border border-white/5 text-emerald-400">
                    {isAr ? 'رؤية 2030 للاستدامة' : 'Vision 2030 Sustainability'}
                  </span>
                  <span className="bg-[#050b24] px-2.5 py-1 rounded-md border border-white/5 text-slate-300">
                    {isAr ? 'كفاءة الخلايا وتخزين الطاقة' : 'Cell Efficiency & Energy Storage'}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3">
                <a
                  href={PERSONAL_INFO.solarArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto lg:w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#0077b5] to-[#0a66c2] hover:from-[#0a66c2] hover:to-[#004182] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0077b5]/30 group-hover:scale-[1.01]"
                >
                  <Linkedin className="w-4 h-4 fill-white shrink-0" />
                  <span>{isAr ? 'قراءة المقال بالكامل على LinkedIn' : 'Read Article on LinkedIn'}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>

                <span className="text-[11px] font-mono text-slate-400 text-center lg:text-left">
                  {isAr ? 'منشور رسمي للباحثة أسيل الحربي' : 'Official Publication by Aseel Harbi'}
                </span>
              </div>

            </div>
          </div>
        )}

        {/* 3 Grid Cards of Institutional Affiliations & Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Taibah Research Centers Attendance */}
          <div className="bg-[#0a1538] rounded-2xl border border-[#35dfff]/40 p-6 flex flex-col justify-between hover:border-[#35dfff] transition-colors shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#050b24] border border-white/10 flex items-center justify-center text-[#35dfff]">
                  <Building className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{isAr ? 'حضور موثق' : 'Verified Attendance'}</span>
                </span>
              </div>

              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                {isAr ? 'جامعة طيبة · وكالة الجامعة للدراسات العليا والبحث العلمي' : 'Taibah University · Research Centers'}
              </span>

              <h4 className="text-base font-bold text-white mb-2 leading-snug">
                {isAr 
                  ? 'حضور ومشاركة: مركز أبحاث الطاقة والصناعة والتقنيات الحديثة' 
                  : 'Certified Attendance: Center for Energy, Industry & Advanced Technologies Research'}
              </h4>

              <div className="text-xs text-[#ffd76a] font-medium mb-2.5 font-mono">
                {isAr ? '(نافذة الجامعة نحو مستقبل الطاقة)' : '(The University’s Window Towards the Future of Energy)'}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {isAr 
                  ? '«حيث يلتقي الإبداع بالابتكار وتتجسد الأفكار في أبحاث رائدة تقود المستقبل». حضور البرامج العلمية للمراكز البحثية بجامعة طيبة والاطلاع على أحدث أجهزة ومعامل الطاقة والتقنيات الحديثة.' 
                  : 'Official attendance and engagement in university research center programs: clean energy innovations, photovoltaic characterization rigs, and advanced technologies.'}
              </p>

              <div className="text-[11px] font-mono text-slate-400 bg-[#050b24] p-2 rounded-lg border border-white/5 mb-2">
                <span>{isAr ? 'التواصل: ' : 'Contact: '}</span>
                <span className="text-[#35dfff]">eitcenter@taibahu.edu.sa</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-[#35dfff] font-mono flex items-center justify-between">
              <span>{isAr ? 'حضور رسمي وباحثة طالبة' : 'Verified Attendance & Student Researcher'}</span>
              <span className="text-slate-400">Taibah U</span>
            </div>
          </div>

          {/* Card 2: Industrial Pioneers Club */}
          <div className="bg-[#0a1538] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-[#35dfff]/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#050b24] border border-white/10 flex items-center justify-center mb-4 text-[#ffd76a]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                {isAr ? 'جامعة طيبة · الأنشطة الطلابية' : 'Taibah University · Innovation Team'}
              </span>
              <h4 className="text-base font-bold text-white mb-2 leading-snug">
                {isAr 
                  ? 'نادي رواد الصناعة — فريق الابتكار والمشاريع' 
                  : 'Industrial Pioneers Club — Innovation & Projects Team'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {isAr 
                  ? 'عضو رسمي تم قبوله في فريق الابتكار والمشاريع بالنادي لصناعة حلول هندسية وتطبيقية مبتكرة والمساهمة في بناء مشاريع مستدامة ذات أثر.' 
                  : 'Officially accepted member of the Innovation & Projects Team at Taibah University, engineering high-impact industrial solutions.'}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs text-[#ffd76a] font-mono">
              {isAr ? 'عضو فريق الابتكار والمشاريع' : 'Innovation & Projects Member'}
            </div>
          </div>

          {/* Card 3: Madinah Astronomical Society */}
          <div className="bg-[#0a1538] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-[#35dfff]/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#050b24] border border-white/10 flex items-center justify-center mb-4 text-[#8b6cff]">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                {isAr ? 'المدينة المنورة · فعاليات الفضاء' : 'Al Madinah · Space & Astronomy'}
              </span>
              <h4 className="text-base font-bold text-white mb-2 leading-snug">
                {isAr 
                  ? 'الجمعية الفلكية بالمدينة المنورة' 
                  : 'Madinah Astronomical Society (MAS)'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {isAr 
                  ? 'المشاركة في أسبوع الفضاء العالمي ومحاضرة «كيف فتحت صواريخ الفضاء أعيننا على الكون؟» للتعرف على تطور تقنيات الإطلاق عبر العقود والتلسكوبات المدارية.' 
                  : 'Participation in World Space Week and scientific lectures on rocket propulsion, orbital telescopes, and cosmic exploration.'}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs text-[#8b6cff] font-mono">
              {isAr ? 'مشاركة ومهتمة بالفيزياء الفلكية' : 'Astrophysics Enthusiast'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
