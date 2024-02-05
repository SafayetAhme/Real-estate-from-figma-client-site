import React from 'react'
import UseAgents from '../../hooks/use agents/UseAgents'
import { Link, useParams } from 'react-router-dom';
import bgprofile from '../../../../public/image/probg.png'
import UseMenus from '../../hooks/usemenus/UseMenus';
import AgentReviewSection from './AgentReviewSection';
import AgentLeaveSection from './AgentLeaveSection';
import StyJurny from '../../shared/start your jurny/StyJurny';

const AgentDetails = () => {
    const [menus] = UseMenus();
    const Villa = menus?.filter(item => item?.category === 'Villa');
    const [agents] = UseAgents();
    const { id } = useParams();
    const agent = agents?.find(agent => agent._id === id);
    console.log(agent);

    return (
        <div>
            <div className='mx-auto pt-12 pb-10 container'>
                <div className='grid lg:grid-cols-3'>
                    <div className='col-span-2'>
                        <div className='grid lg:grid-cols-2 items-center gap-10'>
                            <div className='relative'>
                                <img className='w-full object-cover object-center h-[380px]' src={agent?.agentimg} alt="" />
                                <h1 className='absolute top-3 bg-white px-2 font-poppins'>{agent?.listing} Listing</h1>
                            </div>

                            <div>
                                <h1 className='font-poppins font-semibold text-3xl'>{agent?.name}</h1>
                                <h1 className='font-poppins text-lg text-[#FF6625]'>{agent?.title}</h1>

                                <div className='grid pt-7 lg:grid-cols-2 items-center gap-0'>
                                    <h1 className='font-poppins text-base text-gray-500'>Location: </h1>
                                    <h1 className='font-poppins text-base text-black'>{agent?.location}</h1>
                                </div>
                                <div className='grid pt-3 lg:grid-cols-2 items-center gap-0'>
                                    <h1 className='font-poppins text-base text-gray-500'>Phone: </h1>
                                    <h1 className='font-poppins text-base text-black'>{agent?.phone}</h1>
                                </div>
                                <div className='grid pt-3 lg:grid-cols-2 items-center gap-0'>
                                    <h1 className='font-poppins text-base text-gray-500'>Email: </h1>
                                    <h1 className='font-poppins text-base text-black'>{agent?.Email}</h1>
                                </div>
                                <div className='grid pt-3 lg:grid-cols-2 items-center gap-0'>
                                    <h1 className='font-poppins text-base text-gray-500'>Qualification: </h1>
                                    <h1 className='font-poppins text-base text-black'>{agent?.Qualification}</h1>
                                </div>

                                <div className='flex items-center gap-3 justify-start pt-10'>
                                    <a href={agent?.agentfacebook}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={agent?.agenttwiter}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.4 7C13.0745 7 12 8.11929 12 9.5C12 9.71132 12.0252 9.91652 12.0726 10.1125C11.9494 10.1208 11.8252 10.125 11.7 10.125C9.67943 10.125 7.90441 8.71734 6.89216 7.06577C6.70202 7.73853 6.6 8.4506 6.6 9.1875C6.6 11.2539 7.40225 13.4376 8.7 14.7941C8.7 15.5294 6.9 15.9021 6 15.9966C7.05902 16.6348 8.28857 17 9.6 17C13.4885 17 16.657 13.7891 16.7953 9.77373L18 7.3125L15.9875 7.625C15.5644 7.23602 15.0087 7 14.4 7Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={agent?.agentinstagram}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#2f2f2f" stroke-width="1.5" />
                                            <path d="M17.5078 6.5L17.4988 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={agent?.agentlinkedin}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 10V17" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.00801 7L6.99902 7" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* overView section */}
                        <div className='pt-12'>
                            <h1 className='text-2xl font-poppins font-semibold'>Overview</h1>
                            <p className='font-poppins pb-6'>{agent?.Risk}</p>
                            <p className='font-poppins leading-[28px]'>{agent?.Overview}</p>

                            <h1 className='border-b border-[1px] border-b-black my-8 mb-14'></h1>
                            <h1 className='text-3xl font-poppins font-semibold'>Listings</h1>

                            {/* Listings section */}
                            <div className='pt-3 grid lg:grid-cols-2 gap-5'>
                                {
                                    Villa?.map(item =>
                                        <div key={item?.id} className="relative flex w-full max-w-[23rem] flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
                                            <div
                                                className="relative mx-3 mt-3 overflow-hidden text-white shadow-xl rounded-lg bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                                <img
                                                    src={item?.image}
                                                    alt="ui/ux review check" />
                                                <div
                                                    className="absolute w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                                                </div>
                                                <button className="absolute top-2 -left-4">
                                                    <span className="bg-[#FF6B2C] pt-1 px-2 text-xs font-medium pb-1">{item?.Status}</span>
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <h5 className="block font-sans text-xl text-[#FF6B2C] font-medium tracking-normal w-60 text-blue-gray-900">{item?.name}</h5>
                                                <p className='text-gray-500 word-index-4'>{item?.title}</p>
                                                <div className="items-center pt-3 flex justify-between mb-3">
                                                    <div className='flex gap-1 items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M15.5766 13.8983L15.9282 11.7497C16.0058 11.2757 16.0446 11.0386 15.9175 11.0039C15.7905 10.9692 15.6021 11.1654 15.2254 11.5577L10 17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.42338 10.1017L8.07175 12.2503C7.99417 12.7243 7.95538 12.9614 8.08246 12.9961C8.20954 13.0308 8.39789 12.8346 8.77459 12.4423L14 7" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#777777" stroke-width="1.5" />
                                                        </svg>
                                                        <p>{item?.sqft} sqft</p>
                                                    </div>
                                                    <div className='flex gap-1 items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M22 17.5H2" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                        </svg>
                                                        <p>{item?.bed} bed</p>
                                                    </div>
                                                    <div className='flex gap-1 items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M6 20L5 21M18 20L19 21" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M2 12H22" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M8 6L10.5 4" stroke="#777777" stroke-width="1.5" stroke-linecap="round" />
                                                        </svg>
                                                        <p>{item?.bath} bath</p>
                                                    </div>
                                                </div>
                                                <div class="divide-y-2  py-2 divide-dashed">
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <div className='flex pt-2 justify-between items-center'>
                                                    <h1 className='text-[28px] font-bold font-poppins'>${item?.price}</h1>
                                                    <Link to={`/menudetails/${item?._id}`}>
                                                        <div className='hover:bg-[#FF6B2C] bg-black p-2 rounded-full'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M17 7L6 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <h1 className='border-b border-[1px] border-b-black my-10 mb-14'></h1>

                            {/* All review section */}
                            <AgentReviewSection></AgentReviewSection>
                            <h1 className='border-b border-[1px] border-b-black my-10 mb-14'></h1>

                            {/* Leave A Reply section */}
                            <AgentLeaveSection></AgentLeaveSection>

                        </div>
                    </div>

                    <div className='col-span-1'>
                        {/* Schedule Tour */}
                        <div className='ml-12 p-6' style={{ backgroundImage: `url(${bgprofile})` }}>
                            <div className='bg-white rounded-xl p-4 justify-center'>
                                <h1 className='font-poppins text-xl'>Contact Form</h1>
                                <div className='pt-4'>
                                    <label for="email" className='text-gray-500 text-sm'>Your Email*</label>
                                    <input type="email" name="email" id="email" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 mt-1" placeholder="Enter mail address" required />
                                </div>
                                <div className='pt-4'>
                                    <label for="email" className='text-gray-500 text-sm'>Your Phone*</label>
                                    <input type="email" name="email" id="email" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 mt-1" placeholder="Your phone number" required />
                                </div>
                                <div className='pt-4'>
                                    <label for="email" className='text-gray-500 text-sm'>Message**</label>
                                    <textarea placeholder="Write your message here..." name="message" className="border-[1px] border-black rounded-lg pl-3 pt-3 pb-12 w-full mt-1" ></textarea>
                                </div>
                                <button className='font-poppins w-full mt-4 py-[10px] rounded-lg text-white bg-[#FF6625]'>INQUIRY</button>
                                <button className='font-poppins w-full mt-4 py-[8px] rounded-lg border-2 hover:border-[#FF6625] hover:text-white hover:bg-[#FF6625]'>CALL NOW</button>
                            </div>

                            {/* search agent */}
                            <div className='bg-white rounded-xl p-4 mt-6 justify-center'>
                                <h1 className='font-poppins text-xl'>Contact Form</h1>
                                <div className='pt-4'>
                                    <label for="email" className='text-gray-500 text-sm'>Agent Name</label>
                                    <input type="email" name="email" id="email" className="border-b py-[10px] border-black w-full" placeholder="name" required />
                                </div>
                                <div className='pt-4'>
                                    <label for="text" className='text-gray-500 text-sm'>Keywords</label>
                                    <select className="border-b py-[10px] border-black w-full">
                                        <option disabled selected>select type</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                    </select>
                                </div>
                                <div className='pt-4'>
                                    <label for="text" className='text-gray-500 text-sm'>Location</label>
                                    <select className="border-b py-[10px] border-black w-full">
                                        <option disabled selected>select</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                    </select>
                                </div>
                                <button className='font-poppins w-full mt-4 py-[10px] rounded-lg text-white bg-[#FF6625]'>SEARCH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start your journey section */}
            <StyJurny></StyJurny>
        </div>
    )
}

export default AgentDetails