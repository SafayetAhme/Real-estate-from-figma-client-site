import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.PreventDefault();

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
    }

    return (
        <div className='container mx-auto h-screen'>
            <form className='px-96 pt-20' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className=' text-center'>
                    <button className="bg-blue-600  px-24 py-3 rounded-md text-white text-2xl my-12" type="submit">
                        Pay
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckOutForm