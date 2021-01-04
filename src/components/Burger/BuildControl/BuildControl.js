import React from "react";
import classes from "./BuildControl.css";

function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{String(props.type).toUpperCase()}</div>
      <button onClick={props.addIngredient}>+</button>
      <button
        onClick={props.removeIngredient}
        disabled={props.disableButtonInfo}
      >
        -
      </button>
    </div>
  );
}

export default BuildControl;
