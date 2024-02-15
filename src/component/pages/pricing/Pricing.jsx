import React from 'react'
import PricingHero from './PricingHero'
import StyJurny from '../../shared/start your jurny/StyJurny'
import { motion } from "framer-motion";
import { GoCheck } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";


const Pricing = () => {
    return (
        <div className="">
            {/* Pricinghero */}
            <PricingHero></PricingHero>

            {/* Pricing section */}
            <div className='lg:px-14 pt-16'>
                <div className='container mx-auto'>
                    <div className='lg:flex items-center pb-12 justify-between'>
                        <h1 className='font-poppins text-5xl font-semibold leading-[56px]'>No hidden charge, <br /> get your plan.</h1>
                        <p className='font-poppins pt-6 text-gray-600'>Try Free plan features for 14 days · No credit <br /> card required for exploration.</p>
                    </div>

                    {/* price 3 card */}
                    < Card />
                </div>
            </div>

            {/* Start your journey */}
            <StyJurny></StyJurny>
        </div>
    );
};

const Card = () => {
    return (
        <div className='lg:flex items-center gap-7'>
            <motion.div
                whileHover="hover"
                transition={{
                    duration: 1,
                    ease: "backInOut",
                }}
                variants={{
                    hover: {
                        scale: 1.05,
                    },
                }}
                className="relative h-[440px] w-[336px] shrink-0 overflow-hidden rounded-xl hover:bg-gray-100 border border-black p-6 mb-8"
            >
                <div className="relative z-10 text-white">
                    <div className='hover:text-white'>
                        <h1 className='font-poppins text-black text-xl font-semibold -mt-2 text-center'>FREE PLAN</h1>
                        <h1 className='font-poppins text-black text-5xl font-semibold py-4 text-center'>$0</h1>
                        <h1 className='font-poppins text-black text-center'>per user/month</h1>
                        <hr className='my-7 text-black' />

                        <div className=''>
                            <div className='flex items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>60-day chat history</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>Basic widget customization</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <IoCloseOutline className='text-black w-6 h-6' />
                                <h1 className='font-poppins text-center text-gray-400'>Ticketing system</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <IoCloseOutline className='text-black w-6 h-6' />
                                <h1 className='font-poppins text-center text-gray-400'>Data security</h1>
                            </div>
                        </div>
                    </div>
                    <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                            hover: {
                                scale: 1,
                            },
                        }}
                        transition={{
                            duration: 1,
                            ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                    >
                    </motion.span>
                </div>
                <button className="absolute font-poppins z-20 w-[284px] mt-6 rounded-lg text-white bg-black py-3 text-center ">Subscribe Now</button>
                <Background />
            </motion.div>
            <motion.div
                whileHover="hover"
                transition={{
                    duration: 1,
                    ease: "backInOut",
                }}
                variants={{
                    hover: {
                        scale: 1.05,
                    },
                }}
                className="relative h-[440px] w-[336px] shrink-0 overflow-hidden rounded-xl hover:bg-gray-100 border border-black p-6 mb-8"
            >
                <div className="relative z-10 text-white">
                    <div className='hover:text-white'>
                        <h1 className='font-poppins text-black text-xl font-semibold -mt-2 text-center'>STANDART</h1>
                        <h1 className='font-poppins text-black text-5xl font-semibold py-4 text-center'>$12</h1>
                        <h1 className='font-poppins text-black text-center'>per user/month</h1>
                        <hr className='my-7 text-black' />

                        <div className=''>
                            <div className='flex items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>60-day chat history</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>Basic widget customization</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>Ticketing system</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <IoCloseOutline className='text-black w-6 h-6' />
                                <h1 className='font-poppins text-center text-gray-400'>Data security</h1>
                            </div>
                        </div>
                    </div>
                    <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                            hover: {
                                scale: 1,
                            },
                        }}
                        transition={{
                            duration: 1,
                            ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                    >
                    </motion.span>
                </div>
                <button className="absolute font-poppins z-20 w-[284px] mt-6 rounded-lg text-white bg-black py-3 text-center ">Subscribe Now</button>
                <Background />
            </motion.div>
            <motion.div
                whileHover="hover"
                transition={{
                    duration: 1,
                    ease: "backInOut",
                }}
                variants={{
                    hover: {
                        scale: 1.05,
                    },
                }}
                className="relative h-[440px] w-[336px] shrink-0 overflow-hidden rounded-xl hover:bg-gray-100 border border-black p-6 mb-8"
            >
                <div className="relative z-10 text-white">
                    <div className='hover:text-white'>
                        <h1 className='font-poppins text-black text-xl font-semibold -mt-2 text-center'>BUSINESS</h1>
                        <h1 className='font-poppins text-black text-5xl font-semibold py-4 text-center'>$39</h1>
                        <h1 className='font-poppins text-black text-center'>per user/month</h1>
                        <hr className='my-7 text-black' />

                        <div className=''>
                            <div className='flex items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>60-day chat history</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>Basic widget customization</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>Ticketing system</h1>
                            </div>
                            <div className='flex pt-3 items-center gap-2'>
                                <GoCheck className='text-black w-5 h-5' />
                                <h1 className='font-poppins text-center text-black'>Data security</h1>
                            </div>
                        </div>
                    </div>
                    <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                            hover: {
                                scale: 1,
                            },
                        }}
                        transition={{
                            duration: 1,
                            ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                    >
                    </motion.span>
                </div>
                <button className="absolute font-poppins z-20 w-[284px] mt-6 rounded-lg text-white bg-black py-3 text-center ">Subscribe Now</button>
                <Background />
            </motion.div>
        </div>
    );
};

const Background = () => {
    return (
        <motion.svg
            width="320"
            height="384"
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 z-0"
            variants={{
                hover: {
                    scale: 1.5,
                },
            }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <motion.circle
                variants={{
                    hover: {
                        scaleY: 0.5,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
                cx="160.5"
                cy="114.5"
                r="101.5"
                fill="#fff"
            />
            <motion.ellipse
                variants={{
                    hover: {
                        scaleY: 2.25,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
                cx="160.5"
                cy="265.5"
                rx="101.5"
                ry="43.5"
                fill="#fff"
            />
        </motion.svg>
    );
};

export default Pricing;