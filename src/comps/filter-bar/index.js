import React from 'react'
import Dropdown from '../dropdowns'



var items = [
    {
        itemTitle:'Profile',
        onClick:()=>{alert("go to profile")}
    },
    {
        itemTitle:'Settings',
        onClick:()=>{alert("go to Settings")}
    },
    {
        itemTitle:'DashBoard',
        active:true
    },

    {
        itemTitle:'Stats',
        onClick:()=>{alert("go to Stats")}
    }
]


function FilterBar({}){


    
    return (
        <div className="barbody">
        <div className="space"></div>
            
            <Dropdown 
            items={items}
            dropdown={true}
            title="month"
            
            />
            <Dropdown 
            items={items}
            dropdown={true}
            title="model"
            />
            <Dropdown 
            items={items}
            dropdown={true}
            title="year"
            />
      
    
         
        <div className="space"></div>
        <div className="space"></div>
        <input  type='text' onChange="SearchInventory()" className="search" placeholder="search" />
            

        </div>
    )
}

export default FilterBar