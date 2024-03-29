import React, { useEffect, useRef, useState } from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus'
import { useParams } from 'react-router-dom';
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
import MenuSimilarSection from './MenuSimilarSection';
import UseAuth from '../../hooks/useauth/UseAuth';
import UseAxiosPublic from '../../hooks/useAxiospublic/UseAxiosPublic';
import UseAddtolove from '../../hooks/use add to love/UseAddtolove';
import { FaHeart, FaRegHeart } from "react-icons/fa";


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
    const [, refetch] = UseAddtolove();
    const { id } = useParams();
    const menu = menus.find(menu => menu._id === id);
    console.log(menu)
    const { user } = UseAuth();
    const axiosSecure = UseAxiosPublic();

    const [activeimg, setActiveImg] = useState(menu?.image?.[0])

    // for add love
    const [isLoved, setIsLoved] = useState(false);


    // handle add to loce
    const handleaddtolove = (menus) => {
        if (user && user.email) {

            const addtocartitem = {
                menuId: menus?._id,
                email: user?.email,
                image: menus?.image,
                price: menus?.price,
                name: menus?.name,
                title: menus?.title,
            }

            axiosSecure.post('/addLove', addtocartitem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        alert("nice")
                        refetch();
                        setIsLoved(true);
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            Swal.fire({
                title: "if you want to add item please login",
                text: "please",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sign In"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   toto
                    nagigate("/signin", { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className='container p-12 mx-auto'>
                <div className='lg:flex justify-between items-center'>
                    <h1 className='font-poppins lg:text-5xl md:text-5xl sm:text-5xl text-4xl font-semibold lg:w-[560px] lg:leading-[63px]'>{menu?.name}</h1>
                    <div className='lg:pt-0 md:pt-0 sm:pt-0 mt-6'>
                        <h1 className='font-poppins text-4xl font-semibold pb-4'>Price: ${menu?.price}</h1>
                        <h1 className='font-poppins text-xl text-gray-500'>Est. Payment<span className='text-black font-semibold'>${menu?.price}/mo*</span> </h1>
                    </div>
                </div>

                {/* location and share section */}
                <div className='lg:flex items-center pt-1 justify-between'>
                    <div className='lg:flex items-center gap-4'>
                        <span className="bg-[#000] text-white mx-0 px-3 py-[6px] text-xs font-medium rounded-full pb-1">{menu?.Status}</span>
                        <div className='flex lg:mt-0 md:mt-0 sm:mt-0 mt-4 items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="#939393" strokeWidth="1.5" />
                                <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="#939393" strokeWidth="1.5" />
                            </svg>
                            <h1 className='font-poppins'>{menu?.location}</h1>
                        </div>
                    </div>
                    <div className='flex lg:pt-0 md:pt-0 sm:pt-0 mt-4 gap-24 items-center'>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 6.5C21 8.15685 19.6569 9.5 18 9.5C16.3431 9.5 15 8.15685 15 6.5C15 4.84315 16.3431 3.5 18 3.5C19.6569 3.5 21 4.84315 21 6.5Z" stroke="#000000" strokeWidth="1.5" />
                                <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke="#000000" strokeWidth="1.5" />
                                <path d="M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z" stroke="#000000" strokeWidth="1.5" />
                                <path d="M8.72852 10.7497L15.2285 7.75024M8.72852 13.2502L15.2285 16.2497" stroke="#000000" strokeWidth="1.5" />
                            </svg>
                            <h1 className='font-poppins text-lg text-black'>Share</h1>
                        </div>

                        {/* share icons */}
                        <div className='flex items-center gap-3'>
                            <button onClick={() => handleaddtolove(menus)} className='hover:text-white border-2 hover:bg-[#FF6725] hover:border-[#FF6725]  rounded-full p-2'>
                                {isLoved ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* image section */}
                <div className='lg:flex items-center pt-8 gap-4'>
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
                    <div className='lg:w-[222px] lg:pt-0 md:pt-3 sm:pt-3 pt-3 grid lg:grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2'>
                        <img className=' rounded-xl w-full h-full' src={menu?.image?.[0]} alt="" onClick={() => setActiveImg(menu?.image?.[0])} />
                        <img className=' rounded-xl w-full h-full' src={menu?.image?.[1]} alt="" onClick={() => setActiveImg(menu?.image?.[1])} />
                        <img className=' rounded-xl w-full h-full' src={menu?.image?.[2]} alt="" onClick={() => setActiveImg(menu?.image?.[2])} />
                        <img className=' rounded-xl w-full h-full' src={menu?.image?.[3]} alt="" onClick={() => setActiveImg(menu?.image?.[3])} />
                        <img className=' rounded-xl w-full h-full' src={menu?.image?.[4]} alt="" onClick={() => setActiveImg(menu?.image?.[4])} />
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
                        <MenuSimilarSection></MenuSimilarSection>

                        {/* Walk Score */}
                        <MenuWalkSection></MenuWalkSection>

                        {/* Location map section */}
                        <MenuLocationSection></MenuLocationSection>

                        {/* Review Section */}
                        <MenuReviewSection></MenuReviewSection>

                        {/* Leave A Reply section */}
                        <LeaveAReplySection id={id}></LeaveAReplySection>

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