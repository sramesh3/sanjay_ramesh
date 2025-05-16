"use client";

import { motion } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import { WobbleCard } from "./ui/wobble-card";
import { Cover } from "./ui/Cover";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen px-4 py-16 bg-black border-t-2 border-t-blue-500">
      <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
                  >
                    <Cover>Contact</Cover>
                  </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Connect with me on LinkedIn
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Let&apos;s connect and explore opportunities together!
              </p>
            </div>
            <PinContainer
              title="https://linkedin.com/in/sanjayramesh1"
              href="https://linkedin.com/in/sanjayramesh1"
              className="mt-6 lg:mt-0 lg:ml-6 h-[20rem] w-[20rem]"
            >
              <img
            src="/images/linkedin.jpeg"
            width={500}
            height={500}
            alt="linear demo image"
            className="object-contain rounded-2xl"
          />
            </PinContainer>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Shoot me an Email
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If you have any questions or would like to reach out, feel free to send me an email at sramesh319@gatech.edu!
          </p>
          <PinContainer
              title="sramesh319@gatech.edu"
              href="mailto:sramesh319@gatech.edu"
              className="mt-6 lg:mt-0 lg:ml-6 h-[15rem] w-[15rem]"
            >
              <img
            src="/images/outlook.jpeg"
            width={500}
            height={500}
            alt="outlook image"
            className="object-contain rounded-2xl"
          />
            </PinContainer>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Take a look at my GitHub
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                If you would like to see some of my work, check out my GitHub profile!
              </p>
            </div>
            <PinContainer
              title="https://github.com/sramesh3"
              href="https://github.com/sramesh3"
              className="mt-6 lg:mt-0 lg:ml-6 h-[20rem] w-[30rem]"
            >
              <img
                src="/images/github.jpeg"
                width={500}
                height={500}
                alt="GitHub demo image"
                className="object-contain rounded-2xl"
              />
            </PinContainer>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
}
