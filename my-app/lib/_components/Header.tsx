import React from 'react'
import Section from './Section'
import { Button } from '@/components/ui/button'

function Header() {
  return (
   <header className='sticky top-0'>
        <Section className='flex items-baseline '> 
                <h1 className='text-4xl font-bold text-primary-foreground'>Luc dalland</h1>
                <p className='text-lg text-muted'>Softeware Engineer</p>
                <div className="flex-1">
                  <Button className='size-6'>lv</Button>
                </div>
        </Section>
   </header>
  )
}

export default Header
