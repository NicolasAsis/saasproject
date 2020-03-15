import InvoiceForm from '../comps/invoiceForm';
import React from 'react'
import '../App.scss';


export default {
    title: "Invoice Form",
    Component:InvoiceForm
}
    


export const DefaultForm = () => {
    return   <InvoiceForm />
}