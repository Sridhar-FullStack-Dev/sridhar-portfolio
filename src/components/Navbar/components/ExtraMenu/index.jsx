import gsap from "gsap";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ExtraMenu() {
  const [isHovered, setIshovered] = useState(false);

  const hoverEffectOn = () => {
    setIshovered(true);
  };

  const hoverEffectOff = () => {
    setIshovered(false);
  };

  // GSAP
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      x: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: "50px" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
      className="sm:hidden lg:block"
    >
      <Link
        onMouseEnter={hoverEffectOn}
        onMouseLeave={hoverEffectOff}
        href={"/"}
        className="ExtraMenu flex items-center justify-between whitespace-nowrap gap-2 text-sm"
      >
        <p>Start collabrate with me</p>

        <p ref={arrowRef} className="ExtraMenu-arrow">
          <FaArrowRight />
        </p>
      </Link>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="w-full h-[1px] bg-white "
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
