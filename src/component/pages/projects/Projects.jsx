import React, { useState } from 'react'
import ProjectsHero from './ProjectsHero'
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from 'react-icons/fa';
import StyJurny from '../../shared/start your jurny/StyJurny';
import UseProjects from '../../hooks/use projects/UseProjects';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects] = UseProjects();
    const [project, setProject] = useState(projects)

    const FilterCategory = (cate) => {
        let CategoryFilter;
        if (cate === "") {
            CategoryFilter = projects; // If category is empty, show all projects
        } else {
            CategoryFilter = projects.filter(item => item?.category === cate);
        }
        setProject(CategoryFilter);
    }


    return (
        <div>
            {/* project hero */}
            <ProjectsHero></ProjectsHero>

            {/* main content */}
            <div className='container pb-4 mx-auto'>

                {/* TOP section */}
                <div className="pt-16 pb-6">
                    <hr />
                    <div className='flex justify-between py-3 items-center'>
                        <div className='flex items-center gap-6'>
                            <button onClick={() => FilterCategory("")} className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>All</button>
                            <button onClick={() => FilterCategory("Apartments")} className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>APARTMENTS</button>
                            <button onClick={() => FilterCategory("House")} className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>HOUSE</button>
                            <button onClick={() => FilterCategory("VILLA")} className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>VILLA</button>
                            <button onClick={() => FilterCategory("FLAT")} className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>FLAT</button>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h1>Share:</h1>
                            <div className='hover:text-white border-2 hover:bg-black hover:border-black  rounded-full p-1'>
                                <CiFacebook className='w-7 h-7' />
                            </div>
                            <div className='hover:text-white hover:bg-black border-2 hover:border-black  rounded-full p-1'>
                                <CiTwitter className='w-7 h-7' />
                            </div>
                            <div className='hover:text-white hover:bg-black border-2 hover:border-black rounded-full p-1'>
                                <FaInstagram className='w-7 h-7' />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

                {/* card section */}
                <div>
                    {
                        project?.length > 0 ? <div>
                            <div>
                                {
                                    project?.map(item =>
                                        <div key={item?.id} className="grid pb-12 lg:grid-cols-2 gap-16 items-center">
                                            <div className="relative">
                                                <img className="w-full h-[440px]" src={item?.image} alt="" />
                                                <h1 className="bg-white absolute top-3 ml-3 text-black px-3 py-1">{item?.time}</h1>
                                            </div>
                                            <div>
                                                <h1 className="border w-fit font-poppins px-2 py-1">{item?.category}</h1>
                                                <h1 className="font-poppins text-4xl font-semibold w-[500px] pt-4 leading-[48px]">{item?.name}</h1>
                                                <p className="text-lg pt-4 font-poppins w-[520px]">{item?.title}</p>
                                                <Link to={`/projectsDetails/${item?._id}`}>
                                                    <div className="hover:bg-[#FF6625] hover:border-[#FF6625]  hover:text-white border p-6 mt-8 rounded-full w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                            <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div> :
                            <div>
                                {
                                    projects?.map(item =>
                                        <div key={item?.id} className="grid pb-12 lg:grid-cols-2 gap-16 items-center">
                                            <div className="relative">
                                                <img className="w-full h-[440px]" src={item?.image} alt="" />
                                                <h1 className="bg-white absolute top-3 ml-3 text-black px-3 py-1">{item?.time}</h1>
                                            </div>
                                            <div>
                                                <h1 className="border w-fit font-poppins px-2 py-1">{item?.category}</h1>
                                                <h1 className="font-poppins text-4xl font-semibold w-[500px] pt-4 leading-[48px]">{item?.name}</h1>
                                                <p className="text-lg pt-4 font-poppins w-[520px]">{item?.title}</p>
                                                <Link to={`/projectsDetails/${item?._id}`}>
                                                    <div className="hover:bg-[#FF6625] hover:border-[#FF6625]  hover:text-white border p-6 mt-8 rounded-full w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                            <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                    }
                </div>
            </div>
            {/* start your journey section */}
            <StyJurny></StyJurny>
        </div>
    )
}

export default Projects