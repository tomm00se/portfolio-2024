import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/components/container/Container";
import { Grid } from "@mui/material";
import HeroText from "@/components/herotext/HeroText";
import Paragraph from "@/components/paragraph/Paragraph";
import DownloadPdf from "@/components/downloadpdf/DownloadPdf";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <HeroText heroText="CV" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph paragraphText="Are you interested in what I've been up to? Download my CV from here" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DownloadPdf link="egg" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default index;
