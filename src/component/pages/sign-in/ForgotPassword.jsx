import { useContext } from "react";
import UseAxiosPublic from "../../hooks/useAxiospublic/UseAxiosPublic";
import { AuthContext } from "../../auth/AuthProvider";
import { Form, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const ForgotPassword = () => {
    const axiosPublic = UseAxiosPublic();
    // const { auth } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    // const from = location.state?.from?.pathname || "/";

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        axiosPublic.post('/forgot-password', {
            email
        }).then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "pleae check your main",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");
            }
        })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <h1 className="text-2xl font-poppins">Forgot Password</h1>
                <div>
                    <label for="email" className='text-gray-500'>Email*</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 mt-1 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                </div>
                <button className='bg-[#FF6725] w-full py-[10px] text-lg font-poppins text-white rounded-lg'>Send</button>
            </form>
        </div>
    )
}

export default ForgotPassword