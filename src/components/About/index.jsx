import { motion } from "framer-motion";
import Description from "./components/Description";

export default function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="0.2"
      className="text-white overflow-hidden py-16"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ ease: "linear", delay: 0.3, duration: 1 }}
        className="text-8xl hero-font text-center tracking-wider p-4"
      >
        ABOUT
      </motion.h1>
      <div className="flex w-full">
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

      <Description />
    </div>
  );
}
