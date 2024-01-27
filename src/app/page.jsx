"use client";
import { useEffect, useState } from "react";

// Components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Doodle from "@/components/Doodle";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Contacts from "@/components/Contacts";
import Services from "@/components/Services";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Cursor />
      <main className="p-10 mt-14">
        <div>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="works">
            <Works />
          </section>
          <section>
            <Doodle />
          </section>
          <section id="contacts">
            <Contacts />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}
