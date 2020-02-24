import React, { useState } from "react";

import * as FeatherIcon from "react-icons/fi";

import TextInput from "../textInput/index";

import StatusDropdown from '../statusDropdown/index';

import MainButton from '../mainButton/index';

function ItemDetails({ customIcon, itemDetWidth, imgName, addSelectedBar}) {
  var Icon = FeatherIcon[customIcon];

  var leftBar = "";

  if(addSelectedBar) {
    leftBar = "10px solid #444B95";
  }

  return (
    <div className="itemDmainCont" style={{ width: itemDetWidth,borderLeft:leftBar }}>
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
      <div className="statusRecCont">
          <div className="statusRecSubCont">
                <p className="statusRecTitle">Status Records</p>
                <div className="statusRecRow">
                    <div className="statusTextRow">
                        <div className="statusTextCont">
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <div className="statusTextCirc"></div>
                                <p>Good</p>
                            </div>
                        </div>
                        <div className="statusTextCont2">
                            Bad Connection
                        </div>
                        <div className="statusTextCont3">
                            Dan
                        </div>
                        <div className="statusTextCont3">
                            06/09/19 18:00:00
                        </div>
                    </div>
                </div>
                <div className="statusRecRow2">
                    <MainButton width="20%" defaultText="Save" addIcon="true"/>
                    <MainButton width="20%" defaultText="Delete" addIcon="true" customIcon="FiTrash2"/>
                    <MainButton width="60%" defaultText="Move to Outbound" addIcon="true" customIcon="FiLogOut"/>
                </div>
          </div>
      </div>
    </div>
  );
}

ItemDetails.defaultProps = {
  customIcon: "FiSave",
  itemDetWidth: "100%",
  imgName: "pos1",
  addSelectedBar:false
};

export default ItemDetails;
