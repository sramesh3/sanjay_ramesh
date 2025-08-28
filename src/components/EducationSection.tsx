"use client";

import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Cover } from "./ui/Cover";

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen px-4 py-16 bg-black border-t-2 border-t-blue-500">
      <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
            >
              <Cover>Education</Cover>
            </motion.h1>

      <CardContainer className="inter-var">
        <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.5] w-[30rm] h-[23rm] rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white dark:text-white"
          >
            Georgia Institute of Technology
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            B.S. in Computer Science 
            GPA 4.0
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="/images/buzz.jpeg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      <div className="flex flex-wrap justify-center gap-44 -mt-20">
        <CardContainer className="inter-var">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.5] w-[30rem] h-[23rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white dark:text-white text-center"
            >
              Specializations
            </CardItem>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <CardItem
                  translateZ="60"
                  className="text-lg font-semibold text-white dark:text-white"
                >
                  Intelligence
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-2">
                  <img
                    src="/images/intelligence.jpeg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Intelligence"
                  />
                </CardItem>
              </div>
              <div>
                <CardItem
                  translateZ="60"
                  className="text-lg font-semibold text-white dark:text-white"
                >
                  Information/Internetworks
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-2">
                  <img
                    src="/images/information.jpeg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Information/Internetworks"
                  />
                </CardItem>
              </div>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.5] w-[30rem] h-[23rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white dark:text-white text-center"
            >
              Relevant Coursework
            </CardItem>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <CardItem
                translateZ="60"
                className="mt-4 text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Data Structures & Algorithms
              </CardItem>
              <CardItem
                translateZ="60"
                className="mt-4 text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Object Oriented Programming
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Perception & Robotics
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Objects and Design
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Database Management
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Systems & Networks
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Intro to AI
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Machine Learning
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Computer Vision (Ongoing)
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-sm text-neutral-300 dark:text-neutral-300 hover:underline"
              >
                Deep Learning (Ongoing)
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}

