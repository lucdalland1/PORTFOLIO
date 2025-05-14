import { Typography } from '@/components/ui/Typography'
import * as Slider from '@radix-ui/react-slider'
import React from 'react'

interface PourcentageProps {
  taille: number
  text: string
}

function Pourcentage(props: Readonly<PourcentageProps>) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row justify-between items-center">
        <Typography className='font-semibold'>{props.text}</Typography>
        <Typography className='font-semibold'>{props.taille}%</Typography>
      </div>
      <Slider.Root
        value={[props.taille]}
        max={100}
        step={1}
        disabled
        className="relative flex items-center select-none touch-none w-full h-2 bg-gray-200 rounded"
      >
        <Slider.Track className="bg-gray-200 relative grow rounded h-2">
          <Slider.Range className="absolute bg-blue-500 h-full rounded" />
        </Slider.Track>
        {/* Pas de <Slider.Thumb /> ici */}
      </Slider.Root>
    </div>
  )
}

export default Pourcentage
