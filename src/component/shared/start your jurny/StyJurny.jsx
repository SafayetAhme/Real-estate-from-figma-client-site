import React from 'react'
import ex from '../../../../public/image/ex.png'
import layot from '../../../../public/image/layot.png'

const StyJurny = () => {
    return (
        <div className='mt-24 mx-auto overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat ' style={{ backgroundImage: `url(${ex})` }}>
            <div className='lg:flex container mx-auto px-40 justify-between items-center'>
                <div className=' pt-14 pb-28'>
                    <div class="font-poppins text-white pt-2 leading-[64px] text-5xl">Start your Journey <br /> As a Realtor.</div>
                    <img className='lg:w-44 md:w-40 w-0 ml-[256px] -mt-16' src={layot} alt="" />
                </div>
                <div className="">
                    <input type="search" className=" lg:w-[340px] p-4 ps-4 text-sm border-[1px] border-gray-800 outline-none rounded-lg " placeholder="Email address" required />
                    <button type="submit" className="text-white  lg:-ml-[118px] bg-[#FF6625] py-3 lg:px-5  font-medium rounded-md text-sm ">Get Started</button>
                    <p className='text-white pt-1'>Already a Agent? <span className='text-[#FF6625] underline font-medium'> Sign in.</span> </p>
                </div>
            </div>
        </div>
    )
}

export default StyJurny