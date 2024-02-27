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
      className="bg-secondary "
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      style={{
        overflow: "auto",
        height: "110vh",
        position: "sticky",
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
        className="bg-secondary  lg:mt-4"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBarDashBoard;
