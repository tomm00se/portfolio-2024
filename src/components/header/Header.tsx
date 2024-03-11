import React from "react";
import Styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <Link className={Styles["header__text"]} href="/">
      <span className={Styles["header__text"]}>TOMMY</span>
      <span className={Styles["header__text--red"]}>.</span>
      <span className={Styles["header__text"]}>BOWDEN</span>
    </Link>
  );
};

export default Header;
