import layot from '../../../../public/image/layot.png'

const TextForFeedbackman = () => {
    return (
        <div className='container mx-auto text-center pt-24 pb-8'>
            <h1 className='font-poppins text-4xl font-semibold pb-3'>What our customers say about us</h1>
            <img className='lg:w-52 md:w-40 w-0 ml-[470px] -mt-1' src={layot} alt="" />
            <p className='font-poppins text-lg pt-1 font-medium'>Lorem is placeholder text commonly used graphic</p>
        </div>
    )
}

export default TextForFeedbackman