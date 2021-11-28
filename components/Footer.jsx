import Link from 'next/link'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
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
        <h5 className='flex justify-center py-8'>
          <div className='text-blue-300 text-opacity-90 font-bold'>
            Created By
          </div>
          &nbsp;
          <div className='text-yellow-500 font-bold'> Ayush </div>
        </h5>
      </div>
    </footer>
  )
}

export default Footer
