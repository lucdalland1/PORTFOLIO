import { Card, CardContent } from "@/components/ui/card"
import React from "react"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Language {
  name: string
  level: string
  NbreEtoile: number
}

function Langues({ name, level, NbreEtoile }: Language) {
  return (
    <Card className="w-full min-lg:w-1/2 bg-zinc-200">
      <CardContent className="flex flex-col sm:flex-row gap-2 m-auto">
        <div className="text-center sm:text-left w-full">{name}</div>
        <div className="flex flex-col sm:flex-row gap-1 items-center justify-center">
          <Badge>{level}</Badge>
          <div className="flex gap-2 items-center">
            {Array.from({ length: NbreEtoile }).map((_, i) => (
              <Star key={i} color="#233680" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Langues
