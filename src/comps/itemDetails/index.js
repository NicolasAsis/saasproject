import React, {useState} from 'react';

import * as FeatherIcon from 'react-icons/fi';


function ItemDetails({customIcon}){

    var Icon = FeatherIcon[customIcon];
   
    return (
        <div>
        Hello
        </div>
    )
}

ItemDetails.defaultProps = {
    customIcon:"FiSave"
}

export default ItemDetails;