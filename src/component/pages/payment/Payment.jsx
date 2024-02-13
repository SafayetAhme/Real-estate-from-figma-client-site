import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {

    const item = useLocation();
    console.log(item);
    

    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm item={item.state}></CheckOutForm>
        </Elements>
    )
}

export default Payment