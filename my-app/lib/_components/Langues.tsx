import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { AArrowDown, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

import { Typography } from '@/components/ui/Typography'
interface Language{
    name: string;
    level: string ;
    NbreEtoile: number;
}
function Langues({...props}:Language) {
  return (
    <Card className='w-full min-lg:w-1/2 bg-zinc-200 '>
      <CardContent className='flex flex-col sm:flex-row gap-2 m-auto'>
        <div className='max-sm:text-center text-center max-sm:flex max-sm:justify-center'>
            {props.name}
        </div>
        <div className='flex flex-col sm:flex-row gap-1 max-sm:items-center max-sm:justify-center'>
            <Badge className='max-sm:mx-auto '>
                {props.level}
            </Badge>
            <div className='flex flex-row  max-sm:justify-center items-center h-auto gap-2'>
            <Star color="#233680" />            
            <Star color="#233680" />
            <Star color="#233680" />
            <Star color="#233680" />
            
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Langues
