import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger.js";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: { meat: 1, cheese: 2, salad: 1, bacon: 3 },
    };
  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
