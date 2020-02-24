import React from 'react';
import '../App.scss';

import Popup from '../comps/popup';

var items = [
    {
        defaultText:"Random"
    },
    {
        defaultText:"Custom"
    },
]

export default {
    title:'Popup',
    component:Popup
}

export const DefaultPopup = () => {
    return <Popup />
}

export const CustomTitlePopup = () => {
    return <Popup defaultTitle="You saved successfully!"/>
}

export const PopupWithButtons = () => {
    return <Popup 
    defaultTitle="Do you want to delete this item?"
    addBut="true"
    />
}

export const PopupWithCustomButtons = () => {
    return <Popup 
    defaultTitle="Do you want to move this item?"
    addBut="true"
    items={items}
    />
}