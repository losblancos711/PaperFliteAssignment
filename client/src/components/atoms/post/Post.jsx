import React, { memo } from "react";

import classNames from "classnames";

import styles from "./post.module.css";

export const Post = memo(() => {
  return (
    <div className={classNames(styles.post)}>
      <img width={100} src={"./public/images/post1.jpg"} />
      <div>
        <h4>Meet New Paperflite</h4>
        <h5>Shared 4 hours ago</h5>
        <p>Kevin +6 more</p>
      </div>
    </div>
  );
});
