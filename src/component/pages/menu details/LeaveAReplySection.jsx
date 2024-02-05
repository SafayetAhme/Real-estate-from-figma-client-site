import React from 'react'
import { Link } from 'react-router-dom'

const LeaveAReplySection = () => {
    const user = true
    return (
        <div className='bg-white shadow-lg rounded-xl mt-10 p-6'>
            <h1 className='font-poppins pb-2 text-2xl font-semibold'>Leave A Reply</h1>
            {
                user ? <>
                    <p className='font-poppins pb-8 leading-[27px] text-sm text-[#696969]'> <Link className='font-poppins text-lg underline text-black' to="/signin">Sign in</Link> to post your comment or signup if you don't have any account.</p>
                </> :
                    <>
                    </>
            }

            {/* input from */}
            <div>
                <div className='pb-4'>
                    <label for="name" className='text-gray-500 text-sm'>Your name*</label>
                    <input type="name" name="name" id="name" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required />
                </div>
                <label for="email" className='text-gray-500 text-sm'>Ratings*</label>
                <select className="border mb-6 mt-1 border-black py-[9px] px-3  rounded-lg w-full">
                    <option disabled selected>Ratings</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <textarea placeholder="Write your review here..." name="message" className="border-[1px] border-black rounded-lg pl-3 pt-3 pb-12 w-full" ></textarea>
                <button className='text-lg font-poppins border  px-8 py-2 rounded-lg mt-5 hover:text-white hover:bg-black hover:border-black'>Post Review</button>
            </div>
        </div>
    )
}

export default LeaveAReplySection