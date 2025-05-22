"use client"

import { Typography } from "@/components/ui/Typography"
import { useEffect, useRef } from "react"
import CardCompetence from "../_components/CardCompetence"

function MesCompetences() {
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
      const elements = componentRef.current.querySelectorAll("[data-animate]")
      elements.forEach((element) => {
        observer.observe(element)
      })
    }

    return () => {
      if (componentRef.current) {
        const elements = componentRef.current.querySelectorAll("[data-animate]")
        elements.forEach((element) => {
          observer.unobserve(element)
        })
      }
    }
  }, [])

  return (
    <div id="Mescompetences" ref={componentRef} className="flex flex-col items-center justify-center p-10 gap-10 w-full">
      <div data-animate="fade-down" className="animation-item">
        <Typography variant="h3" className="m-auto text-center">
          Mes Compétances
        </Typography>
      </div>

      <div data-animate="fade-up" className="animation-item">
        <Typography variant="body" className="text-center">
          Mon expertise technique me permet de créer des applications web et mobiles complètes, du frontend au backend,
          en passant par le déploiement.
        </Typography>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <div data-animate="slide-right" className="animation-item">
            <CardCompetence titre="Frontend" />
          </div>
          <div data-animate="slide-left" className="animation-item">
            <CardCompetence titre="Backend" />
          </div>
        </div>
        <div className="sm:m-auto">
          <div data-animate="zoom-in" className="animation-item">
            <CardCompetence titre="Outils" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animation-item {
          opacity: 0;
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Effet de fondu vers le bas */
        [data-animate="fade-down"] {
          transform: translateY(-30px);
        }
        
        /* Effet de fondu vers le haut */
        [data-animate="fade-up"] {
          transform: translateY(30px);
        }
        
        /* Effet de glissement depuis la droite */
        [data-animate="slide-right"] {
          transform: translateX(-50px) rotate(-2deg);
          transition-delay: 0.1s;
        }
        
        /* Effet de glissement depuis la gauche */
        [data-animate="slide-left"] {
          transform: translateX(50px) rotate(2deg);
          transition-delay: 0.2s;
        }
        
        /* Effet de zoom */
        [data-animate="zoom-in"] {
          transform: scale(0.8);
          transition-delay: 0.3s;
        }
        
        /* État animé */
        .animate-element {
          opacity: 1;
          transform: translateY(0) translateX(0) rotate(0) scale(1);
        }
        
        /* Ajout d'un léger rebond à la fin de l'animation */
        @keyframes slight-bounce {
          0%, 100% { transform: translateY(0); }
          85% { transform: translateY(-5px); }
        }
        
        /* Appliquer le rebond après l'animation principale */
        .animate-element {
          animation: slight-bounce 0.5s ease-out 0.9s;
        }
      `}</style>
    </div>
  )
}

export default MesCompetences
