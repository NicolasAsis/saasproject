
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

import MainButton from "../mainButton";

function Popup({popDisp, underText, isClosed = true, clicked, defaultTitle, addBut, items }) {
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
      <div style={{textAlign:'center',flex:0.90, margin: 0, padding: 0, fontSize: '19pt', color: '#8C93D5'}}>Upgrade Plan</div>
   
        
        <div
          className="closeBut"
          onClick={clicked}
        >
          <IoIosClose className="xIcon" />
         
        </div>
      
      </div>
     
      <div className="popupText">
        <p className="popupTitle">{defaultTitle}</p> <br />
        <p className="underText">{underText}</p>
      </div>
      <div className="popupRow">
            {addBut&&items.map((o, i) => {return <MainButton width="18%" {...o} />; })}   
      </div>
    </div>
  );
}

Popup.defaultProps = {
  defaultTitle: "Default Title",
  addBut: false,
  isClosed: false,
  clicked: ()=>{},
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
