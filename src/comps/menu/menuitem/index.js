import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

function MenuItem({itemTitle, onClick, active}){

    var cn = "menu_items";

    if(active){
        cn = 'menu_items menu_items_active'
    }

    return (
        <div onClick={onClick} className={cn}>
           <FaAngleRight /> {itemTitle}
        </div>
    )
}


MenuItem.defaultProps = {
    itemTitle:"Default Title",
    onClick:()=>{},
    active:false

};

export default MenuItem;