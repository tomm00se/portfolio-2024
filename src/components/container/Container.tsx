import React from "react";
import Styles from "./Container.module.scss";
import classNames from "classnames";

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className={classNames(Styles["container"], className)}>{children}</div>
  );
};

export default Container;
