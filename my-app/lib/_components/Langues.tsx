import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { AArrowDown, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

import { Typography } from '@/components/ui/Typography'
interface Language{

}
function Langues({...props}:Language) {
  return (
    <Card className='w-full min-sm:w-1/2 bg-zinc-200'>
      <CardContent className='flex flex-row gap-2'>
        <div>
            jkj
        </div>
        <div className='flex flex-row gap-1'>
            <Badge>
              ddkkdj
            </Badge>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
      </CardContent>
    </Card>
  )
}

export default Langues
