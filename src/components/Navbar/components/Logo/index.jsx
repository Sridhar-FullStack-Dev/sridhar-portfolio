import { motion } from "framer-motion";
import "../../index.scss";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-50px" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
      title="Sridhar - Portfolio"
    >
      <p className="logo">Portfolio</p>
    </motion.div>
  );
}
