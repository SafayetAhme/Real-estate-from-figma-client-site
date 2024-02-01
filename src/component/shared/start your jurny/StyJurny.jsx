import React from 'react'
import ex from '../../../../public/image/ex.png'
import layot from '../../../../public/image/layot.png'

const StyJurny = () => {
    return (
        <div className='mt-24 mb-12 mx-auto overflow-y-scroll px-24 bg-cover bg-fixed bg-center bg-no-repeat ' style={{ backgroundImage: `url(${ex})` }}>
            <div className='lg:flex container mx-auto justify-between items-center'>
                <div className=' pt-14 pb-28'>
                    <div class="font-poppins text-white pt-2 leading-[64px] text-5xl">Start your Journey <br /> As a Realtor.</div>
                    <img className='lg:w-44 md:w-40 w-0 ml-[256px] -mt-16' src={layot} alt="" />
                </div>
                <form className=''>
                    <form>
                        <div class="relative w-[380px]">
                            <input type="search" id="search" class="block w-full outline-none p-4 text-sm text-black border rounded-lg bg-gray-50" placeholder="Email Address..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#FF6625] font-medium rounded-lg text-sm px-4 py-2 ">Get Started</button>
                        </div>
                    </form>
                    <p className='text-white pt-1'>Already a Agent? <span className='text-[#FF6625] underline font-medium'> Sign in.</span> </p>
                </form>
            </div>
        </div>
    )
}

export default StyJurny