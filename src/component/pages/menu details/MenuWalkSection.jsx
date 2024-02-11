import React from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus';
import { useParams } from 'react-router-dom';

const MenuWalkSection = () => {
    const [menus] = UseMenus();
    const { id } = useParams();
    const menu = menus.find(menu => menu._id === id);
    console.log(menu)
    return (
        <div className='bg-white shadow-lg rounded-xl mt-10 p-6'>
            <h1 className='font-poppins pb-3 text-2xl font-semibold'>Walk Score</h1>
            <p className='font-poppins leading-[27px] text-base text-[#696969]'>{menu?.PropertyFeatures}</p>

            <div className='grid lg:grid-cols-2 items-center gap-8 justify-between'>
                <div className='flex items-center pt-5 gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                        <path d="M17.5 19V22" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M6.5 19V22" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13C20 15.8284 20 17.2426 19.1213 18.1213C18.2426 19 16.8284 19 14 19H10C7.17157 19 5.75736 19 4.87868 18.1213C4 17.2426 4 15.8284 4 13V10Z" stroke="#2f2f2f" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M4 12C5.85698 12.5752 8.80918 13 12 13C15.1908 13 18.143 12.5752 20 12" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M22 11H21.4721C21.1616 11 20.8554 11.0723 20.5777 11.2111L20 11.5" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M4 11.5L3.42229 11.2111C3.14458 11.0723 2.83835 11 2.52786 11H2" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M4.5 16H6" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M18 16H19.5" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M10 16H14" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" />
                    </svg>
                    <div>
                        <h1 className='font-poppins text-base font-semibold'>{menu?.transit}</h1>
                        <h1 className='font-poppins text-sm text-[#696969]'>{menu?.Walkable}</h1>
                    </div>
                </div>
                <div className='flex items-center pt-5 gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                        <path d="M19 14H20.2389C21.3498 14 22.1831 15.0805 21.9652 16.2386L21.7003 17.6466C21.4429 19.015 20.3127 20 19 20" stroke="#2f2f2f" strokeWidth="1.5" />
                        <path d="M5 14H3.76113C2.65015 14 1.81691 15.0805 2.03479 16.2386L2.29967 17.6466C2.55711 19.015 3.68731 20 5 20" stroke="#2f2f2f" strokeWidth="1.5" />
                        <path d="M18.2696 10.5001L18.7911 15.1968C19.071 18.3791 19.211 19.9702 18.2696 20.9851C17.3283 22.0001 15.7125 22.0001 12.481 22.0001H11.519C8.2875 22.0001 6.67174 22.0001 5.73038 20.9851C4.78901 19.9702 4.92899 18.3791 5.20893 15.1968L5.73038 10.5" stroke="#2f2f2f" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5" stroke="#2f2f2f" strokeWidth="1.5" />
                        <path d="M5.2617 8.86971C5.01152 7.45403 4.88643 6.74619 5.13559 6.20431C5.30195 5.84248 5.57803 5.53512 5.9291 5.32087C6.45489 5 7.21577 5 8.73753 5H15.2625C16.7842 5 17.5451 5 18.0709 5.32087C18.422 5.53512 18.698 5.84248 18.8644 6.20431C19.1136 6.74619 18.9885 7.45403 18.7383 8.86971L18.6872 9.15901C18.5902 9.70796 18.5417 9.98243 18.446 10.2349C18.2806 10.671 18.0104 11.0651 17.6565 11.3863C17.4517 11.5722 17.2062 11.7266 16.7153 12.0353C16.2537 12.3255 16.0229 12.4706 15.779 12.5845C15.3579 12.7812 14.905 12.9105 14.439 12.9672C14.169 13 13.8916 13 13.3369 13H10.6631C10.1084 13 9.831 13 9.56102 12.9672C9.09497 12.9105 8.64214 12.7812 8.22104 12.5845C7.9771 12.4706 7.74632 12.3255 7.28474 12.0353C6.79376 11.7266 6.54827 11.5722 6.34346 11.3863C5.98959 11.0651 5.7194 10.671 5.55404 10.2349C5.45833 9.98243 5.40983 9.70796 5.31282 9.15901L5.2617 8.86971Z" stroke="#2f2f2f" strokeWidth="1.5" />
                        <path d="M12 10.0024L12.0087 10.0001" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                        <h1 className='font-poppins text-base font-semibold'>{menu?.school}</h1>
                        <h1 className='font-poppins text-sm text-[#696969]'>{menu?.Distance}</h1>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 pt-2 items-center gap-8 justify-between'>
                <div className='flex items-center pt-5 gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                        <path d="M11 18H15M13.5 8H14.4429C15.7533 8 16.4086 8 16.9641 8.31452C17.5196 8.62904 17.89 9.20972 18.6308 10.3711C19.1502 11.1854 19.6955 11.7765 20.4622 12.3024C21.2341 12.8318 21.6012 13.0906 21.8049 13.506C22 13.9038 22 14.375 22 15.3173C22 16.5596 22 17.1808 21.651 17.5755C21.636 17.5925 21.6207 17.609 21.6049 17.625C21.2375 18 20.6594 18 19.503 18H19" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15V8C2 6.58579 2 5.87868 2.43934 5.43934C2.87868 5 3.58579 5 5 5H10.5C11.9142 5 12.6213 5 13.0607 5.43934C13.5 5.87868 13.5 6.58579 13.5 8V18H9" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M22 15H21" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <path d="M8 9V13M10 11L6 11" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                        <circle cx="17" cy="18" r="2" stroke="#2f2f2f" strokeWidth="1.5" />
                        <circle cx="7" cy="18" r="2" stroke="#2f2f2f" strokeWidth="1.5" />
                    </svg>
                    <div>
                        <h1 className='font-poppins text-base font-semibold'>{menu?.medical}</h1>
                        <h1 className='font-poppins text-sm text-[#696969]'>{menu?.Short}</h1>
                    </div>
                </div>
                <div className='flex items-center pt-5 gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                        <path d="M3.06164 14.4413L3.42688 12.2985C3.85856 9.76583 4.0744 8.49951 4.92914 7.74975C5.78389 7 7.01171 7 9.46734 7H14.5327C16.9883 7 18.2161 7 19.0709 7.74975C19.9256 8.49951 20.1414 9.76583 20.5731 12.2985L20.9384 14.4413C21.5357 17.946 21.8344 19.6983 20.9147 20.8491C19.995 22 18.2959 22 14.8979 22H9.1021C5.70406 22 4.00504 22 3.08533 20.8491C2.16562 19.6983 2.4643 17.946 3.06164 14.4413Z" stroke="#2f2f2f" strokeWidth="1.5" />
                        <path d="M7.5 9L7.71501 5.98983C7.87559 3.74176 9.7462 2 12 2C14.2538 2 16.1244 3.74176 16.285 5.98983L16.5 9" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" />
                    </svg>
                    <div>
                        <h1 className='font-poppins text-base font-semibold'>{menu?.shopping}</h1>
                        <h1 className='font-poppins text-sm text-[#696969]'>{menu?.Long}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuWalkSection