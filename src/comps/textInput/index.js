import React, { useState } from "react";

import * as FeatherIcon from 'react-icons/fi';

function TextInput({customIcon, customTitle,titleColor,inputWidth,addPlaceholder,customPlaceholder,inputBorder}) {

var Icon = FeatherIcon[customIcon];

var placeHolder="";

if(addPlaceholder) {
    placeHolder = customPlaceholder
}

  return (
    <div className="textInputCont">
        <p className="inputTitle" style={{color:titleColor}}>{customTitle}</p>
        <input type="text" placeholder={placeHolder} className="inputBox" style={{width:inputWidth,borderColor:inputBorder}}/>
    </div>
  );
}

TextInput.defaultProps = {
    customIcon:"FiSave",
    customTitle:"Default Title",
    titleColor:"#8C93D5",
    inputWidth:"20%",
    addPlaceholder:false,
    customPlaceholder:"Test",
    inputBorder:"#D8DBFF"
};

export default TextInput;