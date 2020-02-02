import React from 'react'


function FilterBar(){
    return (
        <div className="barbody">
   
            <input  type='text' onChange="SearchInventory()" className="search" />

            <div className="space"></div>

            <div className="item">filter 1</div>
            <div className="item">filter 2</div>
            <div className="item">filter 3</div>
            <div className="item">filter 4</div>

        </div>
    )
}

export default FilterBar