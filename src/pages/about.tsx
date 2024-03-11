import React from "react";
import "../../styles/global.css";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import computerPixelArt from "../../public/hero.svg";
import beepBoopPixelArt from "../../public/beepboop.svg";
import HeroText from "@/components/herotext/HeroText";
import Grid from "@mui/material/Grid";
import Container from "@/components/container/Container";
import person from "../../public/person.svg";
import Paragraph from "@/components/paragraph/Paragraph";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <HeroText heroText="About Me" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Hero image={person} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph paragraphText="My name is Tommy Bowden and I am a software engineer at xDesign. I go by Tommy, Tom or Moose. My pronouns are He/Him/They/Them. I career switched into software engineering after graduating university in 2022" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default index;
