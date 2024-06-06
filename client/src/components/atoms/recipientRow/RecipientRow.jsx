import React from "react";

import { Avatar } from "../avatar/Avatar";
import { Button } from "../button/Button";

import { formatDate } from "../../../helpers/formatDate";
import classNames from "classnames";

import styles from "./recipientRow.module.css";

export const RecipientRow = ({ name, imgSrc, lastSeen, range }) => {
  return (
    <div className={classNames(styles.row)}>
      <div className={classNames(styles.row, styles.childRow1)}>
        <Avatar variant={"boxy"} name={name} imgSrc={imgSrc} />
        <p>{name}</p>
        <span className={styles.separator}></span>
        <span>{`last viewed ${formatDate(new Date(lastSeen))}`}</span>
      </div>
      <div className={classNames(styles.row, styles.childRow2)}>
        <span className={styles.range}>~{range}m</span>
        <Button>
          <span className={classNames("icon-messages", styles.inbox)}></span>
        </Button>
        <Button>
          <span className="icon-user"></span>
        </Button>
        <Button>
          <span className="icon-share"></span>
        </Button>
        <span className={styles.separator}></span>
        <Button hasBorder>
          <span className="icon-location"></span>
        </Button>
      </div>
    </div>
  );
};
