import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Styles from "@/pages/pieces/pieces.module.scss";
import Container from "@/components/container/Container";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <p className={Styles["pieces_title"]}>
          Pieces<span className={Styles["pieces_symbol_red"]}> . </span>
        </p>
        <a
          href="https://github.com/tomm00se/PokedexApp"
          target="_blank"
          className={Styles["pieces_subtitle"]}
        >
          🔗 Pokèdex React Native App ➡ Github
        </a>
        <a
          className={Styles["pieces_subtitle"]}
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
