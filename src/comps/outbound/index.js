import React from 'react';



function Outbound({isOn, }){
    if (isOn === true) {
        
    
    return (

        <div className="page">
            <p className="main">
                Outbound
            </p>
            <div className="card">
                Card
            </div>
        </div>
        
          )


}
}
Outbound.defaultProps = {
    className:"main",
    isOn: true
}



export default Outbound;