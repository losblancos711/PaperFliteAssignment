import React, { memo } from "react";

import classNames from "classnames";

import styles from "./avatar.module.css";

export const Avatar = memo(({ name, imgSrc, variant }) => {
  return (
    <div
      className={classNames(
        styles.avatar,
        variant == "boxy" ? styles.variantBoxy : ""
      )}
    >
      {imgSrc ? <img src={imgSrc} /> : name ? name?.slice(0, 2) : "🤨"}
    </div>
  );
});
