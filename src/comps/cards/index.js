import React from 'react';



function Card({isOn, }){
    if (isOn === true) {
        
    
    return (

        <div className="card">
            <div className="tab-container">
       
                <div className="tab1">INBOUND</div>
                <div className="tab2">OUTBOUND</div>
                <div className="white-space"></div>
              
            </div>
        
            <div className="body">
          
                item-holder card
            </div>
        </div>
          )


}
}
Card.defaultProps = {
    className:"card",
    isOn: true
}



export default Card;