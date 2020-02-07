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