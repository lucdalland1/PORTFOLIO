import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Typography } from '@/components/ui/Typography'
import React from 'react'

function CardCompetence({...props}) {
  return (
    <Card className=' w-100 max-w-md'>
      <CardContent className='flex flex-col' >
        <Typography variant='h3' className='text-center'>
          {props.titre}
        </Typography>
        
      </CardContent>
      <CardFooter className='text-center flex flex-row gap-2 m-auto'>
      <div>dkod</div>
      <div>dkod</div>
      <div>dkod</div>
      <div>dkod</div>
      </CardFooter>
    </Card>
  )
}

export default CardCompetence
