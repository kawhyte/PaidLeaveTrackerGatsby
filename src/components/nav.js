import React from 'react'
import { Link } from 'gatsby'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [{name:'PFL', link:'/dashboard'},{name:'Unemployment', link:'/employment'},{name:'Withholdings', link:'/withholding'}]
const profile = ['Your Profile', 'Settings', 'Sign out']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav(props) {
  const { handleInputChange } = props

  return (
    
<>
    <div className="sticky top-0 z-50">
    <Disclosure as="nav" className="bg-indigo-100  ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
           

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
                Legislation Tracker
                </h1>
              </div>
            </Link>



                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item, itemIdx) =>
                      itemIdx === 0 ? (
                        <Fragment key={item.name}>
                          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                          <Link to={item.link} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                            {item.name}
                          </Link>
                        </Fragment>
                      ) : (
                        <Link
                          key={item}
                          to={item.link}
                          className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
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
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                 




           


                {/*<button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>*/}




                  {/* Profile dropdown */}
                  {/*<Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {profile.map((item) => (
                              <Menu.Item key={item}>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                                    </Menu> */}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-indigo-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, itemIdx) =>
                itemIdx === 0 ? (
                  <Fragment key={item.name}>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link to={item.link} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                      {item.name}
                    </Link>
                  </Fragment>
                ) : (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-gray-900 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            {/*<div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                  <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
                <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {profile.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
                </div>*/}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{props.text}</h1>
      </div>
    </header>
    <main>

    </main>
     </div>



      {/*<nav className=" bg-indigo-100  sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex  items-center justify-between h-16">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
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
  </nav>*/}

    </>
  )
}
