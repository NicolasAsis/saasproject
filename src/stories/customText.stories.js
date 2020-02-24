import CustomText from '../comps/customText'
import React from 'react'
import '../App.scss';



export default {
    title: "customText",
    Component:CustomText
}

export const DefaultCustomText = () => {
    return  <CustomText
                Text = {'TEXT GOES HERE'}
                TextColor = {'white'}
                TextBg = {'teal'}
                TextFont = {'Roboto} sans-serif'}
                TextSize = {'14pt'}
                TextHeight = {''}
                // Positioning below
                Textdisplay = {'flex'}
                TextPosition = {''}
                TextMargin = {'0px'}
                TextPadding = {'0px'}
                TextFLex = {'1'}
                // Text box stuff below "parent container of child text div"
                textBoxDimensionsHieght = {'100vh'}
                TextBoxDimensionsWidth = {''}
                textBoxBG = {'black'}
                textBoxFlex = {'1'}
                TextAlign = {'flex-start'}
                justifyText = {''}
                textBoxdisplay = {'flex'}
                AlignTextDiv = {''}
         />
}

export const DefaultCustomTextRight = () => {
    return  <CustomText
                Text = {'TEXT GOES HERE'}
                TextColor = {'white'}
                TextBg = {'teal'}
                TextFont = {'Roboto} sans-serif'}
                TextSize = {'14pt'}
                TextHeight = {''}
                // Positioning below
                Textdisplay = {'flex'}
                TextPosition = {''}
                TextMargin = {'0px'}
                TextPadding = {'0px'}
                TextFLex = {'1'}
                // Text box stuff below "parent container of child text div"
                textBoxDimensionsHieght = {'100vh'}
                TextBoxDimensionsWidth = {''}
                textBoxBG = {'black'}
                textBoxFlex = {'1'}
                TextAlign = {'flex-end'}
                justifyText = {''}
                textBoxdisplay = {'flex'}
                AlignTextDiv = {''}
         />
}

    
export const CustomTextFlex = () => {
    return  <CustomText
                Text = {'TEXT GOES HERE'}
                TextColor = {'white'}
                TextBg = {'teal'}
                TextFont = {'Roboto} sans-serif'}
                TextSize = {'14pt'}
                TextHeight = {''}
                // Positioning below
                Textdisplay = {'flex'}
                TextPosition = {''}
                TextMargin = {'0px'}
                TextPadding = {'0px'}
                TextFlex = {'0.5'}
                // Text box stuff below "parent container of child text div"
                textBoxDimensionsHieght = {'100vh'}
                TextBoxDimensionsWidth = {''}
                textBoxBG = {'black'}
                textBoxFlex = {'1'}
                TextAlign = {''}
                justifyText = {'center'}
                textBoxdisplay = {'flex'}
                AlignTextDiv = {''}
         />
}
    
export const UltimateOptionsCustomText = () => {
    return  <CustomText
                Text = {'Please bro'}
                TextColor = {'white'}
                TextBg = {'maroon'}
                TextFont = {'Arial, sans-serif'}
                TextSize = {'30pt'}
                TextHeight = {'50vh'}
                // Positioning below
                Textdisplay = {'flex'}
                TextPosition = {''}
                TextMargin = {'0px'}
                TextPadding = {'0px'}
                TextFlex = {'0.25'}
                // Text box stuff below "parent container of child text div"
                textBoxDimensionsHieght = {'100vh'}
                TextBoxDimensionsWidth = {'100vw'}
                textBoxBG = {'beige'}
                textBoxFlex = {'1'}
                alignText = {'center'}
                TextAlign = {'center'}
                justifyText = {'center'}
                textBoxdisplay = {'flex'}
                AlignTextDiv = {'center'}

         />

 
                
}
    