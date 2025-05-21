import { Typography } from '@/components/ui/Typography'
import React from 'react'
import CardService from '../_components/CardService'

function Service() {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
            <Typography variant='h3'>Services </Typography>
            <CardService />
            <CardService />
            <CardService />
            <CardService />
    </div>
  )
}

export default Service
