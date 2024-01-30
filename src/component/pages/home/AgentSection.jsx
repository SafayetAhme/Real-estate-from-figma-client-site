import layot from '../../../../public/image/layot.png'
import bgagent from '../../../../public/image/bgagent.png'


const AgentSection = () => {
    return (
        <div className='container pt-24 mx-auto'>
            <div className="flex px-24 justify-between items-center">
                <div className='text-[40px] font-bold font-poppins'>
                    <div class="font-poppins">Our Agents</div>
                    <img className='lg:w-44 md:w-40 w-0 ml-[80px] -mt-1' src={layot} alt="" />
                    <p className='text-lg pt-1 font-normal'>Lorem  is placeholder text commonly used  graphic </p>
                </div>
                <div>
                    <button className="flex rounded-[10px] border-2 border-dashed border-[#FF6725] bg-[#ffffff] lg:px-6 md:px-6 sm:px-6 px-2 py-[10px] font-semibold gap-1 text-[#FF6725] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                        <p className="font-medium">Meet Entire Team</p>
                    </button>
                </div>
            </div>

            {/* card */}
            <div className='px-20 pt-6'>
                <div>
                    <div className="container  h-20 mx-auto" style={{ backgroundImage: `url(${bgagent})` }}>
                    </div>
                    <div className='grid p-4 -mt-20 gap-5 lg:grid-cols-4 items-cente'>
                        <div className=''>
                            <div className=" text-center">
                                <img className="rounded-t-lg rounded-xl h-[270px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                                <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                                <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                            </div>
                        </div>
                        <div className=''>
                            <div className="relative text-center overflow-hidden bg-cover bg-no-repeat">
                                <img className="rounded-t-lg rounded-xl h-[270px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                                <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                                <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                            </div>
                        </div>
                        <div className=''>
                            <div className="relative text-center overflow-hidden bg-cover bg-no-repeat">
                                <img className="rounded-t-lg rounded-xl h-[270px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                                <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                                <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                            </div>
                        </div>
                        <div className=''>
                            <div className="relative text-center overflow-hidden bg-cover bg-no-repeat">
                                <img className="rounded-t-lg rounded-xl h-[270px]" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
                                <h1 className='text-xl font-medium pt-3'>Safayet Ahmed</h1>
                                <h1 className='text-lg font-normal text-gray-400 pt-0'>Safayet Ahmed</h1>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-neutral pt-0"><div className='w-4 rounded-full h-2 bg-orange-600'></div><div className='w-4 rounded-full h-2 bg-black'></div><div className='w-4 rounded-full h-2 bg-black'></div></div>
                </div>
            </div>
        </div>
    )
}

export default AgentSection