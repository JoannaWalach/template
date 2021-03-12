import React from 'react';
import colors from "./Colors.js";

function Input({ bgColor, color, borderSize, borderColor, borderRadius }) {
  return (
    <input style={{
      backgroundColor: colors[bgColor],
      color: colors[color],
      borderSize: {borderSize},
      borderColor: colors[borderColor],
      borderRadius: {borderRadius},
      width: 250,
      height: 30,
      marginLeft: 50,
      marginBottom: 20,
      fontSize: 14,
      paddingLeft: 20
    }}></input>
  );
}

export default Input;