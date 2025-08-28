"use client";

import { Timeline, TimelineEntry } from "@/components/ui/Timeline";

export default function ExperienceSection() {
  const data: TimelineEntry[] = [
    {
      title: "May 2025 - Present",
      content: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">
            Test Automation Engineer & Product Owner Intern @ Cox Enterprises
          </h4>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Built Tricentis TOSCA automation scripts for Workday benefit changes, reducing regression testing time by about 30% and expanding coverage for mission-critical features</li>
            <li>Migrated 50+ Workday benefits integrations to Confluence for 20+ external vendors, collaborating in an Agile/Scrum environment to deliver enterprise solutions and boost team velocity by about 20%</li>
          </ul>
        </>
      ),
    },
    {
      title: "Aug 2024 – Present",
      content: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">
            iOS Developer/Researcher - Project Lead @ Brain Trauma Assessment Protocol
          </h4>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Leading the development an Augmented and Alternative Communication (AAC) iOS application using SwiftUI, Core Data, and Firebase to support communication for individuals with sudden-onset aphasia</li>
            <li>Overseeing project timelines and deliverables for a cross-disciplinary team of developers and clinical researchers</li>
            <li>Maintaining a research log documenting code patterns and clinical trial requirements for iterative development</li>
          </ul>
        </>
      ),
    },
    {
      title: "Jun 2024 – Aug 2024",
      content: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">
            Software Engineer Intern @ VDart
          </h4>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Built a responsive landing page using React, Tailwind CSS, and Aceternity UI to showcase SaaS recruitment tools</li>
            <li>Integrated Redux Toolkit for global state and Axios for API calls, improving data flow and UI performance</li>
            <li>Translated Figma designs into modular React components to enhance frontend scalability and reusability</li>
          </ul>
        </>
      ),
    },
  ];

    return (
    <section id="experience" className="px-4 bg-black -mt-16 border-t-2 border-t-blue-500">
      <Timeline data={data} />
    </section>
    );
  }
