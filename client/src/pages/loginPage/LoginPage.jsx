import React, { Suspense } from "react";

import { SideBar } from "../../components/moleclues/sideBar/SideBar";
import { Conversations } from "../../components/moleclues/conversations/Conversations";
const ConversationDetail = React.lazy(() =>
  import("../../components/moleclues/conversationDetail/ConversationDetail")
);

import ErrorBoundary from "../../components/utils/errorBoundary/ErrorBoundary";

import classNames from "classnames";

import styles from "./loginPage.module.css";
import { Loader } from "../../components/atoms/loader/Loader";

export const LoginPage = () => {
  return (
    <div className={classNames(styles.loginPage)}>
      <div className={classNames(styles.sideBarContainer)}>
        <SideBar />
      </div>
      <div className={classNames(styles.conversationsContainer)}>
        <ErrorBoundary>
          <Conversations />
        </ErrorBoundary>
      </div>
      <div className={classNames(styles.conversationDetailContainer)}>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <ConversationDetail />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
