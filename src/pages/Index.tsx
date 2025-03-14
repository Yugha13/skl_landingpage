import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import UiCard from "@/components/UiCard";
import ContactPage from "@/components/Contact";
import Price from "@/components/Price";
import Footer from "@/components/Footer";


const Index = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();
    
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <section id="hero">
        <Hero />
      </section>
      <Navbar />
      <section id="features" className="bg-gradient-to-b from-[#0c0e0c] to-white">
        <Features />
      </section>
      <section id="about">
        <UiCard />
      </section>
      <section id="pricing">
        <Price />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      <Footer />
    </div>
  );
};


export default Index;
