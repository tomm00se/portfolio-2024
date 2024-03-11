import React from "react";
import Styles from "./Paragraph.module.scss";
import { IParagraphProps } from "./Paragraph.types";

const Paragraph = ({ paragraphText }: IParagraphProps) => {
  return (
    <span className={Styles["paragraph__container"]}>
      <p className={Styles["paragraph__text"]}>
        {paragraphText}
        <span className={Styles["paragraph__text--red"]}>.</span>
      </p>
    </span>
  );
};

export default Paragraph;
