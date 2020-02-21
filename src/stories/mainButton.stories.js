import React from 'react';
import '../App.scss';

import MainButton from '../comps/mainButton';

export default {
    title:'Main Button',
    component:MainButton
}

export const DefaultButton = () => {
    return <MainButton />
}

export const CustomDimensionsButton = () => {
    return <MainButton 
        width="30%"
        height="39px"
        textSize="15px"
    />
}

export const ButtonWithIcon = () => {
    return <MainButton 
        addIcon="true"
        height="39px"
        textSize="15px"
    />
}