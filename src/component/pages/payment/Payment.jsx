import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
        </Elements>
    )
}

export default Payment