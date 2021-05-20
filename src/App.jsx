import React, { useContext } from "react";

import CartContext from "./store/cartContext";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const ctx = useContext(CartContext);
  return (
    <div>
      <Header />
      {ctx.cartIsShown && <Cart />}
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
