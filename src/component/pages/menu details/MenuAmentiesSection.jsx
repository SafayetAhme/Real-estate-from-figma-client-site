import React from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus';
import { useParams } from 'react-router-dom';

const MenuAmentiesSection = () => {
    const [menus] = UseMenus();
    const { id } = useParams();
    const menu = menus.find(menu => menu._id === id);
    console.log(menu)

    return (
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
    )
}

export default MenuAmentiesSection