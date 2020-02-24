import React, { useState } from "react";

import * as FeatherIcon from "react-icons/fi";

import TextInput from "../textInput/index";

import StatusDropdown from '../statusDropdown/index'

function ItemDetails({ customIcon, itemDetWidth, imgName }) {
  var Icon = FeatherIcon[customIcon];

  return (
    <div className="itemDmainCont" style={{ width: itemDetWidth }}>
      <div className="imgCont">
        <img
          src={require("../../imgs/" + imgName + ".png")}
          width="200px"
          height="200px"
        //   style={{ border: "2px solid black" }}
        />
      </div>
      <div className="formCont">
        <div className="formSubCont">
          <div className="formRow">
            <TextInput inputWidth="90%" customTitle="Sold by" />
            <TextInput inputWidth="100%" customTitle="Installed by"/>
          </div>
          <div className="formRow">
            <TextInput inputWidth="100%" customTitle="Customer Company"/>
          </div>
          <div className="formRow">
            <TextInput inputWidth="90%" customTitle="Customer Name" />
            <TextInput inputWidth="100%" customTitle="Phone No."/>
          </div>
          <div className="formRow">
            <TextInput inputWidth="80%" customTitle="Location"/>
            <StatusDropdown statusText="Richmond" circleColor="#FFFFFF" textSize="14px"/>
            <StatusDropdown statusText="BC" circleColor="#FFFFFF" textSize="14px"/>
          </div>
        </div>
      </div>
      <div className="statusRecCont"></div>
    </div>
  );
}

ItemDetails.defaultProps = {
  customIcon: "FiSave",
  itemDetWidth: "100%",
  imgName: "pos1"
};

export default ItemDetails;
