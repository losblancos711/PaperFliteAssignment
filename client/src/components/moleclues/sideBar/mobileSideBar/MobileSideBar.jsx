import React from "react";

import { Button } from "../../../atoms/button/Button";

import classNames from "classnames";

import styles from "../sideBar.module.css";

export const MobileSideBar = () => {
  return (
    <aside className={classNames(styles.sideBar, styles.mobileSideBar)}>
      <Button>
        <span className="icon-menu"></span>
      </Button>
      <Button>
        <span className="icon-stack"></span>
      </Button>
      <Button>
        <span className="icon-conv"></span>
      </Button>
    </aside>
  );
};
