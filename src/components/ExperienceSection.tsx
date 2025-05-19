"use client";

import { Timeline, TimelineEntry } from "@/components/ui/Timeline";

export default function ExperienceSection() {
  const data: TimelineEntry[] = [
    // {
    //   title: "May 2025",
    //   content: (
    //     <>
    //       <h4 className="text-xl font-bold text-white mb-2">
    //         Incoming HR Analytics Intern @ Cox Enterprises
    //       </h4>
    //     </>
    //   ),
    // },
    {
      title: "Aug 2024 – Present",
      content: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">
            iOS Developer / Researcher @ Brain Trauma Assessment Protocol
          </h4>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Developing an Augmentative and Alternative Communication (AAC) iOS application using Swift and SwiftUI, designed to support individuals with sudden-onset aphasia through personalized communication strategies.</li>
            <li>Conducting research on AAC technologies and user needs to inform app development, iterating based on clinical insights and user feedback.</li>
            <li>Maintaining a design notebook to document research findings, system architecture, and development progress, supporting future iterations and clinical validation.</li>
            <li>Implementing Core Data and Firebase for secure and efficient backend data management.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Jun 2024 – Aug 2024",
      content: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">
            Frontend Enginner Intern @ VDart
          </h4>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Engineered a responsive landing page using React.js, Tailwind CSS, and the Aceternity UI library, improving user engagement through intuitive access to the company&apos;s talent management services.</li>
            <li>Prototyped UI designs with Figma, translating complex design requirements into functional and visually appealing interfaces.</li>
            <li>Gained experience in Redux Toolkit for efficient state management and Axios for seamless API integration.</li>
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
