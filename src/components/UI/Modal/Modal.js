import React from "react";
import classes from "../Modal/Modal.css";

export default function Modal(props) {
  return (
    <div
      className={classes.Modal}
      style={{
        opacity: props.ordered ? "1" : "0",
        transform: props.ordered ? "translateY(0)" : "translateY(-200vh)",
      }}
    >
      {props.children}
    </div>
  );
}
