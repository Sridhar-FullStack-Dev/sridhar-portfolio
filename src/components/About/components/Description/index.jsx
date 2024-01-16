import Link from "next/link";
import { motion } from "framer-motion";

export default function Description() {
  return (
    <div className="flex sm:flex-col md:flex-row w-full p-4 gap-4 sm:text-[12px] md:text-sm">
      <div className="md:w-1/2 text-justify">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-justify font-bold font-body tracking-wider transition-all ease-linear duration-100 delay-75"
        >
          As a Fullstack developer, I bring expertise in React (Next.js),
          Tailwind, RouteAPIs, Node.js, Webflow, and a suite of other web
          development tools. Passionate about crafting seamless and innovative
          digital solutions, I am committed to delivering cutting-edge
          applications that redefine user experiences. See{" "}
          <Link href={"#services"} className="text-[#CEF34A] font-bold">
            services
          </Link>
        </motion.p>
      </div>

      <div className="md:w-1/2 text-justify">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
          className="text-justify font-bold font-body tracking-wider transition-all ease-linear duration-100 delay-75"
        >
          I'm your go-to Full Stack Developer, creating stunning webpages for
          your business / shops / etc & creating fully functionable bug-free web
          apps. Analyze, Reasearch and Develop is the key to create the awesome
          projects! The demos are given here &nbsp;
          <Link href={"#demo"} className="text-[#CEF34A] font-bold">
            Demo.
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
