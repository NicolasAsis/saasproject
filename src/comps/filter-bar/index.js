import React from 'react'
import Dropdown from '../dropdowns'



function FilterBar({placeholder}){

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
            title="month"
            key={0}
            />

            <Dropdown 
            items={Modelitems}
            dropdown={true}
            title="model"
            key={1}
            />

            
            <input  type='text' className="search" placeholder={placeholder} />
        </div>
    )
}

FilterBar.defaultProps = {
    placeholder: "default"
}

export default FilterBar