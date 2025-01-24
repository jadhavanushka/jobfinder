import React from 'react';
import JobCard from './JobCard';
import { BiRightArrowAlt } from 'react-icons/bi';
import google from '../images/google.webp';
import walmart from '../images/walmart.webp';
import LinkedIn from '../images/LinkedIn.webp';
import ibm from '../images/ibm.png';
import microsoft from '../images/microsoft.png';
import HubSpot from '../images/HubSpot.png';
import png from '../images/P&G.png';
import adobe from '../images/adobe.jpg';
import Amazon from '../images/amazon.jpg';

const jobsData = [
    {
        "role": "Software Engineer",
        "description": "Develop and maintain web applications.",
        "company": "Google",
        "type": "Full-time",
        "salary_range": "80k - 100k",
        "location": "New York",
        "deadline_in": "15",
        "logo": google
    },
    {
        "role": "Marketing Specialist",
        "description": "Create and implement marketing strategies.",
        "company": "Procter & Gamble",
        "type": "Part-time",
        "salary_range": "30k - 40k",
        "location": "Los Angeles",
        "deadline_in": "20",
        "logo": png
    },
    {
        "role": "Data Analyst",
        "description": "Analyze data to drive business decisions.",
        "company": "IBM",
        "type": "Contract",
        "salary_range": "60k - 80k",
        "location": "Chicago",
        "deadline_in": "10",
        "logo": ibm
    },
    {
        "role": "Graphic Designer",
        "description": "Design visual content for various platforms.",
        "company": "Adobe",
        "type": "Full-time",
        "salary_range": "50k - 70k",
        "location": "Remote",
        "deadline_in": "25",
        "logo": adobe
    },
    {
        "role": "Project Manager",
        "description": "Oversee projects from inception to completion.",
        "company": "Microsoft",
        "type": "Full-time",
        "salary_range": "90k - 110k",
        "location": "Austin",
        "deadline_in": "30",
        "logo": microsoft
    },
    {
        "role": "Sales Associate",
        "description": "Assist customers and drive sales.",
        "company": "Walmart",
        "type": "Part-time",
        "salary_range": "15 - 20 per hour",
        "location": "Miami",
        "deadline_in": "05",
        "logo": walmart
    },
    {
        "role": "Content Writer",
        "description": "Write engaging content for blogs and websites.",
        "company": "HubSpot",
        "type": "Contract",
        "salary_range": "40k - 60k",
        "location": "Remote",
        "deadline_in": "12",
        "logo": HubSpot
    },
    {
        "role": "HR Coordinator",
        "description": "Support HR functions and employee relations.",
        "company": "LinkedIn",
        "type": "Full-time",
        "salary_range": "50k - 65k",
        "location": "Seattle",
        "deadline_in": "18",
        "logo": LinkedIn
    },
    {
        "role": "Web Developer",
        "description": "Build and maintain websites and applications.",
        "company": "Amazon",
        "type": "Full-time",
        "salary_range": "70k - 90k",
        "location": "Boston",
        "deadline_in": "22",
        "logo": Amazon
        }
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

export default JobSection;
