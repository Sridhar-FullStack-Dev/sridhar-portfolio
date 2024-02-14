import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Description from "./components/Description";


export default function About() {
  useEffect(() => {
    gsap.to(".about-image", {
      scale: 2,
      ease: "Power1.inOut",
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="text-white overflow-hidden sm:py-8 md:py-16"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ ease: "linear", delay: 0.3, duration: 1 }}
        className="sm:text-7xl md:text-8xl hero-font text-center tracking-wider p-4"
      >
        ABOUT
      </motion.h1>

      <div className="flex justify-between items-center mt-4">
        <div
          className="w-1/2 h-[70vh] rounded-[15px] overflow-hidden sm:hidden xl:block"
          data-scroll
          data-scroll-speed="0.1"
        >
          <div>
            <Image
              src={"/assets/img2.jpg"}
              alt="Author"
              height={1000}
              width={1000}
              className="w-[30vw] h-[70vh] rounded-[15px] object-cover grayscale"
            />
          </div>
        </div>

        <div className="w-full">
          <Description />
        </div>
      </div>
    </div>
  );
}
