import ex from '../../../../public/image/ex.png'
import lu from '../../../../public/image/lu.png'
import layot from '../../../../public/image/layot.png'
import { Link } from 'react-router-dom'

const Exclusive = () => {
    return (
        <div className="container mt-6 mx-auto overflow-y-scroll bg-cover bg-fixed  " style={{ backgroundImage: `url(${ex})` }}>
            <div className='grid lg:grid-cols-2 p-24'>
                <div>
                    <div className='text-[40px] font-bold font-poppins'>
                        <div class="text-white">Exclusive Monthly <br /> Deal for you.</div>
                        <img className='lg:w-44 md:w-40 w-0 ml-[170px] -mt-16' src={layot} alt="" />
                    </div>
                    <p className='text-lg pt-16 font-thin text-white '>Don't miss out on this personalized monthly <br /> exclusive offer for you.</p>
                    <div className="pt-8">
                        <Link to="/Agency">
                            <button className="flex rounded-full border-2 border-dashed border-white bg-[#FF6725] lg:px-6 md:px-6 sm:px-6 px-2 py-[10px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                <p className="font-medium">More Details</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={lu} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Exclusive