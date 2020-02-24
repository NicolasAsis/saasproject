import React from "react";

import {FiChevronDown} from 'react-icons/fi';

function StatusItem({itemTitle, active,circColor,textColor}) {
  return (
    <div className="statusItem">
      <div className="itemCont">
        <div className="itemCircle" style={{backgroundColor:circColor}}></div>
      </div>
      <div className="itemCont2">
        <p className="itemText" style={{color:textColor}}>{itemTitle}</p>
      </div>
      <div className="itemCont">
        {/* <FiChevronDown /> */}
      </div>
    </div>
  );
}

StatusItem.defaultProps = {
  itemTitle: "Default Item",
  active: false,
  circColor:"#FB3232",
  textColor:"#FB3232"
};

export default StatusItem;
