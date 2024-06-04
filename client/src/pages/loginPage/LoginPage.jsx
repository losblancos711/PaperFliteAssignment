import React from "react";
import classNames from "classnames";
import styles from "./loginPage.module.css";
import { SideBar } from "../../components/moleclues/sideBar/SideBar";

export const LoginPage = () => {
  return (
    <div className={classNames(styles.loginPage)}>
      <div className={classNames(styles.sideBarContainer)}>
        <SideBar />
      </div>
      <div className={classNames(styles.conversationsContainer)}>
        Conversations
      </div>
      <div className={classNames(styles.conversationDetailContainer)}>
        Conversation Details
      </div>
    </div>
  );
};
