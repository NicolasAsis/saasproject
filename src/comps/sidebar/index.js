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

const UserSVG = () => (
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22" cy="22" r="22" fill="#444B95"/>
</svg>

)
// SVG END ^


var cnInboundHeadingOne = "year-heading";
var cnInboundHeadingTwo = "year-heading";
var cnInboundHeadingThree = "year-heading";
var cnOutboundHeadingOne = "year-heading";
var cnOutboundHeadingTwo = "year-heading";
var cnOutboundHeadingThree = "year-heading";
var cnCategoryHeadingOne = "Slider-category-Titles";
var cnCategoryHeadingTwo = "Slider-category-Titles";


function Sidebar({barWidth, TitleOne, TitleTwo, InboundYearOne, InboundYearTwo, InboundYearThree, OutboundYearOne, OutboundYearTwo, OutboundYearThree, PageName}){

    const [inboud_year_one, setInboud_Year_One] = useState(0)
    const [inboud_year_two, setInboud_Year_Two] = useState(0)
    const [inboud_year_three, setInboud_Year_Three] = useState(0)
    const [outbound_year_one, setOutbound_Year_One] = useState(0)
    const [outbound_year_two, setOutbound_Year_Two] = useState(0)
    const [outbound_year_three, setOutbound_Year_Three] = useState(0)
    const [category_one, setCategory_One] = useState(0)
    const [category_two, setCategory_Two] = useState(0)
    const [inventory, setInventory] = useState(0)
    const [dashboard, setDashboard] = useState(1)
    


// INBOUND OR OUT BOUND ACTIVE INACTIVE BELOW
    if ( category_one === 1){
        cnCategoryHeadingOne = "Slider-category-Titles Slider-category-Titles-active"
    } else if ( category_one === 0 ) {
        cnCategoryHeadingOne = "Slider-category-Titles"
    }
    
    if ( category_two === 1){
        cnCategoryHeadingTwo = "Slider-category-Titles Slider-category-Titles-active"
    } else if ( category_two === 0 ) {
        cnCategoryHeadingTwo = "Slider-category-Titles"
    }
    // End

    // Color change on selected year for Inbound Below
    
    if ( inboud_year_one === 1){
        cnInboundHeadingOne = "year-heading year-heading_active"
    } else if ( inboud_year_one === 0 ) {
        cnInboundHeadingOne = "year-heading"
    }
    if ( inboud_year_two === 1){
        cnInboundHeadingTwo = "year-heading year-heading_active"
    } else if ( inboud_year_two === 0 ) {
        cnInboundHeadingTwo = "year-heading"

    }
    if ( inboud_year_three === 1){
        cnInboundHeadingThree = "year-heading year-heading_active"
    } else if ( inboud_year_three === 0 ) {
        cnInboundHeadingThree = "year-heading"
    }
    // End

    // Color change on selected year for Outbound Below
    
    if ( outbound_year_one === 1){
        cnOutboundHeadingOne = "year-heading year-heading_active"
    } else if ( outbound_year_one === 0 ) {
        cnOutboundHeadingOne = "year-heading"
    }
    if ( outbound_year_two === 1){
        cnOutboundHeadingTwo = "year-heading year-heading_active"
    } else if ( outbound_year_two === 0 ) {
        cnOutboundHeadingTwo = "year-heading"

    }
    if ( outbound_year_three === 1){
        cnOutboundHeadingThree = "year-heading year-heading_active"
    } else if ( inboud_year_three === 0 ) {
        cnOutboundHeadingThree = "year-heading"
    }
    // End

    // slider below
    var cnSlider = "year_slider";
    var cnOne = "inventory-icon";
    var cnTwo = "dashboard-icon";

    if ( inventory === 1 ){
        cnOne = "inventory-icon inventory-icon:active";
        cnSlider = "year_slider-inactive"
    } else if ( inventory === 0 ) {
        cnOne = "inventory-icon inventory-icon-inactive"
        cnSlider = "year_slider";
    }

    if ( dashboard === 1 ){
        cnTwo = "dashboard-icon dashboard-icon:active";
    } else if ( dashboard === 0 ) {
        cnTwo = "dashboard-icon dashboard-icon-inactive"
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

                <div className="userIcon">
                        <UserSVG />
                    </div>
             </div>


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
                        // unset inbound actives
                        setInboud_Year_Two(0)
                        setInboud_Year_One(0)
                        setInboud_Year_Three(0)
                       }}className={cnOutboundHeadingThree}>{OutboundYearThree}
                    </div>    
                </div>
             </div>
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