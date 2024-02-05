import React from 'react'
import UseBlogs from '../../hooks/use blogs/UseBlogs'
import { Link, useParams } from 'react-router-dom';
import StyJurny from '../../shared/start your jurny/StyJurny';

const BlogDetails = () => {
    const [blogs] = UseBlogs();
    const { id } = useParams();
    const blog = blogs?.find(blog => blog?._id === id);
    console.log(blog)

    return (
        <div>
            <div className='container mx-auto py-12'>
                <div className='flex items-center pt-4 gap-2'>
                    <p className='text-lg font-medium'>{blog?.name}</p>
                    <p className='font-medium text-gray-500'>{blog?.time}</p>
                </div>
                <h1 className='font-poppins text-5xl w-[800px] leading-[60px] pb-6 font-black pt-2'>{blog?.headtitle}</h1>
                <div className='relative w-full object-cover'>
                    <img className='w-full h-[680px] object-cover object-center' src={blog?.imageone} alt="" />
                    <h1 className='absolute top-0 left-0 bg-black px-4 py-1 text-white m-4'>{blog?.date}</h1>
                    <p className='text-base font-normal font-poppins pt-10'>{blog?.maintext}</p>
                    <p className='text-base font-normal font-poppins pt-8'>{blog?.maintexttwo}</p>
                </div>
            </div>
            {/* Start your journey */}
            <StyJurny></StyJurny>
        </div>
    )
}

export default BlogDetails