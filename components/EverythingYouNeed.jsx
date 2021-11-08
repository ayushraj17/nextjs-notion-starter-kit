import {
  DocStarAlt,
  HeadsetHelp,
  Laptop,
  RulerCombine,
  Search,
  Running
} from 'iconoir-react'
import React from 'react'
import cs from 'classnames'
const data = [
  {
    id: 1,
    title: 'Website Review',
    Icon: Search,
    description:
      'I make sure your website is performing its best by thoroughly reviewing it before making any changes.',
    color: 'indigo'
  },
  {
    id: 2,
    title: 'Business Strategy',
    Icon: DocStarAlt,
    description:
      'We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.',
    color: 'yellow'
  },
  {
    id: 3,
    title: 'User Exp Design',
    Icon: RulerCombine,
    description:
      'I design your website to be as easy to use as possible while guiding users towards the end goal.',
    color: 'purple'
  },

  {
    id: 4,
    title: 'Tailored Development',
    Icon: Laptop,
    description:
      'I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.',
    color: 'blue'
  },
  {
    id: 5,
    title: 'Rigorous Testing',
    Icon: Running,
    description:
      'I ensure your website is of excellent quality by thoroughly testing using multiple approaches.',
    color: 'green'
  },
  {
    id: 6,
    title: 'Ongoing Support',
    Icon: HeadsetHelp,
    description:
      'Your website is always growing. Whether you’re adding new features or making improvements I’m here to help.',
    color: 'pink'
  }
  // {
  // 	id:
  // 	title:
  // 	icon:
  // 	description:
  // },
]

const EverythingYouNeed = () => {
  return (
    <section className='md:mt-28'>
      <h2 className='mb-4 md:mb-8 '>
        Everything you need to build your website
      </h2>
      <div className='grid gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3'>
        {data.map(({ id, title, Icon, description, color }) => (
          <article
            key={color}
            className='border-gray-50 dark:border-gray-800 border-1 p-4 rounded-xl shadow b-4 bg-white dark:bg-gray-900'
          >
            <div className={`mb-2 flex items-center`}>
              <span
                className={cs(
                  'p-2 rounded-lg h-10 w-10 flex items-center justify-center',
                  {
                    'bg-indigo-100': color === 'indigo',
                    'bg-yellow-100': color === 'yellow',
                    'bg-purple-100': color === 'purple',
                    'bg-blue-100': color === 'blue',
                    'bg-green-100': color === 'green',
                    'bg-pink-100': color === 'pink'
                  }
                )}
              >
                <Icon
                  className={cs({
                    'text-indigo-600': color === 'indigo',
                    'text-yellow-600': color === 'yellow',
                    'text-purple-600': color === 'purple',
                    'text-blue-600': color === 'blue',
                    'text-green-600': color === 'green',
                    'text-pink-600': color === 'pink'
                  })}
                />
              </span>
              <h3 className='ml-4 font-semibold'>{title}</h3>
            </div>
            <p className='text-gray-600'>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EverythingYouNeed
