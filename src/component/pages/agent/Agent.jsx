import React from 'react'
import AgentHero from './AgentHero'
import ex from '../../../../public/image/ex.png'
import layot from '../../../../public/image/layot.png'
import UseAgents from '../../hooks/use agents/UseAgents'
import StyJurny from '../../shared/start your jurny/StyJurny'
import { Link } from 'react-router-dom'
import NotFount from '../../shared/not found page/NotFount'


const Agent = () => {
    const [agents] = UseAgents();

    return (
        <div>
            <AgentHero></AgentHero>
            {/* all agent */}
            <div className='container pt-14 mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-poppins'>Showing<span className='font-bold'>0{agents?.length}</span></h1>
                    <div className='flex items-center gap-2'>
                        <h1>Sort by:</h1>
                        <div className='flex items-center gap-2'>
                            <select className="border-[2px] rounded-md pb-1 py-0 px-1">
                                <option>Popular</option>
                                <option>Normal</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Our agents */}
                {
                    agents?.length > 0 ? <div>
                        <div className='grid gap-5 pt-6 lg:grid-cols-4 md:grid-cols-2 justify-center items-cente'>
                            {
                                agents?.map(item =>
                                    <div key={item?.id} className=" relative text-center">
                                        <Link to={`/agentdetails/${item?._id}`}>
                                            <img className="rounded-t-lg  rounded-xl" src={item?.agentimg} alt="" />
                                        </Link>
                                        <button className="absolute  top-2 left-0">
                                            <span className="bg-[#fff] px-2 py-[4px] text-xs font-medium pb-1">{item?.listing} LISTING</span>
                                        </button>
                                        <h1 className='text-xl font-medium pt-3'>{item?.name}</h1>
                                        <h1 className='text-base font-light font-poppins  text-gray-400 pt-0'>{item?.agent}</h1>
                                    </div>
                                )
                            }
                        </div>
                    </div> : <NotFount></NotFount>
                }
            </div>
            {/* start your journey */}
            <StyJurny></StyJurny>
        </div>
    )
}

export default Agent