import React, { useEffect, useState, useRef, createRef } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

import DarkIcon from '../assets/dark-icon.svg'
import LightIcon from '../assets/light-icon.svg'
import Logo from '../assets/logo.svg'
import { useRouter } from 'next/router'
import {
  FaBlog,
  FaHome,
  FaLightbulb,
  FaPaperPlane,
  FaUserAstronaut
} from 'react-icons/fa'
import { AlignRight, Cancel, SunLight, HalfMoon } from 'iconoir-react'
import useDarkMode from 'use-dark-mode'
import useOnClickOutside from 'utils/hooks/useOnClickOutside'
import { getSiteConfig } from 'lib/get-config-value'
const data = [
  {
    text: 'about',
    link: '/about',
    Icon: FaUserAstronaut
  },
  {
    text: 'projects',
    link: '/projects',
    Icon: FaLightbulb
  },
  {
    text: 'blog',
    link: '/blog',
    Icon: FaBlog,
    disabled: true
  },
  {
    text: 'contact',
    link: '/contact',
    Icon: FaPaperPlane
  }
]

const Navbar = () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href, mobile) => {
    if (router.pathname === href) {
      if (mobile) {
        return 'text-blue-500'
      } else return 'text-blue-500 hover:text-blue-400'
    }
  }

  const darkMode = useDarkMode(false, { classNameDark: 'dark' })

  const [hasMounted, setHasMounted] = React.useState(false)

  const ref = createRef(null)
  useOnClickOutside(ref, () => setIsOpen(false))

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <div
      ref={ref}
      className='sticky top-0 z-30 sm:bg-opacity-50 bg-white sm:dark:bg-opacity-50 dark:bg-gray-900 sm:backdrop-filter sm:backdrop-blur  firefox:bg-opacity-90'
    >
      <nav>
        <div className='custom-container'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center w-full'>
              <a className='flex-shrink-0 flex gap-3 items-center' href='/'>
                <img
                  className='h-8 w-8'
                  src='/android-chrome-192x192.png'
                  alt='Workflow'
                />
                <h3 className='dark:text-white text-gray-900 tracking-wider'>
                  {getSiteConfig('name')}
                </h3>
              </a>
              <div className='hidden md:block flex-1'>
                <div className='ml-auto w-full justify-end flex items-baseline space-x-4'>
                  {data.map(({ text, link }) => (
                    <Link href={link} passHref key={text}>
                      <a
                        className={`
                         transform transition-all duration-300
                         text-gray-600  hover:text-gray-900
                         dark:text-gray-300
                         dark:hover:text-white
                         px-3 py-2 rounded-md text-base font-medium hidden md:block capitalize ${isActive(
                           link
                         )}`}
                      >
                        {text}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className='fixed top-5 right-10'>
                  {hasMounted && (
                    <DarkModeButton
                      value={darkMode.value}
                      toggle={darkMode.toggle}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className={`${
                  !darkMode.value ? 'btn-white' : 'btn-black'
                } inline-flex items-center justify-center p-2 rounded-md`}
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {() => (
            <div
              className='md:hidden bg-gray-100 dark:bg-gray-900 absolute w-screen'
              id='mobile-menu'
            >
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {data.map(({ text, link }) => (
                  <Link href={link} passHref key={text}>
                    <a className='dark:hover:bg-gray-700 dark:text-white hover:bg-gray-300  block px-3 py-2 rounded-md text-xl  capitalize'>
                      {text}
                    </a>
                  </Link>
                ))}
                <div className='px-3 py-2 flex justify-center'>
                  {hasMounted ? (
                    <button
                      className={`btn ${
                        darkMode.value ? 'btn-white' : 'btn-black'
                      } text-lg shadow-sm flex gap-2 transition-all duration-500`}
                      onClick={darkMode.toggle}
                    >
                      {!darkMode.value ? (
                        <HalfMoon className='text-purple-400' />
                      ) : (
                        <SunLight className='text-yellow-500' />
                      )}
                      Use {!darkMode.value ? 'Dark' : 'Light'} Mode
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar

const DarkModeButton = ({ value, toggle }) => {
  return (
    <button
      className='w-16 h-7 my-auto rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow'
      onClick={toggle}
    >
      <div
        id='switch-toggle'
        className='w-9 h-9 relative rounded-full transition duration-500 transform bg-yellow-500 dark:translate-x-full  dark:bg-gray-700 p-1 text-white'
      >
        {value ? <DarkIcon /> : <LightIcon />}
      </div>
    </button>
  )
}
