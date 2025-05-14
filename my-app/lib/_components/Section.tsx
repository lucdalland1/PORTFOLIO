import React from 'react'
import { cn } from '../utils'

type SectionProps = {
  children: React.ReactNode
  className?: string
}

function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("max-w-6xl px-4 m-auto", className)}>
      {children}
    </section>
  )
}

export default Section
