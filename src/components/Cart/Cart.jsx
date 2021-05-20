import React, { useContext } from "react";

import CartContext from "../../store/CartContext";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const cartHasItems = ctx.items.length > 0;

  const itemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const itemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={() => itemAddHandler(item)}
          onRemove={() => itemRemoveHandler(item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={ctx.hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.hideCart}>
          Close
        </button>
        {cartHasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
