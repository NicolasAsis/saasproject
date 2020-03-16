import React from 'react';
import '../App.scss';

import CheckoutForm from '../comps/CheckoutForm';

export default {
    title:'Checkout Form',
    component:CheckoutForm
}

export const DefaultCheckoutForm = () => {
    return <CheckoutForm />
}