import React from "react";
import Styles from "./Footer.module.scss";
import Container from "../container/Container";
import Header from "../header/Header";
import Button from "../button/Button";

const Footer = () => {
  return (
    <Container>
      <div className={Styles["footer__inner"]}>
        <Header />
        <Button text="LinkedIn" />
        <Button text="Mastodon" />
        <Button text="GitHub" />
        <p className={Styles["footer__copyright"]}>
          Tommy Bowden 2024
          <span className={Styles["footer__copyright--red"]}>©</span>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
