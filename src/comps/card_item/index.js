import React, {useState} from 'react';

import {FiMoreVertical} from 'react-icons/fi';

import {FiMoreHorizontal} from 'react-icons/fi';

import ItemInfo from './itemInfo';

import StatusDropdown from '../statusDropdown';

import ItemDetails from '../itemDetails'


function CardItem({moreInfo,children}){

    const [drop,setDrop] = useState(false);
    const [active,setActive] = useState(false);

    var classN = "itemCont";
    var cn = "moreDet";

    var moreDetIcon = <FiMoreVertical className='moreIcon_style' onClick={()=>{setDrop(!drop);}}/>;

    if(drop){
        cn="moreDet moreDet_active";
        moreDetIcon = <FiMoreHorizontal className='moreIcon_style' onClick={()=>{setDrop(!drop);}}/>;
    }
    else if(active) {
        classN="itemCont itemContSelect";
    }
   
    return (
        <div 
        className={classN} 
        onClick={()=>{
            setActive(!active);
        }}>
            <div className="itemSubCont">
                <ItemInfo infoText="Jan 25"/>
                <ItemInfo />
                <ItemInfo />
                <ItemInfo />
                <ItemInfo />
                <ItemInfo />
                <ItemInfo />
                <div className="itemInfo"><StatusDropdown /></div>
                <div className="itemInfo"> {moreDetIcon}</div>
            </div>
            {children}
            <div className={cn}>
                <ItemDetails  />
            </div>
        </div>
    )
}

CardItem.defaultProps = {
    moreInfo:false,
    children:null
}



export default CardItem;