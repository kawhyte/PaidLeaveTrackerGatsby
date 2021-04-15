import React from 'react'
import Headers from './header'
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <div>
      <div className="pt-3 ">
        <Headers />
        <div className="px-3 mx-auto flex  flex-wrap flex-col-reverse  items-center">
          <div className="flex flex-col w-full mx-auto justify-center align-middle  text-center md:text-center">
            <div>
              <h2 className="pt-5 lg:pt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl   ">
                Track upcoming
                <br className="p-0" />
                <span className="text-indigo-600 text-center">
                  Paid Family Leave
                </span>
              </h2>

              <p className="mt-3 text-base  text-gray-800 sm:mt-3 sm:text-lg sm:max-w-x md:mt-5 md:mb-5  md:text-xl lg:mx-0">
                Track upcoming paid family & medical leave Legislations for US
                states
              </p>
              <br className="p-0" />
              <Link to="dashboard" className="flex justify-center">
                <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded shadow ripple hover:shadow-lg hover:bg-indigo-800 focus:outline-none">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </div>

          <div className="w-4/5 sm:w-3/5 py-6 px-6 text-center flex justify-center">
            <img
              className="w-full md:w-4/5 z-50"
              src="https://res.cloudinary.com/babyhulk/image/upload/f_auto/v1588723920/hero-image/family_reading.png"
              alt="Family"
            />
          </div>
        </div>
      </div>

      {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js" defer></script> */}

      {/* <div className="relative bg-white overflow-hidden">
  <div className="max-w-screen-xl mx-auto ">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

      <div className="mt-10 mx-auto max-w-screen-xl   px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Track upcoming 
            <br className="" />
            <span className="text-indigo-600 ">Paid Family Leave </span>
          <span className="tracking-normal rounded-full text-white bg-gray-800 uppercase px-2 py-1 text-xs font-bold mr-3">Beta</span>
          </h2>
          <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Track upcoming  paid family & medical leave Legislations for US states 
          </p>
  

        </div>

      </div>
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-10 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">  
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://res.cloudinary.com/babyhulk/image/upload/w_676,h_469,f_auto/v1588723920/hero-image/family.png" alt="Photo of family" />
  </div>
</div> */}
    </div>
  )
}

export default Hero
