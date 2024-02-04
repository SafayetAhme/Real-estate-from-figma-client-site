import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import imgfind from '../../../../public/image/imgfind.png'
import layot from '../../../../public/image/layot.png'
import footerbg from '../../../../public/image/footerbg.png'
import busness from '../../../../public/image/busness.png'
import imgown from '../../../../public/image/imgown.png'
import profile from '../../../../public/image/profile.png'
import right from '../../../../public/image/right.png'
import reviewicon from '../../../../public/image/reviewicon.png'
import fbone from '../../../../public/image/fbone.png'
import fbtwo from '../../../../public/image/fbtwo.png'
import fbthri from '../../../../public/image/fbthri.png'
import fbforth from '../../../../public/image/fbforth.png'
// import layot from '../../../../public/image/layot.png'
import bgagent from '../../../../public/image/bgagent.png'
import shotify from '../../../../public/image/shotify.png'
import airbnb from '../../../../public/image/airbnb.png'
import logitech from '../../../../public/image/logitech.png'
import google from '../../../../public/image/google.png'
import payoneet from '../../../../public/image/payoneet.png'
import slack from '../../../../public/image/slack.png'
import ex from '../../../../public/image/ex.png'


let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>


const Agency = () => {
    const [videoOpen, setvideoOpen] = useState(false);

    let domNode = useClickOutside(() => {
        setvideoOpen(false);
    });

    return (
        <div>
            <div className='text-center bg-[#FFF8F5]  mx-auto lg:py-[40px] md:pt-[30px] sm:pt-[20px]'>
                <div class="lg:text-[56px] container mx-auto sm:text-[46px] md:text-[56px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">About Agency</div>
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
                            <NavLink to="/Agency" className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            >
                                <p className='font-medium text-base'>About Us</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="divider -mt-2 divider-neutral"></p>

            {/* Secure section */}
            <div className='container mx-auto pt-20'>
                <div className="grid lg:grid-cols-2 gap-4 px-12">
                    <div>
                        <h1 className='font-poppins text-sm pb-1 text-gray-400'>ABOUT US</h1>
                        <h1 className="text-[44px] font-semibold leading-[58px] pb-6 font-poppins" >Secure your family's Dream home.</h1>
                        <img className='lg:w-52 md:w-50 w-0 ml-[233px] -mt-[82px] pb-16' src={layot} alt="" />
                        <p className="text-sm pb-8 font-normal text-gray-500 font-poppins leading-[24px]">Our founders Dustin Moskovitz and Justin Rosenstein <br /> met while leading Engineering .</p>

                        <button className='bg-[#FF6725] px-5 py-2 rounded-md font-poppins text-white'>Contact Us</button>
                        <hr className='mt-10 mr-14' />

                        <div className="flex pt-10 items-center gap-20">
                            <div className="">
                                <h1 className="text-5xl font-poppins font-bold">1.2%</h1>
                                <h1 className="font-poppins text-sm pt-2">Low interest rate</h1>
                            </div>
                            <div className="">
                                <h1 className="text-5xl font-poppins font-bold">$1.3b+</h1>
                                <h1 className="font-poppins  text-sm pt-2">Cumulative trading volume</h1>
                            </div>
                        </div>

                    </div>
                    <div className='p-6' style={{ backgroundImage: `url(${footerbg})` }}>
                        <div className='bg-white p-10 rounded-xl'>
                            <h1 className='text-xl font-poppins font-semibold'>Who we are?</h1>
                            <p className='font-poppins text-base font-light leading-[32px] text-gray-600 pt-2'>Our founders Dustin Moskovitz & Justin <br /> Rosenstein met  leading Engineering teams at <br /> Facebook. As operations scaled, they grew <br /> frustrated by how difficult coordinate</p>
                            <hr className='my-7' />
                            <h1 className='text-xl font-poppins font-semibold'>Our Mission</h1>
                            <p className='font-poppins text-base font-light leading-[32px] text-gray-600 pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua. </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* video section */}
            <div className='pt-32 container mx-auto'>
                <section className="bg-white pb-20 dark:bg-dark lg:pb-[24px]">
                    <div ref={domNode} className="container">
                        <div className="-mx-4 flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <div className="relative z-20 h-[390px] overflow-hidden rounded-lg md:h-[550px]">
                                    <div className="absolute left-0 top-0 h-full w-full">
                                        <img
                                            src={busness}
                                            alt="bg"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div
                                        className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center`}
                                    >
                                        <a
                                            href="#"
                                            onClick={() => setvideoOpen(true)}
                                            className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF6625] text-primary dark:bg-dark-2 dark:text-white md:h-[100px] md:w-[100px]"
                                        >
                                            <span className="absolute right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"></span>
                                            <svg
                                                width="23"
                                                height="27"
                                                viewBox="0 0 23 27"
                                                className="fill-[#fff]"
                                            >
                                                <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {videoOpen && (
                        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
                            <div className="mx-auto w-full max-w-[550px] bg-white">
                                <>
                                    <iframe
                                        className="h-[320px] w-full"
                                        src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
                                    />
                                </>
                            </div>

                            <button
                                onClick={() => setvideoOpen(false)}
                                className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color hover:bg-black"
                            >
                                <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
                                    <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
                                </svg>
                            </button>
                        </div>
                    )}
                </section>
            </div>

            {/* We'r here */}
            <div className='pb-20'>
                <div className='text-center lg:w-[1042px] mx-auto lg:pt-[101px] md:pt-[70px] sm:pt-[50px]'>
                    <div class="lg:text-[52px] font-poppins sm:text-[46px] md:text-[56px] text-[46px] lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[68px] sm:leading-[60px] leading-[60px] ">We’r here to help <br /> you get your dream home</div>
                    <img className='lg:w-60 md:w-60 w-0 ml-[524px] -mt-0' src={layot} alt="" />
                    <p className='lg:text-[20px] font-poppins md:text-[18px] sm:text-[22px] text-[18px] pt-[16px] pb-[57px]'>It’s easy to start with us with these simple steps</p>
                </div>
                <div className='flex w-[1000px] mx-auto items-center'>
                    <div className='text-center mx-auto'>
                        <img className='w-[160px] mx-auto' src={profile} alt="" />
                        <p className='text-lg font-bold pt-7'>Create Account</p>
                        <h1 className=' font-poppins text-base pt-2 leading-[25px] text-gray-600'>It’s very easy to open an account <br /> and start your journey.</h1>
                    </div>
                    <div className='text-center mx-auto'>
                        <img className='w-[160px] mx-auto' src={imgown} alt="" />
                        <p className='text-lg font-bold pt-7'>Find Home</p>
                        <h1 className=' font-poppins text-base pt-2 leading-[25px] text-gray-600'>Complete your profile with all the info <br /> to get attention of client.</h1>
                    </div>
                    <div className='text-center mx-auto'>
                        <img className='w-[160px] mx-auto' src={right} alt="" />
                        <p className='text-lg font-bold pt-7'>Quick Process</p>
                        <h1 className=' font-poppins text-base pt-2 leading-[25px] text-gray-600'>Apply & get your preferable jobs with all <br /> the requirements and get it.</h1>
                    </div>
                </div>
            </div>

            {/* Feedback section */}
            <div className='bg-[#F5EDE8]'>
                <div className='text-center lg:w-[1042px] mx-auto lg:pt-[101px] md:pt-[70px] sm:pt-[50px]'>
                    <div class="lg:text-[46px] font-poppins sm:text-[46px] md:text-[56px] text-[46px] lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[68px] sm:leading-[60px] leading-[60px] ">Client Feedback</div>
                    <img className='lg:w-60 md:w-60 w-0 ml-[474px] -mt-0' src={layot} alt="" />
                    <p className='lg:text-[20px] font-poppins md:text-[18px] sm:text-[22px] text-[18px] pt-[10px] pb-[57px]'>Client satisfaction speaks louder than our words. Hear from them.</p>
                </div>

                {/* feedback card*/}
                <div className='w-[1000px] mx-auto'>
                    <div className="carousel gap-5 w-full">
                        <div id="item1" className="carousel-item w-[480px] h-[300px]">
                            <div className='w-full  p-7 bg-white rounded-xl'>
                                <div className='flex items-center  justify-between'>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div>
                                        <img className='w-[26px]' src={reviewicon} alt="" />
                                    </div>
                                </div>
                                <h1 className='font-poppins text-xl pt-6 leading-[34px]'>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time. <br /> Highly recommended!</h1>
                                <div className='flex items-center pt-8 justify-between'>
                                    <div>
                                        <h1 className='font-poppins text-xl leading-[34px] font-semibold'>Rashed Kabir, <span className='text-gray-500 font-medium'>Claifornia</span> </h1>
                                    </div>
                                    <div>
                                        <img className='w-[50px] rounded-full' src={fbtwo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="item2" className="carousel-item w-[480px] h-[300px]">
                            <div className='w-full  p-7 bg-white rounded-xl'>
                                <div className='flex items-center  justify-between'>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div>
                                        <img className='w-[26px]' src={reviewicon} alt="" />
                                    </div>
                                </div>
                                <h1 className='font-poppins text-xl pt-6 leading-[34px]'>One should not hesitate to ask for <br /> unlikely as they might think.</h1>
                                <div className='flex items-center pt-16 justify-between'>
                                    <div>
                                        <h1 className='font-poppins text-xl leading-[34px] font-semibold'>Zubayer Ai Hasan, <span className='text-gray-500 font-medium'>Dhaka</span> </h1>
                                    </div>
                                    <div>
                                        <img className='w-[50px] rounded-full' src={fbone} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="item3" className="carousel-item w-[480px] h-[300px]">
                            <div className='w-full  p-7 bg-white rounded-xl'>
                                <div className='flex items-center  justify-between'>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div>
                                        <img className='w-[26px]' src={reviewicon} alt="" />
                                    </div>
                                </div>
                                <h1 className='font-poppins text-xl pt-6 leading-[34px]'>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time. <br /> Highly recommended!</h1>
                                <div className='flex items-center pt-6 justify-between'>
                                    <div>
                                        <h1 className='font-poppins text-xl pt-6 leading-[34px] font-semibold'>Rashed Kabir, <span className='text-gray-500 font-medium'>Claifornia</span> </h1>
                                    </div>
                                    <div>
                                        <img className='w-[50px] rounded-full' src={fbthri} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="item4" className="carousel-item w-[480px] h-[300px]">
                            <div className='w-full  p-7 bg-white rounded-xl'>
                                <div className='flex items-center  justify-between'>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div>
                                        <img className='w-[26px]' src={reviewicon} alt="" />
                                    </div>
                                </div>
                                <h1 className='font-poppins text-xl pt-6 leading-[34px]'>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time. <br /> Highly recommended!</h1>
                                <div className='flex items-center pt-6 justify-between'>
                                    <div>
                                        <h1 className='font-poppins text-xl pt-6 leading-[34px] font-semibold'>Zubayer Ai Hasan, <span className='text-gray-500 font-medium'>Dhaka</span> </h1>
                                    </div>
                                    <div>
                                        <img className='w-[50px] rounded-full' src={fbforth} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-10 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </div>
            </div>

            {/* Our agents */}
            <div className='container pt-24 mx-auto'>
                <div className="flex px-20 justify-between items-center">
                    <div className='text-[40px] font-bold font-poppins'>
                        <div class="font-poppins">Our Agents</div>
                        <img className='lg:w-44 md:w-40 w-0 ml-[80px] -mt-1' src={layot} alt="" />
                        <p className='text-lg pt-1 font-normal'>Lorem  is placeholder text commonly used  graphic </p>
                    </div>
                    <div>
                        <button className="flex rounded-[10px] border-2 border-dashed border-[#FF6725] bg-[#ffffff] lg:px-6 md:px-6 sm:px-6 px-2 py-[10px] font-semibold gap-1 text-[#FF6725] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <p className="font-medium">Meet Entire Team</p>
                        </button>
                    </div>
                </div>

                {/* card */}
                <div className='px-16 pt-6'>
                    <div>
                        <div className="container  h-20 mx-auto" style={{ backgroundImage: `url(${bgagent})` }}>
                        </div>
                        <div className='grid p-4 -mt-20 gap-5 lg:grid-cols-4 items-cente'>
                            <div className=''>
                                <div className=" text-center">
                                    <img className="rounded-t-lg rounded-xl h-[270px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                                    <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                                    <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                                </div>
                            </div>
                            <div className=''>
                                <div className="relative text-center overflow-hidden bg-cover bg-no-repeat">
                                    <img className="rounded-t-lg rounded-xl h-[270px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                                    <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                                    <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                                </div>
                            </div>
                            <div className=''>
                                <div className="relative text-center overflow-hidden bg-cover bg-no-repeat">
                                    <img className="rounded-t-lg rounded-xl h-[270px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                                    <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                                    <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                                </div>
                            </div>
                            <div className=''>
                                <div className="relative text-center overflow-hidden bg-cover bg-no-repeat">
                                    <img className="rounded-t-lg rounded-xl h-[270px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                                    <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                                    <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-neutral pt-0"><div className='w-4 rounded-full h-2 bg-orange-600'></div><div className='w-4 rounded-full h-2 bg-black'></div><div className='w-4 rounded-full h-2 bg-black'></div></div>
                    </div>
                </div>
            </div>

            {/* company section */}
            <div className='pt-20'>
                <h1 className='text-xl font-poppins pb-4 text-center'>100+ Company trusted by us.</h1>
                <div className='container mx-auto'>
                    <div className='lg:flex justify-center gap-[92px] items-center'>
                        <img className='w-[94px]' src={slack} alt="" />
                        <img className='w-[94px]' src={google} alt="" />
                        <img className='w-[124px] pb-3' src={payoneet} alt="" />
                        <img className='w-[94px]' src={logitech} alt="" />
                        <img className='w-[94px]' src={airbnb} alt="" />
                        <img className='w-[94px]' src={shotify} alt="" />
                    </div>
                </div>
            </div>

            {/* start your jurney section */}
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

export default Agency