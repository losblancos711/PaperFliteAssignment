import React from "react";

import classNames from "classnames";

import styles from "./input.module.css";

export const Input = ({ type = "text", ...props }) => {
  return (
    <div className={classNames(styles.inputContainer)}>
      <input type={type} {...props} />
      <span className={classNames("icon-search", styles.inputIcon)}>
        <span className="path1"></span>
        <span className="path2"></span>
      </span>
    </div>
  );
};
