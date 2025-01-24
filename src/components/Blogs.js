import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import blogcover1 from '../images/blog1.jpg';
import blogcover2 from '../images/blog2.jpg';
import blogcover3 from '../images/blog3.jpg';

const blogPosts = [
    {
        "title": "Freelancing vs. Full-Time Employment: Which is Right for You?",
        "date_posted": "2025-01-17",
        "cover": blogcover2
    },
    {
        "title": "Top 5 Skills Employers Are Looking For in 2024",
        "date_posted": "2025-01-10",
        "cover": blogcover1
    },
    {
        "title": "How to Stand Out in a Competitive Job Market",
        "date_posted": "2025-01-03",
        "cover": blogcover3
    },
];

const Blogs = () => {
    return (
        <section className='max-w-screen-xxl px-4 py-16 mx-auto flex flex-col items-center bg-white'>
            <h2 className="mb-12 text-3xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
                Read our Blogs
            </h2>
            <div className='grid max-w-screen-xl md:px-4 mx-auto md:grid-cols-12 mb-4'>
                {
                    blogPosts.map((item, index) =>
                    (
                        <div key={index} className='mr-auto place-self-center md:col-span-6 lg:col-span-4 w-full h-full 
                        hover:cursor-pointer delay-150 duration-300 ease-in-out hover:-translate-y-0.5'>
                            <div className='items-startrounded-lg flex flex-col md:m-2'>
                                <img className="w-full h-52 rounded-lg object-cover " src={item.cover} alt="profile img" />

                                <div className='flex flex-col px-5 pb-6 pt-2'>
                                    <p className="text-gray-500 text-xs mb-2">
                                        {item.date_posted}
                                    </p>
                                    <h3 className="text-start font-bold text-gray-900">
                                        {item.title}
                                    </h3>
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

export default Blogs;