import React from 'react';
import './dropdowns.scss'



function Dropdown({title, image}){


    
    return (

        <div className="dropdown-body">
            <p className="title">
                {title}
            </p>
            <div className="dropdown"></div>
        </div>
        
          )


}

Dropdown.defaultProps = {
    title:"no title",
    items:[{}]
  
}



export default Dropdown;