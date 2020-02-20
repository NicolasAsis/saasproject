import FilterBar from '../comps/filter-bar'
import React from 'react'
import '../App.scss';
import Dropdown from '../comps/dropdowns';





export default {
    title: "Filters",
    Component:FilterBar
}
    
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



export const DefaultFilter = () => {
    return  (
        
        <div style={{flex:1, display:"flex", flexDirection:"row"}}>

            <Dropdown 
            items={items}
            dropdown={true}
            title="month"
            key={0}
            />

            <Dropdown 
            items={items}
            dropdown={true}
            title="model"
            key={1}
            />

            <Dropdown 
            items={items}
            dropdown={true}
            title="year"
            key={2}
            />

            <FilterBar />

        </div>
  
    )
}
    