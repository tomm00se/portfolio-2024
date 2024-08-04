import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import HeroText from "@/components/herotext/HeroText";
import Grid from "@mui/material/Grid";
import Container from "@/components/container/Container";
import person from "../../public/person.svg";
import Paragraph from "@/components/paragraph/Paragraph";
import Footer from "@/components/footer/Footer";

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
            <Paragraph paragraphText="My name is Tommy Bowden and I am a software engineer at CreateFuture. I go by Tommy, Tom or Moose. My pronouns are He/Him/They/Them. I career switched into software engineering after graduating university in 2022" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default index;
