import React from "react";

import { Input } from "../input/Input";
import { Button } from "../button/Button";

import styles from "./searchAndSort.module.css";
import classNames from "classnames";

export const SearchAndSort = () => {
  return (
    <div>
      <Input
        type={"text"}
        placeholder={"search by conversations and contacts"}
      />
      <div className={styles.sortUIContainer}>
        <span>Sort by :</span>
        <Button className={classNames(styles.active)}>Created Date</Button>
        <Button>Last Activity</Button>
        <Button>Time Spent</Button>
      </div>
    </div>
  );
};
