import React from 'react';
import { PERSONAL_INFO } from '../data/personalData';
import { Globe, Award, Mail } from 'lucide-react';
import { AseelLogo } from './AseelLogo';

interface NavbarProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  onOpenCard: () => void;
  onOpenLogo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenCard, onOpenLogo }) => {
  const isAr = lang === 'ar';

  return (
    <header className="sticky top-0 z-40 bg-[#050b24]/90 backdrop-blur-md border-b border-white/10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Brand Wordmark (Name on the right in RTL / on the left in LTR) */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#top" 
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-[#35dfff] transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span className="font-bold tracking-normal">{isAr ? PERSONAL_INFO.nameAr : PERSONAL_INFO.nameEn}</span>
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-[#35dfff] transition-colors whitespace-nowrap shrink-0">
            {isAr ? 'عن الباحثة' : 'About'}
          </a>
          <a href="#projects" className="hover:text-[#35dfff] transition-colors whitespace-nowrap shrink-0">
            {isAr ? 'المشاريع والتجارب' : 'Projects & Labs'}
          </a>
          <a href="#articles" className="hover:text-[#ffd76a] text-slate-200 transition-colors whitespace-nowrap shrink-0 font-semibold">
            {isAr ? 'المقالات والأبحاث' : 'Articles'}
          </a>
          <a href="#simulators" className="hover:text-[#35dfff] transition-colors whitespace-nowrap shrink-0">
            {isAr ? 'المحاكاة العلمية' : 'Lab Calculators'}
          </a>
          <a href="#credentials" className="hover:text-[#35dfff] transition-colors whitespace-nowrap shrink-0">
            {isAr ? 'العضويات والشهادات' : 'Credentials'}
          </a>
          <a href="#cv" className="hover:text-[#35dfff] transition-colors whitespace-nowrap shrink-0">
            {isAr ? 'السيرة الذاتية' : 'Curriculum Vitae'}
          </a>
        </nav>

        {/* Zone 3: Actions + Official Logo on the left (opposite the name in RTL) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 transition-colors whitespace-nowrap shrink-0"
            title={isAr ? 'Switch to English' : 'التحويل للغة العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#35dfff]" />
            <span>{isAr ? 'English' : 'عربي'}</span>
          </button>

          <button
            onClick={onOpenCard}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#3478ff]/15 border border-[#3478ff]/40 text-[#35dfff] hover:bg-[#3478ff]/25 transition-colors whitespace-nowrap shrink-0"
          >
            <Award className="w-3.5 h-3.5 text-[#ffd76a]" />
            <span>{isAr ? 'بطاقة المهندسين' : 'SCE Card'}</span>
          </button>

          <a
            href="#contact"
            className="hidden md:flex px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3478ff] hover:bg-[#2563eb] rounded-lg transition-colors whitespace-nowrap shrink-0 items-center gap-1.5 shadow-sm shadow-[#3478ff]/30"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{isAr ? 'تواصل معي' : 'Contact Me'}</span>
          </a>

          {/* Official Logo on the far left (opposite the name on the right in RTL) */}
          <button
            onClick={onOpenLogo}
            className="group flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-[#0a1538] via-[#0e1d4d] to-[#12245e] border border-[#35dfff]/50 hover:border-[#35dfff] transition-all shadow-md shadow-[#3478ff]/25 shrink-0 cursor-pointer hover:scale-[1.02]"
            title={isAr ? 'الشعار الرسمي المعتمد لأسيل الحربي (انقر للمعاينة)' : 'Official Logo Emblem of Aseel Alharbi (Click to preview)'}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden bg-[#050b24] p-0.5 border border-[#35dfff]/40 group-hover:scale-105 transition-transform shrink-0 shadow-inner">
              <AseelLogo className="w-full h-full" showText={false} />
            </div>
            <div className="flex flex-col text-right leading-tight">
              <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-[#35dfff] transition-colors whitespace-nowrap">
                {isAr ? 'شعار أسيل' : 'Aseel Logo'}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#ffd76a] whitespace-nowrap">
                {isAr ? 'الشعار المعتمد' : 'Official Emblem'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
