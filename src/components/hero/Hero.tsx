import React from "react";
import Image from "next/image";
import Styles from "./Hero.module.css";
import Container from "../container/Container";
import { IHeroProps } from "./Hero.types";

const Hero = ({ image }: IHeroProps) => {
  return (
    <Container>
      <div className={Styles["hero__container"]}>
        <Image
          className={Styles["hero__image"]}
          src={image}
          alt="pixel art of computer"
        ></Image>
      </div>
    </Container>
  );
};

export default Hero;
