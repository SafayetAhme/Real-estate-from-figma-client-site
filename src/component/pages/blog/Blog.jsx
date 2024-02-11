import React, { useState } from 'react'
import BlogHero from './BlogHero'
import probg from '../../../../public/image/probg.png'
import StyJurny from '../../shared/start your jurny/StyJurny'
import UseBlogs from '../../hooks/use blogs/UseBlogs'
import { Link } from 'react-router-dom'

const Blog = () => {
    const [blogs] = UseBlogs();
    const [blog, setBlogs] = useState(blogs);

    // filterbycategory
    const filterbyCategory = (cate) => {
        const CategoryFilter = blogs?.filter(item => item?.category === cate)
        setBlogs(CategoryFilter);
    }

    // filter by category
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm)

    return (
        <div>
            <BlogHero></BlogHero>

            {/* blog card section */}
            <div className="grid lg:grid-cols-3 pt-10 container mx-auto">
                <div className='pt-4 col-span-2 gap-5'>
                    {
                        blog?.length > 0 ? <div>
                            <div>
                                {
                                    blog?.filter((item) => {
                                        if (searchTerm === "") {
                                            return item;
                                        } else if (item.headtitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return item;
                                        }
                                    }).map(item =>
                                        <div key={item?.id} className='relative w-[750px]'>
                                            <img className='w-full h-[480px] object-cover object-center' src={item?.imageone} alt="" />
                                            <h1 className='absolute top-0 left-0 bg-black px-4 py-1 text-white m-4'>{item?.date}</h1>
                                            <div className='flex items-center pt-4 gap-2'>
                                                <p className='text-lg font-medium'>{item?.name}</p>
                                                <p className='font-medium text-gray-500'>{item?.time}</p>
                                            </div>
                                            <h1 className='font-poppins text-2xl font-black pt-3'>{item?.headtitle}</h1>
                                            <p className='text-base font-normal font-poppins pt-4'>{item?.maintext}</p>
                                            <Link to={`/blogdetails/${item?._id}`}>
                                                <button className='flex items-center mb-12 gap-2 hover:bg-[#000] hover:border-black border-2 text-black px-6 py-3 rounded- hover:text-white mt-6'>
                                                    <h1 className='font-poppins'>Read More</h1>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M11.0053 6L18 6.00024M18 6.00024L18 12.962M18 6.00024L6 18" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div> :
                            <div>
                                {
                                    blogs?.filter((item) => {
                                        if (searchTerm === "") {
                                            return item;
                                        } else if (item.headtitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return item;
                                        }
                                    }).map(item =>
                                        <div key={item?.id} className='relative w-[750px]'>
                                            <img className='w-full h-[480px] object-cover object-center' src={item?.imageone} alt="" />
                                            <h1 className='absolute top-0 left-0 bg-black px-4 py-1 text-white m-4'>{item?.date}</h1>
                                            <div className='flex items-center pt-4 gap-2'>
                                                <p className='text-lg font-medium'>{item?.name}</p>
                                                <p className='font-medium text-gray-500'>{item?.time}</p>
                                            </div>
                                            <h1 className='font-poppins text-2xl font-black pt-3'>{item?.headtitle}</h1>
                                            <p className='text-base font-normal font-poppins pt-4'>{item?.maintext}</p>
                                            <Link to={`/blogdetails/${item?._id}`}>
                                                <button className='flex items-center mb-12 gap-2 hover:bg-[#000] hover:border-black border-2 text-black px-6 py-3 rounded- hover:text-white mt-6'>
                                                    <h1 className='font-poppins'>Read More</h1>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M11.0053 6L18 6.00024M18 6.00024L18 12.962M18 6.00024L6 18" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                    }
                </div>
                <div className='col-span-1 h-fit p-4'>
                    <div className='p-5' style={{ backgroundImage: `url(${probg})` }}>

                        <form class="flex items-center">
                            <div class="relative w-full">
                                <input onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }} type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-4 p-2.5   " placeholder="Search..." required />
                                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.5 17.5L22 22" stroke="#000000" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </form>


                        {/* category */}
                        <div className='p-4 bg-white mt-4'>
                            <h1 className='font-poppins text-lg font-semibold'>Recent News</h1>
                            {
                                blogs?.map(item =>
                                    <div key={item?.id} className='flex items-center pt-4 gap-3'>
                                        <Link to={`/blogdetails/${item?._id}`}>
                                            <div className='w-[60px]'>
                                                <img className='w-full object-cover h-[60px]' src={item?.imageone} alt="" />
                                            </div>
                                        </Link>
                                        <div>
                                            <h1 className='font-poppins font-semibold text-sm'>{item?.headtitle}</h1>
                                            <p className='font-poppins pt-1 text-gray-500'>{item?.time}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* Keywords */}
                        <div className='p-4 bg-white mt-4'>
                            <h1 className='font-poppins text-lg font-semibold'>Category</h1>
                            <button onClick={() => filterbyCategory("Branding")} className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black mt-3'>Branding</button>
                            <button onClick={() => filterbyCategory("Education")} className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black ml-2 mt-3'>Education</button>
                            <button onClick={() => filterbyCategory("Design")} className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black mt-3'>Design</button>
                            <button onClick={() => filterbyCategory("Development")} className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black ml-2 mt-3'>Development</button>
                            <button onClick={() => filterbyCategory("Digital")} className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black mt-3'>Digital</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start your journey */}
            <StyJurny></StyJurny>
        </div >

    )
}

export default Blog