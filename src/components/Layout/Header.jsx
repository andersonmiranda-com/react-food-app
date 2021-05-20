import { useContext } from "react";

import CartContext from "../../store/CartContext";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals4.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  const ctx = useContext(CartContext);
  return (
    <>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onClick={ctx.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="React Meals" />
      </div>
    </>
  );
};

export default Header;
