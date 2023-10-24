"use client";
// import dynamic from "next/dynamic";
import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import SideBar from "./SideDrawer";
import { getUserInfo } from "@/utils/local.storeage";
import Logo from "../ui/Logo";
import UserAvatar from "../ui/UserAvatar";
import { sidebarItems } from "../constant/SidebarItems";
const { Header } = Layout;

const Navbar = () => {
  const user = getUserInfo() as any;

  // console.log(user);
  return (
    <div>
      <Header className="bg-white text-black shadow-xl lg:px-2 px-1 flex justify-between">
        <div className="flex items-center gap-2">
          <section className="flex lg:hidden">
            <SideBar></SideBar>
          </section>
          <Logo />
        </div>
        <Menu
          // theme="dark"
          mode="horizontal"
          className="hidden lg:flex"
          disabledOverflow
          items={sidebarItems("nav")}
        ></Menu>

        {user?.role ? (
          <UserAvatar userId={user?.id} />
        ) : (
          <section className="px-2 text-black">
            <Link className="font-semibold" href="/login">
              Login
            </Link>
          </section>
        )}
      </Header>
    </div>
  );
};

// export default dynamic(() => Promise.resolve(Navbar), {
//   ssr: false,
// });

export default Navbar
