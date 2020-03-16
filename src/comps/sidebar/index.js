import React, {useState} from 'react';
import PlanCardHolder from '../planCardHolder'
import Card from '../cards'
import * as icon from '../../imgs/svg'




var cnInboundHeadingOne = "year-heading";
var cnInboundHeadingTwo = "year-heading";
var cnInboundHeadingThree = "year-heading";
var cnOutboundHeadingOne = "year-heading";
var cnOutboundHeadingTwo = "year-heading";
var cnOutboundHeadingThree = "year-heading";
var cnCategoryHeadingOne = "Slider-category-Titles";
var cnCategoryHeadingTwo = "Slider-category-Titles";


// create a system where user pay and then ispaid becomes 1

var isPaid = 1;
var freeze = 0;


function Sidebar({barWidth, TitleOne, BillingPage = false, InventoryPage = true, TitleTwo, InboundYearOne, InboundYearTwo, InboundYearThree, OutboundYearOne, OutboundYearTwo, OutboundYearThree, PageName}){

    const [inboud_year_one, setInboud_Year_One] = useState(0)
    const [inboud_year_two, setInboud_Year_Two] = useState(0)
    const [inboud_year_three, setInboud_Year_Three] = useState(0)
    const [outbound_year_one, setOutbound_Year_One] = useState(0)
    const [outbound_year_two, setOutbound_Year_Two] = useState(0)
    const [outbound_year_three, setOutbound_Year_Three] = useState(0)
    const [category_one, setCategory_One] = useState(0)
    const [category_two, setCategory_Two] = useState(1)
    const [inventory, setInventory] = useState(0)
    const [dashboard, setDashboard] = useState(0)
    const [billing, setBilling] = useState(1)



// INBOUND OR OUT BOUND ACTIVE INACTIVE BELOW
var setPageBySlider = false;
var whatYear = "";
var ShowOutbound = true;
var ShowInbound = false;
    if ( category_one === 1){
        cnCategoryHeadingOne = "Slider-category-Titles Slider-category-Titles-active";
        setPageBySlider = true;
        console.log(setPageBySlider)
        // ShowOutbound = true;
        // ShowInbound = false;
    } else if ( category_one === 0 ) {
        // ShowOutbound = false;
        // ShowInbound = true;
        cnCategoryHeadingOne = "Slider-category-Titles"
    }
    
    if ( category_two === 1){
        cnCategoryHeadingTwo = "Slider-category-Titles Slider-category-Titles-active";
        setPageBySlider = false;
        console.log(setPageBySlider)
        // ShowOutbound = false;
        // ShowInbound = true;
    } else if ( category_two === 0 ) {
        // ShowOutbound = true;
        // ShowInbound = false;
        cnCategoryHeadingTwo = "Slider-category-Titles"
    }
    // End

    // Color change on selected year for Inbound Below
    
    if ( inboud_year_one === 1){
        cnInboundHeadingOne = "year-heading year-heading_active";
        whatYear = InboundYearOne;
    } else if ( inboud_year_one === 0 ) {
        cnInboundHeadingOne = "year-heading"
    }
    if ( inboud_year_two === 1){
        cnInboundHeadingTwo = "year-heading year-heading_active";
        whatYear = InboundYearTwo;
    } else if ( inboud_year_two === 0 ) {
        cnInboundHeadingTwo = "year-heading"

    }
    if ( inboud_year_three === 1){
        cnInboundHeadingThree = "year-heading year-heading_active"
        whatYear = InboundYearThree;
    } else if ( inboud_year_three === 0 ) {
        cnInboundHeadingThree = "year-heading"
    }
    // End

    // Color change on selected year for Outbound Below
    
    if ( outbound_year_one === 1){
        cnOutboundHeadingOne = "year-heading year-heading_active";
        whatYear = InboundYearOne;
    } else if ( outbound_year_one === 0 ) {
        cnOutboundHeadingOne = "year-heading"
    }
    if ( outbound_year_two === 1){
        cnOutboundHeadingTwo = "year-heading year-heading_active";
        whatYear = InboundYearTwo;
    } else if ( outbound_year_two === 0 ) {
        cnOutboundHeadingTwo = "year-heading"

    }
    if ( outbound_year_three === 1){
        cnOutboundHeadingThree = "year-heading year-heading_active";
        whatYear = InboundYearThree;
    } else if ( inboud_year_three === 0 ) {
        cnOutboundHeadingThree = "year-heading"
    }
    // End

    // slider below
    var cnSlider = "year_slider";
    var cnZero = "payment-icon";
    var cnOne = "inventory-icon";
    var cnTwo = "dashboard-icon";


    if ( dashboard === 1 ){
        cnTwo = "dashboard-icon dashboard-icon:active";
    } else if ( dashboard === 0 ) {
        cnTwo = "dashboard-icon dashboard-icon-inactive"
    }

    if ( inventory === 1 ){
        cnOne = "inventory-icon inventory-icon:active";
        cnSlider = "year_slider"
        InventoryPage = true;
    } else if ( inventory === 0 ) {
        InventoryPage = false;
        cnOne = "inventory-icon inventory-icon-inactive"
        cnSlider = "year_slider-inactive";
    }


    if ( billing === 1 ){
        cnZero = "payment-icon payment-icon:active";
        BillingPage = true;
        // cnSlider = "year_slider-inactive"
    } else if ( billing === 0 ) {
        BillingPage = false;
        cnZero = "payment-icon payment-icon-inactive";
        // cnSlider = "year_slider-inactive"
       
    }

//  end

    return (

        <div className="container">

            <div className="bar"
            style={{  flex: barWidth}}>
                {/* Space Below */}
                <div className="space-above"></div>
                {/* Space End */}
               
                {/* Space Below */}
                <div className="space-above"></div>
                {/* Space End */}

                    <div 
                     className={cnTwo} 
                     onClick={()=>{
                     setDashboard(isPaid)
                     setInventory(0)
                     setBilling(freeze)
                    }}><icon.StatSVG />
                     </div>

                     <div 
                    className={cnOne} 
                    onClick={()=>{
                    setInventory(isPaid)
                    setDashboard(0)
                    setBilling(freeze)
                    }}><icon.InvSVG />
                    </div>

                     <div 
                    className={cnZero} 
                    onClick={()=>{
                    setBilling(1)
                    setInventory(0)
                    setDashboard(0)
                    }}><icon.Payment />
                    </div>

                {/* Space Below */}
                <div className="space"></div>
                <div className="space"></div>
                {/* Space End */}

                <div className="userIcon">
                        <icon.UserSVG />
                    </div>
             </div>

          
             {
                 BillingPage&&(
                     <PlanCardHolder />
                 )
             }


                {/* Inbound below */}
             <div className={cnSlider}>
                 
                <div style={{display:"flex", flexDirection:"column", flex:1}}>
                    <h1 className="SliderPageHeading">{PageName}</h1>
                    <div className={cnCategoryHeadingOne} 
                        onClick={()=>{
                        setCategory_One(1)
                        setCategory_Two(0)
                  
                    }}>{TitleOne}
                    </div>
                    <div onClick={()=>{
                        setInboud_Year_One(1)
                        setInboud_Year_Two(0)
                        setInboud_Year_Three(0)
                        setCategory_One(1)
                        setCategory_Two(0)
                       
                        // unset outbound actives
                        setOutbound_Year_One(0)
                        setOutbound_Year_Two(0)
                        setOutbound_Year_Three(0)
                       }}className={cnInboundHeadingOne}>{InboundYearOne}
                    </div>
                    <div onClick={()=>{
                        setInboud_Year_Two(1)
                        setInboud_Year_One(0)
                        setInboud_Year_Three(0)
                        setCategory_One(1)
                        setCategory_Two(0)
                       
                        // unset outbound actives
                        setOutbound_Year_One(0)
                        setOutbound_Year_Two(0)
                        setOutbound_Year_Three(0)
                       }}className={cnInboundHeadingTwo}>{InboundYearTwo}
                    </div>
                    <div onClick={()=>{
                        setInboud_Year_Three(1)
                        setInboud_Year_Two(0)
                        setInboud_Year_One(0)
                        setCategory_One(1)
                        setCategory_Two(0)
                      
                        // unset outbound actives
                        setOutbound_Year_One(0)
                        setOutbound_Year_Two(0)
                        setOutbound_Year_Three(0)
                       }}className={cnInboundHeadingThree}>{InboundYearThree}                 
                     </div>
                </div> 
                {/* Outbound Below */}
                <div style={{display:"flex", flexDirection:"column", flex:1}}>
                <div className={cnCategoryHeadingTwo} 
                        onClick={()=>{
                        setCategory_Two(1)
                        setCategory_One(0)
                    }}>{TitleTwo}
                    </div>
                    <div onClick={()=>{
                        setOutbound_Year_One(1)
                        setOutbound_Year_Two(0)
                        setOutbound_Year_Three(0)
                        setCategory_One(0)
                        setCategory_Two(1)
                        whatYear = InboundYearOne;
                        // unset inbound actives
                        setInboud_Year_Two(0)
                        setInboud_Year_One(0)
                        setInboud_Year_Three(0)
                       }}className={cnOutboundHeadingOne}>{OutboundYearOne}
                    </div>
                    <div onClick={()=>{
                        setOutbound_Year_Two(1)
                        setOutbound_Year_One(0)
                        setOutbound_Year_Three(0)
                        setCategory_One(0)
                        setCategory_Two(1)
                        whatYear = inboud_year_two;
                        // unset inbound actives
                        setInboud_Year_Two(0)
                        setInboud_Year_One(0)
                        setInboud_Year_Three(0)
                       }}className={cnOutboundHeadingTwo}>{OutboundYearTwo}
                    </div>
                    <div onClick={()=>{
                        setOutbound_Year_Three(1)
                        setOutbound_Year_Two(0)
                        setOutbound_Year_One(0)
                        setCategory_One(0)
                        setCategory_Two(1)
                        whatYear = inboud_year_three;
                        // unset inbound actives
                        setInboud_Year_Two(0)
                        setInboud_Year_One(0)
                        setInboud_Year_Three(0)
                       }}className={cnOutboundHeadingThree}>{OutboundYearThree}
                    </div>    
                </div>
             </div>
             {
                 InventoryPage&&(
                    <div style={{margin:"10px", width:'77vw', marginTop:'20px', backgroundColor:'#F9F9FF'}}>
                        <Card 
                        setPage={setPageBySlider}
                        InvYear={whatYear}
                        // ShowInbound={ShowInbound}
                        // ShowOutbound={ShowOutbound}
                        />
                    </div>
                 )
             }

        </div>
          )


}
Sidebar.defaultProps = {
    TitleOne: "Inbound",
    TitleTwo: "Outbound",
    OutboundYearOne: "2018",
    OutboundYearTwo: "2019",
    OutboundYearThree: "2020",
    InboundYearOne: "2018",
    InboundYearTwo: "2019",
    InboundYearThree: "2020",
    PageName: 'Inventory',
    // below is in flex i.e 0.2 flex
    barWidth: 0.1
    //  end ^
}



export default Sidebar;