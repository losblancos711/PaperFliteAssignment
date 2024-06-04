import React from "react";
import styles from "./button.module.css";
import classNames from "classnames";

export const Button = (props) => {
  return (
    <button
      {...props}
      className={classNames([styles.btn, props?.className])}
      type="button"
    >
      {props?.children}
    </button>
  );
};
