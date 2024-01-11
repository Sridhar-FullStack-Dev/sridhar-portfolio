import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = [
  {
    name: "Home",
    href: "/",
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
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function MenuItems() {
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
          <div>
            <motion.div
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <Link
                onMouseEnter={hoverEffectOn}
                onMouseLeave={hoverEffectOff}
                key={MenuKey}
                href={Items.href}
                className=" transition-all delay-100 duration-150 ease-linear text-sm"
              >
                {Items.name}
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
