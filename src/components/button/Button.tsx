import React from "react";
import Styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({ text, url }: IButtonProps) => {
  const lowercaseText = text.toLowerCase();

  return (
    <Link
      className={Styles["button__text"]}
      href={url ? `${url}` : `/${lowercaseText}`}
      target={url ? "_blank" : "_self"}
    >
      {text}
      <div className={Styles["button__text--red"]}>.</div>
    </Link>
  );
};

export default Button;
