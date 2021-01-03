import React from "react";
import classes from "./BuildControl.css";

function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{String(props.type).toUpperCase()}</div>
      <button
        onClick={() => {
          props.addIngredient();
        }}
      >
        +
      </button>
      <button>-</button>
    </div>
  );
}

export default BuildControl;
