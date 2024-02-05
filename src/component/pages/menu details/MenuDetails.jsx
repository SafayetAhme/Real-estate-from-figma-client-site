import React, { useEffect, useRef, useState } from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus'
import { Link, useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineSave } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import MenuText from './MenuText';
import MenuVideoSection from './MenuVideoSection';
import MenuWhatNearbySection from './MenuWhatNearbySection';
import MenuAmentiesSection from './MenuAmentiesSection';
import PropertyOverViewSection from './PropertyOverViewSection';
import MenuWalkSection from './MenuWalkSection';
import MenuLocationSection from './MenuLocationSection';
import LeaveAReplySection from './LeaveAReplySection';
import StyJurny from '../../shared/start your jurny/StyJurny';
import MenuReviewSection from './MenuReviewSection';
import MenuAgentSection from './MenuAgentSection';


// videl section
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

const MenuDetails = () => {
    const [menus] = UseMenus();
    const { id } = useParams();
    const menu = menus.find(menu => menu._id === id);
    console.log(menu)
    const [filteredMenus, setFilteredMenus] = useState([]);
    useEffect(() => {
        // Filter menus by category
        const singlecategory = menu?.category
        const filtered = menus?.filter(menu => menu?.category === singlecategory);
        setFilteredMenus(filtered);
        console.log(filtered)
    }, [menu]);

    const [activeimg, setActiveImg] = useState(menu?.image?.[0])

    return (
        <div>
            <div className='container p-12 mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-poppins text-5xl  font-semibold w-[560px] leading-[63px]'>{menu?.name}</h1>
                    <div className=''>
                        <h1 className='font-poppins text-4xl font-semibold pb-4'>Price: ${menu?.price}</h1>
                        <h1 className='font-poppins text-xl text-gray-500'>Est. Payment<span className='text-black font-semibold'>${menu?.price}/mo*</span> </h1>
                    </div>
                </div>

                {/* location and share section */}
                <div className='flex items-center pt-1 justify-between'>
                    <div className='flex items-center gap-4'>
                        <span className="bg-[#000] text-white mx-0 px-3 py-[6px] text-xs font-medium rounded-full pb-1">{menu?.Status}</span>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="#939393" stroke-width="1.5" />
                                <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="#939393" stroke-width="1.5" />
                            </svg>
                            <h1 className='font-poppins'>{menu?.location}</h1>
                        </div>
                    </div>
                    <div className='flex gap-24 items-center'>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 6.5C21 8.15685 19.6569 9.5 18 9.5C16.3431 9.5 15 8.15685 15 6.5C15 4.84315 16.3431 3.5 18 3.5C19.6569 3.5 21 4.84315 21 6.5Z" stroke="#000000" stroke-width="1.5" />
                                <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke="#000000" stroke-width="1.5" />
                                <path d="M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z" stroke="#000000" stroke-width="1.5" />
                                <path d="M8.72852 10.7497L15.2285 7.75024M8.72852 13.2502L15.2285 16.2497" stroke="#000000" stroke-width="1.5" />
                            </svg>
                            <h1 className='font-poppins text-lg text-black'>Share</h1>
                        </div>

                        {/* share icons */}
                        <div className='flex items-center gap-3'>
                            <div className='hover:text-white border-2 hover:bg-[#FF6725] hover:border-[#FF6725]  rounded-full p-2'>
                                <FaRegHeart className='w-5 h-5' />
                            </div>
                            <div className='hover:text-white hover:bg-[#FF6725] border-2 hover:border-[#FF6725]  rounded-full p-2'>
                                <HiOutlineSave className='w-5 h-5' />
                            </div>
                            <div className='hover:text-white hover:bg-[#FF6725] border-2 hover:border-[#FF6725] rounded-full p-1'>
                                <IoIosAddCircleOutline className='w-7 h-7' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* image section */}
                <div className='flex items-center pt-8 gap-4'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img className='w-full h-full rounded-xl' src={activeimg} alt="" />
                            <div className="absolute flex gap-3 transform  left-8 pt-8 ">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                            <p className='bg-white absolute right-0 m-5 text-black font-poppins px-6 py-2 rounded-lg'>Sell all 0{menu?.image?.length} Photos</p>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img className='w-full h-full rounded-xl' src={menu?.image?.[1]} alt="" />
                            <div className="absolute flex gap-3 transform  left-8 pt-8 ">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                            <p className='bg-white absolute right-0 m-5 text-black font-poppins px-6 py-2 rounded-lg'>Sell all 0{menu?.image?.length} Photos</p>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img className='w-full h-full rounded-xl' src={menu?.image?.[2]} alt="" />
                            <div className="absolute flex gap-3 transform  left-8 pt-8 ">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                            <p className='bg-white absolute right-0 m-5 text-black font-poppins px-6 py-2 rounded-lg'>Sell all 0{menu?.image?.length} Photos</p>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img className='w-full h-full rounded-xl' src={menu?.image?.[3]} alt="" />
                            <div className="absolute flex gap-3 transform  left-8 pt-8 ">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                            <p className='bg-white absolute right-0 m-5 text-black font-poppins px-6 py-2 rounded-lg'>Sell all 0{menu?.image?.length} Photos</p>
                        </div>
                    </div>
                    <div className='w-[282px] pt-3'>
                        <img className='mb-3 rounded-xl w-full h-full' src={menu?.image?.[1]} alt="" onClick={() => setActiveImg(menu?.image?.[1])} />
                        <img className='mb-3 rounded-xl w-full h-full' src={menu?.image?.[2]} alt="" onClick={() => setActiveImg(menu?.image?.[2])} />
                        <img className='mb-3 rounded-xl w-full h-full' src={menu?.image?.[3]} alt="" onClick={() => setActiveImg(menu?.image?.[3])} />
                        <img className='mb-3 rounded-xl w-full h-full' src={menu?.image?.[4]} alt="" onClick={() => setActiveImg(menu?.image?.[4])} />
                    </div>
                </div>

                {/* Property Overview */}
                <PropertyOverViewSection></PropertyOverViewSection>

                {/* overview section */}
                <div className='grid mt-8 lg:grid-cols-3'>
                    <div className='col-span-2'>
                        <div className='bg-white shadow-lg rounded-xl p-6'>
                            <h1 className='font-poppins pb-3 text-2xl font-semibold'>Overview</h1>
                            <p className='font-poppins leading-[27px] text-gray-600'>{menu?.Overview}</p>
                        </div>

                        {/* Property Features */}
                        <div className='bg-white shadow-lg rounded-xl mt-10 p-6'>
                            <h1 className='font-poppins pb-3 text-2xl font-semibold'>Property Features</h1>
                            <p className='font-poppins leading-[27px] text-gray-600'>{menu?.PropertyFeatures}</p>
                            <hr className='my-6' />
                            <MenuText
                                title="Property Details"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            ></MenuText>
                        </div>

                        {/* Amenities section */}
                        <MenuAmentiesSection></MenuAmentiesSection>

                        {/* video section */}
                        <MenuVideoSection></MenuVideoSection>

                        {/* Floor Plans section */}
                        <div className='pt-4'>
                            <h1 className='font-poppins font-semibold text-2xl text-black'>Video Tour</h1>
                            <div className='bg-white shadow-lg mt-2 rounded-xl p-2'>
                                <img className='w-full h-[520px]' src={menu?.FloorPlans} alt="" />
                            </div>
                        </div>

                        {/* What’s Nearby */}
                        <MenuWhatNearbySection></MenuWhatNearbySection>

                        {/* Similar Homes You May Like */}
                        <div className='pt-12 grid lg:grid-cols-2 gap-5'>
                            {
                                filteredMenus?.map(item =>
                                    <div key={item?.id} className="relative flex w-full max-w-[23rem] flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
                                        <div
                                            className="relative mx-3 mt-3 overflow-hidden text-white shadow-xl rounded-lg bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                            <img
                                                src={item?.image}
                                                alt="ui/ux review check" />
                                            <div
                                                className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                                            </div>
                                            <button className="!absolute  top-3 left-3">
                                                <span className="bg-[#FF6B2C] px-2 py-[4px] text-xs font-medium rounded-full pb-1">{item?.Status}</span>
                                            </button>
                                        </div>
                                        <div className="p-5">
                                            <h5 className="block font-sans text-xl text-[#FF6B2C] font-medium tracking-normal w-60 text-blue-gray-900">{item?.name}</h5>
                                            <p className='text-gray-500 word-index-4'>{item?.title}</p>
                                            <div className="items-center pt-3 flex justify-between mb-3">
                                                <div className='flex gap-1 items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M15.5766 13.8983L15.9282 11.7497C16.0058 11.2757 16.0446 11.0386 15.9175 11.0039C15.7905 10.9692 15.6021 11.1654 15.2254 11.5577L10 17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.42338 10.1017L8.07175 12.2503C7.99417 12.7243 7.95538 12.9614 8.08246 12.9961C8.20954 13.0308 8.39789 12.8346 8.77459 12.4423L14 7" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#777777" stroke-width="1.5" />
                                                    </svg>
                                                    <p>{item?.sqft} sqft</p>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M22 17.5H2" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                        <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                        <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                    <p>{item?.bed} bed</p>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 20L5 21M18 20L19 21" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                        <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M2 12H22" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                        <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                        <path d="M8 6L10.5 4" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                    <p>{item?.bath} bath</p>
                                                </div>
                                            </div>
                                            <div class="divide-y-2  py-2 divide-dashed">
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className='flex pt-2 justify-between items-center'>
                                                <h1 className='text-[28px] font-bold font-poppins'>${item?.price}</h1>
                                                <Link to={`/menudetails/${item?._id}`}>
                                                    <div className='hover:bg-[#FF6B2C] bg-black p-2 rounded-full'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M17 7L6 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* Walk Score */}
                        <MenuWalkSection></MenuWalkSection>

                        {/* Location map section */}
                        <MenuLocationSection></MenuLocationSection>

                        {/* Review Section */}
                        <MenuReviewSection></MenuReviewSection>

                        {/* Leave A Reply section */}
                        <LeaveAReplySection></LeaveAReplySection>

                    </div>

                    {/* col-span-1 agent profile section */}
                    <div className='col-span-1'>
                        <MenuAgentSection></MenuAgentSection>
                    </div>
                </div>
            </div>
            {/* start your journey section */}
            <StyJurny></StyJurny>
        </div>
    )
}

export default MenuDetails