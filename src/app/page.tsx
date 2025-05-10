import dynamic from "next/dynamic";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

// const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
//   ssr: false,
// });

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      {/* <section id="chat" className="min-h-screen px-4 py-16 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Chat with Me
        </h2>
        <ChatWidget />
      </section> */}
    </main>
  );
}