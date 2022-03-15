import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div className='pt-10 grid grid-cols-2 gap-4 w-1/2 mx-auto'>
            {
                blogs.map(blog => (
                    <div className='bg-zinc-800 rounded-md p-3 flex justify-between' key={blog.id}>
                        <div>
                            <h1 className='text-blue-400'> {blog.title} </h1>
                            <p> {blog.body} </p>
                        </div>

                        {
                            blog.image !== "NULL" && <img className='w-24 h-24 rounded-md' src={blog?.image} alt="" />
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Blogs;