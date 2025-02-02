import React from "react";
import Styles from "./Navbar.module.css";
import Header from "../header/Header";
import Button from "../button/Button";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <Container>
      <div className={Styles["navbar__inner"]}>
        <Header />
        <div className={Styles["navbar__links"]}>
          <Button text="Portfolio" />
          <Button text="About" />
          <Button text="Contact" />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
