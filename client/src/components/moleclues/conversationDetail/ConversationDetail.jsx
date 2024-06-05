import React from "react";

import { Banner } from "../../atoms/banner/Banner";
import { InfoTile } from "../../atoms/infoTile/InfoTile";

import classNames from "classnames";

import styles from "./conversationDetail.module.css";
import { RecipientRow } from "../../atoms/recipientRow/RecipientRow";

export const ConversationDetail = () => {
  return (
    <div className={classNames(styles.conversationDetailContainer)}>
      <Banner
        title={`Collection “${"seeeek"}”`}
        subTitle={`You shared ${2} assets with ${4} recipients`}
        postingTime={`${1} month ago via QuickSend`}
      />
      <div className={classNames(styles.conversationDetailContainer2)}>
        <div className={classNames(styles.list)}>
          {[1, 2, 3, 4].map((post) => (
            <InfoTile title={"50%"} description={"testing"} key={post} />
          ))}
        </div>
        <div>
          <RecipientRow />
          <RecipientRow />
          <RecipientRow />
          <RecipientRow />
          <RecipientRow />
        </div>
      </div>
    </div>
  );
};
