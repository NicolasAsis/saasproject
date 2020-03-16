import React, { useState } from "react";

import { FiChevronDown } from "react-icons/fi";

import StatusItem from "./statusItem";

import * as FeatherIcon from 'react-icons/fi';

function StatusDropdown({ dropdown, statusText, children, items, circleColor,textColor,textSize,arrowColor,customIcon}) {
  const [drop, setDrop] = useState(false);
  var cn = "dropmenu";

  if (drop) {
    cn = "dropmenu dropmenu_active";
    customIcon = "FiChevronUp";
  }

  var Icon = FeatherIcon[customIcon];

  return (
    <div className="mainCont" >
      <div 
          className="statusCont" 
          onClick={() => {
              setDrop(!drop);
            }}>
        <div className="statusSubCont">
          <div className="statusCircle" style={{backgroundColor:circleColor}}></div>
        </div>
        <div className="statusSubCont">
          <p className="statusText" style={{color:textColor,fontSize:textSize}}>{statusText}</p>
        </div>
        <div className="statusSubCont">
          <Icon
            size={15}
            style={{color:arrowColor}}
          />
        </div>
      </div>
      {children}
      <div className={cn}>
        {items.map((o, i) => {
          return <StatusItem key={i} {...o} />;
        })}
      </div>
    </div>
  );
}

StatusDropdown.defaultProps = {
  dropdown: false,
  statusText: "Default",
  children: null,
  items: [
    {
      itemTitle: "Issue"
    }
  ],
  circleColor:"#444B95",
  textColor:"#444B95",
  textSize:"13px",
  arrowColor:"#444B95",
  customIcon:"FiChevronDown"
};

export default StatusDropdown;
