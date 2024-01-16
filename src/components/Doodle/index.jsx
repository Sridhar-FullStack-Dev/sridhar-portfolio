import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Doodle() {
  useEffect(() => {
    gsap.to(".doodle-image", {
      scale: 2,
      ease: "Power1.inOut",
      scrollTrigger: {
        trigger: ".doodle-image",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(".my-text", {
      x: "17vw",
      ease: "Power1.inOut",
      scrollTrigger: {
        trigger: ".my-text",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(".my-text2", {
      x: "-17vw",
      ease: "Power1.inOut",
      scrollTrigger: {
        trigger: ".my-text",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="text-white sm:py-10 md:px-8 md:py-40 overflow-hidden">
      <div className="flex w-full justify-center items-center">
        <div className="sm:h-20 md:h-32 w-96 rounded-full overflow-hidden">
          <Image
            src={
              "https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="image"
            height={1000}
            width={4000}
            className="sm:h-20 md:h-32 w-[40rem] rounded-full doodle-image object-cover"
          />
        </div>
        <p className="sm:text-4xl md:text-8xl hero-font pl-4">With</p>
      </div>

      <div className="my-text">
        <p className="sm:text-4xl md:text-8xl hero-font py-8 pl-4">Changes</p>
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="sm:h-20 md:h-32 w-96 rounded-full overflow-hidden">
          <Image
            src={
              "https://images.pexels.com/photos/411195/pexels-photo-411195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="image"
            height={6000}
            width={6000}
            priority
            className="sm:h-20 md:h-32 w-[50rem] rounded-full object-cover"
          />
        </div>
        <p className="sm:text-4xl md:text-8xl hero-font pl-4">Comes</p>
      </div>

      <div className="my-text2">
        <p className="sm:text-4xl md:text-8xl hero-font py-8 text-right pl-4">Opportunity</p>
      </div>
    </div>
  );
}
