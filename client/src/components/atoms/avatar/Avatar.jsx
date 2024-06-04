import React, { memo } from "react";
import styles from "./avatar.module.css";
import classNames from "classnames";

export const Avatar = memo(({ name, imgSrc }) => {
  return (
    <div className={classNames(styles.avatar)}>
      {imgSrc ? <img src={imgSrc} /> : name ? name?.slice(0, 2) : "🤨"}
    </div>
  );
});
