"use client"

import { Typography } from "@/components/ui/Typography"
import * as Slider from "@radix-ui/react-slider"
import { useEffect, useRef, useState } from "react"

interface PourcentageProps {
  taille: number
  text: string
  delay?: number
  duration?: number
}

function Pourcentage(props: Readonly<PourcentageProps>) {
  const { taille, text, delay = 0, duration = 1000 } = props
  const [animatedValue, setAnimatedValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Utiliser IntersectionObserver pour détecter quand l'élément est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }, // Déclencher quand au moins 10% de l'élément est visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Animer la valeur du pourcentage
  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    // Fonction pour animer la valeur
    const animateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const progressRatio = Math.min(progress / duration, 1)

      // Fonction d'easing pour une animation plus naturelle
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4)
      const easedProgress = easeOutQuart(progressRatio)

      setAnimatedValue(Math.floor(easedProgress * taille))

      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(animateValue)
      }
    }

    // Démarrer l'animation après le délai spécifié
    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animateValue)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrame)
    }
  }, [isVisible, taille, delay, duration])

  return (
    <div ref={ref} className="flex flex-col w-full gap-2">
      <div className="flex flex-row justify-between items-center">
        <Typography className="font-semibold">{text}</Typography>
        <Typography className="font-semibold">{animatedValue}%</Typography>
      </div>
      <Slider.Root
        value={[animatedValue]}
        max={100}
        step={1}
        disabled
        className="relative flex items-center select-none touch-none w-full h-2 bg-gray-200 rounded"
      >
        <Slider.Track className="bg-gray-200 relative grow rounded h-2">
          <Slider.Range
            className="absolute bg-blue-500 h-full rounded"
            style={{
              transition: isVisible ? `width ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
            }}
          />
        </Slider.Track>
        {/* Pas de <Slider.Thumb /> ici */}
      </Slider.Root>
    </div>
  )
}

export default Pourcentage
