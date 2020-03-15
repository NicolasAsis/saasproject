
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

import MainButton from "../mainButton";

function Popup({popDisp, isClosed = true, clicked, defaultTitle, addBut, items }) {
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
        <div
          className="closeBut"
          onClick={clicked}
        >
          <IoIosClose className="xIcon" />
        </div>
      </div>
      <div className="popupRow">
        <p className="popupTitle">{defaultTitle}</p>
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
