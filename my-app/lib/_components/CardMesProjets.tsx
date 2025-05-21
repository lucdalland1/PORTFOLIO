import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

function CardMesProjets() {
  return (
    <Card className="">
      <div >
      <Image
            src="/images/Design sans titre.png"
            alt=""
            width={300}
            height={300}
            className="object-contain w-full "
          />
      </div>
      <CardContent>
        dkdokdod
      </CardContent>
    </Card>
  )
}

export default CardMesProjets
