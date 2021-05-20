import React, { useState } from "react";

const CartContext = React.createContext({
  cartIsShown: false,
  items: [],
  totalAmount: 0,
  showCart: () => {},
  hideCart: () => {},
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [items, setItems] = useState([
    { id: "c1", name: "Sushi...", amount: 2, price: 12.99 },
  ]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return prevItems.concat(item);
    });
    setTotalAmount((prevTotalAmount) => {
      return prevTotalAmount + item.amount * item.price;
    });
  };

  const removeItemHandler = (idToRemove) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== idToRemove);
    });

    const newTotalAmount = items.reduce((total, item) => {
      return (total = item.amount * item.price);
    }, 0);

    setTotalAmount(newTotalAmount);
  };

  const cartContext = {
    cartIsShown: cartIsShown,
    items: items,
    totalAmount: totalAmount,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
