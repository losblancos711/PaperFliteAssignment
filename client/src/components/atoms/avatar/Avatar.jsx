import React, { memo } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

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
      {imgSrc ? (
        <LazyLoadImage src={imgSrc} />
      ) : name ? (
        name?.slice(0, 2)
      ) : (
        "🤨"
      )}
    </div>
  );
});
