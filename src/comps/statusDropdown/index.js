import React, { useState } from "react";

import { FiChevronDown } from "react-icons/fi";

import StatusItem from "./statusItem";

function StatusDropdown({ dropdown, status, children, items }) {
  const [drop, setDrop] = useState(false);
  var cn = "dropmenu";

  if (drop) {
    cn = "dropmenu dropmenu_active";
  }

  return (
    <div className="mainCont">
      <div className="statusCont">
        <div className="statusSubCont">
          <div className="statusCircle"></div>
        </div>
        <div className="statusSubCont">
          <p className="statusText">{status}</p>
        </div>
        <div className="statusSubCont">
          <FiChevronDown
            onClick={() => {
              setDrop(!drop);
            }}
          />
        </div>
      </div>
      {children}
      <div className={cn}>
        {items.map((o, i) => {
          return <StatusItem {...o} />;
        })}
      </div>
    </div>
  );
}

StatusDropdown.defaultProps = {
  dropdown: false,
  status: "Default",
  children: null,
  items: [
    {
      itemTitle: "one"
    },
    {
      itemTitle: "two"
    }
  ]
};

export default StatusDropdown;
