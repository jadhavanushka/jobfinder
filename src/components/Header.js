import React from 'react';
import { BiSearch } from 'react-icons/bi';
import headerimg from '../images/headerimg.svg';


const Header = () => {
    return (
        <section className="mt-24 lg:mt-16">
            <div className="grid max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0 md:grid-cols-12">
                <div className="mr-auto place-self-center md:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl 
                    text-center md:text-start px-12 md:px-0">
                        Find Your Perfect Fit & Launch Your Career</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-center md:text-start">
                        Building a community of passionate individuals who are eager to make a difference and
                        discover the next big move!</p>

                    <div className="inline-flex items-center justify-center mb-4 w-full lg:w-2/3 px-4 md:px-0">
                        <form className="flex w-full">
                            <div className="w-full">
                                <div className="relative h-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                        <BiSearch className="size-5 text-gray-400" />
                                    </div>
                                    <input type="text"
                                        className="block w-full px-5 py-3 pl-11 text-base text-gray-900 bg-white border
                                         border-gray-200
                                      placeholder:text-gray-400 rounded-l-xl focus:ring-teal-400 focus:border-teal-400"
                                        placeholder="Job title, keyword, etc." required />
                                </div>
                            </div>
                            <button type="submit"
                                className="px-5 py-3 text-base font-medium text-center text-white bg-teal-600 border-teal-600 border 
                                cursor-pointer rounded-r-xl  hover:border-teal-700 hover:bg-teal-700
                                focus:outline-none focus:ring-2  focus:border-teal-500 focus:ring-teal-700">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="flex gap-2 flex-wrap md:max-w-2xl items-center justify-center md:justify-start">
                        {[
                            'Developement',
                            'Marketing',
                            'UI/UX',
                            'Human Resources',
                        ].map((tag, index) => (
                            <p className="bg-teal-50 text-teal-600 text-sm px-2.5 py-0.5 rounded hover:bg-teal-100"
                                key={index}>
                                {tag}
                            </p>
                        ))}
                    </div>

                </div>
                <div className="hidden md:mt-0 md:col-span-5 md:flex">
                    <img src={headerimg} alt="header-img" />
                </div>
            </div>
        </section>
    );
};

export default Header;