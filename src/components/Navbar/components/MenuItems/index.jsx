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
    href: "#contacts",
  },
];

export default function MenuItems() {
  const [isClickedNav, setIsClickedNav] = useState(null);
  const [isHovered, setIshovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => {
    setIsClickedNav(index);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
        className="w-96 flex justify-between items-center sm:hidden md:flex"
      >
        {Menu.map((Items, MenuKey) => (
          <div key={MenuKey}>
            <motion.div>
              <Link
                onMouseEnter={() => setIshovered(true)}
                onMouseLeave={() => setIshovered(false)}
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
        ))}
      </motion.div>

      <div className=" sm:block md:hidden">
        <div onClick={() => setIsOpen(!isOpen)} className="bg-white font-body rounded-full py-2 px-4 text-base text-black">
          <p>Menu</p>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              className="fixed top-0 right-0 h-screen w-3/4 bg-white text-black hero-font rounded-lg text-3xl"
            >
              <div
                onClick={() => setIsOpen(false)}
                className="flex justify-end px-4 py-2"
              >
                <p className="bg-black rounded-full text-white text-base font-body p-4">
                  Close
                </p>
              </div>

              <div>
                <ul>
                  {Menu.map((Items, mobileNav) => (
                    <motion.li
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: 0.3,
                      }}
                      key={mobileNav}
                      className="p-6"
                    >
                      <Link href={Items.href}>{Items.name}</Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="px-4">
                  <div className="h-[0.5px] w-full bg-black rounded"></div>

                  <div className="italic font-body pt-2">984-354-9354</div>
                  <div className="italic font-body pt-2">TN - IND</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
