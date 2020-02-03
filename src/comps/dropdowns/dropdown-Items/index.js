import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

function DdItem({itemTitle, onClick, active}){

    var cn = "dd_items";

    if(active){
        cn = 'dd_items dd_items_active'
    }

    return (
        <div onClick={onClick} className={cn}>
           <FaAngleRight /> {itemTitle}
        </div>
    )
}


DdItem.defaultProps = {
    itemTitle:"Default Title",
    onClick:()=>{},
    active:false,


};

export default DdItem;