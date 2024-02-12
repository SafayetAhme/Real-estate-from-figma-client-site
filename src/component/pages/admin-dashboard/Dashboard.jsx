import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { IoMdMenu } from "react-icons/io";
import '../../../component/shared/navbar/Navbar.css'
import { Link, NavLink, Outlet } from "react-router-dom";
import '../../pages/admin-dashboard/Dashboard.css'
import logo from '../../../../public/image/logo.png'
import { AiOutlineMessage } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCardMembership } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscSaveAs } from "react-icons/vsc";
import { MdOutlineRateReview } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoArrowUpRight } from 'react-icons/go';



const Dashboard = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <div className='mx-auto bg-[#F9F3EF] h-screen'>
            <div className='flex'>
                <IconContext.Provider value={{ color: "undefined" }}>
                    <div className="navbarr  ml-4">
                        <Link to="#" className="menu-barss rounded-lg shadow-[#00000054] shadow-xl border p-2">
                            <RiMenu4Line className='' onClick={showSidebar} />
                        </Link>
                    </div>
                    <nav className={sidebar ? "nav-menuu active" : "nav-menuu"}>
                        <ul className="nav-menu-itemss pl-6 shadow-xl" onClick={showSidebar}>
                            <li className="navbar-togglee">
                                <Link to="#" className="menu-barss">
                                    <GrClose className='text-2xl' />
                                </Link>
                            </li>
                            <div className='w-[240px] '>
                                <Link to="/" className="">
                                    <div className='flex items-center gap-2'>
                                        <img className='w-[48px]' src={logo} alt="" />
                                        <h1 className='font-semibold text-2xl font-poppins'>homy</h1>
                                    </div>
                                </Link>
                                <hr className='mt-5' />
                                <ul>
                                    <li className="border rounded-md p-2 mt-5">
                                        <NavLink to="/adminDashboard/dahsboardhome" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <IoMdMenu className='text-2xl' />
                                                <p className='font-medium text-lg'>Dashboard</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="border rounded-md p-2 mt-3">
                                        <NavLink to="/adminDashboard/Message" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <AiOutlineMessage className='text-2xl' />
                                                <p className='font-medium text-lg'>Message</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>

                                {/* profile */}
                                <hr className='my-8' />
                                <ul>
                                    <h1 className='font-poppins text-gray-500'>PROFILE</h1>
                                    <li className="border rounded-md p-2 mt-2">
                                        <NavLink to="/adminDashboard/profile" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <FaRegUser className='text-2xl' />
                                                <p className='font-medium text-lg'>Profile</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="border rounded-md p-2 mt-3">
                                        <NavLink to="/adminDashboard/AccountSetting" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <IoSettingsOutline className='text-2xl' />
                                                <p className='font-medium text-lg'>Account Settings</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="border rounded-md p-2 mt-3">
                                        <NavLink to="/adminDashboard/membership" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <MdOutlineCardMembership className='text-2xl' />
                                                <p className='font-medium text-lg'>Membership</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>

                                {/* Listing */}
                                <hr className='my-8' />
                                <ul>
                                    <h1 className='font-poppins text-gray-500'>LISTING</h1>
                                    <li className="border rounded-md p-2 mt-2">
                                        <NavLink to="/adminDashboard/myproperties" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <RiFileList2Line className='text-2xl' />
                                                <p className='font-medium text-lg'>My Properties</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="border rounded-md p-2 mt-3">
                                        <NavLink to="/adminDashboard/addnewProperty" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <IoAddSharp className='text-2xl' />
                                                <p className='font-medium text-lg'>Add New Property</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="border rounded-md p-2 mt-3">
                                        <NavLink to="/adminDashboard/favourites" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <MdOutlineFavoriteBorder className='text-2xl' />
                                                <p className='font-medium text-lg'>Favourites</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="border rounded-md p-2 mt-3">
                                        <NavLink to="/adminDashboard/savedSearch" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <VscSaveAs className='text-2xl' />
                                                <p className='font-medium text-lg'>Saved Search</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="border rounded-md p-2 mt-3">
                                        <NavLink to="/adminDashboard/reviews" className={({ isActive }) => "" + (isActive ? "underline text-orange-600" : "")}>
                                            <div className='flex items-center gap-2'>
                                                <MdOutlineRateReview className='text-2xl' />
                                                <p className='font-medium text-lg'>Reviews</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </nav>
                </IconContext.Provider>
                <div className='flex justify-between px-10 w-full items-center'>
                    <div>
                        <h1 className='font-poppins text-2xl font-semibold '>Dashboard</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <form class="flex items-center">
                            <div class="relative w-full">
                                <input type="text" id="search" class=" border-[1px] border-black rounded-full  block w-[300px] ps-3 p-2.5" placeholder="Search" required />
                                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                                    <CiSearch className='text-2xl' />
                                </button>
                            </div>
                        </form>
                        <div className='border p-3 w-fit rounded-full'>
                            <IoMdNotificationsOutline className='text-2xl' />
                        </div>
                        <div className="">
                            <button className="flex rounded-[10px] border-2 border-dashed border-black bg-[#FF6725] lg:px-4 md:px-4 sm:px-4 px-2 py-[9px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                <p className="font-medium text-base">Add Listing</p>
                                <GoArrowUpRight className="text-2xl " />
                            </button>
                        </div>
                        <div className='rounded-full'>
                            <img className='w-[46px] h-[46px] rounded-full' src="https://media.istockphoto.com/id/1373240842/photo/smiling-mid-adult-man-in-polo-shirt.jpg?s=612x612&w=0&k=20&c=loXTzsejma2wpvYqRQnGABUStfMI241vbhVO-4eJKO0=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard