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
import { UserOutlined } from "@ant-design/icons";
import { authKey } from "@/constant/storageKey";

const { Header } = Layout;

const menuItems: { key: string; label: string; href: string }[] = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Services", href: "/services" },
  { key: "3", label: "About", href: "/about-us" },
  // { key: "4", label: "signUp", href: "/sign-up" },
  // { key: "5", label: "Login", href: "/login" },
];

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/profile">profile</Link>,
    },
    {
      key: "2",
      label: (
        <Button onClick={()=>{
          removeUserInfo(authKey)
          message.error("Logout Successfully")

        }} type="primary" danger>
          Logout
        </Button>
      ),
    },
  ];
  const user = getUserInfo() as any;
  console.log(user);
  return (
    <div>
      <Header className="bg-white text-black shadow-xl flex justify-between">
        <div className="flex items-center gap-2">
          <section className="flex lg:hidden">
            <SideBar items={menuItems}></SideBar>
          </section>
          <Link
            href="/"
            className="demo-logo font-extrabold font-serif mt-1 text-[2rem] text-primary "
          >
            Ordin
          </Link>
        </div>
        <Menu
          // theme="dark"
          mode="horizontal"
          className="hidden lg:flex"
          disabledOverflow
          //   defaultSelectedKeys={["2"]}
          // items={new Array(15).fill(null).map((_, index) => {
          //   const key = index + 1;
          //   return {
          //     key,
          //     label: `nav ${key}`,
          //   };
          // })}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>

        {user?.role ? (
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Dropdown>
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
