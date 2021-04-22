import React from 'react'
import { Link } from 'gatsby'


const Header = ({ siteTitle }) => {

  return (
    <>
      <div className="w-full mb-10 mx-auto p-1">
        <div className="w-full flex items-center justify-between">
        <Link to='/' className=" cursor-pointer">
        <div className='flex-shrink-0 flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='text-indigo-600 h-10 w-10'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
          </svg>
          <h1 className=' hidden sm:block text-black ml-2 uppercase font-extrabold'>
            PFL Tracker
          </h1>
        </div>
      </Link>

          <div className="flex w-2/3 justify-end content-center pr-10">
            <Link
              className={
                'hidden  ml-8 font-medium text-gray-900  hover:text-blue-900 focus:outline-none focus:text-blue-900 transition duration-150 ease-in-out'
              }
              to="/"
            >
              Home
            </Link>

            <Link
              className={
                ' hidden  ml-8 font-medium text-gray-900  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
              }
              to="/blog"
            >
              Blog
            </Link>

            <a
              href="https://legislation-tweets.herokuapp.com/"
              className="  hidden ml-8 font-medium text-gray-900  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Twitter Mentions
            </a>

             <a
              href="https://www.kennywhyte.com/"
              className=" ml-8 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
            >
              Made by Kenny
              {/* <span role="img" aria-label="pizza">
                🍕
              </span> */}
              
            </a> 
          </div>

          {/* <div class="flex w-1/2 justify-end content-center">		
          <a class="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">
            <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
          </a>
          <a class="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 " data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
            <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
          </a>
        </div> */}
        </div>
      </div>

      {/* <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-black focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4">
          <Link
            className={
              'ml-8 font-medium text-gray-900  hover:text-blue-900 focus:outline-none focus:text-blue-900 transition duration-150 ease-in-out'
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              'ml-8 font-medium text-gray-900  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
            }
            to="/blog"
          >
            Blog
          </Link>
          <a
            href="https://legislation-tweets.herokuapp.com/"
            className="ml-8 font-medium text-gray-900  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            Paid Leave Twitter Mentions
          </a>

          <a
            href="https://www.kennywhyte.com/"
            className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
          >
            Created with{' '}
            <span role="img" aria-label="pizza">
              {' '}
              🍕
            </span>{' '}
            by Kenny
          </a>
        </div>
      </nav> */}
    </>
  )
}

export default Header
