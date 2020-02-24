import React from 'react';
import '../App.scss';

import StatusDropdown from '../comps/statusDropdown';

export default {
    title:'Status Dropdown',
    component:StatusDropdown
}

export const DefaultStatusDropdown = () => {
    return <StatusDropdown />
}

export const CustomStatusDropdown = () => {
    return <StatusDropdown 
        statusText="Test"
        circleColor="green"
        textColor="green"
        arrowColor="green"
        customIcon="FiCheck"
    />
}