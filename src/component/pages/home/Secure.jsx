import React from 'react'
import house from '../../../../public/image/ho.png'
import video from '../../../../public/image/video.png'
import cart from '../../../../public/image/card.png'
import carts from '../../../../public/image/cards.png'
import shape from '../../../../public/image/Shape.png'
import { GoArrowUpRight } from 'react-icons/go'

const Secure = () => {
    return (
        <div className='grid px-10 gap-8 lg:grid-cols-5'>
            <div className='col-span-3 p-10 bg-[#FFEEE7] rounded-xl'>
                <h1 className='text-5xl font-bold leading-[64px] font-poppins'>Secure your family's <br /> dream home.</h1>
                <div className='flex justify-between -mt-[42px] items-center'>
                    <img className='w-[62px]' src={video} alt="" />
                    <img className='w-[240px]' src={cart} alt="" />
                </div>
                <div>
                    <img className='-ml-14 -mb-[88px] w-[310px] pt-20' src={carts} alt="" />
                </div>
            </div>

            {/*  */}
            <div className='col-span-2 p-6' style={{ backgroundImage: `url(${shape})` }}>
                <div className='bg-white rounded-2xl p-6'>
                    <h1 className='text-3xl font-poppins font-bold pb-3'>Who we are?</h1>
                    <p className='text-lg'>Your premier partner in real estate. <br /> Transforming properties into dreams. Let us <br /> guide you home with expertise.</p>
                    <p className='divider divider-neutral'></p>
                    <div className='flex -mb-2 justify-between items-center'>
                        <div>
                            <h1 className='text-5xl font-medium'>1.7K+</h1>
                            <p className='text-base pt-2'>Completed Project</p>
                        </div>
                        <div>
                            <h1 className='text-5xl font-medium'>1.3mil+</h1>
                            <p className='text-base pt-2'>Happy Customers</p>
                        </div>
                    </div>
                    <p className='divider divider-neutral'></p>
                    <div className='flex gap-2 items-center'>
                        <img src="https://cdn.hugeicons.com/icons/bounce-right-stroke-rounded.svg" alt="bounce-right" width="24" height="24" />
                        <p className='text-lg font-normal text-gray-600'>Loan & low Interest facility</p>
                    </div>
                    <div className='flex gap-2 pt-2 items-center'>
                        <img src="https://cdn.hugeicons.com/icons/bounce-right-stroke-rounded.svg" alt="bounce-right" width="24" height="24" />
                        <p className='text-lg font-normal text-gray-600'>Over 100k+ property & update regularly</p>
                    </div>
                    <div className='flex gap-2 pt-2 items-center'>
                        <img src="https://cdn.hugeicons.com/icons/bounce-right-stroke-rounded.svg" alt="bounce-right" width="24" height="24" />
                        <p className='text-lg font-normal text-gray-600'>Expert agent consultation</p>
                    </div>
                    <div className='flex pt-12 gap-4 items-center '>
                        <button className="flex rounded-[10px] border-2 border-dashed border-black bg-[#FF6725] lg:px-6 md:px-6 sm:px-6 px-2 py-[10px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <p className="font-medium">More Details</p>
                        </button>
                        <div className=' flex items-center'>
                            <p className="font-medium text-lg">Request a Callback</p>
                            <img src="https://cdn.hugeicons.com/icons/arrow-right-02-stroke-rounded.svg" alt="arrow-right-02" width="24" height="24" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secure