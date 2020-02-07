import React from 'react';
import '../App.scss';

import CardItem from '../comps/card_item';

export default {
    title:'Item Card',
    component:CardItem
}

export const DefaultItemCard = () => {
    return <CardItem />
}