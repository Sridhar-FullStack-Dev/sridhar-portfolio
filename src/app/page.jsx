"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Doodle from "@/components/Doodle";
import Contacts from "@/components/Contacts";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
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

  return (
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
  );
}
