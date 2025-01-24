import React from 'react';
import { BiCode, BiBarChart, BiLineChart, BiPalette, BiClipboard, BiDollar, BiPen, BiRightArrowAlt } from 'react-icons/bi';
import { GoPeople } from 'react-icons/go';
import { FaFilm } from 'react-icons/fa';

const jobCategories = [
    {
        "category": "Software Development",
        "open_positions": 120,
        "icon": BiCode
    },
    {
        "category": "Marketing",
        "open_positions": 80,
        "icon": BiLineChart

    },
    {
        "category": "Data Analysis",
        "open_positions": 45,
        "icon": BiBarChart
    },
    {
        "category": "Design",
        "open_positions": 30,
        "icon": BiPalette
    },
    {
        "category": "Project Management",
        "open_positions": 60,
        "icon": BiClipboard
    },
    {
        "category": "Sales",
        "open_positions": 75,
        "icon": BiDollar
    },
    {
        "category": "Content Creation",
        "open_positions": 50,
        "icon": BiPen
    },
    {
        "category": "Human Resources",
        "open_positions": 25,
        "icon": GoPeople
    },
    {
        "category": "Video & Animation",
        "open_positions": 90,
        "icon": FaFilm
    }
];


const Categories = () => {
    return (
        <section className='max-w-screen-xxl px-4 py-16 mx-auto flex flex-col items-center bg-white'>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
                Popular Job Categories
            </h2>
            <p className="px-4 mb-6 text-gray-500 lg:mb-8 md:text-lg text-center">
                Explore and take the first step towards your dream job!
            </p>
            <div className='grid max-w-screen-xl md:px-4 mx-auto md:grid-cols-12 mb-8'>
                {
                    jobCategories.map((item, index) =>
                    (
                        <div key={index} className='mr-auto place-self-center md:col-span-6 lg:col-span-4 w-full h-full'>
                            <div className='p-5 items-center bg-teal-50 rounded-lg shadow hover:ring-1 hover:ring-teal-500
                            flex mb-2 md:m-2 gap-4 pr-24 hover:cursor-pointer delay-150 duration-300 ease-in-out hover:-translate-y-0.5'>
                                <span className="text-white bg-teal-500 p-4 rounded-full text-3xl">
                                    <item.icon />
                                </span>
                                <div className="flex flex-col w-full">
                                    <h3 className="text-start font-bold text-gray-900">
                                        {item.category}
                                    </h3>
                                    <p className="text-gray-500">
                                        {item.open_positions} open positions
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button className="font-medium rounded-lg ps-6 pe-4 py-2.5 flex items-center justify-center w-fittext-teal-600 
            text-teal-600 bg-white border-2 border-teal-600 focus:outline-none
            hover:text-teal-700 hover:bg-teal-50 focus:ring-4 focus:ring-teal-100
            delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow">
                View all
                <BiRightArrowAlt className='size-6 ms-1' />
            </button>

        </section>
    );
};

export default Categories;