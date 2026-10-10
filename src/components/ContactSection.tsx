import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/personalData';
import { Mail, Linkedin, Twitter, MapPin, Send, CheckCircle2, Sun, ExternalLink } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'ar';
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 border-b border-white/10 bg-[#050b24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#35dfff] mb-2">
            {isAr ? 'قنوات التواصل والأكاديمية' : 'Connect & Academic Collaboration'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {isAr ? 'تواصل مع أسيل الحربي' : 'Get in Touch with Aseel'}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {isAr
              ? 'مرحباً بالتواصل الأكاديمي، والتعاون البحثي في مجالات الطاقة الشمسية، الهيدروجين الأخضر، تقنيات البطاريات، ومبادرات الابتكار العلمي.'
              : 'Open for academic dialogue, research collaboration in clean energy systems, green hydrogen, battery innovation, and scientific initiatives.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards: Contact channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="bg-[#0a1538] hover:bg-[#0e1d4d] border border-white/10 hover:border-[#3478ff]/50 rounded-2xl p-5 flex items-center gap-4 transition-all group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#050b24] border border-white/10 flex items-center justify-center text-[#35dfff] group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="text-xs text-slate-400 block font-mono">{isAr ? 'البريد الإلكتروني' : 'Direct Email'}</span>
                <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#35dfff] transition-colors truncate block">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            {/* LinkedIn Profile Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a1538] hover:bg-[#0e1d4d] border border-white/10 hover:border-[#3478ff]/50 rounded-2xl p-5 flex items-center gap-4 transition-all group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#050b24] border border-white/10 flex items-center justify-center text-[#35dfff] group-hover:scale-105 transition-transform shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">LinkedIn Profile</span>
                <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#35dfff] transition-colors">
                  Aseel Hrbi (LinkedIn)
                </span>
              </div>
            </a>

            {/* Published Article Card */}
            {PERSONAL_INFO.solarArticle && (
              <a
                href={PERSONAL_INFO.solarArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a1538] hover:bg-[#0e1d4d] border border-[#ffd76a]/30 hover:border-[#ffd76a] rounded-2xl p-5 flex items-center gap-4 transition-all group block shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#050b24] border border-[#ffd76a]/30 flex items-center justify-center text-[#ffd76a] group-hover:scale-105 transition-transform shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs text-[#ffd76a] font-mono mb-0.5">
                    <span>{isAr ? 'مقال منشور على لينكد إن' : 'LinkedIn Pulse Article'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-[#ffd76a] transition-colors truncate block">
                    {isAr ? PERSONAL_INFO.solarArticle.titleAr : PERSONAL_INFO.solarArticle.titleEn}
                  </span>
                </div>
              </a>
            )}

            {/* X (Twitter) Card */}
            <a
              href={PERSONAL_INFO.xTwitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a1538] hover:bg-[#0e1d4d] border border-white/10 hover:border-[#3478ff]/50 rounded-2xl p-5 flex items-center gap-4 transition-all group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#050b24] border border-white/10 flex items-center justify-center text-[#ffd76a] group-hover:scale-105 transition-transform shrink-0">
                <Twitter className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">X Platform</span>
                <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#ffd76a] transition-colors font-mono">
                  @Sel37rb
                </span>
              </div>
            </a>

            {/* Location & University Card */}
            <div className="bg-[#0a1538] border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#050b24] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">{isAr ? 'المدينة والجامعة' : 'Location'}</span>
                <span className="text-sm font-semibold text-white block">
                  {isAr ? PERSONAL_INFO.locationAr : PERSONAL_INFO.locationEn}
                </span>
                <span className="text-xs text-slate-400">
                  {isAr ? PERSONAL_INFO.institutionAr : PERSONAL_INFO.institutionEn}
                </span>
              </div>
            </div>

          </div>

          {/* Right Form: Interactive Message Sender */}
          <div className="lg:col-span-7 bg-[#0a1538] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              {isAr ? 'إرسال رسالة مباشرة أو استفسار بحثي' : 'Send a Message or Research Inquiry'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              {isAr
                ? 'يسعدني تلقي استفساراتكم حول أبحاث الطاقة الشمسية، التحليل الكهربائي، والتعاون العلمي.'
                : 'Feel free to leave a note or inquiry regarding research projects, energy storage, or academic collaborations.'}
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  {isAr ? 'شكراً لتواصلك! تم إرسال رسالتك بنجاح' : 'Thank You! Your message was sent successfully'}
                </h4>
                <p className="text-xs text-slate-300">
                  {isAr
                    ? 'سيتم مراجعة استفسارك والرد عليك في أقرب وقت ممكن عبر البريد الإلكتروني.'
                    : 'Aseel has received your inquiry and will respond shortly via email.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {isAr ? 'الاسم الكريم:' : 'Your Name:'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isAr ? 'مثال: د. أحمد المحمدي' : 'e.g. Dr. John Miller'}
                      className="w-full bg-[#050b24] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35dfff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {isAr ? 'البريد الإلكتروني:' : 'Email Address:'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@university.edu.sa"
                      className="w-full bg-[#050b24] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35dfff] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    {isAr ? 'موضوع الرسالة:' : 'Subject:'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={isAr ? 'استفسار حول تجربة تأثير هول / الهيدروجين الأخضر' : 'Inquiry regarding Hall Effect / Biochar Research'}
                    className="w-full bg-[#050b24] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35dfff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    {isAr ? 'نص الرسالة أو الاستفسار:' : 'Message:'} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isAr ? 'اكتب رسالتك أو استفسارك هنا...' : 'Enter your message or collaboration thoughts here...'}
                    className="w-full bg-[#050b24] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35dfff] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#3478ff] hover:bg-[#2563eb] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-[#3478ff]/30"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
