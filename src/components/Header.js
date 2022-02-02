import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import placeholder from '/src/images/placeholder.png'

const navigation = [
  { name: 'Layanan', to: '#', current: false },
  { name: 'Tentang Kami', to: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-300">
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-start h-24">

                <div className="flex flex-1 sm:justify-start align-middle">
                  <div className="flex flex-1 items-center justify-center sm:justify-start">
                    <img src={placeholder} className="w-8 h-8 mx-4" alt="placeholder"/>
                    <Link to="/">
                      <p className="text-3xl font-bold">Bitlearn</p>
                    </Link>
                  </div>

                  <div className="flex flex-none object-left">
                    <div className="hidden sm:flex sm:flex-grow sm:ml-6">
                      <div className="flex flex-none space-x-0">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-200',
                              'px-3 py-2 my-auto rounded-md text-center text-base uppercase items-center font-semibold tracking-wider'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-none sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-800 focus:outline-none">
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

            <Disclosure.Panel className="sm:hidden">
              <div className="border-t-2 border-black">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-200',
                      'flex px-3 py-2 justify-center text-base font-bold border-b-2 border-black'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}