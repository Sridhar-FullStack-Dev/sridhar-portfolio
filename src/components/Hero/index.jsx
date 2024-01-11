import "./index.scss";
import { motion } from "framer-motion";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut" }}
      data-scroll
      data-scroll-speed="0.2"
      className="flex hero-font text-8xl flex-col justify-between items-center text-white w-full h-[70vh] overflow-hidden py-16"
    >
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </motion.div>
  );
}
