import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDollar } from "react-icons/ai";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utlity/LicalStorage';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    const handelApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have  Applied person')
    }

    return (
        <div>
            <Helmet>
                <title>CareerHub | JobDetails</title>
            </Helmet>

            <div className='grid md:grid-cols-4 gap-7 '>
                <div className='border md:col-span-3 px-1'>
                    <div className='space-y-5 py-3 md:py-6'>
                        <h1 className=' text-2xl font-semibold py-2 md:py-6 md:text-4xl text-center'>Details coming hear</h1>
                        <h1 className='font-bold text-base'>Job Description:
                            <span className='text-[16px font-normal text-[#757575]'>{job.job_description}</span> </h1>
                        <h1 className='font-bold text-base'>Job Responsibility:
                            <span className='text-[16px font-normal text-[#757575]'>{job.job_responsibility}</span></h1>
                        <h1 className='font-bold text-base'>Educational Requirements:
                            <br />
                            <span className='text-[16px font-normal text-[#757575]'>{job.educational_requirements}</span>
                        </h1>
                        <h1 className='font-bold text-base'>Experiences:
                            <br />
                            <span className='text-[16px font-normal text-[#757575]'>{job.experiences}</span>
                        </h1>
                    </div>
                </div>

                <div>
                    <div className='border rounded-lg space-y-3 col-span-1 p-3 bg-[#f4f2ff]'>
                        <div className='space-y-2'>
                            <h1 className='text-lg md:text-2xl font-semibold border-b-2 border-gray-300 pb-2'>Job Details</h1>

                            <div className='md:flex  items-center gap-1'>
                                <AiOutlineDollar></AiOutlineDollar>
                                <p className='text-[16px] md:text-[17px] text-[#474747] md:font-semibold'>Salary :
                                    <span className='text-[16px font-normal text-[#757575]' >  {job.salary}</span>
                                </p>
                            </div>
                            <div className='md:flex  items-center gap-1'>
                                <BsFillClipboardCheckFill></BsFillClipboardCheckFill>
                                <p className='text-[16px] md:text-[17px] text-[#474747] md:font-semibold'>Job Title :
                                    <span className='text-[16px font-normal text-[#757575]'>  {job.job_title}</span>
                                </p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-lg md:text-2xl border-b-2 font-semibold border-gray-300 pb-2'>Contact Information</h1>
                            <div className='md:flex  items-center gap-1'>
                                <BiPhone></BiPhone>
                                <p className='text-[16px] md:text-[17px] text-[#474747] md:font-semibold'>Phone :
                                    <span className='text-[16px font-normal text-[#757575]'>  {job.contact_information.phone}</span>
                                </p>
                            </div>
                            <div className='md:flex  items-center gap-1'>
                                <AiOutlineMail></AiOutlineMail>
                                <p className='text-[16px] md:text-[17px] text-[#474747] md:font-semibold'>Email :
                                    <span className='text-[16px font-normal text-[#757575]'>  {job.contact_information.email}</span>
                                </p>
                            </div>
                            <div className='md:flex   gap-1'>
                                <FaLocationDot></FaLocationDot>
                                <p className='text-[16px] md:text-[17px] text-[#474747] md:font-semibold'>Address :
                                    <span className='text-[16px font-normal text-[#757575]'>  {job.contact_information.address}</span>
                                </p>
                            </div>
                        </div>
                        <button onClick={handelApplyJob} className='py-2 w-full px-4 border-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] border-[#7E90FE] font-bold'>Apply Now</button>
                    </div>
                    <ToastContainer />
                </div>

            </div>
        </div>
    );
};

export default JobDetails;