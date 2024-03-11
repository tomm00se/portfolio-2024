import React from "react";
import Styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({ text }: IButtonProps) => {
  const lowercaseText = text.toLowerCase();

  return (
    <Link className={Styles["button__text"]} href={`/${lowercaseText}`}>
      {text}
      <div className={Styles["button__text--red"]}>.</div>
    </Link>
  );
};

export default Button;
