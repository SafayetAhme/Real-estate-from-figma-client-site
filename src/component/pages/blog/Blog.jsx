import React from 'react'
import BlogHero from './BlogHero'
import probg from '../../../../public/image/probg.png'
import StyJurny from '../../shared/start your jurny/StyJurny'

const Blog = () => {
    return (
        <div>
            <BlogHero></BlogHero>

            {/* blog card section */}
            <div className="grid lg:grid-cols-3 pt-10 container mx-auto">
                <div className='pt-4 col-span-2 gap-5'>
                    <div className='relative w-[750px]'>
                        <img className='w-full' src="https://images.unsplash.com/photo-1617870952348-7524edfb61b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <h1 className='absolute top-0 left-0 bg-black px-4 py-1 text-white m-4'>17 Set</h1>
                        <div className='flex items-center pt-4 gap-2'>
                            <p className='text-lg font-medium'>Rashed kabir. </p>
                            <p className='font-medium text-gray-500'>4 min</p>
                        </div>
                        <h1 className='font-poppins text-2xl font-black pt-3'>Print, publishing qui visual ux layout mockups.</h1>
                        <p className='text-base font-normal font-poppins pt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                        <button className='flex items-center gap-2 hover:bg-[#000] hover:border-black border-2 text-black px-6 py-3 rounded- hover:text-white mt-6'>
                            <h1 className='font-poppins'>Read More</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.0053 6L18 6.00024M18 6.00024L18 12.962M18 6.00024L6 18" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='col-span-1 h-fit p-4'>
                    <div className='p-5' style={{ backgroundImage: `url(${probg})` }}>

                        <form class="flex items-center">
                            <div class="relative w-full">
                                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-4 p-2.5   " placeholder="Search..." required />
                                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.5 17.5L22 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </form>

                        {/* category */}
                        <div className='p-4 bg-white mt-4'>
                            <h1 className='font-poppins text-lg font-semibold'>Category</h1>
                            <p className='text-sm font-poppins pt-4 hover:underline'>Digital (3)</p>
                            <p className='text-sm font-poppins pt-3 hover:underline'>Digital (3)</p>
                            <p className='text-sm font-poppins pt-3 hover:underline'>Digital (3)</p>
                            <p className='text-sm font-poppins pt-3 hover:underline'>Digital (3)</p>
                            <p className='text-sm font-poppins pt-3 hover:underline'>Digital (3)</p>
                            <p className='text-sm font-poppins pt-3 hover:underline'>Digital (3)</p>
                        </div>

                        {/* category */}
                        <div className='p-4 bg-white mt-4'>
                            <h1 className='font-poppins text-lg font-semibold'>Category</h1>
                            <div className='flex items-center pt-4 gap-3'>
                                <img className='w-[60px] h-[60px]' src="https://images.unsplash.com/photo-1617870952348-7524edfb61b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                <div>
                                    <h1 className='font-poppins font-semibold text-sm'>10 days quick challenge for boost visitors.</h1>
                                    <p className='font-poppins pt-1 text-gray-500'>23 July, 2018</p>
                                </div>
                            </div>
                            <div className='flex items-center pt-4 gap-3'>
                                <img className='w-[60px] h-[60px]' src="https://images.unsplash.com/photo-1617870952348-7524edfb61b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                <div>
                                    <h1 className='font-poppins font-semibold text-sm'>10 days quick challenge for boost visitors.</h1>
                                    <p className='font-poppins pt-1 text-gray-500'>23 July, 2018</p>
                                </div>
                            </div>
                            <div className='flex items-center pt-4 gap-3'>
                                <img className='w-[60px] h-[60px]' src="https://images.unsplash.com/photo-1617870952348-7524edfb61b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                <div>
                                    <h1 className='font-poppins font-semibold text-sm'>10 days quick challenge for boost visitors.</h1>
                                    <p className='font-poppins pt-1 text-gray-500'>23 July, 2018</p>
                                </div>
                            </div>
                        </div>

                        {/* Keywords */}
                        <div className='p-4 bg-white mt-4'>
                            <h1 className='font-poppins text-lg font-semibold'>Keywords</h1>
                            <button className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black mt-3'>Branding</button>
                            <button className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black ml-2 mt-3'>Education</button>
                            <button className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black mt-3'>Design</button>
                            <button className='px-6 py-1 border-[2px] hover:bg-black hover:text-white hover:border-black ml-2 mt-3'>Development</button>
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