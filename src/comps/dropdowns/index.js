
import React, {useState} from 'react';
import DdItem from './dropdown-Items';
import { IoIosArrowDown } from 'react-icons/io';



function Dropdown({items, title, ddTitle, children, dropdown, ddwidth}){
    // import scss width atribute

    // End ^

 



    const [drop, setDrop] = useState(false)
    var cn = "dropmenu"

    if(drop === true){
        cn = "dropmenu dropmenu_active"
    }

    if(!dropdown) {
        cn = "";
    }

    return (
        <div className="dd_container">
           <p className="dd_title">{title}</p>
            <div className="dropdown" onClick={()=>{
                setDrop(!drop)
         
            }}>   
            
            <div className="icon_holder">
                {ddTitle}
                <div className="icon_holder_space"></div>
                <div className="icon_style">
                <IoIosArrowDown />
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
    title:"",
    children: null,
    dropdown:false,
    // new installation below
    ddTitle: "default",
    ddwidth: 1
};



export default Dropdown;

