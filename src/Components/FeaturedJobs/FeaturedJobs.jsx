import React, { useEffect } from 'react';
import { useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJob] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data));
    }, [])


    return (
        <div className='my-8'>
            <div className='text-center '>
                <h1 className='text-2xl font-bold md:text-3xl lg:text-5xl '>Featured Jobs</h1>
                <p className='py-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-5 py-5'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='flex justify-center  py-3'>
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className=' py-2 px-4 border-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]  font-bold'>See All Jobs</button>
                </div>
            </div>

        </div>
    );
};

export default FeaturedJobs;