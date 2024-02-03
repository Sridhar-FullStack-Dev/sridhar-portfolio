import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SwiperJS
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="text-white mt-8 font-body">
      <div className="w-full sm:pl-5 md:pl-0">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 5,
            },
          }}
          className="mySwiper"
        >
          {Services1.map((service1, firstRow) => (
            <SwiperSlide
              key={firstRow}
              onMouseEnter={() => setIsHovered(firstRow)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="sm:h-28 sm:w-28 md:h-36 md:w-36 bg-white bg-opacity-5 flex justify-center items-center sm:text-[12px] md:text-sm relative overflow-hidden">
                <p className="text-center p-2">{service1.name}</p>
              </div>

              <AnimatePresence>
                {isHovered == firstRow && (
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    onClick={() => setIsHovered(null)}
                    className="sm:h-28 sm:w-28 md:h-36 md:w-36 bg-white text-black flex flex-col justify-center items-center sm:text-[12px] md:text-sm absolute top-0 left-0 p-2"
                  >
                    <p className="text-center font-bold">{service1.name}</p>
                    <p className="text-center">{service1.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 5,
            },
          }}
          className="mySwiper mt-8"
        >
          {Services2.map((service2, secondRow) => (
            <SwiperSlide
              key={secondRow}
              onMouseEnter={() => setIsHoveredSecond(secondRow)}
              onMouseLeave={() => setIsHoveredSecond(null)}
            >
              <div className="sm:h-28 sm:w-28 md:h-36 md:w-36 bg-white bg-opacity-5 flex justify-center items-center sm:text-[12px] md:text-sm relative overflow-hidden">
                <p className="text-center p-2">{service2.name}</p>
              </div>

              <AnimatePresence>
                {isHoveredSecond == secondRow && (
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    onClick={() => setIsHoveredSecond(null)}
                    className="sm:h-28 sm:w-28 md:h-36 md:w-36 bg-white text-black flex flex-col justify-center items-center sm:text-[12px] md:text-sm absolute top-0 left-0 p-2"
                  >
                    <p className="text-center font-bold">{service2.name}</p>
                    <p className="text-center">{service2.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex text-[10px] py-2 text-right items-center">
          <div>swipe to see more &nbsp;</div>
          <div ref={arrowRef}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
