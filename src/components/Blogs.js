import React from 'react';
import headerimg from '../images/headerimg.svg';

const blogPosts = [
    {
        "title": "Top 5 Skills Employers Are Looking For in 2024",
        "date_posted": "2024-09-20"
    },
    {
        "title": "Freelancing vs. Full-Time Employment: Which is Right for You?",
        "date_posted": "2024-07-10"
    },
    {
        "title": "How to Stand Out in a Competitive Job Market",
        "date_posted": "2024-09-05"
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
                        <div key={index} className='mr-auto place-self-center md:col-span-6 lg:col-span-4 w-full h-full'>
                            <div className='items-startrounded-lg flex flex-col md:m-2'>
                                <img className="w-full h-40 rounded-lg object-cover " src={headerimg} alt="profile img" />

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

            <button className="font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex items-center justify-center w-fit
                    text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 
                    focus:ring-gray-100">
                View all</button>

        </section>
    );
};

export default Blogs;