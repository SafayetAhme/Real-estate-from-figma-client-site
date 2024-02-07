import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from "./CheckOutForm";

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_payment_geteway_PK);

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    )
}

export default Payment