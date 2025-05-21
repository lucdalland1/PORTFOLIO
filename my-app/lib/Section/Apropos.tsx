import { Typography } from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import Pourcentage from '../_components/Pourcentage'
import Langues from '../_components/Langues'
import { LucideAccessibility } from 'lucide-react'


function Apropos() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-auto pt-20 gap-20">
      <div className="sm:w-1/2 h-auto flex items-start">
        <Image 
          src={'/images/IMG-20210704-WA0103-removebg-preview.png'} 
          alt="Photo de profil de développeur" 
          width={300} 
          height={600} 
          className="hidden sm:block h-auto object-cover" 
          layout="responsive"
        />
      </div>

      <div className="sm:w-1/2 h-auto flex flex-col gap-11">
        <Typography variant="h3">A propos de moi</Typography>
        <Typography variant="body">
          Développeur fullstack passionné, je conçois et réalise des sites web ainsi que des applications mobiles alliant performance, esthétique et ergonomie.
          Grâce à une solide expérience en développement front-end et back-end, je transforme des idées en solutions numériques concrètes et efficaces.
          Curieux de nature et animé par l'envie constante d’apprendre, je maîtrise un large éventail de langages et de frameworks, tout en restant attentif aux dernières innovations technologiques.
          Mon engagement : livrer un code propre, fiable et évolutif, tout en apportant une réelle valeur ajoutée à chaque projet.
          Si vous recherchez un développeur rigoureux, créatif et pleinement investi, je serais ravi de collaborer avec vous.
        </Typography>
        
        <div className="flex flex-col gap-1">
          <Pourcentage taille={70} text="Développement Web" />
          <Pourcentage taille={80} text="Développement Mobile" />
          <Pourcentage taille={79} text="Développement Frontend" />
          <Pourcentage taille={78} text="Développement Backend" />
        </div>

        <div>
          <Typography variant="h3">Langues</Typography>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Langues name="Français" level="Natif"  NbreEtoile={4} />
            <Langues name="Anglais" level="Débutant"  NbreEtoile={0} />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apropos
