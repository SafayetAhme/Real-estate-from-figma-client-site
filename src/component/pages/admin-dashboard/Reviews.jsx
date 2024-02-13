import React, { useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import UseMenus from '../../hooks/usemenus/UseMenus';
import { useParams } from 'react-router-dom';
// import StarRatings from "react-star-ratings";
import StarRatings from 'react-star-ratings';


const Reviews = () => {
    const [menus] = UseMenus([]);


    return (
        <div>
            {/* <h1 className='font-poppins pb-2 text-2xl font-semibold'>Reviews</h1>
            {
                menus?.map((item) => (
                    <div key={item?.id}>
                        {
                            item?.customerReview?.map((review) => (
                                <div key={review.id} className='flex items-start pt-4 gap-3'>
                                    <div className=''>
                                        <img className='w-[46px] h-[46px] border rounded-full' src={item?.profileimg} alt="" />
                                    </div>
                                    <div>
                                        <div className='flex items-center w-full justify-between'>
                                            <div>
                                                <h1 className='font-poppins text-base pb-1'>{item?.date}</h1>
                                                <h1 className='font-poppins text-xs text-gray-500'>{item?.date}</h1>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <h2 className="">
                                                    <StarRatings
                                                        rating={item?.rating}
                                                        className="text-red-600"
                                                        starDimension="22px"
                                                        starSpacing="1px"
                                                    />
                                                </h2>
                                            </div>
                                        </div>
                                        <p className='font-poppins leading-[22px] text-sm pt-4'>{item?.date}</p>
                                        <div className='flex items-center pt-6 gap-10'>
                                            <div className='flex items-center gap-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                                    <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                    <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <h1 className='font-poppins text-base text-gray-500'>Helpful</h1>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                                    <path d="M4 7L4 21" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                    <path d="M11.7576 3.90865C8.45236 2.22497 5.85125 3.21144 4.55426 4.2192C4.32048 4.40085 4.20358 4.49167 4.10179 4.69967C4 4.90767 4 5.10138 4 5.4888V14.7319C4.9697 13.6342 7.87879 11.9328 11.7576 13.9086C15.224 15.6744 18.1741 14.9424 19.5697 14.1795C19.7633 14.0737 19.8601 14.0207 19.9301 13.9028C20 13.7849 20 13.6569 20 13.4009V5.87389C20 5.04538 20 4.63113 19.8027 4.48106C19.6053 4.33099 19.1436 4.459 18.2202 4.71504C16.64 5.15319 14.3423 5.22532 11.7576 3.90865Z" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <h1 className='font-poppins text-base text-gray-500'>Flag</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )

                )
            } */}
        </div>
    )
}

export default Reviews