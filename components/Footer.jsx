import { LinkedIn, Telegram, Twitter } from 'iconoir-react'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import Image from '../assets/footer.svg'

const data = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
  { name: 'Projects', link: '/projects' }
]

const Footer = () => {
  return (
    <footer className='w-full mt-14'>
      <Image
        width='100%'
        fill='white'
        className='h-2/4 fill-current text-blue-900'
      />
      <div className=' mx-auto px-4 bg-blue-900 -mt-1'>
        <div className='flex justify-center gap-4 items-center mb-2 md:mb-4'>
          <FaWhatsapp className='h-8 w-8 md:h-12 md:w-12 text-white border-2 rounded-full p-1 md:p-2 cursor-pointer btn' />
          <Telegram className='h-8 w-8 md:h-12 md:w-12 text-white border-2 rounded-full p-1 md:p-2 cursor-pointer btn' />
          <LinkedIn className='h-8 w-8 md:h-12 md:w-12 text-white border-2 rounded-full p-1 md:p-2 cursor-pointer btn' />
          <Twitter className='h-8 w-8 md:h-12 md:w-12 text-white border-2 rounded-full p-1 md:p-2 cursor-pointer btn' />
        </div>
        <h4 className='flex justify-center pb-8'>
          <div className='text-blue-300 text-opacity-90 font-bold'>
            Created By
          </div>
          &nbsp;
          <div className='text-yellow-500 font-bold'> Ayush </div>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
