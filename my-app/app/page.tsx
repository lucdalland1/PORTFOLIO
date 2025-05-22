"use client"

import Section from "@/lib/_components/Section"
import Apropos from "@/lib/Section/Apropos"
import ContactSection from "@/lib/Section/Contact"
import MesCompetences from "@/lib/Section/MesCompetences"
import MesProjets from "@/lib/Section/MesProjets"
import SectionPresentation from "@/lib/Section/SectionPresentation"
import Service from "@/lib/Section/Service"
import { useEffect, useRef } from "react"

function Page() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentPage = pageRef.current; // ✅ copie sécurisée de la ref
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-section");
        } else {
          entry.target.classList.remove("animate-section");
        }
      });
    }, options);
  
    if (currentPage) {
      const sections = currentPage.querySelectorAll(".section-animate");
      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  
    return () => {
      if (currentPage) {
        const sections = currentPage.querySelectorAll(".section-animate");
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);
  

  return (
    <div ref={pageRef} className="flex flex-col gap-5">
      <Section>
        <div className="section-animate">
          <SectionPresentation />
        </div>
        <div className="section-animate">
          <Apropos />
        </div>
      </Section>
      <div className="bg-primary/15">
        <Section>
          <div className="section-animate">
            <MesCompetences />
          </div>
        </Section>
      </div>
      <Section>
        <div className="section-animate">
          <Service />
        </div>
        <div className="section-animate">
          <MesProjets />
        </div>
      </Section>
      <div className="bg-primary/40">
        <div className="section-animate">
          <ContactSection />
        </div>
      </div>

      <style jsx global>{`
        .section-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-section {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

export default Page
