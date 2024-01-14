import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services1 = [
  {
    name: "Web development",
    description: "Static, Dynamic and Fullstack",
  },
  {
    name: "Database Management",
    description: "Organizing & controls the data with secured SSL",
  },
  {
    name: "API services",
    description: "Providing API for React Js, PHP, JS, etc",
  },
  {
    name: "AI integration",
    description: "I am integrated with AI like Copilot, ChatGPT",
  },
  {
    name: "Chat bot",
    description: "As I said chatbot are the most important for web apps",
  },
  {
    name: "UI designing",
    description: "Designing stunning websites to improve business growth",
  },
  {
    name: "CMS",
    description: "Manages the events among your webpages. Eg: christmas, etc;",
  },
];

const Services2 = [
  {
    name: "Web App development",
    description: "Static, Dynamic and Fullstack",
  },
  {
    name: "MySql & MongoDB",
    description: "Organizing & controls the data with secured SSL",
  },
  {
    name: "App development",
    description: "Android App development",
  },
  {
    name: "Cloud Management",
    description: "Managing and providing cloud services",
  },
  {
    name: "Data Analytics",
    description: "Analyze your business and helps to improve your business",
  },
  {
    name: "UX designing",
    description: "Designing stunning websites to improve business growth",
  },
  {
    name: "ML & NLP",
    description: "Machine Learning & Natural Language Processing",
  },
];
export default function ServicesComponents() {
  const [isHovered, setIsHovered] = useState(null);
  const [isHoveredSecond, setIsHoveredSecond] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
        className="text-white flex w-full gap-4 mt-8"
      >
        {Services1.map((service, first) => {
          return (
            <div
              key={first}
              onMouseEnter={() => setIsHovered(first)}
              onMouseLeave={() => setIsHovered(null)}
              className="h-40 w-40 bg-white bg-opacity-5 flex items-center justify-center p-4 text-sm relative overflow-hidden"
            >
              <p className="text-center p-2">{service.name}</p>

              <AnimatePresence>
                {isHovered == first && (
                  <motion.div
                    initial={{ top: 200 }}
                    animate={{ top: 0 }}
                    exit={{ top: 200 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    className="absolute top-0 left-0 h-40 w-40 bg-white text-black flex items-center justify-center p-4 text-sm"
                  >
                    <div>
                      <p className="font-bold text-center font-body p-2">
                        {service.name}
                      </p>
                      <div className="text-center">
                        <p className="p-2 text-[12px]">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5, delay: 0.5 }}
        className="text-white flex w-full gap-4 mt-8"
      >
        {Services2.map((service, second) => {
          return (
            <div
              key={second}
              onMouseEnter={() => setIsHoveredSecond(second)}
              onMouseLeave={() => setIsHoveredSecond(null)}
              className="h-40 w-40 bg-white bg-opacity-5 flex items-center justify-center p-4 text-sm relative overflow-hidden"
            >
              <p className="text-center p-2">{service.name}</p>

              <AnimatePresence>
                {isHoveredSecond == second && (
                  <motion.div
                    initial={{ top: 200 }}
                    animate={{ top: 0 }}
                    exit={{ top: 200 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    className="absolute top-0 left-0 h-40 w-40 bg-white text-black flex items-center justify-center p-4 text-sm"
                  >
                    <div>
                      <p className="font-bold text-center font-body p-2">
                        {service.name}
                      </p>
                      <div className="text-center">
                        <p className="p-2 text-[12px]">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </>
  );
}
