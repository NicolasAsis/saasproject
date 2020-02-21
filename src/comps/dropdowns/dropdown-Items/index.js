import React from 'react';
import { GoPrimitiveDot} from 'react-icons/io';

function DdItem({itemTitle, onClick, active}){

    var cn = "dd_items";

    if(active){
        cn = 'dd_items dd_items_active'
    }

    return (
        <div onClick={onClick} className={cn}>
         {itemTitle}
        </div>
    )
}


DdItem.defaultProps = {
    itemTitle:"Default Title",
    onClick:()=>{},
    active:false,


};

export default DdItem;