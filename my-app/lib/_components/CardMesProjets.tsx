"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

interface Projet {
  id: number
  titre: string
  description: string
  technologies: string[]
  image: string
  lienDemo?: string
  lienGithub?: string
  featured?: boolean
}

const projets: Projet[] = [
  {
    id: 1,
    titre: "Portfolio Personnel",
    description: "Site web personnel présentant mes compétences et projets avec des animations interactives.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    image: "/images/Design sans titre.png",
    lienDemo: "#",
    lienGithub: "#",
    featured: true,
  },
  {
    id: 2,
    titre: "Application de Gestion",
    description: "Dashboard administratif pour gérer les utilisateurs, produits et commandes.",
    technologies: ["TypeScript", "React", "Node.js"],
    image: "/placeholder.svg?height=300&width=300",
    lienDemo: "#",
  },
  {
    id: 3,
    titre: "E-commerce Mobile",
    description: "Application mobile de commerce électronique avec paiement intégré.",
    technologies: ["React Native", "Firebase", "Stripe"],
    image: "/placeholder.svg?height=300&width=300",
    lienGithub: "#",
  },
  {
    id: 4,
    titre: "API RESTful",
    description: "Service backend avec authentification et gestion des données.",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: "/placeholder.svg?height=300&width=300",
    lienDemo: "#",
    lienGithub: "#",
  },
]

function CardMesProjets() {
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({})
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number.parseInt(entry.target.getAttribute("data-id") || "0")
          if (entry.isIntersecting) {
            // Ajouter un délai progressif basé sur l'index
            setTimeout(
              () => {
                setVisibleCards((prev) => ({ ...prev, [id]: true }))
              },
              (id - 1) * 200, // Délai progressif de 200ms entre chaque carte
            )
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    // Observer chaque carte
    const cardElements = document.querySelectorAll(".projet-card")
    cardElements.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      cardElements.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
      {projets.map((projet) => (
        <Card
          key={projet.id}
          data-id={projet.id}
          className={`projet-card overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-700 ease-out ${
            visibleCards[projet.id] ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-1"
          } ${projet.featured ? "md:col-span-2" : ""}`}
        >
          <div className="relative overflow-hidden group aspect-video">
            <Image
              src={projet.image || "/placeholder.svg"}
              alt={projet.titre}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {projet.featured && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-blue-500 hover:bg-blue-600">Projet Vedette</Badge>
              </div>
            )}
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{projet.titre}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{projet.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projet.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-gray-100 dark:bg-gray-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              {projet.lienDemo && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={projet.lienDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Demo
                  </Link>
                </Button>
              )}
              {projet.lienGithub && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={projet.lienGithub} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> Code
                  </Link>
                </Button>
              )}
            </div>
            <Button variant="ghost" size="sm" className="group text-blue-500 hover:text-blue-600" asChild>
              <Link href={`/projets/${projet.id}`}>
                Détails <ArrowRight className="h-4 w-4 ml-1 group-hover:pl-3 transition-all ease-in-out duration-500 " />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardMesProjets
