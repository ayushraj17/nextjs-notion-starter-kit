// import Image from "next/image";
import React from 'react'
import { SKILLS } from '../shared/constants'
// import { NextSeo } from 'next-seo'
// import Image from '../assets/about.svg'

const About = () => {
  return (
    <div className='custom-container'>
      {/* <NextSeo title='Ayush Raj | About' /> */}
      <section className='mb-16 mt-6'>
        <div className='items-center'>
          <h3 className='text-center'>Hi there!</h3>
          <h1 className='text-center'>Ayush Raj</h1>
          <div className='md:mt-8 md:grid md:grid-cols-3 md:items-center md:gap-10 md:justify-between'>
            <div className='md:border-2 md:border-gray-50 md:shadow md:bg-gray-50 md:rounded-lg md:dark:border-gray-900 md:dark:bg-gray-900'>
              <img
                className='object-scale-down w-full h-64 rounded-md'
                alt='author'
                src='/ayush-raw.png'
              />
              <h2 className='mt-4 text-center md:text-base md:pb-2 md:mt-1'>
                <span>Web Developer, </span>
                <span>UI/UX Designer</span>
              </h2>
            </div>
            <p className='mt-2 text-justify md:col-span-2'>
              As a kid tech always intrigued me. When I got into college I knew
              exactly what I wanted to do and choose web development. I bring a
              personal touch to every website using the latest technologies and
              keeping user needs and wants as top priority
            </p>
          </div>
        </div>
      </section>
      <SKills />
    </div>
  )
}

export default About

const SocialMedia = () => (
  <div className='flex items-center mt-6 -mx-2'>
    <a className='mx-2' href='#' aria-label='Twitter'>
      <svg
        className='w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z' />
      </svg>
    </a>
    <a className='mx-2' href='#' aria-label='Facebook'>
      <svg
        className='w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z' />
      </svg>
    </a>
    <a className='mx-2' href='#' aria-label='Linkden'>
      <svg
        className='w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z' />
      </svg>
    </a>
    <a className='mx-2' href='#' aria-label='Github'>
      <svg
        className='w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z' />
      </svg>
    </a>
  </div>
)

const SKills = () => (
  <section>
    <h2 className='md:mb-4'>Skills</h2>
    <div className='md:grid grid-cols-2 gap-10'>
      <div className='mt-8 lg:my-auto flex justify-center items-center flex-wrap md:order-2 '>
        {Object.values(SKILLS).map((item) => (
          <img
            src={item}
            key={item}
            className='m-2 h-6 md:h-7 transition-all 300ms ease-in'
          />
        ))}
        <p className='text-blue-500 font-semibold'>and more</p>
      </div>
      <div className='md:order-1 flex flex-col gap-2'>
        <p>
          When working with teams I tailor my approach to your needs. One tool
          does not work for everybody and I always aim to achieve the best
          results for who I’m currently working with.
        </p>
        <p>
          I focus on building approaches which scale well to help promote growth
          while being simple enough to understand without extensive
          documentation. Whatever your team requires, I’ll be able to help out
          and provide improvements along the way.
        </p>
        <p>
          Here's just a few of the tools I’ve worked with in the past. I’m
          always open to adding more to this list if they will help the project
          in need.
        </p>
      </div>
    </div>
  </section>
)

// const About = () => {
// 	return (
// 		<div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
// 			{/*Main Col*/}
// 			<div
// 				id="profile"
// 				className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
// 			>
// 				<div className="p-4 md:p-12 text-center lg:text-left">
// 					{/* Image for mobile view*/}{" "}
// 					<div
// 						className="block lg:hidden rounded-full
// 		shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
// 						style={{
// 							backgroundImage: "/ayush.jpeg",
// 						}}
// 					/>
// 					<h1 className="text-3xl font-bold pt-8 lg:pt-0">Ayush Raj</h1>
// 					<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
// 					<p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
// 						<svg
// 							className="h-4 fill-current text-green-700 pr-4"
// 							xmlns="http://www.w3.org/2000/svg"
// 							viewBox="0 0 20 20"
// 						>
// 							<path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
// 						</svg>
// 						Full Stack Web Developer
// 					</p>
// 					<p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
// 						<svg
// 							className="h-4 fill-current text-green-700 pr-4"
// 							xmlns="http://www.w3.org/2000/svg"
// 							viewBox="0 0 20 20"
// 						>
// 							<path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
// 						</svg>
// 						India
// 					</p>
// 					<p className="pt-8 text-sm">
// 						I create beautiful websites your users will love. I work with you
// 						from start to finish to make sure your goals are reached and your
// 						users are happy.
// 					</p>
// 					<div className="pt-12 pb-8">
// 						<a
// 							className="btn btn-success rounded-full"
// 							href="mailto:meayushraj17@gmail.com"
// 						>
// 							Get In Touch
// 						</a>
// 					</div>
// 					<div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
// 						<a className="link" href="#" data-tippy-content="@facebook_handle">
// 							<svg
// 								className="h-6 fill-current text-gray-600 hover:text-green-700"
// 								role="img"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<title>Facebook</title>
// 								<path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
// 							</svg>
// 						</a>
// 						<a className="link" href="#" data-tippy-content="@twitter_handle">
// 							<svg
// 								className="h-6 fill-current text-gray-600 hover:text-green-700"
// 								role="img"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<title>Twitter</title>
// 								<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
// 							</svg>
// 						</a>
// 						<a className="link" href="#" data-tippy-content="@github_handle">
// 							<svg
// 								className="h-6 fill-current text-gray-600 hover:text-green-700"
// 								role="img"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<title>GitHub</title>
// 								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
// 							</svg>
// 						</a>
// 						<a className="link" href="#" data-tippy-content="@unsplash_handle">
// 							<svg
// 								className="h-6 fill-current text-gray-600 hover:text-green-700"
// 								role="img"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<title>Unsplash</title>
// 								<path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
// 							</svg>
// 						</a>
// 						<a className="link" href="#" data-tippy-content="@dribble_handle">
// 							<svg
// 								className="h-6 fill-current text-gray-600 hover:text-green-700"
// 								role="img"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<title>Dribbble</title>
// 								<title>Instagram</title>
// 								<path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
// 							</svg>
// 						</a>
// 						<a className="link" href="#" data-tippy-content="@instagram_handle">
// 							<svg
// 								className="h-6 fill-current text-gray-600 hover:text-green-700"
// 								role="img"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
// 							</svg>
// 						</a>
// 						<a className="link" href="#" data-tippy-content="@youtube_handle">
// 							<svg
// 								className="h-6 fill-current text-gray-600 hover:text-green-700"
// 								role="img"
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 24 24"
// 							>
// 								<title>YouTube</title>
// 								<path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
// 							</svg>
// 						</a>
// 					</div>
// 					{/* Use https://simpleicons.org/ to find the svg for your preferred
// 		product */}
// 				</div>
// 			</div>
// 			{/*Img Col*/}
// 			<div className="w-full lg:w-2/5">
// 				{/* Big profile image for side bar (desktop) */}
// 				<Image
// 					// layout="fill"
// 					height="500"
// 					width="300"
// 					src="/ayush.jpeg"
// 					className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-100 h-100 object-cover"
// 				/>
// 				{/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
// 			</div>
// 		</div>
// 	);
// };

// export default About;
