import React from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus'

const MyProperties = () => {
    const [menus] = UseMenus([]);

    return (
        <div>
            <section class="py-24 bg-gray-100 font-poppins dark:bg-gray-700">
                <div class="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                    <div>
                        <h2 class="mb-8 text-4xl font-bold dark:text-gray-400">Your Cart item<span className='text-orange-500'>{menus?.length}</span></h2>
                        <div class="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800">
                            <div class="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                                <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400">Product name and image</h2>
                                </div>
                                <div class="hidden px-4 lg:block lg:w-2/12">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400">Price</h2>
                                </div>
                                <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400">Status</h2>
                                </div>
                                <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400">Action</h2>
                                </div>
                            </div>
                            {
                                menus?.map(item =>
                                    <div key={item?.id} class="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                                        <div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                            <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                                <div class="flex flex-wrap items-center -mx-4">
                                                    <div class="px-4 mb-3 md:w-[200px]">
                                                        <div class="">
                                                            <img src={item?.image}
                                                                alt="" class="object-cover w-full h-full" />
                                                        </div>
                                                    </div>
                                                    <div class="w-2/3 px-4">
                                                        <h2 class="mb-2 text-xl font-bold dark:text-gray-400">{item?.name}</h2>
                                                        <p class="text-gray-500 dark:text-gray-400 ">{item?.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hidden px-4 lg:block lg:w-2/12">
                                                <p class="text-lg font-bold text-orange-500 dark:text-gray-400">${item?.price}</p>
                                            </div>
                                            <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                                                {item?.Status}
                                            </div>
                                            <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                                                <div className="dropdown dropdown-bottom dropdown-end">
                                                    <div tabIndex={0} role="button" className="m-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                                            <rect x="10.5" y="3" width="3" height="3" rx="1" stroke="#2f2f2f" stroke-width="1.5" />
                                                            <rect x="10.5" y="10.5" width="3" height="3" rx="1" stroke="#2f2f2f" stroke-width="1.5" />
                                                            <rect x="10.5" y="18" width="3" height="3" rx="1" stroke="#2f2f2f" stroke-width="1.5" />
                                                        </svg>
                                                    </div>
                                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-xl w-36">
                                                        <li>
                                                            <button className='flex items-center gap-2'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="#2f2f2f" stroke-width="1.5" />
                                                                    <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="#2f2f2f" stroke-width="1.5" />
                                                                </svg>
                                                                <h1 className='font-poppins text-base'>View</h1>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className='flex items-center gap-2'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M21 6.5C21 8.15685 19.6569 9.5 18 9.5C16.3431 9.5 15 8.15685 15 6.5C15 4.84315 16.3431 3.5 18 3.5C19.6569 3.5 21 4.84315 21 6.5Z" stroke="#2f2f2f" stroke-width="1.5" />
                                                                    <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke="#2f2f2f" stroke-width="1.5" />
                                                                    <path d="M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z" stroke="#2f2f2f" stroke-width="1.5" />
                                                                    <path d="M8.72852 10.7497L15.2285 7.75024M8.72852 13.2502L15.2285 16.2497" stroke="#2f2f2f" stroke-width="1.5" />
                                                                </svg>
                                                                <h1 className='font-poppins text-base'>Share</h1>
                                                            </button>
                                                        </li>
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
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyProperties