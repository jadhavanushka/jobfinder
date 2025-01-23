import React from 'react';
import { BiSolidBriefcase, BiSolidBriefcaseAlt2, BiSolidGroup, BiSolidBank } from 'react-icons/bi';

const data = [
    {
        title: "Live Jobs",
        icon: <BiSolidBriefcase className='size-8' />,
        value: "31,091"
    },
    {
        title: "Companies",
        icon: <BiSolidBank className='size-8' />,
        value: "19,879"
    },
    {
        title: "Candidates",
        icon: <BiSolidGroup className='size-8' />,
        value: "1,94,180"
    },
    {
        title: "New Jobs",
        icon: <BiSolidBriefcaseAlt2 className='size-8' />,
        value: "15,153"
    },

];


const Stats = () =>
(
    <section className="flex items-center justify-center flex-wrap gap-x-4 lg:gap-20 lg:pb-16 my-8 lg:my-0 bg-gray-50">
        {data.map((item, index) => (
            <div className="flex items-center p-2 lg:p-5 rounded-lg gap-2">
                <span className="hidden mr-2 text-teal-500 bg-teal-50 sm:inline p-3 rounded-lg">
                    {item.icon}
                </span>
                <div className="flex flex-col items-start">
                    <p className="block text-md md:text-xl font-bold text-gray-900 lg:text-2xl mb-0" >
                        {item.value}
                    </p> <span className="text-xs md:text-sm text-gray-500">
                        {item.title}</span>
                </div>
            </div>
        ))}
    </section>
);

export default Stats;