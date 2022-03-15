import React from 'react';

const Menu = () => {
    return (
        <>
            <div className='h-16 bg-zinc-800 w-1/2 mx-auto text-white'>
                <div className='flex items-center pt-5'>
                    <h2 className='px-7'>Blog</h2>
                    <h2 className='pl-7 pr-12'>Delete all</h2>
                    <div className='flex pr-10'>
                        <span className='bg-zinc-600 h-7 w-7 rounded-full text-center pb-2'>5</span><h2 className='px-3'>Long stories</h2> <input type="checkbox" className="toggle toggle-accent " ></input>
                    </div>
                    <div className='flex'>
                        <span className='bg-zinc-600 h-7 w-7 rounded-full text-center pb-2'>5</span><h2 className='px-3'>Short stories</h2> <input type="checkbox" className="toggle toggle-accent" ></input>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;