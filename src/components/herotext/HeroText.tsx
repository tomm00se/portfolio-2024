import React from "react";
import Styles from "./HeroText.module.scss";
import { IHeroTextProps } from "./HeroText.types";

const HeroText = ({ heroText }: IHeroTextProps) => {
  return (
    <span className={Styles["herotext__container"]}>
      <p className={Styles["herotext__text"]}>
        {heroText}
        <span className={Styles["herotext__text--red"]}>.</span>
      </p>
    </span>
  );
};

export default HeroText;
