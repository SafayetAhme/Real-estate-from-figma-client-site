import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import UseAxiosPublic from '../../hooks/useAxiospublic/UseAxiosPublic';
import UseAuth from '../../hooks/useauth/UseAuth';
import Swal from 'sweetalert2'



const CheckOutForm = ({ item }) => {
    const [loading, setLoading] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { user } = UseAuth([]);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const axiosPublic = UseAxiosPublic([]);
    const elements = useElements();
    const [error, setError] = useState('');


    useEffect(() => {
        axiosPublic.post('/create-payment-intent', { price: item.price })
            .then(res => {
                setClientSecret(res?.data?.clientSecret);
            })
    }, [item])

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();


        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }


        // confirm payment
        console.log('Client Secret:', clientSecret);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "already payment done",
                footer: ''
            });
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the paymetn in the database
                const payment = {
                    email: user.email,
                    price: item.price,
                    date: new Date(),
                    status: 'pending'
                }

                const res = await axiosPublic.post('/payment', payment);
                console.log('payment saved', res?.data)
                if (res?.data) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment succeeded",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }

    };


    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl mb-6 font-semibold text-gray-800">Payment Details</h2>
                <div className="mb-6">
                    <CardElement className="w-full bg-white p-3 rounded-md focus:outline-none focus:bg-white shadow-md" />
                </div>
                <button type="submit" disabled={!stripe || !clientSecret}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600">
                    Pay Now
                </button>
                <p className='text-red-700 mt-2'>{error}</p>
                {transactionId && (
                    <p className='text-green-600 mt-2'>Your transaction id: {transactionId}</p>
                )}
            </form>
        </div>
    );
};

export default CheckOutForm;
