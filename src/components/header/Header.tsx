import React from "react";
import Styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <Link className={Styles["header__text"]} href="/">
      <span className={Styles["header__text"]}>TOMBOWDEN</span>
      <span className={Styles["header__text--red"]}>.</span>
    </Link>
  );
};

export default Header;
