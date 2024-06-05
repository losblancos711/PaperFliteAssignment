import React from "react";

import classNames from "classnames";

import styles from "./button.module.css";

export const Button = ({ children, className, hasBorder, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        styles.btn,
        className,
        hasBorder ? styles.iconBtn : ""
      )}
      type={"button"}
    >
      {children}
    </button>
  );
};
