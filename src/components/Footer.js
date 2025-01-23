import React from 'react';
import { FaGithub, FaBehanceSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-teal-950">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <p className="flex items-center">
                            <span className="text-teal-500 self-center text-2xl font-bold whitespace-nowrap">JobFinder</span>
                        </p>
                    </div>
                    <div className="flex gap-12">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase">Developed by</h2>
                            <a href="https://github.com/jadhavanushka" className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                                <FaGithub className="size-5 text-gray-400" />
                                <p className="hover:underline">Anushka Jadhav</p>
                            </a>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase">Design Inspiration</h2>
                            <a href="https://www.behance.net/uirayhan" 
                            className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                                <FaBehanceSquare className="size-5 text-gray-400" />
                                <p className="hover:underline">Rayhan Raju </p>
                            </a>
                        </div>
                    </div>
                </div>           <hr className="my-6 sm:mx-auto border-gray-600 lg:my-8" />
                
                    <p className="text-sm text-center text-gray-400">© 2025 <span className="hover:underline hover:cursor-pointer">JobFinder™</span>. All Rights Reserved.
                    </p>
            </div>
        </footer>
    );
};


export default Footer;