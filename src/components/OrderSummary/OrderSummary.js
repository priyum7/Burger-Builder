import React from "react";
import Button from "./Button/Button";

function OrderSummary(props) {
  console.log(props.totalAmount);
  return (
    <div>
      <h1>Your Order Summary</h1>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {Object.keys(props.ingredients).map((ingredient) => {
          return (
            <li key={ingredient}>
              {String(ingredient).toUpperCase()} :{" "}
              {props.ingredients[ingredient]}{" "}
            </li>
          );
        })}
      </ul>
      <p>
        <strong>Order Total : {props.totalAmount}</strong>
      </p>
      <p>Do you wish to checkout?</p>
      <Button
        type="Success"
        clickHandler={() => {
          alert("Order Placed Successfully");
        }}
      >
        PROCEED
      </Button>
      <Button type="Fail" clickHandler={props.cancelOrderHandler}>
        CANCEL
      </Button>
    </div>
  );
}

export default OrderSummary;
