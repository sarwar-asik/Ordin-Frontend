"use client";
import dynamic from "next/dynamic";
import React from "react";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  message,
  theme,
} from "antd";
import Link from "next/link";
import SideBar from "./SideDrawer";
import { getUserInfo, removeUserInfo } from "@/utils/local.storeage";
import { Avatar, Space } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { authKey } from "@/constant/storageKey";
import Logo from "../ui/Logo";
import { useSingleUserQuery } from "@/redux/api/userAPi";
import UserAvatar from "../ui/UserAvatar";

const { Header } = Layout;

const menuItems: { key: string; label: any; icon: any; href: string }[] = [
  { key: "1", label: "Home", icon: <UserOutlined />, href: "/" },
  { key: "2", label: "Service", icon: <UserOutlined />, href: "/services" },
  { key: "3", label: "About", icon: <UserOutlined />, href: "/about-us" },
  // { key: "4", label: "signUp", href: "/sign-up" },
  // { key: "5", label: "Login", href: "/login" },
];

const Navbar = () => {
  const user = getUserInfo() as any;

  // console.log(user);
  return (
    <div>
      <Header className="bg-white text-black shadow-xl flex justify-between">
        <div className="flex items-center gap-2">
          <section className="flex lg:hidden">
            <SideBar items={menuItems}></SideBar>
          </section>
          <Logo />
        </div>
        <Menu
          // theme="dark"
          mode="horizontal"
          className="hidden lg:flex"
          disabledOverflow
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>

        {user?.role ? (
          <UserAvatar userId={user?.id} />
        ) : (
          <section>
            <Link href="/login">Login</Link>
          </section>
        )}
      </Header>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
});
