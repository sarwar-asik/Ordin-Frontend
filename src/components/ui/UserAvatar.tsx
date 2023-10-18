"use client";
import { authKey } from "@/constant/storageKey";
import { useSingleUserQuery } from "@/redux/api/userAPi";
import { removeUserInfo } from "@/utils/local.storeage";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Space, message } from "antd";
import Link from "next/link";
import React from "react";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/profile">Profile</Link>,
  },
  {
    key: "2",
    label: (
      <Button
        onClick={() => {
          removeUserInfo(authKey);
          message.error("Logout Successfully");
        }}
        type="primary"
        danger
      >
        Logout
      </Button>
    ),
  },
];
const UserAvatar = ({ userId }: { userId: string }) => {
  const { data: userData } = useSingleUserQuery(userId);

  return (
    <section style={{ display: "flex", alignItems: "center", gap: "1.3em" }}>
      <Link
        hidden={userData?.role === "user" ? false : true}
        className="text-2xl"
        href="/user/cart"
      >
        <ShoppingCartOutlined />
      </Link>

      <Dropdown overlayStyle={{
        padding:"10px 0",

      }} menu={{ items }} placement="bottomLeft" arrow>
        <Space wrap size={16}>
          <Avatar size="large" src={userData?.img} icon={<UserOutlined />} />
        </Space>
      </Dropdown>
    </section>
  );
};

export default UserAvatar;
