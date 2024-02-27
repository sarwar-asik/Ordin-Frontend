"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

import { getUserInfo } from "@/utils/local.storeage";
import { sidebarItems } from "../constant/SidebarItems";
import Link from "next/link";

const { Sider } = Layout;

const SideBarDashBoard = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: any;
}) => {
  const { role } = getUserInfo() as any;
  // console.log(role,"role of user");

  return (
    <Sider
      // collapsible
      className="bg-[#F3F4F6]  bg-blue-5 min-h-screen"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      style={{
        overflow: "auto",
        // height: "110vh",
        minHeight: "100vh",
        position: "static",
        // position: "relative",
        zIndex: 40,
        left: 0,
        top: 0,
        bottom: 0,
        padding: "10px 0 0 0",
        // width: "70vw",
        // background: "red",
        // background:"",
      }}
    >
      {/* <svg
        className="absolute inset-0 w-full min-h-screen text-white"
        // style="filter: drop-shadow(10px 0 10px #00000030)"
        preserveAspectRatio="none"
        viewBox="0 0 309 800"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
        />
      </svg> */}
      <Link
        href={`/${role}`}
        className={`font-semibold font-serif text-primary  text-center px-2 ${collapsed ? "text-[0.7rem]" : "text-[1.4rem]"
          }  h-[4rem]`}
      // style={{
      //   color: "white",
      //   fontSize: "1rem",
      //   textAlign: "center",
      //   fontFamily: "serif",
      //   marginBottom: "1rem",
      //   marginTop: "10px",
      // }}
      >

      </Link>

      <Menu

        // theme="light"
        className="bg-[#F3F4F6]  bg-blue-5  lg:mt-4"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBarDashBoard;
