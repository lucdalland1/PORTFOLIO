import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import { Code } from 'lucide-react'
import { number } from 'framer-motion'
import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/badge';
import { Verified } from 'lucide-react';

interface Service {
  nombre: number;
  titre: string;
  label: string;
  Tab: string[];
  icon: React.ReactNode;
}

function CardService({...props}:Service) {
  return (
    <div className=" flex flex-col justify-center items-center h-full p-6">
      <div className='m-auto flex  flex-col items-center justify-center gap-2 '>
        <div className="flex flex-col items-center gap-2">
          {props.icon}
          {props.titre}
        </div>
      </div>
      <div className='flex flex-col'>
        <Typography variant='caption' className='text-center'>{props.label} </Typography>
      </div>
      <div className='flex flex-wrap gap-2 justify-center mt-2'>
        {props.Tab.map((element, index) => (
          <Badge key={index} variant="secondary">
            <Verified color="#233680" className="mr-1"/> {element}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default CardService
