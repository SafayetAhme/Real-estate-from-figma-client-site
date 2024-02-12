import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseMenus from '../../hooks/usemenus/UseMenus';
import UseAxiosPublic from '../../hooks/useAxiospublic/UseAxiosPublic';
import toast from "react-hot-toast"
import UseAuth from '../../hooks/useauth/UseAuth';
import StarRatings from "react-star-ratings"
import moment from "moment"


const LeaveAReplySection = ({ id }) => {
    const [menus, refetch,] = UseMenus()
    const { user } = UseAuth();
    const axiosData = UseAxiosPublic()
    const [ratings, setRating] = useState(0)
    const handelSubmit = (e) => {
        e.preventDefault()
        if (!ratings) {
            return toast.error("Please add rating")
        }

        const review = {
            ratings: menus?.customerReview?.ratings,
            photoURL: menus?.customerReview?.user?.photoURL,
            displayName: menus?.customerReview?.user?.displayName,
            review: menus?.customerReview?.e.target.review.value,
            moment: menus?.customerReview?.moment().format('l')
        }

        axiosData.post(`/customerReview/${id}`, review)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Successfully added review!')
                    refetch()
                    e.target.reset()
                    setRating(0)
                }
            })
    }



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
            <form onSubmit={handelSubmit}>
                <div>
                    <div className='pb-4'>
                        <label for="name" className='text-gray-500 text-sm'>Your name*</label>
                        <input type="name" name="name" id="name" className=" border-black border text-black sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name" required />
                    </div>
                    <label for="email" className='text-gray-500 text-sm'>Ratings*</label>
                    <select className="border mb-6 mt-1 border-black py-[9px] px-3  rounded-lg w-full">
                        <option disabled selected>Ratings</option>
                        <option name='rating' rating={ratings}>1</option>
                        <option name='rating' rating={ratings}>2</option>
                        <option name='rating' rating={ratings}>3</option>
                        <option name='rating' rating={ratings}>4</option>
                        <option name='rating' rating={ratings}>5</option>
                    </select>
                    <textarea name="review" placeholder="Write your review here..." className="border-[1px] border-black rounded-lg pl-3 pt-3 pb-12 w-full" ></textarea>
                    <button className='text-lg font-poppins border  px-8 py-2 rounded-lg mt-5 hover:text-white hover:bg-black hover:border-black'>Post Review</button>
                </div>
            </form>
        </div>
    )
}

export default LeaveAReplySection