import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "../BuildControls/BuildControls.css";

function BuildControls(props) {
  console.log(props.addIngredient);
  return (
    <div className={classes.BuildControls}>
      {props.types.map((type) => {
        return (
          <BuildControl
            key={type}
            type={type}
            addIngredient={() => props.addIngredient(type)}
          />
        );
      })}
    </div>
  );
}

export default BuildControls;
