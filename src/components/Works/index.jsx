import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const Globe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>,
});

const Works1 = [
  {
    href: "https://pixel-core.vercel.app",
    title: "PixelCore - A Saas site",
    image: "/assets/pixel-core-tamil.png",
  },
  {
    href: "https://pexelcore.vercel.app",
    title: "Language Features",
    image: "/assets/Languages.png",
  },
  {
    href: "https://pixel-core.vercel.app/home/en#contacts",
    title: "Node Mailer",
    image: "/assets/Nodemailer.png",
  },
  {
    href: "https://pixel-core.vercel.app/home/en#services",
    title: "Services Section",
    image: "/assets/services-section.png",
  },
  {
    href: "https://pixelcore.vercel.app",
    title: "With Mordern Footer",
    image: "/assets/mordern-footer.png",
  },
];

const Works2 = [
  {
    href: "https://whoopy.vercel.app",
    title: "Whoopy - Music App",
    image: "/assets/whoopy.png",
  },
  {
    href: "https://whoopy.vercel.app",
    title: "Login & Sessions",
    image: "/assets/Login.png",
  },
  {
    href: "https://whoopy.vercel.app",
    title: "User Friendly Searchbar",
    image: "/assets/searchbar.png",
  },
  {
    href: "https://pexelcore.vercel.app",
    title: "Notification & more",
    image: "/assets/tools.png",
  },
  {
    href: "https://pixelcore.vercel.app",
    title: "Varities of playlist",
    image: "/assets/playlist.png",
  },
];

export default function Works() {
  const [isHovered, setIsHovered] = useState(null);
  const [isHoveredSecond, setIsHoveredSecond] = useState(null);

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, background: "#000" }}
        whileInView={{ opacity: 1, background: "#FFF" }}
        transition={{ ease: "linear", duration: 0.5, delay: 1 }}
        className="text-black overflow-hidden sm:rounded-[15px] md:rounded-[2rem] pb-8"
      >
        <div className="sm:pt-4 md:pt-12 text-center w-full hero-font sm:text-3xl md:text-6xl">
          <h1 className="tracking-wider">Some of my best projects</h1>
        </div>

        <div className="flex w-full md:justify-center lg:justify-between items-center">
          <div className="sm:hidden lg:block h-96 w-[60%]">
            <Globe />
          </div>

          <div className="flex sm:flex-col lg:flex-row items-center gap-4 sm:p-4 lg:p-0 sm:text-[12px] md:text-base">
            <div className="flex flex-col gap-4">
              {Works1.map((work, works1) => (
                <React.Fragment key={works1}>
                  <Link
                    onMouseEnter={() => {
                      setIsHovered(works1);
                      setIsHoveredSecond(null);
                    }}
                    onMouseLeave={() => setIsHovered(null)}
                    href={work.href}
                  >
                    <div className="border border-black p-4 w-64 rounded flex justify-between items-center gap-4">
                      <p>{work.title}</p>
                      <div className="h-4 w-4 rounded-full bg-black"></div>
                    </div>
                  </Link>

                  <AnimatePresence>
                    {isHovered == works1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                          delay: 0.3,
                        }}
                        className="fixed left-1/2 top-12 bg-white p-14"
                      >
                        <Image
                          src={work.image}
                          alt={work.title}
                          height={30000}
                          width={30000}
                          priority
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {Works2.map((work, works2) => (
                <React.Fragment key={works2}>
                  <Link
                    onMouseEnter={() => {
                      setIsHoveredSecond(works2);
                      setIsHovered(null);
                    }}
                    onMouseLeave={() => setIsHoveredSecond(null)}
                    key={works2}
                    href={work.href}
                  >
                    <div className="border border-black p-4 w-64 rounded flex justify-between items-center gap-4">
                      <p>{work.title}</p>
                      <div className="h-4 w-4 rounded-full bg-black"></div>
                    </div>
                  </Link>

                  <AnimatePresence>
                    {isHoveredSecond == works2 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                          delay: 0.3,
                        }}
                        className="fixed right-1/2 top-12 bg-white p-14"
                      >
                        <Image
                          src={work.image}
                          alt={work.title}
                          height={30000}
                          width={30000}
                          priority
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="sm:hidden lg:block"
            >
              <Image
                src={"/assets/vector.jpg"}
                alt="works"
                height={1000}
                width={1000}
                className="h-[28rem] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
