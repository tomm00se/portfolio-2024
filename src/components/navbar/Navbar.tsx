import React from "react";
import Styles from "./Navbar.module.css";
import Header from "../header/Header";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className={Styles["navbar__container"]}>
      <Header />
      <Button text="About" />
      <Button text="Contact" />
      <Button text="Code" />
    </div>
  );
};

export default Navbar;
