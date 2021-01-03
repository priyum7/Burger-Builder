import React, { Component } from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export class Burger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const transformedIngredients = Object.keys(this.props.ingredients).map(
      (ingredient) => {
        return [...Array(this.props.ingredients[ingredient])].map(
          (_, index) => {
            return (
              <BurgerIngredient key={ingredient + index} type={ingredient} />
            );
          }
        );
      }
    );

    return (
      <div className={classes.Burger}>
        <BurgerIngredient type={"bread-top"} />
        {transformedIngredients}
        <BurgerIngredient type={"bread-bottom"} />
      </div>
    );
  }
}

export default Burger;
