import React, { useState } from "react";

import { IoIosClose } from "react-icons/io";

import MainButton from "../mainButton";

function Popup({ defaultTitle, addBut, items }) {
  const [close, setClose] = useState(false);

  var cn = "popupCont";

  if (close) {
    cn = "popup_close";
  }

  return (
    <div className={cn}>
      <div className="popupTopRow">
        <div
          className="closeBut"
          onClick={() => {
            setClose(!close);
          }}
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
