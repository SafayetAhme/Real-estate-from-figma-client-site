import ex from '../../../../public/image/ex.png'
import lu from '../../../../public/image/lu.png'
import layot from '../../../../public/image/layot.png'
import { Link } from 'react-router-dom'

const Exclusive = () => {
    return (
        <div className="container mt-6 mx-auto overflow-y-scroll bg-cover bg-fixed  " style={{ backgroundImage: `url(${ex})` }}>
            <div className='grid mx-auto items-center lg:grid-cols-2 lg:p-24 md:p-12 sm:p-12 p-8'>
                <div>
                    <div className='text-[40px] font-bold font-poppins'>
                        <div class="text-white lg:w-[400px]">Exclusive Monthly Deal for you.</div>
                        <img className='lg:w-44 md:w-40 w-0 ml-[170px] -mt-16' src={layot} alt="" />
                    </div>
                    <p className='text-lg pt-16 lg:w-[400px] font-thin text-white '>Don't miss out on this personalized monthly exclusive offer for you.</p>
                    <div className="pt-8">
                        <Link to="/Agency">
                            <button className="flex rounded-full border-2 border-dashed border-white bg-[#FF6725] px-6 py-[10px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                <p className="font-medium">More Details</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='lg:pt-0 md:pt-12 sm:pt-12 pt-8'>
                    <img src={lu} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Exclusive