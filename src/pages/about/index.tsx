import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/container/Container";
import Footer from "@/components/footer/Footer";
import Styles from "@/pages/about/about.module.scss";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className={Styles["about_title"]}>
          About Me<span className={Styles["about_symbol_red"]}> . </span>
        </div>
        <p className={Styles["about_subtitle"]}>
          My name is Tommy Bowden and I am a software engineer at CreateFuture.
          I go by Tommy, Tom or Moose. My pronouns are They/Them. I am currently
          studying my Masters in Computer Science at the University Of
          Liverpool.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default index;
