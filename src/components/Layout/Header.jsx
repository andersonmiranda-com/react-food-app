import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals4.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="React Meals" />
      </div>
    </>
  );
};

export default Header;
