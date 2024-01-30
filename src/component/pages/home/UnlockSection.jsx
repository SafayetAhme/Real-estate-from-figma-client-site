import layot from '../../../../public/image/layot.png'
import imgown from '../../../../public/image/imgown.png'
import two from '../../../../public/image/two.png'
import thri from '../../../../public/image/thri.png'


const UnlockSection = () => {
    return (
        <div>
            <div className='text-center lg:w-[1042px] mx-auto lg:pt-[70px] md:pt-[50px] sm:pt-[30px]'>
                <div class="lg:text-[50px] sm:text-[42px] md:text-[36px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">Unlock Homy's advantages</div>
                <img className='lg:w-60 md:w-60 w-0 ml-[594px] -mt-1' src={layot} alt="" />
                <p className='lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] pt-[10px] pb-[57px]'>Your trusted real estate partner in every transaction.</p>
            </div>
            {/*  */}
            <div className='lg:flex pb-24 justify-center gap-16 items-center'>
                <div className='text-center'>
                    <img className='mx-auto w-[160px]' src={imgown} alt="" />
                    <p className='text-lg py-3 text-gray-500'>Buy a home</p>
                    <h1 className=' text-lg font-medium'>Explore homy’s 2 million+ <br /> homes and uncover your ideal <br /> living space.</h1>
                </div>
                <div className='text-center'>
                    <img className='mx-auto w-[160px]' src={two} alt="" />
                    <p className='text-lg py-3 text-gray-500'>Rent a home</p>
                    <h1 className=' text-lg font-medium'>Discover a rental you'll love on <br /> homy, thanks to 35+ filters and <br /> tailored keywords.</h1>
                </div>
                <div className='text-center'>
                    <img className='mx-auto w-[160px]' src={thri} alt="" />
                    <p className='text-lg py-3 text-gray-500'>Sell property</p>
                    <h1 className=' text-lg font-medium'>List, sell, thrive – with our top- <br /> notch real estate agency. It’s <br /> super easy & fun.</h1>
                </div>
            </div>
        </div>
    )
}

export default UnlockSection