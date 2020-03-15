import React, {useState} from 'react';

import {FiMoreVertical} from 'react-icons/fi';

import {FiMoreHorizontal} from 'react-icons/fi';

import { IoIosClose } from "react-icons/io";

import * as FeatherIcon from 'react-icons/fi';




function MainButton({defaultText,width,height,textSize,addIcon,customIcon,backgroundColor}){

    const [close,setClose] = useState(false);

    var Icon = FeatherIcon[customIcon];
   
    return (
        <div 
        className="butCont"
        style={{
            width:width,
            height:height,
            backgroundColor:backgroundColor
        }}
        >
                {addIcon&&<Icon color='white' size={15}/>}
                <p className="butText" style={{fontSize:textSize}}>{defaultText}</p>
        </div>
    )
}

MainButton.defaultProps = {
    defaultText:"Default Text",
    width:"10%",
    height:"39px",
    textSize:"15px",
    addIcon:false,
    customIcon:"FiSave",
    backgroundColor:"#8C93D5"
}


export default MainButton;