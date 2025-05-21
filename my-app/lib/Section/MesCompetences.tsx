import { Typography } from '@/components/ui/Typography'
import React from 'react'
import CardCompetence from '../_components/CardCompetence'

function MesCompetences() {
  return (
    <div className='flex  flex-col items-center justify-center p-10  gap-10 w-full'>
      <Typography variant='h3' className='m-auto text-center'>
        Mes Compétances
      </Typography>
      <Typography variant='body' className='text-center'>
      Mon expertise technique me permet de créer des applications web et mobilescomplètes, du frontend au backend, en passant par le déploiement.
      </Typography>
     <div className='flex flex-col gap-2'>
        <div className='flex flex-col sm:flex-row gap-2'>
          <CardCompetence titre='Frontend'  />
          <CardCompetence titre='Backend'/>
        </div>
      <div className='sm:m-auto'>
      <CardCompetence titre='Outils'/>

      </div>
     </div>
    </div>
  )
}

export default MesCompetences
