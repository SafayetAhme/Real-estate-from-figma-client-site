import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import UseAddtolove from '../../hooks/use add to love/UseAddtolove';
import UseAxiosPublic from '../../hooks/useAxiospublic/UseAxiosPublic';
import UseAuth from '../../hooks/useauth/UseAuth';
import UseMenus from '../../hooks/usemenus/UseMenus';
import { useParams } from 'react-router-dom';



const CheckOutForm = ({ item }) => {
    const [loading, setLoading] = useState(false);
    const { user } = UseAuth([]);
    const [clientSecret, setClientSecret] = useState('');
    console.log(clientSecret)
    const stripe = useStripe();
    const axiosPublic = UseAxiosPublic([]);
    const elements = useElements();
    const [error, setError] = useState('');


    useEffect( () => {
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
        // console.log('Client Secret:', clientSecret);
        // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: card,
        //         billing_details: {
        //             email: user?.email || 'anonymous',
        //             name: user?.displayName || 'anonymous'
        //         }
        //     }
        // })

        // if (confirmError) {
        //     console.log('confirm error')
        // }
        // else {
        //     console.log('payment intent', paymentIntent)
        // }

    };


    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl mb-6 font-semibold">Payment Details</h2>
                <div className="mb-6">
                    <CardElement className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:bg-white" />
                </div>
                <button type="submit" disabled={!stripe || !clientSecret}
                    className="w-full bg-black text-white py-2 px-4 rounded-md focus:outline-none focus:bg-gray-900 ">
                    Pay
                </button>
                <p className='text-red-700'>{error}</p>
            </form>

        </div>
    );
};

export default CheckOutForm;
