import React from "react";

import Link from "next/link";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Space,
  message,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/utils/local.storeage";
import { authKey } from "@/constant/storageKey";
import Logo from "../ui/Logo";
import UserAvatar from "../ui/UserAvatar";
const { Header } = Layout;

const DashNavBar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: any;
}) => {
  const userInfo = getUserInfo() as any;

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#000000",
        backgroundColor: "#ffffff",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        paddingInline: "3px",
      }}
    >
      <section style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />

        <Logo></Logo>
      </section>
      {/* <Menu mode="horizontal" className="hidden lg:flex" disabledOverflow>
        <Menu.Item key="item-1">
          <UserAvatar userId={userInfo?.id} />
        </Menu.Item>
      </Menu> */}
      <section style={{
        display:"flex",
        alignItems:"center",
        gap:"5px"
      }}>
        <Link hidden={userInfo?.role ==="user"?false:true} style={{fontSize:"2rem"}} href="/user/cart">
          <ShoppingCartOutlined />
        </Link>
        <UserAvatar userId={userInfo?.id} />
      </section>
    </Header>
  );
};

export default DashNavBar;
