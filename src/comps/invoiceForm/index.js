import React, {useState} from 'react';

import TextInput from '../textInput';
import MainButton from '../mainButton';



function InvoiceForm({width}){

    return (
        <div className="invoiceStruc" style={{width:width}}>
            <div className="invoiceTitleSec">
                <p className="invoiceTitle">Billing Information</p>
            </div>
            <div className="invoiceFormSec">
                <div className="invoiceFormRow">
                    <TextInput 
                        inputWidth="25%"
                        marginRight="30px"
                        customTitle="Company Name"
                        titleColor="#939393"
                        inputBorder="#C4C4C4"
                    />
                    <TextInput 
                        inputWidth="25%"
                        customTitle="Billing Email"
                        titleColor="#939393"
                        inputBorder="#C4C4C4"
                    />
                </div>
                <div className="invoiceFormRow">
                    <TextInput 
                        inputWidth="25%"
                        marginRight="30px"
                        customTitle="Billing Address"
                        titleColor="#939393"
                        inputBorder="#C4C4C4"
                    />
                    <TextInput 
                        inputWidth="25%"
                        customTitle="Billing Address 2"
                        titleColor="#939393"
                        inputBorder="#C4C4C4"
                    />
                </div>
                <div className="invoiceFormRow">
                    <TextInput 
                        inputWidth="25%"
                        marginRight="30px"
                        customTitle="City"
                        titleColor="#939393"
                        inputBorder="#C4C4C4"
                    />
                    <TextInput 
                        inputWidth="25%"
                        marginRight="30px"
                        customTitle="State"
                        titleColor="#939393"
                        inputBorder="#C4C4C4"
                    />
                    <TextInput 
                        inputWidth="25%"
                        customTitle="Zip Code"
                        titleColor="#939393"
                        inputBorder="#C4C4C4"
                    />
                </div>
                <div className="invoiceFormRow">
                    <MainButton 
                        defaultText="Save"
                        height="25px"
                        width="8%"
                        backgroundColor="#444B95"
                    />
                </div>
            </div>
            <div className="invoiceHistorySec">
                <div className="historySubSec">
                    <div className="historyRow">
                        <p className="iHistoryTitle">Invoice History</p>
                    </div>
                    <div className="historyRow">
                        <p className="iHinfoTitles">ID</p>
                        <p className="iHinfoTitles">Date</p>
                        <p className="iHinfoTitles">Amount</p>
                        <p className="iHinfoTitles">Invoice</p>
                    </div>
                    <div className="historyRow">
                        <p className="iHinfo">AD10120323</p>
                        <p className="iHinfo">06-02-2020</p>
                        <p className="iHinfo">$10</p>
                        <p className="iHinfo">Download Invoice</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

InvoiceForm.defaultProps = {
    width:"100%"
}



export default InvoiceForm;