import React from "react";
import classes from "../Backdrop/Backdrop.css";

function Backdrop(props) {
  return props.ordered ? (
    <div className={classes.Backdrop} onClick={props.cancelOrderHandler}></div>
  ) : null;
}

export default Backdrop;
