import React from 'react'
import FaqHero from './FaqHero'
import probg from '../../../../public/image/probg.png'


const FAQ = () => {
    return (
        <div>
            {/* Faq hero section */}
            <FaqHero></FaqHero>

            {/* main section */}
            <div className="grid lg:grid-cols-3 pt-10 container mx-auto">
                <div className='col-span-1 pr-14 h-fit p-4'>
                    <div className='p-5' style={{ backgroundImage: `url(${probg})` }}>
                        {/* category */}
                        <div className='p-4 bg-white rounded-xl'>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>1.</span> Selling</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>2.</span> Renting</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>3.</span> Buying</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>4.</span> Payments</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>5.</span> Terms & Conditions</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>6.</span> Account</p>
                        </div>

                        {/* Keywords */}
                        <div className='p-6 bg-white rounded-xl text-center mt-4'>
                            <h1 className='font-poppins text-2xl text-center font-semibold'>Don’t Find Your <br /> Answer?</h1>
                            <button className='px-6 py-2 border-[2px] rounded-lg text-white bg-black hover:text-white font-poppins border-black mt-3'>Contact us</button>
                        </div>
                    </div>
                </div>
                <div className='pt-4 col-span-2 gap-5'>
                    <div className='relative'>
                        <img className='w-full' src="https://images.unsplash.com/photo-1617870952348-7524edfb61b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ