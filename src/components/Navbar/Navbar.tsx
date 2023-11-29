"use client";
// import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import SideBar from "./SideDrawer";
import { getUserInfo } from "@/utils/local.storeage";
import Logo from "../ui/Logo";
import UserAvatar from "../ui/UserAvatar";
import { sidebarItems } from "../constant/SidebarItems";
import dynamic from "next/dynamic";
const { Header } = Layout;

const Navbar = () => {
  const user = getUserInfo() as any;

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  // console.log(user);
  return (
    <div>
      <Header className="bg-white text-black shadow-xl lg:px-2 px-1 flex justify-between">
        <section className="flex items-center gap-2">
          <div className="flex lg:hidden">
            {isClient && <SideBar />}
          </div>
          <Logo />
        </section>
        <Menu
          mode="horizontal"
          className="hidden lg:flex"
          disabledOverflow
          items={sidebarItems("nav")}
        />
        {isClient && user?.role ? (
          <UserAvatar userId={user?.id} />
        ) : (
          <section className="px-2 text-black">
            <Link href="/login" className="font-semibold text-primary">
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

export default Navbar;
