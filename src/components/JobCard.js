import React from 'react';
import { BiCalendarAlt, BiDollarCircle } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import headerimg from '../images/headerimg.svg';

const JobCard = ({ job }) => {
    return (
        <div className="mr-auto place-self-center md:col-span-6 lg:col-span-4 w-full h-full">
            <div className="p-5 items-start bg-gray-50 rounded-lg shadow hover:shadow-lg hover:ring-1 
            hover:cursor-pointer hover:ring-teal-500 flex flex-col mb-4 md:m-2
            delay-150 duration-300 ease-in-out hover:-translate-y-0.5">
                <div className="flex flex-col w-full mb-4">
                    <div className='flex justify-between mb-2'>
                        <h3 className="text-start text-xl font-bold tracking-tight text-gray-900">
                            {job.role}
                        </h3>
                        <p className="h-fit bg-teal-50 text-teal-700 text-sm px-2.5 py-0.5 rounded">
                            {job.type}
                        </p>
                    </div>
                    <p className="text-gray-500 mb-2">
                        {job['description']}
                    </p>
                    <div className="flex flex-col gap-1 mb-4">
                        <div className='flex items-center'>
                            <span className="text-gray-500 hover:text-gray-900 me-2">
                                <BiCalendarAlt />
                            </span>
                            <p className="text-gray-500">
                                {job['deadline_in']} Days remaining
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <span className="text-gray-500 hover:text-gray-900 me-2">
                                <BiDollarCircle />
                            </span>
                            <p className="text-gray-500">
                                {job.salary_range}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-8 justify-between w-full'>
                    <div className='flex gap-2'>
                        <img className="w-12 h-12 rounded-lg" src={headerimg} alt="Company logo" />
                        <div className='flex flex-col'>
                            <p className="text-gray-500 font-bold text-start">{job.company}</p>
                            <div className='flex items-center'>
                                <span href="#" className="text-gray-500 hover:text-gray-900 me-2">
                                    <GrLocation />
                                </span>
                                <p className="text-gray-500 text-sm">
                                    {job.location}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 
                    font-medium rounded-lg px-6 py-2.5 flex items-center justify-center
                    delay-100 duration-300 ease-in-out hover:scale-[1.03]">
                        Apply</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
