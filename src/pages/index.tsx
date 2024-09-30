import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/container/Container";
import Footer from "@/components/footer/Footer";
import Styles from "@/pages/index.module.scss";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className={Styles["index_title"]}>
          Computer Science MSc Student{" "}
          <span className={Styles["index_symbol_red"]}> @ </span> University Of
          Liverpool
        </div>
        <div className={Styles["index_title"]}>
          Software Engineer{" "}
          <span className={Styles["index_symbol_red"]}> @ </span> CreateFuture
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default index;
