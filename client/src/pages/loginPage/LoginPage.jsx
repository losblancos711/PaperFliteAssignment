import React from "react";

import { SideBar } from "../../components/moleclues/sideBar/SideBar";
import { Conversations } from "../../components/moleclues/conversations/Conversations";

import classNames from "classnames";

import styles from "./loginPage.module.css";
import { ConversationDetail } from "../../components/moleclues/conversationDetail/ConversationDetail";

export const LoginPage = () => {
  return (
    <div className={classNames(styles.loginPage)}>
      <div className={classNames(styles.sideBarContainer)}>
        <SideBar />
      </div>
      <div className={classNames(styles.conversationsContainer)}>
        <Conversations />
      </div>
      <div className={classNames(styles.conversationDetailContainer)}>
        <ConversationDetail />
      </div>
    </div>
  );
};
