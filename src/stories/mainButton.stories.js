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