import React from 'react'
import { NavLink } from 'react-router-dom'
import imgfind from '../../../../public/image/imgfind.png'
import layot from '../../../../public/image/layot.png'
import footerbg from '../../../../public/image/footerbg.png'

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
        </div>
    )
}

export default Agency