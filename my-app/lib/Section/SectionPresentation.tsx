"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/Typography"
import { useEffect, useRef } from "react"
import Image from "next/image"

function SectionPresentation({ ...props }) {
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-element")
        } else {
          entry.target.classList.remove("animate-element")
        }
      })
    }, options)

    // Observer les éléments à animer
    if (componentRef.current) {
      const elements = componentRef.current.querySelectorAll(".animate-on-scroll")
      elements.forEach((element) => {
        observer.observe(element)
      })
    }

    return () => {
      if (componentRef.current) {
        const elements = componentRef.current.querySelectorAll(".animate-on-scroll")
        elements.forEach((element) => {
          observer.unobserve(element)
        })
      }
    }
  }, [])

  return (
    <div
      ref={componentRef}
      className="flex flex-col lg:flex-row items-start justify-between w-full h-auto gap-y-6 lg:gap-x-40"
    >
      {/* Bloc Texte + Boutons */}
      <div className="w-full lg:w-1/3 text-md flex justify-start items-start flex-col gap-3 h-auto animate-on-scroll">
        <Typography variant="h3" className="max-sm:m-auto">
          Bonjour, je suis Luc
        </Typography>

        <Typography variant="h2" className="text-center min-sm:text-left text-2xl/11">
          Développeur FullStack - Web & Mobile
        </Typography>

        <div className="grid grid-cols-4 gap-2 w-full">
          <Button className="col-span-full sm:col-span-2" asChild>
            <Typography variant="h3" className="font-bold">
              Embauchez-moi
            </Typography>
          </Button>
          <Button variant="outline" className="col-span-full sm:col-span-2" asChild>
            <Typography variant="h3">Télécharger mon CV</Typography>
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-auto animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
        <Image
          src="/images/luc2.png"
          alt="Luc Dalland"
          width={300}
          height={300}
          className="max-sm:m-auto max-sm:w-full  m-auto min-lg:mr-12"
        />
      </div>

      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-element {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

export default SectionPresentation
