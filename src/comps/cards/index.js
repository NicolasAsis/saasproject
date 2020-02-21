import React, {useState} from 'react';
import FilterBar from '../filter-bar';



function Card({ }){
    const [inbound, setInbound] = useState(1)
    const [outbound, setOutBound] = useState(0)
    const [active, setActive] = useState(true)
    
// #1 Makes Tab color change on click
    var cnOne = "tab1";
    var cnTwo = "tab2";

    if ( inbound === 1 ){
        cnOne = "tab1 tab:active";
    } else if ( inbound === 0 ) {
        cnOne = "tab1 tab-inactive"
    }

    if ( outbound === 1 ){
        cnTwo = "tab2 tab:active";
    } else if ( outbound === 0 ) {
        cnTwo = "tab2 tab-inactive"
    }
//  end

    return (

        <div className="card">
            <div className="tab-container">
       
            <div 
                className={cnOne} 
                onClick={()=>{
                setInbound(1)
                setOutBound(0)
                setActive(active)
             }}>INBOUND
             </div>
            <div 
                className={cnTwo} 
                onClick={()=>{
                setInbound(0)
                setOutBound(1)
             }}>OUTBOUND
             </div>
                <div className="white-space"></div>
            </div>
        
            <div className="body">
        
                <div className="item-section">
                    <div className="item_details">
                        <div className="detail_heading">Date</div>
                        <div className="detail_heading">TiD</div>
                        <div className="detail_heading">Model#</div>
                        <div className="detail_heading">Serial#</div>
                        <div className="detail_heading">MiD#</div>
                        <div className="detail_heading">Merchant</div>
                        <div className="detail_heading">Seller</div>
                        <div className="detail_heading">Status</div>
                    </div>
                    <p className="item">item aray map goes here</p>
                    <p className="item">item aray map goes here</p>
                    <p className="item">item aray map goes here</p>
                    <p className="item">item aray map goes here</p>
                    <p className="item">item aray map goes here</p>
  
                </div>     
            </div>
        </div>
          )
}

Card.defaultProps = {
 
}



export default Card;