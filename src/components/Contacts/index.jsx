import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Contacts() {
  return (
    <div data-scroll data-scroll-speed="0.3">
      <motion.div
        initial={{ opacity: 0, background: "#000" }}
        whileInView={{ opacity: 1, background: "#FFF" }}
        transition={{ ease: "linear", duration: 0.5, delay: 1 }}
        className="h-screen text-black overflow-hidden rounded-[2rem] hero-font"
      >
        <div data-scroll data-scroll-speed="0.1" className="py-12 w-full">
          <div className="flex items-center justify-center gap-4 text-7xl">
            <p>Ready</p>
            <p className="h-[1px] w-36 bg-black"></p>
            <p>to work</p>
          </div>

          <div className="flex items-center justify-center gap-4 text-7xl mt-8">
            <p className="h-[1px] w-36 bg-black"></p>
            <p>Work</p>
            <p>
              with me <span className="font-bold">?</span>
            </p>
          </div>
        </div>

        <div className="text-2xl px-14 font-bold mt-5">
          <form>
            {/* First Name */}
            <div className="flex justify-between items-center gap-8">
              <div className="w-1/2 flex">
                <label
                  htmlFor="firstName"
                  className="tracking-wide whitespace-nowrap"
                >
                  First Name&nbsp; <sup className="text-red-600">*</sup>
                </label>
                <input
                  placeholder="first name"
                  type="text"
                  name="firstName"
                  required
                  className="w-full font-body px-4 text-gray-400 border-b border-gray-400 bg-transparent placeholder:text-sm placeholder:tracking-wider placeholder:font-body focus:border-black transition-colors focus:outline-none"
                />
              </div>

              {/* Second Name */}
              <div className="flex w-1/2">
                <label
                  htmlFor="secondName"
                  className="tracking-wide whitespace-nowrap"
                >
                  Second Name&nbsp; <sup className="text-red-600">*</sup>
                </label>
                <input
                  placeholder="second name"
                  type="text"
                  name="secondName"
                  required
                  className="w-full font-body px-4 text-gray-400 border-b border-gray-400 bg-transparent placeholder:text-sm placeholder:tracking-wider placeholder:font-body focus:border-black transition-colors focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-8 flex justify-between items-center gap-8">
              <div className="flex w-1/2">
                <label
                  htmlFor="email"
                  className="tracking-wide whitespace-nowrap"
                >
                  Email&nbsp; <sup className="text-red-600">*</sup>
                </label>
                <input
                  placeholder="email"
                  type="email"
                  name="email"
                  required
                  className="w-full font-body px-4 text-gray-400 border-b border-gray-400 bg-transparent placeholder:text-sm placeholder:tracking-wider placeholder:font-body focus:border-black transition-colors focus:outline-none"
                />
              </div>

              <div className="flex w-1/2">
                <label
                  htmlFor="description"
                  className="tracking-wide whitespace-nowrap"
                >
                  Description&nbsp; <sup className="text-red-600">*</sup>
                </label>
                <input
                  placeholder="description (optional)"
                  type="text"
                  name="description"
                  className="w-full font-body px-4 text-gray-400 border-b border-gray-400 bg-transparent placeholder:text-sm placeholder:tracking-wider placeholder:font-body focus:border-black transition-colors focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-16">
              <button
                type="submit"
                className="h-20 w-52 border border-black bg-transparent rounded-full tracking-wide"
              >
                <p className="flex items-center justify-center gap-4">
                  Send <HiOutlineArrowRight />
                </p>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
