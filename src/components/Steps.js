import React from 'react';
import { BiSearchAlt, BiSolidUserPlus, BiSolidFilePlus, BiRightArrowAlt } from 'react-icons/bi';

const Steps = () => {
    return (
        <section className='max-w-screen-xxl px-12 lg:px-40 py-16 mx-auto flex flex-col items-center bg-white'>
            <h2 className="mb-12 text-3xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
                How it works?
            </h2>

            <ol className="flex flex-col md:flex-row items-center w-full text-sm font-medium text-center sm:text-base mb-12 lg:px-20">
                <li className="flex md:w-full items-center mb-12 md:mb-0
                md:after:content-[''] after:w-1/2 after:h-6 after:border-b-2 after:border-teal-600
                after:hidden md:after:inline-block after:mx-6 xl:after:mx-10">
                    <span className="flex flex-col items-center">
                        <div className="text-teal-600 bg-teal-100 p-4 rounded-full mb-4">
                            <BiSolidUserPlus className='size-8' />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Create an Account</h3>
                        <p className="text-gray-500">Set up your profile in minutes</p>
                    </span>
                </li>

                <li className="flex md:w-full items-center mb-12 md:mb-0
                md:after:content-[''] after:w-1/2 after:h-6 after:border-b-2 after:border-teal-600
                after:hidden md:after:inline-block after:mx-8 xl:after:mx-10">
                    <span className="flex flex-col items-center">
                        <div className="text-teal-600 bg-teal-100 p-4 rounded-full mb-4">
                            <BiSolidFilePlus className='size-8' />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Upload Resume</h3>
                        <p className="text-gray-500">Showcase your skills to get noticed</p>
                    </span>
                </li>

                <li className="flex flex-col items-center min-w-[17%]">
                    <span className="flex flex-col items-center">
                        <div className="text-teal-600 bg-teal-100 p-4 rounded-full mb-4">
                            <BiSearchAlt className='size-8' />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Find the job</h3>
                        <p className="text-gray-500">Browse jobs and apply with ease</p>
                    </span>
                </li>
            </ol>


            <button className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 hover:text-white
                    font-medium rounded-lg  ps-6 pe-4 py-2.5 flex items-center justify-center">
                Get started <BiRightArrowAlt className='size-6 ms-1'/>
                </button>
        </section>
    );
};
export default Steps;
