import Prohero from './Prohero'
import probg from '../../../../public/image/probg.png'
import '../../shared/navbar/Navbar.css'
import Slider from 'react-slider';
import { useState } from 'react';
import { IoIosMenu, IoMdMenu } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import StyJurny from '../../shared/start your jurny/StyJurny';
import UseMenus from '../../hooks/usemenus/UseMenus';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../hooks/useauth/UseAuth';
import UseAddtolove from '../../hooks/use add to love/UseAddtolove';
import UseAxiosPublic from '../../hooks/useAxiospublic/UseAxiosPublic';
import Swal from 'sweetalert2';
import { CgMenuGridR } from "react-icons/cg";
import NotFount from '../../shared/not found page/NotFount';



const MIN = 100;
const MAX = 12000;

const Property = () => {
    const [menus] = UseMenus();
    const [menu, setMenu] = useState(menus)
    const data = useLoaderData();
    const { user } = UseAuth();
    const [, refetch] = UseAddtolove();
    const location = useLocation();
    const nagigate = useNavigate()
    const axiosSecure = UseAxiosPublic();

    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm)

    // 
    const [isLoved, setIsLoved] = useState(false);

    // 
    const [handelGrid, setHandelGrid] = useState(false)

    // for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordesPerpage = 4;
    const lastIndex = currentPage * recordesPerpage;
    const firstIndex = lastIndex - recordesPerpage;
    const records = menus.slice(firstIndex, lastIndex);
    const npage = Math.ceil(menus.length / recordesPerpage)
    const numbers = [...Array(npage + 1).keys()].slice(1)



    // filterData
    const filterData = (cata) => {
        const filteredCategory = menus?.filter(menu => menu.category === cata);
        setMenu(filteredCategory);
    }

    // filterStatus
    const filterStatus = (cata) => {
        const filteredCategory = menus?.filter(menu => menu.Status === cata);
        setMenu(filteredCategory);
    }

    // bed filter
    const filterbed = (cata) => {
        const filteredCategory = menus?.filter(menu => menu.bed === cata);
        setMenu(filteredCategory);
    }

    // bathroom filter
    const filterbath = (cata) => {
        const filteredCategory = menus?.filter(menu => menu.bath === cata);
        setMenu(filteredCategory);
    }


    // filterDataRating
    const filtersqf = (cata) => {
        const filtercategory = menus?.filter(item => item?.sqf === cata);
        setMenu(filtercategory);
    }

    // filterDataSize
    const filterPRICERANGE = (cata) => {
        const filtercategory = menus?.filter(item => item?.price === cata);
        setMenu(filtercategory);
    }

    // filterDataSize
    const filteramenities = (cata) => {
        const filtercategory = menus?.filter(item => item?.amenities === cata);
        setMenu(filtercategory);
    }

    // handelSearch
    const handelSearch = (e) => {
        const filtercategory = menus?.filter(item => item?.name.includes(e));
        setMenu(filtercategory);
    }


    // handle add to loce
    const handleAddToLove = (menu) => {
        if (user && user.email) {
            const addtocartitem = {
                menuId: menu?._id,
                email: user?.email,
                image: menu?.image,
                price: menu?.price,
                name: menu?.name,
                title: menu?.title,
            }

            axiosSecure.post('/addLove', addtocartitem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        alert("nice")
                        refetch();
                        setIsLoved(true); // Set isLoved to true when item is added to love
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            Swal.fire({
                title: "if you want to add item please login",
                text: "please",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sign In"
            }).then((result) => {
                if (result.isConfirmed) {
                    nagigate("/signin", { state: { from: location } })
                }
            });
        }
    }



    return (
        <div>
            <Prohero></Prohero>
            <p className="divider divider-neutral"></p>
            {/* section */}
            <div className="grid lg:grid-cols-3 pt-10 container mx-auto">
                <div className='col-span-1 h-fit p-4' style={{ backgroundImage: `url(${probg})` }}>
                    <div className='bg-white rounded-2xl border-[2px] border-black'>
                        <div className='px-6 pt-6'>
                            <form onChange={(e) => setSearch(e.target.value)}>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                    }} type="search" id="default-search" class="block w-full p-4 px-10 border rounded-xl" placeholder="Search..." required />
                                </div>
                            </form>

                        </div>
                        <div className=' justify-between px-6 pt-6 -mb-3  items-end'>
                            <div className='pb-2'>
                                <h1 className='text-lg font-poppins font-normal text-black'>I’m looking to...</h1>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-2 mb-4">
                                <button onClick={() => filterStatus("FOR RENT")} className="text-base font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">FOR RENT</button>
                                <button onClick={() => filterStatus("FOR SELL")} className="text-base font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">FOR SELL</button>
                            </div>
                        </div>
                        <p className="divider px-6 divider-neutral"></p>

                        <div className=' justify-between px-6 -mb-3  items-end'>
                            <div className='pb-2'>
                                <h1 className='text-lg font-poppins text-black'>Categories</h1>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-2 mb-4">
                                <button onClick={() => filterData("Apartment")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">Apartment</button>
                                <button onClick={() => filterData("Property")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">Property</button>
                                <button onClick={() => filterData("Villa")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">Villa</button>
                            </div>
                        </div>
                        <p className="divider px-6 divider-neutral"></p>

                        {/*  */}
                        <div className='px-6'>
                            <div className=' justify-between w-full -mb-3 items-end'>
                                <div className=''>
                                    <h1 className='text-lg font-poppins text-black pb-2'>Bedroom</h1>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2 mb-4">
                                    <button onClick={() => filterbed("02")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">02</button>
                                    <button onClick={() => filterbed("03")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">03</button>
                                    <button onClick={() => filterbed("04")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">04</button>
                                </div>
                            </div>
                            <p className="divider divider-neutral"></p>
                        </div>

                        <div className='px-6'>
                            <div className=' w-full justify-between items-end'>
                                <div className=''>
                                    <h1 className='text-lg font-poppins text-black pb-2'>Bath</h1>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-2 mb-4">
                                    <button onClick={() => filterbath("01")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">01</button>
                                    <button onClick={() => filterbath("02")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">02</button>
                                    <button onClick={() => filterbath("03")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">03</button>
                                    <button onClick={() => filterbath("04")} className="text-lg font-poppins border-2 px-3 py-1 hover:border-black hover:bg-black hover:text-white">04</button>
                                </div>
                            </div>
                            <p className="divider mt-1 divider-neutral"></p>
                        </div>

                        {/*  */}
                        <div className='px-6'>
                            <div className=' justify-between w-full -mb-3 items-end'>
                                <div className=''>
                                    <h1 className='text-lg font-poppins text-black pb-2'>PRICE RANGE</h1>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2 mb-4">
                                    <button onClick={() => filterPRICERANGE("34,900.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">34,900.00</button>
                                    <button onClick={() => filterPRICERANGE("27,900.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">27,900.00</button>
                                    <button onClick={() => filterPRICERANGE("21,900.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">21,900.00</button>
                                    <button onClick={() => filterPRICERANGE("23,900.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">23,900.00</button>
                                    <button onClick={() => filterPRICERANGE("25,900.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">25,900.00</button>
                                    <button onClick={() => filterPRICERANGE("42,800.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">42,800.00</button>
                                    <button onClick={() => filterPRICERANGE("33,200.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">33,200.00</button>
                                    <button onClick={() => filterPRICERANGE("37,200.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">37,200.00</button>
                                    <button onClick={() => filterPRICERANGE("39,200.00")} className="text-base font-poppins border-2 px-0 py-1 hover:border-black hover:bg-black hover:text-white">39,200.00</button>
                                </div>
                            </div>
                            <p className="divider divider-neutral"></p>
                        </div>

                        {/* Amenities */}
                        <div className='px-6'>
                            <h1 className='font-poppins pt-2 text-lg font-bold'>AMENITIES</h1>
                            <div className='grid gap-3 pb-7 lg:grid-cols-2'>
                                <div>
                                    <div className='flex pt-4 items-center gap-2'>
                                        <input onClick={() => filteramenities("wifi")} type="checkbox" name="radio-1" className="checkbox" />
                                        <h1 className='font-poppins text-[14px] font-medium'>wifi</h1>
                                    </div>
                                    <div className='flex pt-4 items-center gap-2'>
                                        <input onClick={() => filteramenities("Parking")} type="checkbox" name="radio-1" className="checkbox" />
                                        <h1 className='font-poppins text-[14px] font-medium'>Parking</h1>
                                    </div>
                                    <div className='flex pt-4 items-center gap-2'>
                                        <input onClick={() => filteramenities("Garages")} type="checkbox" name="radio-1" className="checkbox" />
                                        <h1 className='font-poppins text-[14px] font-medium'>Garages</h1>
                                    </div>
                                    <div className='flex pt-4 items-center gap-2'>
                                        <input onClick={() => filteramenities("A/C & Heating")} type="checkbox" name="radio-1" className="checkbox" />
                                        <h1 className='font-poppins text-[14px] font-medium'>A/C & Heating</h1>
                                    </div>

                                </div>
                                <div>
                                    <div className='flex pt-4 items-center gap-2'>
                                        <input onClick={() => filteramenities("Garden")} type="checkbox" name="radio-1" className="checkbox" />
                                        <h1 className='font-poppins text-[14px] font-medium'>Garden</h1>
                                    </div>
                                    <div className='flex pt-4 items-center gap-2'>
                                        <input onClick={() => filteramenities("Disabled Access")} type="checkbox" name="radio-1" className="checkbox" />
                                        <h1 className='font-poppins text-[14px] font-medium'>Disabled Access</h1>
                                    </div>
                                    <div className='flex pt-4 items-center gap-2'>
                                        <input onClick={() => filteramenities("Pet Friendly")} type="checkbox" name="radio-1" className="checkbox" />
                                        <h1 className='font-poppins text-[14px] font-medium'>Pet Friendly</h1>
                                    </div>
                                    <div className='flex pt-4 items-center gap-2'>
                                        <input onClick={() => filteramenities("Swimming Pool")} type="checkbox" name="radio-1" className="checkbox" />
                                        <h1 className='font-poppins text-[14px] font-medium'>Swimming Pool</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SQFT */}
                        <div className='px-6 mb-6'>
                            <h1 className='font-poppins text-lg font-bold pb-0'>SQFT</h1>
                            <div className='flex pt-2 items-center'>
                                <button onClick={() => filtersqf("Min")} className='border-[1px] py-2 w-full border-black rounded-lg text-center font-medium'>MIN</button>
                                <div className='px-4'>-</div>
                                <button onClick={() => filtersqf("Max")} className='border-[1px] py-2 w-full border-black rounded-lg text-center font-medium'>MAX</button >
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 lg:pl-12'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-poppins'>Showing<span className='font-bold'>{menus?.length}</span></h1>
                        <div className='flex items-center gap-2'>
                            <div className='lg:flex lg:pt-0 md:pt-0 sm:pt-0 pt-8'>
                                <h1 className='pt-3 pr-2'>Sort by:</h1>
                                <div className='flex pt-2 items-center gap-2'>
                                    <button onClick={() => filtersqf("Min")} className='border-[1px] py-1 px-4 w-full border-black rounded-lg text-center font-medium'>Populer</button>
                                    <button onClick={() => filtersqf("Max")} className='border-[1px] py-1 px-4 w-full border-black rounded-lg text-center font-medium'>Normal</button >
                                </div>
                                <div className='flex pl-2 lg:pt-2 md:pt-0 sm:pt-0 pt-4 items-center gap-2'>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <CgMenuGridR onClick={() => setHandelGrid(false)} className={`${!handelGrid ? 'p-1 text-4xl border bg-black text-white' : 'p-1 text-4xl border'}`} />
                                        </div>
                                        <div>
                                            <IoMdMenu onClick={() => setHandelGrid(true)} className={`${!handelGrid ? 'p-1 text-4xl border ' : 'p-1 text-4xl border bg-black text-white'}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        menus?.length > 0 ? <div>
                            <div>
                                {
                                    menu?.length > 0 ?
                                        <div className={`${handelGrid ? '' : 'grid items-center gap-6 pt-6 md:grid-cols-2 pb-14'}`}>
                                            {
                                                menu?.filter((item) => {
                                                    if (searchTerm === "") {
                                                        return item;
                                                    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                        return item;
                                                    }
                                                }).map((item) =>
                                                    <div key={item.id} className="relative flex w-full max-w-[23rem] flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
                                                        <div className="relative mx-3 mt-3 overflow-hidden text-white shadow-xl rounded-lg bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                                            <img
                                                                src={item?.image}
                                                                alt="ui/ux review check" />
                                                            <div
                                                                className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                                                            </div>
                                                            <button className="!absolute top-3 left-3">
                                                                <span className="bg-[#FF6B2C] px-2 py-[4px] text-xs font-medium rounded-full pb-1">{item?.Status}</span>
                                                            </button>
                                                            <button onClick={() => handleAddToLove(item)} className="!absolute top-3 right-3">
                                                                {isLoved ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                                                            </button>
                                                        </div>
                                                        <div className="p-5">
                                                            <h5 className="block font-sans text-xl text-[#FF6B2C] font-medium tracking-normal w-60 text-blue-gray-900">{item?.name}</h5>
                                                            <p className='text-gray-500 word-index-4'>{item?.title}</p>
                                                            <div className="items-center pt-3 flex justify-between mb-3">
                                                                <div className='flex gap-1 items-center'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M15.5766 13.8983L15.9282 11.7497C16.0058 11.2757 16.0446 11.0386 15.9175 11.0039C15.7905 10.9692 15.6021 11.1654 15.2254 11.5577L10 17" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M8.42338 10.1017L8.07175 12.2503C7.99417 12.7243 7.95538 12.9614 8.08246 12.9961C8.20954 13.0308 8.39789 12.8346 8.77459 12.4423L14 7" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#777777" strokeWidth="1.5" />
                                                                    </svg>
                                                                    <p>{item?.sqft} sqft</p>
                                                                </div>
                                                                <div className='flex gap-1 items-center'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M22 17.5H2" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                    </svg>
                                                                    <p>{item?.bed} bed</p>
                                                                </div>
                                                                <div className='flex gap-1 items-center'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M6 20L5 21M18 20L19 21" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M2 12H22" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M8 6L10.5 4" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
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
                                                                            <path d="M17 7L6 18" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" />
                                                                            <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div> :
                                        <div className={`${handelGrid ? '' : 'grid items-center gap-6 pt-6 md:grid-cols-2 pb-14'}`}>
                                            {
                                                records?.filter((item) => {
                                                    if (searchTerm === "") {
                                                        return item;
                                                    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                        return item;
                                                    }
                                                }).map((item) =>
                                                    <div key={item.id} className="relative flex w-full max-w-[23rem] flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
                                                        <div className="relative mx-3 mt-3 overflow-hidden text-white shadow-xl rounded-lg bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                                            <img
                                                                src={item?.image}
                                                                alt="ui/ux review check" />
                                                            <div
                                                                className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                                                            </div>
                                                            <button className="!absolute top-3 left-3">
                                                                <span className="bg-[#FF6B2C] px-2 py-[4px] text-xs font-medium rounded-full pb-1">{item?.Status}</span>
                                                            </button>
                                                            <button onClick={() => handleAddToLove(item)} className="!absolute top-3 right-3">
                                                                {isLoved ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                                                            </button>
                                                        </div>
                                                        <div className="p-5">
                                                            <h5 className="block font-sans text-xl text-[#FF6B2C] font-medium tracking-normal w-60 text-blue-gray-900">{item?.name}</h5>
                                                            <p className='text-gray-500 word-index-4'>{item?.title}</p>
                                                            <div className="items-center pt-3 flex justify-between mb-3">
                                                                <div className='flex gap-1 items-center'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M15.5766 13.8983L15.9282 11.7497C16.0058 11.2757 16.0446 11.0386 15.9175 11.0039C15.7905 10.9692 15.6021 11.1654 15.2254 11.5577L10 17" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M8.42338 10.1017L8.07175 12.2503C7.99417 12.7243 7.95538 12.9614 8.08246 12.9961C8.20954 13.0308 8.39789 12.8346 8.77459 12.4423L14 7" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#777777" strokeWidth="1.5" />
                                                                    </svg>
                                                                    <p>{item?.sqft} sqft</p>
                                                                </div>
                                                                <div className='flex gap-1 items-center'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M22 17.5H2" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                    </svg>
                                                                    <p>{item?.bed} bed</p>
                                                                </div>
                                                                <div className='flex gap-1 items-center'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M6 20L5 21M18 20L19 21" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        <path d="M2 12H22" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
                                                                        <path d="M8 6L10.5 4" stroke="#777777" strokeWidth="1.5" stroke-linecap="round" />
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
                                                                            <path d="M17 7L6 18" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" />
                                                                            <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                }
                            </div>
                        </div> : <NotFount></NotFount>
                    }
                </div>
            </div>
            {/* pagination */}



            <nav>
                <ul className="flex justify-center gap-2 py-16 pagination">
                    <li className="page-item">
                        <a className="px-6 py-2 font-bold border-2 page-link hover:bg-orange-600 hover:text-white hover:border-orange-600"
                            onClick={prePage}
                        >Prev</a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a className="px-5 py-2 font-bold border-2 page-link hover:bg-orange-600 hover:text-white hover:border-orange-600"
                                    onClick={() => changeCPage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a className="px-6 py-2 font-bold border-2 page-link hover:bg-orange-600 hover:text-white hover:border-orange-600"
                            onClick={nextPage}
                        >Next</a>
                    </li>
                </ul>
            </nav>
            {/* StyJurny */}
            <StyJurny></StyJurny>
        </div>
    )

    // for pagination
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
}

export default Property