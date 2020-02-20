import React, {useState} from 'react';

import {FiMoreVertical} from 'react-icons/fi';

import {FiMoreHorizontal} from 'react-icons/fi';

import { IoIosClose } from "react-icons/io";


function Popup({defaultTitle}){

    const [close,setClose] = useState(false);

    var cn = "popupCont";

    if(close){
        cn = "popup_close";
    }
   
    return (
        <div className={cn}>
            <div className="popupTopRow">
                <div 
                    className="closeBut"
                    onClick={()=>{
                        setClose(!close);
                    }}
                >
                    <IoIosClose className="xIcon"/>
                </div>
            </div>
            <div className="popupRow">
                <p className="popupTitle">{defaultTitle}</p>
            </div>
            <div className="popupRow">

            </div>
        </div>
    )
}

Popup.defaultProps = {
    defaultTitle:"Default Title"
}



export default Popup;