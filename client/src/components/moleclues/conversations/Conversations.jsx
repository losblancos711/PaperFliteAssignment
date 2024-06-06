import React, { useEffect, useState } from "react";

import { Post } from "../../atoms/post/Post";
import { Filter } from "../../atoms/filter/Filter";
import { SearchAndSort } from "../../atoms/searchAndSort/SearchAndSort";
import { Button } from "../../atoms/button/Button";

import { useFetch } from "../../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPost } from "../../../store/conversationSlice/conversationSlice";

import classNames from "classnames";

import styles from "./conversations.module.css";

export const Conversations = () => {
  const {
    data: postData,
    loading,
    error,
  } = useFetch(`${import.meta.env.VITE_APP_BASE_URL}/api/v1/conversations`);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { currentPost } = useSelector((slice) => slice.conversations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPost(postData?.[0]));
  }, [postData]);

  const handleClick = (post) => {
    dispatch(setCurrentPost(post));
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
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
        {postData?.map((post, index) => (
          <Button key={`${post.id}-${index}`} onClick={() => handleClick(post)}>
            <Post
              title={post?.title}
              createdAt={post?.createdAt}
              viewedBy={post?.viewedBy}
              imgSrc={post?.postImageURL}
              active={currentPost?.id === post?.id}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};
