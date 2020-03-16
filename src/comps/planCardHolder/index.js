import React, {useState} from 'react';
import Popup from '../popup';
import './planCardHolder.scss'

import PlanCard from '../planCard';
import InvoiceForm from '../invoiceForm'



function PlanCardHolder({popUpComfirmation = false, unlock, BillingPage = false, SubscriptionPage = true, cardFontSize, cardFontFamily, cardBorderRadius }){
    const [subscription, setSubscription] = useState(1);
    const [billing, setBilling] = useState(0);
    const [active, setActive] = useState(true);
  
    const [upgradeComfirm, setUpgradeConfirm] = useState(false);
    const [plan1, setPlan1] = useState(0);
    const [plan2, setPlan2] = useState(0);
    const [plan3, setPlan3] = useState(0);
    const [toCheckout, setToCheckout] = useState(true);
    const [showCheckout, setShowCheckout] = useState(false);

    var bgActiveCol1 = "white";
    var bgActiveCol2 = "white";
    var bgActiveCol3 = "white";

    var Billingcolor = "grey";
    var Subscriptioncolor = "grey";

    var Buttons = [
        {
            defaultText: 'Checkout',
        }
    ]
   

    if(plan1 === 1){
        bgActiveCol1 = "rgba(42, 70, 160, 0.382)";
    } else if (plan1 === 0) {
        bgActiveCol1 = "white"
    }

    if(plan2 === 1){
        bgActiveCol2 = "rgba(42, 70, 160, 0.382)";
    } else if (plan2 === 0) {
        bgActiveCol2 = "white"
    }

    if(plan3 === 1){
        bgActiveCol3 = "rgba(42, 70, 160, 0.382)";
    } else if (plan3 === 0) {
        bgActiveCol3 = "white"
    }

    // #1 Makes Tab color change on click
    var cnOne = "tab1";
    var cnTwo = "tab2";
    
    // I know it's troll but these are actually opossites subscription is billing and billing is subscription
    if ( subscription === 1 ){
        cnTwo = "tab1 tab:active";
        BillingPage = false;
        SubscriptionPage = true;
        Subscriptioncolor = '#8C93D5';
        Billingcolor = 'grey';
    } else if ( subscription === 0 ) {
        Subscriptioncolor = 'grey';
        cnTwo = "tab1 tab-inactive";
     
    }

    if ( billing === 1 ){
        cnOne = "tab2 tab:active";
        SubscriptionPage = false;
        BillingPage = true;
        Billingcolor = '#8C93D5';
        Subscriptioncolor = "grey";
    } else if ( billing === 0 ) {
        Billingcolor = "grey";
        cnOne = "tab2 tab-inactive";
    }

//  end

var planName1 = 'Starter Plan';
var planName2 = 'Buisness Plan';
var planName3 = 'Enterprise Plan';
var costFree = '$0.00';
var cost1 = '$10';
var cost2 = '$15';
var cost3 = '$25';

// Below is where I set the popup and blur conditions
var cardyCn = 'cardy'

if (upgradeComfirm === true) {
    popUpComfirmation = true;
    cardyCn = 'cardy cardy-blur'; 

} else {
    popUpComfirmation = false;
}

    return (
    <div style={{overflowY: "hidden"}}>
        {
            popUpComfirmation&&(
                <div style={{ position:'absolute', width:'100vw', display:'flex', justifyContent: 'center', height:'100vh', alignItems: 'center'}}>
                    <Popup 
                    items={Buttons}
                    Proceed={()=>{setToCheckout(!toCheckout); setShowCheckout(!showCheckout)}}
                    toCheckout={toCheckout}
                    ShowCheckout={showCheckout}
                    UnlockFeatures={unlock}
                    defaultTitle={ 'Free Trial' + ' ' + planName1}
                    addBut={true}
                    costText={costFree}
                    underTextLineOne={'Your payment will come after your 7 day free trial'}
                    underTextLineTwo={'You can cancle time'}
                    clicked={()=>{setUpgradeConfirm(false)}}
                    />
                </div>
            )
        }   
    {
    SubscriptionPage&&(

        <div className={cardyCn} style={{textAlign: 'left'}}>
            <h1 style={{color:"#8C93D5"}}>Subscription</h1>
            <div className="tab-container">
    
            <div 
            style={{
                color: Billingcolor,
                fontSize:cardFontSize,
                fontFamily:cardFontFamily,
                borderTopLeftRadius:cardBorderRadius,
                borderTopRightRadius:cardBorderRadius
            }}
                className={cnOne} 
                onClick={()=>{
                setSubscription(0)
                setBilling(1)
                setActive(active)
            }}>Billing
            </div>
            
            <div 
            style={{
                color: Subscriptioncolor,
                fontSize:cardFontSize,
                fontFamily:cardFontFamily,
                borderTopLeftRadius:cardBorderRadius,
                borderTopRightRadius:cardBorderRadius
            }}
                className={cnTwo} 
                onClick={()=>{
                setSubscription(1)
                setBilling(0)
            }}>Subscription
            </div>
                <div className="white-space"></div>
            </div>
            <div className="body">
        
                <div style={{flexDirection: 'row'}}className="plan-section">
                
                    <PlanCard
                    planName={planName1}
                    row1={true}
                    row2={true}
                    row3={true}
                    row4={true}
                    row1Text={"1 User Login"}
                    row2Text={"15 Inventory Items"}
                    row3Text={"Up to 200 shortened links / month"}
                    row4Text={''}
                    buttonBg={"#8C93D5"}
                    cost={cost1}
                    UpgradeClick={()=>{setUpgradeConfirm(!upgradeComfirm)}}
                    isSelected={()=>{
                        setPlan1(1)
                        setPlan3(0)
                        setPlan2(0)
                    }
                } 
                    activeColor={bgActiveCol1}
                    />
            
                    <PlanCard
                    planName={planName2}
                    row1={true}
                    row2={true}
                    row3={true}
                    row4={true}
                    row1Text={"3 user login"}
                    row2Text={"50 inventory items"}
                    row3Text={"Data Analytics"}
                    row4Text={"Custome Status Records"}
                    buttonBg={"#444B95"}
                    cost={cost2}
                    UpgradeClick={()=>{setUpgradeConfirm(!upgradeComfirm);}}
                    isSelected={()=>{
                        setPlan2(1)
                        setPlan1(0)
                        setPlan3(0)
                    }
                } 
                    activeColor={bgActiveCol2}
                    />
            
                    <PlanCard
                    planName={planName3}
                    row1={true}
                    row2={true}
                    row3={true}
                    row4={true}
                    row1Text={"Unlimited users"}
                    row2Text={"Unlimited inventory items"}
                    row3Text={"Extra Data Analytics"}
                    row4Text={"Custome Status Records"}
                    buttonBg={"#444B95"}
                    cost={cost3}
                    UpgradeClick={()=>{setUpgradeConfirm(!upgradeComfirm)}}
                    isSelected={()=>{
                        setPlan3(1)
                        setPlan2(0)
                        setPlan1(0)
                    }
                } 
                    activeColor={bgActiveCol3}
                    />
                </div>  
            </div>
        </div>
            )
        }
            {/* Billing Page Below  */}
            {
            BillingPage&&(
                
                <div className="cardy" style={{textAlign: 'left'}}>     
                <h1 style={{color:"#8C93D5"}} >Billing</h1>
                <div className="tab-container">
        
                <div 
                style={{
                    color:Billingcolor,
                    fontSize:cardFontSize,
                    fontFamily:cardFontFamily,
                    borderTopLeftRadius:cardBorderRadius,
                    borderTopRightRadius:cardBorderRadius
                }}
                    className={cnOne} 
                    onClick={()=>{
                    setSubscription(0)
                    setBilling(1)
                    setActive(active)
                }}>Billing
                </div> 
                <div 
                style={{
                    color:Subscriptioncolor,
                    fontSize:cardFontSize,
                    fontFamily:cardFontFamily,
                    borderTopLeftRadius:cardBorderRadius,
                    borderTopRightRadius:cardBorderRadius
                }}
                    className={cnTwo} 
                    onClick={()=>{
                    setSubscription(1)
                    setBilling(0)
                }}>Subscription
                </div>
                    <div className="white-space"></div>
                </div>
                <div className="body">

                    

                    <div style={{flexDirection: 'row', marginRight:'5vw'}}className="plan-section">
                    <InvoiceForm />
                    
                    </div>  
                </div>
            </div>

            )
        }
    </div>
   
    )
}

PlanCardHolder.defaultProps = {
    headerBarFontSize: '10pt',
    cardFontSize: '12pt',
    cardFontFamily: 'Roboto, sans-serif',
    headBarFontFamily: 'Roboto, sans-serif',
    HeadBarHeight: '13vh',
    cardBorderRadius: '10px'
}

export default PlanCardHolder;