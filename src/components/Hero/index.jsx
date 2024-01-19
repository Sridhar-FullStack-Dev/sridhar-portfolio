import "./index.scss";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        data-scroll
        data-scroll-speed="0.2"
        className="hero-font sm:text-4xl md:text-7xl lg:text-8xl text-white overflow-hidden py-16 flex flex-col gap-4 justify-center items-center"
      >
        <Hero1 />
        <Hero2 />
        <Hero3 />
      </motion.div>
    </AnimatePresence>
  );
}
