import Section from '@/lib/_components/Section'
import Apropos from '@/lib/Section/Apropos'
import ContactSection from '@/lib/Section/Contact'
import MesCompetences from '@/lib/Section/MesCompetences'
import MesProjets from '@/lib/Section/MesProjets'
import SectionPresentation from '@/lib/Section/SectionPresentation'
import Service from '@/lib/Section/Service'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col gap-3'>
      <Section>
      <SectionPresentation/>
      <Apropos/>
      </Section>
      <div className='bg-primary/15'>
        <Section>
        <MesCompetences />

        </Section>
      </div>
      <Section>
        <Service />
        <MesProjets/>
        
        </Section>

        <div className='bg-primary/40'>
        <ContactSection />

        </div>
  </div>
  )
}

export default page
