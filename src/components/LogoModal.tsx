import React from 'react';
import { X, Sparkles, Download } from 'lucide-react';
import { AseelLogo } from './AseelLogo';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
}

export const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[#0a1538] border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative flex flex-col items-center text-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header kicker */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#35dfff] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#ffd76a]" />
          <span>{isAr ? 'الشعار الرسمي المعتمد' : 'Official Identity & Brand Emblem'}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
          {isAr ? 'شعار أسيل طلال الحربي' : 'Aseel Talal Alharbi Logo'}
        </h3>

        {/* Logo Graphic Canvas */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-[#3478ff]/40 shadow-2xl shadow-[#3478ff]/30 bg-[#050b24] p-2 mb-6 group relative">
          <AseelLogo className="w-full h-full" showText={true} />
        </div>

        {/* Description of Logo Elements */}
        <div className="text-xs sm:text-sm text-slate-300 space-y-2 mb-6 leading-relaxed max-w-md text-right">
          <p className="text-slate-200 font-semibold text-center mb-3">
            {isAr 
              ? 'تكوين الشعار يجسد تخصص فيزياء وتقنيات الطاقة:' 
              : 'Logo Elements Embody Physics & Energy Technologies:'}
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-[#050b24] p-2.5 rounded-xl border border-white/5">
              <span className="text-[#35dfff] block font-bold">{isAr ? 'الذرة والإلكترونات' : 'Atomic Orbitals'}</span>
              <span className="text-slate-400 text-[11px]">{isAr ? 'الفيزياء والطاقة النووية' : 'Physics & Nuclear Energy'}</span>
            </div>
            <div className="bg-[#050b24] p-2.5 rounded-xl border border-white/5">
              <span className="text-[#ffd76a] block font-bold">{isAr ? 'الشمس واللوح الشمسي' : 'Sun & Solar Panel'}</span>
              <span className="text-slate-400 text-[11px]">{isAr ? 'الأنظمة الكهروضوئية' : 'Photovoltaic Systems'}</span>
            </div>
            <div className="bg-[#050b24] p-2.5 rounded-xl border border-white/5">
              <span className="text-[#38bdf8] block font-bold">{isAr ? 'توربين الرياح والنبتة' : 'Wind Turbine & Leaf'}</span>
              <span className="text-slate-400 text-[11px]">{isAr ? 'الطاقة النظيفة والاستدامة' : 'Clean & Renewable Energy'}</span>
            </div>
            <div className="bg-[#050b24] p-2.5 rounded-xl border border-white/5">
              <span className="text-[#facc15] block font-bold">{isAr ? 'المصباح ومعادلة E=mc²' : 'Lightbulb & E=mc²'}</span>
              <span className="text-slate-400 text-[11px]">{isAr ? 'الابتكار والفيزياء الحديثة' : 'Innovation & Modern Physics'}</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-6 py-2.5 rounded-xl bg-[#3478ff] hover:bg-[#2563eb] text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
        >
          {isAr ? 'إغلاق المعاينة' : 'Close Preview'}
        </button>
      </div>
    </div>
  );
};
