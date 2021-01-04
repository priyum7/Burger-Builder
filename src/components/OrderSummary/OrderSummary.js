import React from "react";

function OrderSummary(props) {
  return (
    <div>
      <h1>Your Order Summary</h1>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {Object.keys(props.ingredients).map((ingredient) => {
          return (
            <li key={ingredient}>
              {ingredient} : {props.ingredients[ingredient]}{" "}
            </li>
          );
        })}
      </ul>
      <p>Do you wish to checkout?</p>
    </div>
  );
}

export default OrderSummary;
