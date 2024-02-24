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
    <div className="bg-transparent   backdrop-blur-sm py-3  text-black shadow-xl lg:px-5 px-3 sticky -top-[0rem]  lg:-top-[0.2rem] z-40">
      <div className="bg-whit   flex justify-between container mx-auto">
        <div className="flex lg:hidden">
          {isClient && <SideBar />}
        </div>
        <section className="flex items-center gap-2">
          <Logo />
        </section>
        <Menu
          mode="horizontal"
          className="hidden lg:flex bg-transparent  backdrop-blur-s border-none text-slate-800 font-[500] text-[16px]"
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

      </div>
    </div>
  );
};

// export default dynamic(() => Promise.resolve(Navbar), {
//   ssr: false,
// });

export default Navbar;
