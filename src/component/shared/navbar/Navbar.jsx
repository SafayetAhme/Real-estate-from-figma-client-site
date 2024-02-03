import '../navbar/Navbar.css'
import { useState } from "react"
import { IconContext } from 'react-icons';
import { CiLock } from 'react-icons/ci';
import { FaBars, FaRegHeart, FaTimes } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { Link, NavLink } from "react-router-dom"
import logo from '../../../../public/image/logo.png'

const Navbar = () => {

    const user = false
    const isadmin = true

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => useState(false);


    return (
        <div>
            <IconContext.Provider value={{ color: "#000" }}>
                <nav className="navbar">
                    <div className="navbar-container container mx-auto">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <div className='flex items-center gap-2'>
                                <img className='w-[48px]' src={logo} alt="" />
                                <h1 className='font-semibold text-2xl font-poppins'>homy</h1>
                            </div>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {
                                isadmin ? <>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/adminDashboard"
                                            className={({ isActive }) =>
                                                "nav-links" + (isActive ? " activated" : "")
                                            }
                                            onClick={closeMobileMenu}
                                        >
                                            <p className='font-medium text-lg'>Dashboard</p>
                                        </NavLink>
                                    </li>
                                </> :
                                    <>
                                        {/*  */}
                                    </>
                            }
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    <p className='font-medium text-lg'>Home</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/Property"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    <p className='font-medium text-lg'>Property</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/Services"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    <p className='font-medium text-lg'>Services</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/Agency"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    <p className='font-medium text-lg'>Agency</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    <div className="navbar">
                                        <div className="flex-none">
                                            <ul className="menu menu-horizontal -mx-6">
                                                <li>
                                                    <details>
                                                        <summary>
                                                            <p className='font-medium text-lg'>Pages</p>
                                                        </summary>
                                                        <ul className=" rounded-t-none">
                                                            <li><NavLink to="/Agent">Agent</NavLink></li>
                                                            <li><NavLink to="/Blog">Blog</NavLink></li>
                                                            <li><NavLink to="/Pricing">Pricing</NavLink></li>
                                                            <li><NavLink to="/Contact">Contact</NavLink></li>
                                                            <li><NavLink to="/FAQ">FAQ</NavLink></li>
                                                            <li><NavLink to="/Projects">Projects</NavLink></li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            {
                                user ? <section className="flex items-center gap-4">
                                    {/* add listing */}
                                    <div className="">
                                        <button className="flex rounded-[10px] border-2 border-dashed border-black bg-[#FF6725] lg:px-4 md:px-4 sm:px-4 px-2 py-[9px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                            <p className="font-medium text-base">Add Listing</p>
                                            <GoArrowUpRight className="text-2xl " />
                                        </button>
                                    </div>
                                    {/* cart icon */}
                                    <div className="bg-[#FF6725] rounded-[10px] text-white p-[12px] ">
                                        <FaRegHeart className="text-2xl" />
                                    </div>
                                </section> :
                                    <section className="flex items-center gap-4">
                                        {/* cart icon */}
                                        <div className="">
                                            <NavLink to="/signin">
                                                <button className="flex border-[1px] py-[9px] px-3 rounded-md text-[#FF6725] border-[#FF6725] items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 16V14" stroke="#ff6725" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z" stroke="#ff6725" stroke-width="1.5" />
                                                        <path d="M16.5 9.5V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9.5" stroke="#ff6725" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                    <p className="font-normal text-base">Login</p>
                                                </button>
                                            </NavLink>
                                        </div>
                                        {/* avtar img */}
                                        <div className="">
                                            <button className="flex rounded-[10px] border-2 border-dashed border-black bg-[#FF6725] lg:px-4 md:px-4 sm:px-4 px-2 py-[9px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                                <p className="font-medium text-base">Add Listing</p>
                                                <GoArrowUpRight className="text-2xl " />
                                            </button>
                                        </div>
                                    </section>
                            }
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;