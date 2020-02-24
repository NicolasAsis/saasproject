
import React, {useState} from 'react';
import DdItem from './dropdown-Items';
import * as IoIos from 'react-icons/io';



function Dropdown({items, title, ddTitle, children, dropdown, ddwidth, ddTitleColor, iconSize, icon, iconColor}){

   
 
    const [drop, setDrop] = useState(false)
    var cn = "dropmenu"


    if (drop){
        icon = 'IoIosArrowUp'
        cn = "dropmenu dropmenu_active"
    }
    
    if(!dropdown) {
        cn = "";
      
    }

    var Icon = IoIos[icon];

    return (
        <div className="dd_container">
           <p className="dd_title">{title}</p>
            <div className="dropdown" style={{
                    flex: ddwidth
            }} onClick={()=>{
                setDrop(!drop) 
    
            }}>   
            
            <div className="icon_holder" style={{
                color: ddTitleColor
            }}>
                {ddTitle}
                <div className="icon_style">
                {icon&&<Icon color={iconColor} size={iconSize}/>}
                </div>
            
            </div>
        
                {children}
                <div id="item_container" className={cn}>
                    {items.map((o,i) => {
                        return <DdItem key={i} {...o}/> 
                    })}
                </div>
            </div>
        </div>
    )
}

Dropdown.defaultProps = {
    menuTitle: "Default Title",
    title:"balls",
    children: null,
    dropdown:false,
    // new installation below
    ddTitle: "default",
    ddwidth: 1,
    ddTitleColor: '#888FD3',
    iconSize: 13,
     icon: 'IoIosArrowDown',
     iconColor: ''
};



export default Dropdown;

