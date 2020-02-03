import Dropdown from '../comps/dropdowns'
import React from 'react'
import '../App.scss';



export default {
    title: "Dropdowns",
    Component: "Dropdown"
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


export const monthDropdown = () => {
    return  <Dropdown
            title='Month'
            itemTitle="Month"
            items={items}
            dropdown={true} 
        />
}
    
export const brandDropdown = () => {
    return  <Dropdown
            items={items}
            dropdown={true} 
            title="Brand"
            itemTitle="" />
}
    
export const modelDropdown = () => {
    return  <Dropdown
            items={items}
            dropdown={true} 
            title="Model"
            itemTitle="" />
}
    