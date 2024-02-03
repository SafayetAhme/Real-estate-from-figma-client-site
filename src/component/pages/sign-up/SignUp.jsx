import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import googlee from '../../../../public/image/googlee.png'
import facebook from '../../../../public/image/facebook.png'


const SignUp = () => {
    return (
        <div className='w-[504px] mx-auto my-64'>
            <div class="p-12 bg-white shadow-2xl rounded-xl">
                <div className=" border-[1px]  border-[#FF6725] w-full rounded-full mx-auto">
                    <ul className="flex items-center gap-10 justify-center">
                        <li className="nav-item  border-r-[1px] border-[#FF6725] pr-10">
                            <NavLink to="/signin" className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            >
                                <p className='font-medium text-base'>Sign In</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup" className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            >
                                <p className='font-medium text-base'>Sign Up</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <h1 class="text-4xl text-center pt-8 font-bold font-poppins">Register</h1>
                <p className='font-poppins font-medium pt-3 pb-8 text-center '>Already have an account? <Link to="/signin"><span className='underline font-semibold text-[#FF6725]'>Login</span></Link> </p>
                <form class="space-y-4 md:space-y-4" action="#">
                    <div>
                        <label for="email" className='text-gray-500'>Name*</label>
                        <input type="name" name="name" id="name" className="bg-gray-50 mt-1 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="email" className='text-gray-500'>Email*</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 mt-1 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" className='text-gray-500'>Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border mt-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="flex pb-3 items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 text-sm dark:text-gray-300">By hitting the "Register" button, you agree to the <span className='underline'>Terms conditions</span> & <span className='underline'>Privacy Policy</span> </label>
                            </div>
                        </div>
                    </div>
                    <button className='bg-[#FF6725] w-full py-[10px] text-lg font-poppins text-white rounded-lg'>SIGN UP</button>
                    <div className="divider py-3">OR</div>
                    <div className='flex items-center gap-4 justify-between'>
                        <button>
                            <div className='border flex hover:shadow-xl items-center gap-3 px-4 rounded-lg py-2'>
                                <img className='w-[26px]' src={googlee} alt="" />
                                <h1 className='font-poppins text-sm'>Login with Google</h1>
                            </div>
                        </button>
                        <button>
                            <div className='border flex hover:shadow-xl items-center gap-3 px-4 rounded-lg py-2'>
                                <img className='w-[26px]' src={facebook} alt="" />
                                <h1 className='font-poppins text-sm'>Login with Google</h1>
                            </div>
                        </button>
                    </div>
                    <p className='font-poppins font-medium pt-3 text-center '>have an account? <Link to="/signin"><span className='underline font-semibold text-[#FF6725]'>Sign In</span></Link> </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp