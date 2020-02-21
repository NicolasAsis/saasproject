import Dropdown from '../comps/dropdowns'
import React from 'react'
import '../App.scss';



export default {
    title: "Dropdowns",
    Component:Dropdown
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


export const DefualtDropdown = () => {
    return  <Dropdown
            title='default'
            itemTitle="default"
            items={items}
            dropdown={true} 
        />
}
    

    