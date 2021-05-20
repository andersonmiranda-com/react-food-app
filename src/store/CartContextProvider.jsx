import React, { useReducer } from "react";

import CartContext from "./CartContext";
import cartReducer, { defaultCartState } from "./cartReducer";

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const showCartHandler = () => {
    dispatchCartAction({ type: "SHOW_CART" });
  };

  const hideCartHandler = () => {
    dispatchCartAction({ type: "HIDE_CART" });
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    cartIsShown: cartState.cartIsShown,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
