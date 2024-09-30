import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/components/container/Container";
import Styles from "@/pages/contact/contact.module.scss";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className={Styles["contact_title"]}>
          Contact Me<span className={Styles["contact_symbol_red"]}> . </span>
        </div>
        <p className={Styles["contact_subtitle"]}>
          To contact me, ping me on any of my socials.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default index;
