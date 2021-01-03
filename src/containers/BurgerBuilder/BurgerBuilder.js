import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/BuildControls/BuildControls";

const ingredientAmount = {
  meat: 55,
  cheese: 100,
  salad: 80,
  bacon: 32,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: { meat: 0, cheese: 0, salad: 0, bacon: 0 },
      totalAmount: 0,
    };
  }

  addIngredientHandler = (type) => {
    const oldIngredients = { ...this.state.ingredients };
    oldIngredients[type] = oldIngredients[type] + 1;
    const oldAmount = this.state.totalAmount;

    this.setState({
      ingredients: oldIngredients,
      totalAmount: oldAmount + ingredientAmount[type],
    });
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          types={Object.keys(this.state.ingredients)}
          addIngredient={this.addIngredientHandler.bind(this)}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
