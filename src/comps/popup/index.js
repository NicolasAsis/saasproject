
import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

import MainButton from "../mainButton";

import Container from "../CheckoutForm";

function Popup({popDisp, UnlockFeatures,  showComfirmationPage = false, ShowCheckout = false, underTextLineOne, toCheckout = true, underTextLineTwo, costText, Proceed, isClosed = true, clicked, defaultTitle, addBut, items }) {

  const [showComf, setShowComf] = useState(false);

  

  if(showComf){
    showComfirmationPage = true;
    ShowCheckout = false;
    toCheckout = false;
  }
 

  
  var cn = "popupCont";
 

  if (isClosed === true){
    cn = "popup_close";
  } else {
    cn = "popupCont"
  }

  return (
    <div className={cn} style={{display: popDisp}}>

      {
        toCheckout&&(
          <div style={{flex:1, display:'flex', flexDirection:'column'}}>
     
      <div className="popupTopRow">
      <div style={{textAlign:'center',flex:0.90, margin: 0, marginTop: '10px', padding: 0, fontSize: '19pt', color: '#444B95'}}>Upgrade Plan</div>
   
        

        <div
          className="closeBut"
          onClick={clicked}
        >
          <IoIosClose className="xIcon" />
         
        </div>
      
      </div>
     
      <div className="popupText">
        <p className="popupTitle">{defaultTitle}</p> <br />
        <p className="costText">{costText}</p>
      </div>
     
      <div style={{flex: 1.2, fontSize: "10pt"}}>
        <p className="underText">{underTextLineOne}</p> 
        <p className="underText">{underTextLineTwo}</p>
      </div>
      <div className="popupRow">
            {addBut&&items.map((o, i) => {return <MainButton click={Proceed} width={"100%"} bgCol={'#444B95'} height={'100%'} {...o} />; })}   
      </div>
      </div>
  )
}

{/* checkout before */}

{
  ShowCheckout&&(
    <div style={{flex:1, display:'flex', flexDirection:'column'}}>
        <div className="popupTopRow" style={{flex:0.4}}>
      <div style={{textAlign:'center',flex:0.90, margin: 0, marginTop: '10px', padding: 0, fontSize: '19pt', color: '#444B95'}}>Enter Credit Card Info</div>
   
        
        <div
          className="closeBut"
          onClick={clicked}
        >
          <IoIosClose className="xIcon" />
         
        </div>
      
      </div>
      <Container
      confirmPayment={()=>{setShowComf(!showComf)}} />
    </div>
  )
}
{/* End of popup below */}
{
  showComfirmationPage&&(
    <div style={{flex:1, display:'flex', flexDirection:'column'}}>
     
      <div className="popupTopRow">
      <div style={{textAlign:'center',flex:0.90, margin: 0, marginTop: '10px', padding: 0, fontSize: '19pt', color: '#444B95'}}>Purchase Complete</div>
   
        
        <div
          className="closeBut"
          onClick={clicked}
        >
          <IoIosClose className="xIcon" />
         
        </div>
      
      </div>
     
       <div className="popupText">
        <p className="popupTitle">Thank you for your purchase</p> <br />
        
      </div>
     
      <div style={{flex: 1.2, fontSize: "10pt"}}>
       <p className="underText">Click the button on the bottom to unlock feature</p> 
        <p className="underText">then Click the X on the top right </p> 
        <p className="underText">and test out the sidebar for your new feature</p>
      </div>
      <div className="popupRow">
            {addBut&&items.map((o, i) => {return <MainButton click={UnlockFeatures} width={"100%"}  bgCol={'#444B95'} height={'100%'} {...o} />; })}   
      </div>
      </div>
  )
}
    </div>
  );
}

Popup.defaultProps = {
  defaultTitle: "Default Title",
  addBut: false,
  isClosed: false,
  clicked: ()=>{},
  Proceed: ()=>{},
  popDisp: false,
  items: [
    {
      defaultText: "Yes"
    },
    {
      defaultText: "No"
    }
  ]
};

export default Popup;
