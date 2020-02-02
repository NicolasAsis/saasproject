import React, {useState} from 'react';

function Sidebar(){

    const [inventory, setInventory] = useState(0)
    const [dashboard, setDashboard] = useState(true)
    
// #1 Makes Tab color change on click
    var cnOne = "inventory-text";
    var cnTwo = "dashboard-text";

    if ( inventory === 1 ){
        cnOne = "inventory-text inventory-text:active";
    } else if ( inventory === 0 ) {
        cnOne = "inventory-text inventory-text-inactive"
    }
    if ( dashboard === 1 ){
        cnTwo = "dashboard-text dashboard-text:active";
    } else if ( dashboard === 0 ) {
        cnTwo = "dashboard-text dashboard-text-inactive"
    }
//  end

    return (

            <div class="bar">
                {/* Space Below */}
                <div className="space-above"></div>
                {/* Space End */}
                <img 
                className="logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/8/86/Triple_sello_-_logo_circular.jpg" 
                alt="logo"></img>
                {/* Space Below */}
                <div className="space-above"></div>
                {/* Space End */}

                    <div 
                     className={cnTwo} 
                     onClick={()=>{
                     setDashboard(1)
                     setInventory(0)
                    }}>Dashboard
                     </div>

                     <div 
                    className={cnOne} 
                    onClick={()=>{
                    setInventory(1)
                    setDashboard(0)
                    }}>Inventory
                    </div>

                {/* Space Below */}
                <div className="space"></div>
                <div className="space"></div>
                {/* Space End */}

            </div>
          )


}
Sidebar.defaultProps = {
   
}



export default Sidebar;