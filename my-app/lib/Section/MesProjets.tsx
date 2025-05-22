"use client"

import { useEffect, useRef, useState } from "react"
import CardMesProjets from "../_components/CardMesProjets"

function MesProjets() {
  const [isVisible, setIsVisible] = useState({
    title: false,
    subtitle: false,
  })

  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, title: true }))
        }
        if (entry.target === subtitleRef.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, subtitle: true }))
        }
      })
    }, { threshold: 0.1 })
  
    const currentTitleRef = titleRef.current
    const currentSubtitleRef = subtitleRef.current
  
    if (currentTitleRef) observer.observe(currentTitleRef)
    if (currentSubtitleRef) observer.observe(currentSubtitleRef)
  
    return () => {
      if (currentTitleRef) observer.unobserve(currentTitleRef)
      if (currentSubtitleRef) observer.unobserve(currentSubtitleRef)
    }
  }, [])
  

  return (
    <div id="Mesprojets" className="flex flex-col justify-center items-center pt-20 gap-10 pb-20 px-4">
      <div
        ref={titleRef}
        className={`transition-all duration-1000 transform ${
          isVisible.title ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center relative">
          Mes Projets
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
        </h1>
      </div>

      <div
        ref={subtitleRef}
        className={`transition-all duration-1000 delay-300 transform ${
          isVisible.subtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl">
          Découvrez une sélection de mes projets les plus récents et significatifs.
        </h3>
      </div>

      <div
        className={`w-full transition-all duration-1000 delay-500 transform ${
          isVisible.subtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <CardMesProjets />
      </div>
    </div>
  )
}

export default MesProjets
