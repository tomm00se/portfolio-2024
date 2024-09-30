import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Styles from "@/pages/portfolio/portfolio.module.scss";
import Container from "@/components/container/Container";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <p className={Styles["portfolio_title"]}>
          Portfolio<span className={Styles["portfolio_symbol_red"]}> . </span>
        </p>
        <a
          href="https://github.com/tomm00se/PokedexApp"
          target="_blank"
          className={Styles["portfolio_subtitle"]}
        >
          🔗 Pokèdex React Native App ➡ Github
        </a>
        <a
          className={Styles["portfolio_subtitle"]}
          href="https://github.com/tomm00se/PokedexApp"
          target="_blank"
        >
          🔗 Portfolio NextJS Web App ➡ Github
        </a>
      </Container>
      <Footer />
    </>
  );
};

export default index;
