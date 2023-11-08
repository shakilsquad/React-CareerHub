import React from 'react';
import { Link } from 'react-router-dom';

const EroorPage = () => {
    return (
        <div className='py-16 h-screen'>
            <h1>Upps</h1>
           <Link to={'/'} className=' py-2 px-4 border-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]  font-bold'>Go To Back</Link>

        </div>
    );
};

export default EroorPage;