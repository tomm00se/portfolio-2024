import React from "react";
import Styles from "./Navbar.module.css";
import Header from "../header/Header";

const Navbar = () => {
  return (
    <div className={Styles["navbar__container"]}>
      <Header />
    </div>
  );
};

export default Navbar;
