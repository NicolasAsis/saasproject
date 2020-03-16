import React from 'react';
// import './stripe.scss';

import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import TextInput from '../textInput';

var style = {
    base:{
        color:"##949494",
        fontSize:"15px",
        padding:"10px",
        width:"100%"
    }
}

function CheckoutForm({}){
    const stripe = useStripe();
    const elements = useElements();

    const Pay = async (e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMEthod({
            type:'card',
            card: elements.getElement(CardElement),
        });

        if(error){
            console.log("error",error);
        } else {
            console.log("payments",paymentMethod);

            //run a fetch to your http://localhost:8888/pay.php
            var clientSecret = await fetch("http://server/pay.php");

            var data = await stripe.confirmCardPayment(clientSecret, {
                payment_method:paymentMethod
            })
        }
    }
    return (
        <form onSubmit={Pay} className="checkoutForm">
            <p>Checkout Form</p>
            <TextInput 
                inputWidth="40%"
                marginRight="0px"
                customTitle="Cardholder Name"
                titleColor="#939393"
                inputBorder="#C4C4C4"
            />
            <CardElement options={{style:style}} />
            <button type="submit">Pay</button>
        </form>
    );
}

const stripePromise = loadStripe('pk_test_jzLq37Zmmi9lxBBjfANSvzIn00gqTd9acf');

function Container({}) {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

Container.defaultProps = {

}

export default Container;