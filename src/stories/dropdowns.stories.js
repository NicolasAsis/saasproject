import Dropdown from '../comps/dropdowns'
import React from 'react'
import '../App.scss';



export default {
    title: "Dropdowns",
    Component:Dropdown
}


var items = [
    {
        itemTitle:'default',
        onClick:()=>{alert("go to profile")}
    },
    {
        itemTitle:'default',
        onClick:()=>{alert("go to Settings")}
    },
    {
        itemTitle:'default',
        onClick:()=>{alert("go to Stats")}
    }
]


export const DefualtDropdown = () => {
    return  <Dropdown
            title='default'
            itemTitle="default"
            items={items}
            dropdown={true} 
            children={true}
        />
}
    

    