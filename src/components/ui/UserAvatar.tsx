"use client";
import { authKey } from "@/constant/storageKey";
import { useCartsQuery } from "@/redux/api/cartApi";
import { useSingleUserQuery } from "@/redux/api/userAPi";
import { removeUserInfo } from "@/utils/local.storeage";
import {
  AlertOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  MenuProps,
  Space,
  message,
} from "antd";
import Link from "next/link";
import React from "react";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Badge count={3} size="small">
        <Link href="/user/notification" className="text-md">
        notification <AlertOutlined /> 
        </Link>
      </Badge>
    ),
  },
  {
    key: "2",
    label: <Link href="/profile">Profile</Link>,
  },
  
  {
    key: "3",
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
  const { data: cartData, isLoading } = useCartsQuery({ page: 1 });
  const cartDataLength = cartData?.carts?.length || 0;
  // console.log("🚀 ~ file: UserAvatar.tsx:42 ~ UserAvatar ~ cartData:", cartData)

  return (
    <section style={{ display: "flex", alignItems: "center", gap: "1.5em" }}>
      <Badge count={cartDataLength} status="success">
        <Link
          // hidden={userData?.role === "user" ? false : true}
          className="text-2xl"
          href="/user/cart"
        >
          <ShoppingCartOutlined />
        </Link>
      </Badge>

      <Dropdown
        overlayStyle={{
          padding: "10px 0",
        }}
        menu={{ items }}
        placement="bottomLeft"
        arrow
      >
        <Space wrap size={16}>
          <Avatar size="large" src={userData?.img} icon={<UserOutlined />} />
        </Space>
      </Dropdown>
    </section>
  );
};

export default UserAvatar;
