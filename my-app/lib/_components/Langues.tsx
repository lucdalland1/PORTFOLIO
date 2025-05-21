import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { AArrowDown, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

import { Typography } from '@/components/ui/Typography'
interface Language{

}
function Langues({...props}:Language) {
  return (
    <Card className='w-full min-lg:w-1/2 bg-zinc-200'>
      <CardContent className='flex flex-col sm:flex-row gap-2 m-auto'>
        <div>
            jkj
        </div>
        <div className='flex flex-col sm:flex-row  gap-1'>
            <Badge className=''>
              ddkkdj
            </Badge>
            <div className='flex flex-row gap-1'>
            <Star color="#233680" />            <Star />
            <Star />
            <Star />
            <Star />
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Langues
