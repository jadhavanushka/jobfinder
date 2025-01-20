import React from 'react';
import headerimg from '../images/headerimg.svg';
import { FaStar, FaRegStar } from 'react-icons/fa';


const reviews = [
    {
        "rating": 5,
        "review": "Absolutely love this job finder! I found my dream job as a Software Engineer in just a week! The platform is intuitive, and the job listings were relevant to my skills. I truly feel supported throughout my job search journey.",
        "name": "Emily Johnson",
        "job_title": "Software Engineer"
    },
    {
        "rating": 4,
        "review": "This site has been incredibly helpful with a lot of opportunities available in my field. I truly appreciate the career tips section, which offered valuable advice on interviews and resume building.",
        "name": "Michael Smith",
        "job_title": "Project Manager"
    },
    {
        "rating": 5,
        "review": "This site made my job search so much easier! I found a fantastic position as a Content Writer that perfectly matches my passion. I highly recommend it to anyone looking for new opportunities!",
        "name": "Sophia Davis",
        "job_title": "Content Writer"
    }
];


const StarRating = ({ rating }) => {
    return (
        <div className='flex text-yellow-500 gap-1'>
            {[...Array(5)].map((_, index) => {
                return index < rating ? (
                    <FaStar key={index} /> 
                ) : (
                    <FaRegStar key={index} /> 
                );
            })}
        </div>
    );
};

const Feedbacks = () => {
    return (
        <section className='max-w-screen-xl px-4 py-16 mx-auto flex flex-col items-center'>
            <h2 className="mb-12 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                What do they say about us?
            </h2>
            <div className='grid max-w-screen-xl md:px-4 mx-auto md:grid-cols-12 mb-8'>
                {
                    reviews.map((item, index) =>
                    (
                        <div key={index} className='mr-auto place-self-center md:col-span-6 lg:col-span-4 w-full h-full'>
                            <div className='p-5 items-start bg-white rounded-lg shadow hover:shadow-lg flex flex-col mb-2 md:m-2 gap-4'>
                                <StarRating rating={item.rating} />
                                <p className="mb-2 text-justify">
                                    {item.review}
                                </p>
                                <div className='flex gap-2'>
                                    <img className="w-12 h-12 rounded-lg" src={headerimg} alt="profile img" />
                                    <div className='flex flex-col'>
                                        <h3 className="text-start font-bold text-gray-900">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            {item.job_title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Feedbacks;