import React, { useEffect, useRef, useState } from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus'
import { Link, useParams } from 'react-router-dom';


const MenuSimilarSection = () => {
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


    return (
        <div>
            <h1 className='font-poppins pt-16 font-semibold text-2xl text-black'>Similar Homes You May Like</h1>
            <div className='pt-4 grid lg:grid-cols-2 gap-5'>
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
        </div>
    )
}

export default MenuSimilarSection