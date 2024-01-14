import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  clicked: { color: "#CEF34A", opacity: 1 },
  notClicked: { color: "#FFF", opacity: 0.6 },
};

const Menu = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Works",
    href: "#works",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function MenuItems() {
  const [isClickedNav, setIsClickedNav] = useState(null);

  const handleClick = (index) => {
    setIsClickedNav(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "-50px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
      className="w-96 flex justify-between items-center"
    >
      {Menu.map((Items, MenuKey) => {
        const [isHovered, setIshovered] = useState(false);

        const hoverEffectOn = () => {
          setIshovered(true);
        };

        const hoverEffectOff = () => {
          setIshovered(false);
        };
        return (
          <div key={MenuKey}>
            <motion.div
            >
              <Link
                onMouseEnter={hoverEffectOn}
                onMouseLeave={hoverEffectOff}
                href={Items.href}
                className=" transition-all delay-100 duration-150 ease-linear text-sm"
              >
                <motion.span
                  variants={variants}
                  animate={isClickedNav === MenuKey ? "clicked" : "notClicked"}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  onClick={() => handleClick(MenuKey)}
                >
                  {Items.name}
                </motion.span>
              </Link>
            </motion.div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="w-full h-[1px] bg-[#CEF34A] "
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}
