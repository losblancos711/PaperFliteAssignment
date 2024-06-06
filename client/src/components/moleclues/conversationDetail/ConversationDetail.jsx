import React from "react";

import { Banner } from "../../atoms/banner/Banner";
import { InfoTile } from "../../atoms/infoTile/InfoTile";

import { useSelector } from "react-redux";

import classNames from "classnames";

import styles from "./conversationDetail.module.css";
import { RecipientRow } from "../../atoms/recipientRow/RecipientRow";
import { Tab } from "../../atoms/tabs/Tab/Tab";
import { TabBody } from "../../atoms/tabs/TabBody/TabBody";

export const ConversationDetail = () => {
  const { currentPost } = useSelector((slice) => slice.conversations);
  const monthsAgo =
    new Date().getHours() -
    new Date(currentPost?.sharingDetails?.sharedAt).getHours();

  return (
    <div className={classNames(styles.conversationDetailContainer)}>
      {currentPost?.sharingDetails ? (
        <Banner
          title={currentPost?.title}
          subTitle={`You shared ${currentPost?.sharingDetails?.noOfSharedAssets} assets with ${currentPost?.sharingDetails?.recipients} recipients`}
          postingTime={`${monthsAgo} month ago via ${currentPost?.sharingDetails?.platform}`}
        />
      ) : (
        <></>
      )}
      <div className={classNames(styles.conversationDetailContainer2)}>
        <div className={classNames(styles.list)}>
          <InfoTile
            title={
              currentPost?.postInsights?.emailOpenRate?.unit === "percentage"
                ? `${currentPost?.postInsights?.emailOpenRate?.rate}%`
                : currentPost?.postInsights?.emailOpenRate?.rate
            }
            icon={<span className="icon-messages"></span>}
            description={currentPost?.postInsights?.emailOpenRate?.desc}
          />
          <InfoTile
            title={
              currentPost?.postInsights?.contentClickRate?.unit === "percentage"
                ? `${currentPost?.postInsights?.contentClickRate?.rate}%`
                : currentPost?.postInsights?.contentClickRate?.rate
            }
            description={currentPost?.postInsights?.contentClickRate?.desc}
            icon={<span className="icon-user"></span>}
          />
          <InfoTile
            title={currentPost?.postInsights?.totalTimeSpent?.time}
            description={currentPost?.postInsights?.totalTimeSpent?.desc}
            icon={<span className="icon-clock"></span>}
          />
          <InfoTile
            title={
              currentPost?.postInsights?.dealValue?.currency === "USD"
                ? `$${currentPost?.postInsights?.dealValue?.rate}`
                : currentPost?.postInsights?.dealValue?.rate
            }
            description={currentPost?.postInsights?.dealValue?.desc}
            icon={<span className="icon-moneyBag"></span>}
          />
        </div>
        <div className={classNames(styles.conversationDetailTabs)}>
          <Tab activeTabIndex={1}>
            <TabBody label="Recipients - 08" tabId={1}>
              <>
                {currentPost?.recipients?.map((r, i) => (
                  <RecipientRow
                    key={i}
                    name={r?.name}
                    lastSeen={r?.lastActive}
                    imgSrc={r.imgSrc}
                    range={r.range}
                  />
                ))}
              </>
            </TabBody>
            <TabBody label="Section - 05" tabId={2}>
              <p>No content...</p>
            </TabBody>
          </Tab>
        </div>
      </div>
    </div>
  );
};
