import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/Typography'
import React from 'react'
import { cn } from '../utils'
import Image from 'next/image'
function SectionPresentation({...props}) {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between w-full h-auto gap-y-6 lg:gap-x-40">
    {/* Bloc Texte + Boutons */}
    <div className="w-full lg:w-1/3 text-md flex justify-start items-start flex-col gap-3 h-auto">
    <Typography variant="h3" className="max-sm:m-auto">
  Bonjour, je suis Luc
</Typography>


      <Typography variant="h2" className="text-center min-sm:text-left text-2xl/11">
        Développeur FullStack - Web & Mobile
      </Typography>
  
      <div className="grid grid-cols-4 gap-2 w-full">
        <Button className="col-span-full sm:col-span-2" asChild>
          <Typography variant="h3" className='font-bold'>Embauchez-moi</Typography>
        </Button>
        <Button variant="outline" className="col-span-full sm:col-span-2" asChild>
          <Typography variant="h3" >Télécharger mon CV</Typography>
        </Button>
      </div>
    </div>
  
    {/* Image */}
    <div className="w-full lg:w-auto">
      <Image
        src="/images/luc2.png"
        alt="Luc Dalland"
        width={300}
        height={300}
        className='max-sm:m-auto min-lg:mr-12'
      />
    </div>
  </div>
  
  )
}

export default SectionPresentation
