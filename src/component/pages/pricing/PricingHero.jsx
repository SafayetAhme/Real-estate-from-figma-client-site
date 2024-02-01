import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const PricingHero = () => {
    return (
        <div>
            <div className='text-center bg-[#FFF8F5]  mx-auto lg:py-[40px] md:pt-[30px] sm:pt-[20px]'>
                <div class="lg:text-[54px] container font-poppins mx-auto sm:text-[46px] md:text-[56px] text-[46px] lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">Pricing Plan</div>
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
                            <NavLink to="/Pricing" className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            >
                                <p className='font-medium text-base'>Pricing</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="divider -mt-2 divider-neutral"></p>
        </div>
    )
}

export default PricingHero