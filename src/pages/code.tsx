import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/components/container/Container";
import { Grid } from "@mui/material";
import HeroText from "@/components/herotext/HeroText";
import Paragraph from "@/components/paragraph/Paragraph";

const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <HeroText heroText="c𝙹↸ᒷ  ℸ ̣╎ℸ ̣ꖎᒷ" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph paragraphText="t⍑╎ᓭ ╎ᓭ ∴⍑ᒷ∷ᒷ ᓵᔑ∷↸ᓭ ᓭ⍑𝙹∴ᓵᔑᓭ╎リ ⊣ !¡∷𝙹⋮ᒷᓵℸ ̣ᓭ i ⍑ᔑ⍊ᒷ ∴𝙹∷ꖌᒷ↸ 𝙹リ ∴╎ꖎꖎ ʖᒷ ꖎ𝙹ᓵᔑℸ ̣ᒷ↸. t⍑ᒷᓭᒷ ᓵᔑ∷↸ᓭ ᓭ⍑𝙹⚍ ꖎ↸ ᓵ𝙹リℸ ̣╎リ⚍ ᒷ ℸ ̣𝙹 ⎓𝙹ꖎꖎ𝙹∴ ℸ ̣⍑ᒷ ℸ ̣∴𝙹 ℸ ̣╎ꖎᒷ ∷⚍ ꖎᒷ ⎓𝙹∷ ᓭᒲ+ ↸ᒷᓭꖌℸ ̣𝙹!¡ᓭ." />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paragraph paragraphText="nᒷ⍊ᒷ∷  ⊣𝙹リリᔑ  ⊣╎⍊ᒷ ||𝙹⚍  ⚍ !¡, リᒷ⍊ᒷ∷  ⊣𝙹リリᔑ ꖎᒷℸ ̣ ||𝙹⚍  ↸𝙹∴リ, リᒷ⍊ᒷ∷  ⊣𝙹リリᔑ ∷⚍ リ ᔑ∷𝙹⚍ リ↸ ᔑリ↸ ↸ᒷᓭᒷ∷ℸ ̣ ||𝙹⚍ リᒷ⍊ᒷ∷  ⊣𝙹リリᔑ ᒲᔑꖌᒷ ||𝙹⚍  ᓵ∷||, リᒷ⍊ᒷ∷  ⊣𝙹リリᔑ ᓭᔑ||  ⊣𝙹𝙹↸ʖ||ᒷ リᒷ⍊ᒷ∷  ⊣𝙹リリᔑ ℸ ̣ᒷꖎꖎ ᔑ ꖎ╎ᒷ ᔑリ↸ ⍑⚍ ∷ℸ ̣ ||𝙹⚍ ." />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default index;
