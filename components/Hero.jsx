import React from 'react'
import HeroImage from '../assets/bro.svg'

const Hero = () => {
  return (
    <header className='md:mt-14 mb-8 lg:grid lg:grid-cols-2'>
      <div>
        <h1>Creating websites that help your brand grow</h1>
        <h3 className='mt-4 md:mt-6 lg:mt-8'>
          a web developer and product web designer I will take your website from
          just an idea to reality with zero friction
        </h3>
        <button className='mt-4 md:mt-5 btn btn-primary'>Grow my brand</button>
      </div>
      <HeroImage className='-mt-14 hidden lg:flex' />
    </header>
  )
}

export default Hero
