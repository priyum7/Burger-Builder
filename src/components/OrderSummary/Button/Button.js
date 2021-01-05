import React from "react";
import classes from "./Button.css";

function Button(props) {
  return (
    <div
      className={[classes.Button, classes[props.type]].join(" ")}
      onClick={props.clickHandler}
    >
      {props.children}
    </div>
  );
}

export default Button;
