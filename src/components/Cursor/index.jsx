import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".custom-cursor");
    const cursorPointerElements = document.querySelectorAll(".cursor-pointer");

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event) => {
      const link = event.target;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 });
        cursorText.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
    cursorPointerElements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnterLink);
      element.addEventListener("mouseleave", onMouseLeaveLink);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
      id="custom-cursor"
      className="custom-cursor sm:hidden lg:block"
    ></motion.div>
  );
}
