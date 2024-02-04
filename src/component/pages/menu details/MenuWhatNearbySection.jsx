import React from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus';
import { useParams } from 'react-router-dom';

const MenuWhatNearbySection = () => {
    const [menus] = UseMenus();
    const { id } = useParams();
    const menu = menus.find(menu => menu._id === id);
    console.log(menu)

    return (
        <div className='pt-10'>
            <div className='bg-white shadow-lg rounded-xl p-6'>
                <h1 className='font-poppins pb-2 text-2xl font-semibold'>What’s Nearby</h1>
                <p className='font-poppins leading-[27px] text-gray-600'>{menu?.WhatNearbylorem}</p>

                {/*  */}
                <div className='grid pt-6 gap-16 lg:grid-cols-3'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-gray-500 font-sans text-lg'>School & Collage:  </h1>
                        <h1 className='font-poppins text-black text-lg'>{menu?.School9km}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-gray-500 font-sans text-lg'>Grocery Center:  </h1>
                        <h1 className='font-poppins text-black text-lg'>{menu?.Grocery2km}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-gray-500 font-sans text-lg'>Metro Station:  </h1>
                        <h1 className='font-poppins text-black text-lg'>{menu?.Metro7km}</h1>
                    </div>
                </div>

                {/*  */}
                <div className='grid pt-3 gap-16 lg:grid-cols-3'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-gray-500 font-sans text-lg'>Gym:  </h1>
                        <h1 className='font-poppins text-black text-lg'>{menu?.Gym3km}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-gray-500 font-sans text-lg'>University:  </h1>
                        <h1 className='font-poppins text-black text-lg'>{menu?.University}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-gray-500 font-sans text-lg'>Hospital:  </h1>
                        <h1 className='font-poppins text-black text-lg'>{menu?.Hospital}</h1>
                    </div>
                </div>

                {/*  */}
                <div className='grid pt-3 gap-16 lg:grid-cols-3'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-gray-500 font-sans text-lg'>Shopping Mall:  </h1>
                        <h1 className='font-poppins text-black text-lg'>{menu?.Shopping}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-gray-500 font-sans text-lg'>Police Station:  </h1>
                        <h1 className='font-poppins text-black text-lg'>{menu?.Police}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuWhatNearbySection