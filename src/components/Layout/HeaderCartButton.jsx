import { useContext, useState, useEffect } from "react";

import CartContext from "../../store/CartContext";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ctx = useContext(CartContext);

  const { items } = ctx;

  const itemsOnCart = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    showAnimation ? classes.bump : ""
  }`;

  useEffect(() => {
    setShowAnimation(true);
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
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
