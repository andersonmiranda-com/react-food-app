import { useContext } from "react";

import CartContext from "../../store/cartContext";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {ctx.items.length > 0 && (
        <span className={classes.badge}>{ctx.items.length}</span>
      )}
    </button>
  );
};

export default HeaderCartButton;
