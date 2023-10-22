"use client";
import React, { useState } from "react";
import { Alert, Button, Space } from "antd";
import { getUserInfo } from "@/utils/local.storeage";
import BreadCumbUI from "@/components/ui/BreadCumbUI";

const UserNotificationsPage = () => {
  const [notifications, setNotifications] = useState<
    {
      type: "success" | "info" | "warning";
      message: string;
      description: string;
      updatedAt?: string;
    }[]
  >([
    {
      type: "success",
      message: "Added to cart",
      description: "You added a interior service to your cart",
      updatedAt:"21 :30 pm , 12 October 2023"
    },
    {
      type: "info",
      message: "Booked Interior",
      description: "Your Booked Interior successful",
      updatedAt:"7 :30 pm , 20 October 2023"
    },
    {
      type: "warning",
      message: "Removed data",
      description: "removed a data from carts .",
      updatedAt:"10 :30 pm , 30 October 2023"
    },
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  const containerStyle = {
    width: "90vh",
    margin: "0 auto",
    padding: "20px",
  };
  const userInfo = getUserInfo() as any;

  return (
    <>
      <BreadCumbUI
        items={[
          {
            label: `${userInfo?.email}`,
            link: "/profile",
          },
          {
            label: `Notification`,
            link: `/user/notification`,
          },
        ]}
      />

      <div style={containerStyle}>
        <h1
          style={{
            margin: "2rem 0",
            fontFamily: "serif",
          }}
        >
          User Notifications
        </h1>
        <Space direction="vertical">
          {notifications.map((notification, index) => (
            <Alert
              key={index}
              message={notification.message}
              description={notification.description}
              // type={notification.type }
              type={notification.type}
              showIcon
            />
          ))}
          {notifications.length > 0 && (
            <Button type="primary" onClick={clearNotifications}>
              Clear Notifications
            </Button>
          )}
        </Space>
      </div>
    </>
  );
};

export default UserNotificationsPage;
