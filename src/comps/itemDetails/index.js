import React, { useState } from "react";

import * as FeatherIcon from "react-icons/fi";

import TextInput from "../textInput/index";

import StatusDropdown from '../statusDropdown/index';

import MainButton from '../mainButton/index';
import Dropdown from "../dropdowns";

function ItemDetails({ customIcon, itemDetWidth, imgName, addSelectedBar}) {

  var ProvinceItem = [
    {
        itemTitle:'BC',
        onClick:()=>{alert("go to model#")}
    },
    {
        itemTitle:'QB',
        onClick:()=>{alert("go to model#")}
    },
    {
        itemTitle:'SW',
        onClick:()=>{alert("go to model#")}
    },
]



  var CityItem = [
    {
        itemTitle:'Richmond',
        onClick:()=>{alert("go to january")}
    },
    {
        itemTitle:'Burnaby',
        onClick:()=>{alert("go to Feburary")}
    },
    {
        itemTitle:'Langly',
        onClick:()=>{alert("go to March")}
       
    },

    {
        itemTitle:'April',
        onClick:()=>{alert("go to April")}
    }
]

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

        <div style={{display:'flex', width:'50%', flex:1, flexDirection:'row', marginTop: "5vh",  marginRight: '5vw'}}>
          <div style={{width:"100%", flex: 1}}>
            <Dropdown 
            items={CityItem}
            dropdown={true}
            ddTitle = {
               CityItem[0].itemTitle
            }
            // flex width below
            ddwidth = {"100%"}
            ddTitleColor = {'#888FD3'}
            iconSize = {13}
            icon = {'IoIosArrowDown'}
            iconColor = {'#888FD3'}
            ddposition = {''}
            key={0}
            />
            </div>

            <div style={{flex:1, width: "20%"}}>
            <Dropdown 
            items={ProvinceItem}
            dropdown={true} 
            ddTitle = {
                ProvinceItem[0].itemTitle
            }
            // flex width below
            ddwidth = {"3%"}
            ddTitleColor = {'#888FD3'}
            iconSize = {13}
            icon = {'IoIosArrowDown'}
            iconColor = {'#888FD3'}
            ddposition = {'absolute'}
            titleFontSize = {'10pt'}
            key={1}
            />
            </div>
          </div>

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
