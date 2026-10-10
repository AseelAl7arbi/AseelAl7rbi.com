import React from 'react';
import { PERSONAL_INFO } from '../data/personalData';
import { X, ShieldCheck, Printer, CheckCircle2 } from 'lucide-react';

interface MembershipCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
}

export const MembershipCardModal: React.FC<MembershipCardModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';
  const sce = PERSONAL_INFO.sceMembership;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#0a1538] border border-white/20 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-6 text-xs font-semibold text-[#ffd76a] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>{isAr ? 'الوثيقة الرقمية المعتمدة — الهيئة السعودية للمهندسين' : 'Official Verified Digital Credential — SCE'}</span>
        </div>

        {/* Replica Card Structure resembling the uploaded SCE document */}
        <div className="bg-[#FAF8F5] text-[#1E293B] rounded-xl p-6 sm:p-8 border border-[#E2D8C7] shadow-lg relative overflow-hidden">
          {/* Subtle Saudi emblem watermark pattern */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-96 h-96">
              <path d="M50 15 L50 75 M40 45 L60 45 M35 60 L65 60 M20 85 L80 85" stroke="#000" strokeWidth="3" fill="none" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Header / Avatar Row */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E8A838]/20 border-2 border-[#E8A838] flex items-center justify-center overflow-hidden shrink-0">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#8B6B23]">
                  <circle cx="50" cy="35" r="22" fill="currentColor" />
                  <path d="M15 90 C15 65 30 55 50 55 C70 55 85 65 85 90 Z" fill="currentColor" />
                </svg>
              </div>

              <div className="text-right flex-1">
                <div className="text-xl sm:text-2xl font-bold text-[#1E293B] font-['IBM_Plex_Sans_Arabic']" dir="rtl">
                  {sce.fullNameAr}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wider mt-1 font-mono">
                  {sce.fullNameEn}
                </div>
              </div>
            </div>

            {/* Credential Data Grid */}
            <div className="border-t border-b border-[#E2D8C7] py-4 space-y-3 font-medium text-sm">
              <div className="flex justify-between items-center">
                <span className="font-mono text-base font-bold text-[#1E293B]">{sce.memberNo}</span>
                <span className="text-xs text-slate-500 font-mono">Membership ID / رقم العضوية</span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Classification :</span>
                  <span className="font-bold text-[#1E293B]">{sce.classificationEn}</span>
                </div>
                <div className="flex items-center gap-2" dir="rtl">
                  <span className="text-slate-500">التصنيف :</span>
                  <span className="font-bold text-[#1E293B]">{sce.classificationAr}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Specialization :</span>
                  <span className="text-slate-600">None (Student)</span>
                </div>
                <div className="flex items-center gap-2" dir="rtl">
                  <span className="text-slate-500">التخصص :</span>
                  <span className="text-slate-600">لا يوجد (طالب)</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Valid Date :</span>
                  <span className="font-mono font-bold text-slate-900">{sce.validDateEn}</span>
                </div>
                <div className="flex items-center gap-2" dir="rtl">
                  <span className="text-slate-500">تاريخ الانتهاء :</span>
                  <span className="font-mono font-bold text-slate-900">{sce.validDateAr}</span>
                </div>
              </div>
            </div>

            {/* Bottom Verification Seal */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isAr ? 'عضوية نظامية موثقة' : 'Verified Student Member'}</span>
              </span>
              <span className="font-mono text-[11px]">Taibah University · Physics</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            {isAr 
              ? 'مستخرجة من وثيقة الهيئة السعودية للمهندسين المرفقة الخاصة بأسيل طلال الحربي.' 
              : 'Verified directly from Aseel Talal Alharbi’s uploaded Saudi Council of Engineers membership card.'}
          </p>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isAr ? 'طباعة / حفظ' : 'Print / Save'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#3478ff] hover:bg-[#2563eb] text-white transition-colors"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
