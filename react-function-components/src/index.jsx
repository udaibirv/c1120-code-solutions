import React from "react";
import ReactDOM from "react-dom";

function CustomButton(){
  return <button>Click me!</button>;
}

const button = <CustomButton />

ReactDOM.render(button, document.getElementById('root'));
