import React from 'react';
import { PERSONAL_INFO } from '../data/personalData';
import { Compass, Lightbulb, Shield, BookMarked, Sun, BatteryCharging, Flame, Layers, Linkedin, ExternalLink } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'ar';
  onOpenCard: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ lang, onOpenCard }) => {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="py-20 border-b border-white/10 bg-[#070e28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#35dfff] mb-2">
            {isAr ? 'عن الباحثة والمسيرة الأكاديمية' : 'About the Researcher & Scientific Vision'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {isAr ? 'شغف بالفيزياء التطبيقية وهندسة الطاقة النظيفة' : 'Applied Physics & Clean Energy Innovation'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p className="bg-[#0a1538] p-6 rounded-2xl border border-white/10">
              {isAr ? (
                <>
                  طالبة فيزياء وتقنيات الطاقة في <strong>جامعة طيبة</strong> بالمدينة المنورة، مهتمة بدراسة وتطوير حلول الطاقة المستدامة التي تدعم توجه المملكة العربية السعودية نحو خفض الانبعاثات وتحقيق مستهدفات رؤية 2030 في التحول الطاقي.
                </>
              ) : (
                <>
                  Physics & Energy Technologies student at <strong>Taibah University</strong> in Al Madinah Al Munawwarah, dedicated to advancing sustainable energy systems that align with Saudi Arabia’s Vision 2030 clean technology transformation.
                </>
              )}
            </p>

            <p>
              {isAr ? (
                <>
                  يركز اهتمامي البحثي على الربط بين النظريات الفيزيائية المتقدمة والتطبيقات العملية: بدءاً من دراسة <strong>تأثير هول</strong> وحركية حاملات الشحنة في أشباه الموصلات، مروراً بتجارب <strong>التحليل الكهربائي للماء</strong> لإنتاج الهيدروجين الأخضر ودراسة سلاسل التخزين والنقل لمشروع نيوم الرائد، وصولاً إلى ابتكار حلول تخزين الطاقة المحلية مثل <strong>استخلاص الفحم الحيوي من نوى التمر</strong> وتوظيفه ككاثود مستدام في خلايا البطاريات.
                </>
              ) : (
                <>
                  My research trajectory bridges theoretical physics with experimental clean-tech: from <strong>Hall Effect</strong> carrier dynamics in semiconductors, through <strong>water electrolysis kinetics</strong> for green hydrogen value chains aligned with the NEOM mega-project, to circular bio-economy energy storage using <strong>date-seed biochar</strong> as functional battery cathodes.
                </>
              )}
            </p>

            <p>
              {isAr ? (
                <>
                  أؤمن بأن الفيزياء هي المفتاح الأساسي لفهم الكون وتحديات الطاقة؛ لذا أحرص على المشاركة الفاعلة في أنشطة <strong>المراكز البحثية بجامعة طيبة</strong>، وفريق الابتكار بـ<strong>نادي رواد الصناعة</strong>، وحضور فعاليات <strong>الجمعية الفلكية بالمدينة المنورة</strong> لتعميق الرؤية العلمية الشاملة.
                </>
              ) : (
                <>
                  Believing that physics is the foundational engine of sustainable progress, I actively participate in <strong>Taibah University Research Centers</strong>, the Innovation & Projects Team at the <strong>Industrial Pioneers Club</strong>, and the <strong>Madinah Astronomical Society</strong> to foster an interdisciplinary scientific perspective.
                </>
              )}
            </p>

            {/* Published Article Callout */}
            {PERSONAL_INFO.solarArticle && (
              <a
                href={PERSONAL_INFO.solarArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-[#0077b5]/15 via-[#0a1538] to-[#0a1538] border border-[#0077b5]/40 hover:border-[#35dfff] p-4 rounded-xl transition-all group"
              >
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ffd76a]">
                    <Linkedin className="w-3.5 h-3.5 fill-[#0077b5]" />
                    <span>{isAr ? 'مقال علمي منشور للباحثة على لينكد إن' : 'Published Article on LinkedIn Pulse'}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#35dfff] transition-colors">
                  {isAr ? PERSONAL_INFO.solarArticle.titleAr : PERSONAL_INFO.solarArticle.titleEn}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  {isAr ? PERSONAL_INFO.solarArticle.summaryAr : PERSONAL_INFO.solarArticle.summaryEn}
                </p>
              </a>
            )}
          </div>

          {/* Core Focus Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL_INFO.focusAreas.slice(0, 4).map((area, idx) => (
              <div key={idx} className="bg-[#0a1538] p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#050b24] border border-white/10 flex items-center justify-center text-[#35dfff] mb-3">
                    {idx === 0 && <Sun className="w-4 h-4" />}
                    {idx === 1 && <Flame className="w-4 h-4" />}
                    {idx === 2 && <BatteryCharging className="w-4 h-4" />}
                    {idx === 3 && <Layers className="w-4 h-4" />}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                    {isAr ? area.titleAr : area.titleEn}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isAr ? area.descAr : area.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
