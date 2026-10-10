import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { InteractiveSimulators } from './components/InteractiveSimulators';
import { CredentialsSection } from './components/CredentialsSection';
import { CurriculumVitaeSection } from './components/CurriculumVitaeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { MembershipCardModal } from './components/MembershipCardModal';
import { LogoModal } from './components/LogoModal';
import { ProjectItem, PROJECTS } from './data/personalData';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleOpenProjectById = (id: string) => {
    const proj = PROJECTS.find((p) => p.id === id);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#050b24] text-[#f5f7ff] selection:bg-[#3478ff]/30 selection:text-white flex flex-col">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCard={() => setIsCardModalOpen(true)}
        onOpenLogo={() => setIsLogoModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenCard={() => setIsCardModalOpen(true)}
          onOpenProject={handleOpenProjectById}
          onOpenLogo={() => setIsLogoModalOpen(true)}
        />

        {/* About Section */}
        <AboutSection
          lang={lang}
          onOpenCard={() => setIsCardModalOpen(true)}
        />

        {/* Projects & Laboratories Showcase */}
        <ProjectsSection
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Published Scientific Articles & Research Section */}
        <ArticlesSection
          lang={lang}
        />

        {/* Interactive Physics & Energy Calculators */}
        <InteractiveSimulators
          lang={lang}
        />

        {/* Verified Credentials & Institutional Memberships */}
        <CredentialsSection
          lang={lang}
          onOpenCard={() => setIsCardModalOpen(true)}
          onOpenProject={handleOpenProjectById}
        />

        {/* Academic Curriculum Vitae with Print Export */}
        <CurriculumVitaeSection
          lang={lang}
        />

        {/* Contact & Inquiry Channels */}
        <ContactSection
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Project Details & Presentation Inspector Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      {/* Saudi Council of Engineers Card Verification Modal */}
      <MembershipCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
        lang={lang}
      />

      {/* Aseel Alharbi Official Logo Preview Modal */}
      <LogoModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
