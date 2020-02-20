import React, {useState} from 'react';

import {FiMoreVertical} from 'react-icons/fi';

import {FiMoreHorizontal} from 'react-icons/fi';

import { IoIosClose } from "react-icons/io";


function MainButton({defaultText}){

    const [close,setClose] = useState(false);
   
    return (
        <div className="butCont">
                <p className="butText">{defaultText}</p>
        </div>
    )
}

MainButton.defaultProps = {
    defaultText:"Default Text"
}



export default MainButton;