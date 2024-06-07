import React from "react";

import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div></div>
      <div></div>
    </div>
  );
};