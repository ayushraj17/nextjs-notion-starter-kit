import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { Minus, Plus } from 'iconoir-react'

const FAQ = () => {
  return (
    <div className='mt-14'>
      <div className='relative'>
        <div
          className='text-9xl font-extrabold text-gray-200 dark:text-gray-800 text-center'
          style={{ fontSize: '21vh' }}
        >
          FAQ
        </div>
      </div>
      {/* <h2 className="text-center mt-2">Frequently Asked Questions</h2> */}
      <QA />
    </div>
  )
}

export default FAQ

const data = [
  {
    question: 'What should be my budget',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat rem tempora ipsa cupiditate laudantium aliquid sit recusandae iure consequuntur neque exercitationem, officia at temporibus! Animi repellendus hic possimus voluptatibus?'
  },
  {
    question: 'How much time it will take you to complete my project?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat rem tempora ipsa cupiditate laudantium aliquid sit recusandae iure consequuntur neque exercitationem, officia at temporibus! Animi repellendus hic possimus voluptatibus?'
  },
  {
    question: 'Do you provide any support after the project ends?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat rem tempora ipsa cupiditate laudantium aliquid sit recusandae iure consequuntur neque exercitationem, officia at temporibus! Animi repellendus hic possimus voluptatibus?'
  },
  {
    question: 'How do I get started?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat rem tempora ipsa cupiditate laudantium aliquid sit recusandae iure consequuntur neque exercitationem, officia at temporibus! Animi repellendus hic possimus voluptatibus?'
  },
  {
    question: "What's your process like?",
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat rem tempora ipsa cupiditate laudantium aliquid sit recusandae iure consequuntur neque exercitationem, officia at temporibus! Animi repellendus hic possimus voluptatibus?'
  },
  {
    question: 'Why do you freelance',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat rem tempora ipsa cupiditate laudantium aliquid sit recusandae iure consequuntur neque exercitationem, officia at temporibus! Animi repellendus hic possimus voluptatibus?'
  },
  {
    question: 'How long you have been freelancing',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat rem tempora ipsa cupiditate laudantium aliquid sit recusandae iure consequuntur neque exercitationem, officia at temporibus! Animi repellendus hic possimus voluptatibus?'
  }
]

function QA() {
  return (
    <div className='w-full px-4 pt-10'>
      <Transition
        show
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0 height-0'
        enterTo='transform scale-100 opacity-100 height-auto'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0 height-0'
        className='w-full max-w-xl p-2 mx-auto bg-white dark:bg-gray-900 rounded-2xl flex flex-col gap-3'
      >
        {data.map(({ question, answer }) => (
          <Disclosure key={question}>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg bg-blue-100 dark:bg-blue-500 dark:hover:bg-blue-600  hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 dark:focus-visible:ring-blue-900 focus-visible:ring-opacity-75 dark:focus-visible:ring-opacity-100'>
                  <p className='text-blue-900 dark:text-blue-50'>{question}</p>
                  <div className='my-auto relative text-center h-5 w-5'>
                    <span
                      key={open ? 'minus-button' : 'plus-button'}
                      // className='absolute h-5 w-5'
                    >
                      {open ? (
                        <Minus
                          strokeWidth={3}
                          className='text-blue-900 dark:text-blue-50'
                        />
                      ) : (
                        <Plus
                          strokeWidth={3}
                          className='text-blue-900 dark:text-blue-50'
                        />
                      )}
                    </span>
                  </div>
                </Disclosure.Button>

                <Transition
                  show={open}
                  enter='transition duration-500 ease-out'
                  enterFrom='transform scale-95 opacity-0 max-h-0'
                  enterTo='transform scale-100 opacity-100 max-h-64'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'
                >
                  <Disclosure.Panel
                    static
                    className='px-4 pb-4 text-base text-gray-500 dark:text-gray-300'
                  >
                    {answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </Transition>
    </div>
  )
}
