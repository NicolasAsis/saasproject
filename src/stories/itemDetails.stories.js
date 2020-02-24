import React from 'react';
import '../App.scss';

import ItemDetails from '../comps/itemDetails';

export default {
    title:'Item Details',
    component:ItemDetails
}

export const DefaultItemDetails = () => {
    return <ItemDetails />
}

export const ItemDetailsWithBar = () => {
    return <ItemDetails 
        addSelectedBar="true"
    />
}
