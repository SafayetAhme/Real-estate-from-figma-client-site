import { useState } from "react";
import { NavLink } from "react-router-dom";
import bisk from "../../../../public/image/bisk.png"
import imgown from '../../../../public/image/imgown.png'
import two from '../../../../public/image/two.png'
import thri from '../../../../public/image/thri.png'
import layot from '../../../../public/image/layot.png'
import corebg from '../../../../public/image/corebg.png'
import one from '../../../../public/image/one.png'
import twoo from '../../../../public/image/twoo.png'
import thrii from '../../../../public/image/thrii.png'
import React from 'react'
import img from '../../../../public/image/img.png'
import bgbed from '../../../../public/image/bgbed.png'
import imgfind from '../../../../public/image/imgfind.png'
import ex from '../../../../public/image/ex.png'


const SerPro = () => {

    return (
        <div className="">
            <div className='text-center bg-[#FFF8F5]  mx-auto lg:py-[40px] md:pt-[30px] sm:pt-[20px]'>
                <div class="lg:text-[56px] container mx-auto sm:text-[46px] md:text-[56px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">Our Services</div>
                <div className=" border-b-2 border-[#FF6725] w-fit mx-auto">
                    <ul className="flex items-center justify-center">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            >
                                <p className='font-medium text-base'>Home</p>
                            </NavLink>
                        </li> /
                        <li className="nav-item">
                            <NavLink to="/Services" className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            >
                                <p className='font-medium text-base'>Services</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="divider -mt-2 divider-neutral"></p>

            {/* section */}
            <div className="">
                <div className="container mx-auto grid pt-12 lg:grid-cols-2 items-center justify-between gap-14">
                    <img src={bisk} alt="" />
                    <div>
                        <h1 className="text-5xl font-semibold leading-[58px] pb-6 font-poppins" >120k+ Clients Rely <br /> on our Services.</h1>
                        <p className="text-lg pb-10 font-normal text-gray-600 font-poppins leading-[30px]">Our founders Dustin Moskovitz and Justin Rosenstein <br /> met while leading Engineering .</p>

                        <div className='flex gap-2 items-center'>
                            <img src="https://cdn.hugeicons.com/icons/bounce-right-stroke-rounded.svg" alt="bounce-right" width="24" height="24" />
                            <p className='text-lg font-normal text-gray-600'>Loan & low Interest facility</p>
                        </div>
                        <div className='flex gap-2 pt-2 items-center'>
                            <img src="https://cdn.hugeicons.com/icons/bounce-right-stroke-rounded.svg" alt="bounce-right" width="24" height="24" />
                            <p className='text-lg font-normal text-gray-600'>Over 100k+ property & update regularly</p>
                        </div>
                        <div className='flex gap-2 pt-2 items-center'>
                            <img src="https://cdn.hugeicons.com/icons/bounce-right-stroke-rounded.svg" alt="bounce-right" width="24" height="24" />
                            <p className='text-lg font-normal text-gray-600'>Expert agent consultation</p>
                        </div>

                        <button className="flex rounded-[10px] mt-8 border-2 border-dashed border-black bg-[#FF6725] lg:px-6 md:px-6 sm:px-6 px-2 py-[10px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <p className="font-medium">Contact Us</p>
                        </button>
                    </div>
                </div>

                {/* section */}
                <div className='container mx-auto lg:flex py-28 justify-center gap-16 items-center'>
                    <div className='text-center'>
                        <img className='mx-auto w-[160px]' src={imgown} alt="" />
                        <p className='text-lg py-3 text-gray-500'>Buy a home</p>
                        <h1 className=' text-lg font-medium'>Explore homy’s 2 million+ <br /> homes and uncover your ideal <br /> living space.</h1>
                    </div>
                    <div className='text-center'>
                        <img className='mx-auto w-[160px]' src={two} alt="" />
                        <p className='text-lg py-3 text-gray-500'>Rent a home</p>
                        <h1 className=' text-lg font-medium'>Discover a rental you'll love on <br /> homy, thanks to 35+ filters and <br /> tailored keywords.</h1>
                    </div>
                    <div className='text-center'>
                        <img className='mx-auto w-[160px]' src={thri} alt="" />
                        <p className='text-lg py-3 text-gray-500'>Sell property</p>
                        <h1 className=' text-lg font-medium'>List, sell, thrive – with our top- <br /> notch real estate agency. It’s <br /> super easy & fun.</h1>
                    </div>
                </div>

                {/* core service section */}
                <div className="w-full h-full" style={{ backgroundImage: `url(${corebg})` }}>
                    <div className='text-center  mx-auto lg:pt-[70px] md:pt-[50px] sm:pt-[30px]'>
                        <div class="lg:text-[56px] sm:text-[46px] md:text-[56px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">Core Services</div>
                        <img className='w-[220px] ml-[594px] -mt-3' src={layot} alt="" />
                        <p className='lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] pt-[6px] pb-[57px]'>Over 745K listings of apartments, lots, plots - available today.</p>
                    </div>
                    <div>
                        <div className="grid px-24 container mx-auto pb-24 lg:grid-cols-3 gap-5">
                            <div className="bg-white p-8 rounded-2xl">
                                <img src={one} alt="" />
                                <h1 className="text-xl py-3 pt-4 font-poppins">Buy a home</h1>
                                <p className="text-[14px] leading-[24px] font-poppins">Explore homy’s 2 million+ homes and uncover your ideal living space.</p>
                                <div className="">
                                    <button className="border-[1px] hover:text-[#FF6625] hover:border-[#FF6625] px-[20px] py-2 mt-8 font-poppins rounded-lg border-black">Buy Home</button>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl">
                                <img src={twoo} alt="" />
                                <h1 className="text-xl py-3 pt-4 font-poppins">Rent a Home</h1>
                                <p className="text-[14px] leading-[24px] font-poppins">Discover a rental you'll love on homy, thanks to 35+ filters.</p>
                                <div className="">
                                    <button className="border-[1px] hover:text-[#FF6625] hover:border-[#FF6625] px-[20px] py-2 mt-8 font-poppins rounded-lg border-black">Buy Home</button>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl">
                                <img src={thrii} alt="" />
                                <h1 className="text-xl py-3 pt-4 font-poppins">Sell Home</h1>
                                <p className="text-[14px] leading-[24px] font-poppins">List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.</p>
                                <div className="">
                                    <button className="border-[1px] hover:text-[#FF6625] hover:border-[#FF6625] px-[20px] py-2 mt-8 font-poppins rounded-lg border-black">Buy Home</button>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl">
                                <img src={one} alt="" />
                                <h1 className="text-xl py-3 pt-4 font-poppins">Mortgage</h1>
                                <p className="text-[14px] leading-[24px] font-poppins">Explore homy’s 2 million+ homes and uncover your ideal living space.</p>
                                <div className="">
                                    <button className="border-[1px] hover:text-[#FF6625] hover:border-[#FF6625] px-[20px] py-2 mt-8 font-poppins rounded-lg border-black">Buy Home</button>
                                </div>
                            </div><div className="bg-white p-8 rounded-2xl">
                                <img src={twoo} alt="" />
                                <h1 className="text-xl py-3 pt-4 font-poppins">Consulting</h1>
                                <p className="text-[14px] leading-[24px] font-poppins">Explore homy’s 2 million+ homes and uncover your ideal living space.</p>
                                <div className="">
                                    <button className="border-[1px] hover:text-[#FF6625] hover:border-[#FF6625] px-[20px] py-2 mt-8 font-poppins rounded-lg border-black">Buy Home</button>
                                </div>
                            </div><div className="bg-white p-8 rounded-2xl">
                                <img src={thrii} alt="" />
                                <h1 className="text-xl py-3 pt-4 font-poppins">Property Managment</h1>
                                <p className="text-[14px] leading-[24px] font-poppins">Explore homy’s 2 million+ homes and uncover your ideal living space.</p>
                                <div className="">
                                    <button className="border-[1px] hover:text-[#FF6625] hover:border-[#FF6625] px-[20px] py-2 mt-8 font-poppins rounded-lg border-black">Buy Home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Apply section */}
                <div className=" overflow-y-scroll bg-cover bg-fixed  " style={{ backgroundImage: `url(${bgbed})` }}>
                    <div className="container mx-auto">
                        <div className='text-center  mx-auto lg:py-[70px] md:py-[50px] sm:pt-[30px]'>
                            <div class="lg:text-[62px] sm:text-[46px] md:text-[56px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[74px] sm:leading-[50px] leading-[50px] text-white">Apply for loan with <br /> low interest.</div>
                            <p className='lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] pt-[12px] text-white '>Apply for loan & get up to $20million with low interest</p>
                            <button className="mx-auto flex items-center gap-2 rounded-[10px] border-2 border-dashed mt-8 border-black bg-[#FF6725] lg:px-6 md:px-6 sm:px-6 px-2 py-[10px] font-semibold text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                <p className="font-medium">Contact Us</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 18L20 6" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" />
                                    <path d="M16 11.9995L4 11.9995" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                    <path d="M12 8C12 8 16 10.946 16 12C16 13.0541 12 16 12 16" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Efficient section */}
                <div className=''>
                    <div className='lg:flex justify-center gap-24 pt-12'>
                        <div className='text-center'>
                            <img className='w-[50px] mx-auto h-[50px] rounded-full' src={img} alt="" />
                            <h1 className='text-xl font-medium pt-1'>Jonathan Harry</h1>
                            <h1 className='font-medium text-gray-500'>Milan, ltlay</h1>
                        </div>
                        <div>
                            <h1 className='text-[24px] text-center font-poppins'>Efficient, knowledgeable, & made our home <br /> search a smooth experience. Highly <br /> recommended agency!</h1>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-xl font-medium pt-1'>Trustpilot</h1>
                            <div className="rating py-1">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                            </div>
                            <h1 className='font-medium'>13k rating <span className='text-gray-500'>(4.7 Rating)</span></h1>
                        </div>
                    </div>
                    <div className="divider divider-neutral pt-6"><div className='w-4 rounded-full h-2 bg-orange-600'></div><div className='w-4 rounded-full h-2 bg-black'></div><div className='w-4 rounded-full h-2 bg-black'></div></div>
                </div>

                {/* Find your section */}
                <div className="container mx-auto grid pt-[90px] lg:grid-cols-2 items-center justify-between gap-14">
                    <img src={imgfind} alt="" />
                    <div>
                        <h1 className="text-5xl font-semibold leading-[58px] pb-6 font-poppins" >Find Your Perfect Match Easily.</h1>
                        <p className="text-lg pb-8 font-normal text-gray-600 font-poppins leading-[30px]">Browse 745,000+ homes for purchase, rent, and <br /> mortgage options in our listings.</p>

                        <form className=''>
                            <form>
                                <div class="relative w-[430px]">
                                    <input type="search" id="search" class="block w-full outline-none p-4 border-black text-sm text-black border rounded-lg bg-gray-50" placeholder="Your Email Address..." required />
                                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#FF6625] font-medium rounded-lg text-sm px-4 py-2 ">Find out</button>
                                </div>
                            </form>
                            <p className='pt-1 text-gray-500'>For more details please  <span className="underline text-black font-medium">contact us</span> </p>
                        </form>

                        <div className="flex pt-10 items-center gap-20">
                            <div className="">
                                <h1 className="text-5xl font-poppins font-bold">1.2x</h1>
                                <h1 className="font-poppins pt-2">Fast search engine</h1>
                            </div>
                            <div className="">
                                <h1 className="text-5xl font-poppins font-bold">$1.3b+</h1>
                                <h1 className="font-poppins pt-2">Property listing sold last year</h1>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Start */}
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
        </div>
    )
}

export default SerPro