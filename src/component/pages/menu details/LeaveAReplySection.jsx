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
    console.log(id)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!ratings) {
            return toast.error("Please add rating")
        }


        const review = {
            ratings,
            photoURL: user?.photoURL,
            displayName: user?.displayName,
            review: e.target.review.value,
            moment: moment().format('l')
        }

        axiosData.post(`/customerReview/${id}`, review)
            .then(res => {
                console.log(res.data)
            })
    }


    // const handelSubmit = (e) => {
    //     e.preventDefault()
    //     if (!ratings) {
    //         return toast.error("Please add rating")
    //     }

    //     const review = {
    //         ratings: menus?.customerReview?.ratings,
    //         photoURL: menus?.customerReview?.user?.photoURL,
    //         displayName: menus?.customerReview?.user?.displayName,
    //         review: menus?.customerReview?.e.target.review.value,
    //         moment: menus?.customerReview?.moment().format('l')
    //     }

    //     console.log(review)

    //     axiosData.post(`/customerReview/${id}`, review)
    //         .then(res => {
    //             console.log(res.data)
    //         })


    // }




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
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Your name*</label>
                    <input type="text" name="name" id="name" className="border border-gray-300 rounded-lg w-full py-2 px-3 text-sm" placeholder="Enter your name" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="ratings" className="block text-sm text-gray-600 mb-2">Ratings*</label>
                    <select onChange={(e) => setRating(e.target.value)} id="ratings" name="ratings" className="border border-gray-300 rounded-lg w-full py-2 px-3 text-sm">
                        <option value="" disabled defaultValue>Select your rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="review" className="block text-sm text-gray-600 mb-2">Write your review here*</label>
                    <textarea name="review" id="review" placeholder="Write your review here..." className="border border-gray-300 rounded-lg w-full py-2 px-3 text-sm" rows="4"></textarea>
                </div>
                <input type="submit" value="submit" className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out" />
            </form>
        </div>
    )
}

export default LeaveAReplySection