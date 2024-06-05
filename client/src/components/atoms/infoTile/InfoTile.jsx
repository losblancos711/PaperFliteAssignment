import React, { memo } from "react";

import styles from "./infoTile.module.css";

export const InfoTile = memo(({ title, icon, description }) => {
  return (
    <div className={styles.infoTile}>
      <div>
        <h3>{title}</h3>
        <p style={{ marginTop: "19px" }}>{description}</p>
      </div>
      <div className={styles.icon}>
        <span className="icon-messages"></span>
      </div>
    </div>
  );
});
