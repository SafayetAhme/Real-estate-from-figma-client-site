import Qlocation from '../../../../public/image/Qlocation.png'

const ContactUs = () => {
    return (
        <div>
            <div className='text-center bg-[#FFF8F5]  mx-auto lg:py-[50px] md:pt-[20px] sm:py-[20px]'>
                <div class="lg:text-[42px] font-poppins sm:text-[36px] md:text-[46px] text-[36px] lg:font-bold md:font-bold sm:font-bold  font-bold  text-center lg:leading-[58px] sm:leading-[50px] leading-[50px]">Questions? Feel Free to Reach <br /> Out Via Message.</div>

                {/* section */}
                <div className='flex justify-center pt-10 pb-16 items-center'>
                    <div className='flex items-center gap-3'>
                        <img className='w-[46px]' src={Qlocation} alt="" />
                        <div className='text-start'>
                            <h1 className='font-poppins text-sm font-semibold'>We’r always happy to help.</h1>
                            <h1 className='font-poppins text-xs pt-[5px]'>ask@homy.com</h1>
                        </div>
                    </div>
                    <h1 className='px-7 text-5xl font-light'>/</h1>
                    <div className='flex items-center gap-3'>
                        <img className='w-[46px]' src={Qlocation} alt="" />
                        <div className='text-start'>
                            <h1 className='font-poppins text-sm font-semibold'>Our hotline number</h1>
                            <h1 className='font-poppins text-xs pt-[5px]'>+757 699 4478,  +21 377 9731</h1>
                        </div>
                    </div>
                    <h1 className='px-7 text-5xl font-light'>/</h1>
                    <div className='flex items-center gap-3'>
                        <img className='w-[46px]' src={Qlocation} alt="" />
                        <div className='text-start'>
                            <h1 className='font-poppins text-sm font-semibold'>Live chat</h1>
                            <h1 className='font-poppins text-xs pt-[5px]'>www.homylivechat.com</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact from */}
            <div className='grid mx-auto gap-16 lg:grid-cols-2'>
                <div class="relative w-full h-full">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe>
                </div>
                <div className=" w-[550px] py-12">
                    <h1 className="text-4xl font-bold pb-6 font-poppins">Send Message</h1>
                    <div className=" pb-4">
                        <h1 className='font-poppins pb-1'>name*</h1>
                        <input type="name" name="name" placeholder="name" className="border-[1px] border-black rounded-lg py-2 pl-3 w-full" />
                    </div>
                    <div className="pb-6">
                        <h1 className='font-poppins pb-1'>password*</h1>
                        <input type="password" name="password" placeholder="password" className="border-[1px] border-black rounded-lg py-2 pl-3 w-full" />
                    </div>
                    <textarea placeholder="Your message" name="message" className="border-[1px] border-black rounded-lg pl-3 pt-3 pb-12 w-full" ></textarea>

                    <div className="card-actions justify-end">
                        <button className=" mt-3 w-full py-3 bg-[#FF6625] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-[#FF6625] border-[#FF6625] text-white hover:bg-[#FF6625]  hover:border-[#FF6625] shadow-lg shadow-[#FF6625]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                Send Message
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs