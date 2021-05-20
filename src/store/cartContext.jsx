import React, { useState } from "react";

const CartContext = React.createContext({
  cartIsShown: false,
  items: [],
  showCart: () => {},
  hideCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [items, setItems] = useState([
    { id: "c1", name: "Sushi...", amount: 2, price: 12.99 },
  ]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartIsShown: cartIsShown,
        items: items,
        showCart: showCartHandler,
        hideCart: hideCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
