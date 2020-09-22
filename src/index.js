import React from "react";
import ReactDOM from "react-dom";

function Wellcome(props){
  return <h1>Hola, {props.name}</h1>
}

const element = <Wellcome name={"Ulises"}/>


ReactDOM.render(element, document.getElementById("root"));
