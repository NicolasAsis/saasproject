import React from 'react';

function ItemInfo({infoText}){

    return (
        <div className="itemDetails">{infoText}</div>
    )
}

ItemInfo.defaultProps = {
    infoText:"Default Item"
};

export default ItemInfo;