import React, { useState } from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus';
import { useParams } from 'react-router-dom';

const MenuText = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    const [menus] = UseMenus();
    const { id } = useParams();
    const menu = menus.find(menu => menu._id === id);
    console.log(menu)


    return (
        <div className="py-2">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full"
            >
                <h1 className='text-2xl font-semibold  font-poppins'>{title}</h1>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                    className="fill-black shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className='grid pt-3 gap-24 lg:grid-cols-2 items-center justify-between'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Bedrooms:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.bed}</h1>
                            </div>
                            <div className='flex items-center pt-3 justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Bathrooms:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.bath}</h1>
                            </div>
                            <div className='flex items-center pt-3 justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Foor:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.foor}</h1>
                            </div>
                            <div className='flex items-center pt-3 justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Ceiling Height:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.CeilingHeight}</h1>
                            </div>
                            <div className='flex items-center pt-3 justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Renovation:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.Renovation}</h1>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Furnishing:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.Furnishing}</h1>
                            </div>
                            <div className='flex items-center pt-3 justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Year Built:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.YearBuilt}</h1>
                            </div>
                            <div className='flex items-center pt-3 justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Garage:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.Garage}</h1>
                            </div>
                            <div className='flex items-center pt-3 justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Property Type:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.SwimmingPool}</h1>
                            </div>
                            <div className='flex items-center pt-3 justify-between'>
                                <h1 className='text-gray-500 font-sans text-lg'>Status:  </h1>
                                <h1 className='font-poppins text-black text-lg'>{menu?.Status}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuText