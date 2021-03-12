import React from 'react';
import colors from "./Colors.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MagicButton({label, bgColor, color, icon}) {
  return (
  <button style = {{
    backgroundColor: colors[bgColor],
    color: colors[color],
    borderColor: 'white',
    width: 180,
    height: 40,
    fontSize: 14,
    marginLeft: 50,
  }}>
   <FontAwesomeIcon icon={icon} />
   {label}
  </button>
);
  }

export default MagicButton;