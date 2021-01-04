import React from "react";
import BuildControl from "../BuildControl/BuildControl";
import classes from "../BuildControls/BuildControls.css";

function BuildControls(props) {
  const types = Object.keys(props.ingredients);

  const disableOrderButtonInfo =
    Object.values(props.ingredients).reduce((prev, current) => {
      return prev + current;
    }, 0) === 0;

  return (
    <div className={classes.BuildControls}>
      <p>
        Total Amount : <strong>{props.totalAmount}</strong>
      </p>
      {types.map((type) => {
        return (
          <BuildControl
            key={type}
            type={type}
            addIngredient={() => props.addIngredient(type)}
            removeIngredient={() => props.removeIngredient(type)}
            disableButtonInfo={props.ingredients[type] === 0}
          />
        );
      })}
      <button className={classes.OrderButton} disabled={disableOrderButtonInfo}>
        {" "}
        Order Now!
      </button>
    </div>
  );
}

export default BuildControls;
