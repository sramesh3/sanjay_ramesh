"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { BackgroundGradient } from "./BackgroundGradient";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => {
    if (active && typeof active === "object") {
      setActive(null);
    }
  });

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] max-h-screen overflow-y-auto flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-2 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-6 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`} className="h-24 w-24 md:h-20 md:w-20 flex-shrink-0">
                <img
                  width={80}
                  height={80}
                  src={card.src}
                  alt={card.title}
                  className="h-full w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-white dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white dark:text-neutral-400 text-center md:text-left text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "A web platform that connects students, mentors, and professionals, using AI-driven tagging to streamline skill discovery and matching",
    title: "SkillForge",
    src: "/images/python.jpeg",
    content: () => {
      return (
        <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mb-8">
          <p className="font-semibold">Tech Stack:</p>
          <ul className="list-disc list-inside">
            <li>Microsoft Azure</li>
            <li>React</li>
            <li>GitHub Actions</li>
            <li>Cosmos DB</li>
            <li>Hugging Face</li>
          </ul>
          <p className="font-semibold">Project Highlights:</p>
          <ul className="list-disc list-inside">
            <li>Co-developed a serverless, three-tier web application connecting students, mentors, and professionals on Microsoft Azure with independent scaling and isolated deployments for frontend, backend, and data layers</li>
            <li>Built a React frontend hosted in Azure Blob Storage and backend services in Azure Functions with API Gateway, integrating CI/CD pipelines via GitHub Actions to reduce deployment time by about 50%</li>
            <li>Integrated Hugging Face’s bart-large-mnli zero-shot classification model for deterministic, low-latency tag generation, and leveraged Cosmos DB for scalable NoSQL data storage</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "An innovative personal portfolio website built on Next.JS, featuring an AI chatbot for interactive user engagement",
    title: "Personal Portfolio Website",
    src: "/images/python.jpeg",
    content: () => {
      return (
        <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mb-8">
          <p className="font-semibold">Tech Stack:</p>
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>Google Gemini API</li>
          </ul>
          <p className="font-semibold">Project Highlights:</p>
          <ul className="list-disc list-inside">
            <li>Developed a dynamic and responsive personal portfolio website using Next.js and React, showcasing projects and skills effectively.</li>
            <li>Integrated an AI chatbot powered by Google Gemini API to enhance user engagement.</li>
            <li>Implemented modern UI/UX design principles with Tailwind CSS for a visually appealing and seamless user experience.</li>
          </ul>
          <p className="font-semibold">Documentation:</p>
          <p>Documented the development process and features on GitHub, ensuring transparency and ease of future updates.</p>
        </div>
      );
    },
  },
  {
    description: "A scalable sentiment analysis model on the Amazon Review Polarity Dataset (34M+ Reviews)",
    title: "Sentiment Analysis of Amazon Reviews",
    src: "/images/python.jpeg",
    content: () => {
      return (
        <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mb-8">
          <p className="font-semibold">Tech Stack:</p>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Scikit-learn</li>
            <li>Matplotlib</li>
            <li>NLTK</li>
          </ul>
          <p className="font-semibold">Project Highlights:</p>
          <ul className="list-disc list-inside">
            <li>Developed a scalable sentiment analysis model on the Amazon Review Polarity Dataset (34M+ reviews) using Natural Language Processing techniques (TF-IDF, Word2Vec, FastText, BERT).</li>
            <li>Implemented ML models including Logistic Regression, Naive Bayes, and Random Forest.</li>
            <li>Optimized performance using F1-score, AUC-ROC, and confusion matrices.</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "A modular food tracking app built with Java (Android Studio) using MVVM architecture, enabling users to log meals, create shopping lists, and manage recipes",
    title: "Greenplate",
    src: "/images/java.jpeg",
    content: () => {
      return (
        <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mb-8">
          <p className="font-semibold">Tech Stack:</p>
          <ul className="list-disc list-inside">
            <li>Java</li>
            <li>Android Studio</li>
            <li>Firebase</li>
            <li>UML Diagrams</li>
            <li>Agile (Scrum)</li>
            <li>Jira</li>
          </ul>
          <p className="font-semibold">Project Highlights:</p>
          <ul className="list-disc list-inside">
            <li>Developed a modular food tracking app in Java (Android Studio) using MVVM architecture, enabling users to log meals, create shopping lists, and manage recipes.</li>
            <li>Applied object-oriented design principles (SOLID, GRASP) to ensure maintainability and scalability, reducing debugging time by 20% through well-structured UML diagrams (Sequence, Design Class Diagrams).</li>
            <li>Managed Agile workflows with Scrum methodologies and Jira, collaborating with a team to deliver milestones 10% ahead of schedule.</li>
            <li>Integrated Firebase for real-time data synchronization, ensuring secure and reliable user data storage and retrieval.</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "A subleasing app for college students built using Swift and SwiftUI",
    title: "SwapSpot",
    src: "/images/Swift.jpeg",
    content: () => {
      return (
        <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mb-8">
          <p className="font-semibold">Tech Stack:</p>
          <ul className="list-disc list-inside">
            <li>Swift</li>
            <li>SwiftUI</li>
            <li>Firebase</li>
            <li>XCode</li>
          </ul>
          <p className="font-semibold">Project Highlights:</p>
          <ul className="list-disc list-inside">
            <li>Co-developed a subleasing app for college students using Swift and SwiftUI, facilitating 50+ sublease postings during testing.</li>
            <li>Designed and optimized listing models with efficient backend logic, reducing app response time by 15% for browsing and posting subleases.</li>
            <li>Leveraged GitHub for version control and collaboration, reviewing pull requests and ensuring code quality.</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "SQL schema and queries for modeling an efficient delivery system for a business supply company",
    title: "Business Supply Express",
    src: "/images/SQL.jpeg",
    content: () => {
      return (
        <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mb-8">
          <p className="font-semibold">Tech Stack:</p>
          <ul className="list-disc list-inside">
            <li>SQL</li>
            <li>MySQL Workbench</li>
            <li>EERD</li>
          </ul>
          <p className="font-semibold">Project Highlights:</p>
          <ul className="list-disc list-inside">
            <li>Designed an Enhanced Entity-Relationship Diagram (EERD) based on detailed business requirements to model efficient delivery systems for local companies.</li>
            <li>Developed SQL schemas by creating tables and defining constraints, accurately transforming the dataset into a functional and scalable database.</li>
            <li>Implemented complex SQL queries, views, and stored procedures to enable seamless application functionality.</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "Web Application that provides personalized meal recommendations for students eating at Georgia Tech dining halls",
    title: "DineSmart",
    src: "/images/javascript.jpeg",
    content: () => {
      return (
        <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mb-8">
          <p className="font-semibold">Tech Stack:</p>
          <ul className="list-disc list-inside">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Figma</li>
          </ul>
          <p className="font-semibold">Project Highlights:</p>
          <ul className="list-disc list-inside">
            <li>Created and presented for Georgia Tech's HackGT X Hackathon.</li>
            <li>Developed a web application using PHP and MySQL to provide personalized meal recommendations, utilizing data from 50+ food options across 3 dining halls.</li>
            <li>Designed the front-end interface, ensuring responsiveness and accessibility across devices.</li>
            <li>Collaborated with a team of 4 in a 48-hour hackathon, delivering a fully functional web app and receiving positive feedback from judges.</li>
            <li>Implemented a recommendation system that analyzed users' personal information and used a custom mathematical algorithm to deliver tailored meal suggestions</li>
          </ul>
        </div>
      );
    },
  },
];
