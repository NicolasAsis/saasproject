import React from 'react';
import '../App.scss';

import Menu from '../comps/menu';

export default {
    title:':Menus',
    component:Menu
}

var items = [
    {
        itemTitle:'Profile',
        onClick:()=>{alert("go to profile")}
    },
    {
        itemTitle:'Settings',
        onClick:()=>{alert("go to Settings")}
    },
    {
        itemTitle:'DashBoard',
        active:true
    },

    {
        itemTitle:'Stats',
        onClick:()=>{alert("go to Stats")}
    }
]

export const DefaultMenu = () => {
    return <Menu 
    title='My menu'
    items={items}
    dropdown={true}
     />
}

export const MenuWithMyTags = () =>{
    return <Menu
            dropdown={true}>
            <div>My custom tag</div>
            <img alt="fart" class="image_tag" src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"></img>
        
    </Menu> 
    
  
}
export const MenuWithTitle = () =>{
    return <Menu 
    menuTitle = "My Menu"
    />
}

export const CustomItemsMenu = () =>{
    return <Menu 
    items={items}
    />
}

export const DropdownMenu = () => {
    return <Menu 
    items={items} 
    dropdown={true}/>
}

export const SlidedownMenu = () => {
    return <Menu
    items={items}
    slide="left" />
}