import Dropdown from '../comps/dropdowns'
import React from 'react'
import '../App.scss';



export default {
    title: "Dropdowns",
    Component: "Dropdown"
}


export const monthDropdown = () => {
    return  <Dropdown
            title="Month" />
}
    
export const brandDropdown = () => {
    return  <Dropdown
            title="Brand" />
}
    
export const modelDropdown = () => {
    return  <Dropdown
            title="Model" />
}
    