import layot from '../../../../public/image/layot.png'
import bgagent from '../../../../public/image/bgagent.png'
import UseAgents from '../../hooks/use agents/UseAgents'
import { Link } from 'react-router-dom';
import NotFount from '../../shared/not found page/NotFount';


const AgentSection = () => {
    const [agents] = UseAgents();
    const populer = agents?.filter(agent => agent?.category === 'populer');

    return (
        <div className='container pt-24 mx-auto'>
            <div className="flex lg:px-20 justify-between items-center">
                <div className='text-[40px] font-bold font-poppins'>
                    <div class="font-poppins">Our Agents</div>
                    <img className='lg:w-44 md:w-40 w-0 ml-[80px] -mt-1' src={layot} alt="" />
                    <p className='text-lg pt-1 font-normal'>Lorem  is placeholder text commonly used  graphic </p>
                </div>
                <div>
                    <Link to="/Agent">
                        <button className="flex rounded-[10px] border-2 border-dashed border-[#FF6725] bg-[#ffffff] lg:px-6 md:px-6 sm:px-6 px-2 py-[10px] font-semibold gap-1 text-[#FF6725] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <p className="font-medium">Meet Entire Team</p>
                        </button>
                    </Link>
                </div>
            </div>

            {/* card */}
            <div className='lg:px-16 pt-6'>
                <div>
                    <div className="container  h-20 mx-auto" style={{ backgroundImage: `url(${bgagent})` }}>
                    </div>
                    {
                        agents?.length > 0 ? <div>
                            <div className='grid p-4 -mt-20 gap-5 lg:grid-cols-4 justify-center md:grid-cols-2 items-cente'>
                                {
                                    populer?.map(item =>
                                        <div key={item?.id} className=''>
                                            <div className=" text-center">
                                                <Link to={`/agentdetails/${item?._id}`}>
                                                    <img className="rounded-t-lg  rounded-xl" src={item?.agentimg} alt="" />
                                                </Link>
                                                <h1 className='text-xl font-medium pt-3'>{item?.name}</h1>
                                                <h1 className='text-base font-light font-poppins  text-gray-400 pt-0'>{item?.agent}</h1>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div> : <NotFount></NotFount>
                    }
                    <div className="divider divider-neutral pt-0"><div className='w-4 rounded-full h-2 bg-orange-600'></div><div className='w-4 rounded-full h-2 bg-black'></div><div className='w-4 rounded-full h-2 bg-black'></div></div>
                </div>
            </div>
        </div>
    )
}

export default AgentSection