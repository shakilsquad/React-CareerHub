import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='p-8 border-2'>
            <div>
                <img src={logo} alt="" />
            </div>
            <h1 className='text-[18px] pb-3 pt-8 md:text-2xl font-bold text-[#474747]'>{job_title}</h1>
            <h1 className='text-[16px] md:text-[20px] text-[#757575] font-semibold pb-3'>{company_name}</h1>
            <div className='flex gap-2'>
                <button className='py-1 px-2 md:py-2 md:px-4 border-2 rounded-lg text-[#7E90FE] border-[#7E90FE] font-bold'>{remote_or_onsite}</button>
                <button className='py-1 px-2 md:py-2 md:px-4 border-2 rounded-lg text-[#7E90FE] border-[#7E90FE] font-bold'>{job_type}</button>
            </div>

            <div className='flex  gap-4 py-5'>
                <div className='md:flex justify-center items-center gap-2'>
                    <FaLocationDot></FaLocationDot>
                    <p className='text-[16px] md:text-[20px] text-[#757575] md:font-semibold'>{location}</p>
                </div>
                <div className='md:flex justify-center items-center gap-2'>
                    <AiOutlineDollar></AiOutlineDollar>
                    <p className='text-[16px] md:text-[20px] text-[#757575] md:font-semibold'>Salary : {salary}</p>
                </div>
            </div>

            <Link to={`/job/${id}`}>
                <button className='py-1 px-2 md:py-2 md:px-4 border-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] border-[#7E90FE] font-bold'>View Details</button>
            </Link>

        </div>
    );
};

export default Job;