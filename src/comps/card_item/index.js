import React, {useState} from 'react';

import {FiMoreVertical} from 'react-icons/fi';

import {FiMoreHorizontal} from 'react-icons/fi';

import ItemInfo from './itemInfo';

import StatusDropdown from '../statusDropdown';


function CardItem({moreInfo}){

    const [drop,setDrop] = useState(false);

    var classN = "itemCont";

    var moreDet = <FiMoreVertical className='moreIcon_style' onClick={()=>{setDrop(!drop);}}/>;

    if(drop){
        classN="itemCont itemCont_active"
        moreDet = <FiMoreHorizontal className='moreIcon_style' onClick={()=>{setDrop(!drop);}}/>;
    }
   
    return (
        <div className={classN}>
            <ItemInfo />
            <ItemInfo />
            <ItemInfo />
            <ItemInfo />
            <ItemInfo />
            <div className="itemInfo"><StatusDropdown /></div>
            <div className="itemInfo"> {moreDet}</div>
        </div>
    )
}

CardItem.defaultProps = {
    moreInfo:false
}



export default CardItem;