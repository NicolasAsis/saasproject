import React from 'react'
import Dropdown from '../dropdowns'



function FilterBar({placeholder, placholderColor}){

    var Monthitems = [
        {
            itemTitle:'January',
            onClick:()=>{alert("go to january")}
        },
        {
            itemTitle:'Feburary',
            onClick:()=>{alert("go to Feburary")}
        },
        {
            itemTitle:'March',
            onClick:()=>{alert("go to March")}
           
        },
    
        {
            itemTitle:'April',
            onClick:()=>{alert("go to April")}
        }
    ]
    var Modelitems = [
        {
            itemTitle:'A010493B',
            onClick:()=>{alert("go to model#")}
        },
        {
            itemTitle:'ALW402B',
            onClick:()=>{alert("go to model#")}
        },
        {
            itemTitle:'BU209DO',
            onClick:()=>{alert("go to model#")}
        },
    ]
    
    
    return (
        <div className="barbody">

            <Dropdown 
            items={Monthitems}
            dropdown={true}
            title= {"month"}
            ddTitle = {
                Monthitems[0].itemTitle
            }
            ddwidth = {"40%"}
            ddTitleColor = {'#888FD3'}
            iconSize = {13}
            icon = {'IoIosArrowDown'}
            iconColor = {'#888FD3'}
            key={0}
            />

            <Dropdown 
            items={Modelitems}
            dropdown={true}
            title= {"model"}
            ddTitle = {
                Modelitems[0].itemTitle
            }
            ddwidth = {"40%"}
            ddTitleColor = {'#888FD3'}
            iconSize = {13}
             icon = {'IoIosArrowDown'}
             iconColor = {'#888FD3'}
            key={1}
            />


            
            <input  type='text' className="search" style={{color: placholderColor}} placeholder={placeholder} />
        </div>
    )
}

FilterBar.defaultProps = {
    placeholder: "search",
    placholderColor: '#888FD3'
}

export default FilterBar