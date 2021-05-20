import { useContext } from "react";

import CartContext from "../../store/CartContext";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const itemsOnCart = ctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {ctx.items.length > 0 && (
        <span className={classes.badge}>{itemsOnCart}</span>
      )}
    </button>
  );
};

export default HeaderCartButton;
