import React, {useState} from 'react';

import CardItem from '../card_item';
import FilterBar from '../filter-bar';



function Card({headerBarFontSize, cardFontSize, cardFontFamily, headBarFontFamily, HeadBarHeight, cardBorderRadius }){
    const [inbound, setInbound] = useState(1)
    const [outbound, setOutBound] = useState(0)
    const [active, setActive] = useState(true)

    var items = [
            {
                infoText: "Feb 27"
              },
              {
                  infoText: "800066"
              },
              {
                  infoText: "AMP-8000"
              },
              {
                  infoText: "A12345678"
              },
              {
                  infoText: "P2329373"
              },
              {
                  infoText: "Omni.corp"
              },
              {
                  infoText: "Danny Joe"
              }
    ]

    var items2 = [
        {
            infoText: "Feb 20"
          },
          {
              infoText: "798660"
          },
          {
              infoText: "AMP-8000"
          },
          {
              infoText: "A12345678"
          },
          {
              infoText: "P2329373"
          },
          {
              infoText: "Omni.corp"
          },
          {
              infoText: "Dora"
          }
]
    
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
            style={{
                fontSize:cardFontSize,
                fontFamily:cardFontFamily,
                borderTopLeftRadius:cardBorderRadius,
                borderTopRightRadius:cardBorderRadius
            }}
                className={cnOne} 
                onClick={()=>{
                setInbound(1)
                setOutBound(0)
                setActive(active)
             }}>OUTBOUND
             </div>
             
            <div 
              style={{
                fontSize:cardFontSize,
                fontFamily:cardFontFamily,
                borderTopLeftRadius:cardBorderRadius,
                borderTopRightRadius:cardBorderRadius
            }}
                className={cnTwo} 
                onClick={()=>{
                setInbound(0)
                setOutBound(1)
             }}>INBOUND
             </div>
                <div className="white-space"></div>
            </div>
            <div style={{ display:'flex', flex:1, margin: "15px"}}>
            <FilterBar />
            </div>
           
        
            <div className="body">
         
        
                <div className="item-section">
                
                    <div className="item_details" 
                    style={{
                        fontSize:headerBarFontSize,
                        fontFamily:headBarFontFamily,
                        height: HeadBarHeight
                        }}>
                         
                        <div className="detail_heading">Date</div>
                        <div className="detail_heading">TiD</div>
                        <div className="detail_heading">Model#</div>
                        <div className="detail_heading">Serial#</div>
                        <div className="detail_heading">MiD#</div>
                        <div className="detail_heading">Merchant</div>
                        <div className="detail_heading">Seller</div>
                        <div className="detail_heading">Status</div>
                    </div>
                </div>  
            </div>
            <CardItem 
                items={items}
            />
            <CardItem 
                items={items2}
            />
            <CardItem />
        </div>
          )
}

Card.defaultProps = {
    headerBarFontSize: '10pt',
    cardFontSize: '12pt',
    cardFontFamily: 'Roboto, sans-serif',
    headBarFontFamily: 'Roboto, sans-serif',
    HeadBarHeight: '13vh',
    cardBorderRadius: '10px'

 
}



export default Card;