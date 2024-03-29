import '../navbar/Navbar.css'
import { useContext, useState } from "react"
import { IconContext } from 'react-icons';
import { CiLock } from 'react-icons/ci';
import { FaBars, FaRegHeart, FaTimes } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { Link, NavLink } from "react-router-dom"
import logo from '../../../../public/image/logo.png'
import { AuthContext } from '../../auth/AuthProvider';
import UseAddtolove from '../../hooks/use add to love/UseAddtolove';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [addLove, refetch] = UseAddtolove();
    refetch()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const isadmin = true

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => useState(false);


    return (
        <div className=''>
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
                                    <Link to="/addlove">
                                        <div className="bg-[#FF6725] relative rounded-[10px] text-white p-[12px] ">
                                            <FaRegHeart className="text-2xl" />
                                            <h1 className='absolute text-sm font-semibold -mt-8 ml-3 w-5 bg-white rounded-full text-black'>{addLove?.length}</h1>
                                        </div>
                                    </Link>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn mt-2 btn-ghost btn-circle avatar">
                                            <div className="w-full rounded-lg">
                                                <img alt="" src="https://as1.ftcdn.net/v2/jpg/03/34/30/82/1000_F_334308248_Wjo54yYt4ucwkvNtcyCMZI2DGvzhk0G6.jpg" />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><button>Profile</button></li>
                                            <li onClick={handleLogOut}><button>Logout</button></li>
                                        </ul>
                                    </div>
                                </section> :
                                    <section className="flex items-center gap-4">
                                        {/* cart icon */}
                                        <div className="">
                                            <NavLink to="/signin">
                                                <button className="flex border-[1px] py-[9px] px-3 rounded-md text-[#FF6725] border-[#FF6725] items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 16V14" stroke="#ff6725" strokeWidth="1.5" strokeLinejoin="round" />
                                                        <path d="M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z" stroke="#ff6725" strokeWidth="1.5" />
                                                        <path d="M16.5 9.5V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9.5" stroke="#ff6725" strokeWidth="1.5" strokeLinejoin="round" />
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