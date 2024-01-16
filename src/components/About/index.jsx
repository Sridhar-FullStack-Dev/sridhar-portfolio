import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Description from "./components/Description";


export default function About() {
  useEffect(() => {
    gsap.to(".about-image", {
      scale: 1.5,
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
      data-scroll
      data-scroll-speed="0.2"
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

      <div className="flex w-full sm:hidden md:flex">
        <video
          autoPlay
          muted
          loop
          src={"/assets/chips.mp4"}
          className="h-96 w-1/2"
        />
        <video
          autoPlay
          muted
          loop
          src={"/assets/interface-ii.mp4"}
          className="h-96 w-1/2"
        />
      </div>

      <div className="sm:block md:hidden h-32 w-full rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="image"
          height={1000}
          width={4000}
          className="h-32 w-[30rem] about-image object-cover"
        />
      </div>

      <Description />
    </div>
  );
}
