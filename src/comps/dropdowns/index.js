
import React, {useState} from 'react';
import DdItem from './dropdown-Items';

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
        <div className="dd_container">
           <p className="dd_title">{menuTitle}</p>
            <div className="dropdown" onClick={()=>{
                setDrop(!drop)
            }}>   
            
            <div className="icon_holder">
                <div className="icon_holder_space"></div>
                <div className="icon_style">
                <FiMenu />
                </div>
            
            </div>
        
                {children}
                <div id="item_container" className={cn}>
                    {items.map((o,i) => {
                        return <DdItem {...o}/> 
                    })}
                </div>
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


// import React, {useState} from 'react';
// import DdItems from '../dropdowns/dropdown-Items';

// import './dropdowns.scss'



// function Dropdown({title, items}){

    
    
//     return (

//         <div className="dropdown-body">
//             <p className="title">
//                 {title}
//             </p>
//             <div className="dropdown" onClick=""></div>

//             </div>
//           )


// }

// Dropdown.defaultProps = {
//     items:[{
//         itemTitle:"one"
//     }, {
//         itemTitle:"two"
//     }],
//     menuTitle: "Default Title",
//     dropdown:false
  
// }



// export default Dropdown;