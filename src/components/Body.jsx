import React from 'react';
import Blogs from './Blogs';
import Menu from './Menu';

const Body = () => {
    return (
        <div className='bg-zinc-900 h-screen'>
            <div className=' pt-16'>
                <Menu />
                <Blogs />
            </div>
        </div>
    );
};

export default Body;