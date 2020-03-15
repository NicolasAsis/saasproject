
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

import MainButton from "../mainButton";

function Popup({popDisp, underTextLineOne, underTextLineTwo, costText, Proceed, isClosed = true, clicked, defaultTitle, addBut, items }) {
  const [close, setClose] = useState(false);

  var cn = "popupCont";

 

  if (isClosed === true){
    cn = "popup_close";
  } else {
    cn = "popupCont"
  }

  return (
    <div className={cn} style={{display: popDisp}}>
     
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
