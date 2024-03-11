import React from "react";
import Styles from "./Container.module.scss";

const Container = ({ children }: IContainerProps) => {
  return <div className={Styles["container"]}>{children}</div>;
};

export default Container;
