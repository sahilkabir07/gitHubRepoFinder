import React from 'react'
import { FaGithub, FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Link</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
                    </li>
                </ul>
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <FaGithub size={60} />
                </a>
                <div className="flex items-center md:space-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <FaSearch />
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                    </div>

                </div>

            </div>
        </header>
    )
}

export default Header