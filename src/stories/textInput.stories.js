import React from 'react';
import '../App.scss';

import TextInput from '../comps/textInput';

export default {
    title:'Text Input',
    component:TextInput
}

export const DefaultTextInput = () => {
    return <TextInput />
}

export const CustomTitleTextInput = () => {
    return <TextInput 
        customTitle="Custom Title"
    />
}

export const TextInputWithPlaceholder = () => {
    return <TextInput 
        addPlaceholder="true"
        customPlaceholder="Test"
    />
}

export const TextInputWithCustomColors = () => {
    return <TextInput 
        inputBorder="green"
        titleColor="green"
        addPlaceholder="true"
    />
}
