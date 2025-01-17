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
        <p className={Styles["about_subtitle"]}>
          I am currently working on a project for an investment company, abrdn.
          As a FE SWE, I am delivering code to make processes at abrdn run more
          intuitively and smoother.
        </p>
        <p className={Styles["about_subtitle"]}>
          Academically, I am currently studying the &#39; Software engineering
          in Practice&#39; module at the University Of Liverpool, a module that
          has already assisted with my work at CreateFuture.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default index;
