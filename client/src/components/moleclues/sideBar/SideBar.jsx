import React from "react";

import { Button } from "../../atoms/button/Button";
import { Avatar } from "../../atoms/avatar/Avatar";

import classNames from "classnames";

import styles from "./sideBar.module.css";

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.sideBarRow1}>
        <Button>
          <span className={classNames("icon-search", styles.sideBarSearch)}>
            <span className="path1"></span>
            <span className="path2"></span>
          </span>
        </Button>
        <Button>
          <span className="icon-menu"></span>
        </Button>
        <Button>
          <span className="icon-stack"></span>
        </Button>
        <Button>
          <span className="icon-messages"></span>
        </Button>
        <Button>
          <span className="icon-guage"></span>
        </Button>
        <Button>
          <span className="icon-plane"></span>
        </Button>
      </div>
      <div className={styles.sideBarRow2}>
        <Button>
          <span className="icon-dotMenu"></span>
        </Button>
        <Avatar name={"Karthik"} imgSrc={"./public/images/userImg.png"} />
      </div>
    </aside>
  );
};
