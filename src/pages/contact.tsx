import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/components/container/Container";
import { Grid } from "@mui/material";
import HeroText from "@/components/herotext/HeroText";
import headphones from "../../public/headphones.svg";
import Hero from "@/components/hero/Hero";
import Paragraph from "@/components/paragraph/Paragraph";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <HeroText heroText="Contact Me" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <a href="mailto:tom@moose17.dev">
              <Hero image={headphones} />
            </a>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span>
              <Paragraph paragraphText="To contact me, ping me on any of my socials. For business inqueries, contact me directly via email by clicking the SVG" />
            </span>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default index;
