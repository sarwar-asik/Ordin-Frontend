"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import SideBar from "./SideDrawer";

const { Header, Content, Footer } = Layout;

const menuItems: { key: string; label: string; href: string }[] = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Services", href: "/services" },
  { key: "3", label: "About", href: "/about-us" },
  { key: "4", label: "signUp", href: "/sign-up" },
];

const Navbar = () => {
  return (
    <div>
      <Header className="bg-white text-black shadow-xl flex justify-between">
        <div>
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
            <Menu.Item  key={item.key}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}


          {/* <Menu.Item>Home</Menu.Item>
            <Menu.Item>Home</Menu.Item> */}
        </Menu>

        <section className="flex lg:hidden">
            <SideBar items={menuItems}></SideBar>
        </section>
      </Header>
    </div>
  );
};

export default Navbar;
