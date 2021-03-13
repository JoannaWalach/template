import React from 'react';
import colors from "./Colors.js";

function Textarea({bgColor, color, borderSize, borderColor, borderRadius}) {
    return(
      <textarea style = {{
      backgroundColor: colors[bgColor],
      color: colors[color],
      borderSize: {borderSize},
      borderColor: colors[borderColor],
      borderRadius: {borderRadius},
      width: 250,
      height: 100,
      marginBottom: 20,
      fontSize: 14,
      justifyContent: 'left',
      padding: 20
    }}></textarea>
    );
  }

  export default Textarea;