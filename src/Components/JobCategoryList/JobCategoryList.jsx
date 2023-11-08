import React from 'react';

const JobCategoryList = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold'>Job Category List</h1>
            <p className='py-5 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4 gap-5'>
                <div className='bg-gray-100 p-10 rounded-lg '>
                    <div className='bg-gray-200 mb-6 p-3 w-24 rounded-lg flex items-center justify-center'>
                        <img src="https://i.ibb.co/WHdKNxY/accounts-1.png" alt="" />
                    </div>
                    <h1 className='text-[#474747] text-[28px] font-bold'>Account & Finance</h1>
                    <p className='text-[18px] text-[#A3A3A3]'>300 Jobs Available</p>
                </div>
                <div className='bg-gray-100 p-10 rounded-lg '>
                    <div className='bg-gray-200 mb-6 p-3 w-24 rounded-lg flex items-center justify-center'>
                        <img src="https://i.ibb.co/pQGPtdH/business-1.png" alt="" />
                    </div>
                    <h1 className='text-[#474747] text-[28px] font-bold'>Creative Design</h1>
                    <p className='text-[18px] text-[#A3A3A3]'>200 Jobs Available</p>
                </div>
                <div className='bg-gray-100 p-10 rounded-lg '>
                    <div className='bg-gray-200 mb-6 p-3 w-24 rounded-lg flex items-center justify-center'>
                        <img src="https://i.ibb.co/tshvsWc/social-media-1.png" alt="" />
                    </div>
                    <h1 className='text-[#474747] text-[28px] font-bold'>Marketing & Sales</h1>
                    <p className='text-[18px] text-[#A3A3A3]'>150 Jobs Available</p>
                </div>
                <div className='bg-gray-100 p-10 rounded-lg '>
                    <div className='bg-gray-200 mb-6 p-3 w-24 rounded-lg flex items-center justify-center'>
                        <img src="https://i.ibb.co/Ybw9jnd/chip-1.png" alt="" />
                    </div>
                    <h1 className='text-[#474747] text-[28px] font-bold'>Engineering Job</h1>
                    <p className='text-[18px] text-[#A3A3A3]'>320 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;