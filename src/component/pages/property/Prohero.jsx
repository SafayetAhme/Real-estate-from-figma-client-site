
import layot from '../../../../public/image/layot.png'

const Prohero = () => {
    return (
        <div>
            <div className='text-center lg:w-[1042px] mx-auto lg:pt-[101px] md:pt-[70px] sm:pt-[50px]'>
                <div class="lg:text-[76px] sm:text-[56px] md:text-[66px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">Get the ideal home for <br /> your family</div>
                <img className='lg:w-60 md:w-60 w-0 ml-[494px] -mt-0' src={layot} alt="" />
                <p className='lg:text-[28px] md:text-[22px] sm:text-[22px] text-[18px] pt-[32px] pb-[57px]'>We’ve more than 745,000 apartments, place & plot.</p>
            </div>
        </div>
    )
}

export default Prohero