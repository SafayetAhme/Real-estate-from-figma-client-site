import React from 'react'
import layot from '../../../../public/image/layot.png'
import reviewicon from '../../../../public/image/reviewicon.png'
import fbone from '../../../../public/image/fbone.png'
import fbtwo from '../../../../public/image/fbtwo.png'
import fbthri from '../../../../public/image/fbthri.png'
import fbforth from '../../../../public/image/fbforth.png'


const AgencyClientFeedSection = () => {
    return (
        <div className='bg-[#F5EDE8]'>
            <div className='text-center lg:w-[1042px] mx-auto lg:pt-[101px] md:pt-[70px] sm:pt-[50px] pt-10'>
                <div class="lg:text-[46px] font-poppins sm:text-[46px] md:text-[56px] text-[46px] lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[68px] sm:leading-[60px] leading-[60px] ">Client Feedback</div>
                <img className='lg:w-60 md:w-60 w-0 ml-[474px] -mt-0' src={layot} alt="" />
                <p className='lg:text-[20px] font-poppins md:text-[18px] sm:text-[22px] text-[18px] pt-[10px] pb-[57px]'>Client satisfaction speaks louder than our words. Hear from them.</p>
            </div>

            {/* feedback card*/}
            <div className='lg:w-[1000px] mx-auto'>
                <div className="carousel gap-5 w-full">
                    <div id="item1" className="carousel-item w-[480px] h-[300px]">
                        <div className='w-full  p-7 bg-white rounded-xl'>
                            <div className='flex items-center  justify-between'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div>
                                    <img className='w-[26px]' src={reviewicon} alt="" />
                                </div>
                            </div>
                            <h1 className='font-poppins text-xl pt-6 leading-[34px]'>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time. <br /> Highly recommended!</h1>
                            <div className='flex items-center pt-8 justify-between'>
                                <div>
                                    <h1 className='font-poppins text-xl leading-[34px] font-semibold'>Rashed Kabir, <span className='text-gray-500 font-medium'>Claifornia</span> </h1>
                                </div>
                                <div>
                                    <img className='w-[50px] rounded-full' src={fbtwo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-[480px] h-[300px]">
                        <div className='w-full  p-7 bg-white rounded-xl'>
                            <div className='flex items-center  justify-between'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div>
                                    <img className='w-[26px]' src={reviewicon} alt="" />
                                </div>
                            </div>
                            <h1 className='font-poppins text-xl pt-6 leading-[34px]'>One should not hesitate to ask for <br /> unlikely as they might think.</h1>
                            <div className='flex items-center pt-16 justify-between'>
                                <div>
                                    <h1 className='font-poppins text-xl leading-[34px] font-semibold'>Zubayer Ai Hasan, <span className='text-gray-500 font-medium'>Dhaka</span> </h1>
                                </div>
                                <div>
                                    <img className='w-[50px] rounded-full' src={fbone} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-[480px] h-[300px]">
                        <div className='w-full  p-7 bg-white rounded-xl'>
                            <div className='flex items-center  justify-between'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div>
                                    <img className='w-[26px]' src={reviewicon} alt="" />
                                </div>
                            </div>
                            <h1 className='font-poppins text-xl pt-6 leading-[34px]'>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time. <br /> Highly recommended!</h1>
                            <div className='flex items-center pt-6 justify-between'>
                                <div>
                                    <h1 className='font-poppins text-xl pt-6 leading-[34px] font-semibold'>Rashed Kabir, <span className='text-gray-500 font-medium'>Claifornia</span> </h1>
                                </div>
                                <div>
                                    <img className='w-[50px] rounded-full' src={fbthri} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-[480px] h-[300px]">
                        <div className='w-full  p-7 bg-white rounded-xl'>
                            <div className='flex items-center  justify-between'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div>
                                    <img className='w-[26px]' src={reviewicon} alt="" />
                                </div>
                            </div>
                            <h1 className='font-poppins text-xl pt-6 leading-[34px]'>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time. <br /> Highly recommended!</h1>
                            <div className='flex items-center pt-6 justify-between'>
                                <div>
                                    <h1 className='font-poppins text-xl pt-6 leading-[34px] font-semibold'>Zubayer Ai Hasan, <span className='text-gray-500 font-medium'>Dhaka</span> </h1>
                                </div>
                                <div>
                                    <img className='w-[50px] rounded-full' src={fbforth} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-10 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    )
}

export default AgencyClientFeedSection