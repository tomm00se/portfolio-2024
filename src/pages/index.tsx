import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import computerPixelArt from "../../public/hero.svg";
import beepBoopPixelArt from "../../public/beepboop.svg";
import HeroText from "@/components/herotext/HeroText";
import Grid from "@mui/material/Grid";
import Container from "@/components/container/Container";
import Footer from "@/components/footer/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Hero image={computerPixelArt} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeroText heroText="Software Engineer And Egg @ CreateFuture" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeroText heroText="Content coming soon" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Hero image={beepBoopPixelArt} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default index;
