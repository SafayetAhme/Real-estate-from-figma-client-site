import React from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus';
import { useParams } from 'react-router-dom';

const PropertyOverViewSection = () => {
    const [menus] = UseMenus();
    const { id } = useParams();
    const menu = menus.find(menu => menu._id === id);
    console.log(menu)

    return (
        <div className='mt-8 bg-white shadow-lg rounded-xl p-6'>
            <h1 className='text-2xl font-poppins pb-6 font-semibold'>Property Overview</h1>
            <div className='grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-4 items-center '>
                <div className='md:pb-4 sm:pb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.5766 13.8983L15.9282 11.7497C16.0058 11.2757 16.0446 11.0386 15.9175 11.0039C15.7905 10.9692 15.6021 11.1654 15.2254 11.5577L10 17" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M8.42338 10.1017L8.07175 12.2503C7.99417 12.7243 7.95538 12.9614 8.08246 12.9961C8.20954 13.0308 8.39789 12.8346 8.77459 12.4423L14 7" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#777777" strokeWidth="1.5" />
                    </svg>
                    <h1 className='font-poppins pt-1 text-lg'>Sqft. {menu?.sqft}</h1>
                </div>
                <h1 className='text-5xl pb-4 font-light font-sans text-gray-300'>/</h1>
                <div className='md:pb-4 sm:pb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 17.5H2" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                        <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                        <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                    </svg>
                    <h1 className='font-poppins pt-1 text-lg'>Bed. {menu?.bed}</h1>
                </div>
                <h1 className='text-5xl pb-4 font-light font-sans text-gray-300'>/</h1>
                <div className='sm:pb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 20L5 21M18 20L19 21" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                        <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M2 12H22" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                        <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                        <path d="M8 6L10.5 4" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                    </svg>
                    <h1 className='font-poppins pt-1 text-lg'>Bath. {menu?.bath}</h1>
                </div>
                <h1 className='text-5xl pb-4 font-light font-sans text-gray-300'>/</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.9832 14V3M11.9832 14C10.3248 14 8.98047 15.4354 8.98047 16.625C8.98047 18.375 10.3248 21 11.9832 21C13.6414 21 14.9858 18.375 14.9858 16.625C14.9858 15.4354 13.6414 14 11.9832 14Z" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                        <path d="M4.9785 10.0282L4.9785 20.9998M3.68624 3.12927L2.90356 3.20735C2.33235 3.26433 1.92605 3.78866 2.01391 4.35545L2.68289 8.671C2.79621 9.40206 3.42609 10.0105 4.16653 10.0105H5.79049C6.53093 10.0105 7.1608 9.40206 7.27413 8.671L7.9431 4.35545C8.03096 3.78866 7.62467 3.26433 7.05345 3.20735L6.27346 3.12943C5.4132 3.0435 4.54651 3.04344 3.68624 3.12927Z" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                        <path d="M17.9961 13.8182L17.9961 3.02588C19.1546 3.34586 21.0816 4.55262 21.4007 7.52836L21.9738 12.0423C22.0744 12.835 21.8728 13.6261 21.0847 13.7615C20.4245 13.875 19.423 13.9121 17.9961 13.8182ZM17.9961 13.8182L17.9961 21" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                    </svg>
                    <h1 className='font-poppins pt-1 text-lg'>Kitchen. {menu?.kitchen}</h1>
                </div>
                <h1 className='text-5xl pb-4 font-light font-sans text-gray-300'>/</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L2 7" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M12 3V22H7C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8856 3 18V7" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M12 7L22 12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M10 21.9997H17C18.8856 21.9997 19.8284 21.9997 20.4142 21.4139C21 20.8281 21 19.8853 21 17.9997V11.5" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M18 10L18 7" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M7 11H8M7 15H8" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M16 14H17" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M16.5 22V18" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                    </svg>
                    <h1 className='font-poppins pt-1 text-lg'>Type. {menu?.type}</h1>
                </div>
            </div>
        </div>
    )
}

export default PropertyOverViewSection