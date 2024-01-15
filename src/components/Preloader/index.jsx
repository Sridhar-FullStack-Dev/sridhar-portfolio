import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="bg-black text-white hero-font fixed top-0 h-screen w-screen flex justify-center items-center text-9xl whitespace-nowrap z-[999]">
      <motion.div
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
      >
        Loading Loading Loading
        Loading Loading Loading
        Loading Loading Loading
        Loading Loading Loading
        Loading Loading Loading
        Loading Loading Loading
      </motion.div>
    </div>
  );
}
