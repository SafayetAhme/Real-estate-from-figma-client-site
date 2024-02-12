import React, { useMemo } from 'react'
import UseAddtolove from '../../hooks/use add to love/UseAddtolove'
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseMenus from '../../hooks/usemenus/UseMenus';

const Favourites = () => {
    const [addLove] = UseAddtolove();

    return (
        <div className='container mx-auto pt-6'>
            <h1 className='font-poppins text-2xl font-semibold'>Favourites</h1>
            <div className='grid lg:grid-cols-3 gap-6 pt-5'>
                {
                    addLove?.map((item) =>
                        <div key={item.id} className=" flex w-full max-w-[23rem] flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <div className=" mx-3 mt-3 overflow-hidden text-white shadow-xl rounded-lg bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                <img
                                    src={item?.image}
                                    alt="ui/ux review check" />
                            </div>
                            <div className="p-5">
                                <h5 className="block font-sans text-xl text-[#FF6B2C] font-medium tracking-normal w-60 text-blue-gray-900">{item?.name}</h5>
                                <p className='text-gray-500 word-index-4'>{item?.title}</p>
                                <div class="divide-y-2  py-2 divide-dashed">
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className='flex pt-2 justify-between items-center'>
                                    <h1 className='text-[28px] font-bold font-poppins'>${item?.price}</h1>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Favourites