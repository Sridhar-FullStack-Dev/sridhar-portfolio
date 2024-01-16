import { motion } from "framer-motion";
import ServicesComponents from "./ServicesComponents";

export default function Services() {
  return (
    <div className="text-white overflow-hidden sm:pb-16 md:pb-0 md:p-16 rounded-2xl">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "linear", delay: 0.3, duration: 1 }}
        className="sm:text-5xl md:text-8xl hero-font text-center tracking-wider md:p-4"
      >
        SERVICES
      </motion.h1>

      <ServicesComponents />
    </div>
  );
}
