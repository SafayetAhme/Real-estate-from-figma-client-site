import React from 'react'
import get from '../../../../public/image/get.png'
import layot from '../../../../public/image/layot.png'


const GetQuickSection = () => {
    return (
        <div className='grid lg:grid-cols-2 items-center gap-20 px-4 pt-16'>
            <div>
                <img src={get} alt="" />
            </div>
            <div>
                <div className='text-[40px] font-bold font-poppins'>
                    <h1 className='font-poppins text-lg font-normal text-gray-400'>CB ESTIMATE</h1>
                    <div class="font-poppins pt-2 leading-[54px] text-5xl">Get quick estimate <br /> on your home.</div>
                    <img className='lg:w-44 md:w-40 w-0 ml-[280px] -mt-16' src={layot} alt="" />
                    <p className='text-lg pt-[70px] font-normal'>Master your property's valuation for a poised entry <br /> into the real estate market, armed with self- <br /> assurance and insight.</p>
                </div>
                <form className='pt-10'>
                    <form>
                        <div class="relative w-[430px]">
                            <input type="search" id="search" class="block w-full outline-none p-4 border-black text-sm text-black border rounded-lg bg-gray-50" placeholder="Your Email Address..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#FF6625] font-medium rounded-lg text-sm px-4 py-2 ">Find out</button>
                        </div>
                    </form>
                    <p className='pt-1 text-gray-500'>For more details please  <span className="underline text-black font-medium">contact us</span> </p>
                </form>
            </div>
        </div>
    )
}

export default GetQuickSection