import React from 'react'
import { Link } from 'gatsby'

export default function Nav(props) {
  const { handleInputChange } = props

  return (
    <>
      <nav className=" bg-indigo-100  sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex  items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/" className=" mr-6 cursor-pointer">
                <div className="flex-shrink-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-indigo-600 h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <h1 className=" hidden lg:block text-black ml-2 uppercase font-extrabold">
                    PFL Tracker
                  </h1>
                </div>
              </Link>

              <div className="hidden md:block  sm:ml-6">
                <div className="flex space-x-4">
                  <Link to="/dashboard" className="" aria-current="page">
                    <button className="inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-black uppercase transition  rounded  ripple  hover:text-indigo-300 focus:outline-none">
                      PFL
                    </button>
                  </Link>
                  <Link to="/employment"  className="" aria-current="page">
                    <button className="inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-black uppercase transition  rounded  ripple  hover:text-indigo-300 focus:outline-none">
                      UnEmployment
                    </button>
                  </Link>
                  <Link to="/withholding" aria-current="page">
                    <button className="inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-black uppercase transition  rounded  ripple  hover:text-indigo-300 focus:outline-none">
                      Withholding
                    </button>
                  </Link>

                  {/*<button
										className='inline-flex text-gray-400  items-center px-4 py-2 transition-colors duration-300 ease-in rounded-l-full focus:outline-none hover:text-blue-400 focus:text-blue-400 active'
										id='card'
										>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='w-4 h-4 mr-2 fill-current'>
											<rect x='3' y='3' width='7' height='7'></rect>
											<rect x='14' y='3' width='7' height='7'></rect>
											<rect x='14' y='14' width='7' height='7'></rect>
											<rect x='3' y='14' width='7' height='7'></rect>
										</svg>
										Card View
									</button>

									<button
										className='inline-flex text-gray-400  items-center px-4 py-2 transition-colors duration-300 ease-in rounded-r-full focus:outline-none hover:text-blue-400 focus:text-blue-400'
										id='table'
										>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='w-4 h-4 mr-2 fill-current'>
											<line x1='8' y1='6' x2='21' y2='6'></line>
											<line x1='8' y1='12' x2='21' y2='12'></line>
											<line x1='8' y1='18' x2='21' y2='18'></line>
											<line x1='3' y1='6' x2='3.01' y2='6'></line>
											<line x1='3' y1='12' x2='3.01' y2='12'></line>
											<line x1='3' y1='18' x2='3.01' y2='18'></line>
										</svg>
										List View
									</button>*/}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative block mr-3">
                <span className="absolute inset-y-0 left-0 flex items-center h-full pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-700 fill-current"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  onChange={props.onChange}
                  aria-label="Search"
                  placeholder="Quick Search (State or Bill ID)"
                  className="block w-full py-2 mr-12 pl-8 pr-6 text-sm text-gray-900 placeholder-gray-700 bg-white border border-b border-gray-400 rounded-l rounded-r  appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-900 focus:text-gray-900 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <header className="bg-gray-100 py-2 mb-8 md:mb-0 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {props.text}
          </h1>
        </div>
      </header>
      </nav>

    </>
  )
}
