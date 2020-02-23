import React from 'react';
import '../App.scss';

import Sidebar from '../comps/sidebar'



export default {
    title:':Sidebar',
    component:Sidebar
}


export const DefaultSidebar = () => {
    return  <Sidebar
    TitleOne = "Inbound"
    TitleTwo = "Outbound"
    OutboundYearOne = "2018"
    OutboundYearTwo = "2019"
    OutboundYearThree = "2020"
    InboundYearOne = "2018"
    InboundYearTwo = "2019"
    InboundYearThree = "2020" />
}

