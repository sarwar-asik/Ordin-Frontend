"use client";
import dynamic from "next/dynamic";
import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import SideBar from "./SideDrawer";
import { getUserInfo } from "@/utils/local.storeage";

import { HomeOutlined, InsertRowLeftOutlined, ShoppingCartOutlined, SnippetsOutlined, UserOutlined } from "@ant-design/icons";

import Logo from "../ui/Logo";

import UserAvatar from "../ui/UserAvatar";
import DropDownMenuUI from "../ui/DropDown/DropDownMenu";
import serviceItems from "../ui/DropDown/DropDownServiceItems";

const { Header } = Layout;

const menuItems: { key: string; label: any; icon: any; href: string }[] = [
  { key: "1", label: "Home", icon: <HomeOutlined/>, href: "/" },
  { key: "2", label: <DropDownMenuUI name="service" items={serviceItems}/>, icon: <InsertRowLeftOutlined />, href: "/services" },
  { key: "3", label: "About", icon: <UserOutlined />, href: "/about-us" },
  { key: "4", label: "Blogs", icon: <SnippetsOutlined/>, href: "/blogs" },
  // { key: "4", label: "signUp", href: "/sign-up" },
  // { key: "5", label: "Login", href: "/login" },
];

const Navbar = () => {
  const user = getUserInfo() as any;

  // console.log(user);
  return (
    <div>
      <Header className="bg-white text-black shadow-xl lg:px-2 px-1 flex justify-between">
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
          <section className="px-2 text-black">
            <Link className="font-semibold" href="/login">Login</Link>
          </section>
        )}
      </Header>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
});
