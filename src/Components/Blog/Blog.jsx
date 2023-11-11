import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className='h-screen'>
            <Helmet>
                <title>CareerHub | Blog</title>
            </Helmet>
            <h1>Blog</h1>
        </div>
    );
};

export default Blog;