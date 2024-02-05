import React from 'react'
import UseMenus from '../../hooks/usemenus/UseMenus';
import { useParams } from 'react-router-dom';
import bgprofile from '../../../../public/image/probg.png'

const MenuAgentSection = () => {
    const [menus] = UseMenus();
    const { id } = useParams();
    const menu = menus.find(menu => menu._id === id);
    console.log(menu)

    return (
        <div className='ml-10 p-4' style={{ backgroundImage: `url(${bgprofile})` }}>
            <div className='bg-white rounded-xl p-4 pt-6 justify-center'>
                <img className='w-[50px] h-[50px] rounded-full mx-auto' src={menu?.agentpro} alt="" />
                <h1 className='font-poppins font-semibold text-center pt-3'>{menu?.agentname}</h1>
                <h1 className='font-poppins text-center pt-1 text-gray-500 text-sm'>{menu?.agenttitle}</h1>
                <div className='flex items-center gap-3 justify-center pt-4'>
                    <a href={menu?.agentfacebook}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href={menu?.agenttwiter}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4 7C13.0745 7 12 8.11929 12 9.5C12 9.71132 12.0252 9.91652 12.0726 10.1125C11.9494 10.1208 11.8252 10.125 11.7 10.125C9.67943 10.125 7.90441 8.71734 6.89216 7.06577C6.70202 7.73853 6.6 8.4506 6.6 9.1875C6.6 11.2539 7.40225 13.4376 8.7 14.7941C8.7 15.5294 6.9 15.9021 6 15.9966C7.05902 16.6348 8.28857 17 9.6 17C13.4885 17 16.657 13.7891 16.7953 9.77373L18 7.3125L15.9875 7.625C15.5644 7.23602 15.0087 7 14.4 7Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href={menu?.agentinstagram}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#2f2f2f" stroke-width="1.5" />
                            <path d="M17.5078 6.5L17.4988 6.5" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href={menu?.agentlinkedin}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M7 10V17" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.00801 7L6.99902 7" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#2f2f2f" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <hr className='my-7' />
                <div className='flex items-center justify-between'>
                    <h1 className='font-poppins text-center text-gray-500 pt-1 text-sm'>Location:</h1>
                    <h1 className='font-poppins text-center text-black font-semibold pt-1 text-sm'>{menu?.agentLocation}</h1>
                </div>
                <div className='flex pt-2 items-center justify-between'>
                    <h1 className='font-poppins text-center text-gray-500 pt-1 text-sm'>Email:</h1>
                    <h1 className='font-poppins text-center text-black font-semibold pt-1 text-sm'>{menu?.agentemail}</h1>
                </div>
                <div className='flex pt-2 items-center justify-between'>
                    <h1 className='font-poppins text-center text-gray-500 pt-1 text-sm'>Phone:</h1>
                    <h1 className='font-poppins text-center text-black font-semibold pt-1 text-sm'>{menu?.agentphone}</h1>
                </div>
                <button className='font-poppins w-full mt-7 py-[10px] rounded-lg text-white bg-[#FF6625]'>CONTACT AGENT</button>
            </div>

            {/* Schedule Tour */}
            <div className='bg-white rounded-xl p-4 mt-6 justify-center'>
                <h1 className='font-poppins pb-4 text-xl'>Schedule Tour</h1>
                <div>
                    <label for="name" className='text-gray-500 text-sm'>Your Name*</label>
                    <input type="name" name="name" id="name" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 mt-1" placeholder="Your full name" required />
                </div>
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
            </div>

            {/* Mortgage Calculator */}
            <div className='bg-white rounded-xl p-4 mt-6 justify-center'>
                <h1 className='font-poppins pb-4 text-xl'>Mortgage Calculator</h1>
                <div>
                    <label for="number" className='text-gray-500 text-sm'>Home Price*</label>
                    <input type="number" name="number" id="number" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 mt-1" placeholder="price" required />
                </div>
                <div className='pt-4'>
                    <label for="text" className='text-gray-500 text-sm'>Down Payment*</label>
                    <input type="text" name="text" id="text" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 mt-1" placeholder="$" required />
                </div>
                <div className='pt-4'>
                    <label for="text" className='text-gray-500 text-sm'>Interest Rate*</label>
                    <input type="text" name="text" id="text" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 mt-1" placeholder="%" required />
                </div>
                <div className='pt-4'>
                    <label for="text" className='text-gray-500 text-sm'>Loan Terms (Years)</label>
                    <input type="text" name="text" id="text" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 mt-1" placeholder="years" required />
                </div>
                <button className='font-poppins w-full mt-4 py-[10px] rounded-lg text-white bg-[#FF6625]'>CALCULATE</button>
            </div>
        </div>
    )
}

export default MenuAgentSection