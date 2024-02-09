import Prohero from './Prohero'
import probg from '../../../../public/image/probg.png'
import '../../shared/navbar/Navbar.css'
import Slider from 'react-slider';
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import StyJurny from '../../shared/start your jurny/StyJurny';
import UseMenus from '../../hooks/usemenus/UseMenus';
import { Link, useLoaderData } from 'react-router-dom';



const MIN = 100;
const MAX = 12000;

const Property = () => {
    const [menus] = UseMenus();
    const [menu, setMenu] = useState(menus)
    // const { user } = UseAuth();
    const data = useLoaderData();
    const [menusdetail, setMenusdetail] = useState(data)
    const [menusdetails, setMenusdetails] = useState({})
    // const axiosSecure = UserAxiosSecure();


    // for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordesPerpage = 4;
    const lastIndex = currentPage * recordesPerpage;
    const firstIndex = lastIndex - recordesPerpage;
    const records = menus.slice(firstIndex, lastIndex);
    const npage = Math.ceil(menus.length / recordesPerpage)
    const numbers = [...Array(npage + 1).keys()].slice(1)



    const filterValue = (e) => {
        const rangeValues = e?.split('-');
        const firstValue = rangeValues ? rangeValues[0] : null;
        const secondValue = rangeValues ? rangeValues[1] : null;
        const filteredArray = menus?.filter(number => number?.price >= firstValue && number?.price <= secondValue);
        setMenu(filteredArray);
    }
    const allPrice = () => {
        setMenu(menus);
    }

    // const [data, setData] = useState([])

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

    const handelSort = (e) => {
        if (e === 'high') {
            const filtercategory = menus?.sort((a, b) => b?.price - a?.price);
            setMenu(filtercategory)
        } else if (e === 'low') {
            const filtercategory = menus?.sort((a, b) => a?.price - b?.price);
            setMenu(filtercategory)
        }
    }


    const handleaddtoCart = (item) => {
        const email = user?.email;
        const { _id, ...dataWithoutId } = item;
        const data = { ...dataWithoutId, email };
        console.log(data)
        axiosSecure.post('/addtocart', data)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "Item successfully added",
                    icon: "success"
                });
                document.getElementById('my_modal_10').close()
            })
    }

    const [handelGrid, setHandelGrid] = useState(false)

    console.log(menus)

    const [search, setSearch] = useState('');
    console.log(search)

    return (
        <div>
            <Prohero></Prohero>
            <p className="divider divider-neutral"></p>
            {/* section */}
            <div className="grid lg:grid-cols-3 pt-10 container mx-auto">
                <div className='col-span-1 h-fit p-4' style={{ backgroundImage: `url(${probg})` }}>
                    <div className='bg-white rounded-2xl border-[2px] border-black'>
                        <div className='px-6 pt-6'>
                            <form >
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input onChange={(e) => search(e.target.value)} type="search" id="default-search" class="block w-full p-4 px-10 border rounded-xl" placeholder="Search..." required />
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

                        {/* search button */}
                        {/* <div className='px-6'>
                            <button className='bg-[#FF6725] w-full gap-2 py-3 rounded-lg text-white justify-center mb-6 px-6 flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.5 17.5L22 22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" />
                                </svg>
                                <h1 className='font-poppins text-xl font-medium'>SEARCH</h1>
                            </button>
                        </div> */}

                        {/* last 2 option */}
                        {/* <div className='flex justify-between'>
                            <div className=' w-full gap-2 text-black justify-center mb-6 flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.9843 5C21.0344 4.28926 20.9732 3.83888 20.672 3.5074C20.2111 3 19.396 3 17.7657 3H6.23433C4.60404 3 3.7889 3 3.32795 3.5074C2.86701 4.0148 2.96811 4.8008 3.17033 6.3728C3.22938 6.8319 3.3276 7.09253 3.62734 7.44867C4.59564 8.59915 6.36901 10.6456 8.85746 12.5061C9.08486 12.6761 9.23409 12.9539 9.25927 13.2614C9.53961 16.6864 9.79643 19.0261 9.93278 20.1778C10.0043 20.782 10.6741 21.2466 11.226 20.8563C12.1532 20.2006 13.8853 19.4657 14.1141 18.2442C14.1986 17.7934 14.3136 17.0803 14.445 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.0132 6L14.5139 8.08437L15.3434 7.56607C15.9343 7.11729 16.6687 6.85119 17.4646 6.85119C19.4172 6.85119 21 8.45151 21 10.4256C21 12.3997 19.4172 14 17.4646 14C15.7543 14 14.3276 12.772 14 11.1405" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className='font-poppins text-base font-medium'>Reset Filter</h1>
                            </div>
                            <div className=' w-full gap-2 text-black justify-center mb-6 flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className='font-poppins text-base font-medium'>Save Search</h1>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='col-span-2 pl-12'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-poppins'>Showing<span className='font-bold'>{menus?.length}</span></h1>
                        <div className='flex items-center gap-2'>
                            <h1>Sort by:</h1>
                            <div className='flex pt-2 items-center gap-2'>
                                <button onClick={() => filtersqf("Min")} className='border-[1px] py-1 px-4 w-full border-black rounded-lg text-center font-medium'>Populer</button>
                                <button onClick={() => filtersqf("Max")} className='border-[1px] py-1 px-4 w-full border-black rounded-lg text-center font-medium'>Normal</button >
                            </div>
                            <div className='flex items-center gap-2'>
                                <select className="border-2 rounded-full pb-1 py-0 px-1">
                                    <option>
                                        <input onClick={() => filteramenities("Garden")} type="checkbox" name="radio-1" className="checkbox" />asdf
                                    </option>
                                    <option>Normal</option>
                                </select>
                                <div className='hover:text-white hover:bg-black border-2 hover:border-black rounded-full p-1'>
                                    <IoIosMenu className='w-6 h-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        menu?.length > 0 ?
                            <div className='pt-4 grid lg:grid-cols-2 gap-5'>
                                {
                                    menu?.map((item) =>
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
                                                <button className="!absolute top-3 right-3">
                                                    <FaRegHeart calcMode="" />
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
                            </div> :
                            <div className='pt-4 grid lg:grid-cols-2 gap-5'>
                                {
                                    records?.map((item) =>
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
                                                <button className="!absolute top-3 right-3">
                                                    <FaRegHeart calcMode="" />
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