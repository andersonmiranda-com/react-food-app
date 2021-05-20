import React from "react";

const CartContext = React.createContext({
  cartIsShown: false,
  items: [],
  totalAmount: 0,
  showCart: () => {},
  hideCart: () => {},
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
