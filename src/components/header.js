import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => {
  return (
    <div>
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* <a href="https://www.kennywhyte.com/">
              <img
                className="h-8 w-auto sm:h-10"
                src={png}
                alt=""
              />
            </a>  */}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
              'ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              'ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
            }
            to="/blog"
          >
            Blog
          </Link>
          <a
            href="https://legislation-tweets.herokuapp.com/"
            className="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
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
      </nav>
    </div>
  )
}

export default Header
