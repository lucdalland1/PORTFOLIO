import { Typography } from '@/components/ui/Typography'
import React from 'react'
import CardMesProjets from '../_components/CardMesProjets'

function MesProjets() {
  return (
    <div className='flex flex-col justify-center items-center pt-20 gap-10'>
        <Typography variant='h1'>
      Mes Projets
      </Typography>
      <Typography variant='h3'>
      Découvrez une sélection de mes projets les plus récents et significatifs.
      </Typography>
      <CardMesProjets/>
    </div>
  )
}

export default MesProjets
