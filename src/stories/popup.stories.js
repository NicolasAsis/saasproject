import React from 'react';
import '../App.scss';

import Popup from '../comps/popup';

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