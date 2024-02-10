import React, { useState } from "react";
import UseAddtolove from "../../hooks/use add to love/UseAddtolove";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../hooks/useAxiospublic/UseAxiosPublic";
import Swal from 'sweetalert2';

const AddLove = () => {
    const [addLove, refetch] = UseAddtolove();
    const axiosSecure = UseAxiosPublic();

    // delete function
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/addLove/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        refetch();
                    })
            }
        });
    }

    return (
        <div className="mx-auto container">
            {
                addLove?.map(item =>
                    <div key={item.id} className="md:flex items-center py-8 border-t border-gray-200">
                        <div className="w-[240px] lg:h-[200px] sm:h-[200px] md:h-[200px] h-[200px]">
                            <Link to={`/menudetails/${item?._id}`}>
                                <img className='w-full rounded-xl h-full object-center object-cover' src={item?.image} alt />
                            </Link>
                        </div>
                        <div className="md:pl-6 md:w-full">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-xl lg:w-full md:w-[500px] sm:w-[200px] lg:leading-[0px] md:leading-[0px] sm:leading-[0px] leading-[30px] font-poppins font-semibold pt-2">{item?.name}</p>
                                    <p className="text-lg  text-gray-600 py-4">{item?.title}</p>
                                </div>
                                <button onClick={() => handleDelete(item?._id)} className="font-poppins text-xl bg-gray-200 px-6 py-2 rounded-md hover:text-white hover:bg-black">Delete</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-black leading-none text-gray-800">${item?.price}</p>
                                <div className="">
                                    <button className="flex rounded-[10px] border-2 border-dashed border-black bg-[#FF6725] lg:px-4 md:px-4 sm:px-4 px-2 py-[9px] font-semibold gap-1 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                        <p className="font-medium text-base">Rent Now</p>
                                        <GoArrowUpRight className="text-2xl " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default AddLove