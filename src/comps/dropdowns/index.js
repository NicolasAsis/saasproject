
import React, {useState} from 'react';
import DdItem from './dropdown-Items';

import { IoIosArrowDown } from 'react-icons/io';


function Dropdown({items, title, menuTitle, children, dropdown}){

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
  
    items:[{
        itemTitle:"one"
    }, {
        itemTitle:"two"
    }],
    menuTitle: "Default Title",
    title:"",
    children: null,
    dropdown:false
};



export default Dropdown;


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