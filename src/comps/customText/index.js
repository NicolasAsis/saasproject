import React from 'react';



function CustomText({Text, TextHeight, TextColor, TextBg, TextSize, TextFont, TextAlign, AlignTextDiv, textBoxDimensionsWidth, textBoxDimensionsHieght, Textdisplay, textBoxdisplay, justifyText, alignText, TextPosition, TextPadding, TextMargin, TextFlex, textBoxFlex, textBoxBG}){
    return(
        <div style={{
            width: textBoxDimensionsWidth,
            height: textBoxDimensionsHieght,
            display: textBoxdisplay,
            backgroundColor: textBoxBG,
            flex: textBoxFlex,
            alignContent: alignText,
            placeContent: TextAlign,
            alignItems: AlignTextDiv

            
        }}>
            <div 
            style={{
                backgroundColor:TextBg,
                color: TextColor,
                height: TextHeight,
                fontFamily: TextFont,
                fontSize: TextSize,
                position: TextPosition,
                padding: TextPadding,
                margin: TextMargin,
                flex: TextFlex,
                alignItems: "center",
                display: Textdisplay,
                justifyContent: justifyText
                
            }}> 
                {Text} 
            </div>
        </div>

    )
}


CustomText.defaultProps ={
    // Child div containing Text
    Text: 'TEXT GOES HERE',
    TextColor: 'black',
    TextBg: '',
    TextFont: 'Roboto, sans-serif',
    TextSize: '14pt',
    TextHeight: '',
    // Position below
    Textdisplay: '',
    TextPosition: '',
    TextMargin: '0px',
    TextPadding: '0px',
    TextFlex: '',
    // Text box stuff below "parent container of child text div"
    textBoxDimensionsHieght: '',
    TextBoxDimensionsWidth: '',
    textBoxBG: 'red',
    textBoxFlex: '0',
    TextAlign: '',
    alignText: '',
    AlignTextDiv: '',
    justifyText: '',
    textBoxdisplay: ''
    
}

export default CustomText;