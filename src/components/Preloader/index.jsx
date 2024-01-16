import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ ease: "linear", duration: 1, delay: 0.3 }}
        className="bg-white text-black hero-font fixed top-0 h-screen w-screen flex justify-center items-center text-9xl whitespace-nowrap z-[9999]"
      >
        <motion.div
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
        >
          Loading... Loading... Loading... Loading... Loading... Loading...
          Loading... Loading... Loading... Loading... Loading... Loading...
          Loading... Loading... Loading... Loading... Loading... Loading...
          Loading... Loading... Loading... Loading... Loading... Loading...
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
