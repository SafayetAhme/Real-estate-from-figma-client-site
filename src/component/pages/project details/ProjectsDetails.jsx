import React from 'react'
import UseProjects from '../../hooks/use projects/UseProjects'
import { useParams } from 'react-router-dom';
import footerbg from '../../../../public/image/footerbg.png'
import StyJurny from '../../shared/start your jurny/StyJurny';


const ProjectsDetails = () => {
    const [projects] = UseProjects();
    const { id } = useParams();
    const project = projects?.find(project => project?._id === id);
    console.log(project);

    return (
        <div>
            <div className='container mx-auto py-12 gap-12 grid lg:grid-cols-2  items-start'>
                <div className=''>
                    <img className='w-full h-[640px] object-cover' src={project?.image?.[0]} alt="" />
                    <img className='w-full h-[440px] pt-8 object-cover' src={project?.image?.[1]} alt="" />
                    <img className='w-full h-[440px] pt-8 object-cover' src={project?.image?.[2]} alt="" />
                </div>
                <div>
                    <h1 className="border w-fit font-poppins px-2 py-1">{project?.category}</h1>
                    <h1 className="font-poppins text-5xl font-semibold w-[500px] pt-4 leading-[62px]">{project?.name}</h1>
                    <p className="text-base leading-[27px] pt-6 font-poppins w-[500px]">{project?.title}</p>
                    <p className="text-2xl font-semibold pt-6 font-poppins ">Project Details</p>

                    <div className='mt-4 p-5' style={{ backgroundImage: `url(${footerbg})` }}>
                        <div className='bg-white p-6'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                        <path d="M12 8V12L14 14" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                        <path d="M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <h1 className='font-poppins text-lg font-medium'>DATE</h1>
                                        <h1 className='font-poppins text-sm text-gray-500 pt-0'>{project?.date}</h1>
                                    </div>
                                </div>
                                <h1 className='font-[normal] text-3xl text-gray-300'>01</h1>
                            </div>
                            <div className='flex border-y-[1px] border-black my-6 py-6 items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                        <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                        <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#2f2f2f" strokeWidth="1.5" />
                                    </svg>
                                    <div>
                                        <h1 className='font-poppins text-lg font-medium'>CLIENT NAME</h1>
                                        <h1 className='font-poppins text-sm text-gray-500 pt-0'>{project?.clientname}</h1>
                                    </div>
                                </div>
                                <h1 className='font-[normal] text-3xl text-gray-300'>02</h1>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="#2f2f2f" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M12.8824 12C14.0519 12 15 13.0074 15 14.25C15 15.4926 14.0519 16.5 12.8824 16.5H10.4118C9.74625 16.5 9.4135 16.5 9.20675 16.2972C9 16.0945 9 15.7681 9 15.1154V12M12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88462V12M12.8824 12H9" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <h1 className='font-poppins text-lg font-medium'>PROJECT TYPE</h1>
                                        <h1 className='font-poppins text-sm text-gray-500 pt-0'>{project?.type}</h1>
                                    </div>
                                </div>
                                <h1 className='font-[normal] text-3xl text-gray-300'>03</h1>
                            </div>
                        </div>
                    </div>

                    <p className="text-base leading-[27px] pt-8 font-poppins w-[560px]">{project?.details}</p>
                    <div className='flex items-center gap-3 justify-start pt-8'>
                        <h1 className='font-poppins text-gray-400'>Share:</h1>
                        <a href={project?.agentfacebook}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href={project?.agenttwiter}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <path d="M14.4 7C13.0745 7 12 8.11929 12 9.5C12 9.71132 12.0252 9.91652 12.0726 10.1125C11.9494 10.1208 11.8252 10.125 11.7 10.125C9.67943 10.125 7.90441 8.71734 6.89216 7.06577C6.70202 7.73853 6.6 8.4506 6.6 9.1875C6.6 11.2539 7.40225 13.4376 8.7 14.7941C8.7 15.5294 6.9 15.9021 6 15.9966C7.05902 16.6348 8.28857 17 9.6 17C13.4885 17 16.657 13.7891 16.7953 9.77373L18 7.3125L15.9875 7.625C15.5644 7.23602 15.0087 7 14.4 7Z" stroke="#2f2f2f" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href={project?.agentinstagram}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#2f2f2f" strokeWidth="1.5" />
                                <path d="M17.5078 6.5L17.4988 6.5" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href={project?.agentlinkedin}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <path d="M7 10V17" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                <path d="M7.00801 7L6.99902 7" stroke="#2f2f2f" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* start your journey */}
            <StyJurny></StyJurny>
        </div>
    )
}

export default ProjectsDetails