import React, { useState } from "react";

import * as FeatherIcon from 'react-icons/fi';

function TextInput({customIcon, customTitle,titleColor,inputWidth,addPlaceholder,customPlaceholder,inputBorder,marginRight}) {

var Icon = FeatherIcon[customIcon];

var placeHolder="";

if(addPlaceholder) {
    placeHolder = customPlaceholder
}

  return (
    <div className="textInputCont" style={{width:inputWidth,marginRight:marginRight}}>
        <p className="inputTitle" style={{color:titleColor}}>{customTitle}</p>
        <input type="text" placeholder={placeHolder} className="inputBox" style={{borderColor:inputBorder}}/>
    </div>
  );
}

TextInput.defaultProps = {
    customIcon:"FiSave",
    customTitle:"Default Title",
    titleColor:"#8C93D5",
    inputWidth:"40%",
    addPlaceholder:false,
    customPlaceholder:"Test",
    inputBorder:"#D8DBFF",
    marginRight:"10px"
};

export default TextInput;