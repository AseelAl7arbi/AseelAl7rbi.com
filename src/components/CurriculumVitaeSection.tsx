import React from 'react';
import { PERSONAL_INFO, CV_DATA, PROJECTS } from '../data/personalData';
import { Download, Printer, CheckCircle, GraduationCap, Award, Wrench, BookOpen, Mail, Linkedin, Twitter, ExternalLink, FileText } from 'lucide-react';

interface CVSectionProps {
  lang: 'en' | 'ar';
}

export const CurriculumVitaeSection: React.FC<CVSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="py-20 border-b border-white/10 bg-[#070e28]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Print Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 no-print">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#35dfff] mb-1">
              {isAr ? 'السيرة الذاتية المعتمدة' : 'Official Academic Curriculum Vitae'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isAr ? 'السيرة الذاتية والمسار الأكاديمي' : 'Curriculum Vitae'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-[#3478ff] hover:bg-[#2563eb] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-[#3478ff]/30 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>{isAr ? 'طباعة / تصدير PDF' : 'Print / Export PDF'}</span>
            </button>
          </div>
        </div>

        {/* Printable CV Document Container */}
        <div className="bg-[#0a1538] text-slate-100 rounded-2xl border border-white/15 p-6 sm:p-12 shadow-2xl space-y-10 print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
          
          {/* CV Top Header */}
          <div className="border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 print:border-black/20">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black mb-1">
                {isAr ? PERSONAL_INFO.nameAr : PERSONAL_INFO.nameEn}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#ffd76a] print:text-slate-800">
                {isAr ? PERSONAL_INFO.titleAr : PERSONAL_INFO.titleEn}
              </p>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                {isAr ? PERSONAL_INFO.institutionAr : PERSONAL_INFO.institutionEn} · {isAr ? PERSONAL_INFO.departmentAr : PERSONAL_INFO.departmentEn}
              </p>
            </div>

            <div className="text-xs space-y-1.5 text-slate-300 print:text-slate-700 font-mono sm:text-right">
              <div>{PERSONAL_INFO.email}</div>
              <div>{isAr ? PERSONAL_INFO.locationAr : PERSONAL_INFO.locationEn}</div>
              <div className="text-[#35dfff] print:text-blue-700">Student ID: {PERSONAL_INFO.studentId}</div>
              <div className="text-[#ffd76a] print:text-amber-800">SCE Member: #{PERSONAL_INFO.sceMembership.memberNo}</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-bold text-[#35dfff] print:text-blue-700 uppercase tracking-wider mb-4 flex items-center gap-2 font-mono">
              <GraduationCap className="w-4 h-4" />
              <span>{isAr ? 'التعليم الجامعي' : 'Higher Education'}</span>
            </h3>

            {CV_DATA.education.map((edu, idx) => (
              <div key={idx} className="bg-[#050b24] print:bg-slate-50 p-5 rounded-xl border border-white/5 print:border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-white print:text-black">
                    {isAr ? edu.degreeAr : edu.degreeEn}
                  </h4>
                  <span className="text-xs font-mono text-[#ffd76a] print:text-slate-600 font-semibold">
                    {isAr ? edu.periodAr : edu.periodEn}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-300 print:text-slate-700 mb-2">
                  {isAr ? edu.institutionAr : edu.institutionEn}
                </p>
                <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                  {isAr ? edu.detailsAr : edu.detailsEn}
                </p>
              </div>
            ))}
          </div>

          {/* Memberships & Affiliations */}
          <div>
            <h3 className="text-sm font-bold text-[#ffd76a] print:text-amber-700 uppercase tracking-wider mb-4 flex items-center gap-2 font-mono">
              <Award className="w-4 h-4" />
              <span>{isAr ? 'العضويات المهنية والمراكز' : 'Professional Memberships & Centers'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CV_DATA.memberships.map((mem, idx) => (
                <div key={idx} className="bg-[#050b24] print:bg-slate-50 p-4 rounded-xl border border-white/5 print:border-slate-200">
                  <span className="text-xs font-mono text-[#35dfff] print:text-blue-700 block mb-1">
                    {isAr ? mem.periodAr : mem.periodEn}
                  </span>
                  <h4 className="text-sm font-bold text-white print:text-black mb-1">
                    {isAr ? mem.titleAr : mem.titleEn}
                  </h4>
                  <p className="text-xs text-slate-400 print:text-slate-600">
                    {isAr ? mem.roleAr : mem.roleEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Published Articles & Scientific Writing */}
          {CV_DATA.publications && CV_DATA.publications.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#ffd76a] print:text-amber-700 uppercase tracking-wider mb-4 flex items-center gap-2 font-mono">
                <FileText className="w-4 h-4" />
                <span>{isAr ? 'المقالات والأوراق المنشورة' : 'Publications & Scientific Articles'}</span>
              </h3>

              <div className="space-y-3">
                {CV_DATA.publications.map((pub, idx) => (
                  <div key={idx} className="bg-[#050b24] print:bg-slate-50 p-4 sm:p-5 rounded-xl border border-[#3478ff]/30 print:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#35dfff] print:text-blue-700 bg-[#35dfff]/10 px-2 py-0.5 rounded">
                          {isAr ? pub.platformAr : pub.platformEn}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400">
                          {isAr ? `الكاتبة: ${pub.authorAr}` : `Author: ${pub.authorEn}`}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white print:text-black">
                        {isAr ? pub.titleAr : pub.titleEn}
                      </h4>
                      <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                        {isAr ? pub.summaryAr : pub.summaryEn}
                      </p>
                    </div>

                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 text-xs font-semibold rounded-lg bg-[#0077b5] hover:bg-[#005582] text-white flex items-center justify-center gap-1.5 transition-all shadow-md self-start sm:self-center"
                    >
                      <Linkedin className="w-3.5 h-3.5 fill-white" />
                      <span>{isAr ? 'قراءة المقال' : 'Read Article'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Academic Projects & Labs */}
          <div>
            <h3 className="text-sm font-bold text-[#35dfff] print:text-blue-700 uppercase tracking-wider mb-4 flex items-center gap-2 font-mono">
              <BookOpen className="w-4 h-4" />
              <span>{isAr ? 'أبرز المشاريع والأبحاث المعملية' : 'Key Research Projects & Experiments'}</span>
            </h3>

            <div className="space-y-3.5">
              {PROJECTS.slice(0, 6).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#050b24] print:bg-slate-50 border border-white/5 print:border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-white print:text-black">
                      {isAr ? proj.titleAr : proj.titleEn}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                      {isAr ? proj.academicCourseAr : proj.academicCourseEn}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                    {isAr ? proj.summaryAr : proj.summaryEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Laboratory Skills & Competencies */}
          <div>
            <h3 className="text-sm font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-wider mb-4 flex items-center gap-2 font-mono">
              <Wrench className="w-4 h-4" />
              <span>{isAr ? 'المهارات والتقنيات المعملية' : 'Laboratory & Technical Competencies'}</span>
            </h3>

            <div className="space-y-4">
              {CV_DATA.skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-[#050b24] print:bg-slate-50 p-4 rounded-xl border border-white/5 print:border-slate-200">
                  <h4 className="text-xs font-mono font-bold text-[#ffd76a] print:text-slate-800 uppercase mb-2">
                    {isAr ? skillGroup.categoryAr : skillGroup.categoryEn}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(isAr ? skillGroup.itemsAr : skillGroup.itemsEn).map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="text-xs bg-[#0a1538] print:bg-white text-slate-200 print:text-black px-2.5 py-1 rounded-lg border border-white/10 print:border-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
