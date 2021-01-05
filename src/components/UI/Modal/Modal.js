import React, { Fragment } from "react";
import classes from "../Modal/Modal.css";
import BackDrop from "../Backdrop/Backdrop";

export default function Modal(props) {
  return (
    <Fragment>
      <BackDrop
        ordered={props.ordered}
        cancelOrderHandler={props.cancelOrderHandler}
      ></BackDrop>
      <div
        className={classes.Modal}
        style={{
          opacity: props.ordered ? "1" : "0",
          transform: props.ordered ? "translateY(0)" : "translateY(-200vh)",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
}
