import React from "react";
import Styles from "./Footer.module.scss";
import Container from "../container/Container";
import Header from "../header/Header";
import Button from "../button/Button";

const Footer = () => {
  return (
    <>
      <div className={Styles["footer__outer"]}></div>
      <Container>
        <div className={Styles["footer__inner"]}>
          <Header />
          <Button
            text="LinkedIn"
            url="https://www.linkedin.com/in/tommybowden/"
          />
          <Button text="Instagram" url="https://www.instagram.com/tommoose_/" />
          <Button text="GitHub" url="https://github.com/tomm00se" />
          <Button
            text="Microsoft"
            url="https://learn.microsoft.com/en-us/users/tommoose/"
          />
          <p className={Styles["footer__copyright"]}>
            Tommy Bowden 2024
            <span className={Styles["footer__copyright--red"]}>©</span>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
