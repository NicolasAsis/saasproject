import React, {useState} from 'react';

import CardItem from '../card_item';
import FilterBar from '../filter-bar';
import MainButton from '../mainButton';



function Card({ ShowInbound = false ,ShowOutbound = true, setPage = false, headerBarFontSize, InvYear, cardFontSize, cardFontFamily, headBarFontFamily, HeadBarHeight, cardBorderRadius }){
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
    var IbTabCol = 'grey'
    var ObTabCol = 'grey'
    var cnOne = "tab1";
    var cnTwo = "tab2";

    var setIn = 1;
    var setOut = 0;

    if (setPage){
        setOut = 1;
        setIn = 0;
       
    } else {
        setIn = 1;
        setOut = 0;
      
    }



    if ( inbound === setIn ){
        cnOne = "tab1 tab:active";
        ObTabCol = "#8C93D5";
        IbTabCol = "grey";
        ShowOutbound = true;
        ShowInbound = false;
    } else if ( inbound === setOut ) {
        ShowInbound = false;
        ObTabCol = "grey"
        cnOne = "tab1 tab-inactive"
    }

    if ( outbound === setIn ){
        IbTabCol = "#8C93D5"
        ObTabCol = "grey"
        cnTwo = "tab2 tab:active";
        ShowOutbound = false;
        ShowInbound = true;
    } else if ( outbound === setOut ) {
        ShowInbound = false;
        IbTabCol = "grey"
        cnTwo = "tab2 tab-inactive"
    }

//  end

    return (

        
        <div className="card" style={{textAlign: 'left'}}>
            <h1 style={{color: 'rgb(140, 147, 213)', margin:"0px", paddingBottom: "20px"}}>Inventory/{InvYear}</h1>
            <div className="tab-container">
       
            <div 
            style={{
                fontSize:cardFontSize,
                fontFamily:cardFontFamily,
                borderTopLeftRadius:cardBorderRadius,
                borderTopRightRadius:cardBorderRadius,
                color: ObTabCol
            }}
                className={cnOne} 
                onClick={()=>{
                setInbound(setIn)
                setOutBound(setOut)
                setActive(active)
             }}>OUTBOUND
             </div>
             
            <div 
              style={{
                fontSize:cardFontSize,
                fontFamily:cardFontFamily,
                borderTopLeftRadius:cardBorderRadius,
                borderTopRightRadius:cardBorderRadius,
                color: IbTabCol
            }}
                className={cnTwo} 
                onClick={()=>{
                setInbound(setOut)
                setOutBound(setIn)
             }}>INBOUND
             </div>
                <div className="white-space"></div>
            </div>

        {/* Start of showOutbound */}
        {
        ShowOutbound&&(
        <div style={{flex:1}}>
        
            <div style={{ display:'flex', flex:1, padding: "15px",  backgroundColor:'white'}}>
            <FilterBar
             />
            </div>
           
            <div className="content-body">
        
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
     {/* End of show outbound */}

    {/* Start of showInboud */}
{
ShowInbound&&(
    <div style={{flex:1}}>
        <div style={{
                display:'flex',
                flex:1, 
                alignItems:'center', 
                padding: "15px",  
                borderTop:"1px solid rgb(140, 147, 213, 0.1)",
                backgroundColor:'white',
                paddingLeft:'61vw'
                }}>  
        
                <MainButton 
                click={()=>{alert('added Item')}}
                width={"13vw"}
                defaultText={'Add Item'}
                addIcon={true} 
                IosIcon={true}
                customIcon="IoIosAddCircle"/>
         
        </div>
        
            <div className="content-body">
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
    {/* End of showInbound */}
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