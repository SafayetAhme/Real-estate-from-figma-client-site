import layot from '../../../../public/image/layot.png'

const Prohero = () => {
    return (
        <div>
            <div className='text-center bg-[#FFF8F5]  mx-auto lg:pt-[70px] md:pt-[50px] sm:pt-[30px]'>
                <div class="lg:text-[56px] sm:text-[46px] md:text-[56px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">Find Your Home</div>
                <img className='lg:w-40 md:w-50 w-0 ml-[564px] -mt-3' src={layot} alt="" />
                <p className='lg:text-[24px] md:text-[20px] sm:text-[22px] text-[18px] pt-[6px] pb-[57px]'>We’ve more than 745,000 apartments, place & plot.</p>
            </div>
        </div>
    )
}

export default Prohero