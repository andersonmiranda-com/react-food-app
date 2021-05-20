import React, { useContext } from "react";

import CartContext from "../../store/CartContext";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const price = `$${props.meal.price.toFixed(2)}`;

  const addItemHandler = (amount) => {
    ctx.addItem({
      id: props.meal.id,
      amount: amount,
      name: props.meal.name,
      price: props.meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm id={props.meal.id} onSubmit={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
