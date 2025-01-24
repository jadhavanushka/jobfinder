import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import logo from '../images/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className='flex items-center gap-2'>
                <img className="w-10 h-10" src={logo} alt="logo" />
                <h1 className="text-xl font-bold text-teal-600">
                    JobFinder
                </h1>
                </div>
                <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="text-teal-600 bg-white border-2 border-teal-600 focus:outline-none hover:bg-teal-50 hover:text-teal-700 focus:ring-4 focus:ring-teal-100 
                        font-medium rounded-lg text-sm px-4 py-2 text-center delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105  hover:shadow"
                    >
                        Post a Job
                    </button>
                    <button
                        type="button"
                        className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300  hover:shadow
                        font-medium rounded-lg text-sm px-4 py-2 text-center delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105"
                    >
                        Login
                    </button>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <BiMenu className="size-8" />
                    </button>
                </div>

                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 
            ${isMenuOpen ? 'block' : 'hidden'}`}
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        {["Find job", "Employers", "Blogs", "About", "Contact"].map((item, index) => (
                            <li className="block py-2 px-3 text-gray-900 rounded hover:text-teal-600 md:p-0 
                            hover:cursor-pointer duration-300 ease-in-out hover:-translate-y-0.5"
                                key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
