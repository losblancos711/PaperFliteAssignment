import React, { useState } from "react";

import { Button } from "../../button/Button";

import styles from "./tab.module.css";
import classNames from "classnames";

export const Tab = ({ children, activeTabIndex = 1 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = children ? [...children] : [];

  return (
    <>
      <nav className={styles.tabNavigation}>
        <ul>
          {tabs?.map((tab) => (
            <li key={`tab-${tab?.props?.tabId}`}>
              <Button
                key={`tab-btn-${tab?.props?.tabId}`}
                role="tab"
                aria-controls={`panel-${tab?.props?.tabId}`}
                aria-selected={activeTab === tab?.props?.tabId}
                onClick={() => handleTabClick(tab?.props?.tabId)}
                className={classNames(
                  activeTab === tab?.props?.tabId ? styles.activeTab : ""
                )}
              >
                {tab?.props?.label}
              </Button>
              {activeTab === tab?.props?.tabId ? (
                <span className={styles.activeTabBorder}></span>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {tabs?.[activeTab - 1]}
    </>
  );
};
