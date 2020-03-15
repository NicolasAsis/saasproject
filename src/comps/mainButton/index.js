import React, {useState} from 'react';
import * as FeatherIcon from 'react-icons/fi';




function MainButton({click, bgCol, defaultText,width,height,textSize,addIcon,customIcon}){

    const [close,setClose] = useState(false);

    var Icon = FeatherIcon[customIcon];
   
    return (
        <div 
        onClick={click}
        className="butCont"
        style={{
            backgroundColor: bgCol,
            width:width,
            height:height
        }}
        >
                {addIcon&&<Icon color='white' size={15}/>}
                <p className="butText" style={{fontSize:textSize}}>{defaultText}</p>
        </div>
    )
}

MainButton.defaultProps = {
    click: ()=>{},
    defaultText:"Default Text",
    width:"10%",
    height:"39px",
    textSize:"15px",
    addIcon:false,
    customIcon:"FiSave"
}


export default MainButton;