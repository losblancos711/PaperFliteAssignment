import React, { memo } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import classNames from "classnames";

import styles from "./post.module.css";

export const Post = memo(({ title, createdAt, viewedBy, imgSrc, active }) => {
  const hoursAgo = new Date().getHours() - new Date(createdAt).getHours();

  return (
    <div className={classNames(styles.post, active ? styles.active : "")}>
      <LazyLoadImage width={100} src={imgSrc} alt="Post" />
      <div>
        <h4>{title}</h4>
        <h5>{`Shared ${hoursAgo} hours ago`}</h5>
        <p>
          {viewedBy?.length === 1
            ? viewedBy[0]
            : `${viewedBy?.[0]} +${viewedBy?.length - 1} more`}
        </p>
      </div>
    </div>
  );
});
