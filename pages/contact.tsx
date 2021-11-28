import { useForm, ValidationError } from '@formspree/react'
import { Copy, Mail, Telegram } from 'iconoir-react'
// import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [state, handleSubmit] = useForm('xqkwelwq')
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    if (state.succeeded)
      setValues({
        name: '',
        email: '',
        message: ''
      })
  }, [state.succeeded])

  const handleFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const ContactMethodItem = ({ children, ...props }) => (
    <div className='relative'>
      <a
        className='md:flex gap-4 text-white items-center bg-clip-padding bg-opacity-10 rounded-lg bg-gray-50 hover:bg-opacity-20 cursor-pointer transform transition-all duration-300 focus:ring-white focus:ring-1 h-12 md:pl-3'
        {...props}
      >
        {children}
      </a>
      <button
        className='ml-auto mr-2 md:bg-gray-50 bg-opacity-50 p-1 rounded hover:bg-opacity-70 active:bg-gray-100 hidden md:block absolute right-0 top-2 transform transition-all duration-300 focus:ring-white focus:ring-2'
        onClick={() => window.navigator.clipboard.writeText('ayush')}
      >
        <Copy>
          <title>Copy</title>
        </Copy>
      </button>
    </div>
  )

  return (
    <section className='custom-container relative to-blue-900 from-blue-800 bg-gradient-to-bl lg:rounded-xl mt-4'>
      {/* <NextSeo title='Ayush Raj | Contact' /> */}

      <div className='p-4 md:py-16 md:grid md:grid-cols-2 md:gap-10 md:p-8 items-center'>
        <div>
          <div className='flex flex-col text-center w-full mb-8 md:text-left'>
            <h1 className='text-white'>Get in Touch!</h1>
            <h4 className='mt-2 text-white'>
              Don't know where to start? drop a message and I will contact you
            </h4>
          </div>

          <div className='flex md:flex-col -mt-4 md:mt-1 mb-6 md:mb-0 gap-3 justify-evenly md:justify-start md:gap-8 lg:gap-10'>
            <ContactMethodItem href='https://wa.me/91700'>
              <Telegram className='rounded-lg h-7 w-7 text-blue-400 mx-auto md:m-0' />
              <h5 className='md:hidden'>Telegram</h5>
              <h5 className='hidden md:block'>@ayush_code</h5>
            </ContactMethodItem>

            <ContactMethodItem href='https://wa.me/91700'>
              <FaWhatsapp className='rounded-lg h-7 w-7 text-green-500 mx-auto md:m-0' />
              <h5 className='md:hidden bg-transparent'>Whatsapp</h5>
              <h5 className='hidden md:block'>+1 789 7898729</h5>
            </ContactMethodItem>

            <ContactMethodItem href='https://wa.me/91700'>
              <Mail className='rounded-lg h-7 w-7 text-blue-500 mx-auto md:m-0' />
              <h5 className='md:hidden'>Email</h5>
              <h5 className='hidden md:block'>meayushraj17@gmail.com</h5>
            </ContactMethodItem>
          </div>
        </div>

        <div className='mx-auto bg-white p-4  border-2 border-gray-50 rounded-lg text-gray-900 shadow md:shadow-none md:border-0'>
          <form className='flex flex-wrap gap-2' onSubmit={handleSubmit}>
            <div className='w-full'>
              <label className='relative flex-1 flex flex-col' htmlFor='name'>
                <span className='font-bold mb-2'>Name</span>
                <Input
                  type='text'
                  id='firstName'
                  name='name'
                  value={values.name}
                  onChange={handleFormChange}
                />
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <ValidationError
                  prefix='name'
                  field='name'
                  errors={state.errors}
                />
              </label>
            </div>
            <div className='w-full'>
              <label className='relative flex-1 flex flex-col'>
                <span className='font-bold mb-2'>Email*</span>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  required
                  value={values.email}
                  onChange={handleFormChange}
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </label>
            </div>
            <div className='w-full'>
              <div className='relative'>
                <label
                  className='relative flex-1 flex flex-col'
                  htmlFor='message'
                >
                  <span className='font-bold mb-2'>Message*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='rounded-md p-2 border-2 transform transition-all duration-200 ease-in-out border-gray-300 placeholder-gray-300 focus:ring-2  focus:border-blue-400 w-full bg-white'
                  value={values.message}
                  onChange={handleFormChange}
                  required
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
            </div>

            <button
              className='flex mx-auto btn btn-primary items-center w-full mt-4'
              type='submit'
              disabled={state.submitting}
            >
              {state.submitting && (
                <span>
                  <svg
                    className='animate-spin h-5 w-5 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx={12}
                      cy={12}
                      r={10}
                      stroke='currentColor'
                      strokeWidth={4}
                    />
                    <path
                      className='opacity-100'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />
                  </svg>
                </span>
              )}
              <div className='text-center w-full'>Send</div>
              {/* {state.succeeded && (
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 mr-3"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</span>
								)} */}
              {/* {state.succeeded ? "Sent" : "Send"} */}
            </button>

            {/* <p className="d-flex mx-auto mt-8">
              <span>Email: </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:meayushraj17@gmail.com"
                className="text-blue-500"
              >
                {SOCIAL.email.split(":")[1]}
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className='rounded-md pl-12 pr-2 py-2 border-2 transform transition-all duration-200 ease-in-out border-gray-300 placeholder-gray-300 focus:border-blue-400 bg-white'
      // className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  )
}
