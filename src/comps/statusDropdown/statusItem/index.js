import React from "react";

import {FiChevronDown} from 'react-icons/fi';

function StatusItem({itemTitle, active}) {
  return (
    <div className="statusItem">
      <div className="itemCont">
        <div className="itemCircle"></div>
      </div>
      <div className="itemCont">
        <p className="itemText">{itemTitle}</p>
      </div>
      <div className="itemCont">
        {/* <FiChevronDown /> */}
      </div>
    </div>
  );
}

StatusItem.defaultProps = {
  itemTitle: "Default Item",
  active: false
};

export default StatusItem;
