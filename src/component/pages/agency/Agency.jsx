import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import layot from '../../../../public/image/layot.png'
import footerbg from '../../../../public/image/footerbg.png'
import busness from '../../../../public/image/busness.png'
import imgown from '../../../../public/image/imgown.png'
import profile from '../../../../public/image/profile.png'
import right from '../../../../public/image/right.png'
import shotify from '../../../../public/image/shotify.png'
import airbnb from '../../../../public/image/airbnb.png'
import logitech from '../../../../public/image/logitech.png'
import google from '../../../../public/image/google.png'
import payoneet from '../../../../public/image/payoneet.png'
import slack from '../../../../public/image/slack.png'
import AgentSection from '../home/AgentSection'
import StyJurny from '../../shared/start your jurny/StyJurny'
import AgencyClientFeedSection from './AgencyClientFeedSection'
import AgencyVideoSection from './AgencyVideoSection'



const Agency = () => {

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

            {/* Secure section section */}
            <div className='container mx-auto pt-20'>
                <div className="grid lg:grid-cols-2 gap-4 lg:px-12">
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
            <AgencyVideoSection></AgencyVideoSection>

            {/* We'r here sectiion */}
            <div className='pb-20'>
                <div className='text-center lg:w-[1042px] mx-auto lg:pt-[101px] md:pt-[70px] sm:pt-[50px]'>
                    <div class="lg:text-[52px] font-poppins sm:text-[46px] md:text-[56px] text-[46px] lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[68px] sm:leading-[60px] leading-[60px] ">We’r here to help <br /> you get your dream home</div>
                    <img className='lg:w-60 md:w-60 w-0 ml-[524px] -mt-0' src={layot} alt="" />
                    <p className='lg:text-[20px] font-poppins md:text-[18px] sm:text-[22px] text-[18px] pt-[16px] pb-[57px]'>It’s easy to start with us with these simple steps</p>
                </div>
                <div className='grid lg:grid-cols-3 mx-auto items-center'>
                    <div className='text-center mx-auto'>
                        <img className='w-[160px] mx-auto' src={profile} alt="" />
                        <p className='text-lg font-bold pt-7'>Create Account</p>
                        <h1 className=' font-poppins text-base pt-2 leading-[25px] text-gray-600'>It’s very easy to open an account <br /> and start your journey.</h1>
                    </div>
                    <div className='text-center mx-auto py-8'>
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

            {/*client Feedback section */}
            <AgencyClientFeedSection></AgencyClientFeedSection>
            
            {/* Our agents section */}
            <AgentSection></AgentSection>
            
            {/* company section */}
            <div className='pt-20'>
                <h1 className='text-xl font-poppins pb-4 text-center'>100+ Company trusted by us.</h1>
                <div className='container mx-auto'>
                    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 justify-center lg:gap-[92px] md:gap-[92px] sm:gap-[92px] gap-[22px] items-center'>
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
            <StyJurny></StyJurny>
        </div>
    )
}

export default Agency