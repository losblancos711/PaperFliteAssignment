import React, { memo } from "react";

import styles from "./banner.module.css";
import { Button } from "../button/Button";

export const Banner = memo(({ title, subTitle, postingTime }) => {
  return (
    <>
      <div className={styles.banner}></div>
      <div className={styles.bannerContent}>
        <div>
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <p>{postingTime}</p>
        </div>
        <div className={styles.bannerIconRow}>
          <Button hasBorder>
            <span className="icon-eye"></span>
          </Button>
          <Button hasBorder>
            <span className="icon-reset"></span>
          </Button>
          <Button hasBorder>
            <span className="icon-bin"></span>
          </Button>
        </div>
      </div>
    </>
  );
});
