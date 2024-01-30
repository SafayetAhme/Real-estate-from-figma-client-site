import { Link } from 'react-router-dom'
import logo from '../../../../public/image/logo.png'
import footerbg from '../../../../public/image/footerbg.png'
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="">
            <p className="divider divider-neutral"></p>
            <div className=" lg:px-28 -mt-6 container mx-auto gap-10 grid lg:grid-cols-5">
                <div className="col-span-2 p-5" style={{ backgroundImage: `url(${footerbg})` }}>
                    <div className='bg-white px-4 py-8'>
                        <Link href={"/"} className="text-2xl font-bold flex gap-2 items-center  lg:pr-8 font-mono"><img className="w-[50px]" src={logo} alt="" />homy</Link>
                        <p className='pt-5 font-poppins text-gray-600 leading-7'>11910 Clyde Rapid Suite 70, Willyand, <br /> Virginia, United States</p>
                        <p className='pt-10 text-sm font-poppins text-gray-600 leading-7'>CONTACT</p>
                        <p className='pt-0 font-poppins text-black font-bold leading-7 underline '>asafayet21@gmail.com</p>
                        {/* social media */}
                        <div className='flex items-center gap-3 pt-16'>
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
                </div>
                <div className="col-span-3 pl-8 py-10 lg:flex gap-12 ">
                    <div className="">
                        <h6 className="text-lg hover:underline font-bold pb-4">Link</h6>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Home</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Membership</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>About Company</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Blog</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Explore Careers</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Pricing</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Dashboard</p></Link>
                    </div>
                    <p className='border-r-2'></p>
                    <div className="">
                        <h6 className="text-lg hover:underline font-bold pb-4">Link</h6>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Terms & conditions</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Cookie</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Privacy policy</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Faq's</p></Link>
                    </div>
                    <p className='border-r-2'></p>
                    <div className="">
                        <h6 className="text-lg hover:underline font-bold pb-4">Link</h6>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Take the tour</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Live chat</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Self-service</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Social</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Expert Agent</p></Link>
                        <Link to="/"><p className='text-lg hover:underline pt-2'>Reviews</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer