import React from "react";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={Styles["header__text"]}>TOMMY</div>
      <div className={Styles["header__text--red"]}>.</div>
      <div className={Styles["header__text"]}>BOWDEN</div>
    </>
  );
};

export default Header;
