import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import UseAgents from '../../hooks/use agents/UseAgents'
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';


const AgentReviewSection = () => {
    const [agents, refetch] = UseAgents([]);
    const { id } = useParams();
    const agent = agents?.find(agent => agent?._id === id);
    console.log(agent)

    return (
        <div className='bg-white shadow-lg rounded-xl mt-10 p-6'>
            <h1 className='font-poppins pb-4 text-2xl font-semibold'>Reviews</h1>
            {
                agent?.customerReview?.map(item =>
                    <div key={item.id} className=' items-start pt-4 gap-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[46px] h-[46px] border rounded-full' src={item?.profileimg} alt="" />
                                <div>
                                    <h1 className='font-poppins text-base pb-1'>{item?.name}</h1>
                                    <h1 className='font-poppins text-xs text-gray-500'>{item?.moment}</h1>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className="">
                                    <StarRatings
                                        rating={parseFloat(item?.ratings) || 0} // Set a default value of 0 if item?.ratings is not a valid number
                                        className="text-red-600"
                                        starDimension="22px"
                                        starSpacing="1px"
                                    />
                                </h2>
                            </div>
                        </div>
                        <div>
                            <p className='font-poppins leading-[22px] text-sm pt-4'>{item?.review}</p>
                            <div className='flex items-center justify-between'>
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
                                <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                                    <div className="dropdown dropdown-bottom dropdown-end -mr-6">
                                        <div tabIndex={0} role="button" className="m-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M11.992 12H12.001" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.9842 16H11.9932" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.9998 8H12.0088" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.48438 12C2.48438 7.52166 2.48438 5.28249 3.87562 3.89124C5.26686 2.5 7.50603 2.5 11.9844 2.5C16.4627 2.5 18.7019 2.5 20.0931 3.89124C21.4844 5.28249 21.4844 7.52166 21.4844 12C21.4844 16.4783 21.4844 18.7175 20.0931 20.1088C18.7019 21.5 16.4627 21.5 11.9844 21.5C7.50603 21.5 5.26686 21.5 3.87562 20.1088C2.48438 18.7175 2.48438 16.4783 2.48438 12Z" stroke="#2f2f2f" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-xl w-36">
                                            <li>
                                                <button className='flex items-center gap-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                                                        <path d="M13 4L20 11" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                                                        <path d="M14 22L22 22" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <h1 className='font-poppins text-base'>Edit</h1>
                                                </button>
                                            </li>
                                            <li>
                                                <button className='flex items-center gap-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" />
                                                        <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" />
                                                        <path d="M9.5 16.5L9.5 10.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" />
                                                        <path d="M14.5 16.5L14.5 10.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                    <h1 className='font-poppins text-base'>Delete</h1>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AgentReviewSection