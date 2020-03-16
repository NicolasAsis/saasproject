import React, {useState} from 'react';
import * as FeatherIcon from 'react-icons/fi';
import * as IoIcon from 'react-icons/io';





function MainButton({click, IosIcon = false, bgCol, defaultText,width,height,textSize,addIcon,customIcon}){

    var textColor = 'purple'

    const [textCol,setTextCol] = useState(true);

    if (textCol) {
        textColor = "white";
        
    } else {
        textColor = "purple"
    }

    var Icon = FeatherIcon[customIcon];
    var Icon2 = IoIcon[customIcon];
    var Choose = 0;
    
    if ( IosIcon === false ) {
        Choose = Icon;
    } else {
        Choose = Icon2
    }
   
    return (
        <div 
        onClick={click}
        className="butCont"
        style={{
            backgroundColor: bgCol,
            width:width,
            height:height,
        }}
        >
             
                {addIcon&&<Choose color='white' size={15}/>}
                <p onMouseLeave={()=>{setTextCol(!textCol)}} onMouseEnter={()=>{setTextCol(!textCol)}} className="butText" style={{fontSize:textSize, color:textColor}}>{defaultText}</p>
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
    customIcon:"FiSave",
    backgroundColor:"#8C93D5",
    IosIcon: false,
}


export default MainButton;