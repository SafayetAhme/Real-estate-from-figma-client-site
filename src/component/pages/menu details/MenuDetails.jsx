import React, { useEffect, useRef, useState } from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus'
import { useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineSave } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import MenuText from './MenuText';
import busness from '../../../../public/image/busness.png'



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

    const [activeimg, setActiveImg] = useState(menu?.image?.[0])

    // video section
    const [videoOpen, setvideoOpen] = useState(false);

    let domNode = useClickOutside(() => {
        setvideoOpen(false);
    });

    return (
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
            <div className='mt-8 bg-white shadow-lg rounded-xl p-6'>
                <h1 className='text-2xl font-poppins pb-6 font-semibold'>Property Overview</h1>
                <div className='flex items-center gap-[76px]'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.5766 13.8983L15.9282 11.7497C16.0058 11.2757 16.0446 11.0386 15.9175 11.0039C15.7905 10.9692 15.6021 11.1654 15.2254 11.5577L10 17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.42338 10.1017L8.07175 12.2503C7.99417 12.7243 7.95538 12.9614 8.08246 12.9961C8.20954 13.0308 8.39789 12.8346 8.77459 12.4423L14 7" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#777777" stroke-width="1.5" />
                        </svg>
                        <h1 className='font-poppins pt-1 text-lg'>Sqft. {menu?.sqft}</h1>
                    </div>
                    <h1 className='text-5xl pb-4 font-light font-sans text-gray-300'>/</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 17.5H2" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <h1 className='font-poppins pt-1 text-lg'>Bed. {menu?.bed}</h1>
                    </div>
                    <h1 className='text-5xl pb-4 font-light font-sans text-gray-300'>/</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 20L5 21M18 20L19 21" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 12H22" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M8 6L10.5 4" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <h1 className='font-poppins pt-1 text-lg'>Bath. {menu?.bath}</h1>
                    </div>
                    <h1 className='text-5xl pb-4 font-light font-sans text-gray-300'>/</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.9832 14V3M11.9832 14C10.3248 14 8.98047 15.4354 8.98047 16.625C8.98047 18.375 10.3248 21 11.9832 21C13.6414 21 14.9858 18.375 14.9858 16.625C14.9858 15.4354 13.6414 14 11.9832 14Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M4.9785 10.0282L4.9785 20.9998M3.68624 3.12927L2.90356 3.20735C2.33235 3.26433 1.92605 3.78866 2.01391 4.35545L2.68289 8.671C2.79621 9.40206 3.42609 10.0105 4.16653 10.0105H5.79049C6.53093 10.0105 7.1608 9.40206 7.27413 8.671L7.9431 4.35545C8.03096 3.78866 7.62467 3.26433 7.05345 3.20735L6.27346 3.12943C5.4132 3.0435 4.54651 3.04344 3.68624 3.12927Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M17.9961 13.8182L17.9961 3.02588C19.1546 3.34586 21.0816 4.55262 21.4007 7.52836L21.9738 12.0423C22.0744 12.835 21.8728 13.6261 21.0847 13.7615C20.4245 13.875 19.423 13.9121 17.9961 13.8182ZM17.9961 13.8182L17.9961 21" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h1 className='font-poppins pt-1 text-lg'>Kitchen. {menu?.kitchen}</h1>
                    </div>
                    <h1 className='text-5xl pb-4 font-light font-sans text-gray-300'>/</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13 2L2 7" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 3V22H7C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8856 3 18V7" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 7L22 12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 21.9997H17C18.8856 21.9997 19.8284 21.9997 20.4142 21.4139C21 20.8281 21 19.8853 21 17.9997V11.5" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 10L18 7" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 11H8M7 15H8" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 14H17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5 22V18" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h1 className='font-poppins pt-1 text-lg'>Type. {menu?.type}</h1>
                    </div>
                </div>
            </div>

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
                    <div className='bg-white shadow-lg mt-10 rounded-xl p-6'>
                        <h1 className='font-poppins pb-3 text-2xl font-semibold'>Amenities</h1>
                        <p className='font-poppins leading-[27px] text-gray-600'>{menu?.PropertyFeatures}</p>

                        <div className='grid lg:grid-cols-4 gap-2 pt-6 items-center'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.Heating}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.Garages}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.SwimmingPool}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.Parking}</h1>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-4 gap-2 pt-4 items-center'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.Garden}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.Wifi}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.PetFriendly}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.Refrigerator}</h1>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-4 gap-2 pt-4 items-center'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.Fireplace}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="font-poppins text-lg text-black">{menu?.DisabledAccess}</h1>
                            </div>
                        </div>
                    </div>

                    {/* video section */}
                    <div className='pt-10'>
                        <h1 className='font-poppins font-semibold text-2xl text-black'>Video Tour</h1>
                        <div className='pt-6 w-full'>
                            <section className="bg-white pb-20 dark:bg-dark lg:pb-[24px]">
                                <div ref={domNode} className="">
                                    <div className="-mx-4 flex flex-wrap justify-center">
                                        <div className="w-full px-4">
                                            <div className="relative z-20 h-[390px] overflow-hidden rounded-lg md:h-[480px]">
                                                <div className="absolute left-0 top-0 h-full w-full">
                                                    <img
                                                        src={menu?.imgforvideo}
                                                        alt="bg"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div
                                                    className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center`}
                                                >
                                                    <a
                                                        href="#"
                                                        onClick={() => setvideoOpen(true)}
                                                        className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF6625] text-primary dark:bg-dark-2 dark:text-white md:h-[100px] md:w-[100px]"
                                                    >
                                                        <span className="absolute right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"></span>
                                                        <svg
                                                            width="23"
                                                            height="27"
                                                            viewBox="0 0 23 27"
                                                            className="fill-[#fff]"
                                                        >
                                                            <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {videoOpen && (
                                    <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
                                        <div className="mx-auto w-full max-w-[550px] bg-white">
                                            <>
                                                <iframe
                                                    className="h-[320px] w-full"
                                                    src={menu?.VideoTour}
                                                />
                                            </>
                                        </div>

                                        <button
                                            onClick={() => setvideoOpen(false)}
                                            className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color hover:bg-black"
                                        >
                                            <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
                                                <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>

                    {/* Floor Plans section */}
                    <div className='pt-4'>
                        <h1 className='font-poppins font-semibold text-2xl text-black'>Video Tour</h1>
                        <div className='bg-white shadow-lg mt-2 rounded-xl p-2'>
                            <img className='w-full h-[520px]' src={menu?.FloorPlans} alt="" />
                        </div>
                    </div>

                    {/* What’s Nearby */}
                    <div className='pt-10'>
                        <div className='bg-white shadow-lg rounded-xl p-6'>
                            <h1 className='font-poppins pb-2 text-2xl font-semibold'>What’s Nearby</h1>
                            <p className='font-poppins leading-[27px] text-gray-600'>{menu?.WhatNearbylorem}</p>
                        </div>
                    </div>
                </div>

                {/* col-span-1 agent profile section */}
                <div className='col-span-1'>

                </div>
            </div>

        </div>
    )
}

export default MenuDetails