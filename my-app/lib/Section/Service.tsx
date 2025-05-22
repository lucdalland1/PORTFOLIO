"use client"

import { Typography } from "@/components/ui/Typography"
import { useEffect, useRef } from "react"
import CardService from "../_components/CardService"
import { Card } from "@/components/ui/card"

function Service() {
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
          // Ajouter la classe pour déclencher l'animation
          entry.target.classList.add("in-view")

          // Pour les conteneurs de cartes, animer chaque carte séquentiellement
          if (entry.target.classList.contains("cards-container")) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("card-visible")
              }, 150 * index) // Délai progressif pour chaque carte
            })
          }
        } else {
          // Réinitialiser les animations quand l'élément sort du viewport
          entry.target.classList.remove("in-view")

          if (entry.target.classList.contains("cards-container")) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card) => {
              card.classList.remove("card-visible")
            })
          }
        }
      })
    }, options)

    // Observer le titre et le conteneur de cartes
    if (componentRef.current) {
      const elementsToAnimate = componentRef.current.querySelectorAll(".animate-element")
      elementsToAnimate.forEach((element) => {
        observer.observe(element)
      })
    }

    return () => {
      if (componentRef.current) {
        const elementsToAnimate = componentRef.current.querySelectorAll(".animate-element")
        elementsToAnimate.forEach((element) => {
          observer.unobserve(element)
        })
      }
    }
  }, [])

  return (
    <div id="Service" ref={componentRef} className="flex justify-center flex-col items-center gap-6 py-8">
      <div className="animate-element title-container overflow-hidden">
        <Typography variant="h3" className="services-title">
          Services
        </Typography>
      </div>

      <div className="animate-element cards-container w-full max-w-3xl grid grid-cols-4 gap-2 ">
       <Card className="service-card col-span-full sm:col-span-2 md:col-span-1" >
                <CardService nombre={0} titre={"Freelance"} label={"Développement de projets sur mesure selon vos besoins. Flexibilité et disponibilité pour des missions ponctuelles ou régulières."} Tab={[
            "Projets sur mesure",
            "Flexibilité horaire",
            "Tarification au projet",
          ]} icon={undefined} />

       </Card>
        <Card className="service-card col-span-full sm:col-span-2 md:col-span-1" >
                <CardService nombre={0} titre={"Full-Time"} label={"Intégration complète au sein de votre équipe. Collaboration étroite et engagement total dans vos projets d'entreprise."} Tab={[
            "Engagement long terme",
            "Intégration équipe",
            "Support continu",
          ]} icon={undefined} />

       </Card> 
       <Card className="service-card col-span-full sm:col-span-2 md:col-span-1">
                <CardService nombre={0} titre={"Full-Remote"} label={"Travail à distance avec une communication efficace. Adaptation aux différents fuseaux horaires et méthodes de travail."} Tab={["Travail à distance",
            "Communication asynchrone",
            "Disponibilité flexible"]} icon={undefined} />

       </Card> 
       <Card className="service-card col-span-full sm:col-span-2 md:col-span-1">
                <CardService nombre={0} titre={"Enseignant"} label={""} Tab={[]} icon={undefined} />

       </Card>
      </div>

      <style jsx global>{`
        /* Animation du titre */
        .title-container {
          position: relative;
          overflow: hidden;
          padding: 10px 0;
        }
        
        .services-title {
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .title-container.in-view .services-title {
          opacity: 1;
          transform: translateY(0);
        }
        
        .title-container::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, currentColor, transparent);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(-50%);
        }
        
        .title-container.in-view::after {
          width: 80px;
        }
        
        /* Animation des cartes */
        .service-card {
          opacity: 0;
          transform: perspective(1000px) rotateX(10deg) translateY(50px) scale(0.9);
          filter: blur(5px);
          transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        
        .service-card.card-visible {
          opacity: 1;
          transform: perspective(1000px) rotateX(0) translateY(0) scale(1);
          filter: blur(0);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }
        
        /* Effet de survol sur les cartes */
        .service-card.card-visible:hover {
          transform: perspective(1000px) translateY(-5px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          transition: all 0.4s ease-out;
        }
        
        /* Animation du conteneur de cartes */
        .cards-container {
          position: relative;
        }
        
        .cards-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 1.5s ease-out;
          pointer-events: none;
          z-index: -1;
        }
        
        .cards-container.in-view::before {
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}

export default Service
