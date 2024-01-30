import React from 'react'
import img from '../../../../public/image/img.png'

const CliFdBkSection = () => {
    return (
        <div className='px-10'>
            <div className='lg:flex justify-center gap-24 pt-12'>
                <div className='text-center'>
                    <img className='w-[50px] mx-auto h-[50px] rounded-full' src={img} alt="" />
                    <h1 className='text-xl font-medium pt-1'>Jonathan Harry</h1>
                    <h1 className='font-medium text-gray-500'>Milan, ltlay</h1>
                </div>
                <div>
                    <h1 className='text-[26px] text-center font-poppins'>Efficient, knowledgeable, & made our home <br /> search a smooth experience. Highly <br /> recommended agency!</h1>
                </div>
                <div className='text-center'>
                    <h1 className='text-xl font-medium pt-1'>Trustpilot</h1>
                    <div className="rating py-1">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" />
                    </div>
                    <h1 className='font-medium'>13k rating <span className='text-gray-500'>(4.7 Rating)</span></h1>
                </div>
            </div>
            <div className="divider divider-neutral pt-6"><div className='w-4 rounded-full h-2 bg-orange-600'></div><div className='w-4 rounded-full h-2 bg-black'></div><div className='w-4 rounded-full h-2 bg-black'></div></div>
        </div>
    )
}

export default CliFdBkSection