import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Contacts() {
  const [Loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Mailer
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/Email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          description,
        }),
      });

      if (response.ok) {
        console.log(await response.json());
        setSuccess(true);
      } else {
        console.log("Failed", response.status);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-scroll data-scroll-speed="0.3" className="pb-8">
      <motion.div
        initial={{ opacity: 0, background: "#000" }}
        whileInView={{ opacity: 1, background: "#FFF" }}
        transition={{ ease: "linear", duration: 0.5, delay: 1 }}
        className="text-black overflow-hidden sm:rounded-[30px] md:rounded-[2rem] hero-font pb-8"
      >
        <div data-scroll data-scroll-speed="0.1" className="py-12 w-full">
          <div className="flex items-center justify-center gap-4 sm:text-2xl md:text-7xl">
            <p>Ready</p>
            <p className="h-[1px] sm:w-14 md:w-36 bg-black"></p>
            <p>to work</p>
          </div>

          <div className="flex items-center justify-center gap-4 sm:text-2xl md:text-7xl mt-8">
            <p className="h-[1px] sm:w-14 md:w-36 bg-black"></p>
            <p>Work</p>
            <p className="whitespace-nowrap">
              with me <span className="font-bold">?</span>
            </p>
          </div>
        </div>

        <div className="sm:text-base md:text-2xl sm:px-4 md:px-14 font-bold mt-5">
          <form onSubmit={sendMail}>
            {/* First Name */}
            <div className="flex sm:flex-col md:flex-row justify-between items-center gap-8">
              <div className="md:w-1/2 flex">
                <label
                  htmlFor="firstName"
                  className="tracking-wide whitespace-nowrap"
                >
                  First Name&nbsp; <sup className="text-red-600">*</sup>
                </label>
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="first name"
                  type="text"
                  name="firstName"
                  required
                  className="w-full font-body px-4 text-gray-400 border-b border-gray-400 bg-transparent placeholder:text-sm placeholder:tracking-wider placeholder:font-body focus:border-black transition-colors focus:outline-none"
                />
              </div>

              {/* Second Name */}
              <div className="flex md:w-1/2">
                <label
                  htmlFor="secondName"
                  className="tracking-wide whitespace-nowrap"
                >
                  Second Name&nbsp; <sup className="text-red-600">*</sup>
                </label>
                <input
                  value={secondName}
                  onChange={(e) => {
                    setSecondName(e.target.value);
                  }}
                  placeholder="second name"
                  type="text"
                  name="secondName"
                  required
                  className="w-full font-body px-4 text-gray-400 border-b border-gray-400 bg-transparent placeholder:text-sm placeholder:tracking-wider placeholder:font-body focus:border-black transition-colors focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-8 flex sm:flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex md:w-1/2">
                <label
                  htmlFor="email"
                  className="tracking-wide whitespace-nowrap"
                >
                  Email&nbsp; <sup className="text-red-600">*</sup>
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="email"
                  type="email"
                  name="email"
                  required
                  className="w-full font-body px-4 text-gray-400 border-b border-gray-400 bg-transparent placeholder:text-sm placeholder:tracking-wider placeholder:font-body focus:border-black transition-colors focus:outline-none"
                />
              </div>

              <div className="flex md:w-1/2">
                <label
                  htmlFor="description"
                  className="tracking-wide whitespace-nowrap"
                >
                  Description&nbsp; <sup className="text-red-600">*</sup>
                </label>
                <input
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="description (optional)"
                  type="text"
                  name="description"
                  className="w-full font-body px-4 text-gray-400 border-b border-gray-400 bg-transparent placeholder:text-sm placeholder:tracking-wider placeholder:font-body focus:border-black transition-colors focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-16 cursor-none">
              <button
                type="submit"
                className="h-20 w-52 border border-black bg-transparent rounded-full tracking-wide"
              >
                {Loading ? (
                  "loading..."
                ) : success ? (
                  "success"
                ) : (
                  <div className="flex items-center justify-center gap-4">
                    Send
                    <HiOutlineArrowRight />
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
