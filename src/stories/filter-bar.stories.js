import FilterBar from '../comps/filter-bar'
import React from 'react'
import '../App.scss';
import Dropdown from '../comps/dropdowns';





export default {
    title: "Filters",
    Component:FilterBar
}
    
var Monthitems = [
    {
        itemTitle:'January',
        onClick:()=>{alert("go to profile")}
    },
    {
        itemTitle:'Feburary',
        onClick:()=>{alert("go to Settings")}
    },
    {
        itemTitle:'March',
        onClick:()=>{alert("go to Settings")}
       
    },

    {
        itemTitle:'April',
        onClick:()=>{alert("go to Stats")}
    }
]
var Modelitems = [
    {
        itemTitle:'A010493B',
        onClick:()=>{alert("go to profile")}
    },
    {
        itemTitle:'ALW402B',
        onClick:()=>{alert("go to Settings")}
    },
    {
        itemTitle:'BU209DO',
        onClick:()=>{alert("go to Stats")}
    },
]



export const DefaultFilter = () => {
    return  (
        
        <div style={{flex:1, display:"flex", flexDirection:"row"}}>

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

      
            <FilterBar />

        </div>
  
    )
}
    