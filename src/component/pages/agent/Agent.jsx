import React from 'react'
import AgentHero from './AgentHero'
import ex from '../../../../public/image/ex.png'
import layot from '../../../../public/image/layot.png'


const Agent = () => {
    return (
        <div>
            <AgentHero></AgentHero>
            {/* all agent */}
            <div className='container pt-14 mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-poppins'>Showing <span className='font-bold'>1-8</span> or <span className='font-bold'>1,230</span> results</h1>
                    <div className='flex items-center gap-2'>
                        <h1>Sort by:</h1>
                        <div className='flex items-center gap-2'>
                            <select className="border-[2px] rounded-md pb-1 py-0 px-1">
                                <option>Popular</option>
                                <option>Normal</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Our agents */}
                <div className='grid gap-5 pt-6 lg:grid-cols-4 items-cente'>
                    <div className=''>
                        <div className=" relative text-center">
                            <img className="rounded-t-lg rounded-xl h-[320px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                            <button className="absolute  top-2 left-0">
                                <span className="bg-[#fff] px-2 py-[4px] text-xs font-medium pb-1">7 LISTING</span>
                            </button>
                            <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                            <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className=" relative text-center">
                            <img className="rounded-t-lg rounded-xl h-[320px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                            <button className="absolute  top-2 left-0">
                                <span className="bg-[#fff] px-2 py-[4px] text-xs font-medium pb-1">7 LISTING</span>
                            </button>
                            <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                            <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className=" relative text-center">
                            <img className="rounded-t-lg rounded-xl h-[320px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                            <button className="absolute  top-2 left-0">
                                <span className="bg-[#fff] px-2 py-[4px] text-xs font-medium pb-1">7 LISTING</span>
                            </button>
                            <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                            <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className=" relative text-center">
                            <img className="rounded-t-lg rounded-xl h-[320px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                            <button className="absolute  top-2 left-0">
                                <span className="bg-[#fff] px-2 py-[4px] text-xs font-medium pb-1">7 LISTING</span>
                            </button>
                            <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                            <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* start your journey */}
            <div className='mt-24 mb-12 mx-auto overflow-y-scroll px-24 bg-cover bg-fixed bg-center bg-no-repeat ' style={{ backgroundImage: `url(${ex})` }}>
                <div className='lg:flex container mx-auto justify-between items-center'>
                    <div className=' pt-14 pb-28'>
                        <div class="font-poppins text-white pt-2 leading-[64px] text-5xl">Start your Journey <br /> As a Realtor.</div>
                        <img className='lg:w-44 md:w-40 w-0 ml-[256px] -mt-16' src={layot} alt="" />
                    </div>
                    <form className=''>
                        <form>
                            <div class="relative w-[380px]">
                                <input type="search" id="search" class="block w-full outline-none p-4 text-sm text-black border rounded-lg bg-gray-50" placeholder="Email Address..." required />
                                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#FF6625] font-medium rounded-lg text-sm px-4 py-2 ">Get Started</button>
                            </div>
                        </form>
                        <p className='text-white pt-1'>Already a Agent? <span className='text-[#FF6625] underline font-medium'> Sign in.</span> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Agent