import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";

const footerMarquee = [
  {
    content: "UI/UX Design",
  },
  {
    content: "Digital Marketing",
  },
  {
    content: "Brand Promotion",
  },
  {
    content: "User Research",
  },
  {
    content: "Web Flow",
  },
  {
    content: "Business Growth Solutions",
  },
];

const footerLinks = [
  {
    href: "https://github.com/Sridhar-FullStack-Dev",
    name: "Github",
    hover: "hover:text-gray-400",
  },
  {
    href: "https://www.linkedin.com/in/sridhar-egambaram-1720721a8/",
    name: "Linkedin",
    hover: "hover:text-blue-600",
  },
  {
    href: "https://www.instagram.com/sridhar._.official",
    name: "Instagram",
    hover: "hover:text-red-600",
  },
  {
    href: "tel:+919843849354",
    name: "9843849354",
    hover: "hover:text-green-600 sm:hidden md:block"
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const imageRef = useRef();

  useEffect(() => {
    gsap.to(imageRef.current, {
      width: "180rem",
      ease: "power1.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="text-white overflow-hidden">
      <div className="p-2 bg-opacity-5">
        <motion.div
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
          className="text-white flex font-body font-bold sm:text-3xl md:text-4xl gap-4 relative uppercase"
        >
          {footerMarquee.map((marquee, first) => (
            <div
              key={first}
              className="whitespace-nowrap flex gap-2 items-center justify-center"
            >
              <div className="h-10 w-10 mr-2 rounded-full overflow-hidden">
                <Image
                  src={"/assets/asterisk.png"}
                  alt="*"
                  height={512}
                  width={512}
                  className="h-10 w-10 object-cover"
                />
              </div>
              {marquee.content}
            </div>
          ))}

          {footerMarquee.map((marquee, second) => (
            <div
              key={second}
              className="whitespace-nowrap flex gap-2 items-center justify-center"
            >
              <div className="h-10 w-10 mr-2 rounded-full overflow-hidden">
                <Image
                  src={"/assets/asterisk.png"}
                  alt="*"
                  height={512}
                  width={512}
                  className="h-10 w-10 object-cover"
                />
              </div>
              {marquee.content}
            </div>
          ))}

          {footerMarquee.map((marquee, third) => (
            <div
              key={third}
              className="whitespace-nowrap flex gap-2 items-center justify-center"
            >
              <div className="h-10 w-10 mr-2 rounded-full overflow-hidden">
                <Image
                  src={"/assets/asterisk.png"}
                  alt="*"
                  height={512}
                  width={512}
                  className="h-10 w-10 object-cover"
                />
              </div>
              {marquee.content}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex w-full justify-between items-center mt-8 font-body sm:text-[6px] md:text-[12px] ">
        <div>
          <p>
            Design Strength :<br /> easily understandable format
          </p>
        </div>

        <div>
          <p className="w-4">Let's collaborate</p>
        </div>

        <div>
          <div>
            <Link href={"mailto:sridhar22122002@gmail.com"}>
              sridhar22122002@gmail.com
            </Link>
            <br />
            <Link href={"tel:9843849354"}>984-384-9354</Link>
          </div>
        </div>
      </div>

      <div className="py-4 flex w-full justify-between gap-4 mt-8">
        <div className="w-3/4 overflow-hidden">
          <Image ref={imageRef}
            src={"/assets/img.jpg"}
            alt="sridhar-portfolio"
            height={10000}
            width={10000}
            priority
            className="grayscale sm:h-40 sm:w-64 md:h-80 md:w-0 object-cover"
          />
        </div>

        <div className="flex flex-col w-1/4 justify-center items-start gap-4 font-body sm:text-[10px] md:text-2xl lg:text-3xl">
          {footerLinks.map((links, index) => (
            <Link
              key={index}
              href={links.href}
              className={`${links.hover} underline transition-all duration-150 delay-75 ease-linear mb-2`}
            >
              <p className="flex gap-2">
                {links.name} <GoArrowUpRight />
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="sm:text-[5px] md:text-[12px] font-body flex justify-between items-end mt-8">
        <div>
          <p>&copy;{currentYear}</p>
          <p className="tracking-widest">sridhar-portfolio-ashen.vercel.app</p>
        </div>

        <div className="flex items-center justify-center sm:gap-0 md:gap-2">
          <div>
            <p>This website contains cookies</p>
          </div>
          <div>
            <TiTickOutline className="text-green-600" />
          </div>
        </div>

        <div>Thanks for reading &nbsp; &hearts;</div>
      </div>
    </div>
  );
}
