"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Doodle from "@/components/Doodle";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import Contacts from "@/components/Contacts";
import Services from "@/components/Services";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
      });

      setTimeout(() => {
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div data-scroll-container>
        <section data-scroll-section id="home">
          <Hero />
        </section>
        <section data-scroll-section id="about">
          <About />
        </section>
        <section data-scroll-section id="services">
          <Services />
        </section>
        <section data-scroll-section id="services">
          <Works />
        </section>
        <section data-scroll-section id="services">
          <Doodle />
        </section>
        <section data-scroll-section id="services">
          <Contacts />
        </section>
        <section data-scroll-section id="services">
          <Footer />
        </section>
      </div>

      {isLoading && <Preloader />}
    </>
  );
}
