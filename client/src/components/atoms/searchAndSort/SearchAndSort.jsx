import React, { useState } from "react";

import { Input } from "../input/Input";
import { Button } from "../button/Button";

import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../../../store/filterSlice/filterSlice";

import classNames from "classnames";

import styles from "./searchAndSort.module.css";

export const SearchAndSort = () => {
  const { sortBy } = useSelector((slice) => slice.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <Input
        type={"text"}
        placeholder={"search by conversations and contacts"}
      />
      <div className={styles.sortUIContainer}>
        <span>Sort by :</span>
        <Button
          onClick={() => dispatch(setSortBy("createdAt"))}
          className={sortBy === "createdAt" ? classNames(styles.active) : ""}
        >
          Created Date
        </Button>
        <Button
          onClick={() => dispatch(setSortBy("lastActivity"))}
          className={sortBy === "lastActivity" ? classNames(styles.active) : ""}
        >
          Last Activity
        </Button>
        <Button
          onClick={(e) => dispatch(setSortBy("timeSpent"))}
          className={sortBy === "timeSpent" ? classNames(styles.active) : ""}
        >
          Time Spent
        </Button>
      </div>
    </div>
  );
};
