import React from "react";

import { Post } from "../../atoms/post/Post";
import { Filter } from "../../atoms/filter/Filter";
import { SearchAndSort } from "../../atoms/searchAndSort/SearchAndSort";

import classNames from "classnames";

import styles from "./conversations.module.css";

export const Conversations = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.flex)}>
        <div>
          <h1>conversations</h1>
          <p>track user engagement</p>
        </div>
        <Filter />
      </div>
      <SearchAndSort />
      <div className={classNames(styles.list)}>
        {[1, 2, 3, 4, 5].map((post) => (
          <Post key={post} />
        ))}
      </div>
    </div>
  );
};
