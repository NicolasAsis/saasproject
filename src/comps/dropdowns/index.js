import React from 'react';
import './dropdowns.scss'



function Dropdown({isOn, }){
    if (isOn === true) {
        
    
    return (

        <div className="dropdown">
            Month
           
            <div className="list">
                Drop down
            </div>
        </div>
        
          )


}
}
Dropdown.defaultProps = {
    className:"main",
    isOn: true
}



export default Dropdown;