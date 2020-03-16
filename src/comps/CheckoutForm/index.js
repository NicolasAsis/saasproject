import React, {useState} from 'react';

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


function CheckoutForm({confirmPay, showPayButton = false}){
    const [showContinue, setShowContinue] = useState(false)
    const stripe = useStripe();
    const elements = useElements();


if (showContinue){
    showPayButton = true;
} 

    const Pay = async (e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement),
        });
 
        if(error){
            console.log("error",error);
        
        } else {
         
            setShowContinue(!showContinue)
           
            console.log("payments",paymentMethod);
            confirmPay = true;

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
            <button type="submit" className="submit">Pay</button>
            {
                showPayButton&&(
                    <div>
                        <h3>Your payment has been confirmed</h3>
                        <button onClick={confirmPay} className="submitComf">Continue</button> 
                    </div>
                 
                    )
            }
        </form>
    );
}

const stripePromise = loadStripe('pk_test_jzLq37Zmmi9lxBBjfANSvzIn00gqTd9acf');

function Container({confirmPayment}) {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm 
            confirmPay={confirmPayment}/>
        </Elements>
    );
}

Container.defaultProps = {
    confirmPayment: ()=>{}

}

export default Container;