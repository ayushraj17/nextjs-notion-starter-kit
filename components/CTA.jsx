import Link from 'next/link'
import React from 'react'
import Image from '../assets/cuate.svg'

const CTA = () => {
  return (
    <article className='md:mt-16 relative bg-gradient-to-br to-blue-400 from-blue-500  rounded-xl p-4 sm:p-5 md:p-10 my-10 shadow flex items-center gap-4'>
      <div className='flex flex-col justify-between '>
        <h2 className='mb-3 text-3xl text-white'>
          Rebuild your website for last time{' '}
        </h2>
        <p className='text-white max-w-xl'>
          Building a great website is more than just knowing how to make things
          look pretty or writing clever code. I listen to your needs, ensuring
          you get a product you’re happy with
        </p>
        <div className='mt-6 w-full'>
          <button className='btn btn-white w-full sm:w-auto'>
            Grow my brand
          </button>
        </div>
      </div>
      <span className='w-96 hidden sm:block'>
        <Image height='200px' className='ml-auto' />
      </span>
    </article>
  )
}

export default CTA
