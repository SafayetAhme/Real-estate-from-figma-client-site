import layot from '../../../../public/image/layot.png'


const AnySection = () => {
    return (
        <div className='text-center py-28 container mx-auto '>
            <div class="lg:text-[50px] font-poppins sm:text-[42px] md:text-[36px] text-[46px] lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[64px] sm:leading-[60px] leading-[60px] ">Any Inquiry? Feel free <br /> To contact Us.</div>
            <img className='-mt-[70px] w-[890px] pl-[696px]' src={layot} alt="" />
            <button className="mt-20 rounded-[10px] border-2 border-dashed border-black bg-[#FF6725] lg:px-6 md:px-6 sm:px-6 px-2 py-[10px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <p className="font-medium">SEND MESSAGE</p>
            </button>
        </div>
    )
}

export default AnySection