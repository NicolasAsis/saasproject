<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React, { useState } from "react";

>>>>>>> 26185b90ace95e6b589a8456eb364fa992f7b498
import { IoIosClose } from "react-icons/io";

import MainButton from "../mainButton";

function Popup({ defaultTitle, buttons, items }) {
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
        {items.map((o, i) => {
          return <MainButton {...o} />;
        })}
      </div>
    </div>
  );
}

Popup.defaultProps = {
  defaultTitle: "Default Title",
  buttons: false,
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
