import { motion } from "framer-motion";
import ServicesComponents from "./ServicesComponents";


export default function Services() {
  return (
    <div className="h-screen text-white overflow-hidden p-16 rounded-2xl">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "linear", delay: 0.3, duration: 1 }}
        className="text-8xl hero-font text-center tracking-wider p-4"
      >
        SERVICES
      </motion.h1>

      <ServicesComponents />
    </div>
  );
}
