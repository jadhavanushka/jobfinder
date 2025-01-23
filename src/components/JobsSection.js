import React from 'react';
import JobCard from './JobCard';
import { BiRightArrowAlt } from 'react-icons/bi';

const jobsData = [
    {
        "role": "Software Engineer",
        "description": "Develop and maintain web applications.",
        "company": "TechWave",
        "type": "Full-time",
        "salary_range": "80k - 100k",
        "location": "New York",
        "deadline_in": "15"
    },
    {
        "role": "Marketing Specialist",
        "description": "Create and implement marketing strategies.",
        "company": "BrandSpark",
        "type": "Part-time",
        "salary_range": "30k - 40k",
        "location": "Los Angeles",
        "deadline_in": "20"
    },
    {
        "role": "Data Analyst",
        "description": "Analyze data to drive business decisions.",
        "company": "InsightLabs",
        "type": "Contract",
        "salary_range": "60k - 80k",
        "location": "Chicago",
        "deadline_in": "10"
    },
    {
        "role": "Graphic Designer",
        "description": "Design visual content for various platforms.",
        "company": "PixelCraft",
        "type": "Full-time",
        "salary_range": "50k - 70k",
        "location": "Remote",
        "deadline_in": "25"
    },
    {
        "role": "Project Manager",
        "description": "Oversee projects from inception to completion.",
        "company": "Global Scope",
        "type": "Full-time",
        "salary_range": "90k - 110k",
        "location": "Austin",
        "deadline_in": "30"
    },
    {
        "role": "Sales Associate",
        "description": "Assist customers and drive sales.",
        "company": "Retail Hub",
        "type": "Part-time",
        "salary_range": "15 - 20 per hour",
        "location": "Miami",
        "deadline_in": "05"
    },
    {
        "role": "Content Writer",
        "description": "Write engaging content for blogs and websites.",
        "company": "Wordsmiths",
        "type": "Contract",
        "salary_range": "40k - 60k",
        "location": "Remote",
        "deadline_in": "12"
    },
    {
        "role": "HR Coordinator",
        "description": "Support HR functions and employee relations.",
        "company": "People Connect",
        "type": "Full-time",
        "salary_range": "50k - 65k",
        "location": "Seattle",
        "deadline_in": "18"
    },
    {
        "role": "Web Developer",
        "description": "Build and maintain websites and applications.",
        "company": "CodeCraft",
        "type": "Full-time",
        "salary_range": "70k - 90k",
        "location": "Boston",
        "deadline_in": "22"
    },
];

const JobSection = () => {
    return (
        <section className='max-w-screen-xl px-4 py-16 mx-auto lg:mt-4 flex flex-col items-center'>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
                Explore Jobs
            </h2>
            <p className="px-4 mb-6 text-gray-500 lg:mb-8 md:text-lg text-center">
                Discover a vast array of exciting job opportunities across various industries and locations.</p>

            <div className='grid max-w-screen-xl md:px-4 mx-auto md:grid-cols-12 mb-8'>
                {
                    jobsData.map((job, index) =>
                    (
                        <JobCard key={index} job={job} />
                    ))
                }
            </div>

            <button className="font-medium rounded-lg ps-6 pe-4 py-2.5 flex items-center justify-center w-fit
                  text-teal-600 bg-white border-2 border-teal-600 hover:text-teal-700 focus:outline-none hover:bg-teal-50 focus:ring-4 focus:ring-teal-100">
                View all
                <BiRightArrowAlt className='size-6 ms-1' />
            </button>

        </section>

    );
};

export default JobSection;
