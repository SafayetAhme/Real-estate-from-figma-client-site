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
                    <div className="relative">
                        <input type="search" className=" lg:w-[500px] p-4 ps-4 text-sm border-[1px] border-gray-800  rounded-lg " placeholder="Your Email Address..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2 bg-[#FF6625]   font-medium rounded-md text-sm px-6 py-2.5 mr-[84px]">Find out</button>
                    </div>
                    <p className='pt-1 text-gray-500'>*For accurate info please contact us.</p>
                </form>
            </div>
        </div>
    )
}

export default GetQuickSection