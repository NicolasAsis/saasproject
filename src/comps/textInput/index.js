import React, { useState } from "react";

import * as FeatherIcon from 'react-icons/fi';

function TextInput({customIcon}) {

var Icon = FeatherIcon[customIcon];

  return (
    <div>
        Hello <Icon />
    </div>
  );
}

TextInput.defaultProps = {
    customIcon:"FiSave"
};

export default TextInput;