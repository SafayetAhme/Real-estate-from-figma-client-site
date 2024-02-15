import layot from '../../../../public/image/layot.png'
import imgown from '../../../../public/image/imgown.png'
import profile from '../../../../public/image/profile.png'
import right from '../../../../public/image/right.png'
import StyJurny from '../../shared/start your jurny/StyJurny'


const Werhere = () => {
    return (
        <div className='bg-[#FFF8F4]'>
            <div>
                <div className='text-center lg:w-[1042px] mx-auto lg:pt-[101px] md:pt-[70px] sm:pt-[50px]'>
                    <div class="lg:text-[52px] font-poppins sm:text-[46px] md:text-[56px] text-[40px] lg:pt-0 pt-12 lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[68px] sm:leading-[60px] leading-[60px] ">We’r here to help <br /> you get your dream home</div>
                    <img className='lg:w-60 md:w-60 w-0 ml-[524px] -mt-0' src={layot} alt="" />
                    <p className='lg:text-[20px] font-poppins md:text-[18px] sm:text-[22px] text-[18px] pt-[16px] pb-[57px]'>It’s easy to start with us with these simple steps</p>
                </div>
                <div className='lg:grid-cols-3 grid md:grid-cols-3 grid-cols-1 pb-24 mx-auto items-center'>
                    <div className='text-center mx-auto lg:-mr-6'>
                        <img className='w-[160px] mx-auto' src={profile} alt="" />
                        <p className='text-lg font-bold pt-7'>Create Account</p>
                        <h1 className=' font-poppins text-base pt-2 leading-[25px] text-gray-600'>It’s very easy to open an account <br /> and start your journey.</h1>
                    </div>
                    <div className='text-center mx-auto lg:py-0 py-10'>
                        <img className='w-[160px] mx-auto' src={imgown} alt="" />
                        <p className='text-lg font-bold pt-7'>Find Home</p>
                        <h1 className=' font-poppins text-base pt-2 leading-[25px] text-gray-600'>Complete your profile with all the info <br /> to get attention of client.</h1>
                    </div>
                    <div className='text-center mx-auto lg:-ml-6'>
                        <img className='w-[160px] mx-auto' src={right} alt="" />
                        <p className='text-lg font-bold pt-7'>Quick Process</p>
                        <h1 className=' font-poppins text-base pt-2 leading-[25px] text-gray-600'>Apply & get your preferable jobs with all <br /> the requirements and get it.</h1>
                    </div>
                </div>
            </div>
            <StyJurny></StyJurny>
        </div>
    )
}

export default Werhere