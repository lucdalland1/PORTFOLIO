import React from 'react'
import ContactForm from '../_components/ContactForm'
import { Typography } from '@/components/ui/Typography'
import { Facebook, Hourglass, Linkedin, Mail, MapPinPlus, Twitter, TwitterIcon, } from 'lucide-react'

function ContactSection() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center pt-20'>
        <div className='flex sm:flex-1 text-center sm:text-left flex-col gap-6'>
  <Typography variant='h3' className='text-2xl font-semibold text-gray-900'>
    Let's work together
  </Typography>
  
  <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
    {/* Contact Info */}
    <div className='flex flex-row gap-2 items-center'>
      <Mail className="text-xl text-[#2293c3]" />
      <div className='text-lg font-medium text-gray-700'>
        lucdalland@gmail.com
      </div>
    </div>

    {/* Location Info */}
    <div className='flex flex-row gap-2 items-center'>
      <MapPinPlus className="text-xl text-[#2293c3]" />
      <div className='text-lg font-medium text-gray-700'>
        Brazzaville
      </div>
    </div>

    {/* Availability Info */}
    <div className='flex flex-row gap-2 items-center'>
      <Hourglass className="text-xl text-[#2293c3]" />
      <div className='text-lg font-medium text-gray-700'>
        Disponible pour tout type de projet
      </div>
    </div>
  </div>

  <Typography variant='h3' className='text-xl font-semibold text-gray-900 mt-8'>
    Réseau Disponible :
  </Typography>

  <div className='flex gap-6 justify-center sm:justify-start'>
    {/* Social Media Icons */}
    <Linkedin className="text-black hover:text-[#2293c3] transition-all duration-300 transform hover:translate-y-[-4px] hover:rotate-[15deg] text-3xl" />
    <Facebook className="text-black hover:text-[#2293c3] transition-all duration-300 transform hover:translate-y-[-4px] hover:rotate-[15deg] text-3xl" />
    <TwitterIcon className="text-black hover:text-[#2293c3] transition-all duration-300 transform hover:translate-y-[-4px] hover:rotate-[15deg] text-3xl" />
  </div>
</div>

        <div className='sm:flex-1'>
        <ContactForm/>
        </div>
    </div>
  )
}

export default ContactSection
