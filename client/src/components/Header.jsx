import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'




const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full shadow-xl bg-transparent">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <NavLink to="/" className="text-3xl font-bold text-black hover:text-orange-700 hover:font-bold">
                            AGGREGATE
                        </NavLink>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black">
                                <NavLink to="/" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 pt-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >Home</NavLink>
                            </li>
                            <li className="text-black">
                                <NavLink to="tools" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 pt-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Tools</NavLink>
                            </li>
                            <li className="text-black ">
                                <NavLink to="crops" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 pt-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Crops</NavLink>
                            </li>
                            <li className="text-black">
                                <NavLink to="fertilizers" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3  pt-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Fertilizers</NavLink>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <NavLink
                        to="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-orange-700"
                    >
                        Toggle 
                    </NavLink>
                    <NavLink
                        to="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Languags
                    </NavLink>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <NavLink
                        to="javascript:void(0)"
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-orange-700"
                    >
                        Toggle
                    </NavLink>
                    <NavLink
                        to="javascript:void(0)"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-orange-700"
                    >
                        Languages
                    </NavLink>
                </div>
            </div>
        </nav>
        
    </>

    
  )
}

export default Header