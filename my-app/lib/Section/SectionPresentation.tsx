"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/Typography"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react" // ✅ Download supprimé
import { motion } from "framer-motion"
import Link from "next/link"

function SectionPresentation() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const backgroundShapeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div
      id="Sectionpresentation"
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Formes décoratives */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={backgroundShapeVariants}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-50 dark:bg-purple-900/10 rounded-full blur-3xl -z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={backgroundShapeVariants}
        transition={{ delay: 0.3 }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Bloc texte + boutons */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Disponible pour des projets
              </div>
              <Typography variant="h3" className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                Bonjour, je suis Luc
              </Typography>
              <Typography
                variant="h1"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Développeur{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  FullStack
                </span>
                <br />
                Web & Mobile
              </Typography>
              <Typography variant="body" className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                Je crée des expériences numériques exceptionnelles avec une attention particulière aux détails, à la
                performance et à l&apos;accessibilité.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg flex-1 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20"
              >
                <Link href='tel:+242067847109'>
                Embauchez-moi
                </Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 rounded-lg flex-1 transition-all duration-300"
                asChild
              >
                <Link href="https://lucdalland.my.canva.site/">
                  Télécharger mon CV
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <SocialButton icon={<Github className="h-5 w-5" />} href="https://github.com" />
              <SocialButton icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" />
              <SocialButton icon={<Twitter className="h-5 w-5" />} href="https://twitter.com" />
            </motion.div>
          </div>

          {/* Image */}
          <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative" variants={imageVariants}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl transform scale-110 -z-10"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="/images/luc2.png"
                  alt="Luc Dalland"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
              >
                <span className="text-blue-600 dark:text-blue-400 font-bold">1+</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">ans d&apos;expérience Entreprise</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Composant bouton réseau
function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
    >
      {icon}
    </a>
  )
}

export default SectionPresentation
