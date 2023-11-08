import React from 'react';

const Banner = () => {
    return (
        <div className='py-5'>
           <div className='flex justify-center items-center'>
            <div>
                <div className=''>
                    <h1 className='w-[576px] text-7xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-cyan-500'>Dream Job</span> </h1>
                    <p className='w-[519px] py-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='py-1 px-2 md:py-2 md:px-4 border-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] border-[#7E90FE] font-bold'>View Details</button>
                </div>
            </div>
            <div className='w-[800px] h-[744px]'>
                <img src="https://i.ibb.co/fdL90H0/P3-OLGJ1-copy-1.png" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Banner;