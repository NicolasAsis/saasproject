import React, {useState} from 'react';
import MenuItem from './menuitem';

import { FiMenu } from 'react-icons/fi';


function Menu({items, menuTitle, children, dropdown}){

    const [drop, setDrop] = useState(false)
    var cn = "dropmenu"

    if(drop === true){
        cn = "dropmenu dropmenu_active"
    }

    if(!dropdown) {
        cn = "";
    }

    return (
        <div className="menu" onClick={()=>{
            setDrop(!drop)
        }}
        className="menu"
        >
        <h1>
            <FiMenu className="icon_style" />
            {menuTitle}
        </h1>
            {children}

            <div id="item_container" className={cn}>
                {items.map((o,i) => {
                    return <MenuItem {...o}/> 
                })}
            </div>
        </div>
    )
}

Menu.defaultProps = {
    items:[{
        itemTitle:"one"
    }, {
        itemTitle:"two"
    }],
    menuTitle: "Default Title",
    children: null,
    dropdown:false
};



export default Menu;