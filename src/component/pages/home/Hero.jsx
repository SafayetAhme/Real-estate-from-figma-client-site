import React from 'react'
import layot from '../../../../public/image/layot.png'
import Shape from '../../../../public/image/Bg-Shape.png'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className="bg-[#FFF8F4] lg:pb-[155px] md:pb-[45px] sm:pb-[30px] pb-[18px] ">
            <div className='text-center lg:w-[1042px] mx-auto lg:pt-[101px] md:pt-[70px] sm:pt-[50px]'>
                <div class="lg:text-[76px] sm:text-[56px] md:text-[66px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">Get the ideal home for <br /> your family</div>
                <img className='lg:w-60 md:w-60 w-0 ml-[494px] -mt-0' src={layot} alt="" />
                <p className='lg:text-[28px] md:text-[22px] sm:text-[22px] text-[18px] pt-[32px] pb-[57px]'>We’ve more than 745,000 apartments, place & plot.</p>
            </div>

            {/* search and location section */}
            <div className='lg:w-[1000px] mx-auto p-4' style={{ backgroundImage: `url(${Shape})` }}>
                <div className='bg-white grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 items-center rounded-2xl'>
                    <div className='flex gap-6 p-6  items-end'>
                        <div className=''>
                            <h1 className='text-lg font-normal text-gray-500'>I’m looking to...</h1>
                            <h1 className='font-medium'>Buy Apartments</h1>
                        </div>
                        <img className='' src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg" alt="arrow-down-01" width="28" height="28" />
                    </div>
                    <div className='flex lg:gap-6 md:gap-6 gap-4 sm:gap-6 p-6 py-1  border-s-2 items-end'>
                        <div className=''>
                            <h1 className='text-lg font-normal text-gray-500'>Location...</h1>
                            <h1 className='font-medium'>Dhanmondi, Dhaka</h1>
                        </div>
                        <img src="https://cdn.hugeicons.com/icons/location-01-stroke-rounded.svg" alt="location-01" width="24" height="28" />
                    </div>
                    <div className='flex gap-6 p-6 py-1 border-s-2 items-end'>
                        <div className=''>
                            <h1 className='text-lg font-normal text-gray-500'>Price Range...</h1>
                            <h1 className='font-medium'>$10,000-$200,000</h1>
                        </div>
                        <img src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg" alt="arrow-down-01" width="28" height="28" />
                    </div>
                    <div className='border-s-2 py-1 lg:pl-10 md:pl-10 sm:pl-10 pl-6'>
                        <Link to='/Property'>
                            <button className="flex rounded-[10px] border-2 border-dashed border-black bg-[#FF6725] lg:px-12 md:px-12 sm:px-12 px-14 py-[10px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                <p className="font-medium">SEARCH</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero