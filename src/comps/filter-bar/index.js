import React from 'react'
import Dropdown from '../dropdowns/index'


function FilterBar(){
    return (
        <div className="barbody">
        <div className="space"></div>
            <Dropdown title="Month" />
            <Dropdown title="Brand" />
            <Dropdown title="Model" />
        <div className="space"></div>
        <div className="space"></div>
            <input  type='text' onChange="SearchInventory()" className="search" placeholder="search" />
            

        </div>
    )
}

export default FilterBar