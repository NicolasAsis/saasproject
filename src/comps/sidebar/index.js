import React, {useState} from 'react';



// SVG BELOW

const InvSVG = () => (
<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9642 14.5706L36.6308 18.9039C37.3671 19.2698 37.8329 20.0209 37.8333 20.8431V31.1673C37.8329 31.9894 37.3671 32.7405 36.6308 33.1064L27.9642 37.4398C27.3539 37.7452 26.6353 37.7452 26.025 37.4398L17.3583 33.1064C16.6228 32.7358 16.1609 31.9801 16.1667 31.1564V20.8431C16.1671 20.0209 16.6329 19.2698 17.3692 18.9039L26.0358 14.5706C26.6432 14.2688 27.3568 14.2688 27.9642 14.5706Z" stroke="#444B95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5133 19.6733L27 24.9167L37.4866 19.6733" stroke="#444B95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27 37.6565V24.9165" stroke="#444B95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5833 16.7915L32.4166 22.2082" stroke="#444B95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

</svg>
)
const StatSVG = () => (
<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.8333 17.25H29.1666V36.75H24.8333V17.25Z" stroke="#444B95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.5 22.6665H37.8333V36.7498H33.5V22.6665Z" stroke="#444B95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1667 28.0835H20.5V36.7502H16.1667V28.0835Z" stroke="#444B95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

// sVG END 



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
               
                {/* Space Below */}
                <div className="space-above"></div>
                {/* Space End */}

                    <div 
                     className={cnTwo} 
                     onClick={()=>{
                     setDashboard(1)
                     setInventory(0)
                    }}><InvSVG />
                     </div>

                     <div 
                    className={cnOne} 
                    onClick={()=>{
                    setInventory(1)
                    setDashboard(0)
                    }}><StatSVG />
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