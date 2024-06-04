import React from "react";
import styles from "./sideBar.module.css";
import { Button } from "../../atoms/button/Button";
import classNames from "classnames";
import { Avatar } from "../../atoms/avatar/Avatar";

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
          <span class="icon-dotMenu"></span>
        </Button>
        <Avatar name={"Karthik"} imgSrc={"./public/images/userImg.png"} />
      </div>
    </aside>
  );
};
