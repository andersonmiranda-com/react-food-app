import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandle = () => {
    setCartIsShown(true);
  };

  const closeCartHandle = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <Header onOpenCart={openCartHandle} />
      {cartIsShown && <Cart onCloseCart={closeCartHandle} />}
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
