import React from 'react';
import { PERSONAL_INFO } from '../data/personalData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#050b24] border-t border-white/10 text-slate-400 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-white font-semibold">
            {isAr ? PERSONAL_INFO.nameAr : PERSONAL_INFO.nameEn}
          </p>
          <p className="text-slate-400">
            {isAr 
              ? 'قسم الفيزياء وتقنيات الطاقة — كلية العلوم — جامعة طيبة' 
              : 'Physics & Energy Technologies — College of Science — Taibah University'}
          </p>
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={PERSONAL_INFO.solarArticle.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffd76a] text-slate-300 font-medium transition-colors"
          >
            {isAr ? 'مقال الطاقة الشمسية' : 'Solar Article'}
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#35dfff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.xTwitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#35dfff] transition-colors"
          >
            X (@Sel37rb)
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#35dfff] transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            title={isAr ? 'العودة للأعلى' : 'Back to top'}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
