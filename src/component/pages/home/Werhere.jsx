import layot from '../../../../public/image/layot.png'
import imgown from '../../../../public/image/imgown.png'
import profile from '../../../../public/image/profile.png'
import right from '../../../../public/image/right.png'
import arrow from '../../../../public/image/arrow.png'
import ex from '../../../../public/image/ex.png'


const Werhere = () => {
    return (
        <div className='bg-[#FFF8F4]'>
            <div className='text-center  container mx-auto lg:w-[1042px] lg:pt-[70px] md:pt-[50px] sm:pt-[30px]'>
                <div class="lg:text-[50px] font-poppins sm:text-[42px] md:text-[36px] text-[46px] lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[60px] sm:leading-[60px] leading-[60px] ">We’r here to help <br /> you get your dream home</div>
                <img className='lg:w-60 md:w-60 w-0 ml-[594px] -mt-1' src={layot} alt="" />
                <p className='lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] pt-[10px] pb-[57px]'>It’s easy to start with us with these simple steps</p>
            </div>
            <div className='lg:flex items-center mx-auto w-[1090px]'>
                <div className='text-center'>
                    <img className='mx-auto w-[160px]' src={profile} alt="" />
                    <p className='text-lg font-bold pt-6'>Create Account</p>
                    <h1 className='  text-lg pt-2 text-gray-700'>It’s very easy to open an account <br /> and start your journey.</h1>
                </div>
                <img className='-mt-[144px] w-[100px]' src={arrow} alt="" />
                <div className='text-center'>
                    <img className='mx-auto w-[160px]' src={imgown} alt="" />
                    <p className='text-lg font-bold pt-6'>Find Home</p>
                    <h1 className='  text-lg pt-2 text-gray-700'>Complete your profile with all the info <br /> to get attention of client.</h1>
                </div>
                <img className='-mt-[144px] w-[100px]' src={arrow} alt="" />
                <div className='text-center'>
                    <img className='mx-auto w-[160px]' src={right} alt="" />
                    <p className='text-lg font-bold pt-6'>Quick Process</p>
                    <h1 className='  text-lg pt-2 text-gray-700'>Apply & get your preferable jobs with all <br /> the requirements and get it.</h1>
                </div>
            </div>
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
        </div>
    )
}

export default Werhere